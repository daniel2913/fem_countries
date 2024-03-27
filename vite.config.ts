import {defineConfig} from "vite";
import svgr from "vite-plugin-svgr"


export default defineConfig({
	root: "src",
	build:{
		outDir:"../dist"
	},
	plugins:[svgr()],
});
