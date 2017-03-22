//Check off todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear out input box
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
})

$("i").click(function(){
	$(this).toggleClass("fa-plus");
	$(this).toggleClass("fa-minus");
	$("input[type='text']").fadeToggle();
})