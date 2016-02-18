$(function() {
 $('#sdt_menu > li').bind('mouseenter',function(){
  var $elem = $(this);
  $elem.find('img')
    .stop(true)
    .animate({
    'width':'100px',
    'height':'100px',
    'left':'0px'
    },400,'easeOutBack')
    .andSelf()
    .find('.sdt_wrap')
    .stop(true)
    .animate({'top':'140px', 'opacity':'0.0'},500,'easeOutBack')
    .andSelf()
    .find('.sdt_active')
    .stop(true)
    .animate({'height':'170px'},300,function(){
   var $sub_menu = $elem.find('.sdt_box');
   if($sub_menu.length){
    var left = '170px';
    if($elem.parent().children().length == $elem.index()+1)
     left = '-170px';
    $sub_menu.show().animate({'bottom':left},200);
   }
  });
 }).bind('mouseleave',function(){
  var $elem = $(this);
  var $sub_menu = $elem.find('.sdt_box');
  if($sub_menu.length)
   $sub_menu.hide().css('left','0px');
 
  $elem.find('.sdt_active')
    .stop(true)
    .animate({'height':'0px'},300)
    .andSelf().find('img')
    .stop(true)
    .animate({
    'width':'0px',
    'height':'0px',
    'left':'60px'},400)
    .andSelf()
    .find('.sdt_wrap')
    .stop(true)
    .animate({'top':'25px'},500);
 });
});

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

