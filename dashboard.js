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

const charactersList = document.getElementById("charactersList");
const charactersList1 = document.getElementById("charactersList1");
const charactersList2 = document.getElementById("charactersList2");

const org = document.getElementById("origin");
const destination = document.getElementById("destination");
const airport = document.getElementById("airport");

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

org.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  if (searchString != "") {
    charactersList.classList.remove("active");
  } else {
    charactersList.classList.add("active");
  }
});

destination.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  if (searchString != "") {
    charactersList1.classList.remove("active");
  } else {
    charactersList1.classList.add("active");
  }
});

airport.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  if (searchString != "") {
    charactersList2.classList.remove("active");
  } else {
    charactersList2.classList.add("active");
  }
});

let hpCharacters = [];
function suggession(e) {
   const searchString = e.target.value.toLowerCase();
   // console.log(searchString);
   const filteredCharacters = hpCharacters.filter((character) => {
     return (
       character.name.toLowerCase().includes(searchString) ||
       character.country.toLowerCase().includes(searchString) ||
       character.city.toLowerCase().includes(searchString) ||
       character.iata_code.toLowerCase().includes(searchString)
     );
   });
   // console.log(filteredCharacters);
   displayCharacters(filteredCharacters);
}
org.addEventListener("keyup", (e) => {
  suggession(e);
});
destination.addEventListener("keyup", (e) => {
  suggession(e);
});
airport.addEventListener("keyup", (e) => {
  suggession(e);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("./Airport Codes/airports-code.json");
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
    displayCharacters1(hpCharacters);
    displayCharacters2(hpCharacters);
    // console.log(hpCharacters);
  } catch (err) {
    console.log(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
         <li class="character">
            <h3><span>✈ </span>${character.name}</h3>
            <p class="code">${character.iata_code}</p>
         </li>`;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

const displayCharacters1 = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
         <li class="character">
            <h3><span>✈ </span>${character.name}</h3>
            <p class="code">${character.iata_code}</p>
         </li>`;
    })
    .join("");
  charactersList1.innerHTML = htmlString;
};
const displayCharacters2 = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
         <li class="character">
            <h3><span>✈ </span>${character.name}</h3>
            <p class="code">${character.iata_code}</p>
         </li>`;
    })
    .join("");
  charactersList2.innerHTML = htmlString;
};

loadCharacters();

