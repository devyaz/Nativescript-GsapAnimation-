# Nativescipt-GsapAnimation-
Easily Chain Animations in {N}ativescript
using the Greensock Animation Platform https://greensock.com
clone this repo and start animating!!
then call any {N} animation directly like  translateX,translateY,opacity ...
first do 'npm i greensock'
or use Sidekick to install 
EXAMPLE  JS
const tl = require('greensock');

function onNavigatingTo(args) {
const page = args.object;
const tl = new TimelineLite();
const body = page.getViewById('mainStackLayout');
const text =  page.getViewById('text');
text.opacity=0;//initially hiding the lable
tl.to(body, 0.1, {translateX:-300}).to(body, 0.1, {translateX:10}).to(body, 0.1, {translateX:2}).to(body, 0.1, {translateX:10}).to(body, 0.1, {translateX:6}).to(body, 0.1, {translateX:10}).to(body, 0.1, {translateX:0}).to(text, 0.8, {opacity:1});
}

let me break it down
 tl.to(body, 0.1, {translateX:-300})
 where "body" is the element to be Animated, then duration in seconds, 1 is one second so 0.1 is 100miliseconds, then the animation type
 and how far to do it like above "-300" means 300 independent pixels left
