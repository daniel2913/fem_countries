import './styles/index.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import Detail from './routes/Detailed'
import Home from './routes/Home'
import { Countries } from './requests/countries'

const root = createRoot(document.getElementById('root'))
const router = createBrowserRouter([
	{
		path: "/",
		element:<App/>,
		children: [
			{
				path: "/:name",
				element: <Detail />,
				loader: async params => {
					try {
						const res = await Countries.getCountryByName(params.params.name)
						return res
					}
					catch (err) {
						redirect("/")
					}
				}
			},
			{
				index:true,
				element: <Home />,
				shouldRevalidate: (params) => {
					const newParams = new URL(params.nextUrl).searchParams
					const oldParams = new URL(params.currentUrl).searchParams
					return newParams.get("region") !== oldParams.get("region")
				},
				loader: async (params) => {
					const sp = new URL(params.request.url).searchParams
					try {
						if (sp.get("region"))
							return await Countries.searchCountries(sp.get("region"))
						return await Countries.getAllCountries()
					}
					catch {
						return []
					}
				},
			}
		]
	},
])
root.render(
		<RouterProvider router={router} />
)

