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
