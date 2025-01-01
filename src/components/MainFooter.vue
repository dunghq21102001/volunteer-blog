<template>
    <footer class="!bg-[#e9e9e9] w-full p-2">
        <div class="w-full flex items-start justify-between relative">
            <div class="flex items-center">
                <img src="../assets/images/logo hội.png" class="w-[120px]" />
                <p class="font-bold">
                    <span class="uppercase text-[#2b78d0]">liên chi hội sinh viên khoa giáo dục</span> <br>
                    Địa chỉ:<br>
                    Ðiện thoại:<br>
                    Email:
                </p>
            </div>
            <img 
            @click="goToFb"
            src="../assets/images/facebook.png" class="w-[30px] absolute bottom-2 right-2 cursor-pointer" />
        </div>
    </footer>
</template>
<script>
export default {
    methods: {
        goToFb() {
      window.open('https://www.facebook.com/DoanHoikhoaGiaoduc', '_blank');
    },
    }
}
</script>