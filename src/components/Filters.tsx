import React from 'react'
import { CountryCardProps } from 'src/@types/custom'
import CustomSelect from './CustomSelect'


type props = {
	countries:CountryCardProps[],
	setFiltered: (a:CountryCardProps[])=>void,
	theme: string
}

const Filters = function({countries, setFiltered, theme}:props) {
	const [search, setSearch] = React.useState('')
	const [region, setRegion] = React.useState('Filter by Region')
	const regions = ['Filter by Region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic']

	const filter = function(){
		console.log('filtered')
		setFiltered(countries?.filter(country => {
			return (((! search || country.name.common.toLowerCase().includes(search.toLowerCase()))
			|| (! search || country.name.official.toLowerCase().includes(search.toLowerCase())))
			&& ( region === 'Filter by Region' || country.region === region)
			)
		}))
	}

	React.useEffect(filter, [search, region, countries, setFiltered])
	return (
		<div className='config'>
			<input className={`search-box ${theme}-el`} value={search} onChange={(e) => setSearch(e.target.value)}></input>
			<CustomSelect value={region} theme={theme} setValue={setRegion} values={regions}/>
		</div>
	)
}

export default Filters