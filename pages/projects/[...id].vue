<template>
  <project-detail-title
    :title="project.title"
    :company="project.company"
    :orderer="project.orderer"
    :period="project.period"
  />

  <div class="content__body xl:w-[58.823529rem] mx-auto">
    <project-detail-image
      :image="project.img"
    />

    <ContentRenderer :value="project" />

    <div class="flex justify-between mt-14">
      <div>
        <NuxtLink
          v-if="prev"
          :to="`/projects/${prev.id}`"
          class="block bg-slate-200 px-4 py-1"
        >
        이전
        </NuxtLink>
      </div>

      <div>
        <NuxtLink
          v-if="next"
          :to="`/projects/${next.id}`"
          class="block bg-slate-200 px-4 py-1"
        >
        다음
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const projectId = route.params['id'];

/** 프로젝트 상세정보 */
const project = await queryContent('/projects')
  .where({ 'id': projectId })
  .findOne();

/** 프로젝트 상세정보 - 이전, 다음 */
const [prev, next] = await queryContent()
  .only(['id'])
  .sort({ id: -1 })
  .findSurround(`/projects/${projectId}`);
</script>

<style lang="scss" scoped>

</style>