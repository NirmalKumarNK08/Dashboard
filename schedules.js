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

//Based upon the scrolling value the plane moves up.
window.addEventListener('scroll', () => {
   let value = window.scrollY;
   flight.style.left = value + 'px';
   flight.style.bottom = value + 'px';
})

//To hide the flightSchedule contents
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

//To hide the airportSchedule contents
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

//To hide the suggessions bar when the input box is empty of cleared
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

$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  $("#origin").keyup(function () {
    $("#charactersList").html("");
    var searchField = $("#origin").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON(
      "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json",
      function (data) {
        $.each(data, function (key, value) {
          if (
            value.name.search(expression) != -1 ||
            value.country.search(expression) != -1 ||
            value.city.search(expression) != -1 ||
            value.iata_code.search(expression) != -1
          ) {
            $("#charactersList").append(
              '<li class="list-group-item characters">' +
                "<h4>" +
                value.name +
                "</h4>" +
                '    <span class="text-muted">' +
                value.iata_code +
                "</span></li>"
            );
          }
        });
      }
    );
  });

  $("#charactersList").on("click", "li", function () {
    var click_text = $(this).text().split("    ");
    $("#origin").val($.trim(click_text[1]));
    $("#charactersList").html("");
  });
});

$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  $("#destination").keyup(function () {
    $("#charactersList1").html("");
    var searchField = $("#destination").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON(
      "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json",
      function (data) {
        $.each(data, function (key, value) {
          if (
            value.name.search(expression) != -1 ||
            value.country.search(expression) != -1 ||
            value.city.search(expression) != -1 ||
            value.iata_code.search(expression) != -1
          ) {
            $("#charactersList1").append(
              '<li class="list-group-item characters">' +
                "<h3>" +
                value.name +
                "</h3>" +
                '     <span class="text-muted">' +
                value.iata_code +
                "</span></li>"
            );
          }
        });
      }
    );
  });

  $("#charactersList1").on("click", "li", function () {
    var click_text = $(this).text().split("     ");
    $("#destination").val($.trim(click_text[1]));
    $("#charactersList1").html("");
  });
});

$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  $("#airport").keyup(function () {
    $("#charactersList2").html("");
    //  $("#state").val("");
    var searchField = $("#airport").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON(
      "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json",
      function (data) {
        $.each(data, function (key, value) {
          if (
            value.name.search(expression) != -1 ||
            value.country.search(expression) != -1 ||
            value.city.search(expression) != -1 ||
            value.iata_code.search(expression) != -1
          ) {
            $("#charactersList2").append(
              '<li class="list-group-item characters">' +
                "<h3>" +
                value.name +
                "</h3>" +
                '     <span class="text-muted">' +
                value.iata_code +
                "</span></li>"
            );
          }
        });
      }
    );
  });

  $("#charactersList2").on("click", "li", function () {
    var click_text = $(this).text().split("     ");
    $("#airport").val($.trim(click_text[1]));
    $("#charactersList2").html("");
  });
});