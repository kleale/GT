/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    // bar toggle on mobile
    $("#menu-toggle").click(function() {
      $("body").toggleClass("menu-open");
      $(this).toggleClass("active");
      $(".bar").toggleClass("hiddenbar");
	});
    
    //$('#pop').popover();
    
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
    
    // tabs on mobile
    function setScale(){
      if ($(window).width()  < 768) {
        $('.mtb').each(function(i, elm) {
          $(elm).text($(elm).next('ul').find('li.active a').text());
        });
        $('.mtb').on('click', function(e) {
            e.preventDefault();
            $(e.target).toggleClass('open').next('ul').slideToggle();
        });
        $('.stm_nav_block a[data-toggle="tab"]').on('click', function(e) {
            e.preventDefault();
            $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
        });
      }
      else{
        $('.stm_nav_block').css( "display", "table");
      }
    } //window
    setScale();
    $(window).on("resize", setScale);
    
    //piks popover
    
    $('.hpop').popover({
        'html': true,
        'trigger': 'hover',
        'placement': 'auto bottom',
        'container': 'body',
        'template':'<div class="popover htip"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>',
        'content': function(){
            var txt = '<figure><img src="../img/heroh.jpg"></figure>';
            txt += '<h2>Beastmaster</h2>';
            txt += '<u><b class="gren">81й</b> в рейтинге</u>';
            txt += '<u><b class="red">21.5%</b> побед</u>';
            txt += '<em>Melee, Disabler, Durable, Iniciator, Nuker</em>';
            return txt;
        }
    });
    
    // scrolls in tabs and blocks
    $('.tse-sc').perfectScrollbar(); 
    
    // bar toggle on mobile
    $(".stage em").click(function() {
      $(".stage").toggleClass("stage-open");
	});
    
    //tip
    $('.tip').tooltip();
    
    // Match list links on tr
    /*
    $('.m-item').click(function(e) {
        e.preventDefault(); e.stopPropagation();
        window.location.href = $(e.currentTarget).data().href;
    });
    */
    $('.m-item').on('click', 'tr', function (e) {
        var $this = $(e.currentTarget);

        if ($this[0].nodeName.toLowerCase() != 'a' && $this.attr('data-href')) {
            if (e.ctrlKey == true) {
                window.open($this.attr('data-href'));
            } else {
                window.location.href = $this.attr('data-href');
            }
        }
    }).on('mousedown', 'tr', function (e) {
        var $this = $(e.currentTarget);

        if (e.which === 2 && $this[0].nodeName.toLowerCase() != 'a' && $this.attr('data-href')) {
            window.open($this.attr('data-href'));
        }
    });
    
    
  }); //end ready

}(jQuery));