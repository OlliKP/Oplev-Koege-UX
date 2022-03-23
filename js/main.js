// Sort Slider - Active Sort

$(".sort-all").click(function () {
  $(".sort-all").addClass("active");
  $(".sort-family").removeClass("active");
  $(".sort-adult").removeClass("active");
  $(".sort-cafe").removeClass("active");
  $(".sort-hotel").removeClass("active");
  $(".sort-camping").removeClass("active");
});

$(".sort-family").click(function () {
  $(".sort-all").removeClass("active");
  $(".sort-family").addClass("active");
  $(".sort-adult").removeClass("active");
  $(".sort-cafe").removeClass("active");
});

$(".sort-adult").click(function () {
  $(".sort-all").removeClass("active");
  $(".sort-family").removeClass("active");
  $(".sort-adult").addClass("active");
  $(".sort-cafe").removeClass("active");
});

$(".sort-cafe").click(function () {
  $(".sort-all").removeClass("active");
  $(".sort-family").removeClass("active");
  $(".sort-adult").removeClass("active");
  $(".sort-cafe").addClass("active");
});

$(".sort-hotel").click(function () {
  $(".sort-all").removeClass("active");
  $(".sort-hotel").addClass("active");
  $(".sort-camping").removeClass("active");
});

$(".sort-camping").click(function () {
  $(".sort-all").removeClass("active");
  $(".sort-hotel").removeClass("active");
  $(".sort-camping").addClass("active");
});


// Restaurant Categories

$(".sort-all").click(function () {
  $(".family").removeClass("hide-element");
  $(".adult").removeClass("hide-element");
  $(".cafe").removeClass("hide-element");
});

$(".sort-family").click(function () {
  $(".adult").addClass("hide-element");
  $(".cafe").addClass("hide-element");

  $(".family").removeClass("hide-element");
});

$(".sort-adult").click(function () {
  $(".family").addClass("hide-element");
  $(".cafe").addClass("hide-element");

  $(".adult").removeClass("hide-element");
});

$(".sort-cafe").click(function () {
  $(".adult").addClass("hide-element");
  $(".family").addClass("hide-element");

  $(".cafe").removeClass("hide-element");
});

// Overnatning Categories

$(".sort-all").click(function () {
  $(".hotel").removeClass("hide-element");
  $(".camping").removeClass("hide-element");
});

$(".sort-hotel").click(function () {
  $(".camping").addClass("hide-element");

  $(".hotel").removeClass("hide-element");
});

$(".sort-camping").click(function () {
  $(".hotel").addClass("hide-element");

  $(".camping").removeClass("hide-element");
});


/*dropdown menu ekstra margin-bottom*/
$(".dropbtn").click(function () {
  $(".dropbtn").addClass("extra-margin");
});

/*dropdown menu function*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show-flex");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("sort-slider");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


