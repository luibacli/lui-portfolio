<template>
    <div
        id="home"
        class="w-screen min-h-screen bg-gradient-to-b from-black via-black to-gray-800 flex items-center"
    >
        <div
            class="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row gap-8 py-16"
        >
            <div class="flex flex-col justify-center">
                <p class="text-cyan-400 text-lg font-medium mb-2 tracking-widest uppercase fade-in-up" style="animation-delay:0ms">
                    Hi, I'm
                </p>
                <h1 class="text-5xl sm:text-7xl font-bold text-white fade-in-up" style="animation-delay:100ms">
                    Luigie Bacli
                </h1>
                <h2 class="text-2xl sm:text-4xl font-semibold text-gray-300 mt-2 fade-in-up" style="animation-delay:200ms">
                    Full-Stack Developer
                </h2>
                <p class="text-gray-400 py-4 max-w-md text-lg leading-relaxed fade-in-up" style="animation-delay:320ms">
                    4 years building production-grade web apps with Vue.js, Node.js, and REST APIs — from pixel-perfect UIs to scalable back-end systems.
                </p>
                <p class="text-gray-500 text-sm mb-2 fade-in-up" style="animation-delay:380ms">
                    📍 Cebu, PH &nbsp;·&nbsp; UTC+8 &nbsp;·&nbsp;
                    <span class="text-green-400 font-medium">Open to remote</span>
                </p>
                <div class="flex gap-4 flex-wrap fade-in-up" style="animation-delay:440ms">
                    <div
                        @click="scrollToSection('portfolio')"
                        class="group text-white w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition duration-200 hover:scale-105 hover:shadow-[0_0_16px_rgba(6,182,212,0.35)]"
                    >
                        View My Work
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </div>
                    <div
                        @click="scrollToSection('contact')"
                        class="text-white w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md border border-gray-600 cursor-pointer transition duration-200 hover:border-cyan-400 hover:text-cyan-400"
                    >
                        Contact Me
                    </div>
                </div>
            </div>
            <div class="flex-shrink-0 fade-in-up" style="animation-delay:200ms">
                <img
                    :src="`${HeroImage1}`"
                    alt="Luigie Bacli"
                    class="rounded-2xl mx-auto w-2/3 md:w-full sm:w-full hover:animate-wiggle animate-ease-in-out"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import HeroImage1 from "../assets/heroImage.png"

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 500ms ease-out both;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
