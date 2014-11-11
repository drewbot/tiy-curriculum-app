"use strict";

$('.save-goal').click( function() {
	// checks for a value in input field
	if ($('.input-goal').val() !== ''){
		// the saved value will be equal to whatever is entered in the text box
		var text = $('.input-goal').val();
		//Create a new model instance, passing in JSON object for item with input value as text
		var createItem = new Mover.Models.Goal({'item': text});
		// add the new model instance to goals collection
		Mover.collections.goalsCollection.add(createItem);
		// clear input
		$('.input-goal').val('');
	// If no input value is present show alert
	else {
		alert("You must add a new list item before saving");
	}
});

$('.save-resource').click( function() {
	// checks for a value in input fields 
	if ($('.input-resource-url').val() !== '' && $('.input-resource-description').val() !== ''){
		// the saved value will be equal to whatever is entered in the text box
		var url = $('.input-resource-url').val();
		var text = $('.input-resource-description').val();
		//Create a new model instance, passing in JSON object for item with input value as text
		// and url input for the url
		var createItem = new Mover.Models.Resource({'item-url': url, 'item': text});
		// add the new model instance to resources collection
		Mover.collections.resourcesCollection.add(createItem);
		// clear inputs
		$('.input-resource-url').val('');
		$('.input-resource-description').val('');
	// If no input value is present show alert
	else {
		alert("You must add a new list item before saving");
	}
});

$('.save-assignment').click( function() {
	// checks for a value in input field
	if ($('.input-assignment').val() !== ''){
		// the saved value will be equal to whatever is entered in the text box
		var text = $('.input-assignment').val();
		//Create a new model instance, passing in JSON object for item with input value as text
		var createItem = new Mover.Models.Assignment({'item': text});
		// add the new model instance to assignments collection
		Mover.collections.assignmentsCollection.add(createItem);
		// clear input
		$('.input-assignment').val('');
	// If no input value is present show alert
	else {
		alert("You must add a new list item before saving");
	}
});

