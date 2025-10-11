<template>
    <div
        id="about"
        class="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
        
    >
        <div
            class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-screen h-fit"
            data-aos="fade-up" data-aos-duration="1500"
        >
            <div>
                <p class="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p class="text-xl mt-20">
                A full-stack web developer passionate about crafting clean, efficient, and scalable web applications. With almost three years of experience building real-world projects, I specialize in Vue.js, Node.js, Express, and MongoDB, blending front-end precision with back-end logic to create seamless digital experiences.
            </p>
            <br />
            <p class="text-xl">
                I love transforming ideas into interactive interfaces—using Tailwind CSS, PrimeVue, and modern JavaScript frameworks to deliver fast, responsive designs that look and feel right on any device. On the back end, I design REST APIs, automate workflows, and manage data systems that keep things running smoothly behind the scenes.
            </p>
            <br />
            <p class="text-xl">
                My approach combines creativity and structure—every project starts with understanding the problem deeply, then building solutions that are both functional and visually engaging. Whether it’s a dashboard, a full-stack platform, or a small tool with big impact, I’m all about creating things that work beautifully and perform flawlessly.
            </p>
        </div>
    </div>
</template>

<script setup>
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init()

</script>


<style lang="scss" scoped></style>
