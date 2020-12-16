const showMenuItems = () => {
  const menu = document.querySelector('.menu'),
        menuLink = document.querySelectorAll('.menu-link'),
        popupMenu = document.querySelectorAll('.popup');

  const showMenu = index => {
    for(let i = 0; i < popupMenu.length; i++) {
      if(index === i) {
        popupMenu[i].classList.remove('hide');
      } else {
        popupMenu[i].classList.add('hide');
      }
    }
  }

  menu.addEventListener('mouseover', e => {
    const target = e.target;
    console.log(target);
    if(target.matches('.menu-link')) {
      menuLink.forEach((item, i) => {
        if(item === target) {
          showMenu(i);
        }
      })
    }
  });

  menu.addEventListener('mouseover', e => {
    const target = e.target;
    if(target.matches('.popup')) {
      popupMenu.forEach(item => {
        item.classList.add('hide')
      })
    }
  });
};

showMenuItems();

const showBurger = () => {
  const  burger = document.getElementById('burger');
  burger.style.display = 'none';

  let clientWidth = document.documentElement.clientWidth;

  if(clientWidth < 768) {
      burger.style.display = 'flex';
    } else {
      burger.style.display = 'none';
  };

  window.addEventListener('resize', function() {
    clientWidth = document.documentElement.clientWidth;

  if(clientWidth < 768) {
      burger.style.display = 'flex';
    } else {
      burger.style.display = 'none';
    }
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
  });
}

showBurger();

const showMobileMenu = () => {
  const burger = document.getElementById('burger');
  const leftMenu = document.querySelector('.left-menu');
  const dropDown = document.querySelectorAll('.dropdown');
  const dropdownInner = document.querySelectorAll('.dropdown-inner')

  const changeArrow = e => {
    if(e.target.closest('.fa-angle-down')) {
      e.target.classList.remove('fa-angle-down');
      e.target.classList.add('fa-angle-up');
    } else {
      e.target.classList.add('fa-angle-down');
      e.target.classList.remove('fa-angle-up');
    }
  }

  const closeDropdown = () => {
    dropDown.forEach(item => {
      item.classList.remove('active');
    });
  };

  const closeDropdownInner = () => {
    dropdownInner.forEach(item => {
      item.classList.remove('visible');
    });
  };

  burger.addEventListener('click', () => {
    leftMenu.classList.toggle('show');
    closeDropdown();
  });

  leftMenu.addEventListener('click', event => {
    const target = event.target;
    console.log(target);
    if(target.closest('.dropdown-arrow')) {
      const dropdown = target.closest('.dropdown');
      if(dropdown.classList.contains('active')) {
        event.target.classList.remove('active');
      } else {
        closeDropdown();
      }
      dropdown.classList.toggle('active');
      changeArrow(event);
    } else if(target.closest('.dropdown-inner-arrow')) {
        const dropdownInner = target.closest('.dropdown-inner');
        if(dropdownInner.classList.contains('visible')) {
          event.target.classList.remove('visible');
      } else {
        closeDropdownInner();
      }
        dropdownInner.classList.toggle('visible');
        changeArrow(event);
      }
  });
}

showMobileMenu();









