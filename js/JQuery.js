smalltalk.addPackage('JQuery', {});
smalltalk.addClass('JQuery', smalltalk.Object, ['jqhandle'], 'JQuery');
smalltalk.addMethod(
"_css",
smalltalk.method({
selector: "css",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_proxy_", ["css"]);
return self;},
args: [],
source: "css\x0a\x09^self proxy: 'css'.",
messageSends: ["proxy:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'accessing',
fn: function (aMessage){
var self=this;
return smalltalk.send(self['@jqhandle'], "_doesNotUnderstand_", [aMessage]);
return self;},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^jqhandle doesNotUnderstand: aMessage.",
messageSends: ["doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
"_jqhandle",
smalltalk.method({
selector: "jqhandle",
category: 'accessing',
fn: function (){
var self=this;
return self['@jqhandle'];
return self;},
args: [],
source: "jqhandle\x0a\x09^jqhandle",
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
"_jqhandle_",
smalltalk.method({
selector: "jqhandle:",
category: 'accessing',
fn: function (aJqhandle){
var self=this;
(self['@jqhandle']=aJqhandle);
return self;
return self;},
args: ["aJqhandle"],
source: "jqhandle: aJqhandle\x0a\x09jqhandle := aJqhandle.\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.JQuery);

smalltalk.addMethod(
"_proxy_",
smalltalk.method({
selector: "proxy:",
category: 'proxy',
fn: function (aSelector){
var self=this;
return (function($rec){smalltalk.send($rec, "_pendingSelector_", [aSelector]);return smalltalk.send($rec, "_pendingObj_", [self]);})(smalltalk.send((smalltalk.SelectorProxy || SelectorProxy), "_new", []));
return self;},
args: ["aSelector"],
source: "proxy: aSelector\x0a\x09^SelectorProxy new pendingSelector: aSelector; pendingObj: self.",
messageSends: ["pendingSelector:", "pendingObj:", "new"],
referencedClasses: ["SelectorProxy"]
}),
smalltalk.JQuery);



smalltalk.addClass('SelectorProxy', smalltalk.Object, ['pendingSelector', 'pendingObj'], 'JQuery');
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'accessing',
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
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09| dict keys |\x0a\x09\x22if pending selector is nil then we have already served our purpose, move along\x22\x0a\x09pendingSelector ifNil: [^pendingObj doesNotUnderstand: aMessage].\x0a\x0a\x09keys := aMessage selector tokenize: ':'. \x0a\x09dict := Dictionary new.\x0a\x09aMessage arguments withIndexDo: [:arg :index | dict at: (keys at: index) put: arg].\x0a\x0a\x09pendingObj jqhandle doesNotUnderstand: (Message new\x0a\x09\x09selector: pendingSelector;\x0a\x09\x09arguments: (Array new add: dict asJS; yourself)).\x0a\x0a\x09pendingSelector := nil.\x0a\x0a\x09^pendingObj",
messageSends: ["ifNil:", "doesNotUnderstand:", "tokenize:", "selector", "new", "withIndexDo:", "arguments", "at:put:", "at:", "jqhandle", "selector:", "arguments:", "add:", "asJS", "yourself"],
referencedClasses: ["Dictionary", "Array", "Message"]
}),
smalltalk.SelectorProxy);

smalltalk.addMethod(
"_pendingObj",
smalltalk.method({
selector: "pendingObj",
category: 'accessing',
fn: function (){
var self=this;
return self['@pendingObj'];
return self;},
args: [],
source: "pendingObj\x0a\x09^pendingObj",
messageSends: [],
referencedClasses: []
}),
smalltalk.SelectorProxy);

smalltalk.addMethod(
"_pendingObj_",
smalltalk.method({
selector: "pendingObj:",
category: 'accessing',
fn: function (anObj){
var self=this;
(self['@pendingObj']=anObj);
return self;
return self;},
args: ["anObj"],
source: "pendingObj: anObj\x0a\x09pendingObj := anObj.\x0a\x09^self.",
messageSends: [],
referencedClasses: []
}),
smalltalk.SelectorProxy);

smalltalk.addMethod(
"_pendingSelector",
smalltalk.method({
selector: "pendingSelector",
category: 'accessing',
fn: function (){
var self=this;
return self['@pendingSelector'];
return self;},
args: [],
source: "pendingSelector\x0a\x09^pendingSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.SelectorProxy);

smalltalk.addMethod(
"_pendingSelector_",
smalltalk.method({
selector: "pendingSelector:",
category: 'accessing',
fn: function (aSelector){
var self=this;
(self['@pendingSelector']=aSelector);
return self;
return self;},
args: ["aSelector"],
source: "pendingSelector: aSelector\x0a\x09pendingSelector := aSelector.\x0a\x09^self.",
messageSends: [],
referencedClasses: []
}),
smalltalk.SelectorProxy);



smalltalk.addMethod(
"_asJS",
smalltalk.method({
selector: "asJS",
category: '*JQuery',
fn: function (){
var self=this;
var obj=nil;
(obj={});
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){(value=smalltalk.send(value, "_asJSON", []));(key=smalltalk.send(key, "_asJSON", []));return obj[key] = value;})]);
return obj;
return self;},
args: [],
source: "asJS\x0a\x09| obj |\x0a\x09obj := <{}>.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09value := value asJSON.\x0a\x09\x09key := key asJSON.\x0a\x09\x09<obj[key] = value>].\x0a\x09^obj",
messageSends: ["keysAndValuesDo:", "asJSON"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asJQuery",
smalltalk.method({
selector: "asJQuery",
category: '*JQuery',
fn: function (){
var self=this;
var jqobj=nil;
(jqobj=jQuery(String(self)));
return smalltalk.send(smalltalk.send((smalltalk.JQuery || JQuery), "_new", []), "_jqhandle_", [jqobj]);
return self;},
args: [],
source: "asJQuery\x0a\x09| jqobj |\x0a\x09jqobj := <jQuery(String(self))>.\x0a\x09^JQuery new jqhandle: jqobj",
messageSends: ["jqhandle:", "new"],
referencedClasses: ["JQuery"]
}),
smalltalk.String);

