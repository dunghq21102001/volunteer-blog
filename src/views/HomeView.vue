<template>
  <div class="w-full">
    <!-- banner -->
    <div
      class="w-full hidden md:flex items-start justify-between max-h-[500px] h-[500px]"
    >
      <div class="w-[60%] h-full overflow-hidden">
        <div class="w-full h-full relative bg-parent">
          <img
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/320054633_692712262360107_934901059504487043_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=wwajCCYj84kQ7kNvgFKWz8o&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AemRg2r1n841a2R0UYoZp7J&oh=00_AYA3pvZgVum3cGnGftvS9C_vhTRMRSr4-uuxW_qKF69i_A&oe=670DD37F"
            class="w-full h-full"
            alt=""
          />
          <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
            <p class="absolute bottom-0 px-10 pb-5 text-[22px]">
              Ra quân Chiến dịch Xuân tình nguyện TP. Hồ Chí Minh lần 20
            </p>
          </div>
        </div>
      </div>
      <div
        class="pl-2 w-[40%] flex flex-col items-start justify-between h-full overflow-hidden"
      >
        <div class="w-full h-[49%] relative bg-parent">
          <img
            src="https://cdn.lichngaytot.com/medias/standard/2019/10/4/Giac-mo-ve-bien-ca.jpg"
            class="w-full h-full"
            alt=""
          />
          <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
            <p class="absolute bottom-0 px-10 pb-5 text-[22px]">
              Ra quân Chiến dịch Xuân tình nguyện TP. Hồ Chí Minh lần 20
            </p>
          </div>
        </div>
        <div class="w-full h-[49%] relative bg-parent">
          <img
            src="https://espc.com.vn/mediacenter/media/images/1595/news/ava/s800_600/mu-cang-chai-1512708804.png"
            class="w-full h-full"
            alt=""
          />
          <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
            <p class="absolute bottom-0 px-10 pb-5 text-[22px]">
              Ra quân Chiến dịch Xuân tình nguyện TP. Hồ Chí Minh lần 20
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- top new posts (4 posts)  -->
    <div
      class="w-full mt-[60px]"
      v-for="(post, categoryName) in blogPosts"
      :key="post?._id"
    >
      <div class="text-box">
        <h1 class="text-[20px] font-bold ml-4 md:ml-0">{{ categoryName }}</h1>
        <div class="text-line"></div>
      </div>

      <!-- big box -->
      <div class="w-full flex items-start justify-between mt-2">
        <!-- box 1 -->
        <div class="w-full lg:w-[60%] mx-3 md:mx-0 grid grid-cols-12 gap-5">
          <div
            v-for="(item, index) in post"
            :key="index"
            class="col-span-12 md:col-span-6 relative h-[320px] rounded-md overflow-hidden"
          >
            <div class="w-full h-[240px] overflow-hidden hover:cursor-pointer">
              <img
                :src='item?.image'
                class="w-full h-full duration-700 hover:scale-110"
                alt=""
              />
            </div>
            <div
              class="w-[96%] mt-1 bg-[#f5f5f5] absolute right-0 bottom-[50px] px-3 py-2"
            >
              <h1
                class="text-gray-500 text-[22px] cursor-pointer hover:underline"
              >
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
            <p class="w-full text-gray-500">
              Thông báo thu học phí HK1/24-25 của sinh viên các khoá bậc đại học
              chính quy chương trình chuẩn 09/10/2024
            </p>
            <div class="noti-line"></div>
            <p class="w-full text-gray-500">
              Thông báo thu học phí HK1/24-25 của sinh viên các khoá bậc đại học
              chính quy chương trình chuẩn 09/10/2024
            </p>
            <div class="noti-line"></div>
            <p class="w-full text-gray-500">
              Thông báo thu học phí HK1/24-25 của sinh viên các khoá bậc đại học
              chính quy chương trình chuẩn 09/10/2024
            </p>
            <div class="noti-line"></div>
            <p class="w-full text-gray-500">
              Thông báo thu học phí HK1/24-25 của sinh viên các khoá bậc đại học
              chính quy chương trình chuẩn 09/10/2024
            </p>
            <div class="noti-line"></div>
            <p class="w-full text-gray-500">
              Thông báo thu học phí HK1/24-25 của sinh viên các khoá bậc đại học
              chính quy chương trình chuẩn 09/10/2024
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- list categories with 3 posts -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/blogs");
        const groupedByCategory = response.data.data.reduce((acc, item) => {
          const { categoryName } = item;

          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }

          acc[categoryName].push(item);

          return acc;
        }, {});
        this.blogPosts = groupedByCategory;
        console.log(groupedByCategory);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    },
    convertDate(isoString) {
      const date = new Date(isoString);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();

      return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
    },
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
