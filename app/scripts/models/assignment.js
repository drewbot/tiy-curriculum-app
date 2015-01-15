"use strict";

Demi.Models.Assignment = Backbone.Model.extend({
  url: function(){
    return 'http://normalizer.herokuapp.com/assignments/' + this.id
  },

  toJSON: function () {
    return JSON.stringify({assignment: this.attributes})
  }
});

Demi.Collections.Assignments = Backbone.Collection.extend({
  model: Demi.Models.Assignment,
  url: function(){
    return 'http://normalizer.herokuapp.com/timelines/' +
            Demi.current.timeline.id +
            '/weeks/' +
            Demi.current.week.id +
            '/assignments' 
  }});