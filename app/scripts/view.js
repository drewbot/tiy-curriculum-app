"use strict";

Mover.Views.GoalsView = Backbone.View.extend({
	template: _.template($('.goal-template').html()),
	// className: 'collection-one-item',

	events: {
		'click .delete-button button'	: 'destroy',
		'click .edit-button button'	: 'editGoal',
	},

	initialize: function () {
		// listen to the model (constantly runs) if it hears a destroy remove the view
		this.listenTo(this.model, 'destroy', this.remove);
		$('.goals-list').append(this.el);
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


Demi.Views.AppView = Backbone.View.extend({
	// create, fetch and listenTo all of the collections instances
	initialize: function () {
		// Instantiate the collections
		Demi.collections.coursesCollection = new Demi.Collections.CoursesCollection();
		Demi.collections.timelinesCollection = new Demi.Collections.TimelinesCollection();
		Demi.collections.weeksCollection = new Demi.Collections.WeeksCollection();
		Demi.collections.goalsCollection = new Demi.Collections.GoalsCollection();
		Demi.collections.resourcesCollection = new Demi.Collections.ResourcesCollection();
		Demi.collections.assignmentsCollection = new Demi.Collections.AssignmentsCollection();
		// fetch em
		Demi.collections.coursesCollection.fetch();
		Demi.collections.timelinesCollection.fetch();
		Demi.collections.weeksCollection.fetch();
		Demi.collections.goalsCollection.fetch();
		Demi.collections.resourcesCollection.fetch();
		Demi.collections.assignmentsCollection.fetch();
		// this App view will listen to each collection and add then pass it's model into a function
		this.listenTo(Demi.collections.coursesCollection, 'add', function (course) {
			// instantiate a new view and pass in the model instance
			// Demi.views.viewOne = new Demi.Views.ViewOne({model: course});
		});
		this.listenTo(Demi.collections.timelinesCollection, 'add', function (timeline) {

		});
		this.listenTo(Demi.collections.weeksCollection, 'add', function (week) {

		});
		this.listenTo(Demi.collections.goalsCollection, 'add', function (goal) {

		});
		this.listenTo(Demi.collections.resourcesCollection, 'add', function (resource) {

		});
		this.listenTo(Demi.collections.assignmentsCollection, 'add', function (assignment) {

		});
	},
});

new Demi.Views.AppView();
