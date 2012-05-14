# JQueryTalk

##What

Alternative amber js jquery integration. 

##Let me see
```
'<div />' asJQuery 
	css 
		backgroundColor: 'yellow' 
		color: 'red' 
		fontSize: '300%'; 
	text: 'cats';
	appendTo: 'body';
	click: [window alert: 'ouch'].
```
##Why? because:
```
'<div />' asJQuery 
	css: 'backgroundColor' color: 'yellow';
	css: 'color': color: 'red';
	css: 'fontSize': percentage: '300%'; 
	text: 'cats';
	appendTo: 'body';
	click: [window alert: 'ouch'].
```	
Notice the meaningless second param in the selector? Confusing, arbitrary and almost noisier than the js:

```
jQuery('<div />')
	.css({
		backgroundColor: 'yellow', 
		color: 'red',
		fontSize: '300%'})
	.text('cats')
	.appendTo('body')
	.click(function(){alert('ouch')});
```
For me - using a language which interfaces w/ js and is meant to provide a more meaningful/clean experience it must, at a minimum, be as clean as working with raw js. 
##How
Instead of leaving the jQuery object to be handled by the JSObjectProxy we wrap it specifically in a JQuery object which maintains the existing proxy handle but has the ability to specify certain messages e.g. ```css``` as returning a ```SelectorProxy``` which is just an object that takes the next message it is passed and turns it into a native JS obj to be passed to the param it is acting as a proxy for. Subsequent calls to this ```SelectorProxy``` yield the parent JQuery object so chaining works as expected. 

##Now what?
* need to create full suite of tests to prove this doesn't break things. 
* Finish defining which methods should be proxied for jquery.
* consider refactoring to a more generic approach for use by other libs e.g. underscore etc. 