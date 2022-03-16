$(".button1").click(function () {
    $(".billede2").addClass("hide-img");
    $(".billede3").addClass("hide-img");
    $(".billede4").addClass("hide-img");

    $(".billede1").removeClass("hide-img");
});

$(".button2").click(function () {
    $(".billede1").addClass("hide-img");
    $(".billede3").addClass("hide-img");
    $(".billede4").addClass("hide-img");
});

$(".button3").click(function () {
    $(".billede1").addClass("hide-img");
    $(".billede2").addClass("hide-img");
    $(".billede4").addClass("hide-img");
});

$(".button4").click(function () {
    $(".billede1").addClass("hide-img");
    $(".billede2").addClass("hide-img");
    $(".billede3").addClass("hide-img");
});

$(".buttonall").click(function () {
    $(".billede1").removeClass("hide-img");
    $(".billede2").removeClass("hide-img");
    $(".billede3").removeClass("hide-img");
    $(".billede4").removeClass("hide-img");
});

let diningPlaces = [
    {name: "Restaurant Arken", type: "adult"},
    {name: "Café Vivaldi", type: "cafe"},
    {name: "Restaurant Bone's", type: "family"},
    {name: "Restaurant Tacos Locos", type: "family"},
    {name: "Café Vinbar", type: "cafe"},
    {name: "Restaurant Malt", type: "adult"},
]

const ul = document.querySelector('.sort-slider');


