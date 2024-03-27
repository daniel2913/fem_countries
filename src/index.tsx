import { createRoot } from "react-dom/client";
import {
	RouterProvider,
	createBrowserRouter,
	redirect,
} from "react-router-dom";
import App from "./App";
import { countryRequests } from "./requests/countries";
import Detailed from "./routes/Detailed.tsx";
import Home from "./routes/Home.tsx";
import "./styles/index.scss";

const rootHtml = document.getElementById("root");
if (!rootHtml) throw "No HTML?";
const root = createRoot(rootHtml);

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				path: "not_found",
				Component: () => (
					<main className="center-content">
						<h2>Not Found</h2>
					</main>
				),
			},
			{
				path: "/",
				Component: Home,
				index: true,
				shouldRevalidate: (params) => {
					const newParams = new URL(params.nextUrl).searchParams;
					const oldParams = new URL(params.currentUrl).searchParams;
					return newParams.get("region") !== oldParams.get("region");
				},
				loader: async (params) => {
					const sp = new URL(params.request.url).searchParams;
					try {
						if (sp.get("region"))
							return await countryRequests.searchCountries(
								sp.get("region") || "",
							);
						return await countryRequests.getAllCountries();
					} catch {
						return redirect("/not_found");
					}
				},
			},
			{
				path: "/:name",
				Component: Detailed,
				loader: async ({ params }) => {
					try {
						if (!("name" in params) || !params.name) throw "Bad Request";
						console.log(params.name);
						const country = (
							await countryRequests.getCountryByName(params.name)
						)[0];
						if (!country) throw "Not Found";
						const neighbors = await countryRequests.getCountriesByCodes(
							country.borders,
						);
						console.log(neighbors);
						return { country, neighbors };
					} catch (err) {
						console.log(err);
						return redirect("/not_found");
					}
				},
			},
		],
	},
]);
root.render(<RouterProvider router={router} />);
