"use strict";

Demi.Models.Resource = Backbone.Model.extend({
});

Demi.Collections.ResourcesCollection = Backbone.Collection.extend({
  model: Demi.Models.Resource,
  url: 'http://normalizer.herokuapp.com/resources'
});