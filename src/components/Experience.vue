<template>
    <div
        id="experience"
        ref="sectionRef"
        class="bg-gradient-to-b from-black to-gray-800 w-full h-fit text-white"
    >
        <div class="max-w-screen-lg px-4 py-12 mx-auto flex flex-col justify-center w-full">
            <div class="pb-10" data-aos="fade-up" data-aos-duration="600">
                <div class="w-fit">
                    <p class="text-4xl font-bold text-white">Experience</p>
                    <div class="h-1 bg-gray-500 heading-line"></div>
                </div>
                <p class="py-6 text-gray-400">Where I've shipped real work:</p>
            </div>

            <div class="flex flex-col">
                <div
                    v-for="(exp, index) in experiences"
                    :key="exp.id"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    :data-aos-delay="index * 150"
                    class="flex gap-6"
                >
                    <div class="flex flex-col items-center">
                        <div :class="['w-3 h-3 rounded-full bg-cyan-400 mt-1 flex-shrink-0', index === 0 ? 'dot-active' : '']"></div>
                        <div
                            v-if="index < experiences.length - 1"
                            class="w-px bg-gray-700 flex-1 mt-2"
                            :style="{
                                transformOrigin: 'top',
                                transform: linesVisible ? 'scaleY(1)' : 'scaleY(0)',
                                transition: `transform 600ms ease-out ${(index + 1) * 150}ms`
                            }"
                        ></div>
                    </div>

                    <div class="pb-10 flex-1">
                        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                            <div>
                                <h3 class="text-xl font-bold text-white">{{ exp.role }}</h3>
                                <p class="text-cyan-400 font-semibold mt-0.5">{{ exp.company }}</p>
                            </div>
                            <span class="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full self-start whitespace-nowrap">
                                {{ exp.period }}
                            </span>
                        </div>
                        <ul class="space-y-2">
                            <li
                                v-for="point in exp.points"
                                :key="point"
                                class="text-gray-300 text-base flex gap-3"
                            >
                                <span class="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                                <span>{{ point }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const sectionRef = ref(null);
const linesVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                linesVisible.value = true;
                observer.disconnect();
            }
        },
        { threshold: 0.15 }
    );
    if (sectionRef.value) observer.observe(sectionRef.value);
});

const experiences = [
    {
        id: 1,
        role: "IT Specialist · Platform Trainer",
        company: "CareSpan Asia Inc",
        period: "2024 – Present",
        points: [
            "Spearheaded the CareBoard Dashboard — a Konsulta data analytics platform built with Vue.js, Node.js, and MongoDB — used by healthcare partners across Visayas.",
            "Managed end-to-end EMR system deployment and onboarding for healthcare providers in the Visayas region.",
            "Assisted in EMR data reconciliation, SAP validation, and workflow optimization for PhilHealth Konsulta compliance.",
            "Conducted technical training sessions and post-evaluation reporting for clinical and administrative staff.",
        ],
    },
    {
        id: 2,
        role: "Front End Developer",
        company: "Tech Daddy",
        period: "2022 – 2024",
        points: [
            "Built the Pickles Reader Dashboard — a production admin interface for managing ebook content, user analytics, and author submissions.",
            "Implemented modular, responsive UI components using Vue 3, Quasar Framework, and Pinia for state management.",
            "Integrated REST API endpoints in close collaboration with backend engineers to ensure reliable data synchronization.",
        ],
    },
    {
        id: 3,
        role: "Full Stack Developer",
        company: "Freelance",
        period: "2021 – Present",
        points: [
            "Developed CareBoard — a healthcare analytics dashboard that parses Excel-based data into a MongoDB backend with a Vue.js frontend.",
            "Revamped Shopify storefronts for SEO, layout, and UX improvements using Liquid templating and Tailwind CSS.",
            "Delivered full-stack web applications for local organizations and businesses, handling everything from database design to Vercel/Render deployment.",
        ],
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

.dot-active {
  position: relative;
}
.dot-active::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid rgb(34, 211, 238);
  animation: pulseRing 1600ms ease-out infinite;
}
@keyframes pulseRing {
  0%   { transform: scale(1);   opacity: 0.7; }
  100% { transform: scale(2.5); opacity: 0;   }
}
</style>
