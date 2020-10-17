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
    $('.body').click(function () {
        set_time();
        var blockHour = $(this).parent().attr('id');
        blockHour = blockHour.substring(1);
        /*check if not defined */
        if (hours[month])
            hours[year][month][day][blockHour] = $(this).val();
        localStorage.setItem('hours', hours);
        console.log(hours);
    });
}

init();