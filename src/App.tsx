/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect } from "react";
import {
	Link,
	Outlet,
	ScrollRestoration,
	useNavigation,
} from "react-router-dom";
import Crescent from "../public/crescent.svg?react";
import Sun from "../public/sun.svg?react";
import Loading from "./components/Loading";

function App() {
	const [theme, setTheme] = React.useState(
		localStorage.getItem("theme") || "light",
	);
	const navigation = useNavigation();

	function handleTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		localStorage.setItem("theme", newTheme);
		document
			.querySelector("html")
			?.setAttribute("style", `color-scheme: ${newTheme}`);
		setTheme(newTheme);
	}

	useEffect(() => {
		setTheme(localStorage.getItem("theme") || "light");
	}, []);

	return (
		<div className={`container ${theme}`}>
			<header className="header el">
				<h1>
					<Link className="link" to="/">
						Where is the world?
					</Link>
				</h1>
				<button type="button" className="button theme" onClick={handleTheme}>
					{theme === "dark" ? (
						<Sun width={30} height={30} />
					) : (
						<Crescent width={30} height={30} />
					)}
					<span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
				</button>
			</header>
			<Outlet />
			{navigation.state === "loading" ? <Loading /> : null}
			<ScrollRestoration />
		</div>
	);
}
export default App;
