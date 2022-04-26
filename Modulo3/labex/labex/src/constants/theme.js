import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        main: {
            background: "#1F3E5B",
            primary: "#1E7143",
            secondary: "#E57810",
            font: "#FFFFFF"
        }
    },

    fonts: {
        title: "Playfair Display, sans-serif", 
        body: "Raleway, sans-serif"

    }
})