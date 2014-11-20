"use strict";

Demi.Models.Assignment = Backbone.Model.extend({
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