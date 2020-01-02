if (self.CavalryLogger) { CavalryLogger.start_js(["tLNpa"]); }

__d("AdsLWICompleteDraftConfirmationAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"AdsLWICompleteDraftConfirmationActionPlugin");e.exports=a}),null);
__d("AdsLWIResetRegulatedCategoryReducerPlugin",["AdsLWIRegulatedCategoryUtils","LaminarReducerWithFluxSelectors","adsLWICommonStoreStateKeySelector"],(function(a,b,c,d,e,f){"use strict";var g=b("AdsLWIRegulatedCategoryUtils").DEFAULT_HEC_DATA;a={reduce:b("LaminarReducerWithFluxSelectors")({key:b("adsLWICommonStoreStateKeySelector")},function(a,b,c){b=c.key;return b==null||!a.has(b)?a:a.set(b,g)})};e.exports=a}),null);
__d("AdsLWIResetRegulatedCategoryAction",["Laminar","AdsLWIResetRegulatedCategoryReducerPlugin","AdsLWISelectRegulatedCategoryProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("AdsLWIResetRegulatedCategoryReducerPlugin"),b("AdsLWISelectRegulatedCategoryProvider"),{})]},function(){return[]},"AdsLWIResetRegulatedCategoryActionPlugin");e.exports=a}),null);
__d("AdsLWISelectRegulatedCategoryReducerPlugin",["LaminarReducerWithFluxSelectors","adsLWICommonStoreStateKeySelector","adsLWIRecommendationDataSelectors"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("adsLWIRecommendationDataSelectors").adsLWISelectedAAPromotionIDSelector;c={reduce:b("LaminarReducerWithFluxSelectors")({key:b("adsLWICommonStoreStateKeySelector"),promotionID:a},function(a,b,c){__p&&__p();var d=c.key;c=c.promotionID;if(d==null)return a;c=c!=null?d.set("promotionID",c):d;if(!a.has(c))return a;d=a.get(c);d=d.set("hasRegulatedCategoryChanged",!0);!b.isToggledSAC?d=d.set("prevSelectedRegulatedCategory",d.get("selectedRegulatedCategory")).set("selectedRegulatedCategory",0):d=d.set("selectedRegulatedCategory",d.get("prevSelectedRegulatedCategory"));b=b.selectedRegulatedCategory;b!=null&&(d=d.set("selectedRegulatedCategory",b));return a.set(c,d)})};e.exports=c}),null);
__d("AdsLWIUpdateRegulatedCategoryLoggerPlugin",["AdsLWIRegulatedCategoryUtils","BoostedComponentTypedLoggerLite","adsLWICurrentInstanceDataSelector","adsLWIDialogStateSelector","adsLWIFlowIDSelector","adsLWIHECDataSelector","adsLWISelectedAccountIDSelector"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsLWIRegulatedCategoryUtils").AdProRegulatedCategoryToOptionAdsRegulatedCategoryMap,h=b("BoostedComponentTypedLoggerLite").log;a={log:function(a){__p&&__p();var c=b("adsLWIDialogStateSelector")();c=c.instanceID;c=b("adsLWICurrentInstanceDataSelector")({currentInstanceID:c});if(c==null)return;var d=b("adsLWIHECDataSelector")(),e=a.selectedRegulatedCategory,f=d.prevSelectedRegulatedCategory;e==null&&(e=a.isToggledSAC?d.prevSelectedRegulatedCategory:0,a.isToggledSAC===!0&&(f=0));d=b("adsLWISelectedAccountIDSelector")();a=b("adsLWIFlowIDSelector")();var i=c.pageID,j=c.targetID;c=c.product;h({action:"change",ad_account_id:d,context:"regulated_category",ending_value:g[e],event:"update_regulated_category",flow_id:a,page_id:i,post_id:j,product:c,side:"user_action",starting_value:g[f]})}};e.exports=a}),null);
__d("AdsLWISelectRegulatedCategoryAction",["Laminar","AdsLWISelectRegulatedCategoryReducerPlugin","AdsLWISelectRegulatedCategoryProvider","AdsLWIUpdateRegulatedCategoryLoggerPlugin"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("AdsLWISelectRegulatedCategoryReducerPlugin"),b("AdsLWISelectRegulatedCategoryProvider"),{})]},function(){return[b("Laminar").__createLogger("AdsLWIUpdateRegulatedCategoryLoggerPlugin",b("AdsLWIUpdateRegulatedCategoryLoggerPlugin"),{})]},"AdsLWISelectRegulatedCategoryActionPlugin");e.exports=a}),null);
__d("AdsLWIRegulatedCategoryQuerySectionQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"adAccountID",type:"ID!",defaultValue:null}];return{kind:"Request",fragment:{kind:"Fragment",name:"AdsLWIRegulatedCategoryQuerySectionQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"FragmentSpread",name:"AdsLWIRegulatedCategorySection_adAccountData",args:[{kind:"Variable",name:"adAccountID",variableName:"adAccountID"}]}]},operation:{kind:"Operation",name:"AdsLWIRegulatedCategoryQuerySectionQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"ad_account",storageKey:null,args:[{kind:"Variable",name:"legacy_account_id",variableName:"adAccountID"}],concreteType:"AdAccount",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"should_show_hec_flow",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]},params:{operationKind:"query",name:"AdsLWIRegulatedCategoryQuerySectionQuery",id:"2845687688778836",text:null,metadata:{relayPreloadable:!0}}}}();e.exports=a}),null);
__d("AdsLWIRegulatedCategorySectionRefetchQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"adAccountID",type:"ID!",defaultValue:null}];return{kind:"Request",fragment:{kind:"Fragment",name:"AdsLWIRegulatedCategorySectionRefetchQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"FragmentSpread",name:"AdsLWIRegulatedCategorySection_adAccountData",args:[{kind:"Variable",name:"adAccountID",variableName:"adAccountID"}]}]},operation:{kind:"Operation",name:"AdsLWIRegulatedCategorySectionRefetchQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"ad_account",storageKey:null,args:[{kind:"Variable",name:"legacy_account_id",variableName:"adAccountID"}],concreteType:"AdAccount",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"should_show_hec_flow",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]},params:{operationKind:"query",name:"AdsLWIRegulatedCategorySectionRefetchQuery",id:"1929783120455937",text:null,metadata:{derivedFrom:"AdsLWIRegulatedCategorySection_adAccountData",isRefetchableQuery:!0}}}}();e.exports=a}),null);
__d("AdsLWIRegulatedCategorySection_adAccountData.graphql",["AdsLWIRegulatedCategorySectionRefetchQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"AdsLWIRegulatedCategorySection_adAccountData",type:"Query",metadata:{refetch:{connection:null,operation:b("AdsLWIRegulatedCategorySectionRefetchQuery.graphql"),fragmentPathInResult:[]}},argumentDefinitions:[{kind:"LocalArgument",name:"adAccountID",type:"ID!",defaultValue:null}],selections:[{kind:"LinkedField",alias:null,name:"ad_account",storageKey:null,args:[{kind:"Variable",name:"legacy_account_id",variableName:"adAccountID"}],concreteType:"AdAccount",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"should_show_hec_flow",args:null,storageKey:null}]}]};e.exports=a}),null);
__d("AdsLWIHumanPilotBannerContainerWrapper.react",["requireCond","cr:929793","BoostedComponentErrorBoundaryContainer.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.leadSource;return b("cr:929793")!=null?b("React").jsx(b("BoostedComponentErrorBoundaryContainer.react"),{sectionName:"AdsLWIHumanPilotBannerContainer",children:b("React").jsx(b("cr:929793"),{leadSource:a})}):null}e.exports=a}),null);
__d("AdsLWIRegulatedCategoryConstants",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a=[3,1,2];c=(b={},b[1]=g._("Employment"),b[2]=g._("Housing"),b[3]=g._("Credit"),b[0]=g._("None selected"),b);d=g._("Ads for credit, employment or housing offers.");f=g._("SPECIAL AD CATEGORY");b=g._("Special ad category");g=g._("Ad category");e.exports={AdProRegulatedCategoryNameMap:c,ELIGIBLE_CATEGORIES:a,SPECIAL_AD_CATEGORY_SECTION_SUMMARY:d,SPECIAL_AD_CATEGORY_SECTION_TITLE_UPPERCASE:f,SPECIAL_AD_CATEGORY_SECTION_TITLE:b,SPECIAL_AD_CATEGORY_SELECTOR_LABEL:g}}),null);
__d("AdsLWIRegulatedCategorySelector.react",["AdsLWIRegulatedCategoryConstants","AdsLWIRegulatedCategoryUtils","AdsRegulatedCategoryConstants","FDSSelector.react","FDSSelectorItem.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("AdsLWIRegulatedCategoryConstants").AdProRegulatedCategoryNameMap,h=b("AdsLWIRegulatedCategoryConstants").ELIGIBLE_CATEGORIES,i=b("AdsLWIRegulatedCategoryConstants").SPECIAL_AD_CATEGORY_SELECTOR_LABEL,j=b("AdsLWIRegulatedCategoryUtils").AdProRegulatedCategoryToOptionAdsRegulatedCategoryMap,k=b("AdsRegulatedCategoryConstants").AdsRegulatedCategorySubTextMap;function a(a){var c=a.selectedRegulatedCategory;a=a.onChangeSelectedValue;return b("React").jsx(b("FDSSelector.react"),{label:i,placeholder:k[j[c]],value:c,onChange:a,children:[h.map(function(a){return b("React").jsx(b("FDSSelectorItem.react"),{label:g[a],subText:k[j[a]],value:a},a)})]})}e.exports=a}),null);
__d("AdsLWIRegulatedCategorySection.react",["fbt","AdsLWIRegulatedCategoryConstants","AdsLWIRegulatedCategorySelector.react","AdsLWIRegulatedCategoryUtils","AdsLWIResetRegulatedCategoryAction","AdsLWISelectRegulatedCategoryAction","BoostedComponentSection.react","FBToggleSwitch.react","FDSLink.react","FDSText.react","React","RelayHooks","cxMargin","qex","useOnUpdateEffect","AdsLWIRegulatedCategorySection_adAccountData.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("AdsLWIRegulatedCategoryConstants").SPECIAL_AD_CATEGORY_SECTION_SUMMARY,j=b("AdsLWIRegulatedCategoryConstants").SPECIAL_AD_CATEGORY_SECTION_TITLE_UPPERCASE,k=b("AdsLWIRegulatedCategoryUtils").getSpecialAdCategoryLearnMoreURI,l=b("React").useEffect;b("RelayHooks").graphql;var m=b("RelayHooks").useRefetchableFragment;function n(a,c){b("AdsLWISelectRegulatedCategoryAction").dispatch({isToggledSAC:a,selectedRegulatedCategory:c},{line:"45",module:"AdsLWIRegulatedCategorySection.react.js"})}function o(a){n(a,null)}function p(a){n(!0,a)}function a(a){__p&&__p();var c=a.adAccountData,d=a.adAccountID,e=a.noBottomBorder;e=e===void 0?!0:e;var f=a.sectionSummaryOverride,n=a.selectedRegulatedCategory,q=a.logShowHECFlow;a=m(h!==void 0?h:h=b("AdsLWIRegulatedCategorySection_adAccountData.graphql"),c);c=a[0];var r=a[1];a=(a=(a=c.ad_account)==null?void 0:a.should_show_hec_flow)!=null?a:!1;var s=n!==0,t=a&&b("qex")._("1080531")===!0;l(function(){t||b("AdsLWIResetRegulatedCategoryAction").dispatch({},{line:"110",module:"AdsLWIRegulatedCategorySection.react.js"})},[t]);b("useOnUpdateEffect")(function(){r({adAccountID:d})},[d]);l(function(){t===!0&&q()},[c,q,t]);return t?b("React").jsxs(b("BoostedComponentSection.react"),{headerLink:b("React").jsx(b("FBToggleSwitch.react"),{animate:!0,checked:s,onToggle:o}),noBorder:e,title:j,children:[b("React").jsxs(b("FDSText.react"),{margin:"_3-8o",children:[(a=f)!=null?a:i," ",b("React").jsxs(b("FDSLink.react"),{href:k(),target:"_blank",children:[g._("Learn More"),"."]})]}),s&&b("React").jsx("div",{className:"_3-96",children:b("React").jsx(b("AdsLWIRegulatedCategorySelector.react"),{selectedRegulatedCategory:n,onChangeSelectedValue:p})})]}):null}e.exports=a}),null);
__d("AdsLWIRegulatedCategoryQuerySection.react",["AdsLWIRegulatedCategorySection.react","React","RelayHooks","AdsLWIRegulatedCategoryQuerySectionQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useState;b("RelayHooks").graphql;var i=b("RelayHooks").useLazyLoadQuery,j=g!==void 0?g:g=b("AdsLWIRegulatedCategoryQuerySectionQuery.graphql");function a(a){var c=a.adAccountID,d=a.noBottomBorder,e=a.regulatedCategoryData,f=a.sectionSummaryOverride;a=a.logShowHECFlow;var g=h(c);g=g[0];g=i(j,{adAccountID:g});return b("React").jsx(b("AdsLWIRegulatedCategorySection.react"),{adAccountData:g,adAccountID:c,logShowHECFlow:a,noBottomBorder:d,sectionSummaryOverride:f,selectedRegulatedCategory:e.selectedRegulatedCategory})}e.exports=a}),null);
__d("adsLWIShowCompleteDraftConfirmationDialogSelector",["adsCreateSelector","adsLWIDraftIDSelector","adsLWIExistingDraftSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateSelector")([b("adsLWIDraftIDSelector"),b("adsLWIExistingDraftSelector")],function(a,b){return a==null&&(b==null?void 0:b.draftID)!=null&&(b==null?void 0:b.spec)!=null},{name:e.id+".adsLWIShowCompleteDraftConfirmationDialogSelector"});e.exports=a}),null);
__d("AdsLWICompleteDraftContainer.react",["AdsFluxHooks","AdsLWICompleteDraftConfirmationAction","React","adsLWIShowCompleteDraftConfirmationDialogSelector","qex"],(function(a,b,c,d,e,f){"use strict";c=b("AdsFluxHooks").adsFluxContainer;var g=b("AdsFluxHooks").useAdsSelector,h=b("React").useRef;function a(a){a=h(!1);var c=g(b("adsLWIShowCompleteDraftConfirmationDialogSelector"));!a.current&&c&&(b("qex")._("952132")&&b("AdsLWICompleteDraftConfirmationAction").dispatch({},{line:"38",module:"AdsLWICompleteDraftContainer.react.js"}),a.current=!0);return null}e.exports=c(a,null,{containerName:e.id})}),null);
__d("AdsLWIRegulatedCategorySectionContainer.react",["AdsFluxContainer","AdsLWIRegulatedCategoryQuerySection.react","AdsLWIRegulatedCategoryUtils","AdsLWIRelayLoggingUtils","AdsSelectorUtils","FDSSpinner.react","React","RelayFBEnvironment","RelayHooks","adsLWIAudienceStoreDataSelector","adsLWIDialogStateSelector","adsLWIFlowIDSelector","adsLWIHECDataSelector","adsLWISelectedAccountIDSelector"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsLWIRegulatedCategoryUtils").sanitizeTargetSpecforHEC,h=b("AdsLWIRelayLoggingUtils").logBoostedComponentEvent,i=b("RelayHooks").RelayEnvironmentProvider;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(){h("render_regulated_category_section",c.state.instanceID,c.state.flowID)},b)||babelHelpers.assertThisInitialized(c)}c.getStores=function(){return b("AdsSelectorUtils").getStores([b("adsLWIAudienceStoreDataSelector"),b("adsLWIDialogStateSelector"),b("adsLWIFlowIDSelector"),b("adsLWIHECDataSelector"),b("adsLWISelectedAccountIDSelector")])};c.calculateState=function(){var a=b("adsLWIHECDataSelector")(),c=b("adsLWISelectedAccountIDSelector")(),d=b("adsLWIAudienceStoreDataSelector")(),e=b("adsLWIDialogStateSelector")();e=e.instanceID;return{adAccountID:c,flowID:b("adsLWIFlowIDSelector")(),instanceID:e,regulatedCategoryData:a,targetSpecFromAudienceStore:d.getTargetSpec()}};var d=c.prototype;d.componentDidUpdate=function(a,b){__p&&__p();if(b.regulatedCategoryData&&this.state.regulatedCategoryData){a=b.regulatedCategoryData.selectedRegulatedCategory;b=this.state.regulatedCategoryData;var c=b.regulatedCategoryTargetSpec;b=b.selectedRegulatedCategory;if(b!==0&&a!==b){a=a===0?this.state.targetSpecFromAudienceStore:c;g(this.state.adAccountID,b,a)}}};d.render=function(){var a;return(a=b("React")).jsx(a.Suspense,{fallback:a.jsx(b("FDSSpinner.react"),{}),children:a.jsx(i,{environment:b("RelayFBEnvironment"),children:a.jsx(b("AdsLWIRegulatedCategoryQuerySection.react"),{adAccountID:this.state.adAccountID,logShowHECFlow:this.$1,noBottomBorder:this.props.noBottomBorder,regulatedCategoryData:this.state.regulatedCategoryData,sectionSummaryOverride:this.props.sectionSummaryOverride})})})};return c}(b("React").PureComponent);e.exports=b("AdsFluxContainer").create(a,{withProps:!0,name:e.id})}),null);
__d("AdsLWIRegulatedCategorySectionContainerWrapper.react",["requireCond","cr:1088550","BoostedComponentErrorBoundaryContainer.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.noBottomBorder;a=a.sectionSummaryOverride;return b("cr:1088550")!==null?b("React").jsx(b("BoostedComponentErrorBoundaryContainer.react"),{sectionName:"AdsLWIRegulatedCategorySectionContainer",children:b("React").jsx(b("cr:1088550"),{noBottomBorder:c,sectionSummaryOverride:a})}):null}e.exports=a}),null);
__d("AdsLWILegacyAYMTBannerContainer.react",["AdsFluxContainer","AdsSelectorUtils","BoostedComponentAYMTBannerV2Container.react","React","adsLWICurrentInstanceDataSelector","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return b("AdsSelectorUtils").getStores([b("adsLWICurrentInstanceDataSelector")])};c.calculateState=function(){var a=b("nullthrows")(b("adsLWICurrentInstanceDataSelector")()),c=a.appID,d=a.boostID;a=a.targetID;return{appID:c,boostID:d,targetID:a}};var d=c.prototype;d.render=function(){return b("React").jsx(b("BoostedComponentAYMTBannerV2Container.react"),{appID:this.state.appID,boostID:this.state.boostID,targetID:this.state.targetID})};return c}(b("React").PureComponent);e.exports=b("AdsFluxContainer").create(a,{name:e.id})}),null);
__d("AdsLWILegacyPixelSectionContainer.react",["AdsFluxContainer","AdsSelectorUtils","BoostedComponentClientAppStore","BoostedComponentPixelSectionV2Container.react","React","adsLWICurrentInstanceDataSelector","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[].concat(b("AdsSelectorUtils").getStores([b("adsLWICurrentInstanceDataSelector")]),[b("BoostedComponentClientAppStore")])};c.calculateState=function(){var a=b("nullthrows")(b("adsLWICurrentInstanceDataSelector")()),c=a.appID,d=a.boostID;a=a.targetID;var e=!!b("BoostedComponentClientAppStore").getState().id;return{appID:c,boostID:d,offFBPromotion:e,targetID:a}};var d=c.prototype;d.render=function(){return b("React").jsx(b("BoostedComponentPixelSectionV2Container.react"),{appID:this.state.appID,boostID:this.state.boostID,enablePixelByDefault:this.state.offFBPromotion,offFacebookPromotion:this.state.offFBPromotion,targetID:this.state.targetID})};return c}(b("React").PureComponent);e.exports=b("AdsFluxContainer").create(a,{name:e.id})}),null);