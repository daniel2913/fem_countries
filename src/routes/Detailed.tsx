import { useLoaderData, useNavigate } from "react-router-dom";
import Info from "../components/Info";
import type { CountryMinProps, CountryProps } from "../requests/countries";

export default function Detailed() {
	const { country, neighbors } = useLoaderData() as {
		country: CountryProps;
		neighbors: CountryMinProps[];
	};
	const navigate = useNavigate();
	return (
		<div className="detail">
			<button
				type="button"
				onClick={() => navigate(-1)}
				className="button navbutton"
			>
				Back
			</button>
			<Info country={country} neighbors={neighbors} />
		</div>
	);
}
