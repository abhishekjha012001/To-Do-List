$("ul").on("click","li",function(){
	$(this).toggleClass("selectli");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		var newtodo=$(this).val();
		$(this).val("");
		$("ul").append("<li> <span> <i class=\"fas fa-minus-circle\"></i>  </span> " + newtodo + " </li>")
	}
});

$(".fa-chevron-down").on("click",function(){
	$("input").fadeToggle();
});