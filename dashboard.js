const flight = document.getElementById('plane');
const c1 = document.getElementById('c1');

const airportSchedule = document.getElementById('toggle');
const flightSchedule = document.getElementById('toggle1');

const dashboard = document.getElementById('dashboard');

const title = document.getElementById('title');
const title1 = document.getElementById('title1');

const searchBar = document.getElementById('searchBar');
const searchBar1 = document.getElementById('searchBar1');

const boards = document.getElementById("boards");
const boards1 = document.getElementById("boards1");



window.addEventListener('scroll', () => {
   let value = window.scrollY;
   flight.style.left = value + 'px';
   flight.style.bottom = value + 'px';
})

airportSchedule.addEventListener('click', () => {
   dashboard.classList.add('active');

   title.classList.add("active");
   title1.classList.remove("active");

   searchBar.classList.add("active");
   searchBar1.classList.remove("active");

   boards.classList.add("active");
   boards1.classList.remove("active");

   airportSchedule.classList.add("active")
   flightSchedule.classList.remove("active");
})

flightSchedule.addEventListener('click', () => {
   dashboard.classList.remove("active");

   title.classList.remove("active");
   title1.classList.add("active");

   searchBar.classList.remove("active");
   searchBar1.classList.add("active");

   boards.classList.remove("active");
   boards1.classList.add("active");

   airportSchedule.classList.remove("active");
   flightSchedule.classList.add("active");
})