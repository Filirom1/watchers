(function() {

  exports.BrunchApplication = (function() {

    function BrunchApplication() {
      var _this = this;
      jQuery(function() {
        _this.initialize(_this);
        return Backbone.history.start();
      });
    }

    BrunchApplication.prototype.initialize = function() {
      return null;
    };

    return BrunchApplication;

  })();

}).call(this);
