import React from 'react'

type props = {
	values: string[],
	defaultValue?:string
	onChange: (a: string) => void,
	className:string
}

export default function CustomSelect(props: props) {
	const [selected, setSelected] = React.useState(0)
	const [value,setValue] = React.useState(props.values.includes(props.defaultValue) ? props.defaultValue : props.values[0])
	const ref = React.useRef<HTMLButtonElement>(null)

	function handleKeys(e: React.KeyboardEvent) {
		if (ref.current !== document.activeElement) return
		if (e.key === "ArrowDown") {
			e.preventDefault()
			setSelected((props.values.length + selected + 1) % props.values.length)
		}
		if (e.key === "ArrowUp") {
			e.preventDefault()
			setSelected((props.values.length + selected - 1) % props.values.length)
		}
		if (e.key === "Enter" || e.key === "Space") {
			e.preventDefault()
			ref.current.blur()
			setValue(props.values[selected])
		}
	}

	React.useEffect(()=>props.onChange(value),[value,props.onChange])

	return (
		<div
			className={`customselect-container ${props.className}`}
		>
			<button
				type='button'
				className="button customselect-selected"
				onBlur={() => setSelected(0)}
				onKeyDown={handleKeys}
				ref={ref}
			>
				{value}
			</button>
			<div
				className="customselect-options bg"
			>
				{props.values.map((value, idx) => {
					return (
						<button
							tabIndex={-1}
							type='button'
							className={`button ${idx === selected ? "hover" : ""}`}
							key={value}
							onClick={(e) => { e.currentTarget.blur(); setValue(value)}}
						>
							{value}
						</button>
					)
				})}
			</div>
		</div>
	)
}
