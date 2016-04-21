/**
 * Created by jameym on 4/20/2016.
 */
var Vue = require('vue');

var components = {
    "clock-ctrl": require('./clock-ctrl.vue')
};

var App = (function() {

    function app() {

    }

    var _vue = null;

    var _findCtrlById = function() {
        if (arguments && arguments.length > 0) {
            if (_vue == null) {
                throw new Error('vue has not been mounted');
            }
            var arg1 = arguments[0];
            if (typeof arg1 == "string") {
                for (var i = 0; i < _vue.$children.length; i++) {
                    var child = _vue.$children[i];
                    if (child.$el && child.$el.id == arg1) {
                        return child;
                    }
                }
            }
            return undefined;
        }
    };

    return {
        vue: _vue,
        ctrlById: _findCtrlById,
        mount: function (selector) {
            if(_vue != null) {
                throw new Error('vue as already been mounted');
            }
            _vue = new Vue({
                el: selector,
                components: components
            });
        }
    };
}());

module.exports = App;