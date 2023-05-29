import React from 'react'
import { ThemeContext } from '../context/themeContext'
import CountryCard from '../components/CountryCard'
import { CountryCardProps } from '../@types/custom'
import Filters from '../components/Filters'

const Home = function({countries}:{countries:CountryCardProps[]}) {
	const {theme} = React.useContext(ThemeContext)
	const [filtered, setFiltered] = React.useState(countries)

	
	return (
		<div className={`home ${theme}-bg`}>
			
			<Filters theme={theme} countries={countries} setFiltered={setFiltered}/>

			<div className='country-grid'>
				{filtered.map(country => {
					return (
						<CountryCard key = {country.name.official} theme={theme} {...country}/>
					)
				})}
			</div>
		</div>
	)
}

export default Home