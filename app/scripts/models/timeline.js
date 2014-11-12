"use strict";

Demi.Models.Timeline = Backbone.Model.extend({
  idAttribute: "_id"
});

Demi.Collections.TimelinesCollection = Backbone.Collection.extend({
  model: Demi.Models.Timeline,
  url: 'http://normalizer.herokuapp.com/timelines'
});