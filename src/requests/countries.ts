import axios from "axios";

export interface CountryName {
	common: string;
	official: string;
	nativeName: {
		[key: string]: {
			official: string;
			common: string;
		};
	};
}

export type CountryMinProps = {
	name: CountryName;
};

export interface CountryCardProps extends CountryMinProps {
	population: number;
	region: string;
	capital: string[];
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
}

export interface CountryProps extends CountryCardProps {
	subregion: string;
	borders: string[];
	tld: string[];
	currencies: {
		[key: string]: {
			name: string;
		};
	};
	languages: {
		[key: string]: string;
	};
}
const MODES = {
	short: "?fields=name,population,region,capital,flags",
	full: "?fields=name,population,region,subregion,capital,borders,languages,currencies,tld,flags",
};

const instance = axios.create({
	baseURL: "https://restcountries.com/v3.1",
	timeout: 15000,
});

const CountriesRequests = {
	get: (url: string) => instance.get(url).then((r) => r.data),
};

const countriesCache: CountryCardProps[] = [];
const regionCache: Record<string, CountryCardProps[]> = {};
export const regions = [
	"africa",
	"americas",
	"asia",
	"europe",
	"oceania",
	"antarctic",
];

export const countryRequests = {
	async getAllCountries(): Promise<CountryCardProps[]> {
		await Promise.all(
			regions
				.filter((region) => !(region in regionCache))
				.map((region) =>
					CountriesRequests.get(`/region/${region}/${MODES.short}`).then(
						(r) => {
							regionCache[region] = r;
							countriesCache.push(...r);
						},
					),
				),
		);
		return countriesCache;
	},

	getCountryByName: (name: string): Promise<CountryProps[]> =>
		CountriesRequests.get(`/name/${name}${MODES.full}`),

	getCountriesByCodes: (codes: string[]): Promise<CountryMinProps[]> =>
		CountriesRequests.get(`/alpha?codes=${codes.join(",")}&fields=name`),

	async searchCountries(region: string): Promise<CountryCardProps[]> {
		if (!regions.includes(region.toLowerCase())) throw "Not Found";
		if (regionCache[region]) return Promise.resolve(regionCache[region]);
		const regionCountries: CountryCardProps[] = await CountriesRequests.get(
			`/region/${region}/${MODES.short}`,
		);
		regionCache[region] = regionCountries;
		countriesCache.push(...regionCountries);
		return regionCountries;
	},
};
