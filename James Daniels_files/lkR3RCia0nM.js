if (self.CavalryLogger) { CavalryLogger.start_js(["6efQ2"]); }

__d("FantaMercuryTabOverflowTitle.react",["CurrentUser","MercuryThreadInfo","MercuryThreadTitleSafe.react","React","qex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.thread;if(!a)return null;var c=!b("qex")._("830596");return b("React").jsx(b("MercuryThreadTitleSafe.react"),{isNewThread:b("MercuryThreadInfo").isNewEmptyLocalThread(a),showUnreadCount:c,thread:a,useAndSeparator:!0,useShortName:!a.is_canonical,viewer:b("CurrentUser").getID()})};return c}(b("React").Component);e.exports=a}),null);
__d("FantaM4TabOverflow.react",["ix","cx","fbt","ContextualLayerAutoFlip","FantaMercuryTabOverflowTitle.react","FantaTabActions","Image.react","PopoverMenu.react","PopoverMenuOverlappingBorder","React","ReactXUIMenu","asset","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("ReactXUIMenu").SelectableMenu,k=b("ReactXUIMenu").SelectableItem,l=b("qex")._("830596"),m=new Map(),n=l?g("515614"):g("481006");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={highlighted:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidUpdate=function(a){__p&&__p();var b=this;if(!l)return;a=this.props;var c=a.tabContents;a=a.items;var d=new Map(),e=!1;a.map(function(a){a=a.id;var b=c&&c.get(a);b=(b==null?void 0:(b=b.thread)==null?void 0:b.unread_count)||0;b>0&&m.get(a)===0&&(e=!0);d.set(a,b)});e&&(this.setState({highlighted:!0}),window.setTimeout(function(){return b.setState({highlighted:!1})},1e3));m=d};d.render=function(){__p&&__p();var a=this.props,c=a.tabContents;a=a.items;var d=i._("Close tab"),e=!1;a=b("React").jsx(j,{className:l?"_7jrk":"",children:a.map(function(a){var f=c&&c.get(a.id);f=f?f.thread:null;var g=(f==null?void 0:f.unread_count)||0;g>0&&(e=!0);return b("React").jsxs(k,{onclick:function(){return b("FantaTabActions").focusTab(a.id)},children:[l&&b("React").jsx("span",{className:g?"_7jrl":""}),b("React").jsxs("span",{className:"_6cix",children:[b("React").jsx(b("FantaMercuryTabOverflowTitle.react"),{thread:f}),b("React").jsx("button",{"aria-label":d,className:"_6cj1 clearfix",onClick:function(){return b("FantaTabActions").closeTab(a.id)},children:b("React").jsx(b("Image.react"),{src:n})})]})]},a.id)}).toArray()});var f=this.state.highlighted&&l?g("561663"):g("591503"),h=g("591502"),m=e&&l&&b("React").jsx("div",{className:"_7k6j"});return b("React").jsx(b("PopoverMenu.react"),{alignh:"right",alignv:"top",behaviors:[b("PopoverMenuOverlappingBorder")],className:"fbNub _50-v _6cj2"+(this.state.highlighted?" _7k6k":""),layerBehaviors:[b("ContextualLayerAutoFlip")],menu:a,children:b("React").jsxs("a",{href:"#",role:"button",alt:i._("messages"),className:"_6cj3"+(l&&(e||this.state.highlighted)?" _7k6l":""),children:[m,b("React").jsx(b("Image.react"),{className:"_6d4c",src:f}),b("React").jsx(b("Image.react"),{className:"_6d4d",src:h})]})})};return c}(b("React").Component);e.exports=a}),null);