const flight = document.getElementById('plane');
const c1 = document.getElementById('c1');
const airportSchedule = document.getElementById('toggle');
const dashboard = document.getElementById('dashboard');
const title = document.getElementById('title');
const searchBar = document.getElementById('searchBar');
const boards = document.getElementById("boards");



window.addEventListener('scroll', () => {
   let value = window.scrollY;
   flight.style.left = value + 'px';
   flight.style.bottom = value + 'px';
})

airportSchedule.addEventListener('click', () => {
   dashboard.classList.add('active');
   title.classList.add("active");
   searchBar.classList.add("active");
   boards.classList.add("active");
})