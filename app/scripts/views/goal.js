Demi.Views.Goal = Backbone.View.extend({

  template: _.template($('.goal-template').text()),

  initialize: function () {
    $('.goal-items ol').append(this.el);
    this.render();
  },

  events: {
    'click .delete-button': 'destroy'
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes))
  },

  destroy: function () {
    // this won't work until we get IDs for goals, resources, and assignments
    Demi.collections.goals.get(this.model.id).destroy();
    this.remove()
  }

})