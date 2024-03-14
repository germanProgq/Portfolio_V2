let moon = document.getElementById('parallax-space');
let rock = document.getElementById('parallax-main');
let welcome = document.getElementById('parallax-text');
let reverse = document.getElementById('parallax-reversed')
let parallaxDiv = document.querySelector('.parallax');
let stars = document.getElementById('parallax-stars');
let rstars = document.getElementById('parallax-stars2');

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

if (mobileCheck()==false) {
const handleScroll = debounce(() => {
    let parallaxRect = parallaxDiv.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    let value = window.scrollY;
    let distanceFromPOV = parallaxRect.top - windowHeight + 2000;
    if (distanceFromPOV === 0)
        return;
    else {
        stars.style.transition = 'none'; 
        rstars.style.transition = 'none'; 
        moon.style.transition = 'none'; 
        rock.style.transition = 'none'; 
        welcome.style.transition = 'none'; 
        reverse.style.transition = 'none'; 

      
        void parallaxDiv.offsetWidth;
        
        stars.style.transition = 'margin-right 0.5s';      
        rstars.style.transition = 'margin-left 0.5s';
        moon.style.transition = 'margin-right 0.5s';
        rock.style.transition = 'margin-left 0.5s';
        welcome.style.transition = 'margin-right 0.5s';
        reverse.style.transition = 'margin-right 0.5s';

        stars.style.marginRight = value * .3 + 'px';
        rstars.style.marginLeft = value * .6 + 'px';
        moon.style.marginRight = value * 0.4 + 'px';
        rock.style.marginLeft = value * .8 + 'px';
        welcome.style.marginRight = value * .7 + 'px';
        reverse.style.marginRight = value * 1.2 + 'px';
    }
}, 10);

window.addEventListener('scroll', handleScroll);

} else {
    parallaxDiv.innerHTML = "<div class='inp'><img class='phone-image' src='Images/Chosen/hero-image.png'><a href='#about'><i class='fa-solid fa-arrow-down'></i></a></div>";
}
