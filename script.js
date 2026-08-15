const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const courseDetails = {
  '人工智慧概論': '從 AI 的發展、資料與模型概念，到辨識生成式 AI 的能力與限制；適合建立後續學習所需的問題判斷力。',
  '物聯網': '練習將感測器、通訊協定、資料平台與應用需求串成一個可運作的系統，而不只停留在單一裝置。',
  'AI 資安概論': '透過資安事件與社交工程情境，理解人、資料與系統如何共同形成風險，並建立基本防護原則。',
  '工業 4.0 導論': '從智慧製造案例理解設備連網、數據分析與流程改善之間的關係，建立數位轉型的系統觀。'
};
const dialog = document.querySelector('#course-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogContent = document.querySelector('#dialog-content');
document.querySelectorAll('[data-course]').forEach((button) => button.addEventListener('click', () => {
  const course = button.dataset.course;
  dialogTitle.textContent = course;
  dialogContent.textContent = courseDetails[course];
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const publicationTabs = document.querySelectorAll('.publication-tab');
const publicationPanels = document.querySelectorAll('.publication-panel');
publicationTabs.forEach((tab) => tab.addEventListener('click', () => {
  publicationTabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
  });
  publicationPanels.forEach((panel) => {
    const active = panel.id === tab.getAttribute('aria-controls');
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });
}));
