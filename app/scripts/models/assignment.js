"use strict";

Demi.Models.Assignment = Backbone.Model.extend({
  idAttribute: "_id"
});

Demi.Collections.AssignmentsCollection = Backbone.Collection.extend({
  model: Demi.Models.Assignment,
  url: 'http://normalizer.herokuapp.com/assignments'
});