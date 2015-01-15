"use strict";

Demi.Views.Assignment = Backbone.View.extend({

  tagName: 'li',
  className: 'item row',

  template: _.template($('.assignment-template').text()),

  events: {
    'click .delete-button': 'destroy'
  },

  initialize: function () {
    $('.assignment-items ol').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes))
  },

  destroy: function () {
    this.model.destroy();
    this.remove()
  }

})