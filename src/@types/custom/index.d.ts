export interface CountryName{
	common: string
	official: string
	nativeName:{
		[key:string]:{
			official: string
			common: string
		}
		
	}
}

export interface CountryMinProps {
	name: CountryName
}

export interface CountryCardProps extends CountryMinProps {
	population:number
	region:string
	capital:string[]
	flags:{
		png:string
		svg:string
		alt:string
	}
}

export interface CountryProps extends CountryCardProps {
	subregion: string
	borders: string[]
	tld: string[]
	currencies: {
		[key: string]: {
			name: string
		}
	}
	languages: {
		[key: string]: string
	}
}