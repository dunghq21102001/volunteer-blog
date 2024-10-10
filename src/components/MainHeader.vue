<template>
    <div class="w-full mb-[50px] z-10">
        <div class="w-full flex items-center justify-between py-2 md:px-[60px] lg:px-[100px]">
            <div class="flex items-center justify-start">
                <v-icon class="mx-3 cursor-pointer hover:text-pink-600" scale="1.2" name="co-facebook-f" />
                <v-icon class="mx-3 cursor-pointer hover:text-pink-600" scale="1.2" name="bi-twitter" />
            </div>
            <div>
                <img src="https://images-platform.99static.com//GphK2E2GW0vMjeslhpBqdDl-0Io=/0x0:1000x1000/fit-in/590x590/99designs-contests-attachments/89/89348/attachment_89348892"
                    class="max-w-[100px]" alt="">
            </div>
            <div>
                <v-icon class="mx-3 cursor-pointer hover:text-pink-600" scale="1.2" name="hi-menu" />
                <v-icon class="mx-3 cursor-pointer hover:text-pink-600" scale="1.2" name="bi-search" />
            </div>
        </div>
        <div class="line"></div>
        <div class="w-full hidden lg:flex items-center justify-center my-6 z-[11]">
            <div v-for="tab in mainMenu" :key="tab.name"
                class="font-bold cursor-pointer mx-6 mt-1 uppercase lg:text-[16px] xl:text-[18px] flex items-center relative parent-tab">
                <h1>
                    {{ tab.name }} <v-icon v-if="tab.children.length > 0" name="bi-caret-down-fill" scale="1" />
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
    components: {},
    data() {
        return {
            mainMenu: [
                { name: 'Trang chủ', children: [] },
                { name: 'Thông báo', children: [] },
                {
                    name: 'Xuân tình nguyện',
                    children:
                        [
                            { name: '2022' },
                            { name: '2023' },
                            { name: '2024' },
                        ]
                },
                { name: 'Mùa hè xanh', children: [] },
                { name: 'Các hoạt động khác', children: [] },
            ]
        }
    },
    methods: {}
}
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

.parent-tab:hover h1 {
    color: #db2777;
}

.child-tab {
    border-top: 3px solid #db2777;
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
    color: #db2777;
    background-color: rgb(241, 241, 241);
}
</style>