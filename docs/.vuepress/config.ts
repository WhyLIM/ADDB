import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

// import theme from "./theme.js";

export default defineUserConfig({
    base: "/about/",

    lang: "en-US",
    // title: "Docs Demo",
    // description: "A docs demo for vuepress-theme-hope",

    theme: hopeTheme({
        navbar: false,
    }),

    // Enable it with pwa
    // shouldPrefetch: false,
    dest: "public/about",
});
