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
            "50": "#092012",
            "100": "#0D311C",
            "200": "#114126",
            "300": "#155130",
            "400": "#1A613A",
            "500": "#1E7143",
            "600": "#22814D",
            "700": "#279156",
            "800": "#2BA160",
            "900": "#2FB16A"
          },

          "secondary": {
            "50": "#864509",
            "100": "#994F0B",
            "200": "#AC590C",
            "300": "#BF630D",
            "400": "#D26D0F",
            "500": "#E57810",
            "600": "#EF811A",
            "700": "#F08C2D",
            "800": "#F29640",
            "900": "#F3A153"
          }
    },

    fonts: {
        title: "Playfair Display, sans-serif", 
        body: "Raleway, sans-serif"

    }
})

export const COLORS = {
    
        background: "#1F3E5B",
        primary: "#1E7143",
        secondary: "#E57810",
        font: "#FFFFFF", 

        primaryPalette: {

             "50" : "#092012",
            "100" : "#0D311C",
            "200": "#114126",
            "300": "#155130",
            "400": "#1A613A",
            "500": "#1E7143",
            "600": "#22814D",
            "700": "#279156",
            "800": "#2BA160",
            "900": "#2FB16A"

        }, 

        secondaryPalette: {
            "50": "#864509",
            "100": "#994F0B",
            "200": "#AC590C",
            "300": "#BF630D",
            "400": "#D26D0F",
            "500": "#E57810",
            "600": "#EF811A",
            "700": "#F08C2D",
            "800": "#F29640",
            "900": "#F3A153"
        }
    
}

export const HEADER = {
    size: "10vh"
}

export const MYFONTS = {
    title: "Playfair Display, sans-serif", 
    body: "Raleway, sans-serif"
}