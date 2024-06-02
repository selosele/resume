<template>
  <li :class="{ 'mt-7': 0 < ($.vnode.key as number) }">
    <NuxtLink
      :to="`/projects/${id}`"
      :class="['p-4 overflow-hidden flex flex-wrap flex-col rounded-md bg-white border border-solid shadow-md', 
               'hover:no-underline hover:border-blue-300 hover:bg-blue-50']"
    >
      <profile-bottom-label-level-2
        class="w-full"
      >
        {{ title }}
      </profile-bottom-label-level-2>

      <p>
        <template v-for="(item,i) in [orderer,period]" :key="i">
          <profile-bottom-pipe v-if="0 < i" />
          
          <span :class="['text-lg font-normal',
                        { 'text-blue-900': 0 === i },
                        { 'text-gray-500': 1 === i },
                        { 'text-gray-500': 2 === i }]"
          >{{ item }}
          </span>
        </template>
      </p>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
defineProps({
  
  /** 프로젝트 아이디 */
  id: String,
  /** 프로젝트 명 */
  title: String,
  /** 프로젝트 발주처 */
  orderer: String,
  /** 프로젝트 참여기간 */
  period: String,
});
</script>

<style lang="scss" scoped>

</style>