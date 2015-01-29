$(document).ready(function(){ 
var caf=false;
var sassy=0;
var smart=0;
var loyal=0;
var earthy=0;

$('.result').hide();

	$('.answer').click(function() {
		if($(this).hasClass('caf')){
			caf=true;
		}
		if($(this).hasClass('sassy')){
			sassy++;
		}
		if($(this).hasClass('smart')){
			smart++;
		}
		if($(this).hasClass('loyal')){
			loyal++;
		}
		if($(this).hasClass('earthy')){
			earthy++;
		}
	});

	$('.submit').click(function(){
		if(caf==true){
			if(sassy>=2){
				$('#sassy-caf').slideToggle('slow');
			}
			else if(smart>=2){
				$('#smart-caf').slideToggle('slow');
			}
			else if(loyal>=2){
				$('#loyal-caf').slideToggle('slow');
			}
			else if(earthy>=2){
				$('#earthy-caf').slideToggle('slow');
			}
			else{
				$('#loyal-caf').slideToggle('slow');

			}
		}
		else{
			if(sassy>=2){
				$('#sassy-decaf').slideToggle('slow');
			}
			else if(smart>=2){
				$('#smart-decaf').slideToggle('slow');
			}
			else if(loyal>=2){
				$('#loyal-decaf').slideToggle('slow');
			}
			else if(earthy>=2){
				$('#earthy-decaf').slideToggle('slow');
			}
			else{
				$('#loyal-decaf').slideToggle('slow');

			}
		}
		$('html, body').animate({
			scrollTop: $("#results").offset().top
		}, 500);

	});
});