"use strict";

Demi.Views.Resource = Backbone.View.extend({

  tagName: 'li',
  className: 'item row',

  template: _.template($('.resource-template').text()),

  initialize: function () {
    $('.resource-items ol').append(this.el);
    this.render();
  },

  events: {
    'click .delete-button': 'destroy'
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes))
  },

  destroy: function () {
    this.model.destroy();
    this.remove()
  }

})