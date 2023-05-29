import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'
import { CountryProps } from '../@types/custom'
import { Countries } from '../requests/countries'
import Info from '../components/Info'

const Detail = function() {
	const {theme} = useContext(ThemeContext)
	const location = useLocation()
	const [country, setCountry] = React.useState<CountryProps>(null)

	useEffect(() => {
		Countries.getCountryByName(location.pathname.split('/').pop())
			.then(data => {
				setCountry(data[0]) })
	}, [location.pathname])

	if (country) { console.log(country); return (
		<div className={`detail ${theme}-bg`}>
			<Link to={'/'} className={`nav-button ${theme}-el`}>
				Back</Link>
			<Info {...country} />
		</div>
	) }
	return <></>
}

export default Detail