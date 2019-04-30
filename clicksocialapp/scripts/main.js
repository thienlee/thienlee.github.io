!function(a,e,t){"use strict";function o(a){var e=document.getElementById(a);e.play()}function n(a){var e=document.getElementById(a);e.pause()}function i(e,t){this.element=a(e),this.options=a.extend({},a.fn[s].defaults,this.element.data(),t),this.init()}var s="plugin-video",l=a(e);i.prototype={init:function(){var a=this,e=a.element,t=a.options,i=e.find("#trailer-video"),s=e.find("#main-video"),l=s.attr("id"),r=function(){e.find(t.videoBackground).removeClass("bg-transparent"),e.find(t.trailerVideo+","+t.videoContent).fadeIn(),n.call(this,l)},c=function(){e.find(t.videoBackground).addClass("in-active"),e.find(t.trailerVideo+","+t.videoContent).fadeOut(),o.call(this,l)},u=navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1;u||setInterval(function(){e.find(t.videoBackground).hasClass("in-active")||(e.find(t.videoBackground).addClass("bg-transparent"),o.call(this,i.attr("id")))},5e3),e.find(t.buttonPlay).on("click",function(){i.hide(),c()}),document.getElementById(l).onpause=function(){r()},document.getElementById(l).onended=function(){r()}},destroy:function(){this.element.off("init."+s),l.off("resize."+s),a.removeData(this.element[0],s)}},a.fn[s]=function(e,t){return this.each(function(){var o=a.data(this,s);o?o[e]&&o[e](t):a.data(this,s,new i(this,e))})},a.fn[s].defaults={mainVideo:"[data-main-video]",trailerVideo:"[data-trailer-video]",buttonPlay:"[data-btn-play]",videoBackground:"[data-video-background]",videoContent:"[data-video-content]"},a(function(){a("[data-"+s+"]")[s]()})}(jQuery,window),function(a){var e=(App.getResponsiveBreakpoint("sm"),App.getResponsiveBreakpoint("md")),t=(App.getResponsiveBreakpoint("lg"),a(".header-block")),o=t.outerHeight(),n=a(".box-tooltip");a(window).resize(function(){o=t.outerHeight()});for(var i=a(".wrapper section").length,s=[],l=[],r=0;r<i;r++)s[r]=a("#section-"+(r+1)),l[r]=a(".main-nav-wrap li").eq(r);var c=a("[data-message]"),u=(c.attr("data-message-required"),c.attr("data-message-success"),a(".char-kelly"));TweenMax.set(u,{autoAlpha:1,scale:.4});var d=function(){function e(){w(),o.hide();var e=a(".video-banner-block .button-play");TweenMax.fromTo(e,2,{autoAlpha:0,scale:0},{autoAlpha:1,scale:1,ease:Back.easeInOut})}var t=a(".backdrop"),o=a(".loader"),n=o.find(".loader-img"),i=new TimelineMax({onComplete:e});i.to(n,.5,{autoAlpha:0,scale:2,delay:.8}).to(t,.5,{autoAlpha:0},"-=0.5")},f=a(".nav-toggle"),h=function(){f.removeClass("opened"),f.addClass("closed"),a(".main-nav").removeClass("inline")},p=function(){f.addClass("opened"),f.removeClass("closed"),a(".main-nav").addClass("inline")},g=function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(f.on("touchstart",function(a){a.stopPropagation(),f.hasClass("opened")?h():p()}),a("body").on("touchstart",function(){f.hasClass("opened")&&h()})):(f.on("click",function(a){a.stopPropagation(),f.hasClass("opened")?h():p()}),a("body").on("click",function(){f.hasClass("opened")&&h()}))},m=function(){var e,t=0,o=2;a(window).scroll(function(a){e=!0}),setInterval(function(){e&&(n(),e=!1)},250);var n=function(){var e=a(this).scrollTop();if(!(Math.abs(t-e)<=o)){for(var n=0;n<i;n++);t=e}}},v=function(){a(".main-nav-wrap li").each(function(e,t){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?a(this).on("touchstart",function(a){TweenMax.to(window,.6,{scrollTo:{y:"#section-"+(e+1),offsetY:o,autoKill:!1}}),h()}):a(this).on("click",function(a){TweenMax.to(window,.6,{scrollTo:{y:"#section-"+(e+1),offsetY:o,autoKill:!1}})}),a(this).on("click, touchstart",function(a){a.stopPropagation()})})},y=function(){n.each(function(e,t){var o=a(t).outerWidth(),n=a(t).closest(".chars").outerWidth();a(this).css("left",-(o-n)/2)})},w=function(){function e(){a('a[href="#user-types"]').click()}function t(){a('a[href="#interaction"]').click()}function o(){a('a[href="#search"]').click()}var n="user-types",i=a(".tab-1"),s=i.find(".des"),l=i.find(".char-kelly"),r=i.find(".cyan-overlay"),c=i.find(".char-kelly .box-tooltip-details"),u=i.find(".chars:not(.char-kelly)"),d=i.find(".js-chars .ava"),f=a(".modal-interact"),h=a(".tab-2"),p=h.find(".des"),g=h.find(".chars"),m=h.find(".ava"),v=h.find(".box-tooltip"),y=h.find(".g-icon"),w=a(".modal-event"),A=(a(".list-dots"),a(".tab-3")),b=A.find(".des"),k=A.find(".chars"),O=A.find(".location"),T=A.find(".event");a(".btn-timeline").on("click",function(){a(this).find(".btn-pause, .btn-play").toggleClass("hidden"),"user-types"==n?P.paused(!P.paused()):"interaction"==n?C.paused(!C.paused()):"search"==n&&B.paused(!B.paused())});var P=new TimelineMax({onComplete:t});P.to(l,.7,{scale:1,delay:.4}).to(r,.2,{autoAlpha:0},"-=0.2").to(c,.3,{autoAlpha:1},"-=0.3").staggerFromTo(u,1,{autoAlpha:0,transformOrigin:"50% 50%",delay:.5},{autoAlpha:1,ease:Back.easeInOut},.15).staggerTo(d,.3,{className:"+=ava-bright"},6,1).staggerFromTo(s,.6,{y:-60},{autoAlpha:1,y:0,ease:Back.easeInOut},6,1.2).staggerTo(d,.3,{className:"-=ava-bright"},6,6.5).staggerTo(s,.2,{autoAlpha:0,y:40},6,6.6);var C=new TimelineMax({onComplete:o});C.set(a(".btn-toggle .ion-toggle-filled"),{autoAlpha:0,delay:.7}).set(a(".btn-toggle .ion-toggle"),{autoAlpha:1}).to(a(".visible-block"),0,{autoAlpha:1,delay:.5}).fromTo(a(".visible-block .bg-circle"),1.2,{scale:1,autoAlpha:1,transformOrigin:"50% 50%"},{scale:.2,autoAlpha:0,ease:Power3.easeInOut}).fromTo(a(".visible-block .stt-1"),.8,{scale:1,autoAlpha:1,transformOrigin:"50% 50%"},{scale:.3,autoAlpha:0},"-=0.8").set(a(".btn-toggle .ion-toggle"),{autoAlpha:0,delay:.7}).set(a(".btn-toggle .ion-toggle-filled"),{autoAlpha:1}).set(a(".visible-block"),{className:"+=stt-visible"}).fromTo(a(".visible-block .bg-circle"),1.2,{scale:.2,autoAlpha:0,transformOrigin:"50% 50%"},{scale:1,autoAlpha:1,ease:Power3.easeInOut}).fromTo(a(".visible-block .stt-2"),.8,{scale:.3,autoAlpha:0,transformOrigin:"50% 50%"},{scale:1,autoAlpha:1},"-=0.8").to(a(".visible-block, .btn-toggle"),.4,{autoAlpha:0,delay:.5}).staggerFromTo(g,1,{autoAlpha:0,scale:.3,transformOrigin:"50% 50%"},{autoAlpha:1,scale:1,ease:Back.easeInOut},.15).fromTo(f,.3,{autoAlpha:0,scale:.6,transformOrigin:"0% 50%"},{autoAlpha:1,scale:1,ease:Power2.easeOut}).fromTo(a(p)[0],.1,{y:-60},{autoAlpha:1,y:0,ease:Back.easeInOut}).to(f,.2,{autoAlpha:0,scale:.6,transformOrigin:"0% 50%",ease:Power2.easeOut,delay:1}).fromTo(a(v)[0],.3,{y:15,autoAlpha:0,scale:0,transformOrigin:"50% 100%"},{y:0,autoAlpha:1,scale:1,ease:Power2.easeOut}).to(a(v)[0],.2,{y:15,autoAlpha:0,scale:0,transformOrigin:"50% 100%",delay:1.5}).to(a(p)[0],.2,{autoAlpha:0,y:40}).set(f,{className:"+=change-pos"}).fromTo(f,.3,{autoAlpha:0,scale:.6,transformOrigin:"100% 50%"},{autoAlpha:1,scale:1,ease:Power2.easeOut}).to(a(y)[0],.2,{className:"+=change-color",delay:.6}).fromTo(a(p)[1],.4,{y:-60},{autoAlpha:1,y:0,ease:Back.easeInOut}).to(f,.2,{autoAlpha:0,scale:.6,transformOrigin:"100% 50%",ease:Power2.easeOut,delay:1}).set(y,{className:"-=change-color",delay:1}).fromTo(a(v)[1],.3,{y:15,autoAlpha:0,scale:0,transformOrigin:"50% 100%"},{y:0,autoAlpha:1,scale:1,ease:Power2.easeOut}).to(a(v)[1],.2,{y:15,autoAlpha:0,scale:0,transformOrigin:"50% 100%",delay:1.5}).to(a(p)[1],.2,{autoAlpha:0,y:40}).staggerTo(m,.1,{className:"+=ava-circle"},.2).staggerTo(m,.1,{className:"-=ava-circle",delay:2.3}).fromTo(f,.3,{autoAlpha:0,scale:.6,transformOrigin:"100% 50%"},{autoAlpha:1,scale:1,ease:Power2.easeOut}).to(a(y)[1],.2,{className:"+=change-color-black ion-eye-disabled",delay:.6}).to(f,.2,{autoAlpha:0,scale:.6,transformOrigin:"100% 50%",ease:Power2.easeOut,delay:1}).set(y,{className:"-=change-color-black ion-eye-disabled"}).fromTo(f,.3,{autoAlpha:0,scale:.6,transformOrigin:"100% 50%"},{autoAlpha:1,scale:1,ease:Power2.easeOut}).to(a(y)[2],.2,{className:"+=change-color-red",delay:.6}).fromTo(a(p)[2],.6,{y:-60},{autoAlpha:1,y:0,ease:Back.easeInOut}).to(f,.2,{autoAlpha:0,scale:.6,transformOrigin:"100% 50%",ease:Power2.easeOut,delay:2}),C.pause();var B=new TimelineMax({onComplete:e});B.fromTo(a(b),.6,{y:-60},{autoAlpha:1,y:0,ease:Back.easeInOut}).fromTo(k,1,{autoAlpha:0,scale:.3,transformOrigin:"50% 50%"},{autoAlpha:1,scale:1,ease:Back.easeInOut}).staggerFromTo(O,1,{autoAlpha:0,y:-60,transformOrigin:"50% 50%"},{autoAlpha:1,y:0,ease:Back.easeInOut},.15).staggerFromTo(T,1,{autoAlpha:0,y:-60,transformOrigin:"50% 50%"},{autoAlpha:1,y:0,ease:Back.easeInOut},.15,"-=1.3").to(T[0],.15,{autoAlpha:.5,delay:.6}).to(T[0],.15,{autoAlpha:1}).fromTo(w,.3,{autoAlpha:0,y:25},{autoAlpha:1,y:0,ease:Power2.easeOut}).to(T,.2,{autoAlpha:.5},"-=0.3").to(O,.2,{autoAlpha:.5},"-=0.3").to(w,.3,{autoAlpha:0,y:25,ease:Power2.easeOut,delay:5}),B.pause(),a('a[data-toggle="tab"]').on("shown.bs.tab",function(e){n=a(this).attr("href").replace("#",""),a(".btn-timeline .btn-pause").removeClass("hidden"),a(".btn-timeline .btn-play").addClass("hidden"),"user-types"==n?(C.pause(),B.pause(),P.restart()):"interaction"==n?(P.pause(),B.pause(),C.restart()):"search"==n&&(P.pause(),C.pause(),B.restart())})},A=a(".content-block").find(".title"),b=[],k=a(".content-nav li");A.each(function(e,t){b.push(a(this).offset().top)}),a(window).resize(function(){b=[],A.each(function(e,t){b.push(a(this).offset().top)})});var O=function(){var t,n=0,i=2;a(window).scroll(function(a){t=!0}),setInterval(function(){t&&(s(),t=!1)},250);var s=function(){var t=a(this).scrollTop(),s=a(".btn-to-top");if(!(Math.abs(n-t)<=i)){if(t>=a(window).height()/3?s.show():t<a(window).height()/3&&s.fadeOut("fast"),App.getViewPort().width>=e)for(var l=0;l<A.length;l++)t>=b[l+1]-3*o&&(k.removeClass("active"),k.eq(l).addClass("active"));if(t>=a(".footer-block").offset().top-a(window).height()){var r=t+a(window).height()-a(".footer-block").offset().top;TweenMax.to(s,0,{y:-r})}else TweenMax.to(s,0,{y:0});n=t}}},T=function(){k.each(function(e,t){a(this).find("a").on("click",function(){TweenMax.to(window,.6,{scrollTo:{y:b[e+1],offsetY:o+15,autoKill:!1}})})})},P=function(){a(".main-nav-wrap li").each(function(e,t){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?a(this).on("touchstart",function(a){a.stopPropagation()}):a(this).on("click",function(a){a.stopPropagation()})})},C={common:{init:function(){g()},finalize:function(){}},home:{init:function(){d(),m(),v(),y(),a(window).resize(function(){y()}),a(".btn-go-home").on("click",function(){TweenMax.to(window,.6,{scrollTo:0,autoKill:!1})}),a(".btn-scroll-down").on("click",function(){TweenMax.to(window,.5,{scrollTo:{y:"#section-1",offsetY:o,autoKill:!1}})});var e=a("form").find(".required");e.on("propertychange change click keyup input paste",function(){a(this).val()&&(a(this).next(".error-mes").fadeOut(),a(this).removeClass("add-border"))});var t=a(".top-mes"),n=function(){TweenMax.to(t[0],1,{top:"-40px",opacity:0})};setTimeout(n,1e4),t.on("click",function(){n(),TweenMax.to(window,.6,{scrollTo:{y:"#section-4",offsetY:o,autoKill:!1},delay:.8})})},finalize:function(){}},contentPage:{init:function(){T(),O(),P();var e=window.location.pathname,t=a(".main-nav-wrap").find("a");t.each(function(t,o){a(this).attr("href")==e.replace("/","")&&(a(this).parent("li").addClass("current"),a("title").text("Click - "+a(this).text()))}),a(window).scrollTop()>=a(window).height()/3&&a(".btn-to-top").show(),a(".btn-to-top").on("click",function(){TweenMax.to(window,.8,{scrollTo:0,autoKill:!1})})},finalize:function(){}}},B={fire:function(a,e,t){var o,n=C;e=void 0===e?"init":e,o=""!==a,o=o&&n[a],o=o&&"function"==typeof n[a][e],o&&n[a][e](t)},loadEvents:function(){B.fire("common"),a.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(a,e){B.fire(e),B.fire(e,"finalize")}),B.fire("common","finalize")}};a(document).ready(B.loadEvents)}(jQuery);
//# sourceMappingURL=main.js.map
