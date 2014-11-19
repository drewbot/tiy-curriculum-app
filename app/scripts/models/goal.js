"use strict";

Demi.Models.Goal = Backbone.Model.extend({
});

Demi.Collections.GoalsCollection = Backbone.Collection.extend({
  model: Demi.Models.Goal,
  url: 'http://normalizer.herokuapp.com/goals'
});