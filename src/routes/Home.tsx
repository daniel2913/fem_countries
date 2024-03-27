import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import type { CountryCardProps } from "src/requests/countries";
import CountryCard from "../components/CountryCard";
import Filters from "../components/Filters";

export default function Home() {
	const countries = useLoaderData() as CountryCardProps[];
	const [filtered, setFiltered] = React.useState(countries);
	const [params] = useSearchParams();
	React.useEffect(() => {
		const filter = params.get("name");
		setFiltered(
			countries.filter(
				(c) =>
					!filter ||
					c.name.common.toLowerCase().includes(filter) ||
					c.name.official.toLowerCase().includes(filter),
			),
		);
	}, [params, countries]);
	return (
		<main className="home-grid bg">
			<Filters />
			{filtered.map((country) => (
				<CountryCard key={country.name.official} {...country} />
			))}
		</main>
	);
}
