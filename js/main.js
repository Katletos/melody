$(document).ready(function () {
    var currentFloor = 2; // текущий этаж
    var counterUp = $(".counter-up"); // увеличение этажа
    var counterDown = $(".counter-down"); // уменьшение этажа

    var floorPath =$(".home-image path"); // каждый отдельный этаж в svg
    var modal =$(".modal"); //класс в переменную
    var modalCloseButton =$(".modal-close-button"); // крестик
    var buttonPrimary =$(".button-primary"); // большая синяя кнопка
/*
    var currentFlat = 1; // переменная с текущей квартирой
    var flatPath =$("modal-image path"); // квартиры SVG
    var flatPathItem = $(".flat-item a"); // характеристики квартир

    // при наведении мышкой на этаж
    floorPath.on("mouseover", function () {
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        $(".counter").text(currentFloor); // записываем значение этажа в счётчик
        $(".modal-counter").text(currentFloor); // записываем значение этажа в счётчик
    });  
*/
    flatPath.on("mouseover", function () {
        currentFloor = $(this).attr("data-flat");
        flatPath.removeClass("currentFlat");
        flatPathItem.removeClass("current-flat-item"); // удаляем класс характеристик квартиры
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat"); // добавляем класс квартиры
        $(`[data-item=${currentFlat}]`).toggleClass("current-flat-item"); // добавляем класс характеристик квартиры
    });  


    floorPath.on("click", toggleModal); /*клик на этаж*/
    modalCloseButton.on("click", toggleModal); /*клик на крестик*/
    buttonPrimary.on("click", toggleModal);

    // отслеживаем клик по кнопке вверх
    counterUp.on("click", function () {
        // проверяем значение этажа
        if (currentFloor < 18){
            currentFloor++; // прибавляем 1 этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false}); // форматируем переменную с этажом из 2 в 02
            usCurrentFlat = currentFlat.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false});
            $(".counter").text(usCurrentFloor); // записываем значение в счётчик
            $(".modal-counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    }); 

    counterDown.on("click", function () {
        if (currentFloor > 2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false});
            usCurrentFlat = currentFlat.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            $(".modal-counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    }); 

    function toggleModal(){
        modal.toggleClass("is-open");
    };



});