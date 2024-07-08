<template>
    <div
        id="contact"
        class="w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white"
    >
        <div
            class="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
        >
            <div class="pb-8">
                <p class="text-4xl font-bold inline border-b-4 border-gray-500">
                    Contact
                </p>
                <p class="py-6">
                    Submit the form below to get in touch with me
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
                        placeholder="Enter your name"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        class="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        rows="10"
                        class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    ></textarea>
                    <button
                        class="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                    >
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
