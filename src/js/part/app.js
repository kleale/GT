(function ($) {
  'use strict';

  $(document).ready(function () {
    $("#menu-toggle").click(function() {
      $("body").toggleClass("menu-open");
      $(this).toggleClass("active");
	});
    
    
    
    
  }); //end ready

}(jQuery));