"use strict";

Demi.Views.Resource = Backbone.View.extend({

  template: _.template($('.resource-template').text()),

  initialize: function () {
    $('.resource-items ol').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.html(this.template({resource: this.model}))
  }

})