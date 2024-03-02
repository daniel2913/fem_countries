import React from 'react'
import CountryCard from '../components/CountryCard'
import { CountryCardProps } from '../@types/custom'
import Filters from '../components/Filters'
import { useLoaderData, useSearchParams } from 'react-router-dom'

export default function Home() {
	const countries = useLoaderData() as CountryCardProps[]
	const [filtered, setFiltered] = React.useState(countries)
	const [params] = useSearchParams()
	const [_, startTransition] = React.useTransition()
	React.useEffect(() =>
		startTransition(() => {
			const filter = params.get("name")
			setFiltered(countries.filter(c => 
			!filter ||
				c.name.common.toLowerCase().includes(filter) ||
				c.name.official.toLowerCase().includes(filter)
		))
		}), [params,countries])
	return (
		<main className="home-grid bg">
			<Filters />
			{filtered.map(country =>
				<CountryCard key={country.name.official} {...country} />
			)}
		</main>
	)
}

