import React from 'react'
import { Link} from 'react-router-dom'
import { CountryMinProps, CountryProps } from '../@types/custom'
import { Countries } from '../requests/countries'


function getNativeNames(country:CountryProps):string[]{
	return Object.values(country.name.nativeName).map(name => name.official)
}

function getCurrencies(country:CountryProps):string[]{
	return Object.values(country.currencies).map(cur => cur.name)
}

function getLanguages(country:CountryProps):string[]{
	return Object.values(country.languages)
}

function Info(country:CountryProps) {
	const [neighbors, setNeighbors] = React.useState<CountryMinProps[]>([])

	React.useEffect(() => {
		if (country.borders.length > 0){
			Countries.getCountryByCode(country.borders).then(data => setNeighbors(data))
		}
	}, [country.borders])

	return (
		<article className="country-details">
			<img src={country.flags.png} alt={country.flags.alt}/>
			<h2>{country.name.official}</h2>
			<div className='detailed-description-main'>
				<p><span>Native Names: </span>{getNativeNames(country).join(', ')}</p>
				<p><span>Population: </span>{country.population}</p>
				<p><span>Region: </span>{country.region}</p>
				<p><span>Sub Region: </span>{country.subregion}</p>
				<p><span>Capital: </span>{country.capital}</p>
			</div>

			<div className="detailed-description-extra">
				<p><span>Top Level Domains: </span>{country.tld.join(', ')}</p>
				<p><span>Currencies: </span>{getCurrencies(country).join(', ')}</p>
				<p><span>Languages: </span>{getLanguages(country).join(', ')}</p>
			</div>

			<div className='neighbors'>
				<span>Border Countries: </span>
				{neighbors.map(country => {
					return (
						<Link key={country.name.official} to={`/${country.name.official}`} className="nav-button">{country.name.common}</Link>
					)
				})}
			</div>
		</article>
	)
			

}

export default Info
