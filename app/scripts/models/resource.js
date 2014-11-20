"use strict";

Demi.Models.Resource = Backbone.Model.extend({
});

Demi.Collections.Resources = Backbone.Collection.extend({
  model: Demi.Models.Resource,
  url: function(){
    return 'http://normalizer.herokuapp.com/timelines/' +
            Demi.current.timeline.id +
            '/weeks/' +
            Demi.current.week.id +
            '/resources' 
  }});