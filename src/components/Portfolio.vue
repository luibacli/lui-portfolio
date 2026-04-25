<template>
    <div
        id="portfolio"
        class="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
        <div
            class="max-w-screen-lg px-4 py-16 mx-auto flex flex-col justify-center w-full"
            data-aos="fade-up"
            data-aos-duration="600"
        >
            <!-- Page header -->
            <div class="pb-10">
                <div class="w-fit">
                    <p class="text-4xl font-bold text-white">Portfolio</p>
                    <div class="h-1 bg-gray-500 heading-line"></div>
                </div>
                <p class="py-6 text-gray-400">A selection of projects I've built and shipped:</p>
            </div>

            <!-- Production / Live Projects -->
            <section class="mb-16">
                <div class="mb-6">
                    <div class="flex items-center gap-3 mb-1">
                        <h2 class="text-xl font-bold text-white">Production / Live Projects</h2>
                        <span class="text-xs font-semibold text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 px-2 py-0.5 rounded-full">Live</span>
                    </div>
                    <p class="text-gray-500 text-sm">Real clients. Real impact. Deployed and actively used.</p>
                </div>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <ProductionCard
                        v-for="project in liveProjects"
                        :key="project.id"
                        :project="project"
                        @preview="openPreview"
                    />
                </div>
            </section>

            <!-- Independent Builds -->
            <section class="mb-16">
                <div class="mb-6">
                    <h2 class="text-xl font-bold text-white mb-1">Independent Builds</h2>
                    <p class="text-gray-500 text-sm">Self-initiated projects built to solve real problems and explore full-stack depth.</p>
                </div>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <ProjectCard
                        v-for="project in independentBuilds"
                        :key="project.id"
                        :project="project"
                    />
                </div>
            </section>

            <!-- Foundations -->
            <section>
                <div class="mb-6">
                    <h2 class="text-xl font-bold text-white mb-1">Foundations</h2>
                    <p class="text-gray-500 text-sm">Early-career projects that sharpened my core fundamentals.</p>
                </div>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <ProjectCard
                        v-for="project in foundations"
                        :key="project.id"
                        :project="project"
                    />
                </div>
            </section>
        </div>

        <PreviewModal
            v-if="modal.open"
            :project="modal.project"
            :initial-index="0"
            @close="closePreview"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import ProductionCard from './ProductionCard.vue';
import PreviewModal from './PreviewModal.vue';

import githubFinder from '../assets/portfolio/githubFinder.png';
import houseMarketplace from '../assets/portfolio/houseMarketplace.png';
import bankist from '../assets/portfolio/bankist.png';
import ematch from '../assets/portfolio/ematch.png';
import ematchDashboard from '../assets/portfolio/ematchDashboard.png';
import twitterClone from '../assets/portfolio/twitterClone.png';
import housePropertyHub from '../assets/portfolio/housePropertyHub.png';
import smartBuyMarketplace from '../assets/portfolio/smartbyMarketplace.png';

import careboard1 from '../assets/portfolio/careboard1.png';
import careboard2 from '../assets/portfolio/careboard2.png';
import careboard3 from '../assets/portfolio/careboard3.png';
import clinicPortal1 from '../assets/portfolio/clinicPortal1.png';
import clinicPortal2 from '../assets/portfolio/clinicPortal2.png';
import clinicPortal3 from '../assets/portfolio/clinicPortal3.png';
import milan1 from '../assets/portfolio/milan1.png';
import milan2 from '../assets/portfolio/milan2.png';
import milan3 from '../assets/portfolio/milan3.png';

// Modal state
const modal = ref({ open: false, project: null });
const openPreview = (project) => { modal.value = { open: true, project }; };
const closePreview = () => { modal.value = { open: false, project: null }; };

const liveProjects = [
    {
        id: 1,
        src1: clinicPortal1,
        src2: clinicPortal2,
        src3: clinicPortal3,
        name: 'Custom Clinic Portal',
        description: 'End-to-end clinic management system featuring patient records, digital patient IDs, a white-labelled email platform, and real-time communication — deployed and serving an active medical practice.',
        stack: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
        demo: 'https://www.primawellmc.com/',
    },
    {
        id: 2,
        src1: careboard1,
        src2: careboard2,
        src3: careboard3,
        name: 'CareBoard',
        description: 'Healthcare analytics dashboard handling complex data queries, KPI visualizations, and multi-source reporting — used daily by clinical staff to track patient outcomes and operational metrics.',
        stack: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
        demo: 'https://careboard.dev/',
    },
    {
        id: 3,
        src1: milan1,
        src2: milan2,
        src3: milan3,
        name: 'Milan Fine Jewelry',
        description: 'Full e-commerce storefront with product listings, inventory management, and SEO optimization — live and generating revenue for a fine jewelry brand.',
        stack: ['Shopify', 'Liquid', 'SEO'],
        demo: 'https://www.milanfj.com/',
    },
];

const independentBuilds = [
    {
        id: 1,
        src: smartBuyMarketplace,
        name: 'Smart Buy Marketplace',
        description: 'Full-stack e-commerce platform with product listings, cart management, and real-time inventory built on a modern server-side rendering stack.',
        demo: 'https://smartbuy-marketplace.vercel.app/#/',
        code: 'https://github.com/luibacli/affiliate-app',
    },
    {
        id: 2,
        src: housePropertyHub,
        name: 'House Property Hub',
        description: 'Property listing app with authentication, real-time listings, and geolocation filtering — built with server-side rendering for fast initial load.',
        demo: 'https://house-property-hub.vercel.app/',
        code: 'https://github.com/luibacli/house-property-hub',
    },
    {
        id: 3,
        src: ematch,
        name: 'E-Match',
        description: 'Full-stack e-sports matchmaking platform with user profiles, matching logic, and real-time interactions.',
        demo: 'https://e-match.vercel.app/#/',
        code: 'https://github.com/luibacli/e-match',
    },
    {
        id: 4,
        src: ematchDashboard,
        name: 'E-Match Dashboard',
        description: 'Admin dashboard for the E-Match platform featuring data visualization, user management, and analytics.',
        demo: 'https://ematch-dashboard.vercel.app/',
        code: 'https://github.com/luibacli/ematch-dashboard',
    },
];

const foundations = [
    {
        id: 1,
        src: houseMarketplace,
        name: 'House Marketplace',
        description: 'Property listing app built with React and Firebase — supports authentication, real-time listings, and geolocation.',
        demo: 'https://house-marketplace-reac-tw-firebase.vercel.app/',
        code: 'https://github.com/luibacli/house-marketplace-REACTw-Firebase',
    },
    {
        id: 2,
        src: githubFinder,
        name: 'GitHub Finder',
        description: 'React app consuming the GitHub REST API to search users and display repositories, followers, and profile stats.',
        demo: 'https://my-github-finder-react-js.vercel.app/',
        code: 'https://github.com/luibacli/my-github-finder-React.js-',
    },
    {
        id: 3,
        src: twitterClone,
        name: 'Twitter Clone',
        description: 'Full-stack Twitter clone built with Nuxt.js and Prisma — features posts, follows, likes, and a relational schema.',
        demo: 'https://github.com/luibacli/twitter-clone-Nuxt-Prisma',
        code: 'https://github.com/luibacli/twitter-clone-Nuxt-Prisma',
    },
    {
        id: 4,
        src: bankist,
        name: 'Bankist App',
        description: 'Interactive banking UI with login, transfers, loans, and account history — demonstrating DOM manipulation and JS logic.',
        demo: 'https://bankist-app-pink.vercel.app/',
        code: 'https://github.com/luibacli/bankist-app',
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
</style>
