import React from 'react'
import CustomSelect from './CustomSelect'
import { useSearchParams } from 'react-router-dom'

const regions = ['Filter by Region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic']

const Filters = React.memo(function Filters() {
	const [searchParams, setSearchParams] = useSearchParams()
	const [name,setName] = React.useState(searchParams.get("name")||"")
	const [region,setRegion] = React.useState(searchParams.get("region")||regions[0])
	const ref = React.useRef<HTMLInputElement>(null)

	React.useEffect(()=>
		setSearchParams(old => {
			if (name!==null) old.set("name",name)
			if (region) old.set("region",region === "Filter by Region" ? "" : region)
			return old
		})
	,[name,region,setSearchParams])

return (
	<div className="filter">
		<input
			ref={ref}
			onKeyDown={e=>{if(e.key==="Escape") ref.current.blur()}}
			type="search"
			placeholder='Search'
			className="search"
			value={name}
			onChange={(e) => setName(e.currentTarget.value)}
		/>
		<CustomSelect
			defaultValue={region}
			className="filter-select"
			onChange={setRegion}
			values={regions}
		/>
	</div>
)
})

export default Filters
