import React from 'react'

type props={
	values:string[],
	value: string,
	setValue: (a:string)=>void,
	theme: string,
}

const CustomSelect = function({values, value, setValue, theme}:props){
	console.log(theme)
	return (
		<button className={`custom-select-selected ${theme}-el`}>
			{value}
			<div className={`custom-select-options ${theme}-el`}>
				{values.map((value, i) => {
					return (
						<button className={`${theme}-el`} key={i} onClick={(e) => { e.currentTarget.blur(); setValue(value) }}>
							{value}
						</button>
					)
				})}
			</div>
		</button>
	)
}

export default CustomSelect