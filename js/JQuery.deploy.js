smalltalk.addPackage('JQuery', {});
smalltalk.addClass('JQuery', smalltalk.Object, ['jqhandle'], 'JQuery');
smalltalk.addMethod(
"_css",
smalltalk.method({
selector: "css",
fn: function (){
var self=this;
return smalltalk.send(self, "_proxy_", ["css"]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.send(self['@jqhandle'], "_doesNotUnderstand_", [aMessage]);
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
"_jqhandle",
smalltalk.method({
selector: "jqhandle",
fn: function (){
var self=this;
return self['@jqhandle'];
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
"_jqhandle_",
smalltalk.method({
selector: "jqhandle:",
fn: function (aJqhandle){
var self=this;
(self['@jqhandle']=aJqhandle);
return self;
return self;}
}),
smalltalk.JQuery);

smalltalk.addMethod(
"_proxy_",
smalltalk.method({
selector: "proxy:",
fn: function (aSelector){
var self=this;
return (function($rec){smalltalk.send($rec, "_pendingSelector_", [aSelector]);return smalltalk.send($rec, "_pendingObj_", [self]);})(smalltalk.send((smalltalk.SelectorProxy || SelectorProxy), "_new", []));
return self;}
}),
smalltalk.JQuery);



smalltalk.addClass('SelectorProxy', smalltalk.Object, ['pendingSelector', 'pendingObj'], 'JQuery');
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
var $early={};
try{var dict=nil;
var keys=nil;
(($receiver = self['@pendingSelector']) == nil || $receiver == undefined) ? (function(){return (function(){throw $early=[smalltalk.send(self['@pendingObj'], "_doesNotUnderstand_", [aMessage])]})();})() : $receiver;
(keys=smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_tokenize_", [":"]));
(dict=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(smalltalk.send(aMessage, "_arguments", []), "_withIndexDo_", [(function(arg, index){return smalltalk.send(dict, "_at_put_", [smalltalk.send(keys, "_at_", [index]), arg]);})]);
smalltalk.send(smalltalk.send(self['@pendingObj'], "_jqhandle", []), "_doesNotUnderstand_", [(function($rec){smalltalk.send($rec, "_selector_", [self['@pendingSelector']]);return smalltalk.send($rec, "_arguments_", [(function($rec){smalltalk.send($rec, "_add_", [smalltalk.send(dict, "_asJS", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []))]);})(smalltalk.send((smalltalk.Message || Message), "_new", []))]);
(self['@pendingSelector']=nil);
return self['@pendingObj'];
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.SelectorProxy);

smalltalk.addMethod(
"_pendingObj",
smalltalk.method({
selector: "pendingObj",
fn: function (){
var self=this;
return self['@pendingObj'];
return self;}
}),
smalltalk.SelectorProxy);

smalltalk.addMethod(
"_pendingObj_",
smalltalk.method({
selector: "pendingObj:",
fn: function (anObj){
var self=this;
(self['@pendingObj']=anObj);
return self;
return self;}
}),
smalltalk.SelectorProxy);

smalltalk.addMethod(
"_pendingSelector",
smalltalk.method({
selector: "pendingSelector",
fn: function (){
var self=this;
return self['@pendingSelector'];
return self;}
}),
smalltalk.SelectorProxy);

smalltalk.addMethod(
"_pendingSelector_",
smalltalk.method({
selector: "pendingSelector:",
fn: function (aSelector){
var self=this;
(self['@pendingSelector']=aSelector);
return self;
return self;}
}),
smalltalk.SelectorProxy);



smalltalk.addMethod(
"_asJS",
smalltalk.method({
selector: "asJS",
fn: function (){
var self=this;
var obj=nil;
(obj={});
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){(value=smalltalk.send(value, "_asJSON", []));(key=smalltalk.send(key, "_asJSON", []));return obj[key] = value;})]);
return obj;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asJQuery",
smalltalk.method({
selector: "asJQuery",
fn: function (){
var self=this;
var jqobj=nil;
(jqobj=jQuery(String(self)));
return smalltalk.send(smalltalk.send((smalltalk.JQuery || JQuery), "_new", []), "_jqhandle_", [jqobj]);
return self;}
}),
smalltalk.String);

