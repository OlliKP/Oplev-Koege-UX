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
    $(".family").removeClass("hide-img");
    $(".adult").removeClass("hide-img");
    $(".cafe").removeClass("hide-img");
});

$(".sort-family").click(function () {
    $(".adult").addClass("hide-img");
    $(".cafe").addClass("hide-img");

    $(".family").removeClass("hide-img");
});

$(".sort-adult").click(function () {
    $(".family").addClass("hide-img");
    $(".cafe").addClass("hide-img");

    $(".adult").removeClass("hide-img");
});

$(".sort-cafe").click(function () {
    $(".adult").addClass("hide-img");
    $(".family").addClass("hide-img");

    $(".cafe").removeClass("hide-img");
});

