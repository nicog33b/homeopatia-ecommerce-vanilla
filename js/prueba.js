const collapseGroup = document.querySelector('.collapse-group');
const collapseButtons = collapseGroup.querySelectorAll('.btn');
const collapses = collapseGroup.querySelectorAll('.collapse');

collapseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Cierra todas las secciones colapsables abiertas
    collapses.forEach((collapse) => {
      if (collapse !== button.nextElementSibling && collapse.classList.contains('show')) {
        collapse.classList.remove('show');
      }
    });
  });
});