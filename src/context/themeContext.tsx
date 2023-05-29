import React from 'react'
import { useState } from 'react'

interface ContextProps{
	children: React.ReactElement
}

type theme = 'light'|'dark'
interface themeContext{
	theme:theme;
	setTheme:React.Dispatch<React.SetStateAction<theme>>
}

export const ThemeContext = React.createContext<themeContext>(null)

const ThemeProvider = function({children}:ContextProps){
	const [theme, setTheme] = useState<theme>('light')
	const value = {
		theme,
		setTheme,
	}
	const getTheme = function():theme {
		return (localStorage.getItem('theme') || 'light') as theme
	}

	React.useEffect(() => {
		setTheme(getTheme || 'light')
		document.querySelector('html').setAttribute('style', 'color-scheme: ' + getTheme())
	}, [])
	
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider