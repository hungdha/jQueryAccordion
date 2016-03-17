
/**
	Author: Hung Le	
	Country : Viet Nam
	skype : liplop703	
*/

(function($) {
	"use strict"
	$.fn.accordion = function(options) {
		var settings = $.extend({}, {open: false}, options);

		return this.each(initial);	
		
		function initial() {		
			var dts = $(this).children('dt');
			dts.click(onClick);
			dts.each(reset);
			dts.each(function(){
				var text = $(this).text();
				$(this).html("<span class='arrow collapse'>" + text + "</span>");
			})
			if(settings.open){
				var $target = $(this).children('dt:first-child').next();					
				$target.show();
				$target.addClass("active");				
				$(this).children('dt:first-child').find(".arrow").removeClass("collapse").addClass("expand");
			}
		}


		function onClick() {
			var $this = $(this);
			var $target = $this.next();
			var $finderArrow = $this.find(".arrow");
			$(this).siblings('dt').each(hide);		
			if( $target.hasClass("active")){			
				$target.removeClass("active");
        		$finderArrow.removeClass("expand").addClass("collapse");			
				$target.slideUp();
        	}else{
				$target.slideDown();
				$target.addClass("active");
        		$finderArrow.removeClass("collapse").addClass("expand");
        	}

			return false;
		}
		
		function hide() {
			var $this = $(this);
			var $target = $this.next();
			$target.slideUp();		
			$this.find(".arrow").removeClass("expand").addClass("collapse");
			$target.removeClass("active");
		}		

		function reset() {
			$(this).next().hide();					
		}
	}
})(jQuery);