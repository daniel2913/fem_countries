import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'
import { CountryMinProps, CountryName, CountryProps } from '../@types/custom'
import { Countries } from '../requests/countries'


const getNativeNames = function(country:CountryProps):string[]{
	return Object.values(country.name.nativeName).map(name => name.official)
}

const getCurrencies = function(country:CountryProps):string[]{
	return Object.values(country.currencies).map(cur => cur.name)
}

const getLanguages = function(country:CountryProps):string[]{
	return Object.values(country.languages)
}

const Info = function(country:CountryProps) {
	const {theme} = useContext(ThemeContext)
	const [neighbors, setNeighbors] = React.useState<CountryMinProps[]>([])

	useEffect(() => {
		if (country.borders.length > 0){
			Countries.getCountryByCode(country.borders).then(data => setNeighbors(data))
		}
	}, [country.borders])

	return (
		<article className={`country-details ${theme}-el`}>
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
						<Link to={'/country/' + country.name.common} className={`nav-button ${theme}-el`}>{country.name.common}</Link>
					)
				})}
			</div>
		</article>
	)
			

}

export default Info