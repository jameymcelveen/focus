/**
 * Created by jameym on 4/20/2016.
 */

var Vue = require('vue');
var moment = require('moment');

Vue.filter('moment', function (value, format) {
    return moment(value).format(format); //'MMMM Do YYYY, h:mm:ss a');
});