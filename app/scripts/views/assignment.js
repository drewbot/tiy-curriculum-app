"use strict";

Demi.Views.Assignment = Backbone.View.extend({

  template: _.template($('.assignment-template').text()),

  initialize: function () {
    $('.assignment-items ol').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.html(this.template({assignment: this.model}))
  }

})