if (self.CavalryLogger) { CavalryLogger.start_js(["1Opz8"]); }

__d("ChannelConnectionEvents",[],(function(a,b,c,d,e,f){e.exports={CONNECTED:"chat-connection/connected",RECONNECTING:"chat-connection/reconnecting",SHUTDOWN:"chat-connection/shutdown",MUTE_WARNING:"chat-connection/mute",UNMUTE_WARNING:"chat-connection/unmute"}}),null);
__d("ChannelConnection",["Arbiter","ArbiterMixin","ChannelConnectionEvents","ChannelConstants","ChannelManager","JSLogger","Run","SystemEvents","Visibility","clearTimeout","emptyFunction","mixin","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=b("JSLogger").create("channel_connection"),h=null,i=null,j=null,k=null,l=0;a.__comet_ssr_is_server_env_DO_NOT_USE!==!0&&a.__is_archon!==!0&&b("ChannelManager").startChannelManager();c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.CONNECTED=b("ChannelConnectionEvents").CONNECTED,d.RECONNECTING=b("ChannelConnectionEvents").RECONNECTING,d.SHUTDOWN=b("ChannelConnectionEvents").SHUTDOWN,d.MUTE_WARNING="chat-connection/mute",d.UNMUTE_WARNING="chat-connection/unmute",d.unmuteWarning=o,c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.disconnected=function(){return k===m.SHUTDOWN||k===m.RECONNECTING&&!i&&l>1};d.isShutdown=function(){return k===m.SHUTDOWN};d.reconnect=function(a){a===void 0&&(a=!1);if(b("ChannelManager").state==="ping"||b("ChannelManager").state==="pull"||b("ChannelManager").isShutdown())return;g.log("reconnect",{now:a});m.inform(m.RECONNECTING,0);a?(h!==null&&(b("clearTimeout")(h),h=null),b("ChannelManager").enterState("ping!")):h||(h=b("setTimeoutAcrossTransitions")(function(){b("ChannelManager").enterState("ping!"),h=null},b("ChannelConstants").CHANNEL_MANUAL_RECONNECT_DEFER_MSEC));b("ChannelManager").resetDelay()};d.mockAfterLoad=function(){s(),t()};return c}(b("mixin")(b("ArbiterMixin")));var m=new c();b("Run").onBeforeUnload(b("emptyFunction"),!1);function n(){i&&(b("clearTimeout")(i),i=null)}function o(){n(),g.log("unmute_warning"),m.inform(m.UNMUTE_WARNING)}function p(a){n(),i=b("setTimeoutAcrossTransitions")(o,a),g.log("mute_warning",{time:a}),m.inform(m.MUTE_WARNING)}function q(){j&&(b("clearTimeout")(j),j=null)}function r(a,c){__p&&__p();q();if(a===b("ChannelConstants").ON_ENTER_STATE&&(c.nextState||c.state)==="pull"){if(k!==m.CONNECTED){g.log("connected");var d=!k;k=m.CONNECTED;l=0;m.inform(m.CONNECTED,{init:d})}}else a===b("ChannelConstants").ON_ENTER_STATE&&((c.nextState||c.state)==="ping"||!c.nextState&&c.state==="idle")?j=b("setTimeoutAcrossTransitions")(function(){var b=null;c.state==="idle"&&!c.nextState||(b=c.delay||0);g.log("reconnecting",{delay:b});m.disconnected()&&g.log("reconnecting_ui",{delay:b});k=m.RECONNECTING;c.state==="idle"&&l++;l>1?m.inform(m.RECONNECTING,b):!c.nextState&&c.state==="idle"&&r(a,c)},500):a===b("ChannelConstants").ON_SHUTDOWN&&(g.log("shutdown",{reason:c.reason}),k=m.SHUTDOWN,l=0,m.inform(m.SHUTDOWN,c.reason))}function s(){b("ChannelManager").isShutdown()?r(b("ChannelConstants").ON_SHUTDOWN,b("ChannelManager")._shutdownHint):r(b("ChannelConstants").ON_ENTER_STATE,{state:b("ChannelManager").state,nextState:b("ChannelManager").nextState,delay:0}),b("Visibility").addListener(b("Visibility").VISIBLE,m.reconnect)}b("Run").onAfterLoad(s);function t(){b("Arbiter").subscribe([b("ChannelConstants").ON_ENTER_STATE,b("ChannelConstants").ON_SHUTDOWN],r),b("Arbiter").subscribe(b("ChannelConstants").ATTEMPT_RECONNECT,function(){m.disconnected()&&m.reconnect()}),b("SystemEvents").subscribe(b("SystemEvents").TIME_TRAVEL,function(){m.reconnect(),p(b("ChannelConstants").MUTE_WARNING_TIME_MSEC)}),b("Run").onBeforeUnload(q,!1)}b("Run").onAfterLoad(t);b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.channel_connected=!m.disconnected()});e.exports=m}),3);
__d("NotificationConstants",[],(function(a,b,c,d,e,f){e.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}}}),null);
__d("RangedCallbackManager",["CallbackManagerController","arrayStableSort","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d){this.$1=[],this.$2=!1,this.$3=!1,this.$4={},this.$5=new(b("CallbackManagerController"))(this.$6.bind(this)),this.$7=a,this.$8=c,this.$9=d}var c=a.prototype;c.executeOrEnqueue=function(a,b,c,d,e){return this.$5.executeOrEnqueue({start:a,limit:b},c,{strict:!!d,skipOnStrictHandler:e})};c.unsubscribe=function(a){this.$5.unsubscribe(a)};c.getUnavailableResources=function(a){__p&&__p();a=this.$5.getRequest(a);var b=[];if(a&&!this.$2){var c=a.request;a=this.$10(a.options);c=c.start+c.limit;for(var a=a.length;a<c;a++)b.push(a)}return b};c.addResources=function(a){var b=this;a.forEach(function(a){b.$4[a]||(b.$4[a]=!0,b.$1.push(a),b.$3=null)});this.resortResources();this.$5.runPossibleCallbacks()};c.addResourcesWithoutSorting=function(a,c){var d=this.$1.slice(0,c);d=d.concat(a);d=d.concat(this.$1.slice(c));this.$1=d;Object.assign(this.$4,b("createObjectFrom")(a,!0));this.$3=null;this.$5.runPossibleCallbacks()};c.removeResources=function(a){var b=this;a.forEach(function(a){if(b.$4[a]){b.$4[a]=!1;a=b.$1.indexOf(a);a!=-1&&b.$1.splice(a,1)}})};c.removeAllResources=function(){this.$1=[],this.$4={}};c.resortResources=function(){var a=this;this.$1=b("arrayStableSort")(this.$1,function(b,c){return a.$8(a.$7(b),a.$7(c))})};c.setReachedEndOfArray=function(){this.$2||(this.$2=!0,this.$3=null,this.$5.runPossibleCallbacks())};c.hasReachedEndOfArray=function(){return this.$2};c.forceRunCallbacks=function(){this.$5.runPossibleCallbacks({force:!0})};c.setError=function(a){this.$3!==a&&(this.$3=a,this.$5.runPossibleCallbacks())};c.getError=function(a,b,c){c=this.$10({strict:c});return a+b>c.length?this.$3:null};c.hasResource=function(a){return this.$4[a]};c.getResourceAtIndex=function(a){return this.$1[a]};c.getAllResources=function(){return this.$1.concat()};c.getCurrentArraySize=function(a){return this.$10(a).length};c.$10=function(a){var b=this.$1;if(a&&a.strict){a=a.skipOnStrictHandler||this.$9;a&&(b=b.filter(a))}return b};c.$6=function(a,b){var c=this.$10(b),d=a.start;a=a.start+a.limit;b=!!(b&&b.force);if(!b&&!this.$2&&!this.$3&&a>c.length)return!1;else{b=c.slice(d,a);d=a>c.length?this.$3:null;return[b,d]}};c.getElementsUntil=function(a){var b=[];for(var c=0;c<this.$1.length;c++){var d=this.$7(this.$1[c]);if(this.$8(d,a)>0)break;b.push(this.$1[c])}return b};return a}();e.exports=a}),null);
__d("NotificationEndpointState",["BusinessUserConf","KeyedCallbackManager","RangedCallbackManager","flatMapArray","objectValues","stableStringify"],(function(a,b,c,d,e,f){__p&&__p();var g={AdsUnifiedNavNotificationsPayloadPagelet:"AdsUnifiedNavNotificationsPayloadPagelet",BusinessManagerNotificationsPayloadPagelet:"BusinessManagerNotificationsPayloadPagelet",WebNotificationsPayloadPagelet:"WebNotificationsPayloadPagelet","/notifications/client/ads_unified_nav/":"AdsUnifiedNavNotificationsPayloadPagelet","/notifications/client/business_manager/":"BusinessManagerNotificationsPayloadPagelet","/ajax/notifications/client/get.php":b("BusinessUserConf").businessUserID?"BusinessManagerNotificationsPayloadPagelet":"WebNotificationsPayloadPagelet"};a=function(){"use strict";__p&&__p();a.getInstance=function(b){var c=b.classification!=null?b.classification:"_",d=b.readness!=null?b.readness:"_";c="(c)"+c+"(s)"+d;d=a.$1[b.endpointControllerName];d==null&&(a.$1[b.endpointControllerName]=d={});d[c]==null&&(d[c]=new a(b));return d[c]};a.getAllInstances=function(c){c!=null?c=[c]:c=Object.keys(a.$1);return b("flatMapArray")(c,function(c){c=a.$1[c];if(c==null)return[];else return b("objectValues")(c)})};function a(a){__p&&__p();var c=a.businessUserID,d=a.classification,e=a.endpointControllerName;a=a.readness;this.notifications=new(b("KeyedCallbackManager"))();this.businessUserID=c!=null?c:b("BusinessUserConf").businessUserID;this.classification=d;this.endpointControllerName=e;this.readness=a;c=function(a){a=this.notifications.getResource(a);return a.creation_time};this.order=new(b("RangedCallbackManager"))(c.bind(this),function(a,b){return b-a});this.graphQLPageInfo=null}var c=a.prototype;c.getConfig=function(){return{businessUserID:this.businessUserID,classification:this.classification,endpointControllerName:this.endpointControllerName,readness:this.readness}};c.getHash=function(){return b("stableStringify")(this.getConfig())};c.getRequestParams=function(a){a=Math.max(0,a-this.order.getAllResources().length);return{businessUserID:this.businessUserID,classification:this.classification!=null?this.classification.toLowerCase():void 0,cursor:this.graphQLPageInfo&&this.graphQLPageInfo.end_cursor,filter:this.readness==null?void 0:this.readness==="SEEN_AND_READ"?"read":"unread",readness:this.readness,length:a}};c.getStreamingTransportPageletName=function(){return g[this.endpointControllerName]||this.endpointControllerName};return a}();a.$1={};e.exports=a}),null);
__d("NotificationTokens",["CurrentUser"],(function(a,b,c,d,e,f){a={tokenizeIDs:function(a){return a.map(function(a){return b("CurrentUser").getID()+":"+a})},untokenizeIDs:function(a){return a.map(function(a){return a.split(":")[1]})}};e.exports=a}),null);
__d("NotificationUpdates",["Arbiter","LiveTimer","NotificationConstants","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={},i={},j={},k=!1,l=[],m=0,n=new(b("Arbiter"))();function o(){__p&&__p();if(m)return;var a=g,b=h,c=i,d=j;g={};h={};i={};j={};(Object.keys(a).length||k)&&(k=!1,q("notifications-updated",a));Object.keys(b).length&&q("seen-state-updated",b);Object.keys(c).length&&q("read-state-updated",c);Object.keys(d).length&&q("hidden-state-updated",d);l.pop()}function p(){return l.length?l[l.length-1]:b("NotificationConstants").PayloadSourceType.UNKNOWN}function q(a,b){s.inform(a,{updates:b,source:p()})}var r=null,s={getserverTime:function(){return r},handleUpdate:function(a,c,d,e){c.servertime&&(r=c.servertime,b("LiveTimer").restart(c.servertime)),this._updateWithPayload(a,c)},_updateWithPayload:function(a,b){var c=this;Object.keys(b).length&&this.synchronizeInforms(function(){l.push(a);var d=babelHelpers["extends"]({},b,{payloadsource:p()});c.inform("update-notifications",d);c.inform("update-seen",d);c.inform("update-read",d);c.inform("update-hidden",d)})},getArbiter:function(){return n},inform:function(a,b){return n.inform(a,b)},subscribe:function(a,b){return n.subscribe(a,b)},didUpdateNotifications:function(a){Object.assign(g,b("createObjectFrom")(a)),k=!0,o()},didUpdateSeenState:function(a){Object.assign(h,b("createObjectFrom")(a)),o()},didUpdateReadState:function(a){Object.assign(i,b("createObjectFrom")(a)),o()},didUpdateHiddenState:function(a){Object.assign(j,b("createObjectFrom")(a)),o()},synchronizeInforms:function(a){m++;try{a()}catch(a){throw a}finally{m--,o()}}};e.exports=s}),null);
__d("NotificationOptionActionWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1420844941369152"};b.getQueryID=function(){return"318967338567215"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("NotificationUserActions",["AsyncRequest","Bootloader","BusinessUserConf","CurrentUser","NotificationConstants","NotificationOptionActionWebGraphQLMutation","NotificationTokens","NotificationUpdates","WebGraphQL","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationConstants").PayloadSourceType.USER_ACTION,h=!1;function i(a){b("BusinessUserConf").businessUserID!=null&&(a.biz_user_id=b("BusinessUserConf").businessUserID),new(b("AsyncRequest"))("/ajax/notifications/mark_read.php").setData(a).setAllowCrossPageTransition(!0).send()}function j(a){var b={};a.forEach(function(a,c){b["alert_ids["+c+"]"]=a});return b}a={markNotificationsAsSeen:function(a,c,d){__p&&__p();var e=document.getElementById("notificationsCountValue"),f=null;e&&(f=e.textContent);b("NotificationUpdates").handleUpdate(g,{seenState:b("createObjectFrom")(a)});e=b("NotificationTokens").untokenizeIDs(a);a=j(e);a.seen=!0;f&&(a.badgeCount=f);c&&(a.source_view=c);d&&(a.classification=d);i(a)},setNextIsFromReadButton:function(a){h=a},markNotificationsAsRead:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!0)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);c&&(a.source_view=c);i(a)},markNotificationsAsUnread:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!1)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);a.unread=!0;c&&(a.source_view=c);i(a)},markAllNotificationsAsRead:function(a){b("Bootloader").loadModules(["NotificationSeenState"],function(c){c=c.getUnreadIDs();c.length>0&&b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(c)});c={read:!0};h&&(c.from_read_button=!0,h=!1);a&&(c.source_view=a);i(c)},"NotificationUserActions")},sendNotifOption:function(a){return b("WebGraphQL").exec(new(b("NotificationOptionActionWebGraphQLMutation"))({input:{action_type:a,actor_id:b("CurrentUser").getID(),client_mutation_id:"0"}}))}};e.exports=a}),null);
__d("LiveVideoBeeperItemContents.react",["BootloadOnRender.react","JSResource","LazyComponent.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("BootloadOnRender.react"),{loader:b("JSResource")("LiveVideoBeeperItemContentsImpl.react").__setRef("LiveVideoBeeperItemContents.react"),placeholder:b("React").jsx("div",{}),component:b("React").jsx(b("LazyComponent.react"),babelHelpers["extends"]({},this.props,{ref:"itemContents"}))})};return c}(b("React").Component);e.exports=a}),null);
__d("Spotlight",["csx","cx","Arbiter","ArbiterMixin","DOM","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerTabIsolation","ModalLayer","Vector","classWithMixins","joinClasses","mixin"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){c=a.call(this,c,d)||this;c.stageMinSize=new(b("Vector"))(0,0);c.stagePadding=new(b("Vector"))(0,0);return c}var d=c.prototype;d._buildWrapper=function(a,c){a=b("joinClasses")("_n8"+(a.wash==="dark"||!a.wash?" _3qx":"")+(a.wash==="xui"?" _4-hy":""),a.rootClassName);return b("JSXDOM").div({className:a},b("JSXDOM").div({className:"_n9"},c))};d._getDefaultBehaviors=function(){return a.prototype._getDefaultBehaviors.call(this).concat([i,b("LayerAutoFocus"),b("LayerButtons"),b("LayerTabIsolation"),b("ModalLayer")])};d.getContentRoot=function(){this._content||(this._content=b("DOM").find(this.getRoot(),"div._n3"));return this._content};d.configure=function(a){a.stageMinSize&&(this.stageMinSize=a.stageMinSize),a.stagePadding&&(this.stagePadding=a.stagePadding)};d.onContentLoaded=function(){this.inform("content-load")};d.updatePermalink=function(a){this.inform("permalinkchange",a)};return c}(b("classWithMixins")(b("Layer"),b("mixin")(b("ArbiterMixin"))));Object.assign(a.prototype,{stageMinSize:null,stagePadding:null});var i=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe(["show","hide"],function(a,c){a==="show"?b("Arbiter").inform("layer_shown",{type:"Spotlight"}):b("Arbiter").inform("layer_hidden",{type:"Spotlight"})})};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};return a}();Object.assign(i.prototype,{_subscription:null});e.exports=a}),null);
__d("Spotlight.react",["LayerAutoFocusReact","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","React","ReactLayer","Spotlight"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=b("ReactLayer").createClass({propTypes:{causalElement:a.instanceOf(HTMLElement),onHide:a.func,rootClassName:a.string,shown:a.bool,wash:a.oneOf(["light","xui","dark"])},getDefaultEnabledBehaviors:function(){return{hideOnBlur:b("LayerHideOnBlur"),hideOnEscape:b("LayerHideOnEscape"),refocusOnHide:b("LayerRefocusOnHide"),autoFocus:b("LayerAutoFocusReact")}},createLayer:function(a){var c=this.enumerateBehaviors(this.props.behaviors);c={addedBehaviors:c,rootClassName:this.props.rootClassName,wash:this.props.wash};c=new(b("Spotlight"))(c,a);c.setCausalElement(this.props.causalElement);c.conditionShow(this.props.shown);this.props.onBeforeHide&&c.subscribe("beforehide",this.props.onBeforeHide);this.props.onHide&&c.subscribe("hide",this.props.onHide);return c},receiveProps:function(a){this.layer&&(this.layer.setCausalElement(a.causalElement),this.layer.conditionShow(a.shown))}});e.exports=c}),null);
__d("FacebookWebNotificationsSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"2382846945064526",queryID:"1138169679678964"})}),null);
__d("FacebookWebNotificationsSubscription",["invariant","BanzaiODS","BaseGraphQLSubscription","CurrentUser","FacebookWebNotificationsSubscriptionWebGraphQLSubscription","StreamStateMachineConstants","SubscriptionsHandler","WebPixelRatio","uuid"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("StreamStateMachineConstants").events,i="WEB_DESKTOP",j=[],k=null,l="www.notifications.lifecycle",m=0,n=!1,o=!1,p=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTopic=function(a){return"gqls/"+this.getSubscriptionCallName()+"/actor_id_"+a.actorID+"_environment_"+i};d.getQueryID=function(){return b("FacebookWebNotificationsSubscriptionWebGraphQLSubscription").getDocID()};d.getQueryParameters=function(a){return{input:{client_subscription_id:b("uuid")(),environment:i},is_work_user:b("CurrentUser").isWorkUser(),scale:b("WebPixelRatio").get()}};d.getSubscriptionCallName=function(){return"web_notification_receive_subscribe"};return a}(b("BaseGraphQLSubscription"));function q(a){__p&&__p();a=Date.now()-a;if(a<6e4)return"1m";else if(a<3e5)return"5m";else if(a<9e5)return"15m";else if(a<18e5)return"30m";else if(a<36e5)return"1h";else return"1h+"}function r(a){__p&&__p();if(a.__type==="lifecycle_event"){var c=a.state;if(c===h.GQLS_STATE_TRANSIT_ON_CREATE){m=Date.now();return}if(n&&c===h.GQLS_STATE_TRANSIT_ON_ACTIVE){var d=h.GQLS_STATE_TRANSIT_ON_RESUME,e=q(m);b("BanzaiODS").bumpEntityKey(2966,l,d);o||(e!=null&&b("BanzaiODS").bumpEntityKey(2966,l,"first."+d+"."+e),o=!0);b("BanzaiODS").bumpEntityKey(2966,l,d+"."+e);return}b("BanzaiODS").bumpEntityKey(2966,l,c);if(c===h.GQLS_STATE_TRANSIT_ON_PAUSE){if(!n){n=!0;d=q(m);d!=null&&b("BanzaiODS").bumpEntityKey(2966,l,c+"."+d)}m=Date.now()}return}e=a.web_notification_receive_subscribe;if(e==null)return;b("BanzaiODS").bumpEntityKey(2966,l,"payload");var f=e.aggregated_notification,g=e.notification,i=e.pinned_conversation,k=e.should_play_sound,p=e.should_show_beeper;j.forEach(function(a){switch(a.event){case"NEW_BEEPER":g!=null&&p===!0&&a.callback({notification:g,should_play_sound:!!k});break;case"NEW_NOTIFICATION":f!=null&&a.callback(f);break;case"NEW_PINNED_CONVERSATION":i!=null&&a.callback(i);break}})}e.exports={subscribe:function(a){__p&&__p();j.push(a);k===null&&(k=new(b("SubscriptionsHandler"))(),k.addSubscriptions(p.subscribe({actorID:b("CurrentUser").getID()},r)));var c=!1;return{remove:function(){if(c===!0)return;k!=null||g(0,3589);c=!0;j.splice(j.indexOf(a),1);j.length===0&&(k.release(),k=null)}}}}}),null);
__d("MNCommerceActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a={RECEIPT:{LOADED:null,LOAD_ERROR:null,RELOAD:null},SHIPMENT:{LOADED:null,LOAD_ERROR:null,RELOAD:null},DIALOG:{SHOW:null,HIDE:null},RETAIL_ITEM:{LOADED:null,LOAD_ERROR:null,RELOAD:null},PROMOTION_STATE:{LOADED:null,LOAD_ERROR:null,RELOAD:null},TRANSACTION_INVOICE:{LOADED:null,LOAD_ERROR:null,RELOAD:null},BOT_REVIEW_STATE:{LOADED:null,LOAD_ERROR:null,RELOAD:null}};c=b("keyMirrorRecursive")(a);e.exports=c}),null);
__d("MNCommerceDialogStateStore",["FluxStore","MessengerDispatcher","MNCommerceActionTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,b("MessengerDispatcher"))||this;c.$MNCommerceDialogStateStore1=null;c.$MNCommerceDialogStateStore2=null;return c}var d=c.prototype;d.__onDispatch=function(a){__p&&__p();var c=a.type;switch(c){case b("MNCommerceActionTypes").DIALOG.SHOW:this.$MNCommerceDialogStateStore1=a.dialogContainer;this.$MNCommerceDialogStateStore2=a.state;this.__emitChange();break;case b("MNCommerceActionTypes").DIALOG.HIDE:this.$MNCommerceDialogStateStore1=null;this.$MNCommerceDialogStateStore2=null;this.__emitChange();break}};d.getDialogContainer=function(){return this.$MNCommerceDialogStateStore1};d.getState=function(){return this.$MNCommerceDialogStateStore2};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("MNCommerceDialogContainer.react",["MNCommerceDialogStateStore","PureStoreBasedStateMixin","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"MNCommerceDialogContainer",mixins:[b("PureStoreBasedStateMixin")(b("MNCommerceDialogStateStore"))],statics:{calculateState:function(){var a=b("MNCommerceDialogStateStore").getDialogContainer();return{dialogContainer:a}}},render:function(){var a=this.state.dialogContainer;return!a?null:b("React").jsx(a,{})}});e.exports=a}),null);
__d("P2PDialogStore",["EventEmitter","P2PActionConstants","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));g={dialogClass:null,dialogProps:null};return c}var d=c.prototype;d.getState=function(){return g};d.onEventDispatched=function(a){__p&&__p();var c=a.type;a=a.data;switch(c){case b("P2PActionConstants").DIALOG_SHOWN:g.dialogClass=a.dialogClass;g.dialogProps=a.dialogProps;this.emit("change");break;case b("P2PActionConstants").DIALOG_CLOSED:g.dialogClass=null;g.dialogProps=null;this.emit("change");break}};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PDialogContainer.react",["P2PDialogStore","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state=b("P2PDialogStore").getState(),d.onDialogStoreChange=function(){d.setState(b("P2PDialogStore").getState())},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.dialogStoreSub=b("P2PDialogStore").addListener("change",this.onDialogStoreChange)};d.componentWillUnmount=function(){this.dialogStoreSub&&(this.dialogStoreSub.remove(),this.dialogStoreSub=null)};d.render=function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))};return c}(b("React").Component);e.exports=a}),null);
__d("PagesPlatformActionConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BOOKING_REQUEST_ACCEPT_ERROR:"booking_request_accept_error",BOOKING_REQUEST_ACCEPT_INITIATED:"booking_request_accept_initiated",BOOKING_REQUEST_ACCEPTED:"booking_request_accepted",BOOKING_REQUEST_CREATED:"booking_request_created",BOOKING_REQUEST_DECLINE_ERROR:"booking_request_decline_error",BOOKING_REQUEST_DECLINE_INITIATED:"booking_request_decline_initiated",BOOKING_REQUEST_DECLINED:"booking_request_declined",BOOKING_REQUEST_RESCHEDULE_INITIATED:"booking_request_reschedule_initiated",BOOKING_REQUEST_RESCHEULED:"booking_request_reschedule",DIALOG_CLOSED:"dialog_closed",DIALOG_SHOWN:"dialog_shown",NEW_TIME_CHOSEN:"new_time_chosen"});e.exports=a}),null);
__d("PagesPlatformRequestDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("PagesPlatformDialogStore",["EventEmitter","PagesPlatformActionConstants","PagesPlatformRequestDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;b("PagesPlatformRequestDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));g={dialogClass:null,dialogProps:null};return c}var d=c.prototype;d.getState=function(){return g};d.onEventDispatched=function(a){__p&&__p();var c=a.type;a=a.data;switch(c){case b("PagesPlatformActionConstants").DIALOG_SHOWN:g.dialogClass=a.dialogClass;g.dialogProps=a.dialogProps;this.emit("change");break;case b("PagesPlatformActionConstants").DIALOG_CLOSED:g.dialogClass=null;g.dialogProps=null;this.emit("change");break}};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("PagesPlatformDialogContainer.react",["PagesPlatformDialogStore","PureStoreBasedStateMixin","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"PagesPlatformDialogContainer",mixins:[b("PureStoreBasedStateMixin")(b("PagesPlatformDialogStore"))],statics:{calculateState:function(){return b("PagesPlatformDialogStore").getState()}},render:function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))}});e.exports=a}),null);
__d("FBPaymentsDialogStore",["FBPaymentsDialogActions","FBPaymentsDispatcher","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,b("FBPaymentsDispatcher"))||this;c.$FBPaymentsDialogStore1={dialogClass:null,dialogProps:null};return c}var d=c.prototype;d.__onDispatch=function(a){var c=a.type;a=a.data;switch(c){case b("FBPaymentsDialogActions").types.SHOW_DIALOG:this.$FBPaymentsDialogStore1={dialogClass:a.dialogClass,dialogProps:a.dialogProps};this.__emitChange();break;case b("FBPaymentsDialogActions").types.HIDE_DIALOG:this.$FBPaymentsDialogStore1={dialogClass:null,dialogProps:null};this.__emitChange();break}};d.getState=function(){return this.$FBPaymentsDialogStore1};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("FBPaymentsDialogContainer.react",["FBPaymentsDialogStore","FBPaymentsDispatcher","FluxContainer","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.calculateState=function(){return b("FBPaymentsDialogStore").getState()};c.getStores=function(){return[b("FBPaymentsDialogStore")]};var d=c.prototype;d.UNSAFE_componentWillMount=function(){b("FBPaymentsDispatcher").explicitlyRegisterStore(b("FBPaymentsDialogStore"))};d.render=function(){if(!this.state.dialogClass)return null;var a=this.state.dialogClass;return b("React").createElement(a,babelHelpers["extends"]({},this.state.dialogProps,{key:"dialog"}))};return c}(b("React").Component);e.exports=b("FluxContainer").create(a)}),null);
__d("VideoChainingCaller",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INTERNAL:"internal",WWW_FEED_PIVOTS:"www_feed_pivots",WWW_FEED_SNOWLIFT:"www_feed_snowlift",MISC_PHOTO_SET:"misc_photo_set",MOBILE:"mobile",SEARCH:"search",WWW_FEED_RHC:"www_feed_rhc",WWW_NOTIFICATION:"www_notification",WWW_PERMALINK:"www_permalink",WWW_PERMALINK_RHC:"www_permalink_rhc",WWW_PERMALINK_RHC_FROM_NOTIFICATION:"www_permalink_rhc_from_notification",MY_VIDEO_CHANNELS_ENT_QUERY:"my_video_channels_ent_query",TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:"top_followed_video_channels_ent_query",BADGE:"badge",PAGINATION:"pagination",SUBTITLE:"subtitle",CHANNEL_VIEW_FROM_UNKNOWN:"channel_view_from_unknown",CHANNEL_VIEW_FROM_NEWSFEED:"channel_view_from_newsfeed",CHANNEL_VIEW_FROM_EXPLOREFEED:"channel_view_from_explorefeed",LIVE_INDEXER_FROM_EXPLOREFEED:"live_indexer_from_explorefeed",LIVE_INDEXER_FROM_NEWSFEED:"live_indexer_from_newsfeed",NN_INDEXER_FROM_NEWSFEED:"nn_indexer_from_newsfeed",CHANNEL_VIEW_FROM_SEARCH:"channel_view_from_search",CHANNEL_VIEW_FROM_NEWSFEED_PIVOT:"channel_view_from_newsfeed_pivot",NEWSFEED_PIVOT_INLINE:"newsfeed_pivot_inline",MOBILE_NEWSFEED_PIVOT_INLINE:"mobile_newsfeed_pivot_inline",CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:"channel_view_from_page_call_to_action",CHANNEL_VIEW_FROM_PAGE_TIMELINE:"channel_view_from_page_timeline",CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:"channel_view_from_page_timeline_featured",CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB:"channel_view_from_page_video_tab",CHANNEL_VIEW_FROM_PAGE_HOME_HERO:"channel_view_from_page_home_hero",CHANNEL_VIEW_FROM_USER_TIMELINE:"channel_view_from_user_timeline",CHANNEL_VIEW_FROM_USER_VIDEO_TAB:"channel_view_from_user_video_tab",CHANNEL_VIEW_FROM_GROUP_TIMELINE:"channel_view_from_group_timeline",CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB:"channel_view_from_group_video_tab",CHANNEL_VIEW_FROM_VIDEO_PAGE_SPOTLIGHT:"channel_view_from_video_page_spotlight",CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_LIST:"channel_view_from_video_page_video_list",CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_TAB:"channel_view_from_video_page_video_tab",CHANNEL_VIEW_FROM_CHANNEL_TAB:"channel_view_from_channel_tab",CHANNEL_VIEW_FROM_SAVED_STORY:"channel_view_from_saved_story",SAVED_STORY_INLINE:"saved_story_inline",CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:"channel_view_from_shared_with_you_story",SHARED_WITH_YOU_STORY_INLINE:"shared_with_you_story_inline",CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:"channel_view_from_latest_from_your_channels_story",LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:"latest_from_your_channels_story_inline",CHANNEL_VIEW_FROM_CHANNEL_PIVOT:"channel_view_from_channel_pivot",CHANNEL_PIVOT_INLINE:"channel_pivot_inine",CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:"channel_view_from_recommended_channel_story",RECOMMENDED_CHANNEL_STORY_INLINE:"recommended_channel_story_inline",CHANNEL_VIEW_FROM_VIDEO_HOME:"channel_view_from_video_home",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_CHANNEL_SEE_ALL:"video_home_channel_see_all",SOCIAL_PLAYER_UP_NEXT:"social_player_up_next",CHANNEL_VIEW_FROM_CASTING:"channel_view_from_casting",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_HERO:"video_home_hero",FEED_SURVEY_SWIPE:"feed_survey_swipe",FEED_PIVOTS_INLINE:"feed_pivots_inline",CHANNEL_VIEW_FROM_FEED_PIVOTS:"channel_view_from_feed_pivots",VIDEO_SETS_CACHE_REFRESH:"video_sets_cache_refresh",VIDEO_SETS_CACHE_CHECK:"video_sets_cache_check",DUMMY_STORY_RECOMMENDED_VIDEOS:"dummy_story_recommended_videos",DUMMY_STORY_FRIENDS_ENJOYING:"dummy_story_friends_enjoying",LIVE_EVENT_VIDEO_SET:"live_event_video_set",LIVE_VIDEOS_SET:"live_videos_set",SINGLE_CREATOR_VIDEO_SET:"single_creator_video_set",FRT_TOOL:"frt_tool",DUMMY_STORY_FRIENDS_ENJOYING_NOW:"dummy_story_friends_enjoying_now",DUMMY_STORY_DUMMY_ACTION:"dummy_story_dummy_action",OCULUS_VIDEO:"oculus_video",TRENDING_DEMOGRAPHICS_LIVE:"trending_demographics_live",LIVE_MAP:"live_map",UNCONNECTED_LIVE_VIDEO:"unconnected_live_video",PROFILE_VIDEO_GALLERY:"profile_video_gallery",CHANNEL_VIEW_FROM_PLAYLIST:"channel_view_from_playlist",OCULUS_SOCIAL_HUB:"oculus_social_hub",AKIRA:"akira",IS_LIVE_VIDEO_CHAINING:"is_live_video_chaining",IS_LIVE_VIDEO_CHAINING_OTHERS:"is_live_video_chaining_others",VIDEO_CREATOR_CHAINING:"video_creator_chaining",TAHOE:"tahoe",LIVING_ROOM:"living_room",SHOWS_COVER_TRAILER:"shows_cover_trailer",SHOWS_EPISODES_TAB:"shows_episodes_tab",SHOWS_PLAYLISTS_TAB:"shows_playlists_tab",SHOWS_HOME_TAB:"shows_home_tab",SHOWS_MORE_VIDEOS_TAB:"shows_more_videos_tab",SHOW_EPISODE_FEED_RECOMMENDATIONS:"show_episode_feed_recommendations",PARENT_PAGE_TIMELINE:"parent_page_timeline",WATCH_WATCHLIST_TAB:"watch_watchlist_tab",WATCH_FEED_TAB:"watch_feed_tab",WATCH_INJECTION:"watch_injection",WATCH_TOPIC_FEED:"watch_topic_feed",WATCH_TOPIC_CHANNEL_FEED:"watch_topic_channel_feed",WATCH_SUBTOPIC_CHANNEL_FEED:"watch_subtopic_channel_feed",WATCH_SECTION_SEE_ALL:"watch_section_see_all",SOCIAL_PLAYER_FROM_VIDEO_HOME:"social_player_from_video_home",WATCH_CUSTOM_ADS:"watch_custom_ads",WATCH_EMBEDDED_ENDSCREEN:"watch_embedded_endscreen",WNS:"wns",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive",VOYAGER:"voyager",GAMES_VIDEO_CHANNEL:"games_video_channel",LOL_VIDEO_FEED:"lol_video_feed",AVD_VIDEO:"avd",LIVE_CHAINING:"live_chaining",LIVING_ROOM_CHAINING:"living_room_chaining",FBLITE_TRENDING_VIDEO:"fblite_trending_video",PORTAL:"portal",LASSO:"lasso",WATCH_SOCIAL:"watch_social",MESSENGER:"messenger",PREMIUM_MUSIC_VIDEO:"premium_music_video",CHANNEL_VIEW_FROM_NEWSFEED_RELATED:"channel_view_from_newsfeed_related",CHANNEL_VIEW_FROM_VIDEO_HOME_RELATED:"channel_view_from_video_home_related",FEED_SHORT_VIDEO:"feed_short_video",PHOTO_CHAINING:"photo_chaining",YOUTUBE_SHARE:"youtube_share",TEST:"test",UNKNOWN:"unknown"})}),null);
__d("XPushRegisterServiceWorkerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/push/register/service_worker/",{})}),null);