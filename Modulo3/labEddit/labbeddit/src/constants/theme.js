import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        main: {
            background: "#1F3E5B",
            primary: "#1E7143",
            secondary: "#E57810",
            font: "#FFFFFF"
        },

        "primary": {
            "50": "#A25201",
            "100": "#B75C01",
            "200": "#CB6601",
            "300": "#DF7001",
            "400": "#F47A01",
            "500": "#FE7E02",
            "600": "#FE8F20",
            "700": "#FE9934",
            "800": "#FEA348",
            "900": "#FEAD5D"
          },

    
    },

    fonts: {
        title: "Playfair Display, sans-serif", 
        body: "Raleway, sans-serif"

    }
})

export const COLORS = {
    
        background: "#FFFFFF",
        backgroundSecondary: "#EDEDED", 
        backgroundPost: "#FBFBFB",
        borderPost: "#E0E0E0",
        primary: "#FE7E02",
        secondary: "#E57810",
        gradientFirst: "#FF6489", 
        gradientSecond: "#F9B24E",
        font: {
            primary: "#000000", 
            secondary: "#6F6F6F",
            headings: "#373737",
            subHeadings: "#000000",
            buttonAlternative: "#FFFFFF",
            Header: "#4088CB"
        
        },

        primaryPalette: {

            "50": "#A25201",
            "100": "#B75C01",
            "200": "#CB6601",
            "300": "#DF7001",
            "400": "#F47A01",
            "500": "#FE7E02",
            "600": "#FE8F20",
            "700": "#FE9934",
            "800": "#FEA348",
            "900": "#FEAD5D"

        }, 

     
    
}

export const HEADER = {
    size: "50px"
}

export const MYFONTS = {
    title: " 'IBM Plex Sans', sans-serif", 
    body: " 'Noto Sans', sans-serif"
}