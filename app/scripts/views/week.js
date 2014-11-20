"use strict";

Demi.Views.Week = Backbone.View.extend({

  events: {
    'click .save-assignment'  : 'saveAssignment',
    'click .save-resource'    : 'saveResource',
    'click .save-goal'        : 'saveGoal',
  },

  template: _.template($('.week-template').text()),

  initialize: function () {
    $('.week-container').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.html(this.template())
  },

  saveAssignment: function () {
    Demi.collections.assignments.add({assignment: {description: $('.input-assignment').val()}}).save()
  },

  saveResource: function () {
    Demi.collections.resources.add({resource: {
      description: $('.input-resource-url').val(),
      url:         $('.input-resource-description').val()
    }}).save()
  },

  saveGoal: function () {
    Demi.collections.goals.add({goal: {description: $('.input-goal').val()}}).save()
  },

})