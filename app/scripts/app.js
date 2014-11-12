"use strict";

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

