/*global $:false, moment:false*/

const datetime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$('#datetime').text(datetime);
