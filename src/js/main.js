$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

$( document ).ready(function(){
	  $( ".submit-js" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
	    $( ".form" ).submit(); // вызываем событие submit на элементе <form>
	  });
	  $( ".form" ).submit(function( event ){ // задаем функцию при срабатывании события "submit" на элементе <form>
	    event.preventDefault(); // действие события по умолчанию не будет срабатывать
	    $( ".contact-content__right-form-name-txt-desktop" ).text( "Form submitted" ) // добавляем текстовое содержимое в элемент <span>
	               .css({ 
	                 "display": "inline", // элемент <span> отображается как строчный
	                 "color": "red" // цвет текста светло-зеленый
	               })
	               .fadeOut( 1000 ); //  плавно изменяем прозрачность элемента <span> за 1 секунду 
	});
});