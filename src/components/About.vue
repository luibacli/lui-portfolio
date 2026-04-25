<template>
    <div
        id="about"
        class="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
        
    >
        <div
            class="max-w-screen-lg px-4 py-12 mx-auto flex flex-col justify-center w-full h-fit"
            data-aos="fade-up" data-aos-duration="600"
        >
            <div class="w-fit">
                <p class="text-4xl font-bold text-white">About</p>
                <div class="h-1 bg-gray-500 heading-line"></div>
            </div>
            <p class="text-xl mt-8 sm:mt-14 leading-relaxed">
                I’m a full-stack developer with <span class="text-cyan-400 font-semibold">4+ years delivering production systems</span> that real businesses depend on — a custom clinic management platform handling patient records and live communication, a healthcare analytics dashboard processing complex clinical data for daily staff use, and a live e-commerce store serving active customers. I don’t just build features; I solve problems and take full ownership from database schema to deployed UI.
            </p>
            <br />
            <p class="text-xl leading-relaxed">
                On the front end, I build interfaces that are <span class="text-cyan-400 font-semibold">fast, intuitive, and built to convert</span> — not just visually polished mockups. On the back end, I design REST APIs that hold up under real usage, implement authentication and data security properly, and optimize queries where performance actually matters. I ask the right questions before writing a single line of code, because the biggest technical wins often start with understanding the business constraint first.
            </p>
            <br />
            <p class="text-xl leading-relaxed">
                I’m looking for a <span class="text-cyan-400 font-semibold">remote full-stack role</span> where I can build things that move the needle — not just maintain legacy apps, but architect and ship features that create real impact. If you need someone who takes ownership, communicates clearly, and delivers without hand-holding — let’s talk.
            </p>
        </div>
    </div>
</template>

<script setup>
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
