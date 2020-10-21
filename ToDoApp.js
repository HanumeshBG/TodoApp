$(document).ready(function() {
	var input = $("#userInput");

	$(".fa-plus").on("click", function() {
	  $(input).fadeToggle("slow");
	})

	function inputLength() {
	  return input.val().length;
	}

	function createElement() {
	  var inputText = input.val();
	  $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputText + "</li>")
	  inputText = input.val("");
	  //remove list item when click on X button
	  $("ul").on("click", "span", function(event) {
	  	$(this).parent().fadeOut(500, function() {
	  		$(this).remove();
	  	})
	  	event.stopPropagation();
	  })
	}
	  //Mark to do list complete
	  $("ul").on("click", "li", function() {
	  	$(this).toggleClass("completed");
	  })
	

	input.on("keypress", function(event) {
	  if(inputLength() > 0 && event.which === 13) {
        createElement();
	  }
	})
})