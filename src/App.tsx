import React, { useEffect } from "react"
import { Link, Outlet, ScrollRestoration, useNavigation } from "react-router-dom"
import Loading from "./components/Loading"
import Crescent from "../public/crescent.svg"
import Sun from "../public/sun.svg"

function App() {
	const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light")
	const navigation = useNavigation()

	function handleTheme() {
		const newTheme = theme === "light" ? "dark" : "light"
		setTheme(newTheme)
		localStorage.setItem("theme", newTheme)
		document.querySelector("html").setAttribute("style", `color-scheme: ${newTheme}`)
	}

	useEffect(()=>{
		setTheme(localStorage.getItem("theme"))
	},[])

	return (
		<div className={`container ${theme}`}>
			<header className="header el">
				<h1><Link className="link" to="/">Where is the world?</Link></h1>
				<button
					type="button"
					className="button theme" onClick={handleTheme}
				>
					{theme === "dark" ? <Sun /> : <Crescent />}
					<span>Dark Mode</span>
				</button>
			</header>
			<Outlet />
			{navigation.state === "loading" ? <Loading /> : null}
			<ScrollRestoration />
		</div>
	)
}
export default App
