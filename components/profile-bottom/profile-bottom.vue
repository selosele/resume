<template>
  <div>

    <div class="flex flex-wrap lg:gap-8">

      <!-- 내 소개 -->
      <profile-introduction
        class="lg:w-[calc(50%-2rem)]"
      />

      <!-- 보유 기술 -->
      <profile-skil
        class="lg:w-[calc(50%-2rem)]"
      />

    </div>

    <!-- 프로젝트 -->
    <profile-project />

    <!-- 경력 -->
    <profile-career />
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>