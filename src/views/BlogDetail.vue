<template>
    <div class="w-full">
        <h1 class="w-full text-center text-gray-400 text-[30px] mb-5">{{ blog.title }}</h1>
        <div class="w-full flex justify-center">
            <img :src="blog.image" alt="" />
        </div>
        <div class="mt-5" v-html="blog?.content"></div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            blog: {}
        }
    },
    mounted() {
        this.fetchBlogDetail()
    },
    methods: {
        async fetchBlogDetail() {
            try {
                const blogId = this.$route.params.id;
                const response = await axios.get(`https://volunteer-blog-api.onrender.com/api/v1/blogs/${blogId}`);
                this.blog = response.data;
            } catch (error) {
                this.$router.push(`/`)
                console.error('Error fetching blog detail:', error);
            }
        }
    }
}
</script>