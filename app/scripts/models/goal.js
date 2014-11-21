"use strict";

Demi.Models.Goal = Backbone.Model.extend({
  url: function(){
    return 'http://normalizer.herokuapp.com/goals/' + this.id
  },

  toJSON: function () {
    return JSON.stringify({goal: this.attributes})
  }
});

Demi.Collections.Goals = Backbone.Collection.extend({
  model: Demi.Models.Goal,
  url: function(){
    return 'http://normalizer.herokuapp.com/timelines/' +
            Demi.current.timeline.id +
            '/weeks/' +
            Demi.current.week.id +
            '/goals' 
  }
});