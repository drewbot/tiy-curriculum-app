"use strict";

Demi.Views.ResourceView = Backbone.View.extend({
  template: _.template($('.resource-template').html()),
  // className: 'collection-one-item',

  events: {
    'click .delete-button button' : 'destroy',
    'click .edit-button button' : 'editResource',
  },

  initialize: function () {
    // listen to the model (constantly runs) if it hears a destroy remove the view
    this.listenTo(this.model, 'destroy', this.remove);
    $('.resource-item').append(this.el);
    this.render();
    // if the model doesn't have an ID, it's been added via the new item input,
    // first add a time element for sorting and save it to the server. this save will trigger
    // the same rendering.
    if (this.model.isNew()){
      this.model.set({'time': Date.now()});
      this.model.save();
    }
  },
  // while the view is listening above, 
  // if it hears a change to the model or a new model is saved for this view,
  // save the model attributes and pass them through this.$el.html method
  render: function () {
    var renderedTemplate = this.template(this.model.attributes);
    this.$el.html(renderedTemplate);
  },

  destroy: function () {
    this.model.destroy();
  },

});