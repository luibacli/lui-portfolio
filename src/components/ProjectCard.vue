<template>
    <div
        class="card-spotlight relative shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col bg-gray-900 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/20"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
    >
        <div class="spotlight absolute inset-0 rounded-lg pointer-events-none z-20"></div>
        <div class="relative z-10 overflow-hidden">
            <img
                :src="project.src"
                loading="lazy"
                class="w-full h-44 object-cover transition duration-300 hover:scale-105"
                :alt="project.name"
            />
        </div>
        <div class="relative z-10 flex flex-col flex-1 p-4">
            <h3 class="text-white font-semibold text-lg">{{ project.name }}</h3>
            <p class="text-gray-400 text-sm mt-1 flex-1">{{ project.description }}</p>
            <div class="flex gap-2 mt-4">
                <a
                    :href="project.demo"
                    target="_blank"
                    rel="noreferrer"
                    class="flex-1 text-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium transition duration-200 hover:scale-105"
                >Demo</a>
                <a
                    :href="project.code"
                    target="_blank"
                    rel="noreferrer"
                    class="flex-1 text-center px-4 py-2 rounded-md border border-gray-600 text-gray-300 text-sm font-medium transition duration-200 hover:border-cyan-400 hover:text-cyan-400"
                >Code</a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({ project: Object });

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
</script>

<style scoped>
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
