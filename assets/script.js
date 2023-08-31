const collapseListMenus = document.querySelectorAll('.collapse-list-menu');
const collapseListButtons = document.querySelectorAll('.collapse-list-button');

const collapseSmallLarge = (collapseType) => {
  if (collapseType === 'large') {
    collapseListMenus.forEach(item => {
      item.classList.remove('show');
      item.classList.add('dropdown-menu');
      item.classList.remove('collapse');
    });
    collapseListButtons.forEach(item => {
      item.setAttribute('data-bs-toggle', 'dropdown');
      item.setAttribute('aria-expanded', false)
    });
  }

  if (collapseType === 'small') {
    collapseListMenus.forEach(item => {
      item.removeAttribute('style');
      item.removeAttribute('data-popper-placement');
      item.removeAttribute('data-popper-escaped');
      item.removeAttribute('data-popper-reference-hidden');
      item.classList.remove('dropdown-menu');
      item.classList.remove('show');
      item.classList.add('collapse');
    });
    collapseListButtons.forEach(item => {
      item.setAttribute('data-bs-toggle', 'collapse');
      item.setAttribute('aria-expanded', false);
    })
  }
};

if (window.innerWidth >= 768) {
  collapseSmallLarge('large');
} else {
  collapseSmallLarge('small');
}

window.addEventListener('resize', event => {
  if (event.target.innerWidth >= 768) {
    collapseSmallLarge('large');
  }
  else {
    collapseSmallLarge('small');
  }
});

