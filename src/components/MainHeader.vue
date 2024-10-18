<template>
  <div class="w-full mb-[50px] z-10">
    <div class="w-full flex items-center justify-between py-2 md:px-[60px] lg:px-[100px]">
      <div class="flex items-center justify-start">
        <v-icon @click="goToFB" class="mx-3 cursor-pointer hover:text-pink-600" scale="1.2" name="co-facebook-f" />
      </div>
      <div>
        <p class="my-5 rainbow-text text-[30px] font-bold">Tình nguyện</p>
      </div>
      <div>
        <v-icon class="mx-3 cursor-pointer hover:text-pink-600" scale="1.2" name="hi-menu" />
      </div>
    </div>
    <div class="line"></div>
    <div class="w-full hidden lg:flex items-center justify-center my-6 z-[11]">
      <div v-for="tab in mainMenu" :key="tab.name"
        class="font-bold cursor-pointer mx-6 mt-1 lg:text-[16px] xl:text-[18px] flex items-center relative parent-tab"
        :style="{ color: isHovered === tab.name ? tab.color : 'inherit' }" @mouseenter="isHovered = tab.name"
        @mouseleave="isHovered = null">
        <h1 @click="goTo(tab.url)">
          {{ tab.name }}
          <v-icon v-if="tab.children.length > 0" name="bi-caret-down-fill" scale="1" />
        </h1>

        <ul v-if="tab.children.length > 0" class="child-tab">
          <li v-for="child in tab.children" :key="child.name">
            {{ child.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainMenu: [
        { name: "Trang chủ", children: [], url: '/', color: '#ff0000' },
        { name: "Thông báo", children: [], url: '', color: '#ffa500' },
        {
          name: "Xuân tình nguyện",
          children: [
            { name: "Xuân Tình Nguyện 2022", url: '/' },
            { name: "Xuân Tình Nguyện 2023", url: '/' },
            { name: "Xuân Tình Nguyện 2024", url: '/' },
          ], url: '', color: '#008000'
        },
        {
          name: "Mùa hè xanh",
          children: [
            { name: "Mùa hè xanh 2022", url: '/' },
            { name: "Mùa hè xanh 2023", url: '/' },
            { name: "Mùa hè xanh 2024", url: '/' },
          ], url: '', color: '#0000ff'
        },
        {
          name: "Các hoạt động khác",
          children: [
            { name: "Trăng yêu thương", url: '/' },
            { name: "Bát cháo nghĩa tình", url: '/' },
            { name: "Đông rồi lại xuân", url: '/' },
          ], url: '', color: '#4b0082'
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
