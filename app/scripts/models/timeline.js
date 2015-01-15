"use strict";

Demi.Models.Timeline = Backbone.Model.extend({
  type: 'timeline',

  generateURI: function () {
    return '#/courses/' + Demi.current.course.id + '/timelines/' + this.id
  }
});

Demi.Collections.timelines = Backbone.Collection.extend({
  model: Demi.Models.Timeline,
  url: function(){
    return 'http://normalizer.herokuapp.com/courses/' + Demi.current.course.id + '/timelines'
  }
});