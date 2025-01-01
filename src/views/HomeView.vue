<template>
  <div class="w-full">
    <!-- banner -->
    <div class="w-full hidden md:flex items-start justify-between max-h-[500px] h-[500px]">
      <div class="w-[60%] h-full overflow-hidden">
        <div @click="goToBlog(top3Blogs[0]?._id)" class="w-full h-full relative bg-parent">
          <img :src="top3Blogs[0]?.image" class="w-full h-full" alt="" />
          <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
            <p class="absolute bottom-0 px-10 pb-5 text-[22px]">
              {{ top3Blogs[0]?.title }}
            </p>
          </div>
        </div>
      </div>
      <div class="pl-2 w-[40%] flex flex-col items-start justify-between h-full overflow-hidden">
        <div @click="goToBlog(top3Blogs[1]?._id)" class="w-full h-[49%] relative bg-parent">
          <img :src="top3Blogs[1]?.image" class="w-full h-full" alt="" />
          <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
            <p class="absolute bottom-0 px-10 pb-5 text-[22px]">
              {{ top3Blogs[1]?.title }}

            </p>
          </div>
        </div>
        <div @click="goToBlog(top3Blogs[2]?._id)" class="w-full h-[49%] relative bg-parent">
          <img :src="top3Blogs[2]?.image" class="w-full h-full" alt="" />
          <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
            <p class="absolute bottom-0 px-10 pb-5 text-[22px]">
              {{ top3Blogs[2]?.title }}

            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- top new posts (4 posts)  -->
    <div class="w-full mt-[60px]" v-for="(post, categoryName) in blogPosts" :key="post?._id">
      <div class="text-box">
        <h1 class="text-[20px] font-bold ml-4 md:ml-0">{{ categoryName }}</h1>
        <div class="text-line"></div>
      </div>

      <!-- big box -->
      <div class="w-full flex items-start justify-between mt-2">
        <!-- box 1 -->
        <div class="w-full lg:w-[60%] mx-3 md:mx-0 grid grid-cols-12 gap-5">
          <div @click="goToBlog(item?._id)" v-for="(item, index) in post" :key="index"
            class="col-span-12 md:col-span-6 relative h-[320px] rounded-md overflow-hidden">
            <div class="w-full h-[240px] overflow-hidden hover:cursor-pointer">
              <img :src='item?.image' class="w-full h-full duration-700 hover:scale-110" alt="" />
            </div>
            <div class="w-[96%] mt-1 bg-[#f5f5f5] absolute right-0 bottom-[50px] px-3 py-2">
              <h1 class="text-gray-500 text-[22px] cursor-pointer hover:underline">
                {{ item?.title }}
              </h1>
              <p class="text-[14px]">{{ convertDate(item?.createdAt) }}</p>
            </div>
          </div>
        </div>

        <!-- box 2 -->
        <div class="w-[36%]">
          <!-- get top 5 latest -->
          <h1 class="font-bold text-[18px]">Thông báo</h1>
          <div class="flex w-full flex-col items-start">
            <div v-for="item in blogsShowNoti" :key="item?._id" class="w-full text-gray-500">
              {{ item?.title }}
              <div class="noti-line"></div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- list categories with 3 posts -->
  </div>
</template>
<script>
import Func from "@/shared/func";
import axios from "axios";
export default {
  data() {
    return {
      blogPosts: [],
      top3Blogs: [],
      blogsShowNoti: []
    };
  },
  mounted() {
    this.fetchBlogs();
    this.fetchTop3()
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/blogs`);
        this.blogsShowNoti = response.data.data
        const groupedByCategory = response.data.data.reduce((acc, item) => {
          const { categoryName } = item;

          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }

          acc[categoryName].push(item);

          return acc;
        }, {});

        Object.keys(groupedByCategory).forEach(category => {
          groupedByCategory[category] = groupedByCategory[category].slice(0, 4);
        });

        this.blogPosts = groupedByCategory;
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    },
    async fetchTop3() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/blogs/top`);
        this.top3Blogs = response.data
      } catch (error) {
        console.log(error);
      }
    },
    goToBlog(blogId) {
      this.$router.push(`/blog/${blogId}`)
    },
    convertDate(date) {
      return Func.convertDate(date)
    }
  },
};
</script>
<style scoped>
.bg-parent {
  cursor: pointer;
  overflow: hidden;
}

.bg-parent img {
  transition: transform 1.4s;
}

.bg-parent:hover img {
  transform: scale(1.2);
}

.bg-parent:hover p {
  text-decoration: underline;
}

.bg-cus {
  background-color: rgba(0, 0, 0, 0.4);
}

.text-box {
  display: flex;
  align-items: center;
  width: 100%;
}

.text-line {
  flex-grow: 1;
  height: 2px;
  background-color: #e6e6e6;
  margin-left: 10px;
}

.noti-line {
  margin: 10px 0;
  width: 100%;
  height: 1px;
  background-color: rgb(228, 228, 228);
}
</style>
