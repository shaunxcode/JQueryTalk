Smalltalk current createPackage: 'JQuery' properties: #{}!
Object subclass: #JQuery
	instanceVariableNames: 'jqhandle'
	package: 'JQuery'!

!JQuery methodsFor: 'accessing'!

css
	^self proxy: 'css'.
!

doesNotUnderstand: aMessage
	^jqhandle doesNotUnderstand: aMessage.
!

jqhandle
	^jqhandle
!

jqhandle: aJqhandle
	jqhandle := aJqhandle.
	^self
! !

!JQuery methodsFor: 'proxy'!

proxy: aSelector
	^SelectorProxy new pendingSelector: aSelector; pendingObj: self.
! !

Object subclass: #SelectorProxy
	instanceVariableNames: 'pendingSelector pendingObj'
	package: 'JQuery'!

!SelectorProxy methodsFor: 'accessing'!

doesNotUnderstand: aMessage
	| dict keys |
	"if pending selector is nil then we have already served our purpose, move along"
	pendingSelector ifNil: [^pendingObj doesNotUnderstand: aMessage].

	keys := aMessage selector tokenize: ':'. 
	dict := Dictionary new.
	aMessage arguments withIndexDo: [:arg :index | dict at: (keys at: index) put: arg].

	pendingObj jqhandle doesNotUnderstand: (Message new
		selector: pendingSelector;
		arguments: (Array new add: dict asJS; yourself)).

	pendingSelector := nil.

	^pendingObj
!

pendingObj
	^pendingObj
!

pendingObj: anObj
	pendingObj := anObj.
	^self.
!

pendingSelector
	^pendingSelector
!

pendingSelector: aSelector
	pendingSelector := aSelector.
	^self.
! !

!HashedCollection methodsFor: '*JQuery'!

asJS
	| obj |
	obj := <{}>.
	self keysAndValuesDo: [:key :value |
		value := value asJSON.
		key := key asJSON.
		<obj[key] = value>].
	^obj
! !

!String methodsFor: '*JQuery'!

asJQuery
	| jqobj |
	jqobj := <jQuery(String(self))>.
	^JQuery new jqhandle: jqobj
! !

