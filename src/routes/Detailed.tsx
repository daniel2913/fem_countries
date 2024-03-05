import React, {useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CountryProps } from '../@types/custom'
import { Countries } from '../requests/countries'
import Info from '../components/Info'

export function Component() {
	const location = useLocation()
	const [country, setCountry] = React.useState<CountryProps>(null)
	const navigate = useNavigate()

	useEffect(() => {
		Countries.getCountryByName(location.pathname.split('/').pop())
			.then(data => {
				setCountry(data[0]) })
	}, [location.pathname])

	if (country) 
	return (
		<div className="detail">
			<button 
				type='button'
				onClick={()=>navigate(-1)}
				className="button navbutton"
			>
				Back
			</button>
			<Info {...country} />
		</div>
	)
	return <></>
}
