"use strict";

Demi.Models.Goal = Backbone.Model.extend({

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