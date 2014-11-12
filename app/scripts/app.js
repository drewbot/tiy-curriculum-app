"use strict";

Backbone._sync = Backbone.sync;

Backbone.sync = function(method, model, options) {
  options.beforeSend = function(xhr) {
    var authtoken = 'Mellon';
    if (authtoken) {
      return xhr.setRequestHeader("Authorization", authtoken);
    }
  };
  return Backbone._sync(method, model, options);
};

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
		
		// fetch them
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





$('.save-goal').click( function() {
	// checks for a value in input field
	if ($('.input-goal').val() !== ''){
		// store input value as a variable
		var text = $('.input-goal').val();
		// Create a new model instance, passing in a JSON object for 'item' with input value as text
		var createItem = new Demi.Models.Goal({'item': text});
		// add the new model instance to goals collection
		Demi.collections.goalsCollection.add(createItem);
		// clear input
		$('.input-goal').val('');
	// If no input value is present show alert
	} else {
		alert("You must add a new goal before saving");
	}
});

$('.save-resource').click( function() {
	// checks for a value in input fields 
	if ($('.input-resource-url').val() !== '' && $('.input-resource-description').val() !== ''){
		// store input values as variables
		var url = $('.input-resource-url').val();
		var text = $('.input-resource-description').val();
		// Create a new model instance, passing in a JSON object for 'item' 
		// with input value as text and url input for the url
		var createItem = new Demi.Models.Resource({'itemUrl': url, 'item': text});
		// add the new model instance to resources collection
		Demi.collections.resourcesCollection.add(createItem);
		// clear inputs
		$('.input-resource-url').val('');
		$('.input-resource-description').val('');
	// If no input value is present show alert
	} else {
		alert("You must add a new resource before saving");
	}
});

$('.save-assignment').click( function() {
	// checks for a value in input field
	if ($('.input-assignment').val() !== ''){
		// store input value as a variable
		var text = $('.input-assignment').val();
		// Create a new model instance, passing in a JSON object for 'item' with input value as text
		var createItem = new Demi.Models.Assignment({'item': text});
		// add the new model instance to assignments collection
		Demi.collections.assignmentsCollection.add(createItem);
		// clear input
		$('.input-assignment').val('');
	// If no input value is present show alert
	} else {
		alert("You must add a new assignment before saving");
	}
});



$(document).ready(function(){
	$('.list p').collapser({
		mode: 'lines',
		truncate: 2,
		speed: 'fast',
		effect: 'fade',
		hideText: ' Hide text'
	});	
});