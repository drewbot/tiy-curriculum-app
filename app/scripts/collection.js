"use strict";

Demi.Collections.CourseCollection = Backbone.Collection.extend({
	model: Demi.Models.Course,
	// url: 'http://tiny-pizza-server.herokuapp.com/collections/dbMovingCollectionOne'
});

Demi.Collections.TimelineCollection = Backbone.Collection.extend({
	model: Demi.Models.Timeline,

});

Demi.Collections.WeekCollection = Backbone.Collection.extend({
	model: Demi.Models.Week,

});

Demi.Collections.GoalsCollection = Backbone.Collection.extend({
	model: Demi.Models.Goals,

});

Demi.Collections.ResourcesCollection = Backbone.Collection.extend({
	model: Demi.Models.Resources,

});

Demi.Collections.AssignmentsCollection = Backbone.Collection.extend({
	model: Demi.Models.Assignments,

});