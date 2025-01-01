<template>
  <div class="w-full mb-[50px] z-10">
    <div class="w-full relative flex items-center justify-center pt-20 pb-2 md:px-[60px] lg:px-[100px]">
      <div class="absolute top-6 left-[50%] translate-x-[-50%] lg:flex items-center hidden">
        <img class="w-[50px]" src="../assets/images/logo khoa.png" />
        <img class="w-[50px]" src="../assets/images/logo hội.png" />
      </div>
      <div>
        <p class="my-5 uppercase text-[#00aeef] text-[30px] font-bold">liên chi hội sinh viên khoa giáo dục</p>
      </div>
    </div>
    <div class="w-full bg-[#2b78d0]">
      <div class="w-full hidden lg:flex items-center justify-between my-6 z-[11] py-2 md:px-[60px] lg:px-[100px]">
        <div v-for="(tab, index) in mainMenu" :key="tab.name"
          class="font-bold cursor-pointer lg:text-[16px] xl:text-[18px] flex items-center relative parent-tab">
          <div
            :class="`${index == 0 ? 'text-left' : index === mainMenu.length ? 'text-right' : 'text-center'} text-white w-full uppercase`"
            @click="goTo(tab.url)">
            <template v-if="tab.type === 'text'">
              {{ tab.name }}
            </template>
            <template v-else>
              <img src="../assets/images/home.png" alt="tab image" class="w-[25px]" />
            </template>
            <v-icon v-if="tab.children.length > 0" name="bi-caret-down-fill" scale="1" />
          </div>

          <ul v-if="tab.children.length > 0" class="child-tab">
            <li v-for="child in tab.children" :key="child.name">
              {{ child.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="line"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainMenu: [
        {
          name: "Trang chủ",
          type: 'image',
          children: [], url: '/', color: '#ff0000'
        },
        {
          name: "Giới thiệu",
          type: 'text',
          children: [], url: '', color: '#ffa500'
        },
        {
          name: "Giáo dục",
          type: 'text',
          children: [], url: '', color: '#ffa500'
        },
        {
          name: "Hỗ trợ sinh viên",
          type: 'text',
          children: [], url: '', color: '#ffa500'
        },
        {
          name: "xây dựng hội",
          type: 'text',
          children: [], url: '', color: '#ffa500'
        },
        {
          name: "Tình nguyện",
          type: 'text',
          children: [
            { name: "Xuân Tình Nguyện 2022", url: '/' },
            { name: "Xuân Tình Nguyện 2023", url: '/' },
            { name: "Xuân Tình Nguyện 2024", url: '/' },
          ], url: '', color: '#008000'
        },
        {
          name: "Mùa hè xanh",
          type: 'text',
          children: [
            { name: "Mùa hè xanh 2022", url: '/' },
            { name: "Mùa hè xanh 2023", url: '/' },
            { name: "Mùa hè xanh 2024", url: '/' },
          ], url: '', color: '#0000ff'
        },
        {
          name: "Liên hệ",
          type: 'text',
          children: [
          ], url: '', color: '#008000'
        },
      ],
      isHovered: null,
    };
  },
  methods: {
    goToFB() {
      window.open('https://www.facebook.com/Nhipsongtre.educare', '_blank');
    },
    goTo(url) {
      this.$router.push(url);
    }
  },
};
</script>

<style scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: rgb(190, 190, 190);
}

.parent-tab:hover .child-tab {
  display: block;
}

.child-tab {
  display: none;
  box-shadow: 0px 0px 2px 1px rgb(170, 170, 170);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 12;
}

.child-tab li {
  font-weight: lighter;
  padding: 5px 6px;
  margin: 5px 0;
  font-size: 16px;
}

.child-tab li:hover {
  background-color: rgb(241, 241, 241);
}

.rainbow-text {
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
