$(document).ready(function () {
    var currentFloor = 2; // текущий этаж
    var counterUp = $(".counter-up"); // увеличение этажа
    var counterDown = $(".counter-down"); // уменьшение этажа
    var floorPath =$(".home-image path"); // каждый отдельный этаж в svg

    // при наведении мышкой на этаж
    floorPath.on("mouseover", function () {
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        $(".counter").text(currentFloor); // записываем значение этажа в счётчик
    });  

    // отслеживаем клик по кнопке вверх
    counterUp.on("click", function () {
        // проверяем значение этажа
        if (currentFloor < 18){
            currentFloor++; // прибавляем 1 этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false}); // форматируем переменную с этажом из 2 в 02
            $(".counter").text(usCurrentFloor); // записываем значение в счётчик
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    }); 


    counterDown.on("click", function () {
        if (currentFloor >2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    }); 
});