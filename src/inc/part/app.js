/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    $(".ibg").mousemove(function( event ) {
      $(".ibg").css('transform', 'translate(' + event.pageY /40 + 'px, ' + -event.pageX /40+ 'px)');
    });
    
    // dropdown hide
    $(document).click(function(){
      $("#dropdown").hide();
    });
    
    // bar toggle on mobile
    $("#menu-toggle").click(function() {
      $("body").toggleClass("menu-open");
      $(this).toggleClass("active");
      $(".bar").toggleClass("hiddenbar");
	});
    
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
    
    //icon-pop
    $('.icon-pop').popover({
        'html': true,
        'trigger': 'hover',
        'placement': 'auto bottom',
        'container': 'body',
        'template':'<div class="popover htip i-pop"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>'
    });
    
    //tour-name-pop
    $('.tour-pop').popover({
        'html': true,
        'trigger': 'hover',
        'placement': 'auto bottom',
        'container': 'body',
        'template':'<div class="popover htip t-pop"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>'
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
    // на локале не срабатывает, но должен.
    // вот еще пример http://shahinalborz.se/2014/04/solution-make-an-entire-table-row-clickable/
    
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
    
    // checkbox to switch
    $("[name='switch']").bootstrapSwitch();
    
    // countdown on top match list
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('До начала %H:%M:%S'));
      });
    });
    
    // news read more slider
    $('.ns1 ul').owlCarousel({
      loop:true,
      navigation: true,
      navigationText: ["назад","вперед"],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      },
      afterInit : function(){
        $(".mlh").width($('.owl-item').width());
        $(".mlh").height($('.owl-item').height());
      }
    });
    
    // слайдер новостей 2
    $('.ns2 ul').owlCarousel({
      loop:true,
      navigation: true,
      navigationText: ["назад","вперед"],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
    });
    
    // слайдер новостей 3
    $('.ns3 ul').owlCarousel({
      loop:true,
      navigation: true,
      navigationText: ["назад","вперед"],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
    });

    // слайдер замеса горизонт
    $('.ns4 ul').owlCarousel({
      loop:true,
      navigation: true,
      navigationText: ["назад","вперед"],
      responsiveClass:true,
      items : 4, 
      itemsDesktop : [1000,4], 
      itemsDesktopSmall : [900,3],
      itemsTablet: [600,2] 
    });
  
    // слайдер игроков на странице команды
    $('#slPlayers').owlCarousel({
      navigation: true,
      navigationText: ["назад","вперед"],
      responsiveClass:true,
      items : 5, 
      itemsDesktop : [1000,4], 
      itemsDesktopSmall : [900,3],
      itemsTablet: [600,2] 
    }); 
    
    // scrolls match-top-home.html
    $('.m-hot').perfectScrollbar(); 
    
  }); //end ready

}(jQuery));