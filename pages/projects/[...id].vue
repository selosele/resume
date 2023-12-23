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

    <project-detail-footer
      :prevId="prev?.id"
      :nextId="next?.id"
    />
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