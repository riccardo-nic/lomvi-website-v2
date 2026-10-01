(function(){
  var h=document.getElementById('site-header'),logo=document.getElementById('site-logo'),btn=document.getElementById('menu-btn'),menu=document.getElementById('mobile-menu');
  var white=logo.getAttribute('src'),dark=white.replace('lomvi-logo-white.svg','lomvi-logo.svg');
  function upd(){var s=window.scrollY>40||menu.classList.contains('open');h.classList.toggle('scrolled',s);logo.setAttribute('src',s?dark:white);}
  window.addEventListener('scroll',upd,{passive:true});upd();
  btn.addEventListener('click',function(){menu.classList.toggle('open');upd();});
  document.querySelectorAll('video').forEach(function(v){v.muted=true;var p=v.play();if(p&&p.catch)p.catch(function(){});});
})();
