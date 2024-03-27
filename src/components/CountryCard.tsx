import { Link } from "react-router-dom";
import type { CountryCardProps } from "src/requests/countries";

export default function CountryCard({
	name,
	population,
	region,
	capital,
	flags,
}: CountryCardProps) {
	return (
		<article className="country-card">
			<Link to={`/country/${name.official}`}>
				<img loading="lazy" src={flags.png} alt={flags.alt} />
				<div className="description">
					<h2 className="country-name">{name.official}</h2>
					<p>
						<span>Population: </span>
						{population}
					</p>
					<p>
						<span>Region: </span>
						{region}
					</p>
					<p>
						<span>Capital: </span>
						{capital.join(", ")}
					</p>
				</div>
			</Link>
		</article>
	);
}
