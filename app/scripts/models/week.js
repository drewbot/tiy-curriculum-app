"use strict";

Demi.Models.Week = Backbone.Model.extend({
  type: 'week',

  idAttribute: 'number',

  initialize: function() {
    this.set('name', 'Week ' + this.get('number'));
  },

  generateURI: function () {
    return '#/courses/' + Demi.current.course.id + '/timelines/' + Demi.current.timeline.id + '/weeks/' + this.get('number')
  }
});

Demi.Collections.weeks = Backbone.Collection.extend({
  model: Demi.Models.Week,
  url: function(){
    return 'http://normalizer.herokuapp.com/timelines/' + Demi.current.timeline.id
  },

  parse: function(data) {
    return data.weeks
  }
});