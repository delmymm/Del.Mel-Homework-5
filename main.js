var hours = [];
/* prototype for hours:
hours[year][month][day][hour]
*/
var now = moment();
var year;
var month;
var day;
var hour;

function set_time() {
    year = now.format('YYYY');
    month = now.format('MMMM');
    day = now.format('D');
    hour = now.format('hhA');
}

var weekday = now.format('dddd');

/* body function */
function changeEvent(e) {

}
/* save btn function */
function saveEvent(e) {

}
/* initialize */
function init() {
    set_time();
    var dayEl = $('#currentDay');
    dayEl.html(weekday + ' ' + month + ' ' + day + ', ' + year);
    $('.body').click(function () {
        set_time();
        var blockHour = $(this).parent().attr('id');
        blockHour = blockHour.substring(1);
        var divContents = $(this).html();
        $(this).replaceWith('<textarea class="body">' + divContents + '</textarea>');
        $(this).focus();
        //init();
        return false;
    });

    $('.saveBtn').click(function () {
        set_time();
        var blockHour = $(this).parent().attr('id');
        blockHour = blockHour.substring(1);
        var saveParent = $(this).parent();
        var bodyEl = saveParent.find('.body');

        if (typeof hours[year] == "undefined") hours[year] = [];
        if (typeof hours[year][month] == "undefined") hours[year][month] = [];
        if (typeof hours[year][month][day] == "undefined") hours[year][month][day] = [];


        var bodyVal = bodyEl.val();
        hours[year][month][day][blockHour] = bodyVal;
        console.log(hours);
        localStorage.setItem('hours', hours);
        console.log(hours);
        console.log(hours);
        bodyEl.replaceWith('<div class="body">' + bodyVal + '</div>');
        init();
        return false;
    });
    var eventArray = localStorage.getItem('hours');
    console.log(eventArray);
    var dayArray = eventArray[year][month][day];
    for (var index in dayArray) {
        $('#t' + index).html(dayArray[index]);
    }
}

init();