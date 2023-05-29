import './styles/index.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './context/themeContext'
import App from './App'
import {  BrowserRouter} from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
	<ThemeProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</ThemeProvider>
)