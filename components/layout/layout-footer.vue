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
import { useUiLoadingStore } from '@/store/ui-loading';

const uiTextStore = useUiTextStore();
const uiLoadingStore = useUiLoadingStore();

/** 화면을 PDF로 다운받는다. */
const exportPdf = async () => {
  const canvasOptions = {
    allowTaint: true,
    useCORS: true,
    scale: 2,
    dpi: 300,
    scrollX: 0,
    scrollY: 0,
    width: document.body.scrollWidth,   // 전체 화면 너비
    height: document.body.scrollHeight, // 전체 화면 높이
    ignoreElements: (el: Element) => {
      const idList = ['btnExportPdf', 'btnGoList', 'detailBtns', 'layoutMobileHeader'];
      return idList.includes(el.id);
    }
  };

  uiLoadingStore.show();

  // 화면 전체 캡처
  const canvas = await html2canvas(document.body, canvasOptions);

  // PDF 크기 설정 (캔버스 크기 기반)
  const pdfWidth = canvas.width * 0.264583;   // 픽셀 → mm (1px = 0.264583mm)
  const pdfHeight = canvas.height * 0.264583; // 픽셀 → mm

  // PDF 생성
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'portrait', // 세로 방향
    unit: 'mm', // 단위: mm
    format: [pdfWidth, pdfHeight], // PDF 크기를 캔버스 크기에 맞춤
  });

  // PDF에 이미지 추가
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  // PDF 저장
  pdf.save(`${uiTextStore.json['title']}.pdf`);

  uiLoadingStore.hide();
};
</script>

<style lang="scss" scoped>

</style>