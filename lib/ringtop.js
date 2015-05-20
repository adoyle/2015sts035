// Defaults - override in URL
var showInterval = 5000;        //milliseconds, use 'interval' in URL
var mySide = 'top';             //'top', 'left', or 'right', use 'side' in URL

// Slides - need to come in triples
var slides = [
    {'top':'test.001.png', 'left':'test.001.png', 'right':'test.001.png'},
    {'top':'test.002.png', 'left':'test.002.png', 'right':'test.002.png'},
    {'top':'test.003.png', 'left':'test.003.png', 'right':'test.003.png'}
];

function report(message) {
    $('#image').html('<p>' + JSON.stringify(message) + '</p>' + $('#image').html());
};

function showSlide(url, message) {
    $('#image').css('background-image', 'url(' + url + ')');
    slideDelay();
}

function slideDelay() {
    // Assuming that the clocks of all the computers are in sync, this code will make
    // sure that all computers will be showing synced slides.
    // 
    // Imagine that the day is divided into a series of time periods of equal length.
    // These periods are called slots here. This code does two things.
    // 1. Change slides only at the beginning of the next slot
    // 2. Put slides into specific slots. Slot 0 - slide 0, slot 1 - slide 1, etc.
    //    when you run out of slides, start from slide 0.
    // This means that there may be a short slot at the end of the day and that
    // the last group of slots may not cover all the slides.

    var now = new Date();
    var millisecondsOfDay = (((now.getHours() * 60) + now.getMinutes() * 60) + now.getSeconds()) * 1000 + now.getMilliseconds();
    var slot = Math.floor(millisecondsOfDay / showInterval);
    var millisecondsLeft = showInterval * (slot + 1) - millisecondsOfDay;

    var url = slides[slot % slides.length][mySide];

    //report({'msg':'slideDelay', 'millisLeft':millisecondsLeft, 'slot':slot, 'slide':slot%slides.length, 'url':url});
    setTimeout(function(){showSlide(url);}, millisecondsLeft);
}


/////////////////////////////////////////////////////
//
// Adapted from http://stackoverflow.com/a/4209094 //
//
function getQueryVariable(variable) { 
  var query = window.location.search.substring(1); 
  var vars = query.split("&"); 
  for (var i=0;i<vars.length;i++)
  { 
    var pair = vars[i].split("="); 
    if (pair[0] == variable)
    { 
      return pair[1]; 
    } 
  }
  return ''; //not found 
}
//
/////////////////////////////////////////////////////

$(document).ready(function(){
    
    var interval = getQueryVariable('interval');
    if(interval) {
        showInterval = parseInt(interval, 10);
    }

    var side = getQueryVariable('side');
    if(side) {
        mySide = side;
    }

    slideDelay();
});
