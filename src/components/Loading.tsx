import Spinner from "../../public/loading.svg?react";

export default function Loading() {
	return (
		<div className="loading">
			<Spinner width={60} height={60} />
		</div>
	);
}
