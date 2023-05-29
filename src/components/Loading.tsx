import React from 'react'
import { ThemeContext } from '../context/themeContext'

const Loading = function() {
	const {theme} = React.useContext(ThemeContext)

	return (
		<div className={`loading ${theme}-txt`}>
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  width="2rem"
				height="2rem" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
				<g id="Spinner_x5F_25_x25_">
					<g>
						<path fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" d="M50.188,26.812
			c12.806,0,23.188,10.381,23.188,23.188"/>
						<g>
							<circle cx="73.375" cy="50" r="1.959"/>
							<circle cx="72.029" cy="57.704" r="1.959"/>
							<circle cx="68.237" cy="64.579" r="1.959"/>
							<circle cx="62.324" cy="69.759" r="1.959"/>
							<circle cx="55.013" cy="72.699" r="1.959"/>
						</g>
						<g>
							<ellipse transform="matrix(0.9968 -0.0794 0.0794 0.9968 -4.0326 2.3121)" cx="27.045" cy="51.843" rx="1.959" ry="1.959"/>
							<ellipse transform="matrix(0.9968 -0.0794 0.0794 0.9968 -4.628 2.4912)" cx="28.998" cy="59.416" rx="1.959" ry="1.959"/>
							<ellipse transform="matrix(0.9968 -0.0794 0.0794 0.9968 -5.1348 2.8556)" cx="33.325" cy="65.967" rx="1.959" ry="1.959"/>
							<ellipse transform="matrix(0.9968 -0.0794 0.0794 0.9968 -5.4877 3.3713)" cx="39.63" cy="70.661" rx="1.959" ry="1.959"/>
							<ellipse transform="matrix(0.9968 -0.0794 0.0794 0.9968 -5.6506 3.9762)" cx="47.152" cy="73.012" rx="1.959" ry="1.959"/>
						</g>
						<g>
							<ellipse transform="matrix(0.9962 -0.0867 0.0867 0.9962 -3.713 2.567)" cx="27.71" cy="44.049" rx="1.959" ry="1.959"/>
							<ellipse transform="matrix(0.9962 -0.0867 0.0867 0.9962 -3.079 2.8158)" cx="30.892" cy="36.872" rx="1.959" ry="1.959"/>
							<ellipse transform="matrix(0.9962 -0.0867 0.0867 0.9962 -2.567 3.266)" cx="36.334" cy="31.199" rx="1.959" ry="1.959"/>
							<ellipse transform="matrix(0.9962 -0.0867 0.0867 0.9962 -2.2318 3.8617)" cx="43.363" cy="27.636" rx="1.959" ry="1.959"/>
						</g>
					</g>
				</g>
			</svg>
			<h1 >
				Loading...</h1>
		</div>
	)
}

export default Loading