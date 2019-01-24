$(function(){
	$("nav a").mouseover(function(){
    	$(this).addClass("active").siblings().removeClass("active");		
    });
    $(".focusbox ul li").click(function(){
    	var index = $(this).index();
    	$(this).addClass("on").siblings().removeClass("on");
    	$(".focusbox .banner img").hide().eq(index).show();
    });
    setInterval(function(){
    	var li = $(".focusbox ul li");
    	var li_length = li.length;
    	var li_on = $(".focusbox ul li.on");
    	var on_index = li.index(li_on);
    	if (on_index+1<li_length) {
    		$(".focusbox li.on").next().click();
    	}else{
    		li.eq(0).click();
    	}

    },2000)
  
})