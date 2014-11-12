"use strict";

Demi.Models.Course = Backbone.Model.extend({
  idAttribute: "_id"
});

Demi.Collections.CoursesCollection = Backbone.Collection.extend({
  model: Demi.Models.Course,
  url: 'http://normalizer.herokuapp.com/courses'
});