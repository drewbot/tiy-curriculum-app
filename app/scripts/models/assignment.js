"use strict";

Demi.Models.Assignment = Backbone.Model.extend({
});

Demi.Collections.AssignmentsCollection = Backbone.Collection.extend({
  model: Demi.Models.Assignment,
  url: 'http://normalizer.herokuapp.com/assignments'
});