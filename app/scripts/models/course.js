"use strict";

Demi.Models.Course = Backbone.Model.extend({
  type: 'course',

  generateURI: function () {
    return '#/courses/' + this.id
  }
});

Demi.Collections.courses = Backbone.Collection.extend({
  model: Demi.Models.Course,
  url: 'http://normalizer.herokuapp.com/courses'
});