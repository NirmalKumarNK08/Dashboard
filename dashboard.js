const flight = document.getElementById('plane');
const c1 = document.getElementById('c1');


window.addEventListener('scroll', () => {
   let value = window.scrollY;
   flight.style.left = value + 'px';
   flight.style.bottom = value + 'px';
})