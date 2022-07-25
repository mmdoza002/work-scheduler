var timeDisplayEl = $('#time-display')

function displayTime(){

    var rightNow= moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
console.log(rightNow);
}

displayTime();

