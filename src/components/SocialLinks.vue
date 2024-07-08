<template>
    <div class="hidden lg:flex flex-col top-[35%] left-0 fixed text-white">
        <ul v-for="link in links" :key="link.id">
            <li
                class="flex justify-between cursor-pointer items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
            >
                <a
                    :href="link.href"
                    target="_blank"
                    rel="noreferrer"
                    :download="link.download"
                    class="flex justify-between items-center w-full text-white"
                >
                    {{ link.name }}
                    <component :is="link.icon" style="width: 40px" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {
    CodeBracketSquareIcon,
    DocumentArrowDownIcon,
    EnvelopeIcon,
    UserCircleIcon,
} from "@heroicons/vue/24/solid";
const links = [
    {
        id: 1,
        name: "LinkedIn",
        icon: UserCircleIcon,
        href: "https://www.linkedin.com/in/lui-bacli-953166223/",
        style: "rounded-tr-md",
    },
    {
        id: 2,
        name: "Github",
        icon: CodeBracketSquareIcon,
        href: "https://github.com/luibacli",
    },
    {
        id: 3,
        name: "Mail",
        icon: EnvelopeIcon,
        href: "mailto:luibacli@gmail.com",
    },
    {
        id: 4,
        name: "Resume",
        icon: DocumentArrowDownIcon,
        href: "/resume.pdf",
        style: "rounded-br-md",
        download: "resume",
    },
];
</script>

<style lang="scss" scoped></style>
