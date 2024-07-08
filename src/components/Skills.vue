<template>
    <div
        id="skills"
        class="bg-gradient-to-b from-gray-800 to-black w-full h-fit"
    >
        <div
            class="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
        >
            <div>
                <p
                    class="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
                >
                    Skills
                </p>
                <p class="py-6">
                    These are the technologies that I've worked with:
                </p>
            </div>

            <div
                class="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
            >
                <div
                    v-for="tech in techs"
                    :key="tech.id"
                    :class="`shadow-md hover:scale-105 duration-500 py-2 rounded-l ${tech.style}`"
                >
                    <img :src="tech.src" class="w-20 mx-auto" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mui from "../assets/mui.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import redux from "../assets/redux.png";
import vue from "../assets/vuejs.png";
import quasar from "../assets/quasar.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import pinia from "../assets/pinia.png";
import prisma from "../assets/prisma.png";

const techs = [
    {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
    },
    {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
    },
    {
        id: 4,
        src: vue,
        title: "Vue",
        style: "shadow-green-400",
    },
    {
        id: 5,
        src: quasar,
        title: "CSS",
        style: "shadow-blue-500",
    },
    {
        id: 6,
        src: pinia,
        title: "Pinia",
        style: "shadow-yellow-500",
    },

    {
        id: 7,
        src: reactImage,
        title: "React",
        style: "shadow-blue-600",
    },
    {
        id: 8,
        src: redux,
        title: "Redux",
        style: "shadow-purple-600",
    },
    {
        id: 9,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
    },
    {
        id: 10,
        src: mui,
        title: "Material UI",
        style: "shadow-sky-300",
    },
    {
        id: 11,
        src: express,
        title: "Express",
        style: "shadow-gray-400",
    },
    {
        id: 12,
        src: node,
        title: "Node JS",
        style: "shadow-green-200",
    },
    {
        id: 13,
        src: mongodb,
        title: "MongoDB",
        style: "shadow-green-400",
    },
    {
        id: 14,
        src: firebase,
        title: "Firebase",
        style: "shadow-yellow-300",
    },
    {
        id: 15,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
    },
    {
        id: 16,
        src: git,
        title: "Git",
        style: "shadow-orange-500",
    },
    {
        id: 17,
        src: docker,
        title: "Docker",
        style: "shadow-blue-500",
    },
    {
        id: 18,
        src: prisma,
        title: "Prisma",
        style: "shadow-blue-900",
    },
];
</script>

<style lang="scss" scoped></style>
