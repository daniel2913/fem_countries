import axios from 'axios'
import { CountryProps, CountryCardProps, CountryMinProps } from '../@types/custom'

const MODES = {
	name: '?fields=name',
	short: '?fields=name,population,region,capital,flags',
	full: '?fields=name,population,region,subregion,capital,borders,languages,currencies,tld,flags'
}

const instance = axios.create({
	baseURL: 'https://restcountries.com/v3.1',
	timeout: 15000,
})

const responseBody = (response: axios.AxiosResponse) => response.data

const CountriesRequests = {
	get: (url: string) => instance.get<CountryCardProps>(url).then(responseBody)
}

export const Countries = {
	getAllCountries: () : Promise<CountryCardProps[]> => CountriesRequests.get('/all' + MODES.short),
	getCountryByName: (name:string): Promise<CountryProps[]> => CountriesRequests.get('/name/' + name + MODES.full),
	getCountryByCode: (codes:string[]): Promise<CountryMinProps[]> => CountriesRequests.get('/alpha?codes=' + codes.join(',') + ',' + MODES.name)
}
