// Sort Slider - Active Sort

$(".sort-all").click(function () {
    $(".sort-all").addClass("active");
    $(".sort-family").removeClass("active");
    $(".sort-adult").removeClass("active");
    $(".sort-cafe").removeClass("active");
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

