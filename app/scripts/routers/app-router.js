"use strict";

// AppRouter controls the bulk of Demi's uppder dropdown area, and
// the url-based navigation. Its complexity is due to the fact that each
// dropdown depends on the previous dropdown, but each dropdowns values
// based on separate API endpoints.
// 
// Enjooy!
Demi.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    ''                                                          : 'loadCourses',
    'courses/:courseId'                                         : 'loadTimelines',
    'courses/:courseId/timelines/:timelineId'                   : 'loadWeeks',
    'courses/:courseId/timelines/:timelineId/weeks/:weekNumber' : 'loadWeek',
  },

  initialize: function () {
    new Demi.Views.Week();

    // Initialize the courses, timelines, and weeks collection
    Demi.collections.courses = new Demi.Collections.courses();
    Demi.collections.timelines = new Demi.Collections.timelines();
    Demi.collections.weeks = new Demi.Collections.weeks();

    Demi.collections.goals = new Demi.Collections.Goals();
    Demi.collections.resources = new Demi.Collections.Resources();
    Demi.collections.assignments = new Demi.Collections.Assignments();


    // Each collection should send newly added model instances to a
    // `Demi.Views.DropdownItem` constructor
    this.listenTo(Demi.collections.courses, 'add', function (course) {
      new Demi.Views.DropdownItem({model: course});
    });

    this.listenTo(Demi.collections.timelines, 'add', function (timeline) {
      new Demi.Views.DropdownItem({model: timeline});
    });

    this.listenTo(Demi.collections.weeks, 'add', function (week) {
      new Demi.Views.DropdownItem({model: week});
    });

    this.listenTo(Demi.collections.goals, 'add', function (goal) {
      new Demi.Views.Goal({model: goal})
    });

    this.listenTo(Demi.collections.resources, 'add', function (resource) {
      new Demi.Views.Resource({model: resource})
    });

    this.listenTo(Demi.collections.assignments, 'add', function (assignment) {
      new Demi.Views.Assignment({model: assignment})
    });
    
    // We'll always need the courses collection, so let's just go ahead
    // and fetch it now.
    Demi.promises.coursePromise = Demi.collections.courses.fetch();
  },

  
  // Override Backbone.Router.execute to also call `this.assumeAndPrefetch`,
  // before we run each route's method
  execute: function(callback, args) {
    this.assumeAndPrefetch();
    if (callback) callback.apply(this, args);
  },

  // The purpose of `assumeAndPretch` is to look at the url, determine
  // the IDs of each segment, use (or create) models with those IDs as the
  // "current" models (which are stored in `Demi.current`), and fetch the
  // collections that they belong to.
  assumeAndPrefetch: function () {
    var hashSplit = window.location.hash.split('/'),
        courseIndex,
        timelineIndex,
        weekIndex;

    if (courseIndex = this.urlHas(hashSplit, 'courses')) {
      Demi.current.course = Demi.collections.courses.add({id: hashSplit[courseIndex]});
      Demi.promises.timelinePromise = Demi.collections.timelines.fetch();
    } else { Demi.current.course = undefined; }

    if (timelineIndex = this.urlHas(hashSplit, 'timelines')) {
      Demi.current.timeline = Demi.collections.timelines.add({id: hashSplit[timelineIndex]});
      Demi.promises.weekPromise = Demi.collections.weeks.fetch();
    } else { Demi.current.timeline = undefined; }

    if (weekIndex = this.urlHas(hashSplit, 'weeks')) {
      Demi.current.week = Demi.collections.weeks.add({number: hashSplit[weekIndex]});
    } else { Demi.current.week = undefined; }

  },

  // When there are no route segments, we still need to wait for the courses promise
  // to resolve (`this.promises(1).done()`). Upon resolution, set the dropdowns, and
  // erase the timelines and weeks collections, and their respective dropdowns
  loadCourses: function (erase) {
    this.promises(1).done(this.setDropdowns);
    if (erase) this.erase(['timelines', 'weeks'])
    return this;  
  },

  // When routes match `courses/:courseId`, wait for the first two promises resolve,
  // and erase the timelines and weeks collections, and their respective dropdowns.
  loadTimelines: function (erase) {
    this.promises(2).done(this.setDropdowns);
    if (erase) this.erase(['timelines', 'weeks'])
    return this;  
  },

  // When routes match `courses/:courseId/timelines/:timelineId`, wait for the first 
  // three promises resolve, and erase the timelines and weeks collections, and their 
  // respective dropdowns.
  loadWeeks: function (erase) {
    this.promises(3).done(this.setDropdowns);
    if (erase) this.erase(['weeks'])

    return this;
  },

  // When routes match `courses/:courseId/timelines/:timelineId/weeks/:weekNumber`, 
  // wait for the first three promises resolve, and erase the timelines and weeks  
  // collections, and their respective dropdowns.
  loadWeek: function (erase) {
    $('.assignment-items ol, .resource-items ol, .goal-items ol').html('');
    this.promises(3).done(function(){
      this.setDropdowns();

      // Iterate over the current week's resources and create views and models.
      // Note: these should probably be in a collection?
      _.each(Demi.current.week.get('resources'), function(resource){
        Demi.collections.resources.add({resource: resource})
      })

      // This is silly, but yeah, we're iterating over the string goals/assignments and
      // making a new view and "model" with each. We need the API to return
      // actual goal and assignment models, not just strings :/
      _.each(Demi.current.week.get('goals'), function(goalString){

        var abc = Demi.collections.goals.add({goal: {description: goalString}});
        console.log('abc is',abc)
      })

      _.each(Demi.current.week.get('assignments'), function(assignmentString){
        Demi.collections.assignments.add({assignment: {description: assignmentString}})
      })

    }.bind(this));

    return this;
  },

  // a quick utitlity for resetting multiple collections at once
  // this is generally called when you've change the courses or
  // timelines dropdowns, and need to reset the dropdowns to
  // the right (the dependent collections).
  // 
  // This now clears out the existing views below the nav. That part
  // of this method should move elsewhere.
  erase: function (collections) {
    console.log('erasing', collections);
    _.each(collections, function(collection){
      Demi.collections[collection].reset();
    });
    // clear the <ol>s for the week.
    $('.assignment-items ol, .resource-items ol, .goal-items ol').html('');
    this.setDropdowns();
  },

  // Reports the index of the id/slug of the segment you're requesting.
  // The `hash` argument should be the return value of `location.hash.split('/')`
  urlHas: function(hash, segmentName){
    return _.indexOf(hash, segmentName) + 1;
  },

  // Sets the dropdowns text to match the selected item, or "choose" if it's
  // been reset.
  setDropdowns: function () {
    _.each(['course','timeline','week'], function(type){
      if (Demi.current[type]) {
        $('#' + type + '-list-dropdown').prev().find('.button-text').text(Demi.current[type].get('name'));
      } else {
        $('#' + type + '-list-dropdown').prev().find('.button-text').text('choose');
      }
    });
  },

  // This strange little function will let you know when one or more promises
  // have been resolved. The `howMany` argument should how many you want from
  // ordered list.
  //
  // For example, `this.promises(2).done(callback)` would run your callback
  // after the both `Demi.promises.coursePromise` and `Demi.promises.timelinePromise`
  // have been resolved. Bear in mind, this doesn't cause a `fetch`. It assumed these
  // deferreds have already been (re)defined elsewhere.
  promises: function(howMany){
    return $.when.apply(this, [
      Demi.promises.coursePromise, 
      Demi.promises.timelinePromise,
      Demi.promises.weekPromise].slice(0, howMany));
  }


})