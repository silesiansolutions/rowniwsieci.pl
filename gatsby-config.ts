import type { GatsbyConfig, PluginRef } from "gatsby";
import "dotenv/config";

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.mjs
    siteTitle: `Równi w Sieci`,
    siteTitleAlt: `Równi w Sieci - organizacja non-profit przeciwdziałająca wykluczeniu cyfrowemu`,
    siteHeadline: `Równi w Sieci Hadline`,
    siteUrl: `https://rowniwsieci.pl`,
    siteDescription: `Równi w Sieci to organizacja non-profit, której celem jest przeciwdziałanie wykluczeniu cyfrowemu. Choć jesteśmy jeszcze na etapie budowania naszej struktury i formalizacji działalności, już teraz zapraszamy wszystkich chętnych do dołączenia do naszej inicjatywy.`,
    siteImage: `/logo.webp`,
    siteLanguage: `pl`,
    author: `Silesian Solutions`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      // https://www.gatsbyjs.com/plugins/@lekoarts/gatsby-theme-jodie/
      resolve: `@lekoarts/gatsby-theme-jodie`,
      options: {
        projectsPath: `content/projekty`,
        projectsUrl: `/projekty`,
        homepageProjectLimit: 4,
        navigation: [
          { name: `O nas`, slug: `/o-nas` },
          { name: `Projekty`, slug: `/projekty` },
          { name: `Kontakt`, slug: `/kontakt` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
