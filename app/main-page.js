
const tl = require ("greensock");

function onNavigatingTo(args) {

  var page = args.object;
  var tl = new TimelineLite();
  var body = page.getViewById('food');
  var text =  page.getViewById('text');
  text.opacity=0;
 tl.to(body, 0.2, {translateX:-380}).to(body, 0.1, {translateX:10}).to(body, 0.4, {translateY:100}).to(body, 0.1, {translateX:6}).to(body, 0.1, {translateY:-200}).to(body, 0.1, {translateX:400}).to(body, 0.1, {translateX:0}).to(body, 0.1, {translateY:0,rotate:180}).to(body, 0.1, {opacity:0}).to(body, 0.1, {opacity:1}).to(body, 0.1, {scaleY:-100}).to(body, 0.1, {scaleY:1,rotate:0}).to(text, 0.8, {opacity:1}).to(text, 0.8, {translateX:100,translateY:100}).to(text, 0.8, {translateX:0,translateY:0});
}


exports.onNavigatingTo = onNavigatingTo;
function markers(args) {
  var page = args.object;
  var tl = new TimelineLite();
  var body = page.getViewById('food');
  var text =  page.getViewById('text');
  text.opacity=0;
 tl.to(body, 0.6, {translateX:-380}).to(body, 0.6, {translateX:10}).to(body, 1, {translateY:100}).to(body, 0.6, {translateX:6}).to(body, 0.6, {translateY:-200}).to(body, 0.6, {translateX:400}).to(body, 0.6, {translateX:0}).to(body, 0.6, {translateY:0}).to(body, 0.6, {opacity:0}).to(body, 0.6, {opacity:1}).to(body, 0.8, {scaleY:-10,scaleY:2}).to(body, 0.8, {rotate:270,scaleY:1 }).to(body, 0.6, {rotate:360}).to(body, 0.6, {translateZ:0}).to(text, 0.6, {opacity:1});

}
exports.markers=markers;
