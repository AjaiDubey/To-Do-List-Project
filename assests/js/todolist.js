$("li").click(function(){
	$(this).toggleClass("completed");
});

$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("input[type = 'text']").keypress(function(e){
	if(e.which === 13){
		var value = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>x</span> " + value + "</span>");
	}
});