<template>
  <footer class="flex items-center justify-between flex-wrap gap-2 mt-24 pt-3 px-3 border-t-4">
    <p class="text-base">
      {{ uiTextStore.json['title'] }}
    </p>

    <button
      type="button"
      id="btnExportPdf"
      :class="['p-1 border border-solid text-sm transition-all',
               'bg-blue-100 border-blue-300 hover:bg-blue-300']"
      @click="exportPdf"
    >
      PDF 다운로드
    </button>
  </footer>
</template>

<script setup lang="ts">
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useUiTextStore } from '@/store/ui-text';

const route = useRoute();
const uiTextStore = useUiTextStore();

/** 화면을 PDF로 다운받는다. */
const exportPdf = async () => {
  const options = {
    allowTaint: true,
    useCORS: true,
    scrollX: 0,
    scrollY: 0,
    windowWidth: getPdfWidth(),
    scale: 2,
    dpi: 300,
    ignoreElements: (el: Element) => {
      const idList = ['btnExportPdf', 'btnGoList', 'detailBtns', 'layoutMobileHeader'];
      return idList.includes(el.id);
    }
  };

  const canvas = await html2canvas(document.body, options);
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF();
  
  // 페이지 크기에 맞게 이미지 추가
  pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
  
  // PDF 다운로드
  pdf.save(`${uiTextStore.json['title']}.pdf`);
};

/** 페이지별 PDF width값 반환 */
const getPdfWidth = () => {
  if (route.path.indexOf('/projects/') > -1) { // 프로젝트 상세조회 화면
    return 1000;
  }
  return 1460;
};
</script>

<style lang="scss" scoped>

</style>