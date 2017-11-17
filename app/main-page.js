const tl = require ("greensock");

function onNavigatingTo(args) {

  var page = args.object;
  var tl = new TimelineLite();
  var body = page.getViewById('food');
  var text =  page.getViewById('text');
  text.opacity=0;
 tl.to(body, 0.2, {translateX:-380}).to(body, 0.1, {translateX:10}).to(body, 0.4, {translateY:40}).to(body, 0.1, {translateX:6}).to(body, 0.1, {translateY:-200}).to(body, 0.1, {translateX:400}).to(body, 0.1, {translateX:0}).to(body, 0.1, {translateY:0}).to(body, 0.1, {opacity:0}).to(body, 0.1, {opacity:1}).to(body, 0.1, {translateZ:-50}).to(body, 0.1, {translateZ:0}).to(text, 0.8, {opacity:1});



}


exports.onNavigatingTo = onNavigatingTo;
