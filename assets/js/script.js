$(document).ready(function(){
	var height = 0,height2 = 0;
	$('.top_head').each(function(){
		if ($(this).outerHeight() > height) {
			height = $(this).outerHeight();
		}
	})
	$('.top_head').each(function(){
		$(this).css('min-height',height);
	})
	$('.top_text').each(function(){
		if ($(this).outerHeight() > height2) {
			height2 = $(this).outerHeight();
		}
	})
	$('.top_text').each(function(){
		$(this).css('min-height',height2);
	})
	$('#myCarousel').bind('slide.bs.carousel', function (e) {
		activeslide();
	});
	activeslide();
	$('body').on('click','.slider_list li',function(){
		var slideclick = $(this).index();
		slideclick++;
		$('#myCarousel .carousel-indicators li:nth-child(' + slideclick + ')').click();
	});
	$('body').on('change, keyup','.login_control input',function(){
		var $this = $(this);
		setTimeout(function(){
			if($this.val() == ''){
				$this.parent().addClass('label_hidden');
			}
			else{
				$this.parent().removeClass('label_hidden');
			}
		},100);
	});
	$('body').on('click','.pass_visible',function(){
		if ($(this).find('i').hasClass('fa-eye-slash')) {
			$(this).find('i').removeClass('fa-eye-slash').addClass('fa-eye');
			$(this).siblings('input').attr('type','password');
		}
		else{
			$(this).find('i').removeClass('fa-eye').addClass('fa-eye-slash');
			$(this).siblings('input').attr('type','text');
		}
	})
	$('body').on('click','.btn-toggle',function() {
      jQuery(this).find('.btn').toggleClass('active');  
    });
	$('body').on('click',"#show",function(){
        $(".need_help_sec").toggle(500);
      });
  	$('body').on('click',"#hide",function(){
        $(".need_help_sec").fadeOut(500);
  	});
  	$('body').on('click',".show_tag_modal",function(){
  	    $(this).addClass("active");
        $(this).siblings(".add_tag_sec").fadeIn(500);
            var windowwidth = $(window).width();
            var containerwidth = $(".container").width();
            var viewleftoffset = $(this).parents(".view").offset().left;
            var offstlft = viewleftoffset - ((windowwidth - containerwidth)/2) ;
            $(this).siblings(".location_modal").css("left",offstlft);
      });
  	$('body').on('click',".hide_tag_modal",function(){
  		$(this).parents('.add_tag').find(".show_tag_modal").removeClass("active");
        $(this).parents(".add_tag_sec").fadeOut(500);
  	});
  	$('body').on('click',".brown_btn",function(){
  		$(".added-tag").addClass("active");
  	});
  	$('body').on('click',".btnGetValue",function(){
      var value = $(this).parents('.add_tag_body').find( ".mySelect" ).val();
      if (value != null)
      $(this).parents('.add_tag_btn_row').find('.added-tag').append('<p class="post_btn_common">' + value + '</p>');    
      });
      $(".getInputValue").click(function(){
      var value = $(this).parents('.add_tag_body').find( ".myInput" ).val();
      if (value != '')
      $(this).parents('.add_tag_btn_row').find('.added-tag').append('<p class="post_btn_common">' + value + '</p>');
    });
      $('body').on('click',".trash_btn",function(){
  	    $(this).addClass("active");
        $(this).siblings(".add_tag_sec").fadeIn(500);
      });
  	$('body').on('click',".hide_tag_modal",function(){
  		$(this).parents('.add_tag').find(".trash_btn").removeClass("active");
        $(this).parents(".add_tag_sec").fadeOut(500);
  	});
  	$('body').on('click','.remove-div',function(){
  	   $(this).parents(".post_wrap").remove();
	});
	
	// $("#select_all").change(function(){  //"select all" change 
 //    $(".checkbox_test").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
	// });

	// //".checkbox" change 
	// $('.checkbox_test').change(function(){ 
	//     //uncheck "select all", if one of the listed checkbox item is unchecked
	//     if(false == $(this).prop("checked")){ //if this item is unchecked
	//         $("#select_all").prop('checked', false); //change "select all" checked status to false
	//     }
	//     //check "select all" if all checkbox items are checked
	//     if ($('.checkbox_test:checked').length == $('.checkbox_test').length ){
	//         $("#select_all").prop('checked', true);
	//     }
	// });
	
});
function activeslide(){
	setTimeout(function(){
		var slideactive = $('#myCarousel .carousel-indicators li.active').index();
		slideactive++;
		$('.slider_list li').removeClass('active_slide');
		$('.slider_list li:nth-child(' + slideactive + ')').addClass('active_slide');
	},100);
}