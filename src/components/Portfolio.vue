<template>
    <div
        id="portfolio"
        class="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
        <div
            class="max-w-screen-lg px-4 py-12 mx-auto flex flex-col justify-center w-full h-full"
            data-aos="fade-up" data-aos-duration="600"
        >
            <div class="pb-8">
                <div class="w-fit">
                    <p class="text-4xl font-bold text-white">Portfolio</p>
                    <div class="h-1 bg-gray-500 heading-line"></div>
                </div>
                <p class="py-6 text-gray-400">A selection of projects I've built and shipped:</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
                <div
                    class="card-spotlight relative shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col bg-gray-900 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/20"
                    v-for="portfolio in portfolios"
                    :key="portfolio.id"
                    @mousemove="(e) => handleMouseMove(e)"
                    @mouseleave="(e) => handleMouseLeave(e)"
                >
                    <div class="spotlight absolute inset-0 rounded-lg pointer-events-none z-20"></div>
                    <div class="relative z-10 overflow-hidden">
                        <img
                            :src="portfolio.src"
                            class="w-full transition duration-300 hover:scale-105"
                            :alt="portfolio.name"
                        />
                    </div>
                    <div class="relative z-10 flex flex-col flex-1 p-4">
                        <h3 class="text-white font-semibold text-lg">{{ portfolio.name }}</h3>
                        <p class="text-gray-400 text-sm mt-1 flex-1">{{ portfolio.description }}</p>
                        <div class="flex gap-2 mt-4">
                            <a
                                :href="portfolio.demo"
                                target="_blank"
                                rel="noreferrer"
                                class="flex-1 text-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium transition duration-200 hover:scale-105"
                            >Demo</a>
                            <a
                                :href="portfolio.code"
                                target="_blank"
                                rel="noreferrer"
                                class="flex-1 text-center px-4 py-2 rounded-md border border-gray-600 text-gray-300 text-sm font-medium transition duration-200 hover:border-cyan-400 hover:text-cyan-400"
                            >Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
    el.style.setProperty('--spotlight', '1');
};

const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--spotlight', '0');
};

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
        name: "E-Match",
        description: "A full-stack matchmaking platform built with Vue.js and Node.js. Features user profiles, matching logic, and real-time interactions.",
        demo: "https://e-match.vercel.app/#/",
        code: "https://github.com/luibacli/e-match",
    },
    {
        id: 2,
        src: ematchDashboard,
        name: "E-Match Dashboard",
        description: "Admin dashboard for the E-Match platform. Built with Vue.js, featuring data visualization, user management, and analytics.",
        demo: "https://ematch-dashboard.vercel.app/",
        code: "https://github.com/luibacli/ematch-dashboard",
    },
    {
        id: 3,
        src: houseMarketplace,
        name: "House Marketplace",
        description: "A property listing app built with React and Firebase — supports authentication, real-time listings, and geolocation.",
        demo: "https://house-marketplace-reac-tw-firebase.vercel.app/",
        code: "https://github.com/luibacli/house-marketplace-REACTw-Firebase",
    },
    {
        id: 4,
        src: githubFinder,
        name: "GitHub Finder",
        description: "A React app that consumes the GitHub REST API to search users and display repositories, followers, and profile stats.",
        demo: "https://my-github-finder-react-js.vercel.app/",
        code: "https://github.com/luibacli/my-github-finder-React.js-",
    },
    {
        id: 5,
        src: twitterClone,
        name: "Twitter Clone",
        description: "A full-stack Twitter clone built with Nuxt.js and Prisma — features posts, follows, likes, and a relational database schema.",
        demo: "https://github.com/luibacli/twitter-clone-Nuxt-Prisma",
        code: "https://github.com/luibacli/twitter-clone-Nuxt-Prisma",
    },
    {
        id: 6,
        src: bankist,
        name: "Bankist App",
        description: "An interactive banking UI with login, transfers, loans, and account history — demonstrating DOM manipulation and JS logic.",
        demo: "https://bankist-app-pink.vercel.app/",
        code: "https://github.com/luibacli/bankist-app",
    },
];
</script>

<style scoped>
.heading-line {
  transform-origin: left;
  animation: lineReveal 400ms ease-out 600ms both;
}
@keyframes lineReveal {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

.spotlight {
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    rgba(6, 182, 212, 0.10),
    transparent 60%
  );
  opacity: var(--spotlight, 0);
  transition: opacity 300ms ease-out;
}
</style>
