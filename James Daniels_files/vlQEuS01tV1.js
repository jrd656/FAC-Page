if (self.CavalryLogger) { CavalryLogger.start_js(["wQ0Kv"]); }

__d("FDSBaseTextArea.react",["cx","AbstractTextArea.react","DOMScroll","FDSFormUtils","FDSPrivateInputSelectors","FDSPrivateThemeAtomsType","FDSPrivateThemeContext.react","Image.react","ObserveResize.react","React","ResizeEventHandler","autoFlipStyleProps","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("FDSPrivateInputSelectors").getTextAreaStyle,i=4;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isFocused:!1,hasScrollbar:!1},d.$3=b("React").createRef(),d.$2=new(b("ResizeEventHandler"))(function(){d.$1()}),d.$4=function(a){a=a.target.value;d.props.onChange(a)},d.$5=function(a){d.setState({isFocused:!1}),d.props.onBlur&&d.props.onBlur(a)},d.$6=function(a){d.setState({isFocused:!0}),d.props.onFocus&&d.props.onFocus(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$1()};d.componentDidUpdate=function(a){this.props.value!==a.value&&this.$2.handleEvent()};d.componentWillUnmount=function(){this.$2.cancel()};d.focus=function(){this.$3.current&&this.$3.current.focusInput()};d.blur=function(){this.$3.current&&this.$3.current.blurInput()};d.$1=function(){var a;a=(a=this.$3.current)==null?void 0:a.getTextFieldDOM();a!=null&&this.setState({hasScrollbar:a.clientHeight<a.scrollHeight})};d.$7=function(a){if(a){var c=this.state.hasScrollbar?b("DOMScroll").getScrollbarSize():0;c=c>0?c+i:null;return b("React").jsx(b("Image.react"),{className:"_7b1r",src:a,style:c!=null?b("autoFlipStyleProps")({right:c}):void 0})}return null};d.render=function(){var a=this,c=this.props,d=c.busyIndicator,e=c.describedBy,f=c.dir,g=c.errorMessageId,i=c.hasError,k=c.hasWarning,l=c.htmlForTargetId,m=c.iconSrc,n=c.isDisabled,o=c.isEdited,p=c.isRequired,q=c.isResizable,r=c.isValid,s=c.labelledBy,t=c.maxHeight,u=c.maxLength,v=c.placeholder,w=c.rows,x=c.shouldAutoGrow,y=c.value,z;i?z="error":k?z="warning":r===!0&&(z="validated");return b("React").jsx(b("FDSPrivateThemeContext.react").Consumer,{children:function(c){var A=c.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC,B=h({isFocused:a.state.isFocused,isDisabled:n,hasError:i,hasWarning:k,isValid:r,isEdited:o,atoms:c});return b("React").jsx(b("ObserveResize.react"),{onResize:a.$2.handleEvent,children:function(c){return b("React").jsxs("span",{className:"_7b1s"+(A?" _8o1_":""),ref:c,style:babelHelpers["extends"]({},B),children:[b("React").jsx(b("AbstractTextArea.react"),{"aria-describedby":e,"aria-errormessage":g,"aria-invalid":g?"true":"false","aria-labelledby":s,"aria-multiline":!0,autoGrow:x,className:"_7b07"+(q?" _85-s":"")+(f!=="rtl"?" _8t7e":"")+(f==="rtl"?" _8t7f":""),"data-testid":a.props["data-testid"],disabled:n,id:l,maxLength:u,onBlur:a.$5,onChange:a.$4,onClick:a.props.onClick,onFocus:a.$6,onKeyDown:a.props.onKeyDown,onKeyPress:a.props.onKeyPress,onKeyUp:a.props.onKeyUp,placeholder:v,ref:a.$3,required:p,rows:w,style:{maxHeight:t},useLabel:!1,value:y}),b("React").jsx(j,{busyIndicator:d}),a.$7(b("FDSFormUtils").getIconSrc(z,m))]})}})}})};return c}(b("React").PureComponent);a.defaultProps={hasError:!1,hasWarning:!1,isDisabled:!1,isEdited:!1,isResizable:!0,isValid:null,rows:4,shouldAutoGrow:!1};function j(a){return a.busyIndicator!=null?b("React").jsx("span",{className:"_7mpd",children:a.busyIndicator}):null}e.exports=b("makeFDSStandardComponent")("FDSBaseTextArea",a)}),null);
__d("FDSTextArea.react",["FDSBaseTextArea.react","FDSFormInputLayout.react","FDSPrivateFormCounter.react","React","UniqueIDProvider.react","makeFDSStandardComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d,e;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(d=e=a.call.apply(a,[this].concat(g))||this,e.state={innerValue:(c=e.props.value)!=null?c:"",value:e.props.value},e.$1=b("React").createRef(),e.$2=function(a){e.setState({innerValue:a}),e.props.onChange(a)},d)||babelHelpers.assertThisInitialized(e)}c.getDerivedStateFromProps=function(a,b){if(b.value!==a.value){return{innerValue:(b=a.value)!=null?b:"",value:a.value}}return null};var d=c.prototype;d.focus=function(){this.$1.current&&this.$1.current.focus()};d.blur=function(){this.$1.current&&this.$1.current.blur()};d.render=function(){var a=this,c=this.props,d=c.busyIndicator,e=c.description,f=c.dir,g=c.errorMessage,h=c.iconSrc,i=c.isEdited,j=c.isDisabled,k=c.isOptional,l=c.isResizable,m=c.isValid,n=c.label,o=c.labelIsHidden,p=c.maxHeight,q=c.maxLength,r=c.onBlur,s=c.onClick,t=c.onFocus,u=c.onKeyUp,v=c.onKeyDown,w=c.onKeyPress,x=c.placeholder,y=c.rows,z=c.shouldAutoGrow,A=c.tooltipText,B=c.warningMessage,C=(c=this.props.value)!=null?c:this.state.innerValue,D=q!=null?b("React").jsx(b("FDSPrivateFormCounter.react"),{count:C.length,limit:q}):null;return b("React").jsx(b("UniqueIDProvider.react"),{children:function(c){return b("React").jsx(b("FDSFormInputLayout.react"),{description:e,errorMessage:g,infoTooltipText:A,inputId:c,isOptional:k,label:n,labelIsHidden:o,labelSupplementaryContent:D,warningMessage:B,children:function(e){var n=e.describedBy;e=e.errorMessageId;return b("React").jsx(b("FDSBaseTextArea.react"),{busyIndicator:d,"data-testid":a.props["data-testid"],describedBy:n,dir:f,errorMessageId:e,hasError:!!g,hasWarning:!!B,htmlForTargetId:c,iconSrc:h,isDisabled:j,isEdited:i,isRequired:k===!1,isResizable:l,isValid:m,maxHeight:p,maxLength:q,onBlur:r,onChange:a.$2,onClick:s,onFocus:t,onKeyDown:v,onKeyPress:w,onKeyUp:u,placeholder:x,ref:a.$1,rows:y,shouldAutoGrow:z,value:C})}})}})};return c}(b("React").PureComponent);a.defaultProps={isEdited:!1,labelIsHidden:!1,isDisabled:!1,isResizable:!0,isValid:null,rows:4,shouldAutoGrow:!1};e.exports=b("makeFDSStandardComponent")("FDSTextArea",a)}),null);
__d("SUIInternalLayer.react",["cx","Locale","React","SUICloseButton.react","SUIComponent","SUIErrorComponentUtil","SUITheme","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("Locale").isRTL;a=babelHelpers["extends"]({},b("SUIErrorComponentUtil").defaultProps,{hasCloseButton:!0,isFullBleed:!1,isOverflowXAuto:!0,isOverflowYAuto:!0,role:"region"});c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$SUIInternalLayer1=function(a,b,c){return a+"px       "+b+"px       "+c+"px"};d.render=function(){var a=this.props,c=a.children,d=a.footer,e=a.hasCloseButton,f=a.header,g=a.isFullBleed,i=a.margin,j=a.label,k=a.labelledBy;a=a.role;var l=b("SUITheme").get(this),m=l.SUIModalCard,n=m.closeButtonPosition;l=n+b("SUICloseButton.react").getHeightForSize(l,"large");l=f?m.bodyVerticalMargin:l;var o={backgroundColor:m.backgroundColor,boxShadow:e?m.modalBoxShadow:m.cardBoxShadow};m.borderRadius!=null&&(o.borderRadius=m.borderRadius);return b("React").jsxs("div",{"aria-label":j,"aria-labelledby":k,className:b("joinClasses")("_ww-",i),"data-testid":this.props["data-testid"],role:a,style:o,children:[e?b("React").jsx(b("SUICloseButton.react"),{layerCancel:!0,size:"large",style:(j={},j[h()?"left":"right"]=n,j.position="absolute",j.top=n,j)}):null,f?b("React").cloneElement(f,{errorMessage:this.props.errorMessage,errorTooltipPosition:this.props.errorTooltipPosition,warningMessage:this.props.warningMessage}):null,b("React").jsx("div",{className:"_ww_",style:babelHelpers["extends"]({},m.typeStyle,{padding:g?null:this.$SUIInternalLayer1(l,m.bodyHorizontalMargin,m.bodyVerticalMargin),overflowX:this.props.isOverflowXAuto?"auto":"visible",overflowY:this.props.isOverflowYAuto?"auto":"visible"}),children:c}),d]})};return c}(b("SUIComponent"));c.defaultProps=a;e.exports=c}),null);
__d("FDSCard.react",["FDSPrivateThemeContext.react","React","SUIErrorComponentUtil","SUIInternalLayer.react","getSUICloseButtonUniform.fds","getSUIModalCardUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIThemeGetter")({SUICloseButton:b("getSUICloseButtonUniform.fds"),SUIModalCard:b("getSUIModalCardUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=g(this.context);return b("React").jsx(b("SUIInternalLayer.react"),{children:this.props.children,"data-testid":this.props["data-testid"],errorMessage:this.props.errorMessage,errorTooltipPosition:this.props.errorTooltipPosition,footer:this.props.footer,hasCloseButton:!1,header:this.props.header,isFullBleed:!0,isOverflowXAuto:this.props.isOverflowXAuto,isOverflowYAuto:this.props.isOverflowYAuto,label:this.props.label,labelledBy:this.props.labelledBy,margin:this.props.margin,preserveThemeFromContext:!0,theme:a,warningMessage:this.props.warningMessage})};return c}(b("React").Component);a.contextType=b("FDSPrivateThemeContext.react");a.defaultProps=b("SUIErrorComponentUtil").defaultProps;e.exports=b("makeFDSStandardComponent")("FDSCard",a)}),null);
__d("FDSPopover.react",["ContextualLayerHideOnScrollOut","ContextualLayerUpdateOnScroll","FDSPrivateThemeContext.react","React","SUIPopover.react","getSUIPopoverUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PureComponent;var g=b("makeSUIThemeGetter")({SUIPopover:b("getSUIPopoverUniform.fds")});c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=g(this.context);return b("React").jsx(b("SUIPopover.react"),{alignment:this.props.alignment,behaviors:this.props.fdsOverride_updateOnScroll===!0?{ContextualLayerHideOnScrollOut:b("ContextualLayerHideOnScrollOut"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")}:null,content:this.props.children,contentWidthUseSparingly:this.props.contentWidthUseSparingly,contextRef:this.props.contextRef,"data-testid":this.props["data-testid"],delay:this.props.delay,footer:this.props.footer,helpLink:this.props.helpLink,hoverContextRef:this.props.hoverContextRef,isShown:this.props.isShown,linger:this.props.linger,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onToggle:this.props.onToggle,position:this.props.position,preserveThemeFromContext:!0,renderDelay:this.props.renderDelay,theme:a,title:this.props.title})};return c}(a);c.defaultProps=b("SUIPopover.react").defaultProps;c.contextType=b("FDSPrivateThemeContext.react");e.exports=b("makeFDSStandardComponent")("FDSPopover",c)}),null);
__d("InfoTableRow.react",["cx","fbt","invariant","FbtResultBase","React","ReactFragment","Tooltip.react","joinClasses","monitorCodeUse"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props.children;a!=null&&!Array.isArray(a)&&(a=[a]);a==null&&(a=[]);var c=this.props.columns;a.length<c||i(0,2909,c-1,a.length);var d=this.props.label;d&&this.props.useColon&&(d=h._("{label}:",[h._param("label",d)]));var e=this.props.annotation;e&&(e=b("React").jsx("div",{className:"_3stu fss",children:h._("({annotation})",[h._param("annotation",e)])}));d=b("ReactFragment").create({label:d,annotation:e,help:this.props.helpLink});if(this.props.labelTooltip){e=this.props.tooltipDelay?{"data-tooltip-delay":this.props.tooltipDelay}:{};d=b("React").jsx(b("Tooltip.react"),babelHelpers["extends"]({tooltip:this.props.labelTooltip},e,{children:d}))}this.props.labelFor&&(this.props.type==="data"||i(0,2910),d=b("React").jsx("label",{htmlFor:this.props.labelFor,children:d}));e=null;c===3&&(e=b("React").jsx("td",{className:"_480v",children:a[1]}));return b("React").jsxs("tr",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,(this.props.type==="data"?"_3stt":"")+(this.props.labelWidth==="small"?" _4edr":"")+(this.props.labelWidth==="large"?" _3ea7":"")+(this.props.labelWidth==="xlarge"?" _6hhu":"")),label:null,type:null,children:[b("React").jsx("th",{className:b("joinClasses")(this.props.labelClassName,"_3sts"+(this.props.align==="middle"?" _4m37":"")+(this.props.label?"":" noLabel")),children:d}),b("React").jsx("td",{className:"_480u"+(this.props.align==="middle"?" _4m37":""),children:a[0]}),e]}))};return c}(b("React").Component);a.defaultProps={columns:2,type:"text",useColon:!1};e.exports=a}),null);
__d("InfoTable.react",["cx","invariant","InfoTableRow.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this,c=this.props.children,d=-1;b("React").Children.forEach(c,function(a,b){a!==null&&(d=b)});c=b("React").Children.map(c,function(c,e){if(c==null)return null;c.type!==b("InfoTableRow.react")||h(0,589);var f={border:void 0,columns:a.props.columns};a.props.sectionborders&&(e<d||a.props.showlastspacer)&&(f.border=!0);return b("React").cloneElement(c,f)},this);return b("React").jsx("table",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_3stn"+(this.props.sectionborders?"":" _3stp")),children:c}))};return c}(b("React").Component);c.propTypes={columns:a.oneOf([2,3]),sectionborders:a.bool,showlastspacer:a.bool};c.defaultProps={columns:2,sectionborders:!1,showlastspacer:!1};e.exports=c}),null);
__d("InfoTableSeparator.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("tr",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_3sto"),children:b("React").jsx("td",{colSpan:this.props.columns,children:b("React").jsx("hr",{})})}))};return c}(b("React").Component);c.propTypes={columns:a.oneOf([2,3])};c.defaultProps={columns:2};e.exports=c}),null);
__d("InfoTableSection.react",["InfoTableSeparator.react","React"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this,c=b("React").Children.map(this.props.children,function(c){return c?b("React").cloneElement(c,{columns:a.props.columns}):c},this),d=this.props.border?b("React").jsx(b("InfoTableSeparator.react"),{columns:this.props.columns}):null;return b("React").jsxs("tbody",babelHelpers["extends"]({},this.props,{children:[c,d]}))};return c}(b("React").Component);a.defaultProps={border:!1,columns:2};e.exports=a}),null);
__d("XLtgLanguageDialectTypeaheadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/translation/dialects/",{value:{type:"String",defaultValue:""},q:{type:"String",defaultValue:""},dialect_set:{type:"Enum",defaultValue:"language_detection",enumType:1},render:{type:"Enum",defaultValue:"default",enumType:1}})}),null);
__d("LanguageDialectAsyncSearchSource",["WebAsyncSearchSource","XLtgLanguageDialectTypeaheadController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(c,d,e){return a.call(this,{asyncErrorHandler:e,bootstrapRequests:[{uri:b("XLtgLanguageDialectTypeaheadController").getURIBuilder().setEnum("dialect_set",c).setEnum("render",d).getURI()}]})||this}var d=c.prototype;d.searchImpl=function(b,c,d){!b?c(Object.values(this.getAllEntriesMap()),b):a.prototype.searchImpl.call(this,b,c,d)};return c}(b("WebAsyncSearchSource"));e.exports=a}),null);
__d("LanguageDialectViewRenderer.react",["cx","fbt","React","XUIGrayText.react","XUITypeaheadViewItem.react","groupArray"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(a){return b("React").jsx(b("XUITypeaheadViewItem.react"),{entry:a,highlighted:a===this.props.highlightedEntry,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight},a.getUniqueID())};d.$2=function(a,c){__p&&__p();var d=this,e=null;switch(a){case"viewer_understood":e=h._("Frequently used languages");break;case"other":e=h._("Other languages");break;default:break}c=c.map(function(a){return d.$1(a)});e&&c.unshift(b("React").jsx(b("XUIGrayText.react"),{className:"_2pir _2pi2",shade:"light",display:"block",children:e},a));return c};d.$3=function(){var a=this,c,d=b("groupArray")(this.props.entries,function(a){return a.getType()}),e=Object.keys(d);if(e.length===1)return this.$2("",this.props.entries);Object.prototype.hasOwnProperty.call(d,"viewer_understood")&&(e.splice(e.indexOf("viewer_understood"),1),e.unshift("viewer_understood"));return(c=[]).concat.apply(c,e.map(function(b){return a.$2(b,d[b])}))};d.render=function(){var a=this.props.renderStyle==="ulm_categories"?this.$3():this.$2("",this.props.entries);return b("React").jsx("ul",{className:"_5p0r",role:this.props.role,children:a})};return c}(b("React").Component);e.exports=a}),null);
__d("LanguageDialectInlineTypeahead.react",["cx","AbstractTypeahead.react","LanguageDialectAsyncSearchSource","LanguageDialectViewRenderer.react","React"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$1=function(a){d.props.onSelect&&d.props.onSelect(a),d.$3()};d.$2=function(a){var b=a.target.value;d.props.onChange&&d.props.onChange(b);d.setState({query:a.target.value})};d.$3=function(){d.setState({query:""})};d.searchSource=new(b("LanguageDialectAsyncSearchSource"))(d.props.dialectType,d.props.renderStyle);d.state={query:""};return d}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){(a.dialectType!==this.props.dialectType||a.renderStyle!==this.props.renderStyle)&&(this.searchSource=new(b("LanguageDialectAsyncSearchSource"))(a.dialectType,a.renderStyle))};d.render=function(){var a={};this.props.excludedDialects.forEach(function(b){return a[b]=!0});return b("React").jsx(b("AbstractTypeahead.react"),{autoHighlight:!0,inputClassName:this.props.className||"_5p0s",hideViewWithEntries:!1,showEntriesOnFocus:!0,onSelectAttempt:this.$1,onChange:this.$2,onClear:this.$3,searchSource:this.searchSource,placeholder:this.props.placeholder,excludedEntries:a,queryString:this.state.query,presenter:{ViewRenderer:b("LanguageDialectViewRenderer.react"),maxEntries:200,useLayer:!1,extraRendererProps:{renderStyle:this.props.renderStyle}}})};return c}(b("React").Component);a.defaultProps={excludedDialects:[],renderStyle:"default"};e.exports=a}),null);
__d("LanguageDialectSearchableDropdown.react",["cx","fbt","ContextualLayer.react","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","LanguageDialectInlineTypeahead.react","LayerAutoFocus","LayerHideOnBlur","LayerHideOnEscape","React","XUIPopoverButton.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=" \u25be",j="xx_XX";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){__p&&__p();var c;c=a.call(this,b)||this;c.$2=function(a){c.setState({selectedDialect:a.getUniqueID(),selectedDialectName:a.getTitle(),isOpen:!1}),c.props.onSelect(a.getUniqueID())};c.$4=function(){c.setState({isOpen:!c.state.isOpen})};c.$5=function(a){c.setState({isOpen:a})};c.state={selectedDialect:c.props.initialDialect?c.props.initialDialect:j,selectedDialectName:c.props.initialDialectName?c.props.initialDialectName:h._("Select"),isOpen:!1};return c}var d=c.prototype;d.$3=function(){return h._("Show available languages")};d.render=function(){var a=this,c=this.props.useSelector?b("React").jsx(b("XUIPopoverButton.react"),{hasChevron:!0,label:this.state.selectedDialectName,onClick:this.$4,ref:function(b){return a.$1=b}}):b("React").jsxs("a",{onClick:this.$4,ref:function(b){return a.$1=b},role:"button",tabIndex:"0",title:this.$3(),children:[this.state.selectedDialectName,i]});return b("React").jsxs("span",{className:this.props.className,children:[c,b("React").jsx(b("ContextualLayer.react"),{alignment:"left",autofocus:!0,behaviors:{ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerAutoFocus:b("LayerAutoFocus"),LayerHideOnBlur:b("LayerHideOnBlur"),LayerHideOnEscape:b("LayerHideOnEscape")},contextRef:function(){return a.$1},position:"below",onToggle:this.$5,shown:this.state.isOpen,children:b("React").jsx("div",{className:"_5ge1",children:b("React").jsx(b("LanguageDialectInlineTypeahead.react"),{dialectType:this.props.dialectType,onSelect:this.$2,placeholder:this.props.placeholder,excludedDialects:this.props.excludedDialects,hasCategories:this.props.hasCategories,renderStyle:this.props.renderStyle})})})]})};return c}(b("React").Component);a.defaultProps={initialDialect:j,hasCategories:!1,renderStyle:"default",useSelector:!1};e.exports=a}),null);
__d("SphericalMediaConstants",[],(function(a,b,c,d,e,f){"use strict";a={COMP_PHOTO_EDIT_THUMB:"PhotoEditThumbanil",COMP_PHOTO_VIEWER:"PhotoViewer",EDIT_VIEWPORT_SIZE:{width:476,height:476},HALF_EQUIRECT_PARTIAL_LIMIT:85,HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1e3,MOUSE_EXPOSURE:4e3,LOGGER_SURFACES:{newsfeed:"newsfeed",timeline:"timeline",fullpage:"photo_viewer",snowlift:"www_snowlift",composer:"composer",albumComposer:"album_composer",stories:"stories",other:"other"},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1e3,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:"tag",TAGGED_FACEBOX:"tagged_facebox",UNTAGGED_FACEBOX:"untagged_facebox",DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10,DEFAULT_VOLUME:{MUTE:0,HIGH:.7}};e.exports=a}),null);
__d("XAdsAccountAdvertisingAccessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/accountquality/advertising_access/",{callsite:{type:"Enum",enumType:0},id:{type:"FBID"}})}),null);