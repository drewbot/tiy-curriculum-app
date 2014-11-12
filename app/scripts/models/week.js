"use strict";

Demi.Models.Week = Backbone.Model.extend({
  idAttribute: "_id"
});

Demi.Collections.WeeksCollection = Backbone.Collection.extend({
  model: Demi.Models.Week,
  url: 'http://normalizer.herokuapp.com/weeks'
});