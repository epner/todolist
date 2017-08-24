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
