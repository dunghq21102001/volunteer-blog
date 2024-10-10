<template>
    <div class="w-full">

        <!-- banner -->
        <div class="w-full hidden md:flex items-start justify-between max-h-[500px] h-[500px]">
            <div class="w-[60%] h-full overflow-hidden">
                <div class="w-full h-full relative bg-parent">
                    <img src="https://tecwood.com.vn/upload/images/Post/download-hinh-anh-cay-xanh-dep-nhat.jpg"
                        class="w-full h-full" alt="">
                    <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
                        <p class="absolute bottom-0 px-10 pb-5 text-[22px]">Ra quân Chiến dịch Xuân tình
                            nguyện TP. Hồ Chí Minh lần 20</p>
                    </div>
                </div>
            </div>
            <div class="pl-2 w-[40%] flex flex-col items-start justify-between h-full overflow-hidden">
                <div class="w-full h-[49%] relative bg-parent">
                    <img src="https://cdn.lichngaytot.com/medias/standard/2019/10/4/Giac-mo-ve-bien-ca.jpg"
                        class="w-full h-full" alt="">
                    <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
                        <p class="absolute bottom-0 px-10 pb-5 text-[22px]">Ra quân Chiến dịch Xuân tình
                            nguyện TP. Hồ Chí Minh lần 20</p>
                    </div>
                </div>
                <div class="w-full h-[49%] relative bg-parent">
                    <img src="https://espc.com.vn/mediacenter/media/images/1595/news/ava/s800_600/mu-cang-chai-1512708804.png"
                        class="w-full h-full" alt="">
                    <div class="absolute top-0 left-0 right-0 bottom-0 text-white bg-cus">
                        <p class="absolute bottom-0 px-10 pb-5 text-[22px]">Ra quân Chiến dịch Xuân tình
                            nguyện TP. Hồ Chí Minh lần 20</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- top new posts (4 posts)  -->
        <div class="w-full mt-[60px]">
            <div class="text-box">
                <h1 class="text-[20px] font-bold ml-4 md:ml-0">Bài viết mới</h1>
                <div class="text-line"></div>
            </div>

            <!-- big box -->
            <div class="w-full flex items-start justify-between mt-2">

                <!-- box 1 -->
                <div class="w-full lg:w-[60%] mx-3 md:mx-0 grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6 relative h-[320px]">
                        <div class="w-full h-[240px] overflow-hidden hover:cursor-pointer">
                            <img src="https://preview.colorlib.com/theme/callie/img/post-1.jpg"
                                class="w-full h-full duration-700 hover:scale-110" alt="">
                        </div>
                        <div class="w-[96%] mt-1 bg-[#f5f5f5] absolute right-0 bottom-[50px] px-3 py-2">
                            <h1 class="text-gray-500 text-[22px] cursor-pointer hover:underline">Xuân tình nguyện 1</h1>
                            <p class="text-[14px]">Ngoc Van A - 05:31 20/6/2024</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 relative h-[320px]">
                        <div class="w-full h-[240px] overflow-hidden hover:cursor-pointer">
                            <img src="https://preview.colorlib.com/theme/callie/img/post-1.jpg"
                                class="w-full h-full duration-700 hover:scale-110" alt="">
                        </div>
                        <div class="w-[96%] mt-1 bg-[#f5f5f5] absolute right-0 bottom-[50px] px-3 py-2">
                            <h1 class="text-gray-500 text-[22px] cursor-pointer hover:underline truncate-1">Xuân tình
                                nguyện 1</h1>
                            <p class="text-[14px]">Nguyen Van A - 19:28 20/6/2024</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 relative h-[320px]">
                        <div class="w-full h-[240px] overflow-hidden hover:cursor-pointer">
                            <img src="https://preview.colorlib.com/theme/callie/img/post-1.jpg"
                                class="w-full h-full duration-700 hover:scale-110" alt="">
                        </div>
                        <div class="w-[96%] mt-1 bg-[#f5f5f5] absolute right-0 bottom-[50px] px-3 py-2">
                            <h1 class="text-gray-500 text-[22px] cursor-pointer hover:underline truncate-1">Xuân tình
                                nguyện 1</h1>
                            <p class="text-[14px]">Tran Thi B - 07:25 20/6/2024</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 relative h-[320px]">
                        <div class="w-full h-[240px] overflow-hidden hover:cursor-pointer">
                            <img src="https://preview.colorlib.com/theme/callie/img/post-1.jpg"
                                class="w-full h-full duration-700 hover:scale-110" alt="">
                        </div>
                        <div class="w-[96%] mt-1 bg-[#f5f5f5] absolute right-0 bottom-[50px] px-3 py-2">
                            <h1 class="text-gray-500 text-[22px] cursor-pointer hover:underline truncate-1">Chiến dịch
                                Xuân Tình Nguyện - hành trình 20 năm lan tỏa</h1>
                            <p class="text-[14px]">Nguyen Vo Thanh C - 02:50 20/6/2024</p>
                        </div>
                    </div>
                </div>

                <!-- box 2 -->
                <div class="w-[30%]">
                    Something here
                </div>

            </div>
        </div>

        <!-- list categories with 3 posts -->

    </div>
</template>
<script>

export default {
}
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
    background-color: rgba(0, 0, 0, 0.6);
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
</style>