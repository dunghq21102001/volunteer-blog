<template>
    <div class="cus-con">
        <h1 class="w-full text-center text-gray-400 text-[30px] mb-5 font-bold">{{ blog?.title }}</h1>
        <p class="mb-3 text-gray-600">Ngày: {{ convertDate(blog?.createdAt) }}</p>
        <div class="w-full flex justify-center">
            <img :src="blog.image" alt="" />
        </div>
        <div class="mt-5" v-html="blog?.content"></div>
    </div>
</template>

<script>
import Func from '@/shared/func';
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
                const response = await axios.get(`https://volunteer-blog-api.vercel.app/api/v1/blogs/${blogId}`);
                this.blog = response.data;
            } catch (error) {
                this.$router.push(`/`)
                console.error('Error fetching blog detail:', error);
            }
        },
        convertDate(date) {
            return Func.convertDate(date)
        }
    }
}
</script>
<style scoped>
.cus-con {
    margin: 0 auto 50px auto;
    max-width: 900px;
    padding: 0 5px;
}
</style>