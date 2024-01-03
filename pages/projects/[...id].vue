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

    <ContentRenderer
      :value="project"
    />

    <!--
    <project-detail-footer
      :prevId="prev?.id"
      :nextId="next?.id"
    />
    -->
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
// 2023.12.23. 운영 환경에서 성능 이슈로 인해 주석처리
// - 리스트 항목을 클릭 시, 프로젝트 상세 및 이전, 다음 정보를
// - 불러올 때까지 화면 전환이 되지 않는 이슈가 있어, 로직을 주석처리하여 부하가 가지 않도록 하였음

// const [prev, next] = await queryContent()
//   .only(['id'])
//   .sort({ id: -1 })
//   .findSurround(`/projects/${projectId}`);
</script>

<style lang="scss" scoped>

</style>