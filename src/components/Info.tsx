import { Link } from "react-router-dom";
import type { CountryMinProps, CountryProps } from "../requests/countries";

type Props = {
	country: CountryProps;
	neighbors: CountryMinProps[];
};

export default function Info({ country, neighbors }: Props) {
	return (
		<article className="country-details">
			<img src={country.flags.png} alt={country.flags.alt} />
			<h2>{country.name.official}</h2>
			<section className="detailed-description-main">
				<p>
					<span>Native Names: </span>
					{Object.values(country.name.nativeName)
						.map((name) => name.official)
						.join(", ")}
				</p>
				<p>
					<span>Population: </span>
					{country.population}
				</p>
				<p>
					<span>Region: </span>
					{country.region}
				</p>
				<p>
					<span>Sub Region: </span>
					{country.subregion}
				</p>
				<p>
					<span>Capital: </span>
					{country.capital}
				</p>
			</section>

			<section className="detailed-description-extra">
				<p>
					<span>Top Level Domains: </span>
					{country.tld.join(", ")}
				</p>
				<p>
					<span>Currencies: </span>
					{Object.values(country.currencies)
						.map((cur) => cur.name)
						.join(", ")}
				</p>
				<p>
					<span>Languages: </span>
					{Object.values(country.languages).join(", ")}
				</p>
			</section>
			{ (neighbors.length || null) &&
			<section className="neighbors">
				<span>Border Countries: </span>
				{neighbors.map((country) => {
					return (
						<Link
							key={country.name.official}
							to={`/country/${country.name.official}`}
							className="nav-button"
						>
							{country.name.official}
						</Link>
					);
				})}
			</section>
			}
		</article>
	);
}
