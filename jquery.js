<<<<<<< HEAD
	// Create a "close" button and append it to each list item
$(document).ready(
		function() {
			$("#button").click(
					function() {
        		var toAdd = $("input[name=checkListItem]").val();
        			$(".list").append('<li>' + ' ' + toAdd + '</li>');
    			});

					var list = document.querySelector('.list');
						list.addEventListener('click',
							function(ev) {
								if(ev.target.tagName === 'LI') {
									ev.target.classList.toggle('done');
								}
							}, false);

			$("input[name=checkListItem]").keyup(function(event){
				if(event.keyCode == 13){
					$("#button").click();
				}
			});

			$('.list').sortable();


			$(function() {
			// select all desired input fields and attach tooltips to them
					 $("#toDoForm :input").tooltip({

			// place tooltip on the right edge
					 position: "center right",

			// a little tweaking of the position
					 offset: [-2, 10],

			// use the built-in fadeIn/fadeOut effect
					 effect: "fade",

			// custom opacity setting
					 opacity: 0.7

					 });
			});

});
=======
	// Create a "close" button and append it to each list item
$(document).ready(
		function() {
			$("#button").click(
					function() {
        		var toAdd = $("input[name=checkListItem]").val();
        			$(".list").append('<li>' + ' ' + toAdd + '</li>');
    			});
	
					var list = document.querySelector('.list');
						list.addEventListener('click', 
							function(ev) {
								if(ev.target.tagName === 'LI') {
									ev.target.classList.toggle('done'); 
								}
							}, false);
			
			$("input[name=checkListItem]").keyup(function(event){
				if(event.keyCode == 13){
					$("#button").click();
				}
			});
			
			$('.list').sortable();
		});
>>>>>>> f276f690e79ceb0b679f3d27dc2926a79e8c61ef
