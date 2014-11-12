"use strict";

Demi.Models.Goal = Backbone.Model.extend({
  idAttribute: "_id"
});

Demi.Collections.GoalsCollection = Backbone.Collection.extend({
  model: Demi.Models.Goal,
  url: 'http://normalizer.herokuapp.com/goals'
});