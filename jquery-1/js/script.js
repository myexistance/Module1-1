$(document).ready(function(){
	$(".row2").hide();
	//add text to the end
	/*$(".btn-show").click(function(){
		$(".row").append("This is the added text");
	});*/
	//adding to the ul list item
	$(".btn-xtra"). click(function(){
  			$("ul").append("<li> Chips</li>");
  		});
	//add to the beginning 
	/*$(".btn-show").click(function(){
		$(".row").prepend("This is the added text");
	});*/
	//replaces the text
	/*$(".btn-show").click(function(){
		$(".row").text("This is the added text");
	});*/
	$(".btn-remove").click(function(){
		$(".row2").remove();
	});
	//chaining many functions for the same selection
	$(".btn-show").click(function(){
		$(".row2")
		.slideDown(2000)
		.slideUp(2000);
	});
	//using css light and dark
	$(".btn-light").click(function(){
        $(".row"). css("opacity", "0.2");
      });
	$(".btn-dark").click(function(){
        $(".row"). css("opacity", "1");
      });
	//gettng the value of the input box
	$(".btn-username").click(function(){
        alert($("#username").val());
      });
       /*$( "#pizza" ).draggable();
     $( "#pizza" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      
    });*/
	/*$('.btn-xtra').droppable({
		accept: "menu",
		drop: function(event, ui){
			$(this).addClass("red");
		}
	});*/
});






