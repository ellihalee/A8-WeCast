//Hey guys remember to comment your code and write your name on functions

'use strict';


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

//Listeners:



//Functions:

// Enable Popovers
$(function () {
  $('[data-toggle="popover"]').popover()
})

//Sample Function
function initializePage(){
	console.log("Javascript connected!");  
}
