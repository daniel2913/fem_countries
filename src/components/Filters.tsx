import React from "react";
import { useSearchParams } from "react-router-dom";
import { regions } from "../requests/countries";
import CustomSelect from "./CustomSelect";

const Filters = React.memo(function Filters() {
	const [searchParams, setSearchParams] = useSearchParams();
	const ref = React.useRef<HTMLInputElement>(null);

	const onRegionChange = React.useCallback(
		(region: string) => {
			setSearchParams(
				(params) => {
					const res: Record<string, string> = {};
					if (region) res.region = region;
					if (params.get("name")) res.name = params.get("name") || "";
					return res;
				},
				{ replace: true },
			);
		},
		[setSearchParams],
	);

	function onNameChange(name: string) {
		setSearchParams(
			(params) => {
				const res: Record<string, string> = {};
				if (name) res.name = name;
				if (params.get("region")) res.region = params.get("region") || "";
				return res;
			},
			{
				replace: true,
			},
		);
	}

	return (
		<div className="filter">
			<input
				ref={ref}
				onKeyDown={(e) => {
					if (e.key === "Escape") ref.current?.blur();
				}}
				type="search"
				placeholder="Search"
				className="search"
				value={searchParams.get("name") || ""}
				onChange={(e) => onNameChange(e.currentTarget.value)}
			/>
			<CustomSelect
				value={searchParams.get("region") || ""}
				placeholder={"Set Region"}
				className="filter-select"
				onChange={onRegionChange}
				values={regions}
			/>
		</div>
	);
});

export default Filters;
