var App=function(){return{init:function(){},getViewPort:function(){var n=window,t="inner";return"innerWidth"in window||(t="client",n=document.documentElement||document.body),{width:n[t+"Width"],height:n[t+"Height"]}},getResponsiveBreakpoint:function(n){var t={xs:480,sm:768,md:992,lg:1200};return t[n]?t[n]:0}}}();$(document).ready(function(){App.init()});
//# sourceMappingURL=app.js.map
