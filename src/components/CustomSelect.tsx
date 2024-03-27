import React from "react";

type props = {
	values: string[];
	value: string;
	onChange: (a: string) => void;
	className: string;
	placeholder?: string;
};

export default function CustomSelect(props: props) {
	const values = [props.placeholder || "Set Value", ...props.values];
	const [selected, setSelected] = React.useState(values.indexOf(props.value));
	const ref = React.useRef<HTMLButtonElement>(null);

	function handleKeys(e: React.KeyboardEvent) {
		if (ref.current !== document.activeElement) return;
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setSelected((values.length + selected + 1) % values.length);
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			setSelected((values.length + selected - 1) % values.length);
		}
		if (e.key === "Enter" || e.key === "Space") {
			e.preventDefault();
			ref.current?.blur();
			props.onChange(selected === 0 ? "" : values[selected]);
		}
	}

	return (
		<div className={`customselect-container ${props.className}`}>
			<button
				type="button"
				className="button customselect-selected"
				onBlur={() => setSelected(0)}
				onKeyDown={handleKeys}
				ref={ref}
			>
				{props.value || props.placeholder || "Select value"}
			</button>
			<div className="customselect-options bg">
				{values.map((value, idx) => {
					return (
						<button
							tabIndex={-1}
							type="button"
							className={`button ${idx === selected ? "hover" : ""}`}
							key={value}
							onClick={(e) => {
								e.currentTarget.blur();
								props.onChange(idx === 0 ? "" : value);
							}}
						>
							{value}
						</button>
					);
				})}
			</div>
		</div>
	);
}
