"use strict";



Demi.Views.AppView = Backbone.View.extend({
	// create, fetch and listenTo all of the collections instances
	initialize: function () {
		// Instantiate the collections
		Demi.collections.courseCollection = new Demi.Collections.CourseCollection();
		Demi.collections.timelineCollection = new Demi.Collections.TimelineCollection();
		Demi.collections.weekCollection = new Demi.Collections.WeekCollection();
		Demi.collections.goalsCollection = new Demi.Collections.GoalsCollection();
		Demi.collections.resourcesCollection = new Demi.Collections.ResourcesCollection();
		Demi.collections.assignmentsCollection = new Demi.Collections.AssignmentsCollection();
		// fetch em
		Demi.collections.courseCollection.fetch();
		Demi.collections.timelineCollection.fetch();
		Demi.collections.weekCollection.fetch();
		Demi.collections.goalsCollection.fetch();
		Demi.collections.resourcesCollection.fetch();
		Demi.collections.assignmentsCollection.fetch();
		// this App view will listen to each collection and add then pass it's model into a function
		this.listenTo(Demi.collections.courseCollection, 'add', function (course) {
			// instantiate a new view and pass in the model instance
			// Demi.views.viewOne = new Demi.Views.ViewOne({model: course});
		});
		this.listenTo(Demi.collections.timelineCollection, 'add', function (timline) {

		});
		this.listenTo(Demi.collections.weekCollection, 'add', function (week) {

		});
		this.listenTo(Demi.collections.goalsCollection, 'add', function (goals) {

		});
		this.listenTo(Demi.collections.resourcesCollection, 'add', function (resources) {

		});
		this.listenTo(Demi.collections.assignmentsCollection, 'add', function (assignments) {

		});
	},
});

new Demi.Views.AppView();
