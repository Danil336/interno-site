(() => {
      window.onload = () => {
        let header__burger = document.querySelector('.header-burger');
        let header__menu = document.querySelector('.header-menu');
        let body = document.querySelector('body');
        header__burger.addEventListener('click', (e)=> {
          header__burger.classList.toggle('active');
          header__menu.classList.toggle('active');
          body.classList.toggle('lock');
        })
      }
    })();

    
    let t = document.querySelectorAll('.short-column-item-title')
    console.log(t)
 
    var slider = document.getElementById('slaider');
    
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });