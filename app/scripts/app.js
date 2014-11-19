"use strict";

Backbone._sync = Backbone.sync;

Backbone.sync = function(method, model, options) {
  options.beforeSend = function(xhr) {
    var authtoken = 'Mellon';
    if (authtoken) {
      return xhr.setRequestHeader("Authorization", authtoken);
    }
  };
  return Backbone._sync(method, model, options);
};



var router = new Demi.Routers.AppRouter()

Backbone.history.start()



