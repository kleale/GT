/*
 Scripts for match page
*/

(function ($) {
  'use strict';

  $(document).ready(function () {
    // Log search
    $(function() {
      $("#logfilter").keyup(function(){
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
        // Loop through the comment list
        $("#loglist > div").each(function(){
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
        // Update the count
        /*
        var numberItems = count;
          $("#filter-count").text("Number of Comments = "+count);
        */
      });
    });
    
	/* stickyfloat */
    /*
	(function(c){c.fn.stickyfloat=function(l){var b=this,f=c(document),h=parseInt(b.parent().css("padding-top")),g=b.parent().offset().top,a,d,i,j,k,e;a=c.fn.stickyfloat.opts;c.extend(a,{startOffset:g,offsetY:h},l);b.css("position","absolute");c(window).bind("scroll.sticky",function(){b.stop();d=b.parent().height()-b.outerHeight()+h;d=0>d?0:d;i=f.scrollTop()>a.startOffset;j=b.offset().top>g;k=b.outerHeight()<c(window).height();if((i||j)&&k)e=a.stickToBottom?f.scrollTop()+c(window.top).height()-b.outerHeight()- g-a.offsetY:f.scrollTop()-g+a.offsetY,e>d?e=d:f.scrollTop()<a.startOffset&&!a.stickToBottom&&(e=h),5<a.duration?b.stop().delay(a.delay).animate({top:e},a.duration,a.easing):b.stop().css("top",e)})};c.fn.stickyfloat.opts={duration:200,lockBottom:!0,delay:0,easing:"linear",stickToBottom:!1}})(jQuery);
    
    if (document.getElementById('m-fast')) $('div#m-fast').stickyfloat({duration:100,offsetY:200});
    */
    
    $('.stm_nav_block a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    $('.stream_menu li').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    
    
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });
    
    
  }); //end ready

}(jQuery));