import React from 'react'
import { Link } from 'react-router-dom'
import { CountryCardProps } from 'src/@types/custom'

type theme = {
	theme:string
}

const CountryCard = function({name, population, region, capital, flags, theme}:CountryCardProps&theme) {	
	return (
		<div className={`country-card ${theme}-el`}>
			<Link to={'country/' + name.common}>
				<img src={flags.png} alt={flags.alt}/>
				<div className='description'>
					<h2 className='country-name'>{name.official}</h2>
					<p><span>Population: </span>{population}</p>
					<p><span>Region: </span>{region}</p>
					<p><span>Capital: </span>{capital.join(', ')}</p>
				</div>
			</Link>
		</div>
	)
}

export default CountryCard