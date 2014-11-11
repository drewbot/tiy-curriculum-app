"use strict";

Demi.Collections.CourseCollection = Backbone.Collection.extend({
	model: Demi.Models.Course,
	url: 'http://normalizer.herokuapp.com/courses'
});

Demi.Collections.TimelineCollection = Backbone.Collection.extend({
	model: Demi.Models.Timeline,
	url: 'http://normalizer.herokuapp.com/timelines'
});

Demi.Collections.WeekCollection = Backbone.Collection.extend({
	model: Demi.Models.Week,
	url: 'http://normalizer.herokuapp.com/weeks'
});

Demi.Collections.GoalsCollection = Backbone.Collection.extend({
	model: Demi.Models.Goal,
	url: 'http://normalizer.herokuapp.com/goals'
});

Demi.Collections.ResourcesCollection = Backbone.Collection.extend({
	model: Demi.Models.Resource,
	url: 'http://normalizer.herokuapp.com/resources'
});

Demi.Collections.AssignmentsCollection = Backbone.Collection.extend({
	model: Demi.Models.Assignment,
	url: 'http://normalizer.herokuapp.com/assignments'
});