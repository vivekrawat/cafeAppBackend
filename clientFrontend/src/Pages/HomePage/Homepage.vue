<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
const unmountedChecker = ref(true);
onMounted(() => {
    unmountedChecker.value = true;
    autoImageChange();
});
onBeforeUnmount(() => {
  unmountedChecker.value = false;
});
const data = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://smallbizclub.com/wp-content/uploads/2015/12/4-Things-You-Should-Know-About-Opening-a-Restaurant.jpg",
    "https://assets.cntraveller.in/photos/62975dd66a6d562435831f90/1:1/w_1080,h_1080,c_limit/new-restaurants-delhi-lead.jpg"
];
const images = ref<string[]>(data);
const activeImage = ref(0);
const autoImageChange = () => {
    setTimeout(() => {
        if (activeImage.value < images.value.length - 1) {
            scroll("right");
        } else {
            activeImage.value = 0
        }
        if (unmountedChecker.value) {
            autoImageChange();
        }
    }, 5000);
};
const scroll = (scroll: "left" | "right") => {
    if (scroll === "left") {
        activeImage.value -= 1;
    } else {
        activeImage.value += 1;
    }
}
</script>
<template>
    <div class="h-screen">
        <div class="flex px-10 pt-6 w-full mt-6">
            <div class="w-full flex overflow-x-hidden">
                <div class="flex rounded-lg bg-[#E8E8E8] min-w-[100%] max-w-[100%]">
                    <img class="max-w-full object-contain mx-auto h-[65vh]" :src="images[activeImage]" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
