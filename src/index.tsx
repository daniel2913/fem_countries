import './styles/index.scss'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import { Countries } from './requests/countries'

const root = createRoot(document.getElementById('root'))
const router = createBrowserRouter([
	{
		path: "/",
		element:<App/>,
		children: [
			{
				path: "/:name",
				lazy: ()=>import("./routes/Detailed.tsx"),
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
				lazy: ()=>import("./routes/Home.tsx"),
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

