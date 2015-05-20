var showInterval = 5;
var slides = ['test.001.png','test.002.png', 'test.003.png'];
var nextSlide = 0;

function report(message) {
    $('#image').html('<p>' + JSON.stringify(message) + '</p>' + $('#image').html());
};

function showNextSlide() {
    var now = new Date();
    report({'msg':'nextSlide', 's':now.getSeconds(), 'm':now.getMilliseconds(), 'slide': slides[nextSlide]});

    $('#image').css('background-image', 'url(' + slides[nextSlide] + ')');

    nextSlide = nextSlide + 1;
    if (nextSlide >= slides.length) {
        nextSlide = 0;
    };

    slideDelay();
}

function slideDelay() {
    var now = new Date();
    // var secondsOfDay = ((now.getHours() * 60) + now.getMinutes * 60) + now.getSeconds();
    // var slot = Math.floor(secondsOfDay() / showInterval);
    var slot = Math.floor(now.getSeconds() / showInterval);
    var secondsLeft = showInterval * (slot +1) - now.getSeconds();
    var millisLeft = (secondsLeft * 1000) - now.getMilliseconds();
    setTimeout(showNextSlide, millisLeft);
    // report({'msg':'slideDelay', 's':now.getSeconds(), 'm':now.getMilliseconds(), 'millisLeft':millisLeft});
}

$(document).ready(function(){
    slideDelay();
});
