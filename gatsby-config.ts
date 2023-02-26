import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Soft Sound`,
        siteUrl: `https://www.yourdomain.tld`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Heebo`,
                        file: `https://fonts.googleapis.com/css2?family=Heebo:wght@100;400&display=swap`,
                    },
                    {
                        name: `Josefin Sans`,
                        file: `https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap`,
                    },
                ],
            },
        }]
};

export default config;
