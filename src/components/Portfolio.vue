<template>
    <div
        id="portfolio"
        class="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
        <div
            class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
        >
            <div class="pb-8">
                <p class="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p class="py-6">Check out some of my works right here:</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                <div
                    class="shadow-md shadow-gray-600 rounded-lg"
                    v-for="portfolio in portfolios"
                    :key="portfolio.id"
                >
                    <img
                        :src="portfolio.src"
                        class="rounded-md duration-200 hover:scale-105"
                        alt=""
                        rel="noreferrer"
                    />
                    <div class="flex items-center justify-center">
                        <button
                            class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                        >
                            <a
                                :href="portfolio.demo"
                                target="_blank"
                                rel="noreferrer"
                                >Demo</a
                            >
                        </button>
                        <button
                            class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                        >
                            <a :href="portfolio.code" target="_blank">Code</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import githubFinder from "../assets/portfolio/githubFinder.png";
import houseMarketplace from "../assets/portfolio/houseMarketplace.png";

import bankist from "../assets/portfolio/bankist.png";
import ematch from "../assets/portfolio/ematch.png";
import ematchDashboard from "../assets/portfolio/ematchDashboard.png";
import twitterClone from "../assets/portfolio/twitterClone.png";

const portfolios = [
    {
        id: 1,
        src: ematch,
        demo: "https://e-match.vercel.app/#/",
        code: "https://github.com/luibacli/e-match",
    },
    {
        id: 2,
        src: ematchDashboard,
        demo: "https://ematch-dashboard.vercel.app/",
        code: "https://github.com/luibacli/ematch-dashboard",
    },
    {
        id: 3,
        src: houseMarketplace,
        demo: "https://house-marketplace-reac-tw-firebase.vercel.app/",
        code: "https://github.com/luibacli/house-marketplace-REACTw-Firebase",
    },
    {
        id: 4,
        src: githubFinder,
        demo: "https://my-github-finder-react-js.vercel.app/",
        code: "https://github.com/luibacli/my-github-finder-React.js-",
    },
    {
        id: 5,
        src: twitterClone,
        demo: "https://github.com/luibacli/twitter-clone-Nuxt-Prisma",
        code: "https://github.com/luibacli/twitter-clone-Nuxt-Prisma",
    },
    {
        id: 6,
        src: bankist,
        demo: "https://bankist-app-pink.vercel.app/",
        code: "https://github.com/luibacli/bankist-app",
    },
];
</script>

<style lang="scss" scoped></style>
