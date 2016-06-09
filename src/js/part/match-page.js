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
    
	/* sticky icons */
    
    if (document.getElementById('m-fast')) {
      $('#m-fast').affix({
        offset: {
          top: 0,
          bottom: function () {
            return (this.bottom = $('.footer').outerHeight(true))
          }
        }
      })
    }
    
    // Переключение вкладок стандартных блоков
    $('.stm_nav_block a').click(function (e) {
      e.preventDefault()
      $(this).tab('show');
      $('.tse-sc').TrackpadScrollEmulator('recalculate');
    })
    
    $('.stream_menu li').click(function (e) {
      e.preventDefault()
      $(this).tab('show');
      $('.tse-sc').TrackpadScrollEmulator('recalculate');
    })
    
    //Мобильное меню матча с иконками
    $('body').scrollspy({ target: '#m-fast', offset : 100 })
    
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });
    
    $("#head-toggle").click(function() {
      $(".m-head").toggleClass("m-head_compact");
	});
    
    
    
    
    
  }); //end ready

}(jQuery));