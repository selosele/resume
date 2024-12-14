<template>
  <div id="layoutMobileHeader" class="xl:hidden block sticky z-10 top-0">
    <div class="flex justify-between bg-gray-200 px-4">
      <button type="button" @click="navigateHome">
        <ui-icon :name="'xi-home'" />
        <span class="sr-only">홈으로 가기</span>
      </button>

      <button type="button" @click="toggle">
        <ui-icon :name="isShow ? 'xi-close' : 'xi-bars'" />
        <span class="sr-only">목차</span>
      </button>
    </div>

    <layout-toc
      v-if="isShow"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

/** 목차 표시 여부 */
let isShow = ref(false);

/** 목차 토글 */
const toggle = () => {
  isShow.value = !isShow.value;
};

/** 홈으로 이동 */
const navigateHome = () => {
  if (route.name === 'index') {
    window.scrollTo(0, 0);
    return;
  }
  router.push('/');
};
</script>

<style lang="scss" scoped>

</style>