import React from 'react'
import { ThemeContext } from './context/themeContext'
import { Route, Routes } from 'react-router-dom'
import { CountryCardProps } from './@types/custom'
import { Countries } from './requests/countries'
import Home from './routes/Home'
import Detail from './routes/Detailed'
import Loading from './components/Loading'

const App = function(){
	const {theme, setTheme} = React.useContext(ThemeContext)
	const [countries, setCountries] = React.useState<CountryCardProps[]>([])
	const [loading, setLoading] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (! countries.length){
			setLoading(true)
			Countries.getAllCountries().then(data => { setCountries(data) })
		}
		else setLoading(false)
	}, [countries.length])
		
	const body = loading
		? <Loading/>
		: (<Routes>
			<Route path='/' element={<Home countries={countries}/>}/>
			<Route path='/country/:name' element={<Detail/>}/>
		</Routes>)

	const handleTheme = function(){
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
		document.querySelector('html').setAttribute('style', 'color-scheme: ' + newTheme)
	}

	return (
		<>
			<div className={`container ${theme}-bg`}>
				<header className={`header ${theme}-el`}>
					<h1>Where is the world?</h1>
					<button className={`theme-selector ${theme}-el`} onClick={handleTheme}>
						<svg className='crescent' fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
							width="20px" height="20px" viewBox="0 0 292.299 292.299"
							xmlSpace="preserve">
							<g>
								<g>
									<path d="M153.699,292.138C68.95,292.138,0,223.185,0,138.439C0,79.742,32.675,27.002,85.28,0.807
								c2.369-1.174,5.215-0.718,7.077,1.144c1.864,1.864,2.345,4.711,1.183,7.074C83.941,28.527,79.077,49.496,79.077,71.33
								c0,77.972,63.432,141.407,141.395,141.407c22.08,0,43.247-4.978,62.942-14.777c2.366-1.177,5.213-0.721,7.074,1.141
								c1.873,1.867,2.342,4.714,1.177,7.073C265.61,259.195,212.738,292.138,153.699,292.138z"/>
								</g>
							</g>
						</svg>
						<span>Dark Mode</span>
					</button>
				</header>
				<main>
					{body}
				</main>
			</div>
		</>
		
	)
}

export default App