<template>
    <div
        id="contact"
        class="w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white"
    >
        <div
            class="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
            data-aos="fade-left" data-aos-duration="1500"
        >
            <div class="pb-8">
                <p class="text-4xl font-bold inline border-b-4 border-gray-500">
                    Contact
                </p>
                <p class="py-6 text-gray-400">
                    Open to remote opportunities. Fill out the form and I'll get back to you within 24 hours.
                </p>
            </div>

            <div class="flex justify-center items-center">
                <form
                    action="https://getform.io/f/67c87f27-27fb-421c-9be4-cfb18a68ffb0"
                    method="post"
                    class="flex flex-col w-full md:w-1/2"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        class="p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 duration-200"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        class="my-4 p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 duration-200"
                    />
                    <textarea
                        name="message"
                        placeholder="Tell me about the role or project..."
                        rows="8"
                        class="p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 duration-200"
                    ></textarea>
                    <button
                        type="submit"
                        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200 font-medium"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>
