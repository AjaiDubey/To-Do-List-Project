$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type = 'text']").keypress(function(ev){

	
	if(ev.which === 13){

		var ntodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + ntodo + " </li>")
	}
})
$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});