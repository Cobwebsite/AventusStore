<<<<<<< HEAD
if(!Object.hasOwn(window, "AvInstance")) {
	Object.defineProperty(window, "AvInstance", {
		get() {return Aventus.Instance;}
	});

	(() => {
		Map.prototype._defaultHas = Map.prototype.has;
		Map.prototype._defaultSet = Map.prototype.set;
		Map.prototype._defaultGet = Map.prototype.get;
		Map.prototype.has = function(key) {
			if(Aventus.Watcher?.is(key)) {
				return Map.prototype._defaultHas.call(this,key.getTarget())
			}
			return Map.prototype._defaultHas.call(this,key);
		}

		Map.prototype.set = function(key, value) {
			if(Aventus.Watcher?.is(key)) {
				return Map.prototype._defaultSet.call(this, key.getTarget(), value)
			}
			return Map.prototype._defaultSet.call(this, key, value);
		}
		Map.prototype.get = function(key) {
			if(Aventus.Watcher?.is(key)) {
				return Map.prototype._defaultGet.call(this, key.getTarget())
			}
			return Map.prototype._defaultGet.call(this, key);
		}
	})();
}
var Aventus;
(Aventus||(Aventus = {}));
(function (Aventus) {
const __as1 = (o, k, c) => { if (o[k] !== undefined) for (let w in o[k]) { c[w] = o[k][w] } o[k] = c; }
const moduleName = `Aventus`;
const _ = {};


let _n;
let isClass=function isClass(v) {
    return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
=======
var npmCompilation;
(npmCompilation||(npmCompilation = {}));
(function (npmCompilation) {
	var _=(()=>{var de=Object.create;var B=Object.defineProperty;var ue=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var ae=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var ce=(b,k)=>()=>(k||b((k={exports:{}}).exports,k),k.exports),se=(b,k)=>{for(var r in k)B(b,r,{get:k[r],enumerable:!0})},O=(b,k,r,A)=>{if(k&&typeof k=="object"||typeof k=="function")for(let z of re(k))!ne.call(b,z)&&z!==r&&B(b,z,{get:()=>k[z],enumerable:!(A=ue(k,z))||A.enumerable});return b};var ie=(b,k,r)=>(r=b!=null?de(ae(b)):{},O(k||!b||!b.__esModule?B(r,"default",{value:b,enumerable:!0}):r,b)),te=b=>O(B({},"__esModule",{value:!0}),b);var K=ce((W,T)=>{(function(){function b(e){"use strict";var u={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `\xAB\xAB\xAB` and `\xBB\xBB\xBB` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(u));var d={};for(var a in u)u.hasOwnProperty(a)&&(d[a]=u[a].defaultValue);return d}function k(){"use strict";var e=b(!0),u={};for(var d in e)e.hasOwnProperty(d)&&(u[d]=!0);return u}var r={},A={},z={},E=b(!0),$="vanilla",L={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:b(!0),allOn:k()};r.helper={},r.extensions={},r.setOption=function(e,u){"use strict";return E[e]=u,this},r.getOption=function(e){"use strict";return E[e]},r.getOptions=function(){"use strict";return E},r.resetOptions=function(){"use strict";E=b(!0)},r.setFlavor=function(e){"use strict";if(!L.hasOwnProperty(e))throw Error(e+" flavor was not found");r.resetOptions();var u=L[e];$=e;for(var d in u)u.hasOwnProperty(d)&&(E[d]=u[d])},r.getFlavor=function(){"use strict";return $},r.getFlavorOptions=function(e){"use strict";if(L.hasOwnProperty(e))return L[e]},r.getDefaultOptions=function(e){"use strict";return b(e)},r.subParser=function(e,u){"use strict";if(r.helper.isString(e))if(typeof u<"u")A[e]=u;else{if(A.hasOwnProperty(e))return A[e];throw Error("SubParser named "+e+" not registered!")}},r.extension=function(e,u){"use strict";if(!r.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=r.helper.stdExtName(e),r.helper.isUndefined(u)){if(!z.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return z[e]}else{typeof u=="function"&&(u=u()),r.helper.isArray(u)||(u=[u]);var d=H(u,e);if(d.valid)z[e]=u;else throw Error(d.error)}},r.getAllExtensions=function(){"use strict";return z},r.removeExtension=function(e){"use strict";delete z[e]},r.resetExtensions=function(){"use strict";z={}};function H(e,u){"use strict";var d=u?"Error in "+u+" extension->":"Error in unnamed extension",a={valid:!0,error:""};r.helper.isArray(e)||(e=[e]);for(var s=0;s<e.length;++s){var i=d+" sub-extension "+s+": ",c=e[s];if(typeof c!="object")return a.valid=!1,a.error=i+"must be an object, but "+typeof c+" given",a;if(!r.helper.isString(c.type))return a.valid=!1,a.error=i+'property "type" must be a string, but '+typeof c.type+" given",a;var t=c.type=c.type.toLowerCase();if(t==="language"&&(t=c.type="lang"),t==="html"&&(t=c.type="output"),t!=="lang"&&t!=="output"&&t!=="listener")return a.valid=!1,a.error=i+"type "+t+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if(t==="listener"){if(r.helper.isUndefined(c.listeners))return a.valid=!1,a.error=i+'. Extensions of type "listener" must have a property called "listeners"',a}else if(r.helper.isUndefined(c.filter)&&r.helper.isUndefined(c.regex))return a.valid=!1,a.error=i+t+' extensions must define either a "regex" property or a "filter" method',a;if(c.listeners){if(typeof c.listeners!="object")return a.valid=!1,a.error=i+'"listeners" property must be an object but '+typeof c.listeners+" given",a;for(var p in c.listeners)if(c.listeners.hasOwnProperty(p)&&typeof c.listeners[p]!="function")return a.valid=!1,a.error=i+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+p+" must be a function but "+typeof c.listeners[p]+" given",a}if(c.filter){if(typeof c.filter!="function")return a.valid=!1,a.error=i+'"filter" must be a function, but '+typeof c.filter+" given",a}else if(c.regex){if(r.helper.isString(c.regex)&&(c.regex=new RegExp(c.regex,"g")),!(c.regex instanceof RegExp))return a.valid=!1,a.error=i+'"regex" property must either be a string or a RegExp object, but '+typeof c.regex+" given",a;if(r.helper.isUndefined(c.replace))return a.valid=!1,a.error=i+'"regex" extensions must implement a replace string or function',a}}return a}r.validateExtension=function(e){"use strict";var u=H(e,null);return u.valid?!0:(console.warn(u.error),!1)},r.hasOwnProperty("helper")||(r.helper={}),r.helper.isString=function(e){"use strict";return typeof e=="string"||e instanceof String},r.helper.isFunction=function(e){"use strict";var u={};return e&&u.toString.call(e)==="[object Function]"},r.helper.isArray=function(e){"use strict";return Array.isArray(e)},r.helper.isUndefined=function(e){"use strict";return typeof e>"u"},r.helper.forEach=function(e,u){"use strict";if(r.helper.isUndefined(e))throw new Error("obj param is required");if(r.helper.isUndefined(u))throw new Error("callback param is required");if(!r.helper.isFunction(u))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(u);else if(r.helper.isArray(e))for(var d=0;d<e.length;d++)u(e[d],d,e);else if(typeof e=="object")for(var a in e)e.hasOwnProperty(a)&&u(e[a],a,e);else throw new Error("obj does not seem to be an array or an iterable object")},r.helper.stdExtName=function(e){"use strict";return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function D(e,u){"use strict";var d=u.charCodeAt(0);return"\xA8E"+d+"E"}r.helper.escapeCharactersCallback=D,r.helper.escapeCharacters=function(e,u,d){"use strict";var a="(["+u.replace(/([\[\]\\])/g,"\\$1")+"])";d&&(a="\\\\"+a);var s=new RegExp(a,"g");return e=e.replace(s,D),e},r.helper.unescapeHTMLEntities=function(e){"use strict";return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var U=function(e,u,d,a){"use strict";var s=a||"",i=s.indexOf("g")>-1,c=new RegExp(u+"|"+d,"g"+s.replace(/g/g,"")),t=new RegExp(u,s.replace(/g/g,"")),p=[],l,o,h,n,f;do for(l=0;h=c.exec(e);)if(t.test(h[0]))l++||(o=c.lastIndex,n=o-h[0].length);else if(l&&!--l){f=h.index+h[0].length;var _={left:{start:n,end:o},match:{start:o,end:h.index},right:{start:h.index,end:f},wholeMatch:{start:n,end:f}};if(p.push(_),!i)return p}while(l&&(c.lastIndex=o));return p};r.helper.matchRecursiveRegExp=function(e,u,d,a){"use strict";for(var s=U(e,u,d,a),i=[],c=0;c<s.length;++c)i.push([e.slice(s[c].wholeMatch.start,s[c].wholeMatch.end),e.slice(s[c].match.start,s[c].match.end),e.slice(s[c].left.start,s[c].left.end),e.slice(s[c].right.start,s[c].right.end)]);return i},r.helper.replaceRecursiveRegExp=function(e,u,d,a,s){"use strict";if(!r.helper.isFunction(u)){var i=u;u=function(){return i}}var c=U(e,d,a,s),t=e,p=c.length;if(p>0){var l=[];c[0].wholeMatch.start!==0&&l.push(e.slice(0,c[0].wholeMatch.start));for(var o=0;o<p;++o)l.push(u(e.slice(c[o].wholeMatch.start,c[o].wholeMatch.end),e.slice(c[o].match.start,c[o].match.end),e.slice(c[o].left.start,c[o].left.end),e.slice(c[o].right.start,c[o].right.end))),o<p-1&&l.push(e.slice(c[o].wholeMatch.end,c[o+1].wholeMatch.start));c[p-1].wholeMatch.end<e.length&&l.push(e.slice(c[p-1].wholeMatch.end)),t=l.join("")}return t},r.helper.regexIndexOf=function(e,u,d){"use strict";if(!r.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(u instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var a=e.substring(d||0).search(u);return a>=0?a+(d||0):a},r.helper.splitAtIndex=function(e,u){"use strict";if(!r.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,u),e.substring(u)]},r.helper.encodeEmailAddress=function(e){"use strict";var u=[function(d){return"&#"+d.charCodeAt(0)+";"},function(d){return"&#x"+d.charCodeAt(0).toString(16)+";"},function(d){return d}];return e=e.replace(/./g,function(d){if(d==="@")d=u[Math.floor(Math.random()*2)](d);else{var a=Math.random();d=a>.9?u[2](d):a>.45?u[1](d):u[0](d)}return d}),e},r.helper.padEnd=function(u,d,a){"use strict";return d=d>>0,a=String(a||" "),u.length>d?String(u):(d=d-u.length,d>a.length&&(a+=a.repeat(d/a.length)),String(u)+a.slice(0,d))},typeof console>"u"&&(console={warn:function(e){"use strict";alert(e)},log:function(e){"use strict";alert(e)},error:function(e){"use strict";throw e}}),r.helper.regexes={asteriskDashAndColon:/([*_:~])/g},r.helper.emojis={"+1":"\u{1F44D}","-1":"\u{1F44E}",100:"\u{1F4AF}",1234:"\u{1F522}","1st_place_medal":"\u{1F947}","2nd_place_medal":"\u{1F948}","3rd_place_medal":"\u{1F949}","8ball":"\u{1F3B1}",a:"\u{1F170}\uFE0F",ab:"\u{1F18E}",abc:"\u{1F524}",abcd:"\u{1F521}",accept:"\u{1F251}",aerial_tramway:"\u{1F6A1}",airplane:"\u2708\uFE0F",alarm_clock:"\u23F0",alembic:"\u2697\uFE0F",alien:"\u{1F47D}",ambulance:"\u{1F691}",amphora:"\u{1F3FA}",anchor:"\u2693\uFE0F",angel:"\u{1F47C}",anger:"\u{1F4A2}",angry:"\u{1F620}",anguished:"\u{1F627}",ant:"\u{1F41C}",apple:"\u{1F34E}",aquarius:"\u2652\uFE0F",aries:"\u2648\uFE0F",arrow_backward:"\u25C0\uFE0F",arrow_double_down:"\u23EC",arrow_double_up:"\u23EB",arrow_down:"\u2B07\uFE0F",arrow_down_small:"\u{1F53D}",arrow_forward:"\u25B6\uFE0F",arrow_heading_down:"\u2935\uFE0F",arrow_heading_up:"\u2934\uFE0F",arrow_left:"\u2B05\uFE0F",arrow_lower_left:"\u2199\uFE0F",arrow_lower_right:"\u2198\uFE0F",arrow_right:"\u27A1\uFE0F",arrow_right_hook:"\u21AA\uFE0F",arrow_up:"\u2B06\uFE0F",arrow_up_down:"\u2195\uFE0F",arrow_up_small:"\u{1F53C}",arrow_upper_left:"\u2196\uFE0F",arrow_upper_right:"\u2197\uFE0F",arrows_clockwise:"\u{1F503}",arrows_counterclockwise:"\u{1F504}",art:"\u{1F3A8}",articulated_lorry:"\u{1F69B}",artificial_satellite:"\u{1F6F0}",astonished:"\u{1F632}",athletic_shoe:"\u{1F45F}",atm:"\u{1F3E7}",atom_symbol:"\u269B\uFE0F",avocado:"\u{1F951}",b:"\u{1F171}\uFE0F",baby:"\u{1F476}",baby_bottle:"\u{1F37C}",baby_chick:"\u{1F424}",baby_symbol:"\u{1F6BC}",back:"\u{1F519}",bacon:"\u{1F953}",badminton:"\u{1F3F8}",baggage_claim:"\u{1F6C4}",baguette_bread:"\u{1F956}",balance_scale:"\u2696\uFE0F",balloon:"\u{1F388}",ballot_box:"\u{1F5F3}",ballot_box_with_check:"\u2611\uFE0F",bamboo:"\u{1F38D}",banana:"\u{1F34C}",bangbang:"\u203C\uFE0F",bank:"\u{1F3E6}",bar_chart:"\u{1F4CA}",barber:"\u{1F488}",baseball:"\u26BE\uFE0F",basketball:"\u{1F3C0}",basketball_man:"\u26F9\uFE0F",basketball_woman:"\u26F9\uFE0F&zwj;\u2640\uFE0F",bat:"\u{1F987}",bath:"\u{1F6C0}",bathtub:"\u{1F6C1}",battery:"\u{1F50B}",beach_umbrella:"\u{1F3D6}",bear:"\u{1F43B}",bed:"\u{1F6CF}",bee:"\u{1F41D}",beer:"\u{1F37A}",beers:"\u{1F37B}",beetle:"\u{1F41E}",beginner:"\u{1F530}",bell:"\u{1F514}",bellhop_bell:"\u{1F6CE}",bento:"\u{1F371}",biking_man:"\u{1F6B4}",bike:"\u{1F6B2}",biking_woman:"\u{1F6B4}&zwj;\u2640\uFE0F",bikini:"\u{1F459}",biohazard:"\u2623\uFE0F",bird:"\u{1F426}",birthday:"\u{1F382}",black_circle:"\u26AB\uFE0F",black_flag:"\u{1F3F4}",black_heart:"\u{1F5A4}",black_joker:"\u{1F0CF}",black_large_square:"\u2B1B\uFE0F",black_medium_small_square:"\u25FE\uFE0F",black_medium_square:"\u25FC\uFE0F",black_nib:"\u2712\uFE0F",black_small_square:"\u25AA\uFE0F",black_square_button:"\u{1F532}",blonde_man:"\u{1F471}",blonde_woman:"\u{1F471}&zwj;\u2640\uFE0F",blossom:"\u{1F33C}",blowfish:"\u{1F421}",blue_book:"\u{1F4D8}",blue_car:"\u{1F699}",blue_heart:"\u{1F499}",blush:"\u{1F60A}",boar:"\u{1F417}",boat:"\u26F5\uFE0F",bomb:"\u{1F4A3}",book:"\u{1F4D6}",bookmark:"\u{1F516}",bookmark_tabs:"\u{1F4D1}",books:"\u{1F4DA}",boom:"\u{1F4A5}",boot:"\u{1F462}",bouquet:"\u{1F490}",bowing_man:"\u{1F647}",bow_and_arrow:"\u{1F3F9}",bowing_woman:"\u{1F647}&zwj;\u2640\uFE0F",bowling:"\u{1F3B3}",boxing_glove:"\u{1F94A}",boy:"\u{1F466}",bread:"\u{1F35E}",bride_with_veil:"\u{1F470}",bridge_at_night:"\u{1F309}",briefcase:"\u{1F4BC}",broken_heart:"\u{1F494}",bug:"\u{1F41B}",building_construction:"\u{1F3D7}",bulb:"\u{1F4A1}",bullettrain_front:"\u{1F685}",bullettrain_side:"\u{1F684}",burrito:"\u{1F32F}",bus:"\u{1F68C}",business_suit_levitating:"\u{1F574}",busstop:"\u{1F68F}",bust_in_silhouette:"\u{1F464}",busts_in_silhouette:"\u{1F465}",butterfly:"\u{1F98B}",cactus:"\u{1F335}",cake:"\u{1F370}",calendar:"\u{1F4C6}",call_me_hand:"\u{1F919}",calling:"\u{1F4F2}",camel:"\u{1F42B}",camera:"\u{1F4F7}",camera_flash:"\u{1F4F8}",camping:"\u{1F3D5}",cancer:"\u264B\uFE0F",candle:"\u{1F56F}",candy:"\u{1F36C}",canoe:"\u{1F6F6}",capital_abcd:"\u{1F520}",capricorn:"\u2651\uFE0F",car:"\u{1F697}",card_file_box:"\u{1F5C3}",card_index:"\u{1F4C7}",card_index_dividers:"\u{1F5C2}",carousel_horse:"\u{1F3A0}",carrot:"\u{1F955}",cat:"\u{1F431}",cat2:"\u{1F408}",cd:"\u{1F4BF}",chains:"\u26D3",champagne:"\u{1F37E}",chart:"\u{1F4B9}",chart_with_downwards_trend:"\u{1F4C9}",chart_with_upwards_trend:"\u{1F4C8}",checkered_flag:"\u{1F3C1}",cheese:"\u{1F9C0}",cherries:"\u{1F352}",cherry_blossom:"\u{1F338}",chestnut:"\u{1F330}",chicken:"\u{1F414}",children_crossing:"\u{1F6B8}",chipmunk:"\u{1F43F}",chocolate_bar:"\u{1F36B}",christmas_tree:"\u{1F384}",church:"\u26EA\uFE0F",cinema:"\u{1F3A6}",circus_tent:"\u{1F3AA}",city_sunrise:"\u{1F307}",city_sunset:"\u{1F306}",cityscape:"\u{1F3D9}",cl:"\u{1F191}",clamp:"\u{1F5DC}",clap:"\u{1F44F}",clapper:"\u{1F3AC}",classical_building:"\u{1F3DB}",clinking_glasses:"\u{1F942}",clipboard:"\u{1F4CB}",clock1:"\u{1F550}",clock10:"\u{1F559}",clock1030:"\u{1F565}",clock11:"\u{1F55A}",clock1130:"\u{1F566}",clock12:"\u{1F55B}",clock1230:"\u{1F567}",clock130:"\u{1F55C}",clock2:"\u{1F551}",clock230:"\u{1F55D}",clock3:"\u{1F552}",clock330:"\u{1F55E}",clock4:"\u{1F553}",clock430:"\u{1F55F}",clock5:"\u{1F554}",clock530:"\u{1F560}",clock6:"\u{1F555}",clock630:"\u{1F561}",clock7:"\u{1F556}",clock730:"\u{1F562}",clock8:"\u{1F557}",clock830:"\u{1F563}",clock9:"\u{1F558}",clock930:"\u{1F564}",closed_book:"\u{1F4D5}",closed_lock_with_key:"\u{1F510}",closed_umbrella:"\u{1F302}",cloud:"\u2601\uFE0F",cloud_with_lightning:"\u{1F329}",cloud_with_lightning_and_rain:"\u26C8",cloud_with_rain:"\u{1F327}",cloud_with_snow:"\u{1F328}",clown_face:"\u{1F921}",clubs:"\u2663\uFE0F",cocktail:"\u{1F378}",coffee:"\u2615\uFE0F",coffin:"\u26B0\uFE0F",cold_sweat:"\u{1F630}",comet:"\u2604\uFE0F",computer:"\u{1F4BB}",computer_mouse:"\u{1F5B1}",confetti_ball:"\u{1F38A}",confounded:"\u{1F616}",confused:"\u{1F615}",congratulations:"\u3297\uFE0F",construction:"\u{1F6A7}",construction_worker_man:"\u{1F477}",construction_worker_woman:"\u{1F477}&zwj;\u2640\uFE0F",control_knobs:"\u{1F39B}",convenience_store:"\u{1F3EA}",cookie:"\u{1F36A}",cool:"\u{1F192}",policeman:"\u{1F46E}",copyright:"\xA9\uFE0F",corn:"\u{1F33D}",couch_and_lamp:"\u{1F6CB}",couple:"\u{1F46B}",couple_with_heart_woman_man:"\u{1F491}",couple_with_heart_man_man:"\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F468}",couple_with_heart_woman_woman:"\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F469}",couplekiss_man_man:"\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F468}",couplekiss_man_woman:"\u{1F48F}",couplekiss_woman_woman:"\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F469}",cow:"\u{1F42E}",cow2:"\u{1F404}",cowboy_hat_face:"\u{1F920}",crab:"\u{1F980}",crayon:"\u{1F58D}",credit_card:"\u{1F4B3}",crescent_moon:"\u{1F319}",cricket:"\u{1F3CF}",crocodile:"\u{1F40A}",croissant:"\u{1F950}",crossed_fingers:"\u{1F91E}",crossed_flags:"\u{1F38C}",crossed_swords:"\u2694\uFE0F",crown:"\u{1F451}",cry:"\u{1F622}",crying_cat_face:"\u{1F63F}",crystal_ball:"\u{1F52E}",cucumber:"\u{1F952}",cupid:"\u{1F498}",curly_loop:"\u27B0",currency_exchange:"\u{1F4B1}",curry:"\u{1F35B}",custard:"\u{1F36E}",customs:"\u{1F6C3}",cyclone:"\u{1F300}",dagger:"\u{1F5E1}",dancer:"\u{1F483}",dancing_women:"\u{1F46F}",dancing_men:"\u{1F46F}&zwj;\u2642\uFE0F",dango:"\u{1F361}",dark_sunglasses:"\u{1F576}",dart:"\u{1F3AF}",dash:"\u{1F4A8}",date:"\u{1F4C5}",deciduous_tree:"\u{1F333}",deer:"\u{1F98C}",department_store:"\u{1F3EC}",derelict_house:"\u{1F3DA}",desert:"\u{1F3DC}",desert_island:"\u{1F3DD}",desktop_computer:"\u{1F5A5}",male_detective:"\u{1F575}\uFE0F",diamond_shape_with_a_dot_inside:"\u{1F4A0}",diamonds:"\u2666\uFE0F",disappointed:"\u{1F61E}",disappointed_relieved:"\u{1F625}",dizzy:"\u{1F4AB}",dizzy_face:"\u{1F635}",do_not_litter:"\u{1F6AF}",dog:"\u{1F436}",dog2:"\u{1F415}",dollar:"\u{1F4B5}",dolls:"\u{1F38E}",dolphin:"\u{1F42C}",door:"\u{1F6AA}",doughnut:"\u{1F369}",dove:"\u{1F54A}",dragon:"\u{1F409}",dragon_face:"\u{1F432}",dress:"\u{1F457}",dromedary_camel:"\u{1F42A}",drooling_face:"\u{1F924}",droplet:"\u{1F4A7}",drum:"\u{1F941}",duck:"\u{1F986}",dvd:"\u{1F4C0}","e-mail":"\u{1F4E7}",eagle:"\u{1F985}",ear:"\u{1F442}",ear_of_rice:"\u{1F33E}",earth_africa:"\u{1F30D}",earth_americas:"\u{1F30E}",earth_asia:"\u{1F30F}",egg:"\u{1F95A}",eggplant:"\u{1F346}",eight_pointed_black_star:"\u2734\uFE0F",eight_spoked_asterisk:"\u2733\uFE0F",electric_plug:"\u{1F50C}",elephant:"\u{1F418}",email:"\u2709\uFE0F",end:"\u{1F51A}",envelope_with_arrow:"\u{1F4E9}",euro:"\u{1F4B6}",european_castle:"\u{1F3F0}",european_post_office:"\u{1F3E4}",evergreen_tree:"\u{1F332}",exclamation:"\u2757\uFE0F",expressionless:"\u{1F611}",eye:"\u{1F441}",eye_speech_bubble:"\u{1F441}&zwj;\u{1F5E8}",eyeglasses:"\u{1F453}",eyes:"\u{1F440}",face_with_head_bandage:"\u{1F915}",face_with_thermometer:"\u{1F912}",fist_oncoming:"\u{1F44A}",factory:"\u{1F3ED}",fallen_leaf:"\u{1F342}",family_man_woman_boy:"\u{1F46A}",family_man_boy:"\u{1F468}&zwj;\u{1F466}",family_man_boy_boy:"\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",family_man_girl:"\u{1F468}&zwj;\u{1F467}",family_man_girl_boy:"\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",family_man_girl_girl:"\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",family_man_man_boy:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}",family_man_man_boy_boy:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",family_man_man_girl:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}",family_man_man_girl_boy:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",family_man_man_girl_girl:"\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",family_man_woman_boy_boy:"\u{1F468}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",family_man_woman_girl:"\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}",family_man_woman_girl_boy:"\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",family_man_woman_girl_girl:"\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",family_woman_boy:"\u{1F469}&zwj;\u{1F466}",family_woman_boy_boy:"\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",family_woman_girl:"\u{1F469}&zwj;\u{1F467}",family_woman_girl_boy:"\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",family_woman_girl_girl:"\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",family_woman_woman_boy:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}",family_woman_woman_boy_boy:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",family_woman_woman_girl:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}",family_woman_woman_girl_boy:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",family_woman_woman_girl_girl:"\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",fast_forward:"\u23E9",fax:"\u{1F4E0}",fearful:"\u{1F628}",feet:"\u{1F43E}",female_detective:"\u{1F575}\uFE0F&zwj;\u2640\uFE0F",ferris_wheel:"\u{1F3A1}",ferry:"\u26F4",field_hockey:"\u{1F3D1}",file_cabinet:"\u{1F5C4}",file_folder:"\u{1F4C1}",film_projector:"\u{1F4FD}",film_strip:"\u{1F39E}",fire:"\u{1F525}",fire_engine:"\u{1F692}",fireworks:"\u{1F386}",first_quarter_moon:"\u{1F313}",first_quarter_moon_with_face:"\u{1F31B}",fish:"\u{1F41F}",fish_cake:"\u{1F365}",fishing_pole_and_fish:"\u{1F3A3}",fist_raised:"\u270A",fist_left:"\u{1F91B}",fist_right:"\u{1F91C}",flags:"\u{1F38F}",flashlight:"\u{1F526}",fleur_de_lis:"\u269C\uFE0F",flight_arrival:"\u{1F6EC}",flight_departure:"\u{1F6EB}",floppy_disk:"\u{1F4BE}",flower_playing_cards:"\u{1F3B4}",flushed:"\u{1F633}",fog:"\u{1F32B}",foggy:"\u{1F301}",football:"\u{1F3C8}",footprints:"\u{1F463}",fork_and_knife:"\u{1F374}",fountain:"\u26F2\uFE0F",fountain_pen:"\u{1F58B}",four_leaf_clover:"\u{1F340}",fox_face:"\u{1F98A}",framed_picture:"\u{1F5BC}",free:"\u{1F193}",fried_egg:"\u{1F373}",fried_shrimp:"\u{1F364}",fries:"\u{1F35F}",frog:"\u{1F438}",frowning:"\u{1F626}",frowning_face:"\u2639\uFE0F",frowning_man:"\u{1F64D}&zwj;\u2642\uFE0F",frowning_woman:"\u{1F64D}",middle_finger:"\u{1F595}",fuelpump:"\u26FD\uFE0F",full_moon:"\u{1F315}",full_moon_with_face:"\u{1F31D}",funeral_urn:"\u26B1\uFE0F",game_die:"\u{1F3B2}",gear:"\u2699\uFE0F",gem:"\u{1F48E}",gemini:"\u264A\uFE0F",ghost:"\u{1F47B}",gift:"\u{1F381}",gift_heart:"\u{1F49D}",girl:"\u{1F467}",globe_with_meridians:"\u{1F310}",goal_net:"\u{1F945}",goat:"\u{1F410}",golf:"\u26F3\uFE0F",golfing_man:"\u{1F3CC}\uFE0F",golfing_woman:"\u{1F3CC}\uFE0F&zwj;\u2640\uFE0F",gorilla:"\u{1F98D}",grapes:"\u{1F347}",green_apple:"\u{1F34F}",green_book:"\u{1F4D7}",green_heart:"\u{1F49A}",green_salad:"\u{1F957}",grey_exclamation:"\u2755",grey_question:"\u2754",grimacing:"\u{1F62C}",grin:"\u{1F601}",grinning:"\u{1F600}",guardsman:"\u{1F482}",guardswoman:"\u{1F482}&zwj;\u2640\uFE0F",guitar:"\u{1F3B8}",gun:"\u{1F52B}",haircut_woman:"\u{1F487}",haircut_man:"\u{1F487}&zwj;\u2642\uFE0F",hamburger:"\u{1F354}",hammer:"\u{1F528}",hammer_and_pick:"\u2692",hammer_and_wrench:"\u{1F6E0}",hamster:"\u{1F439}",hand:"\u270B",handbag:"\u{1F45C}",handshake:"\u{1F91D}",hankey:"\u{1F4A9}",hatched_chick:"\u{1F425}",hatching_chick:"\u{1F423}",headphones:"\u{1F3A7}",hear_no_evil:"\u{1F649}",heart:"\u2764\uFE0F",heart_decoration:"\u{1F49F}",heart_eyes:"\u{1F60D}",heart_eyes_cat:"\u{1F63B}",heartbeat:"\u{1F493}",heartpulse:"\u{1F497}",hearts:"\u2665\uFE0F",heavy_check_mark:"\u2714\uFE0F",heavy_division_sign:"\u2797",heavy_dollar_sign:"\u{1F4B2}",heavy_heart_exclamation:"\u2763\uFE0F",heavy_minus_sign:"\u2796",heavy_multiplication_x:"\u2716\uFE0F",heavy_plus_sign:"\u2795",helicopter:"\u{1F681}",herb:"\u{1F33F}",hibiscus:"\u{1F33A}",high_brightness:"\u{1F506}",high_heel:"\u{1F460}",hocho:"\u{1F52A}",hole:"\u{1F573}",honey_pot:"\u{1F36F}",horse:"\u{1F434}",horse_racing:"\u{1F3C7}",hospital:"\u{1F3E5}",hot_pepper:"\u{1F336}",hotdog:"\u{1F32D}",hotel:"\u{1F3E8}",hotsprings:"\u2668\uFE0F",hourglass:"\u231B\uFE0F",hourglass_flowing_sand:"\u23F3",house:"\u{1F3E0}",house_with_garden:"\u{1F3E1}",houses:"\u{1F3D8}",hugs:"\u{1F917}",hushed:"\u{1F62F}",ice_cream:"\u{1F368}",ice_hockey:"\u{1F3D2}",ice_skate:"\u26F8",icecream:"\u{1F366}",id:"\u{1F194}",ideograph_advantage:"\u{1F250}",imp:"\u{1F47F}",inbox_tray:"\u{1F4E5}",incoming_envelope:"\u{1F4E8}",tipping_hand_woman:"\u{1F481}",information_source:"\u2139\uFE0F",innocent:"\u{1F607}",interrobang:"\u2049\uFE0F",iphone:"\u{1F4F1}",izakaya_lantern:"\u{1F3EE}",jack_o_lantern:"\u{1F383}",japan:"\u{1F5FE}",japanese_castle:"\u{1F3EF}",japanese_goblin:"\u{1F47A}",japanese_ogre:"\u{1F479}",jeans:"\u{1F456}",joy:"\u{1F602}",joy_cat:"\u{1F639}",joystick:"\u{1F579}",kaaba:"\u{1F54B}",key:"\u{1F511}",keyboard:"\u2328\uFE0F",keycap_ten:"\u{1F51F}",kick_scooter:"\u{1F6F4}",kimono:"\u{1F458}",kiss:"\u{1F48B}",kissing:"\u{1F617}",kissing_cat:"\u{1F63D}",kissing_closed_eyes:"\u{1F61A}",kissing_heart:"\u{1F618}",kissing_smiling_eyes:"\u{1F619}",kiwi_fruit:"\u{1F95D}",koala:"\u{1F428}",koko:"\u{1F201}",label:"\u{1F3F7}",large_blue_circle:"\u{1F535}",large_blue_diamond:"\u{1F537}",large_orange_diamond:"\u{1F536}",last_quarter_moon:"\u{1F317}",last_quarter_moon_with_face:"\u{1F31C}",latin_cross:"\u271D\uFE0F",laughing:"\u{1F606}",leaves:"\u{1F343}",ledger:"\u{1F4D2}",left_luggage:"\u{1F6C5}",left_right_arrow:"\u2194\uFE0F",leftwards_arrow_with_hook:"\u21A9\uFE0F",lemon:"\u{1F34B}",leo:"\u264C\uFE0F",leopard:"\u{1F406}",level_slider:"\u{1F39A}",libra:"\u264E\uFE0F",light_rail:"\u{1F688}",link:"\u{1F517}",lion:"\u{1F981}",lips:"\u{1F444}",lipstick:"\u{1F484}",lizard:"\u{1F98E}",lock:"\u{1F512}",lock_with_ink_pen:"\u{1F50F}",lollipop:"\u{1F36D}",loop:"\u27BF",loud_sound:"\u{1F50A}",loudspeaker:"\u{1F4E2}",love_hotel:"\u{1F3E9}",love_letter:"\u{1F48C}",low_brightness:"\u{1F505}",lying_face:"\u{1F925}",m:"\u24C2\uFE0F",mag:"\u{1F50D}",mag_right:"\u{1F50E}",mahjong:"\u{1F004}\uFE0F",mailbox:"\u{1F4EB}",mailbox_closed:"\u{1F4EA}",mailbox_with_mail:"\u{1F4EC}",mailbox_with_no_mail:"\u{1F4ED}",man:"\u{1F468}",man_artist:"\u{1F468}&zwj;\u{1F3A8}",man_astronaut:"\u{1F468}&zwj;\u{1F680}",man_cartwheeling:"\u{1F938}&zwj;\u2642\uFE0F",man_cook:"\u{1F468}&zwj;\u{1F373}",man_dancing:"\u{1F57A}",man_facepalming:"\u{1F926}&zwj;\u2642\uFE0F",man_factory_worker:"\u{1F468}&zwj;\u{1F3ED}",man_farmer:"\u{1F468}&zwj;\u{1F33E}",man_firefighter:"\u{1F468}&zwj;\u{1F692}",man_health_worker:"\u{1F468}&zwj;\u2695\uFE0F",man_in_tuxedo:"\u{1F935}",man_judge:"\u{1F468}&zwj;\u2696\uFE0F",man_juggling:"\u{1F939}&zwj;\u2642\uFE0F",man_mechanic:"\u{1F468}&zwj;\u{1F527}",man_office_worker:"\u{1F468}&zwj;\u{1F4BC}",man_pilot:"\u{1F468}&zwj;\u2708\uFE0F",man_playing_handball:"\u{1F93E}&zwj;\u2642\uFE0F",man_playing_water_polo:"\u{1F93D}&zwj;\u2642\uFE0F",man_scientist:"\u{1F468}&zwj;\u{1F52C}",man_shrugging:"\u{1F937}&zwj;\u2642\uFE0F",man_singer:"\u{1F468}&zwj;\u{1F3A4}",man_student:"\u{1F468}&zwj;\u{1F393}",man_teacher:"\u{1F468}&zwj;\u{1F3EB}",man_technologist:"\u{1F468}&zwj;\u{1F4BB}",man_with_gua_pi_mao:"\u{1F472}",man_with_turban:"\u{1F473}",tangerine:"\u{1F34A}",mans_shoe:"\u{1F45E}",mantelpiece_clock:"\u{1F570}",maple_leaf:"\u{1F341}",martial_arts_uniform:"\u{1F94B}",mask:"\u{1F637}",massage_woman:"\u{1F486}",massage_man:"\u{1F486}&zwj;\u2642\uFE0F",meat_on_bone:"\u{1F356}",medal_military:"\u{1F396}",medal_sports:"\u{1F3C5}",mega:"\u{1F4E3}",melon:"\u{1F348}",memo:"\u{1F4DD}",men_wrestling:"\u{1F93C}&zwj;\u2642\uFE0F",menorah:"\u{1F54E}",mens:"\u{1F6B9}",metal:"\u{1F918}",metro:"\u{1F687}",microphone:"\u{1F3A4}",microscope:"\u{1F52C}",milk_glass:"\u{1F95B}",milky_way:"\u{1F30C}",minibus:"\u{1F690}",minidisc:"\u{1F4BD}",mobile_phone_off:"\u{1F4F4}",money_mouth_face:"\u{1F911}",money_with_wings:"\u{1F4B8}",moneybag:"\u{1F4B0}",monkey:"\u{1F412}",monkey_face:"\u{1F435}",monorail:"\u{1F69D}",moon:"\u{1F314}",mortar_board:"\u{1F393}",mosque:"\u{1F54C}",motor_boat:"\u{1F6E5}",motor_scooter:"\u{1F6F5}",motorcycle:"\u{1F3CD}",motorway:"\u{1F6E3}",mount_fuji:"\u{1F5FB}",mountain:"\u26F0",mountain_biking_man:"\u{1F6B5}",mountain_biking_woman:"\u{1F6B5}&zwj;\u2640\uFE0F",mountain_cableway:"\u{1F6A0}",mountain_railway:"\u{1F69E}",mountain_snow:"\u{1F3D4}",mouse:"\u{1F42D}",mouse2:"\u{1F401}",movie_camera:"\u{1F3A5}",moyai:"\u{1F5FF}",mrs_claus:"\u{1F936}",muscle:"\u{1F4AA}",mushroom:"\u{1F344}",musical_keyboard:"\u{1F3B9}",musical_note:"\u{1F3B5}",musical_score:"\u{1F3BC}",mute:"\u{1F507}",nail_care:"\u{1F485}",name_badge:"\u{1F4DB}",national_park:"\u{1F3DE}",nauseated_face:"\u{1F922}",necktie:"\u{1F454}",negative_squared_cross_mark:"\u274E",nerd_face:"\u{1F913}",neutral_face:"\u{1F610}",new:"\u{1F195}",new_moon:"\u{1F311}",new_moon_with_face:"\u{1F31A}",newspaper:"\u{1F4F0}",newspaper_roll:"\u{1F5DE}",next_track_button:"\u23ED",ng:"\u{1F196}",no_good_man:"\u{1F645}&zwj;\u2642\uFE0F",no_good_woman:"\u{1F645}",night_with_stars:"\u{1F303}",no_bell:"\u{1F515}",no_bicycles:"\u{1F6B3}",no_entry:"\u26D4\uFE0F",no_entry_sign:"\u{1F6AB}",no_mobile_phones:"\u{1F4F5}",no_mouth:"\u{1F636}",no_pedestrians:"\u{1F6B7}",no_smoking:"\u{1F6AD}","non-potable_water":"\u{1F6B1}",nose:"\u{1F443}",notebook:"\u{1F4D3}",notebook_with_decorative_cover:"\u{1F4D4}",notes:"\u{1F3B6}",nut_and_bolt:"\u{1F529}",o:"\u2B55\uFE0F",o2:"\u{1F17E}\uFE0F",ocean:"\u{1F30A}",octopus:"\u{1F419}",oden:"\u{1F362}",office:"\u{1F3E2}",oil_drum:"\u{1F6E2}",ok:"\u{1F197}",ok_hand:"\u{1F44C}",ok_man:"\u{1F646}&zwj;\u2642\uFE0F",ok_woman:"\u{1F646}",old_key:"\u{1F5DD}",older_man:"\u{1F474}",older_woman:"\u{1F475}",om:"\u{1F549}",on:"\u{1F51B}",oncoming_automobile:"\u{1F698}",oncoming_bus:"\u{1F68D}",oncoming_police_car:"\u{1F694}",oncoming_taxi:"\u{1F696}",open_file_folder:"\u{1F4C2}",open_hands:"\u{1F450}",open_mouth:"\u{1F62E}",open_umbrella:"\u2602\uFE0F",ophiuchus:"\u26CE",orange_book:"\u{1F4D9}",orthodox_cross:"\u2626\uFE0F",outbox_tray:"\u{1F4E4}",owl:"\u{1F989}",ox:"\u{1F402}",package:"\u{1F4E6}",page_facing_up:"\u{1F4C4}",page_with_curl:"\u{1F4C3}",pager:"\u{1F4DF}",paintbrush:"\u{1F58C}",palm_tree:"\u{1F334}",pancakes:"\u{1F95E}",panda_face:"\u{1F43C}",paperclip:"\u{1F4CE}",paperclips:"\u{1F587}",parasol_on_ground:"\u26F1",parking:"\u{1F17F}\uFE0F",part_alternation_mark:"\u303D\uFE0F",partly_sunny:"\u26C5\uFE0F",passenger_ship:"\u{1F6F3}",passport_control:"\u{1F6C2}",pause_button:"\u23F8",peace_symbol:"\u262E\uFE0F",peach:"\u{1F351}",peanuts:"\u{1F95C}",pear:"\u{1F350}",pen:"\u{1F58A}",pencil2:"\u270F\uFE0F",penguin:"\u{1F427}",pensive:"\u{1F614}",performing_arts:"\u{1F3AD}",persevere:"\u{1F623}",person_fencing:"\u{1F93A}",pouting_woman:"\u{1F64E}",phone:"\u260E\uFE0F",pick:"\u26CF",pig:"\u{1F437}",pig2:"\u{1F416}",pig_nose:"\u{1F43D}",pill:"\u{1F48A}",pineapple:"\u{1F34D}",ping_pong:"\u{1F3D3}",pisces:"\u2653\uFE0F",pizza:"\u{1F355}",place_of_worship:"\u{1F6D0}",plate_with_cutlery:"\u{1F37D}",play_or_pause_button:"\u23EF",point_down:"\u{1F447}",point_left:"\u{1F448}",point_right:"\u{1F449}",point_up:"\u261D\uFE0F",point_up_2:"\u{1F446}",police_car:"\u{1F693}",policewoman:"\u{1F46E}&zwj;\u2640\uFE0F",poodle:"\u{1F429}",popcorn:"\u{1F37F}",post_office:"\u{1F3E3}",postal_horn:"\u{1F4EF}",postbox:"\u{1F4EE}",potable_water:"\u{1F6B0}",potato:"\u{1F954}",pouch:"\u{1F45D}",poultry_leg:"\u{1F357}",pound:"\u{1F4B7}",rage:"\u{1F621}",pouting_cat:"\u{1F63E}",pouting_man:"\u{1F64E}&zwj;\u2642\uFE0F",pray:"\u{1F64F}",prayer_beads:"\u{1F4FF}",pregnant_woman:"\u{1F930}",previous_track_button:"\u23EE",prince:"\u{1F934}",princess:"\u{1F478}",printer:"\u{1F5A8}",purple_heart:"\u{1F49C}",purse:"\u{1F45B}",pushpin:"\u{1F4CC}",put_litter_in_its_place:"\u{1F6AE}",question:"\u2753",rabbit:"\u{1F430}",rabbit2:"\u{1F407}",racehorse:"\u{1F40E}",racing_car:"\u{1F3CE}",radio:"\u{1F4FB}",radio_button:"\u{1F518}",radioactive:"\u2622\uFE0F",railway_car:"\u{1F683}",railway_track:"\u{1F6E4}",rainbow:"\u{1F308}",rainbow_flag:"\u{1F3F3}\uFE0F&zwj;\u{1F308}",raised_back_of_hand:"\u{1F91A}",raised_hand_with_fingers_splayed:"\u{1F590}",raised_hands:"\u{1F64C}",raising_hand_woman:"\u{1F64B}",raising_hand_man:"\u{1F64B}&zwj;\u2642\uFE0F",ram:"\u{1F40F}",ramen:"\u{1F35C}",rat:"\u{1F400}",record_button:"\u23FA",recycle:"\u267B\uFE0F",red_circle:"\u{1F534}",registered:"\xAE\uFE0F",relaxed:"\u263A\uFE0F",relieved:"\u{1F60C}",reminder_ribbon:"\u{1F397}",repeat:"\u{1F501}",repeat_one:"\u{1F502}",rescue_worker_helmet:"\u26D1",restroom:"\u{1F6BB}",revolving_hearts:"\u{1F49E}",rewind:"\u23EA",rhinoceros:"\u{1F98F}",ribbon:"\u{1F380}",rice:"\u{1F35A}",rice_ball:"\u{1F359}",rice_cracker:"\u{1F358}",rice_scene:"\u{1F391}",right_anger_bubble:"\u{1F5EF}",ring:"\u{1F48D}",robot:"\u{1F916}",rocket:"\u{1F680}",rofl:"\u{1F923}",roll_eyes:"\u{1F644}",roller_coaster:"\u{1F3A2}",rooster:"\u{1F413}",rose:"\u{1F339}",rosette:"\u{1F3F5}",rotating_light:"\u{1F6A8}",round_pushpin:"\u{1F4CD}",rowing_man:"\u{1F6A3}",rowing_woman:"\u{1F6A3}&zwj;\u2640\uFE0F",rugby_football:"\u{1F3C9}",running_man:"\u{1F3C3}",running_shirt_with_sash:"\u{1F3BD}",running_woman:"\u{1F3C3}&zwj;\u2640\uFE0F",sa:"\u{1F202}\uFE0F",sagittarius:"\u2650\uFE0F",sake:"\u{1F376}",sandal:"\u{1F461}",santa:"\u{1F385}",satellite:"\u{1F4E1}",saxophone:"\u{1F3B7}",school:"\u{1F3EB}",school_satchel:"\u{1F392}",scissors:"\u2702\uFE0F",scorpion:"\u{1F982}",scorpius:"\u264F\uFE0F",scream:"\u{1F631}",scream_cat:"\u{1F640}",scroll:"\u{1F4DC}",seat:"\u{1F4BA}",secret:"\u3299\uFE0F",see_no_evil:"\u{1F648}",seedling:"\u{1F331}",selfie:"\u{1F933}",shallow_pan_of_food:"\u{1F958}",shamrock:"\u2618\uFE0F",shark:"\u{1F988}",shaved_ice:"\u{1F367}",sheep:"\u{1F411}",shell:"\u{1F41A}",shield:"\u{1F6E1}",shinto_shrine:"\u26E9",ship:"\u{1F6A2}",shirt:"\u{1F455}",shopping:"\u{1F6CD}",shopping_cart:"\u{1F6D2}",shower:"\u{1F6BF}",shrimp:"\u{1F990}",signal_strength:"\u{1F4F6}",six_pointed_star:"\u{1F52F}",ski:"\u{1F3BF}",skier:"\u26F7",skull:"\u{1F480}",skull_and_crossbones:"\u2620\uFE0F",sleeping:"\u{1F634}",sleeping_bed:"\u{1F6CC}",sleepy:"\u{1F62A}",slightly_frowning_face:"\u{1F641}",slightly_smiling_face:"\u{1F642}",slot_machine:"\u{1F3B0}",small_airplane:"\u{1F6E9}",small_blue_diamond:"\u{1F539}",small_orange_diamond:"\u{1F538}",small_red_triangle:"\u{1F53A}",small_red_triangle_down:"\u{1F53B}",smile:"\u{1F604}",smile_cat:"\u{1F638}",smiley:"\u{1F603}",smiley_cat:"\u{1F63A}",smiling_imp:"\u{1F608}",smirk:"\u{1F60F}",smirk_cat:"\u{1F63C}",smoking:"\u{1F6AC}",snail:"\u{1F40C}",snake:"\u{1F40D}",sneezing_face:"\u{1F927}",snowboarder:"\u{1F3C2}",snowflake:"\u2744\uFE0F",snowman:"\u26C4\uFE0F",snowman_with_snow:"\u2603\uFE0F",sob:"\u{1F62D}",soccer:"\u26BD\uFE0F",soon:"\u{1F51C}",sos:"\u{1F198}",sound:"\u{1F509}",space_invader:"\u{1F47E}",spades:"\u2660\uFE0F",spaghetti:"\u{1F35D}",sparkle:"\u2747\uFE0F",sparkler:"\u{1F387}",sparkles:"\u2728",sparkling_heart:"\u{1F496}",speak_no_evil:"\u{1F64A}",speaker:"\u{1F508}",speaking_head:"\u{1F5E3}",speech_balloon:"\u{1F4AC}",speedboat:"\u{1F6A4}",spider:"\u{1F577}",spider_web:"\u{1F578}",spiral_calendar:"\u{1F5D3}",spiral_notepad:"\u{1F5D2}",spoon:"\u{1F944}",squid:"\u{1F991}",stadium:"\u{1F3DF}",star:"\u2B50\uFE0F",star2:"\u{1F31F}",star_and_crescent:"\u262A\uFE0F",star_of_david:"\u2721\uFE0F",stars:"\u{1F320}",station:"\u{1F689}",statue_of_liberty:"\u{1F5FD}",steam_locomotive:"\u{1F682}",stew:"\u{1F372}",stop_button:"\u23F9",stop_sign:"\u{1F6D1}",stopwatch:"\u23F1",straight_ruler:"\u{1F4CF}",strawberry:"\u{1F353}",stuck_out_tongue:"\u{1F61B}",stuck_out_tongue_closed_eyes:"\u{1F61D}",stuck_out_tongue_winking_eye:"\u{1F61C}",studio_microphone:"\u{1F399}",stuffed_flatbread:"\u{1F959}",sun_behind_large_cloud:"\u{1F325}",sun_behind_rain_cloud:"\u{1F326}",sun_behind_small_cloud:"\u{1F324}",sun_with_face:"\u{1F31E}",sunflower:"\u{1F33B}",sunglasses:"\u{1F60E}",sunny:"\u2600\uFE0F",sunrise:"\u{1F305}",sunrise_over_mountains:"\u{1F304}",surfing_man:"\u{1F3C4}",surfing_woman:"\u{1F3C4}&zwj;\u2640\uFE0F",sushi:"\u{1F363}",suspension_railway:"\u{1F69F}",sweat:"\u{1F613}",sweat_drops:"\u{1F4A6}",sweat_smile:"\u{1F605}",sweet_potato:"\u{1F360}",swimming_man:"\u{1F3CA}",swimming_woman:"\u{1F3CA}&zwj;\u2640\uFE0F",symbols:"\u{1F523}",synagogue:"\u{1F54D}",syringe:"\u{1F489}",taco:"\u{1F32E}",tada:"\u{1F389}",tanabata_tree:"\u{1F38B}",taurus:"\u2649\uFE0F",taxi:"\u{1F695}",tea:"\u{1F375}",telephone_receiver:"\u{1F4DE}",telescope:"\u{1F52D}",tennis:"\u{1F3BE}",tent:"\u26FA\uFE0F",thermometer:"\u{1F321}",thinking:"\u{1F914}",thought_balloon:"\u{1F4AD}",ticket:"\u{1F3AB}",tickets:"\u{1F39F}",tiger:"\u{1F42F}",tiger2:"\u{1F405}",timer_clock:"\u23F2",tipping_hand_man:"\u{1F481}&zwj;\u2642\uFE0F",tired_face:"\u{1F62B}",tm:"\u2122\uFE0F",toilet:"\u{1F6BD}",tokyo_tower:"\u{1F5FC}",tomato:"\u{1F345}",tongue:"\u{1F445}",top:"\u{1F51D}",tophat:"\u{1F3A9}",tornado:"\u{1F32A}",trackball:"\u{1F5B2}",tractor:"\u{1F69C}",traffic_light:"\u{1F6A5}",train:"\u{1F68B}",train2:"\u{1F686}",tram:"\u{1F68A}",triangular_flag_on_post:"\u{1F6A9}",triangular_ruler:"\u{1F4D0}",trident:"\u{1F531}",triumph:"\u{1F624}",trolleybus:"\u{1F68E}",trophy:"\u{1F3C6}",tropical_drink:"\u{1F379}",tropical_fish:"\u{1F420}",truck:"\u{1F69A}",trumpet:"\u{1F3BA}",tulip:"\u{1F337}",tumbler_glass:"\u{1F943}",turkey:"\u{1F983}",turtle:"\u{1F422}",tv:"\u{1F4FA}",twisted_rightwards_arrows:"\u{1F500}",two_hearts:"\u{1F495}",two_men_holding_hands:"\u{1F46C}",two_women_holding_hands:"\u{1F46D}",u5272:"\u{1F239}",u5408:"\u{1F234}",u55b6:"\u{1F23A}",u6307:"\u{1F22F}\uFE0F",u6708:"\u{1F237}\uFE0F",u6709:"\u{1F236}",u6e80:"\u{1F235}",u7121:"\u{1F21A}\uFE0F",u7533:"\u{1F238}",u7981:"\u{1F232}",u7a7a:"\u{1F233}",umbrella:"\u2614\uFE0F",unamused:"\u{1F612}",underage:"\u{1F51E}",unicorn:"\u{1F984}",unlock:"\u{1F513}",up:"\u{1F199}",upside_down_face:"\u{1F643}",v:"\u270C\uFE0F",vertical_traffic_light:"\u{1F6A6}",vhs:"\u{1F4FC}",vibration_mode:"\u{1F4F3}",video_camera:"\u{1F4F9}",video_game:"\u{1F3AE}",violin:"\u{1F3BB}",virgo:"\u264D\uFE0F",volcano:"\u{1F30B}",volleyball:"\u{1F3D0}",vs:"\u{1F19A}",vulcan_salute:"\u{1F596}",walking_man:"\u{1F6B6}",walking_woman:"\u{1F6B6}&zwj;\u2640\uFE0F",waning_crescent_moon:"\u{1F318}",waning_gibbous_moon:"\u{1F316}",warning:"\u26A0\uFE0F",wastebasket:"\u{1F5D1}",watch:"\u231A\uFE0F",water_buffalo:"\u{1F403}",watermelon:"\u{1F349}",wave:"\u{1F44B}",wavy_dash:"\u3030\uFE0F",waxing_crescent_moon:"\u{1F312}",wc:"\u{1F6BE}",weary:"\u{1F629}",wedding:"\u{1F492}",weight_lifting_man:"\u{1F3CB}\uFE0F",weight_lifting_woman:"\u{1F3CB}\uFE0F&zwj;\u2640\uFE0F",whale:"\u{1F433}",whale2:"\u{1F40B}",wheel_of_dharma:"\u2638\uFE0F",wheelchair:"\u267F\uFE0F",white_check_mark:"\u2705",white_circle:"\u26AA\uFE0F",white_flag:"\u{1F3F3}\uFE0F",white_flower:"\u{1F4AE}",white_large_square:"\u2B1C\uFE0F",white_medium_small_square:"\u25FD\uFE0F",white_medium_square:"\u25FB\uFE0F",white_small_square:"\u25AB\uFE0F",white_square_button:"\u{1F533}",wilted_flower:"\u{1F940}",wind_chime:"\u{1F390}",wind_face:"\u{1F32C}",wine_glass:"\u{1F377}",wink:"\u{1F609}",wolf:"\u{1F43A}",woman:"\u{1F469}",woman_artist:"\u{1F469}&zwj;\u{1F3A8}",woman_astronaut:"\u{1F469}&zwj;\u{1F680}",woman_cartwheeling:"\u{1F938}&zwj;\u2640\uFE0F",woman_cook:"\u{1F469}&zwj;\u{1F373}",woman_facepalming:"\u{1F926}&zwj;\u2640\uFE0F",woman_factory_worker:"\u{1F469}&zwj;\u{1F3ED}",woman_farmer:"\u{1F469}&zwj;\u{1F33E}",woman_firefighter:"\u{1F469}&zwj;\u{1F692}",woman_health_worker:"\u{1F469}&zwj;\u2695\uFE0F",woman_judge:"\u{1F469}&zwj;\u2696\uFE0F",woman_juggling:"\u{1F939}&zwj;\u2640\uFE0F",woman_mechanic:"\u{1F469}&zwj;\u{1F527}",woman_office_worker:"\u{1F469}&zwj;\u{1F4BC}",woman_pilot:"\u{1F469}&zwj;\u2708\uFE0F",woman_playing_handball:"\u{1F93E}&zwj;\u2640\uFE0F",woman_playing_water_polo:"\u{1F93D}&zwj;\u2640\uFE0F",woman_scientist:"\u{1F469}&zwj;\u{1F52C}",woman_shrugging:"\u{1F937}&zwj;\u2640\uFE0F",woman_singer:"\u{1F469}&zwj;\u{1F3A4}",woman_student:"\u{1F469}&zwj;\u{1F393}",woman_teacher:"\u{1F469}&zwj;\u{1F3EB}",woman_technologist:"\u{1F469}&zwj;\u{1F4BB}",woman_with_turban:"\u{1F473}&zwj;\u2640\uFE0F",womans_clothes:"\u{1F45A}",womans_hat:"\u{1F452}",women_wrestling:"\u{1F93C}&zwj;\u2640\uFE0F",womens:"\u{1F6BA}",world_map:"\u{1F5FA}",worried:"\u{1F61F}",wrench:"\u{1F527}",writing_hand:"\u270D\uFE0F",x:"\u274C",yellow_heart:"\u{1F49B}",yen:"\u{1F4B4}",yin_yang:"\u262F\uFE0F",yum:"\u{1F60B}",zap:"\u26A1\uFE0F",zipper_mouth_face:"\u{1F910}",zzz:"\u{1F4A4}",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},r.Converter=function(e){"use strict";var u={},d=[],a=[],s={},i=$,c={parsed:{},raw:"",format:""};t();function t(){e=e||{};for(var n in E)E.hasOwnProperty(n)&&(u[n]=E[n]);if(typeof e=="object")for(var f in e)e.hasOwnProperty(f)&&(u[f]=e[f]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");u.extensions&&r.helper.forEach(u.extensions,p)}function p(n,f){if(f=f||null,r.helper.isString(n))if(n=r.helper.stdExtName(n),f=n,r.extensions[n]){console.warn("DEPRECATION WARNING: "+n+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),l(r.extensions[n],n);return}else if(!r.helper.isUndefined(z[n]))n=z[n];else throw Error('Extension "'+n+'" could not be loaded. It was either not found or is not a valid extension.');typeof n=="function"&&(n=n()),r.helper.isArray(n)||(n=[n]);var _=H(n,f);if(!_.valid)throw Error(_.error);for(var m=0;m<n.length;++m){switch(n[m].type){case"lang":d.push(n[m]);break;case"output":a.push(n[m]);break}if(n[m].hasOwnProperty("listeners"))for(var w in n[m].listeners)n[m].listeners.hasOwnProperty(w)&&o(w,n[m].listeners[w])}}function l(n,f){typeof n=="function"&&(n=n(new r.Converter)),r.helper.isArray(n)||(n=[n]);var _=H(n,f);if(!_.valid)throw Error(_.error);for(var m=0;m<n.length;++m)switch(n[m].type){case"lang":d.push(n[m]);break;case"output":a.push(n[m]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function o(n,f){if(!r.helper.isString(n))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof n+" given");if(typeof f!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof f+" given");s.hasOwnProperty(n)||(s[n]=[]),s[n].push(f)}function h(n){var f=n.match(/^\s*/)[0].length,_=new RegExp("^\\s{0,"+f+"}","gm");return n.replace(_,"")}this._dispatch=function(f,_,m,w){if(s.hasOwnProperty(f))for(var g=0;g<s[f].length;++g){var y=s[f][g](f,_,this,m,w);y&&typeof y<"u"&&(_=y)}return _},this.listen=function(n,f){return o(n,f),this},this.makeHtml=function(n){if(!n)return n;var f={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:d,outputModifiers:a,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return n=n.replace(/¨/g,"\xA8T"),n=n.replace(/\$/g,"\xA8D"),n=n.replace(/\r\n/g,`
`),n=n.replace(/\r/g,`
`),n=n.replace(/\u00A0/g,"&nbsp;"),u.smartIndentationFix&&(n=h(n)),n=`

`+n+`

`,n=r.subParser("detab")(n,u,f),n=n.replace(/^[ \t]+$/mg,""),r.helper.forEach(d,function(_){n=r.subParser("runExtension")(_,n,u,f)}),n=r.subParser("metadata")(n,u,f),n=r.subParser("hashPreCodeTags")(n,u,f),n=r.subParser("githubCodeBlocks")(n,u,f),n=r.subParser("hashHTMLBlocks")(n,u,f),n=r.subParser("hashCodeTags")(n,u,f),n=r.subParser("stripLinkDefinitions")(n,u,f),n=r.subParser("blockGamut")(n,u,f),n=r.subParser("unhashHTMLSpans")(n,u,f),n=r.subParser("unescapeSpecialChars")(n,u,f),n=n.replace(/¨D/g,"$$"),n=n.replace(/¨T/g,"\xA8"),n=r.subParser("completeHTMLDocument")(n,u,f),r.helper.forEach(a,function(_){n=r.subParser("runExtension")(_,n,u,f)}),c=f.metadata,n},this.makeMarkdown=this.makeMd=function(n,f){if(n=n.replace(/\r\n/g,`
`),n=n.replace(/\r/g,`
`),n=n.replace(/>[ \t]+</,">\xA8NBSP;<"),!f)if(window&&window.document)f=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var _=f.createElement("div");_.innerHTML=n;var m={preList:S(_)};j(_);for(var w=_.childNodes,g="",y=0;y<w.length;y++)g+=r.subParser("makeMarkdown.node")(w[y],m);function j(v){for(var P=0;P<v.childNodes.length;++P){var C=v.childNodes[P];C.nodeType===3?!/\S/.test(C.nodeValue)&&!/^[ ]+$/.test(C.nodeValue)?(v.removeChild(C),--P):(C.nodeValue=C.nodeValue.split(`
`).join(" "),C.nodeValue=C.nodeValue.replace(/(\s)+/g,"$1")):C.nodeType===1&&j(C)}}function S(v){for(var P=v.querySelectorAll("pre"),C=[],M=0;M<P.length;++M)if(P[M].childElementCount===1&&P[M].firstChild.tagName.toLowerCase()==="code"){var I=P[M].firstChild.innerHTML.trim(),N=P[M].firstChild.getAttribute("data-language")||"";if(N==="")for(var q=P[M].firstChild.className.split(" "),V=0;V<q.length;++V){var G=q[V].match(/^language-(.+)$/);if(G!==null){N=G[1];break}}I=r.helper.unescapeHTMLEntities(I),C.push(I),P[M].outerHTML='<precode language="'+N+'" precodenum="'+M.toString()+'"></precode>'}else C.push(P[M].innerHTML),P[M].innerHTML="",P[M].setAttribute("prenum",M.toString());return C}return g},this.setOption=function(n,f){u[n]=f},this.getOption=function(n){return u[n]},this.getOptions=function(){return u},this.addExtension=function(n,f){f=f||null,p(n,f)},this.useExtension=function(n){p(n)},this.setFlavor=function(n){if(!L.hasOwnProperty(n))throw Error(n+" flavor was not found");var f=L[n];i=n;for(var _ in f)f.hasOwnProperty(_)&&(u[_]=f[_])},this.getFlavor=function(){return i},this.removeExtension=function(n){r.helper.isArray(n)||(n=[n]);for(var f=0;f<n.length;++f){for(var _=n[f],m=0;m<d.length;++m)d[m]===_&&d.splice(m,1);for(var w=0;w<a.length;++w)a[w]===_&&a.splice(w,1)}},this.getAllExtensions=function(){return{language:d,output:a}},this.getMetadata=function(n){return n?c.raw:c.parsed},this.getMetadataFormat=function(){return c.format},this._setMetadataPair=function(n,f){c.parsed[n]=f},this._setMetadataFormat=function(n){c.format=n},this._setMetadataRaw=function(n){c.raw=n}},r.subParser("anchors",function(e,u,d){"use strict";e=d.converter._dispatch("anchors.before",e,u,d);var a=function(s,i,c,t,p,l,o){if(r.helper.isUndefined(o)&&(o=""),c=c.toLowerCase(),s.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)t="";else if(!t)if(c||(c=i.toLowerCase().replace(/ ?\n/g," ")),t="#"+c,!r.helper.isUndefined(d.gUrls[c]))t=d.gUrls[c],r.helper.isUndefined(d.gTitles[c])||(o=d.gTitles[c]);else return s;t=t.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var h='<a href="'+t+'"';return o!==""&&o!==null&&(o=o.replace(/"/g,"&quot;"),o=o.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),h+=' title="'+o+'"'),u.openLinksInNewWindow&&!/^#/.test(t)&&(h+=' rel="noopener noreferrer" target="\xA8E95Eblank"'),h+=">"+i+"</a>",h};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,a),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,a),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,a),e=e.replace(/\[([^\[\]]+)]()()()()()/g,a),u.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(s,i,c,t,p){if(c==="\\")return i+t;if(!r.helper.isString(u.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var l=u.ghMentionsLink.replace(/\{u}/g,p),o="";return u.openLinksInNewWindow&&(o=' rel="noopener noreferrer" target="\xA8E95Eblank"'),i+'<a href="'+l+'"'+o+">"+t+"</a>"})),e=d.converter._dispatch("anchors.after",e,u,d),e});var Q=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,X=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,J=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,Y=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,x=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,R=function(e){"use strict";return function(u,d,a,s,i,c,t){a=a.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var p=a,l="",o="",h=d||"",n=t||"";return/^www\./i.test(a)&&(a=a.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&c&&(l=c),e.openLinksInNewWindow&&(o=' rel="noopener noreferrer" target="\xA8E95Eblank"'),h+'<a href="'+a+'"'+o+">"+p+"</a>"+l+n}},F=function(e,u){"use strict";return function(d,a,s){var i="mailto:";return a=a||"",s=r.subParser("unescapeSpecialChars")(s,e,u),e.encodeEmails?(i=r.helper.encodeEmailAddress(i+s),s=r.helper.encodeEmailAddress(s)):i=i+s,a+'<a href="'+i+'">'+s+"</a>"}};r.subParser("autoLinks",function(e,u,d){"use strict";return e=d.converter._dispatch("autoLinks.before",e,u,d),e=e.replace(J,R(u)),e=e.replace(x,F(u,d)),e=d.converter._dispatch("autoLinks.after",e,u,d),e}),r.subParser("simplifiedAutoLinks",function(e,u,d){"use strict";return u.simplifiedAutoLink&&(e=d.converter._dispatch("simplifiedAutoLinks.before",e,u,d),u.excludeTrailingPunctuationFromURLs?e=e.replace(X,R(u)):e=e.replace(Q,R(u)),e=e.replace(Y,F(u,d)),e=d.converter._dispatch("simplifiedAutoLinks.after",e,u,d)),e}),r.subParser("blockGamut",function(e,u,d){"use strict";return e=d.converter._dispatch("blockGamut.before",e,u,d),e=r.subParser("blockQuotes")(e,u,d),e=r.subParser("headers")(e,u,d),e=r.subParser("horizontalRule")(e,u,d),e=r.subParser("lists")(e,u,d),e=r.subParser("codeBlocks")(e,u,d),e=r.subParser("tables")(e,u,d),e=r.subParser("hashHTMLBlocks")(e,u,d),e=r.subParser("paragraphs")(e,u,d),e=d.converter._dispatch("blockGamut.after",e,u,d),e}),r.subParser("blockQuotes",function(e,u,d){"use strict";e=d.converter._dispatch("blockQuotes.before",e,u,d),e=e+`

`;var a=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return u.splitAdjacentBlockquotes&&(a=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(a,function(s){return s=s.replace(/^[ \t]*>[ \t]?/gm,""),s=s.replace(/¨0/g,""),s=s.replace(/^[ \t]+$/gm,""),s=r.subParser("githubCodeBlocks")(s,u,d),s=r.subParser("blockGamut")(s,u,d),s=s.replace(/(^|\n)/g,"$1  "),s=s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(i,c){var t=c;return t=t.replace(/^  /mg,"\xA80"),t=t.replace(/¨0/g,""),t}),r.subParser("hashBlock")(`<blockquote>
`+s+`
</blockquote>`,u,d)}),e=d.converter._dispatch("blockQuotes.after",e,u,d),e}),r.subParser("codeBlocks",function(e,u,d){"use strict";e=d.converter._dispatch("codeBlocks.before",e,u,d),e+="\xA80";var a=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(a,function(s,i,c){var t=i,p=c,l=`
`;return t=r.subParser("outdent")(t,u,d),t=r.subParser("encodeCode")(t,u,d),t=r.subParser("detab")(t,u,d),t=t.replace(/^\n+/g,""),t=t.replace(/\n+$/g,""),u.omitExtraWLInCodeBlocks&&(l=""),t="<pre><code>"+t+l+"</code></pre>",r.subParser("hashBlock")(t,u,d)+p}),e=e.replace(/¨0/,""),e=d.converter._dispatch("codeBlocks.after",e,u,d),e}),r.subParser("codeSpans",function(e,u,d){"use strict";return e=d.converter._dispatch("codeSpans.before",e,u,d),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,s,i,c){var t=c;return t=t.replace(/^([ \t]*)/g,""),t=t.replace(/[ \t]*$/g,""),t=r.subParser("encodeCode")(t,u,d),t=s+"<code>"+t+"</code>",t=r.subParser("hashHTMLSpans")(t,u,d),t}),e=d.converter._dispatch("codeSpans.after",e,u,d),e}),r.subParser("completeHTMLDocument",function(e,u,d){"use strict";if(!u.completeHTMLDocument)return e;e=d.converter._dispatch("completeHTMLDocument.before",e,u,d);var a="html",s=`<!DOCTYPE HTML>
`,i="",c=`<meta charset="utf-8">
`,t="",p="";typeof d.metadata.parsed.doctype<"u"&&(s="<!DOCTYPE "+d.metadata.parsed.doctype+`>
`,a=d.metadata.parsed.doctype.toString().toLowerCase(),(a==="html"||a==="html5")&&(c='<meta charset="utf-8">'));for(var l in d.metadata.parsed)if(d.metadata.parsed.hasOwnProperty(l))switch(l.toLowerCase()){case"doctype":break;case"title":i="<title>"+d.metadata.parsed.title+`</title>
`;break;case"charset":a==="html"||a==="html5"?c='<meta charset="'+d.metadata.parsed.charset+`">
`:c='<meta name="charset" content="'+d.metadata.parsed.charset+`">
`;break;case"language":case"lang":t=' lang="'+d.metadata.parsed[l]+'"',p+='<meta name="'+l+'" content="'+d.metadata.parsed[l]+`">
`;break;default:p+='<meta name="'+l+'" content="'+d.metadata.parsed[l]+`">
`}return e=s+"<html"+t+`>
<head>
`+i+c+p+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=d.converter._dispatch("completeHTMLDocument.after",e,u,d),e}),r.subParser("detab",function(e,u,d){"use strict";return e=d.converter._dispatch("detab.before",e,u,d),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"\xA8A\xA8B"),e=e.replace(/¨B(.+?)¨A/g,function(a,s){for(var i=s,c=4-i.length%4,t=0;t<c;t++)i+=" ";return i}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=d.converter._dispatch("detab.after",e,u,d),e}),r.subParser("ellipsis",function(e,u,d){"use strict";return u.ellipsis&&(e=d.converter._dispatch("ellipsis.before",e,u,d),e=e.replace(/\.\.\./g,"\u2026"),e=d.converter._dispatch("ellipsis.after",e,u,d)),e}),r.subParser("emoji",function(e,u,d){"use strict";if(!u.emoji)return e;e=d.converter._dispatch("emoji.before",e,u,d);var a=/:([\S]+?):/g;return e=e.replace(a,function(s,i){return r.helper.emojis.hasOwnProperty(i)?r.helper.emojis[i]:s}),e=d.converter._dispatch("emoji.after",e,u,d),e}),r.subParser("encodeAmpsAndAngles",function(e,u,d){"use strict";return e=d.converter._dispatch("encodeAmpsAndAngles.before",e,u,d),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=d.converter._dispatch("encodeAmpsAndAngles.after",e,u,d),e}),r.subParser("encodeBackslashEscapes",function(e,u,d){"use strict";return e=d.converter._dispatch("encodeBackslashEscapes.before",e,u,d),e=e.replace(/\\(\\)/g,r.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("encodeBackslashEscapes.after",e,u,d),e}),r.subParser("encodeCode",function(e,u,d){"use strict";return e=d.converter._dispatch("encodeCode.before",e,u,d),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("encodeCode.after",e,u,d),e}),r.subParser("escapeSpecialCharsWithinTagAttributes",function(e,u,d){"use strict";e=d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,u,d);var a=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,s=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(a,function(i){return i.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),e=e.replace(s,function(i){return i.replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),e=d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,u,d),e}),r.subParser("githubCodeBlocks",function(e,u,d){"use strict";return u.ghCodeBlocks?(e=d.converter._dispatch("githubCodeBlocks.before",e,u,d),e+="\xA80",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(a,s,i,c){var t=u.omitExtraWLInCodeBlocks?"":`
`;return c=r.subParser("encodeCode")(c,u,d),c=r.subParser("detab")(c,u,d),c=c.replace(/^\n+/g,""),c=c.replace(/\n+$/g,""),c="<pre><code"+(i?' class="'+i+" language-"+i+'"':"")+">"+c+t+"</code></pre>",c=r.subParser("hashBlock")(c,u,d),`

\xA8G`+(d.ghCodeBlocks.push({text:a,codeblock:c})-1)+`G

`}),e=e.replace(/¨0/,""),d.converter._dispatch("githubCodeBlocks.after",e,u,d)):e}),r.subParser("hashBlock",function(e,u,d){"use strict";return e=d.converter._dispatch("hashBlock.before",e,u,d),e=e.replace(/(^\n+|\n+$)/g,""),e=`

\xA8K`+(d.gHtmlBlocks.push(e)-1)+`K

`,e=d.converter._dispatch("hashBlock.after",e,u,d),e}),r.subParser("hashCodeTags",function(e,u,d){"use strict";e=d.converter._dispatch("hashCodeTags.before",e,u,d);var a=function(s,i,c,t){var p=c+r.subParser("encodeCode")(i,u,d)+t;return"\xA8C"+(d.gHtmlSpans.push(p)-1)+"C"};return e=r.helper.replaceRecursiveRegExp(e,a,"<code\\b[^>]*>","</code>","gim"),e=d.converter._dispatch("hashCodeTags.after",e,u,d),e}),r.subParser("hashElement",function(e,u,d){"use strict";return function(a,s){var i=s;return i=i.replace(/\n\n/g,`
`),i=i.replace(/^\n/,""),i=i.replace(/\n+$/g,""),i=`

\xA8K`+(d.gHtmlBlocks.push(i)-1)+`K

`,i}}),r.subParser("hashHTMLBlocks",function(e,u,d){"use strict";e=d.converter._dispatch("hashHTMLBlocks.before",e,u,d);var a=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],s=function(n,f,_,m){var w=n;return _.search(/\bmarkdown\b/)!==-1&&(w=_+d.converter.makeHtml(f)+m),`

\xA8K`+(d.gHtmlBlocks.push(w)-1)+`K

`};u.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(n,f){return"&lt;"+f+"&gt;"}));for(var i=0;i<a.length;++i)for(var c,t=new RegExp("^ {0,3}(<"+a[i]+"\\b[^>]*>)","im"),p="<"+a[i]+"\\b[^>]*>",l="</"+a[i]+">";(c=r.helper.regexIndexOf(e,t))!==-1;){var o=r.helper.splitAtIndex(e,c),h=r.helper.replaceRecursiveRegExp(o[1],s,p,l,"im");if(h===o[1])break;e=o[0].concat(h)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,u,d)),e=r.helper.replaceRecursiveRegExp(e,function(n){return`

\xA8K`+(d.gHtmlBlocks.push(n)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,u,d)),e=d.converter._dispatch("hashHTMLBlocks.after",e,u,d),e}),r.subParser("hashHTMLSpans",function(e,u,d){"use strict";e=d.converter._dispatch("hashHTMLSpans.before",e,u,d);function a(s){return"\xA8C"+(d.gHtmlSpans.push(s)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(s){return a(s)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(s){return a(s)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(s){return a(s)}),e=e.replace(/<[^>]+?>/gi,function(s){return a(s)}),e=d.converter._dispatch("hashHTMLSpans.after",e,u,d),e}),r.subParser("unhashHTMLSpans",function(e,u,d){"use strict";e=d.converter._dispatch("unhashHTMLSpans.before",e,u,d);for(var a=0;a<d.gHtmlSpans.length;++a){for(var s=d.gHtmlSpans[a],i=0;/¨C(\d+)C/.test(s);){var c=RegExp.$1;if(s=s.replace("\xA8C"+c+"C",d.gHtmlSpans[c]),i===10){console.error("maximum nesting of 10 spans reached!!!");break}++i}e=e.replace("\xA8C"+a+"C",s)}return e=d.converter._dispatch("unhashHTMLSpans.after",e,u,d),e}),r.subParser("hashPreCodeTags",function(e,u,d){"use strict";e=d.converter._dispatch("hashPreCodeTags.before",e,u,d);var a=function(s,i,c,t){var p=c+r.subParser("encodeCode")(i,u,d)+t;return`

\xA8G`+(d.ghCodeBlocks.push({text:s,codeblock:p})-1)+`G

`};return e=r.helper.replaceRecursiveRegExp(e,a,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=d.converter._dispatch("hashPreCodeTags.after",e,u,d),e}),r.subParser("headers",function(e,u,d){"use strict";e=d.converter._dispatch("headers.before",e,u,d);var a=isNaN(parseInt(u.headerLevelStart))?1:parseInt(u.headerLevelStart),s=u.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,i=u.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(s,function(p,l){var o=r.subParser("spanGamut")(l,u,d),h=u.noHeaderId?"":' id="'+t(l)+'"',n=a,f="<h"+n+h+">"+o+"</h"+n+">";return r.subParser("hashBlock")(f,u,d)}),e=e.replace(i,function(p,l){var o=r.subParser("spanGamut")(l,u,d),h=u.noHeaderId?"":' id="'+t(l)+'"',n=a+1,f="<h"+n+h+">"+o+"</h"+n+">";return r.subParser("hashBlock")(f,u,d)});var c=u.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(c,function(p,l,o){var h=o;u.customizedHeaderId&&(h=o.replace(/\s?\{([^{]+?)}\s*$/,""));var n=r.subParser("spanGamut")(h,u,d),f=u.noHeaderId?"":' id="'+t(o)+'"',_=a-1+l.length,m="<h"+_+f+">"+n+"</h"+_+">";return r.subParser("hashBlock")(m,u,d)});function t(p){var l,o;if(u.customizedHeaderId){var h=p.match(/\{([^{]+?)}\s*$/);h&&h[1]&&(p=h[1])}return l=p,r.helper.isString(u.prefixHeaderId)?o=u.prefixHeaderId:u.prefixHeaderId===!0?o="section-":o="",u.rawPrefixHeaderId||(l=o+l),u.ghCompatibleHeaderId?l=l.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():u.rawHeaderId?l=l.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"\xA8").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():l=l.replace(/[^\w]/g,"").toLowerCase(),u.rawPrefixHeaderId&&(l=o+l),d.hashLinkCounts[l]?l=l+"-"+d.hashLinkCounts[l]++:d.hashLinkCounts[l]=1,l}return e=d.converter._dispatch("headers.after",e,u,d),e}),r.subParser("horizontalRule",function(e,u,d){"use strict";e=d.converter._dispatch("horizontalRule.before",e,u,d);var a=r.subParser("hashBlock")("<hr />",u,d);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,a),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,a),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,a),e=d.converter._dispatch("horizontalRule.after",e,u,d),e}),r.subParser("images",function(e,u,d){"use strict";e=d.converter._dispatch("images.before",e,u,d);var a=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,s=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,i=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,c=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,t=/!\[([^\[\]]+)]()()()()()/g;function p(o,h,n,f,_,m,w,g){return f=f.replace(/\s/g,""),l(o,h,n,f,_,m,w,g)}function l(o,h,n,f,_,m,w,g){var y=d.gUrls,j=d.gTitles,S=d.gDimensions;if(n=n.toLowerCase(),g||(g=""),o.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)f="";else if(f===""||f===null)if((n===""||n===null)&&(n=h.toLowerCase().replace(/ ?\n/g," ")),f="#"+n,!r.helper.isUndefined(y[n]))f=y[n],r.helper.isUndefined(j[n])||(g=j[n]),r.helper.isUndefined(S[n])||(_=S[n].width,m=S[n].height);else return o;h=h.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),f=f.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var v='<img src="'+f+'" alt="'+h+'"';return g&&r.helper.isString(g)&&(g=g.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),v+=' title="'+g+'"'),_&&m&&(_=_==="*"?"auto":_,m=m==="*"?"auto":m,v+=' width="'+_+'"',v+=' height="'+m+'"'),v+=" />",v}return e=e.replace(c,l),e=e.replace(i,p),e=e.replace(s,l),e=e.replace(a,l),e=e.replace(t,l),e=d.converter._dispatch("images.after",e,u,d),e}),r.subParser("italicsAndBold",function(e,u,d){"use strict";e=d.converter._dispatch("italicsAndBold.before",e,u,d);function a(s,i,c){return i+s+c}return u.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(s,i){return a(i,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(s,i){return a(i,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(s,i){return a(i,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(s,i){return/\S$/.test(i)?a(i,"<strong><em>","</em></strong>"):s}),e=e.replace(/__(\S[\s\S]*?)__/g,function(s,i){return/\S$/.test(i)?a(i,"<strong>","</strong>"):s}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(s,i){return/\S$/.test(i)?a(i,"<em>","</em>"):s})),u.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(s,i,c){return a(c,i+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(s,i,c){return a(c,i+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(s,i,c){return a(c,i+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(s,i){return/\S$/.test(i)?a(i,"<strong><em>","</em></strong>"):s}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(s,i){return/\S$/.test(i)?a(i,"<strong>","</strong>"):s}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(s,i){return/\S$/.test(i)?a(i,"<em>","</em>"):s})),e=d.converter._dispatch("italicsAndBold.after",e,u,d),e}),r.subParser("lists",function(e,u,d){"use strict";function a(c,t){d.gListLevel++,c=c.replace(/\n{2,}$/,`
`),c+="\xA80";var p=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,l=/\n[ \t]*\n(?!¨0)/.test(c);return u.disableForced4SpacesIndentedSublists&&(p=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),c=c.replace(p,function(o,h,n,f,_,m,w){w=w&&w.trim()!=="";var g=r.subParser("outdent")(_,u,d),y="";return m&&u.tasklists&&(y=' class="task-list-item" style="list-style-type: none;"',g=g.replace(/^[ \t]*\[(x|X| )?]/m,function(){var j='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return w&&(j+=" checked"),j+=">",j})),g=g.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(j){return"\xA8A"+j}),h||g.search(/\n{2,}/)>-1?(g=r.subParser("githubCodeBlocks")(g,u,d),g=r.subParser("blockGamut")(g,u,d)):(g=r.subParser("lists")(g,u,d),g=g.replace(/\n$/,""),g=r.subParser("hashHTMLBlocks")(g,u,d),g=g.replace(/\n\n+/g,`

`),l?g=r.subParser("paragraphs")(g,u,d):g=r.subParser("spanGamut")(g,u,d)),g=g.replace("\xA8A",""),g="<li"+y+">"+g+`</li>
`,g}),c=c.replace(/¨0/g,""),d.gListLevel--,t&&(c=c.replace(/\s+$/,"")),c}function s(c,t){if(t==="ol"){var p=c.match(/^ *(\d+)\./);if(p&&p[1]!=="1")return' start="'+p[1]+'"'}return""}function i(c,t,p){var l=u.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,o=u.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,h=t==="ul"?l:o,n="";if(c.search(h)!==-1)(function _(m){var w=m.search(h),g=s(c,t);w!==-1?(n+=`

<`+t+g+`>
`+a(m.slice(0,w),!!p)+"</"+t+`>
`,t=t==="ul"?"ol":"ul",h=t==="ul"?l:o,_(m.slice(w))):n+=`

<`+t+g+`>
`+a(m,!!p)+"</"+t+`>
`})(c);else{var f=s(c,t);n=`

<`+t+f+`>
`+a(c,!!p)+"</"+t+`>
`}return n}return e=d.converter._dispatch("lists.before",e,u,d),e+="\xA80",d.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(c,t,p){var l=p.search(/[*+-]/g)>-1?"ul":"ol";return i(t,l,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(c,t,p,l){var o=l.search(/[*+-]/g)>-1?"ul":"ol";return i(p,o,!1)}),e=e.replace(/¨0/,""),e=d.converter._dispatch("lists.after",e,u,d),e}),r.subParser("metadata",function(e,u,d){"use strict";if(!u.metadata)return e;e=d.converter._dispatch("metadata.before",e,u,d);function a(s){d.metadata.raw=s,s=s.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),s=s.replace(/\n {4}/g," "),s.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(i,c,t){return d.metadata.parsed[c]=t,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(s,i,c){return a(c),"\xA8M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(s,i,c){return i&&(d.metadata.format=i),a(c),"\xA8M"}),e=e.replace(/¨M/g,""),e=d.converter._dispatch("metadata.after",e,u,d),e}),r.subParser("outdent",function(e,u,d){"use strict";return e=d.converter._dispatch("outdent.before",e,u,d),e=e.replace(/^(\t|[ ]{1,4})/gm,"\xA80"),e=e.replace(/¨0/g,""),e=d.converter._dispatch("outdent.after",e,u,d),e}),r.subParser("paragraphs",function(e,u,d){"use strict";e=d.converter._dispatch("paragraphs.before",e,u,d),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var a=e.split(/\n{2,}/g),s=[],i=a.length,c=0;c<i;c++){var t=a[c];t.search(/¨(K|G)(\d+)\1/g)>=0?s.push(t):t.search(/\S/)>=0&&(t=r.subParser("spanGamut")(t,u,d),t=t.replace(/^([ \t]*)/g,"<p>"),t+="</p>",s.push(t))}for(i=s.length,c=0;c<i;c++){for(var p="",l=s[c],o=!1;/¨(K|G)(\d+)\1/.test(l);){var h=RegExp.$1,n=RegExp.$2;h==="K"?p=d.gHtmlBlocks[n]:o?p=r.subParser("encodeCode")(d.ghCodeBlocks[n].text,u,d):p=d.ghCodeBlocks[n].codeblock,p=p.replace(/\$/g,"$$$$"),l=l.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,p),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(l)&&(o=!0)}s[c]=l}return e=s.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),d.converter._dispatch("paragraphs.after",e,u,d)}),r.subParser("runExtension",function(e,u,d,a){"use strict";if(e.filter)u=e.filter(u,a.converter,d);else if(e.regex){var s=e.regex;s instanceof RegExp||(s=new RegExp(s,"g")),u=u.replace(s,e.replace)}return u}),r.subParser("spanGamut",function(e,u,d){"use strict";return e=d.converter._dispatch("spanGamut.before",e,u,d),e=r.subParser("codeSpans")(e,u,d),e=r.subParser("escapeSpecialCharsWithinTagAttributes")(e,u,d),e=r.subParser("encodeBackslashEscapes")(e,u,d),e=r.subParser("images")(e,u,d),e=r.subParser("anchors")(e,u,d),e=r.subParser("autoLinks")(e,u,d),e=r.subParser("simplifiedAutoLinks")(e,u,d),e=r.subParser("emoji")(e,u,d),e=r.subParser("underline")(e,u,d),e=r.subParser("italicsAndBold")(e,u,d),e=r.subParser("strikethrough")(e,u,d),e=r.subParser("ellipsis")(e,u,d),e=r.subParser("hashHTMLSpans")(e,u,d),e=r.subParser("encodeAmpsAndAngles")(e,u,d),u.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=d.converter._dispatch("spanGamut.after",e,u,d),e}),r.subParser("strikethrough",function(e,u,d){"use strict";function a(s){return u.simplifiedAutoLink&&(s=r.subParser("simplifiedAutoLinks")(s,u,d)),"<del>"+s+"</del>"}return u.strikethrough&&(e=d.converter._dispatch("strikethrough.before",e,u,d),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(s,i){return a(i)}),e=d.converter._dispatch("strikethrough.after",e,u,d)),e}),r.subParser("stripLinkDefinitions",function(e,u,d){"use strict";var a=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,s=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="\xA80";var i=function(c,t,p,l,o,h,n){return t=t.toLowerCase(),e.toLowerCase().split(t).length-1<2?c:(p.match(/^data:.+?\/.+?;base64,/)?d.gUrls[t]=p.replace(/\s/g,""):d.gUrls[t]=r.subParser("encodeAmpsAndAngles")(p,u,d),h?h+n:(n&&(d.gTitles[t]=n.replace(/"|'/g,"&quot;")),u.parseImgDimensions&&l&&o&&(d.gDimensions[t]={width:l,height:o}),""))};return e=e.replace(s,i),e=e.replace(a,i),e=e.replace(/¨0/,""),e}),r.subParser("tables",function(e,u,d){"use strict";if(!u.tables)return e;var a=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,s=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function i(o){return/^:[ \t]*--*$/.test(o)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(o)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(o)?' style="text-align:center;"':""}function c(o,h){var n="";return o=o.trim(),(u.tablesHeaderId||u.tableHeaderId)&&(n=' id="'+o.replace(/ /g,"_").toLowerCase()+'"'),o=r.subParser("spanGamut")(o,u,d),"<th"+n+h+">"+o+`</th>
`}function t(o,h){var n=r.subParser("spanGamut")(o,u,d);return"<td"+h+">"+n+`</td>
`}function p(o,h){for(var n=`<table>
<thead>
<tr>
`,f=o.length,_=0;_<f;++_)n+=o[_];for(n+=`</tr>
</thead>
<tbody>
`,_=0;_<h.length;++_){n+=`<tr>
`;for(var m=0;m<f;++m)n+=h[_][m];n+=`</tr>
`}return n+=`</tbody>
</table>
`,n}function l(o){var h,n=o.split(`
`);for(h=0;h<n.length;++h)/^ {0,3}\|/.test(n[h])&&(n[h]=n[h].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(n[h])&&(n[h]=n[h].replace(/\|[ \t]*$/,"")),n[h]=r.subParser("codeSpans")(n[h],u,d);var f=n[0].split("|").map(function(v){return v.trim()}),_=n[1].split("|").map(function(v){return v.trim()}),m=[],w=[],g=[],y=[];for(n.shift(),n.shift(),h=0;h<n.length;++h)n[h].trim()!==""&&m.push(n[h].split("|").map(function(v){return v.trim()}));if(f.length<_.length)return o;for(h=0;h<_.length;++h)g.push(i(_[h]));for(h=0;h<f.length;++h)r.helper.isUndefined(g[h])&&(g[h]=""),w.push(c(f[h],g[h]));for(h=0;h<m.length;++h){for(var j=[],S=0;S<w.length;++S)r.helper.isUndefined(m[h][S]),j.push(t(m[h][S],g[S]));y.push(j)}return p(w,y)}return e=d.converter._dispatch("tables.before",e,u,d),e=e.replace(/\\(\|)/g,r.helper.escapeCharactersCallback),e=e.replace(a,l),e=e.replace(s,l),e=d.converter._dispatch("tables.after",e,u,d),e}),r.subParser("underline",function(e,u,d){"use strict";return u.underline&&(e=d.converter._dispatch("underline.before",e,u,d),u.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(a,s){return"<u>"+s+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(a,s){return"<u>"+s+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(a,s){return/\S$/.test(s)?"<u>"+s+"</u>":a}),e=e.replace(/__(\S[\s\S]*?)__/g,function(a,s){return/\S$/.test(s)?"<u>"+s+"</u>":a})),e=e.replace(/(_)/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("underline.after",e,u,d)),e}),r.subParser("unescapeSpecialChars",function(e,u,d){"use strict";return e=d.converter._dispatch("unescapeSpecialChars.before",e,u,d),e=e.replace(/¨E(\d+)E/g,function(a,s){var i=parseInt(s);return String.fromCharCode(i)}),e=d.converter._dispatch("unescapeSpecialChars.after",e,u,d),e}),r.subParser("makeMarkdown.blockquote",function(e,u){"use strict";var d="";if(e.hasChildNodes())for(var a=e.childNodes,s=a.length,i=0;i<s;++i){var c=r.subParser("makeMarkdown.node")(a[i],u);c!==""&&(d+=c)}return d=d.trim(),d="> "+d.split(`
`).join(`
> `),d}),r.subParser("makeMarkdown.codeBlock",function(e,u){"use strict";var d=e.getAttribute("language"),a=e.getAttribute("precodenum");return"```"+d+`
`+u.preList[a]+"\n```"}),r.subParser("makeMarkdown.codeSpan",function(e){"use strict";return"`"+e.innerHTML+"`"}),r.subParser("makeMarkdown.emphasis",function(e,u){"use strict";var d="";if(e.hasChildNodes()){d+="*";for(var a=e.childNodes,s=a.length,i=0;i<s;++i)d+=r.subParser("makeMarkdown.node")(a[i],u);d+="*"}return d}),r.subParser("makeMarkdown.header",function(e,u,d){"use strict";var a=new Array(d+1).join("#"),s="";if(e.hasChildNodes()){s=a+" ";for(var i=e.childNodes,c=i.length,t=0;t<c;++t)s+=r.subParser("makeMarkdown.node")(i[t],u)}return s}),r.subParser("makeMarkdown.hr",function(){"use strict";return"---"}),r.subParser("makeMarkdown.image",function(e){"use strict";var u="";return e.hasAttribute("src")&&(u+="!["+e.getAttribute("alt")+"](",u+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(u+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(u+=' "'+e.getAttribute("title")+'"'),u+=")"),u}),r.subParser("makeMarkdown.links",function(e,u){"use strict";var d="";if(e.hasChildNodes()&&e.hasAttribute("href")){var a=e.childNodes,s=a.length;d="[";for(var i=0;i<s;++i)d+=r.subParser("makeMarkdown.node")(a[i],u);d+="](",d+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(d+=' "'+e.getAttribute("title")+'"'),d+=")"}return d}),r.subParser("makeMarkdown.list",function(e,u,d){"use strict";var a="";if(!e.hasChildNodes())return"";for(var s=e.childNodes,i=s.length,c=e.getAttribute("start")||1,t=0;t<i;++t)if(!(typeof s[t].tagName>"u"||s[t].tagName.toLowerCase()!=="li")){var p="";d==="ol"?p=c.toString()+". ":p="- ",a+=p+r.subParser("makeMarkdown.listItem")(s[t],u),++c}return a+=`
<!-- -->
`,a.trim()}),r.subParser("makeMarkdown.listItem",function(e,u){"use strict";for(var d="",a=e.childNodes,s=a.length,i=0;i<s;++i)d+=r.subParser("makeMarkdown.node")(a[i],u);return/\n$/.test(d)?d=d.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):d+=`
`,d}),r.subParser("makeMarkdown.node",function(e,u,d){"use strict";d=d||!1;var a="";if(e.nodeType===3)return r.subParser("makeMarkdown.txt")(e,u);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var s=e.tagName.toLowerCase();switch(s){case"h1":d||(a=r.subParser("makeMarkdown.header")(e,u,1)+`

`);break;case"h2":d||(a=r.subParser("makeMarkdown.header")(e,u,2)+`

`);break;case"h3":d||(a=r.subParser("makeMarkdown.header")(e,u,3)+`

`);break;case"h4":d||(a=r.subParser("makeMarkdown.header")(e,u,4)+`

`);break;case"h5":d||(a=r.subParser("makeMarkdown.header")(e,u,5)+`

`);break;case"h6":d||(a=r.subParser("makeMarkdown.header")(e,u,6)+`

`);break;case"p":d||(a=r.subParser("makeMarkdown.paragraph")(e,u)+`

`);break;case"blockquote":d||(a=r.subParser("makeMarkdown.blockquote")(e,u)+`

`);break;case"hr":d||(a=r.subParser("makeMarkdown.hr")(e,u)+`

`);break;case"ol":d||(a=r.subParser("makeMarkdown.list")(e,u,"ol")+`

`);break;case"ul":d||(a=r.subParser("makeMarkdown.list")(e,u,"ul")+`

`);break;case"precode":d||(a=r.subParser("makeMarkdown.codeBlock")(e,u)+`

`);break;case"pre":d||(a=r.subParser("makeMarkdown.pre")(e,u)+`

`);break;case"table":d||(a=r.subParser("makeMarkdown.table")(e,u)+`

`);break;case"code":a=r.subParser("makeMarkdown.codeSpan")(e,u);break;case"em":case"i":a=r.subParser("makeMarkdown.emphasis")(e,u);break;case"strong":case"b":a=r.subParser("makeMarkdown.strong")(e,u);break;case"del":a=r.subParser("makeMarkdown.strikethrough")(e,u);break;case"a":a=r.subParser("makeMarkdown.links")(e,u);break;case"img":a=r.subParser("makeMarkdown.image")(e,u);break;default:a=e.outerHTML+`

`}return a}),r.subParser("makeMarkdown.paragraph",function(e,u){"use strict";var d="";if(e.hasChildNodes())for(var a=e.childNodes,s=a.length,i=0;i<s;++i)d+=r.subParser("makeMarkdown.node")(a[i],u);return d=d.trim(),d}),r.subParser("makeMarkdown.pre",function(e,u){"use strict";var d=e.getAttribute("prenum");return"<pre>"+u.preList[d]+"</pre>"}),r.subParser("makeMarkdown.strikethrough",function(e,u){"use strict";var d="";if(e.hasChildNodes()){d+="~~";for(var a=e.childNodes,s=a.length,i=0;i<s;++i)d+=r.subParser("makeMarkdown.node")(a[i],u);d+="~~"}return d}),r.subParser("makeMarkdown.strong",function(e,u){"use strict";var d="";if(e.hasChildNodes()){d+="**";for(var a=e.childNodes,s=a.length,i=0;i<s;++i)d+=r.subParser("makeMarkdown.node")(a[i],u);d+="**"}return d}),r.subParser("makeMarkdown.table",function(e,u){"use strict";var d="",a=[[],[]],s=e.querySelectorAll("thead>tr>th"),i=e.querySelectorAll("tbody>tr"),c,t;for(c=0;c<s.length;++c){var p=r.subParser("makeMarkdown.tableCell")(s[c],u),l="---";if(s[c].hasAttribute("style")){var o=s[c].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(o){case"text-align:left;":l=":---";break;case"text-align:right;":l="---:";break;case"text-align:center;":l=":---:";break}}a[0][c]=p.trim(),a[1][c]=l}for(c=0;c<i.length;++c){var h=a.push([])-1,n=i[c].getElementsByTagName("td");for(t=0;t<s.length;++t){var f=" ";typeof n[t]<"u"&&(f=r.subParser("makeMarkdown.tableCell")(n[t],u)),a[h].push(f)}}var _=3;for(c=0;c<a.length;++c)for(t=0;t<a[c].length;++t){var m=a[c][t].length;m>_&&(_=m)}for(c=0;c<a.length;++c){for(t=0;t<a[c].length;++t)c===1?a[c][t].slice(-1)===":"?a[c][t]=r.helper.padEnd(a[c][t].slice(-1),_-1,"-")+":":a[c][t]=r.helper.padEnd(a[c][t],_,"-"):a[c][t]=r.helper.padEnd(a[c][t],_);d+="| "+a[c].join(" | ")+` |
`}return d.trim()}),r.subParser("makeMarkdown.tableCell",function(e,u){"use strict";var d="";if(!e.hasChildNodes())return"";for(var a=e.childNodes,s=a.length,i=0;i<s;++i)d+=r.subParser("makeMarkdown.node")(a[i],u,!0);return d.trim()}),r.subParser("makeMarkdown.txt",function(e){"use strict";var u=e.nodeValue;return u=u.replace(/ +/g," "),u=u.replace(/¨NBSP;/g," "),u=r.helper.unescapeHTMLEntities(u),u=u.replace(/([*_~|`])/g,"\\$1"),u=u.replace(/^(\s*)>/g,"\\$1>"),u=u.replace(/^#/gm,"\\#"),u=u.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),u=u.replace(/^( {0,3}\d+)\./gm,"$1\\."),u=u.replace(/^( {0,3})([+-])/gm,"$1\\$2"),u=u.replace(/]([\s]*)\(/g,"\\]$1\\("),u=u.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),u});var ee=this;typeof define=="function"&&define.amd?define(function(){"use strict";return r}):typeof T<"u"&&T.exports?T.exports=r:ee.showdown=r}).call(W)});var oe={};se(oe,{default:()=>fe});var Z=ie(K()),fe={Converter:Z.Converter};return te(oe);})();


	npmCompilation['115c87258963fd94d34e6a96a9c4d27d'] = {};
npmCompilation['115c87258963fd94d34e6a96a9c4d27d']['Converter'] = _.default['Converter'];

})(npmCompilation);
if(!Object.hasOwn(window, "AvInstance")) {
	Object.defineProperty(window, "AvInstance", {
		get() {return Aventus?.Instance;}
	});

	(() => {
		Map.prototype._defaultHas = Map.prototype.has;
		Map.prototype._defaultSet = Map.prototype.set;
		Map.prototype._defaultGet = Map.prototype.get;
		Map.prototype.has = function(key) {
			if(Aventus.Watcher?.is(key)) {
				return Map.prototype._defaultHas.call(this,key.getTarget())
			}
			return Map.prototype._defaultHas.call(this,key);
		}

		Map.prototype.set = function(key, value) {
			if(Aventus.Watcher?.is(key)) {
				return Map.prototype._defaultSet.call(this, key.getTarget(), value)
			}
			return Map.prototype._defaultSet.call(this, key, value);
		}
		Map.prototype.get = function(key) {
			if(Aventus.Watcher?.is(key)) {
				return Map.prototype._defaultGet.call(this, key.getTarget())
			}
			return Map.prototype._defaultGet.call(this, key);
		}
	})();
>>>>>>> 8835a8f (Update to new version)
}
var Aventus;
(Aventus||(Aventus = {}));
(function (Aventus) {
const __as1 = (o, k, c) => { if (o[k] !== undefined) for (let w in o[k]) { c[w] = o[k][w] } o[k] = c; }
const moduleName = `Aventus`;
const _ = {};


let _n;
let sleep=function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
__as1(_, 'sleep', sleep);

let ActionGuard=class ActionGuard {
    /**
     * Map to store actions that are currently running.
     * @type {Map<any[], ((res: any) => void)[]>}
     * @private
     */
    runningAction = new Map();
    run(keys, action) {
        return new Promise(async (resolve) => {
            if (typeof keys == 'function') {
                action = keys;
                keys = [];
            }
            if (!action) {
                throw "No action inside the Mutex.run";
            }
            let actions = undefined;
            let runningKeys = Array.from(this.runningAction.keys());
            for (let runningKey of runningKeys) {
                if (runningKey.length == keys.length) {
                    let found = true;
                    for (let i = 0; i < keys.length; i++) {
                        if (runningKey[i] != keys[i]) {
                            found = false;
                            break;
                        }
                    }
                    if (found) {
                        actions = this.runningAction.get(runningKey);
                        break;
                    }
                }
            }
            if (actions) {
                actions.push((res) => {
                    resolve(res);
                });
            }
            else {
                this.runningAction.set(keys, []);
                let res = await action();
                let actions = this.runningAction.get(keys);
                if (actions) {
                    for (let action of actions) {
                        action(res);
                    }
                }
                this.runningAction.delete(keys);
                resolve(res);
            }
        });
    }
}
ActionGuard.Namespace=`Aventus`;
__as1(_, 'ActionGuard', ActionGuard);

let isClass=function isClass(v) {
    return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
}
__as1(_, 'isClass', isClass);

let ElementExtension=class ElementExtension {
    /**
     * Find a parent by custom check
     */
    static findParent(element, check, untilNode) {
        let el = element;
        if (el) {
            if (el instanceof ShadowRoot) {
                el = el.host;
            }
            else {
                el = el.parentNode;
            }
        }
        while (el) {
            if (check(el)) {
                return el;
            }
            if (el instanceof ShadowRoot) {
                el = el.host;
            }
            else {
                el = el.parentNode;
            }
            if (el == untilNode) {
                break;
            }
        }
        return null;
    }
    /**
     * Find a list of parent by custom check
     */
    static findParents(element, check, untilNode) {
        let result = [];
        let el = element;
        if (el) {
            if (el instanceof ShadowRoot) {
                el = el.host;
            }
            else {
                el = el.parentNode;
            }
        }
        while (el) {
            if (check(el)) {
                result.push(el);
            }
            if (el instanceof ShadowRoot) {
                el = el.host;
            }
            else {
                el = el.parentNode;
            }
            if (el == untilNode) {
                break;
            }
        }
        return result;
    }
    /**
     * Find a parent by tagname if exist Static.findParentByTag(this, "av-img")
     */
    static findParentByTag(element, tagname, untilNode) {
        if (Array.isArray(tagname)) {
            for (let i = 0; i < tagname.length; i++) {
                tagname[i] = tagname[i].toLowerCase();
            }
        }
        else {
            tagname = [tagname.toLowerCase()];
        }
        const checkFunc = (el) => {
            if (el instanceof Element) {
                return tagname.indexOf((el.nodeName || el.tagName).toLowerCase()) != -1;
            }
            return tagname.indexOf(el.nodeName.toLowerCase()) != -1;
        };
        return this.findParent(element, checkFunc, untilNode);
    }
    /**
     * Find a parent by class name if exist Static.findParentByClass(this, "my-class-img") = querySelector('.my-class-img')
     */
    static findParentByClass(element, classname, untilNode) {
        if (!Array.isArray(classname)) {
            classname = [classname];
        }
        const check = (el) => {
            for (let classnameTemp of classname) {
                if (el instanceof Element && el['classList'].contains(classnameTemp)) {
                    return true;
                }
            }
            return false;
        };
        return this.findParent(element, check, untilNode);
    }
    static findParentByType(element, types, untilNode) {
        if (!Array.isArray(types)) {
            types = [types];
        }
        let isValid = true;
        for (let type of types) {
            if (typeof type == "function" && type['prototype']['constructor'])
                continue;
            isValid = false;
        }
        if (isValid) {
            let checkFunc = (el) => {
                for (let type of types) {
                    const t = type;
                    if (el instanceof t) {
                        return true;
                    }
                }
                return false;
            };
            return this.findParent(element, checkFunc, untilNode);
        }
        console.error("you must provide a class inside this function");
        return null;
    }
    /**
     * Find list of parents by tagname
     */
    static findParentsByTag(element, tagname, untilNode) {
        let el = element;
        if (Array.isArray(tagname)) {
            for (let i = 0; i < tagname.length; i++) {
                tagname[i] = tagname[i].toLowerCase();
            }
        }
        else {
            tagname = [tagname.toLowerCase()];
        }
        let check = (el) => {
            if (el instanceof Element) {
                return tagname.indexOf((el.nodeName || el.tagName).toLowerCase()) != -1;
            }
            return tagname.indexOf(el.nodeName.toLowerCase()) != -1;
        };
        return this.findParents(element, check, untilNode);
    }
    /**
     * Check if element contains a child
     */
    static containsChild(element, child) {
        let rootScope = element.getRootNode();
        let elScope = child.getRootNode();
        while (elScope != rootScope) {
            if (!elScope['host']) {
                return false;
            }
            child = elScope['host'];
            elScope = elScope['host'].getRootNode();
        }
        return element.contains(child);
    }
    /**
     * Get element inside slot
     */
    static getElementsInSlot(element, slotName) {
        let result = [];
        if (element.shadowRoot) {
            let slotEl;
            if (slotName) {
                slotEl = element.shadowRoot.querySelector('slot[name="' + slotName + '"]');
            }
            else {
                slotEl = element.shadowRoot.querySelector("slot:not([name])");
                if (!slotEl) {
                    slotEl = element.shadowRoot.querySelector("slot");
                }
            }
            while (true) {
                if (!slotEl) {
                    return result;
                }
                var listChild = Array.from(slotEl.assignedElements());
                if (!listChild) {
                    return result;
                }
                let slotFound = false;
                for (let i = 0; i < listChild.length; i++) {
                    let child = listChild[i];
                    if (listChild[i].nodeName == "SLOT") {
                        slotEl = listChild[i];
                        slotFound = true;
                    }
                    else if (child instanceof HTMLElement) {
                        result.push(child);
                    }
                }
                if (!slotFound) {
                    return result;
                }
            }
        }
        return result;
    }
    /**
     * Get element inside slot
     */
    static getNodesInSlot(element, slotName) {
        let result = [];
        if (element.shadowRoot) {
            let slotEl;
            if (slotName) {
                slotEl = element.shadowRoot.querySelector('slot[name="' + slotName + '"]');
            }
            else {
                slotEl = element.shadowRoot.querySelector("slot:not([name])");
                if (!slotEl) {
                    slotEl = element.shadowRoot.querySelector("slot");
                }
            }
            while (true) {
                if (!slotEl) {
                    return result;
                }
                var listChild = Array.from(slotEl.assignedNodes());
                if (!listChild) {
                    return result;
                }
                let slotFound = false;
                for (let i = 0; i < listChild.length; i++) {
                    let child = listChild[i];
                    if (listChild[i].nodeName == "SLOT") {
                        slotEl = listChild[i];
                        slotFound = true;
                    }
                    else if (child instanceof Node) {
                        result.push(child);
                    }
                }
                if (!slotFound) {
                    return result;
                }
            }
        }
        return result;
    }
    /**
     * Get deeper element inside dom at the position X and Y
     */
    static getElementAtPosition(x, y, startFrom) {
        const _realTarget = (el, i = 0) => {
            if (i == 50) {
                debugger;
            }
            if (el.shadowRoot && x !== undefined && y !== undefined) {
                const elements = el.shadowRoot.elementsFromPoint(x, y);
                var newEl = elements.length > 0 ? elements[0] : null;
                if (newEl && newEl != el && (el.shadowRoot.contains(newEl) || el.contains(newEl))) {
                    return _realTarget(newEl, i + 1);
                }
            }
            return el;
        };
        if (startFrom == null) {
            startFrom = document.body;
        }
        return _realTarget(startFrom);
    }
    /**
     * Get active element from the define root
     */
    static getActiveElement(root = document) {
        if (!root)
            return null;
        let el = root.activeElement;
        while (el instanceof WebComponent) {
            let elTemp = el.shadowRoot?.activeElement;
            if (!elTemp)
                return el;
            el = elTemp;
        }
        return el;
    }
}
ElementExtension.Namespace=`Aventus`;
__as1(_, 'ElementExtension', ElementExtension);

let Style=class Style {
    static instance;
    static noAnimation;
    static defaultStyleSheets = {
        "@default": `:host{display:inline-block;box-sizing:border-box}:host *{box-sizing:border-box}`,
    };
    static store(name, content) {
        this.getInstance().store(name, content);
    }
    static get(name) {
        return this.getInstance().get(name);
    }
    static getAsString(name) {
        return this.getInstance().getAsString(name);
    }
    static sheetToString(stylesheet) {
        return this.getInstance().sheetToString(stylesheet);
    }
    static load(name, url) {
        return this.getInstance().load(name, url);
    }
    static appendToHead(name) {
        if (!document.head.querySelector(`style[data-name="${name}"]`)) {
            const styleNode = document.createElement('style');
            styleNode.setAttribute(`data-name`, name);
            styleNode.innerHTML = Style.getAsString(name);
            document.getElementsByTagName('head')[0].appendChild(styleNode);
        }
    }
    static refreshHead(name) {
        const styleNode = document.head.querySelector(`style[data-name="${name}"]`);
        if (styleNode) {
            styleNode.innerHTML = Style.getAsString(name);
        }
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Style();
        }
        return this.instance;
    }
    constructor() {
        for (let name in Style.defaultStyleSheets) {
            this.store(name, Style.defaultStyleSheets[name]);
        }
        Style.noAnimation = new CSSStyleSheet();
        Style.noAnimation.replaceSync(`:host{-webkit-transition: none !important;-moz-transition: none !important;-ms-transition: none !important;-o-transition: none !important;transition: none !important;}:host *{-webkit-transition: none !important;-moz-transition: none !important;-ms-transition: none !important;-o-transition: none !important;transition: none !important;}`);
    }
    stylesheets = new Map();
    async load(name, url) {
        try {
            let style = this.stylesheets.get(name);
            if (!style || style.cssRules.length == 0) {
                let txt = await (await fetch(url)).text();
                this.store(name, txt);
            }
        }
        catch (e) {
        }
    }
    store(name, content) {
        let style = this.stylesheets.get(name);
        if (!style) {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(content);
            this.stylesheets.set(name, sheet);
            return sheet;
        }
        else {
            style.replaceSync(content);
            Style.refreshHead(name);
            return style;
        }
    }
    get(name) {
        let style = this.stylesheets.get(name);
        if (!style) {
            style = this.store(name, "");
        }
        return style;
    }
    getAsString(name) {
        return this.sheetToString(this.get(name));
    }
    sheetToString(stylesheet) {
        return stylesheet.cssRules
            ? Array.from(stylesheet.cssRules)
                .map(rule => rule.cssText || '')
                .join('\n')
            : '';
    }
}
Style.Namespace=`Aventus`;
__as1(_, 'Style', Style);

let setValueToObject=function setValueToObject(path, obj, value) {
    path = path.replace(/\[(.*?)\]/g, '.$1');
    const val = (key) => {
        if (obj instanceof Map) {
            return obj.get(key);
        }
        return obj[key];
    };
    let splitted = path.split(".");
    for (let i = 0; i < splitted.length - 1; i++) {
        let split = splitted[i];
        let value = val(split);
        if (!value) {
            obj[split] = {};
            value = obj[split];
        }
        obj = value;
    }
    if (obj instanceof Map) {
        obj.set(splitted[splitted.length - 1], value);
    }
    else {
        obj[splitted[splitted.length - 1]] = value;
    }
}
__as1(_, 'setValueToObject', setValueToObject);

let Mutex=class Mutex {
    /**
     * Array to store functions waiting for the mutex to become available.
     * @type {((run: boolean) => void)[]}
     */
    waitingList = [];
    /**
    * Indicates whether the mutex is currently locked or not.
    * @type {boolean}
    */
    isLocked = false;
    /**
    * Waits for the mutex to become available and then acquires it.
    * @returns {Promise<boolean>} A Promise that resolves to true if the mutex was acquired successfully.
    */
    waitOne() {
        return new Promise((resolve) => {
            if (this.isLocked) {
                this.waitingList.push((run) => {
                    resolve(run);
                });
            }
            else {
                this.isLocked = true;
                resolve(true);
            }
        });
    }
    /**
     * Release the mutex
     */
    release() {
        let nextFct = this.waitingList.shift();
        if (nextFct) {
            nextFct(true);
        }
        else {
            this.isLocked = false;
        }
    }
    /**
     * Releases the mutex, allowing only the last function in the waiting list to acquire it.
     */
    releaseOnlyLast() {
        if (this.waitingList.length > 0) {
            let lastFct = this.waitingList.pop();
            for (let fct of this.waitingList) {
                fct(false);
            }
            this.waitingList = [];
            if (lastFct) {
                lastFct(true);
            }
        }
        else {
            this.isLocked = false;
        }
    }
    /**
     * Clears the mutex, removing all waiting functions and releasing the lock.
     */
    dispose() {
        this.waitingList = [];
        this.isLocked = false;
    }
    /**
     * Executes a callback function safely within the mutex lock and releases the lock afterward.
     * @template T - The type of the return value of the callback function.
     * @param {() => T} cb - The callback function to execute.
     * @returns {Promise<T | null>} A Promise that resolves to the result of the callback function or null if an error occurs.
     */
    async safeRun(cb) {
        let result = null;
        await this.waitOne();
        try {
            result = cb.apply(null, []);
        }
        catch (e) {
            console.error(e);
        }
        await this.release();
        return result;
    }
    /**
     * Executes an asynchronous callback function safely within the mutex lock and releases the lock afterward.
     * @template T - The type of the return value of the asynchronous callback function.
     * @param {() => Promise<T>} cb - The asynchronous callback function to execute.
     * @returns {Promise<T | null>} A Promise that resolves to the result of the asynchronous callback function or null if an error occurs.
     */
    async safeRunAsync(cb) {
        let result = null;
        await this.waitOne();
        try {
            result = await cb.apply(null, []);
        }
        catch (e) {
            console.error(e);
        }
        await this.release();
        return result;
    }
    /**
     * Executes a callback function safely within the mutex lock, allowing only the last function in the waiting list to acquire the lock, and releases the lock afterward.
     * @template T - The type of the return value of the callback function.
     * @param {() => T} cb - The callback function to execute.
     * @returns {Promise<T | null>} A Promise that resolves to the result of the callback function or null if an error occurs.
     */
    async safeRunLast(cb) {
        let result = null;
        if (await this.waitOne()) {
            try {
                result = cb.apply(null, []);
            }
            catch (e) {
                console.error(e);
            }
            await this.releaseOnlyLast();
        }
        return result;
    }
    /**
     * Executes an asynchronous callback function safely within the mutex lock, allowing only the last function in the waiting list to acquire the lock, and releases the lock afterward.
     * @template T - The type of the return value of the asynchronous callback function.
     * @param {() => Promise<T>} cb - The asynchronous callback function to execute.
     * @returns {Promise<T | undefined>} A Promise that resolves to the result of the asynchronous callback function or undefined if an error occurs.
     */
    async safeRunLastAsync(cb) {
        let result;
        if (await this.waitOne()) {
            try {
                result = await cb.apply(null, []);
            }
            catch (e) {
                console.error(e);
            }
            await this.releaseOnlyLast();
        }
        return result;
    }
}
Mutex.Namespace=`Aventus`;
__as1(_, 'Mutex', Mutex);

let NormalizedEvent=class NormalizedEvent {
    _event;
    get event() {
        return this._event;
    }
    constructor(event) {
        this._event = event;
    }
    getProp(prop) {
        if (prop in this.event) {
            return this.event[prop];
        }
        return undefined;
    }
    stopImmediatePropagation() {
        this.event.stopImmediatePropagation();
    }
    get clientX() {
        if ('clientX' in this.event) {
            return this.event.clientX;
        }
        else if ('touches' in this.event && this.event.touches.length > 0) {
            return this.event.touches[0].clientX;
        }
        return 0;
    }
    get clientY() {
        if ('clientY' in this.event) {
            return this.event.clientY;
        }
        else if ('touches' in this.event && this.event.touches.length > 0) {
            return this.event.touches[0].clientY;
        }
        return 0;
    }
    get pageX() {
        if ('pageX' in this.event) {
            return this.event.pageX;
        }
        else if ('touches' in this.event && this.event.touches.length > 0) {
            return this.event.touches[0].pageX;
        }
        return 0;
    }
    get pageY() {
        if ('pageY' in this.event) {
            return this.event.pageY;
        }
        else if ('touches' in this.event && this.event.touches.length > 0) {
            return this.event.touches[0].pageY;
        }
        return 0;
    }
    get type() {
        return this.event.type;
    }
    get target() {
        return this.event.target;
    }
    get timeStamp() {
        return this.event.timeStamp;
    }
    get pointerType() {
        if ('TouchEvent' in window && this._event instanceof TouchEvent)
            return "touch";
        return this.getProp("pointerType");
    }
    get button() {
        return this.getProp("button");
    }
    get isTouch() {
        if ('TouchEvent' in window && this._event instanceof TouchEvent)
            return true;
        return this._event.pointerType == "touch";
    }
}
NormalizedEvent.Namespace=`Aventus`;
__as1(_, 'NormalizedEvent', NormalizedEvent);

let Callback=class Callback {
    callbacks = new Map();
    /**
     * Clear all callbacks
     */
    clear() {
        this.callbacks.clear();
    }
    /**
     * Add a callback
     */
    add(cb, scope = null) {
        if (!this.callbacks.has(cb)) {
            this.callbacks.set(cb, scope);
        }
    }
    /**
     * Remove a callback
     */
    remove(cb) {
        this.callbacks.delete(cb);
    }
    /**
     * Trigger all callbacks
     */
    trigger(...args) {
        let result = [];
        let cbs = [...this.callbacks];
        for (let [cb, scope] of cbs) {
            result.push(cb.apply(scope, args));
        }
        return result;
    }
}
Callback.Namespace=`Aventus`;
__as1(_, 'Callback', Callback);

var HttpErrorCode;
(function (HttpErrorCode) {
    HttpErrorCode[HttpErrorCode["unknow"] = 0] = "unknow";
})(HttpErrorCode || (HttpErrorCode = {}));
__as1(_, 'HttpErrorCode', HttpErrorCode);

let compareObject=function compareObject(obj1, obj2, tableOrder = true) {
    if (Array.isArray(obj1)) {
        if (!Array.isArray(obj2)) {
            return false;
        }
        obj2 = obj2.slice();
        if (obj1.length !== obj2.length) {
            return false;
        }
        if (tableOrder) {
            for (let i = 0; i < obj1.length; i++) {
                if (!compareObject(obj1[i], obj2[i])) {
                    return false;
                }
            }
            return true;
        }
        else {
            for (let i = 0; i < obj1.length; i++) {
                let foundElement = false;
                for (let j = 0; j < obj2.length; j++) {
                    if (compareObject(obj1[i], obj2[j])) {
                        obj2.splice(j, 1);
                        foundElement = true;
                        break;
                    }
                }
                if (!foundElement) {
                    return false;
                }
            }
        }
        return true;
    }
    else if (typeof obj1 === 'object' && obj1 !== undefined && obj1 !== null) {
        if (typeof obj2 !== 'object' || obj2 === undefined || obj2 === null) {
            return false;
        }
        if (obj1 == obj2) {
            return true;
        }
        if (obj1 instanceof HTMLElement || obj2 instanceof HTMLElement) {
            return false;
        }
        if (obj1 instanceof Date || obj2 instanceof Date) {
            return obj1.toString() === obj2.toString();
        }
        let oneProxy = false;
        if (Watcher.is(obj1)) {
            oneProxy = true;
            obj1 = Watcher.extract(obj1, false);
        }
        if (Watcher.is(obj2)) {
            oneProxy = true;
            obj2 = Watcher.extract(obj2, false);
        }
        if (obj1 instanceof Map && obj2 instanceof Map) {
            if (obj1.size != obj2.size) {
                return false;
            }
            const keys = obj1.keys();
            for (let key in keys) {
                if (!obj2.has(key)) {
                    return false;
                }
                if (!compareObject(obj1.get(key), obj2.get(key))) {
                    return false;
                }
            }
            return true;
        }
        else {
            if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                return false;
            }
            for (let key in obj1) {
                if (oneProxy && Watcher['__reservedName'][key]) {
                    continue;
                }
                if (!(key in obj2)) {
                    return false;
                }
                if (!compareObject(obj1[key], obj2[key])) {
                    return false;
                }
            }
            return true;
        }
    }
    else {
        return obj1 === obj2;
    }
}
__as1(_, 'compareObject', compareObject);

let getValueFromObject=function getValueFromObject(path, obj) {
    if (path === undefined) {
        path = '';
    }
    path = path.replace(/\[(.*?)\]/g, '.$1');
    if (path == "") {
        return obj;
    }
    const val = (key) => {
        if (obj instanceof Map) {
            return obj.get(key);
        }
        return obj[key];
    };
    let splitted = path.split(".");
    for (let i = 0; i < splitted.length - 1; i++) {
        let split = splitted[i];
        let value = val(split);
        if (!value || typeof value !== 'object') {
            return undefined;
        }
        obj = value;
    }
    if (!obj || typeof obj !== 'object') {
        return undefined;
    }
    return val(splitted[splitted.length - 1]);
}
__as1(_, 'getValueFromObject', getValueFromObject);

var WatchAction;
(function (WatchAction) {
    WatchAction[WatchAction["CREATED"] = 0] = "CREATED";
    WatchAction[WatchAction["UPDATED"] = 1] = "UPDATED";
    WatchAction[WatchAction["DELETED"] = 2] = "DELETED";
})(WatchAction || (WatchAction = {}));
__as1(_, 'WatchAction', WatchAction);

let Signal=class Signal {
    __subscribes = [];
    _value;
    _onChange;
    get value() {
        Watcher._register?.register(this, "*", Watcher._register.version, "*");
        return this._value;
    }
    set value(item) {
        const oldValue = this._value;
        this._value = item;
        if (oldValue != item) {
            if (this._onChange) {
                this._onChange();
            }
            for (let fct of this.__subscribes) {
                fct(WatchAction.UPDATED, "*", item, []);
            }
        }
    }
    constructor(item, onChange) {
        this._value = item;
        this._onChange = onChange;
    }
    subscribe(fct) {
        let index = this.__subscribes.indexOf(fct);
        if (index == -1) {
            this.__subscribes.push(fct);
        }
    }
    unsubscribe(fct) {
        let index = this.__subscribes.indexOf(fct);
        if (index > -1) {
            this.__subscribes.splice(index, 1);
        }
    }
    destroy() {
        this.__subscribes = [];
    }
}
Signal.Namespace=`Aventus`;
__as1(_, 'Signal', Signal);

var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["OPTION"] = "OPTION";
})(HttpMethod || (HttpMethod = {}));
__as1(_, 'HttpMethod', HttpMethod);

let DateConverter=class DateConverter {
    static __converter = new DateConverter();
    static get converter() {
        return this.__converter;
    }
    static set converter(value) {
        this.__converter = value;
    }
    isStringDate(txt) {
        return /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3,6})Z$/.exec(txt) !== null;
    }
    fromString(txt) {
        return new Date(txt);
    }
    toString(date) {
        if (date.getFullYear() < 100) {
            return "0001-01-01T00:00:00.000Z";
        }
        return date.toISOString();
    }
}
DateConverter.Namespace=`Aventus`;
__as1(_, 'DateConverter', DateConverter);

let ConverterTransform=class ConverterTransform {
    transform(data) {
        return this.transformLoop(data);
    }
    createInstance(data) {
        if (data.$type) {
            let cst = Converter.info.get(data.$type);
            if (cst) {
                return new cst();
            }
        }
        return undefined;
    }
    beforeTransformObject(obj) {
    }
    afterTransformObject(obj) {
    }
    transformLoop(data) {
        if (data === null) {
            return data;
        }
        if (Array.isArray(data)) {
            let result = [];
            for (let element of data) {
                result.push(this.transformLoop(element));
            }
            return result;
        }
        if (data instanceof Date) {
            return data;
        }
        if (typeof data === 'object' && !/^\s*class\s+/.test(data.toString())) {
            let objTemp = this.createInstance(data);
            if (objTemp) {
                if (objTemp instanceof Map) {
                    if (data.values) {
                        for (const keyValue of data.values) {
                            objTemp.set(this.transformLoop(keyValue[0]), this.transformLoop(keyValue[1]));
                        }
                    }
                    return objTemp;
                }
                let obj = objTemp;
                this.beforeTransformObject(obj);
                if (obj.fromJSON) {
                    obj = obj.fromJSON(data);
                }
                else {
                    obj = Json.classFromJson(obj, data, {
                        transformValue: (key, value) => {
                            if (obj[key] instanceof Date) {
                                return value ? new Date(value) : null;
                            }
                            else if (typeof value == 'string' && DateConverter.converter.isStringDate(value)) {
                                return value ? DateConverter.converter.fromString(value) : null;
                            }
                            else if (obj[key] instanceof Map) {
                                let map = new Map();
                                if ("$type" in value && value['$type'] == "Aventus.Map") {
                                    value = value.values;
                                }
                                for (const keyValue of value) {
                                    map.set(this.transformLoop(keyValue[0]), this.transformLoop(keyValue[1]));
                                }
                                return map;
                            }
                            else if (obj instanceof Data) {
                                let cst = obj.constructor;
                                if (cst.$schema[key] == 'boolean') {
                                    return value ? true : false;
                                }
                                else if (cst.$schema[key] == 'number') {
                                    return isNaN(Number(value)) ? 0 : Number(value);
                                }
                                else if (cst.$schema[key] == 'number') {
                                    return isNaN(Number(value)) ? 0 : Number(value);
                                }
                                else if (cst.$schema[key] == 'Date') {
                                    return value ? new Date(value) : null;
                                }
                            }
                            return this.transformLoop(value);
                        }
                    });
                }
                this.afterTransformObject(obj);
                return obj;
            }
            let result = {};
            for (let key in data) {
                result[key] = this.transformLoop(data[key]);
            }
            return result;
        }
        if (typeof data == 'string' && /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/.exec(data)) {
            return new Date(data);
        }
        return data;
    }
    copyValuesClass(target, src, options) {
        const realOptions = {
            isValidKey: options?.isValidKey ?? (() => true),
            replaceKey: options?.replaceKey ?? ((key) => key),
            transformValue: options?.transformValue ?? ((key, value) => value),
        };
        this.__classCopyValues(target, src, realOptions);
    }
    __classCopyValues(target, src, options) {
        let props = Object.getOwnPropertyNames(target);
        for (let prop of props) {
            let propInfo = Object.getOwnPropertyDescriptor(target, prop);
            if (propInfo?.writable) {
                if (options.isValidKey(prop)) {
                    const _target = target;
                    const _src = src;
                    _target[options.replaceKey(prop)] = options.transformValue(prop, _src[prop]);
                }
            }
        }
        let cstTemp = target.constructor;
        while (cstTemp.prototype && cstTemp != Object.prototype) {
            props = Object.getOwnPropertyNames(cstTemp.prototype);
            for (let prop of props) {
                let propInfo = Object.getOwnPropertyDescriptor(cstTemp.prototype, prop);
                if (propInfo?.set && propInfo.get) {
                    if (options.isValidKey(prop)) {
                        const _target = target;
                        const _src = src;
                        _target[options.replaceKey(prop)] = options.transformValue(prop, _src[prop]);
                    }
                }
            }
            cstTemp = Object.getPrototypeOf(cstTemp);
        }
    }
}
ConverterTransform.Namespace=`Aventus`;
__as1(_, 'ConverterTransform', ConverterTransform);

let Json=class Json {
    /**
     * Converts a JavaScript class instance to a JSON object.
     * @template T - The type of the object to convert.
     * @param {T} obj - The object to convert to JSON.
     * @param {JsonToOptions} [options] - Options for JSON conversion.
     * @returns {{ [key: string | number]: any; }} Returns the JSON representation of the object.
     */
    static classToJson(obj, options) {
        const realOptions = {
            isValidKey: options?.isValidKey ?? (() => true),
            replaceKey: options?.replaceKey ?? ((key) => key),
            transformValue: options?.transformValue ?? ((key, value) => value),
            beforeEnd: options?.beforeEnd ?? ((res) => res)
        };
        return this.__classToJson(obj, realOptions);
    }
    static __classToJson(obj, options) {
        let result = {};
        let descriptors = Object.getOwnPropertyDescriptors(obj);
        for (let key in descriptors) {
            if (options.isValidKey(key))
                result[options.replaceKey(key)] = options.transformValue(key, descriptors[key].value);
        }
        let cst = obj.constructor;
        while (cst.prototype && cst != Object.prototype) {
            let descriptorsClass = Object.getOwnPropertyDescriptors(cst.prototype);
            for (let key in descriptorsClass) {
                if (options.isValidKey(key)) {
                    let descriptor = descriptorsClass[key];
                    if (descriptor?.get) {
                        const o = obj;
                        result[options.replaceKey(key)] = options.transformValue(key, o[key]);
                    }
                }
            }
            cst = Object.getPrototypeOf(cst);
        }
        result = options.beforeEnd(result);
        return result;
    }
    /**
    * Converts a JSON object to a JavaScript class instance.
    * @template T - The type of the object to convert.
    * @param {T} obj - The object to populate with JSON data.
    * @param {*} data - The JSON data to populate the object with.
    * @param {JsonFromOptions} [options] - Options for JSON deserialization.
    * @returns {T} Returns the populated object.
    */
    static classFromJson(obj, data, options) {
        let realOptions = {
            transformValue: options?.transformValue ?? ((key, value) => value),
            replaceUndefined: options?.replaceUndefined ?? false,
            replaceUndefinedWithKey: options?.replaceUndefinedWithKey ?? false,
        };
        return this.__classFromJson(obj, data, realOptions);
    }
    static __classFromJson(obj, data, options) {
        let props = Object.getOwnPropertyNames(obj);
        for (let prop of props) {
            let propUpperFirst = prop[0].toUpperCase() + prop.slice(1);
            let value = data[prop] === undefined ? data[propUpperFirst] : data[prop];
            if (value !== undefined || options.replaceUndefined || (options.replaceUndefinedWithKey && (Object.hasOwn(data, prop) || Object.hasOwn(data, propUpperFirst)))) {
                let propInfo = Object.getOwnPropertyDescriptor(obj, prop);
                if (propInfo?.writable) {
                    const o = obj;
                    o[prop] = options.transformValue(prop, value);
                }
            }
        }
        let cstTemp = obj.constructor;
        while (cstTemp.prototype && cstTemp != Object.prototype) {
            props = Object.getOwnPropertyNames(cstTemp.prototype);
            for (let prop of props) {
                let propUpperFirst = prop[0].toUpperCase() + prop.slice(1);
                let value = data[prop] === undefined ? data[propUpperFirst] : data[prop];
                if (value !== undefined || options.replaceUndefined || (options.replaceUndefinedWithKey && (Object.hasOwn(data, prop) || Object.hasOwn(data, propUpperFirst)))) {
                    let propInfo = Object.getOwnPropertyDescriptor(cstTemp.prototype, prop);
                    if (propInfo?.set) {
                        const o = obj;
                        o[prop] = options.transformValue(prop, value);
                    }
                }
            }
            cstTemp = Object.getPrototypeOf(cstTemp);
        }
        return obj;
    }
}
Json.Namespace=`Aventus`;
__as1(_, 'Json', Json);

let Converter=class Converter {
    /**
    * Map storing information about registered types.
    */
    static info = new Map([["Aventus.Map", Map]]);
    /**
    * Map storing schemas for registered types.
    */
    static schema = new Map();
    /**
     * Internal converter instance.
     */
    static __converter = new ConverterTransform();
    /**
     * Getter for the internal converter instance.
     */
    static get converterTransform() {
        return this.__converter;
    }
    /**
    * Sets the converter instance.
    * @param converter The converter instance to set.
    */
    static setConverter(converter) {
        this.__converter = converter;
    }
    /**
    * Registers a unique string type for any class.
    * @param $type The unique string type identifier.
    * @param cst The constructor function for the class.
    * @param schema Optional schema for the registered type.
    */
    static register($type, cst, schema) {
        this.info.set($type, cst);
        if (schema) {
            this.schema.set($type, schema);
        }
    }
    /**
     * Transforms the provided data using the current converter instance.
     * @template T
     * @param {*} data The data to transform.
     * @param {IConverterTransform} [converter] Optional converter instance to use for transformation.
     * @returns {T} Returns the transformed data.
     */
    static transform(data, converter) {
        if (!converter) {
            converter = this.converterTransform;
        }
        return converter.transform(data);
    }
    /**
     * Copies values from one class instance to another using the current converter instance.
     * @template T
     * @param {T} to The destination class instance to copy values into.
     * @param {T} from The source class instance to copy values from.
     * @param {ClassCopyOptions} [options] Optional options for the copy operation.
     * @param {IConverterTransform} [converter] Optional converter instance to use for the copy operation.
     * @returns {T} Returns the destination class instance with copied values.
     */
    static copyValuesClass(to, from, options, converter) {
        if (!converter) {
            converter = this.converterTransform;
        }
        return converter.copyValuesClass(to, from, options);
    }
}
Converter.Namespace=`Aventus`;
__as1(_, 'Converter', Converter);

let Data=// @Dependencies([{ type: Aventus.Converter, strong: true }, { type: Converter, strong: true }])
class Data {
    static converter = new Converter();
    /**
     * The schema for the class
     */
    static $schema;
    /**
     * The current namespace
     */
    static Namespace = "";
    /**
     * Get the unique type for the data. Define it as the namespace + class name
     */
    static get Fullname() { return this.Namespace + "." + this.name; }
    /**
     * The current namespace
     */
    get namespace() {
        return this.constructor['Namespace'];
    }
    /**
     * Get the unique type for the data. Define it as the namespace + class name
     */
    get $type() {
        return this.constructor['Fullname'];
    }
    /**
     * Get the name of the class
     */
    get className() {
        return this.constructor.name;
    }
    /**
     * Get a JSON for the current object
     */
    toJSON() {
        let toAvoid = ['className', 'namespace'];
        return Json.classToJson(this, {
            isValidKey: (key) => !toAvoid.includes(key)
        });
    }
    /**
     * Clone the object by transforming a parsed JSON string back into the original type
     */
    clone() {
        return Converter.transform(JSON.parse(JSON.stringify(this)));
    }
}
Data.Namespace=`Aventus`;
Data.$schema={"namespace":"string","$type":"string","className":"string"};
Converter.register(Data.Fullname, Data);
__as1(_, 'Data', Data);

let HttpResponse=class HttpResponse {
    get status() {
        return this.response.status;
    }
    get statusText() {
        return this.response.statusText;
    }
    get redirected() {
        return this.response.redirected;
    }
    get ok() {
        return this.response.ok;
    }
    get type() {
        return this.response.type;
    }
    get url() {
        return this.response.url;
    }
    get headers() {
        return this.response.headers;
    }
    response;
    constructor(response) {
        this.response = response;
    }
    bodyUsed = false;
    bodyContent;
    async json() {
        if (!this.bodyUsed) {
            this.bodyUsed = true;
            this.bodyContent = await this.response.json();
        }
        return Converter.transform(this.bodyContent);
    }
    async blob() {
        if (!this.bodyUsed) {
            this.bodyUsed = true;
            this.bodyContent = await this.response.blob();
        }
        return this.bodyContent;
    }
    async text() {
        if (!this.bodyUsed) {
            this.bodyUsed = true;
            this.bodyContent = await this.response.text();
        }
        return this.bodyContent;
    }
}
HttpResponse.Namespace=`Aventus`;
__as1(_, 'HttpResponse', HttpResponse);

let HttpCache=class HttpCache {
    static cache = new Map();
    static async fetch(fullUrl, request) {
        const key = this.generateCacheKey(fullUrl, request);
        if (key) {
            const value = this.cache.get(key);
            if (value)
                return value;
        }
        const result = await fetch(fullUrl, request);
        const response = new HttpResponse(result);
        if (key)
            this.cache.set(key, response);
        return response;
    }
    static clear(fullUrl, request) {
        const key = this.generateCacheKey(fullUrl, request);
        if (key) {
            if (this.cache.has(key)) {
                this.cache.delete(key);
            }
        }
    }
    static generateCacheKey(fullUrl, request) {
        const method = request.method;
        const body = request.body;
        let bodyKey = "";
        if (typeof body == 'string') {
            bodyKey = this.hashStringToInt(body) + '';
        }
        else if (body instanceof FormData) {
        }
        return fullUrl + "°" + method + "°" + bodyKey;
    }
    static hashStringToInt(str) {
        let hash = 0x811c9dc5;
        for (let i = 0; i < str.length; i++) {
            hash ^= str.charCodeAt(i);
            hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
        }
        return hash >>> 0;
    }
}
HttpCache.Namespace=`Aventus`;
__as1(_, 'HttpCache', HttpCache);

let GenericError=// @Dependencies([{ type: Aventus.Converter, strong: true }, { type: Converter, strong: true }])
class GenericError {
    static converter = new Converter();
    static get Fullname() { return "Aventus.GenericError"; }
    /**
     * Code for the error
     */
    code;
    /**
     * Description of the error
     */
    message;
    /**
     * Additional details related to the error.
     */
    details = [];
    /**
     * Creates a new instance of GenericError.
     * @param {EnumValue<T>} code - The error code.
     * @param {string | Error | unknown} message - The error message.
     */
    constructor(code, message) {
        this.code = code;
        if (message instanceof Error) {
            this.message = message.message;
        }
        else {
            this.message = message + '';
        }
    }
}
GenericError.Namespace=`Aventus`;
GenericError.$schema={"code":"Aventus.EnumValue","message":"string"};
Converter.register(GenericError.Fullname, GenericError);
__as1(_, 'GenericError', GenericError);

let VoidWithError=class VoidWithError {
    static get Fullname() { return "Aventus.VoidWithError"; }
    /**
     * Determine if the action is a success
     */
    get success() {
        return this.errors.length == 0;
    }
    /**
     * List of errors
     */
    errors = [];
    /**
     * Converts the current instance to a VoidWithError object.
     * @returns {VoidWithError} A new instance of VoidWithError with the same error list.
     */
    toGeneric() {
        const result = new VoidWithError();
        result.errors = this.errors;
        return result;
    }
    /**
    * Checks if the error list contains a specific error code.
    * @template U - The type of error, extending GenericError.
    * @template T - The type of the error code, which extends either number or Enum.
    * @param {EnumValue<T>} code - The error code to check for.
    * @param {new (...args: any[]) => U} [type] - Optional constructor function of the error type.
    * @returns {boolean} True if the error list contains the specified error code, otherwise false.
    */
    containsCode(code, type) {
        if (type) {
            for (let error of this.errors) {
                if (error instanceof type) {
                    if (error.code == code) {
                        return true;
                    }
                }
            }
        }
        else {
            for (let error of this.errors) {
                if (error.code == code) {
                    return true;
                }
            }
        }
        return false;
    }
    run(fct) {
        if (this.success) {
            let result = fct();
            if (!Array.isArray(result)) {
                result = result.errors;
            }
            if (result.length > 0) {
                this.errors = [...this.errors, ...result];
            }
        }
        return this;
    }
    async runAsync(fct) {
        if (this.success) {
            let result = await fct();
            if (!Array.isArray(result)) {
                result = result.errors;
            }
            if (result.length > 0) {
                this.errors = [...this.errors, ...result];
            }
        }
        return this;
    }
    extract(fct) {
        if (this.success) {
            let result = fct();
            if (result.success && result.result) {
                return result.result;
            }
            this.errors = [...this.errors, ...result.errors];
        }
        return undefined;
    }
    async extractAsync(fct) {
        if (this.success) {
            let result = await fct();
            if (result.success && result.result) {
                return result.result;
            }
            this.errors = [...this.errors, ...result.errors];
        }
        return undefined;
    }
}
VoidWithError.Namespace=`Aventus`;
VoidWithError.$schema={"success":"boolean","errors":"T[]"};
Converter.register(VoidWithError.Fullname, VoidWithError);
__as1(_, 'VoidWithError', VoidWithError);

let ResultWithError=class ResultWithError extends VoidWithError {
    static get Fullname() { return "Aventus.ResultWithError"; }
    /**
      * The result value of the action.
      * @type {U | undefined}
      */
    result;
    /**
     * Converts the current instance to a ResultWithError object.
     * @returns {ResultWithError<U>} A new instance of ResultWithError with the same error list and result value.
     */
    toGeneric() {
        const result = new ResultWithError();
        result.errors = this.errors;
        result.result = this.result;
        return result;
    }
    run(fct) {
        if (this.success) {
            let result = fct();
            if (!Array.isArray(result)) {
                result = result.errors;
            }
            if (result.length > 0) {
                this.errors = [...this.errors, ...result];
            }
            if (result instanceof ResultWithError && result.success && result.result) {
                this.result = result.result;
            }
        }
        return this;
    }
    async runAsync(fct) {
        if (this.success) {
            let result = await fct();
            if (!Array.isArray(result)) {
                result = result.errors;
            }
            if (result.length > 0) {
                this.errors = [...this.errors, ...result];
            }
            if (result instanceof ResultWithError && result.success && result.result) {
                this.result = result.result;
            }
        }
        return this;
    }
}
ResultWithError.Namespace=`Aventus`;
ResultWithError.$schema={...(VoidWithError?.$schema ?? {}), };
Converter.register(ResultWithError.Fullname, ResultWithError);
__as1(_, 'ResultWithError', ResultWithError);

let Effect=class Effect {
    callbacks = [];
    isInit = false;
    isDestroy = false;
    __subscribes = [];
    __allowChanged = [];
    version = 0;
    fct;
    constructor(fct) {
        this.fct = fct;
        if (this.autoInit()) {
            this.init();
        }
    }
    autoInit() {
        return true;
    }
    init() {
        this.isInit = true;
        this.run();
    }
    run() {
        this.version++;
        Watcher._registering.push(this);
        let result = this.fct();
        Watcher._registering.splice(Watcher._registering.length - 1, 1);
        for (let i = 0; i < this.callbacks.length; i++) {
            if (this.callbacks[i].version != this.version) {
                this.callbacks[i].receiver.unsubscribe(this.callbacks[i].cb);
                this.callbacks.splice(i, 1);
                i--;
            }
        }
        return result;
    }
    register(receiver, path, version, fullPath) {
        for (let info of this.callbacks) {
            if (info.receiver == receiver && info.path == path && receiver.__path == info.registerPath) {
                info.version = version;
                info.fullPath = fullPath;
                return;
            }
        }
        let cb;
        if (path == "*") {
            cb = (action, changePath, value, dones) => { this.onChange(action, changePath, value, dones); };
        }
        else {
            cb = (action, changePath, value, dones) => {
                if (changePath == path || changePath.startsWith(path + ".") || changePath.startsWith(path + "[")) {
                    // if(changePath == path) {
                    this.onChange(action, changePath, value, dones);
                }
            };
        }
        this.callbacks.push({
            receiver,
            path,
            registerPath: receiver.__path,
            cb,
            version,
            fullPath
        });
        receiver.subscribe(cb);
    }
    canChange(fct) {
        this.__allowChanged.push(fct);
    }
    checkCanChange(action, changePath, value, dones) {
        if (this.isDestroy) {
            return false;
        }
        for (let fct of this.__allowChanged) {
            if (!fct(action, changePath, value, dones)) {
                return false;
            }
        }
        return true;
    }
    onChange(action, changePath, value, dones) {
        if (!this.checkCanChange(action, changePath, value, dones)) {
            return;
        }
        this.run();
        for (let fct of this.__subscribes) {
            fct(action, changePath, value, dones);
        }
    }
    destroy() {
        this.isDestroy = true;
        this.clearCallbacks();
        this.isInit = false;
    }
    clearCallbacks() {
        for (let pair of this.callbacks) {
            pair.receiver.unsubscribe(pair.cb);
        }
        this.callbacks = [];
    }
    subscribe(fct) {
        let index = this.__subscribes.indexOf(fct);
        if (index == -1) {
            this.__subscribes.push(fct);
        }
    }
    unsubscribe(fct) {
        let index = this.__subscribes.indexOf(fct);
        if (index > -1) {
            this.__subscribes.splice(index, 1);
        }
    }
}
Effect.Namespace=`Aventus`;
__as1(_, 'Effect', Effect);

let Computed=class Computed extends Effect {
    _value;
    __path = "*";
    get value() {
        if (!this.isInit) {
            this.init();
        }
        Watcher._register?.register(this, "*", Watcher._register.version, "*");
        return this._value;
    }
    autoInit() {
        return false;
    }
    constructor(fct) {
        super(fct);
    }
    init() {
        this.isInit = true;
        this.computedValue();
    }
    computedValue() {
        this._value = this.run();
    }
    onChange(action, changePath, value, dones) {
        if (!this.checkCanChange(action, changePath, value, dones)) {
            return;
        }
        let oldValue = this._value;
        this.computedValue();
        if (oldValue === this._value) {
            return;
        }
        for (let fct of this.__subscribes) {
            fct(action, changePath, value, dones);
        }
    }
}
Computed.Namespace=`Aventus`;
__as1(_, 'Computed', Computed);

let Watcher=class Watcher {
    static isNative(obj) {
        if (obj instanceof Blob ||
            obj instanceof Element ||
            obj instanceof Window)
            return true;
        return false;
    }
    constructor() { }
    ;
    static __reservedName = {
        __path: '__path',
    };
    static __triggerForced = false;
    static _registering = [];
    static get _register() {
        return this._registering[this._registering.length - 1];
    }
    /**
     * Transform object into a watcher
     */
    static get(obj, onDataChanged) {
        if (obj == undefined) {
            console.error("You must define an objet / array for your proxy");
            return;
        }
        if (obj.__isProxy) {
            if (onDataChanged)
                obj.subscribe(onDataChanged);
            return obj;
        }
        const reservedName = this.__reservedName;
        const setProxyPath = (newProxy, newPath) => {
            if (newProxy instanceof Object && newProxy.__isProxy) {
                newProxy.__path = newPath;
            }
        };
        const jsonReplacer = (key, value) => {
            if (reservedName[key])
                return undefined;
            return value;
        };
        const addAlias = (otherBaseData, name, cb) => {
            let cbs = aliases.get(otherBaseData);
            if (!cbs) {
                cbs = [];
                aliases.set(otherBaseData, cbs);
            }
            cbs.push({
                name: name,
                fct: cb
            });
        };
        const deleteAlias = (otherBaseData, name) => {
            let cbs = aliases.get(otherBaseData);
            if (!cbs)
                return;
            for (let i = 0; i < cbs.length; i++) {
                if (cbs[i].name == name) {
                    cbs.splice(i, 1);
                    if (cbs.length == 0) {
                        aliases.delete(otherBaseData);
                    }
                    return;
                }
            }
        };
        const replaceByAlias = (target, element, prop, receiver, apply, out = {}) => {
            let fullInternalPath = "";
            if (Array.isArray(receiver)) {
                if (prop != "length") {
                    if (target.__path) {
                        fullInternalPath = target.__path;
                    }
                    fullInternalPath += "[" + prop + "]";
                }
            }
            else {
                if (target.__path) {
                    fullInternalPath = target.__path + '.';
                }
                fullInternalPath += prop;
            }
            if (receiver && internalAliases[fullInternalPath]) {
                internalAliases[fullInternalPath].unbind();
            }
            if (element instanceof Object && element.__isProxy) {
                let root = element.__root;
                if (root != proxyData.baseData) {
                    element.__validatePath();
                    let oldPath = element.__path ?? '';
                    let unbindElement = Watcher.extract(getValueFromObject(oldPath, root));
                    if (unbindElement === undefined) {
                        return element;
                    }
                    if (receiver == null) {
                        receiver = getValueFromObject(target.__path, realProxy);
                        if (internalAliases[fullInternalPath]) {
                            internalAliases[fullInternalPath].unbind();
                        }
                    }
                    if (apply) {
                        let result = this.isNative(target) ? Reflect.set(target, prop, unbindElement) : Reflect.set(target, prop, unbindElement, receiver);
                    }
                    element.__addAlias(proxyData.baseData, oldPath, (type, target, receiver2, value, prop2, dones) => {
                        let triggerPath;
                        if (prop2.startsWith("[") || fullInternalPath == "" || prop2 == "") {
                            triggerPath = fullInternalPath + prop2;
                        }
                        else {
                            triggerPath = fullInternalPath + "." + prop2;
                        }
                        if (type == 'DELETED' && internalAliases[triggerPath]) {
                            internalAliases[triggerPath].unbind();
                        }
                        triggerPath = triggerPath.replace(/\[(.*?)\]/g, '.$1');
                        let splitted = triggerPath.split(".");
                        let newProp = splitted.pop();
                        let newReceiver = getValueFromObject(splitted.join("."), realProxy);
                        if (newReceiver.getTarget(false) == target)
                            trigger(type, target, newReceiver, value, newProp ?? '', dones);
                    });
                    internalAliases[fullInternalPath] = {
                        unbind: () => {
                            delete internalAliases[fullInternalPath];
                            element.__deleteAlias(proxyData.baseData, oldPath);
                            deleteAlias(root, fullInternalPath);
                        }
                    };
                    addAlias(root, fullInternalPath, (type, target, receiver2, value, prop2, dones) => {
                        const pathSave = element.__path;
                        let proxy = element.__getProxy;
                        let triggerPath;
                        if (prop2.startsWith("[") || oldPath == "" || prop2 == "") {
                            triggerPath = oldPath + prop2;
                        }
                        else {
                            triggerPath = oldPath + "." + prop2;
                        }
                        triggerPath = triggerPath.replace(/\[(.*?)\]/g, '.$1');
                        let splitted = triggerPath.split(".");
                        let newProp = splitted.pop();
                        let newReceiver = getValueFromObject(splitted.join("."), proxy);
                        if (newReceiver.getTarget(false) == target)
                            element.__trigger(type, target, newReceiver, value, newProp, dones);
                        element.__path = pathSave;
                    });
                    out.otherRoot = root;
                    return unbindElement;
                }
            }
            return element;
        };
        let currentTrace = new Error().stack?.split("\n") ?? [];
        currentTrace.shift();
        currentTrace.shift();
        const aliases = new Map();
        const internalAliases = {};
        let proxyData = {
            baseData: {},
            callbacks: {},
            callbacksReverse: new Map(),
            avoidUpdate: [],
            pathToRemove: [],
            injectedDones: null,
            history: [{
                    object: JSON.parse(JSON.stringify(obj, jsonReplacer)),
                    trace: currentTrace,
                    action: 'init',
                    path: ''
                }],
            useHistory: false,
            getProxyObject(target, element, prop) {
                let newProxy;
                element = replaceByAlias(target, element, prop, null, true);
                if (element instanceof Object && element.__isProxy) {
                    newProxy = element;
                }
                else {
                    try {
                        if (element instanceof Computed) {
                            return element;
                        }
                        if (element instanceof HTMLElement) {
                            return element;
                        }
                        if (element instanceof Object) {
                            newProxy = new Proxy(element, this);
                        }
                        else {
                            return element;
                        }
                    }
                    catch {
                        return element;
                    }
                }
                let newPath = '';
                if (Array.isArray(target)) {
                    if (/^[0-9]*$/g.exec(prop)) {
                        if (target.__path) {
                            newPath = target.__path;
                        }
                        newPath += "[" + prop + "]";
                        setProxyPath(newProxy, newPath);
                    }
                    else {
                        newPath += "." + prop;
                        setProxyPath(newProxy, newPath);
                    }
                }
                else if (element instanceof Date) {
                    return element;
                }
                else {
                    if (target.__path) {
                        newPath = target.__path + '.';
                    }
                    newPath += prop;
                    setProxyPath(newProxy, newPath);
                }
                return newProxy;
            },
            tryCustomFunction(target, prop, receiver) {
                if (prop == "__isProxy") {
                    return true;
                }
                else if (prop == "__getProxy") {
                    return realProxy;
                }
                else if (prop == "__root") {
                    return this.baseData;
                }
                else if (prop == "__validatePath") {
                    return () => {
                        if (this.baseData == target) {
                            target.__path = "";
                        }
                    };
                }
                else if (prop == "__callbacks") {
                    return this.callbacks;
                }
                else if (prop == "subscribe") {
                    let path = receiver.__path;
                    return (cb) => {
                        if (!this.callbacks[path]) {
                            this.callbacks[path] = [];
                        }
                        this.callbacks[path].push(cb);
                        this.callbacksReverse.set(cb, path);
                    };
                }
                else if (prop == "unsubscribe") {
                    return (cb) => {
                        let oldPath = this.callbacksReverse.get(cb);
                        if (oldPath === undefined)
                            return;
                        if (!this.callbacks[oldPath]) {
                            return;
                        }
                        let index = this.callbacks[oldPath].indexOf(cb);
                        if (index > -1) {
                            this.callbacks[oldPath].splice(index, 1);
                        }
                        this.callbacksReverse.delete(cb);
                    };
                }
                else if (prop == "getHistory") {
                    return () => {
                        return this.history;
                    };
                }
                else if (prop == "clearHistory") {
                    this.history = [];
                }
                else if (prop == "enableHistory") {
                    return () => {
                        this.useHistory = true;
                    };
                }
                else if (prop == "disableHistory") {
                    return () => {
                        this.useHistory = false;
                    };
                }
                else if (prop == "getTarget") {
                    return (clear = true) => {
                        if (clear)
                            Watcher.clearReservedNames(target);
                        return target;
                    };
                }
                else if (prop == "toJSON") {
                    if (target.toJSON) {
                        return target.toJSON;
                    }
                    if (Array.isArray(receiver)) {
                        return () => {
                            let result = [];
                            for (let element of target) {
                                result.push(element);
                            }
                            return result;
                        };
                    }
                    return () => {
                        let result = {};
                        for (let key of Object.keys(target)) {
                            if (reservedName[key]) {
                                continue;
                            }
                            result[key] = target[key];
                        }
                        return result;
                    };
                }
                else if (prop == "__addAlias") {
                    return addAlias;
                }
                else if (prop == "__deleteAlias") {
                    return deleteAlias;
                }
                else if (prop == "__injectedDones") {
                    return (dones) => {
                        this.injectedDones = dones;
                    };
                }
                else if (prop == "__trigger") {
                    return trigger;
                }
                else if (prop == "__static_trigger") {
                    return (type) => {
                        Watcher.__triggerForced = true;
                        trigger(type, target, receiver, target, '');
                        Watcher.__triggerForced = false;
                    };
                }
                return undefined;
            },
            get(target, prop, receiver) {
                if (typeof prop == 'symbol') {
                    return Watcher.isNative(target) ? Reflect.get(target, prop) : Reflect.get(target, prop, receiver);
                }
                if (reservedName[prop]) {
                    return target[prop];
                }
                let customResult = this.tryCustomFunction(target, prop, receiver);
                if (customResult !== undefined) {
                    return customResult;
                }
                let element = target[prop];
                if (typeof (element) == 'function') {
                    if (Array.isArray(receiver)) {
                        let result;
                        if (prop == 'push') {
                            if (target.__isProxy) {
                                result = (el) => {
                                    let index = target.push(el);
                                    return index;
                                };
                            }
                            else {
                                result = (el) => {
                                    let index = target.length;
                                    let out = {};
                                    el = replaceByAlias(target, el, target.length + '', receiver, false, out);
                                    target.push(el);
                                    const dones = [];
                                    const dones2 = [];
                                    if (out.otherRoot) {
                                        dones.push(out.otherRoot);
                                        dones2.push(out.otherRoot);
                                    }
                                    trigger('CREATED', target, receiver, receiver[index], "[" + (index) + "]", dones);
                                    trigger('UPDATED', target, receiver, target.length, "length", dones2);
                                    return index;
                                };
                            }
                        }
                        else if (prop == 'splice') {
                            if (target.__isProxy) {
                                result = (index, nbRemove, ...insert) => {
                                    let res = target.splice(index, nbRemove, ...insert);
                                    return res;
                                };
                            }
                            else {
                                result = (index, nbRemove, ...insert) => {
                                    let oldValues = [];
                                    const extReceiver = Watcher.extract(receiver);
                                    for (let i = index; i < index + nbRemove; i++) {
                                        oldValues.push(extReceiver[i]);
                                    }
                                    let updateLength = nbRemove != insert.length;
                                    for (let i = 0; i < oldValues.length; i++) {
                                        target.splice((index + i), 1);
                                        trigger('DELETED', target, receiver, oldValues[i], "[" + index + "]");
                                    }
                                    for (let i = 0; i < insert.length; i++) {
                                        const out = {};
                                        let value = replaceByAlias(target, insert[i], (index + i) + '', receiver, false, out);
                                        const dones = out.otherRoot ? [out.otherRoot] : [];
                                        target.splice((index + i), 0, value);
                                        trigger('CREATED', target, receiver, receiver[(index + i)], "[" + (index + i) + "]", dones);
                                    }
                                    if (updateLength)
                                        trigger('UPDATED', target, receiver, target.length, "length");
                                    return target;
                                };
                            }
                        }
                        else if (prop == 'pop') {
                            if (target.__isProxy) {
                                result = () => {
                                    let res = target.pop();
                                    return res;
                                };
                            }
                            else {
                                result = () => {
                                    let index = target.length - 1;
                                    let oldValue = receiver.length ? receiver[receiver.length] : undefined;
                                    let res = target.pop();
                                    trigger('DELETED', target, receiver, oldValue, "[" + index + "]");
                                    trigger('UPDATED', target, receiver, target.length, "length");
                                    return res;
                                };
                            }
                        }
                        // else if(prop == 'find') {
                        else {
                            result = element.bind(target);
                        }
                        return result;
                    }
                    else if (target instanceof Map) {
                        let result;
                        if (prop == "set") {
                            if (target.__isProxy) {
                                result = (key, value) => {
                                    return target.set(key, value);
                                };
                            }
                            else {
                                result = (key, value) => {
                                    const out = {};
                                    let dones = [];
                                    let dones2 = [];
                                    key = Watcher.extract(key);
                                    value = replaceByAlias(target, value, key + '', receiver, false, out);
                                    if (out.otherRoot) {
                                        dones.push(out.otherRoot);
                                        dones2.push(out.otherRoot);
                                    }
                                    let result = target.set(key, value);
                                    trigger('CREATED', target, receiver, receiver.get(key), key + '', dones);
                                    trigger('UPDATED', target, receiver, target.size, "size", dones2);
                                    return result;
                                };
                            }
                        }
                        else if (prop == "clear") {
                            if (target.__isProxy) {
                                result = () => {
                                    return target.clear();
                                };
                            }
                            else {
                                result = () => {
                                    let keys = target.keys();
                                    for (let key of keys) {
                                        let oldValue = receiver.get(key);
                                        target.delete(key);
                                        trigger('DELETED', target, receiver, oldValue, key);
                                        trigger('UPDATED', target, receiver, target.size, "size");
                                    }
                                };
                            }
                        }
                        else if (prop == "delete") {
                            if (target.__isProxy) {
                                result = (key) => {
                                    return target.delete(key);
                                };
                            }
                            else {
                                result = (key) => {
                                    key = Watcher.extract(key);
                                    let oldValue = receiver.get(key);
                                    let res = target.delete(key);
                                    trigger('DELETED', target, receiver, oldValue, key + '');
                                    trigger('UPDATED', target, receiver, target.size, "size");
                                    return res;
                                };
                            }
                        }
                        else {
                            result = element.bind(target);
                        }
                        return result;
                    }
                    return element.bind(target);
                }
                if (element instanceof Computed) {
                    return element.value;
                }
                if (Watcher._registering.length > 0) {
                    let currentPath;
                    let fullPath;
                    let isArray = Array.isArray(receiver);
                    if (isArray && /^[0-9]*$/g.exec(prop)) {
                        fullPath = receiver.__path + "[" + prop + "]";
                        currentPath = "[" + prop + "]";
                    }
                    else {
                        fullPath = receiver.__path ? receiver.__path + '.' + prop : prop;
                        currentPath = prop;
                    }
                    Watcher._register?.register(receiver, currentPath, Watcher._register.version, fullPath);
                }
                if (typeof (element) == 'object') {
                    return this.getProxyObject(target, element, prop);
                }
                return Watcher.isNative(target) ? Reflect.get(target, prop) : Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                if (typeof prop == 'symbol') {
                    if (Watcher.isNative(target))
                        return Reflect.set(target, prop, value);
                    return Reflect.set(target, prop, value, receiver);
                }
                let oldValue = Watcher.isNative(target) ? Reflect.get(target, prop) : Reflect.get(target, prop, receiver);
                value = replaceByAlias(target, value, prop, receiver, true);
                if (value instanceof Signal) {
                    value = value.value;
                }
                let triggerChange = false;
                if (!reservedName[prop]) {
                    if (Array.isArray(receiver)) {
                        if (prop != "length") {
                            triggerChange = true;
                        }
                    }
                    else {
                        if (!compareObject(value, oldValue)) {
                            triggerChange = true;
                        }
                    }
                    if (Watcher.__triggerForced) {
                        triggerChange = true;
                    }
                }
                let result = Watcher.isNative(target) ? Reflect.set(target, prop, value) : Reflect.set(target, prop, value, receiver);
                if (triggerChange) {
                    let index = this.avoidUpdate.indexOf(prop);
                    if (index == -1) {
                        let dones = this.injectedDones ?? [];
                        this.injectedDones = null;
                        trigger('UPDATED', target, receiver, value, prop, dones);
                    }
                    else {
                        this.avoidUpdate.splice(index, 1);
                    }
                }
                return result;
            },
            deleteProperty(target, prop) {
                if (typeof prop == 'symbol') {
                    return Reflect.deleteProperty(target, prop);
                }
                let triggerChange = false;
                let pathToDelete = '';
                if (!reservedName[prop]) {
                    if (Array.isArray(target)) {
                        if (prop != "length") {
                            if (target.__path) {
                                pathToDelete = target.__path;
                            }
                            pathToDelete += "[" + prop + "]";
                            triggerChange = true;
                        }
                    }
                    else {
                        if (target.__path) {
                            pathToDelete = target.__path + '.';
                        }
                        pathToDelete += prop;
                        triggerChange = true;
                    }
                }
                if (internalAliases[pathToDelete]) {
                    internalAliases[pathToDelete].unbind();
                }
                if (target.hasOwnProperty(prop)) {
                    let oldValue = target[prop];
                    if (oldValue instanceof Effect || oldValue instanceof Signal) {
                        oldValue.destroy();
                    }
                    delete target[prop];
                    if (triggerChange) {
                        Watcher.clearReservedNames(oldValue);
                        trigger('DELETED', target, null, oldValue, prop);
                    }
                    return true;
                }
                return false;
            },
            defineProperty(target, prop, descriptor) {
                if (typeof prop == 'symbol') {
                    return Reflect.defineProperty(target, prop, descriptor);
                }
                let triggerChange = false;
                let newPath = '';
                if (!reservedName[prop]) {
                    if (Array.isArray(target)) {
                        if (prop != "length") {
                            if (target.__path) {
                                newPath = target.__path;
                            }
                            newPath += "[" + prop + "]";
                            if (!target.hasOwnProperty(prop)) {
                                triggerChange = true;
                            }
                        }
                    }
                    else {
                        if (target.__path) {
                            newPath = target.__path + '.';
                        }
                        newPath += prop;
                        if (!target.hasOwnProperty(prop)) {
                            triggerChange = true;
                        }
                    }
                }
                let result = Reflect.defineProperty(target, prop, descriptor);
                if (triggerChange) {
                    this.avoidUpdate.push(prop);
                    let proxyEl = this.getProxyObject(target, descriptor.value, prop);
                    target[prop] = proxyEl;
                    trigger('CREATED', target, null, proxyEl, prop);
                }
                return result;
            },
            ownKeys(target) {
                let result = Reflect.ownKeys(target);
                for (let i = 0; i < result.length; i++) {
                    let key = result[i];
                    if (typeof key == 'string') {
                        if (reservedName[key]) {
                            result.splice(i, 1);
                            i--;
                        }
                    }
                }
                return result;
            },
        };
        if (onDataChanged) {
            proxyData.callbacks[''] = [onDataChanged];
        }
        const trigger = (type, target, receiver, value, prop, dones = []) => {
            if (dones.includes(proxyData.baseData)) {
                return;
            }
            if (target.__isProxy) {
                return;
            }
            let rootPath;
            if (receiver == null) {
                rootPath = target.__path;
            }
            else {
                rootPath = receiver.__path;
            }
            if (rootPath != "") {
                if (Array.isArray(receiver)) {
                    if (prop && !prop.startsWith("[")) {
                        if (/^[0-9]*$/g.exec(prop)) {
                            rootPath += "[" + prop + "]";
                        }
                        else {
                            rootPath += "." + prop;
                        }
                    }
                    else {
                        rootPath += prop;
                    }
                }
                else {
                    if (prop && !prop.startsWith("[")) {
                        rootPath += ".";
                    }
                    rootPath += prop;
                }
            }
            else {
                rootPath = prop;
            }
            let stacks = [];
            if (proxyData.useHistory) {
                let allStacks = new Error().stack?.split("\n") ?? [];
                for (let i = allStacks.length - 1; i >= 0; i--) {
                    let current = allStacks[i].trim().replace("at ", "");
                    if (current.startsWith("Object.set") || current.startsWith("Proxy.result")) {
                        break;
                    }
                    stacks.push(current);
                }
            }
            dones.push(proxyData.baseData);
            let aliasesDone = [];
            const callbacks = { ...proxyData.callbacks };
            for (let name in callbacks) {
                callbacks[name] = [...callbacks[name]];
            }
            for (let name in callbacks) {
                // for(let name in proxyData.callbacks) {
                let pathToSend = rootPath;
                if (name !== "") {
                    let regex = new RegExp("^" + name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + "(\\.|(\\[)|$)");
                    if (!regex.test(rootPath)) {
                        let regex2 = new RegExp("^" + rootPath.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + "(\\.|(\\[)|$)");
                        if (!regex2.test(name)) {
                            continue;
                        }
                        else {
                            pathToSend = "";
                        }
                    }
                    else {
                        pathToSend = rootPath.replace(regex, "$2");
                    }
                }
                if (name === "" && proxyData.useHistory) {
                    proxyData.history.push({
                        object: JSON.parse(JSON.stringify(proxyData.baseData, jsonReplacer)),
                        trace: stacks.reverse(),
                        action: WatchAction[type],
                        path: pathToSend
                    });
                }
                let cbs = callbacks[name];
                for (let cb of cbs) {
                    try {
                        cb(WatchAction[type], pathToSend, value, dones);
                    }
                    catch (e) {
                        if (e != 'impossible')
                            console.error(e);
                    }
                }
                for (let [key, infos] of aliases) {
                    if (!dones.includes(key)) {
                        for (let info of infos) {
                            if (info.name == name) {
                                aliasesDone.push(key);
                                if (target.__path) {
                                    let oldPath = target.__path;
                                    info.fct(type, target, receiver, value, prop, dones);
                                    target.__path = oldPath;
                                }
                                else {
                                    info.fct(type, target, receiver, value, prop, dones);
                                }
                            }
                        }
                    }
                }
            }
            for (let [key, infos] of aliases) {
                if (!dones.includes(key) && !aliasesDone.includes(key)) {
                    for (let info of infos) {
                        let regex = new RegExp("^" + info.name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + "(\\.|(\\[)|$)");
                        if (!regex.test(rootPath)) {
                            continue;
                        }
                        let newProp = rootPath.replace(info.name, "");
                        if (newProp.startsWith(".")) {
                            newProp = newProp.slice(1);
                        }
                        if (target.__path) {
                            let oldPath = target.__path;
                            info.fct(type, target, receiver, value, newProp, dones);
                            target.__path = oldPath;
                        }
                        else {
                            info.fct(type, target, receiver, value, newProp, dones);
                        }
                    }
                }
            }
        };
        var realProxy = new Proxy(obj, proxyData);
        proxyData.baseData = obj;
        setProxyPath(realProxy, '');
        return realProxy;
    }
    static is(obj) {
        return typeof obj == 'object' && obj.__isProxy;
    }
    static clearReservedNames(data) {
        if (data instanceof Object && !data.__isProxy) {
            for (let key in this.__reservedName) {
                delete data[key];
            }
            for (let key in data) {
                this.clearReservedNames(data[key]);
            }
        }
        else if (Array.isArray(data)) {
            for (let item of data) {
                this.clearReservedNames(item);
            }
        }
    }
    static extract(obj, clearPath = false) {
        if (this.is(obj)) {
            return obj.getTarget(clearPath);
        }
        else {
            if (obj instanceof Object) {
                for (let key in this.__reservedName) {
                    delete obj[key];
                }
            }
        }
        return obj;
    }
    static trigger(type, target) {
        if (this.is(target)) {
            target.__static_trigger(type);
        }
    }
    /**
     * Create a computed variable that will watch any changes
     */
    static computed(fct) {
        const comp = new Computed(fct);
        return comp;
    }
    /**
     * Create an effect variable that will watch any changes
     */
    static effect(fct) {
        const comp = new Effect(fct);
        return comp;
    }
    /**
     * Create an effect variable that will watch any changes inside the fct and trigger the cb on change
     */
    static watch(fct, cb) {
        const comp = new Effect(fct);
        comp.subscribe(cb);
        return comp;
    }
    /**
     * Create a signal variable
     */
    static signal(item, onChange) {
        return new Signal(item, onChange);
    }
}
Watcher.Namespace=`Aventus`;
__as1(_, 'Watcher', Watcher);

let ComputedNoRecomputed=class ComputedNoRecomputed extends Computed {
    init() {
        this.isInit = true;
        Watcher._registering.push(this);
        this._value = this.fct();
        Watcher._registering.splice(Watcher._registering.length - 1, 1);
    }
    computedValue() {
        if (this.isInit)
            this._value = this.fct();
        else
            this.init();
    }
    run() { }
}
ComputedNoRecomputed.Namespace=`Aventus`;
__as1(_, 'ComputedNoRecomputed', ComputedNoRecomputed);

let HttpError=class HttpError extends GenericError {
}
HttpError.Namespace=`Aventus`;
HttpError.$schema={...(GenericError?.$schema ?? {}), };
Converter.register(HttpError.Fullname, HttpError);
__as1(_, 'HttpError', HttpError);

let HttpRequest=class HttpRequest {
    static options;
    static configure(options) {
        this.options = options;
    }
    request;
    url;
    methodSpoofing = false;
    useCache = false;
    constructor(url, method = HttpMethod.GET, body, methodSpoofing = false, useCache = false) {
        this.url = url;
        this.request = {};
        this.methodSpoofing = methodSpoofing;
        this.useCache = useCache;
        this.setMethod(method);
        this.prepareBody(body);
    }
    setUrl(url) {
        this.url = url;
    }
    toString() {
        return this.url + " : " + JSON.stringify(this.request);
    }
    setBody(body) {
        this.prepareBody(body);
    }
    setMethod(method) {
        this.request.method = method;
    }
    /**
     * Replace method Put/Delete by _method:"put" inside a form
     */
    enableMethodSpoofing() {
        this.methodSpoofing = true;
    }
    enableCache() {
        this.useCache = true;
    }
    disableCache() {
        this.useCache = false;
    }
    objectToFormData(obj, formData, parentKey) {
        formData = formData || new FormData();
        let byPass = obj;
        if (byPass.__isProxy) {
            obj = byPass.getTarget();
        }
        const keys = obj.toJSON ? Object.keys(obj.toJSON()) : Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            let value = obj[key];
            const newKey = parentKey ? `${parentKey}[${key}]` : key;
            if (value instanceof Date) {
                formData.append(newKey, DateConverter.converter.toString(value));
            }
            else if (typeof value === 'object' &&
                value !== null &&
                !(value instanceof File)) {
                if (Array.isArray(value)) {
                    for (let j = 0; j < value.length; j++) {
                        const arrayKey = `${newKey}[${j}]`;
                        this.objectToFormData({ [arrayKey]: value[j] }, formData);
                    }
                }
                else {
                    this.objectToFormData(value, formData, newKey);
                }
            }
            else {
                if (value === undefined || value === null) {
                    value = "";
                }
                else if (Watcher.is(value)) {
                    value = Watcher.extract(value);
                }
                formData.append(newKey, value);
            }
        }
        return formData;
    }
    jsonReplacer(key, value) {
        const t = this;
        if (t[key] instanceof Date) {
            return DateConverter.converter.toString(t[key]);
        }
        return value;
    }
    prepareBody(data) {
        if (!data) {
            return;
        }
        else if (data instanceof FormData) {
            this.request.body = data;
        }
        else {
            let useFormData = false;
            const analyseFormData = (obj) => {
                for (let key in obj) {
                    if (obj[key] instanceof File) {
                        useFormData = true;
                        break;
                    }
                    else if (Array.isArray(obj[key]) && obj[key].length > 0 && obj[key][0] instanceof File) {
                        useFormData = true;
                        break;
                    }
                    else if (typeof obj[key] == 'object' && !Array.isArray(obj[key]) && !(obj[key] instanceof Date)) {
                        analyseFormData(obj[key]);
                        if (useFormData) {
                            break;
                        }
                    }
                }
            };
            analyseFormData(data);
            if (useFormData) {
                this.request.body = this.objectToFormData(data);
            }
            else {
                this.request.body = JSON.stringify(data, this.jsonReplacer);
                this.setHeader("Content-Type", "Application/json");
            }
        }
        if (this.methodSpoofing) {
            if (this.request.method?.toUpperCase() == Aventus.HttpMethod.PUT) {
                if (this.request.body instanceof FormData) {
                    this.request.body.append("_method", Aventus.HttpMethod.PUT);
                    this.request.method = Aventus.HttpMethod.POST;
                }
            }
            else if (this.request.method?.toUpperCase() == Aventus.HttpMethod.DELETE) {
                if (this.request.body instanceof FormData) {
                    this.request.body.append("_method", Aventus.HttpMethod.DELETE);
                    this.request.method = Aventus.HttpMethod.POST;
                }
            }
        }
    }
    setHeader(name, value) {
        if (!this.request.headers) {
            this.request.headers = [];
        }
        this.request.headers.push([name, value]);
    }
    setCredentials(credentials) {
        this.request.credentials = credentials;
    }
    async _query(router) {
        let result = new ResultWithError();
        try {
            const isFull = this.url.match("https?://");
            if (!this.url.startsWith("/") && !isFull) {
                this.url = "/" + this.url;
            }
            if (HttpRequest.options?.beforeSend) {
                const beforeSendResult = await HttpRequest.options.beforeSend(this);
                result.errors = beforeSendResult.errors;
            }
            const fullUrl = isFull ? this.url : router ? router.options.url + this.url : this.url;
            if (this.useCache) {
                result.result = await HttpCache.fetch(fullUrl, this.request);
            }
            else {
                let response = await fetch(fullUrl, this.request);
                result.result = new HttpResponse(response);
            }
        }
        catch (e) {
            result.errors.push(new HttpError(HttpErrorCode.unknow, e));
        }
        return result;
    }
    async query(router) {
        let result = await this._query(router);
        if (HttpRequest.options?.responseMiddleware) {
            result = await HttpRequest.options.responseMiddleware(result, this);
        }
        return result;
    }
    async queryVoid(router) {
        let resultTemp = await this.query(router);
        let result = new VoidWithError();
        if (!resultTemp.success) {
            result.errors = resultTemp.errors;
            return result;
        }
        try {
            if (!resultTemp.result) {
                return result;
            }
            if (resultTemp.result.status != 204) {
                let tempResult = await resultTemp.result.json();
                if (tempResult instanceof VoidWithError) {
                    for (let error of tempResult.errors) {
                        result.errors.push(error);
                    }
                }
            }
        }
        catch (e) {
        }
        return result;
    }
    async queryJSON(router) {
        this.setHeader("Accept", "application/json");
        let resultTemp = await this.query(router);
        let result = new ResultWithError();
        if (!resultTemp.success) {
            result.errors = resultTemp.errors;
            return result;
        }
        try {
            if (!resultTemp.result) {
                return result;
            }
            let tempResult = await resultTemp.result.json();
            if (tempResult instanceof VoidWithError) {
                for (let error of tempResult.errors) {
                    result.errors.push(error);
                }
                if (tempResult instanceof ResultWithError) {
                    result.result = tempResult.result;
                }
            }
            else {
                result.result = tempResult;
            }
        }
        catch (e) {
            result.errors.push(new HttpError(HttpErrorCode.unknow, e));
        }
        return result;
    }
    async queryTxt(router) {
        this.setHeader("Accept", "text/plain");
        let resultTemp = await this.query(router);
        let result = new ResultWithError();
        if (!resultTemp.success) {
            result.errors = resultTemp.errors;
            return result;
        }
        try {
            if (!resultTemp.result) {
                return result;
            }
            result.result = await resultTemp.result.text();
        }
        catch (e) {
            result.errors.push(new HttpError(HttpErrorCode.unknow, e));
        }
        return result;
    }
    async queryBlob(router) {
        this.setHeader("Accept", "application/octet-stream");
        let resultTemp = await this.query(router);
        let result = new ResultWithError();
        if (!resultTemp.success) {
            result.errors = resultTemp.errors;
            return result;
        }
        try {
            if (!resultTemp.result) {
                return result;
            }
            result.result = await resultTemp.result.blob();
        }
        catch (e) {
            result.errors.push(new HttpError(HttpErrorCode.unknow, e));
        }
        return result;
    }
    clearCache(router) {
        const isFull = this.url.match("https?://");
        if (!this.url.startsWith("/") && !isFull) {
            this.url = "/" + this.url;
        }
        const fullUrl = isFull ? this.url : router ? router.options.url + this.url : this.url;
        HttpCache.clear(fullUrl, this.request);
    }
}
HttpRequest.Namespace=`Aventus`;
__as1(_, 'HttpRequest', HttpRequest);

let HttpRouter=class HttpRouter {
    static options;
    static configure(options) {
        this.options = options;
    }
    options;
    constructor() {
        this.options = this.defineOptions(this.defaultOptionsValue());
    }
    defaultOptionsValue() {
        return HttpRouter.options ?? {
            url: location.protocol + "//" + location.host
        };
    }
    defineOptions(options) {
        return options;
    }
    async get(url) {
        return await new HttpRequest(url).queryJSON(this);
    }
    async post(url, data) {
        return await new HttpRequest(url, HttpMethod.POST, data).queryJSON(this);
    }
    async put(url, data) {
        return await new HttpRequest(url, HttpMethod.PUT, data).queryJSON(this);
    }
    async delete(url, data) {
        return await new HttpRequest(url, HttpMethod.DELETE, data).queryJSON(this);
    }
    async option(url, data) {
        return await new HttpRequest(url, HttpMethod.OPTION, data).queryJSON(this);
    }
}
HttpRouter.Namespace=`Aventus`;
__as1(_, 'HttpRouter', HttpRouter);

let HttpRoute=class HttpRoute {
    router;
    constructor(router) {
        this.router = router ?? new HttpRouter();
    }
    getPrefix() {
        return "";
    }
}
HttpRoute.Namespace=`Aventus`;
__as1(_, 'HttpRoute', HttpRoute);

let PressManager=class PressManager {
    static globalConfig = {
        delayDblPress: 250,
        delayLongPress: 700,
        offsetDrag: 20
    };
    static configure(options) {
        this.globalConfig = options;
    }
    static create(options) {
        if (Array.isArray(options.element)) {
            let result = [];
            for (let el of options.element) {
                let cloneOpt = { ...options };
                cloneOpt.element = el;
                result.push(new PressManager(cloneOpt));
            }
            return result;
        }
        else {
            return new PressManager(options);
        }
    }
    static onEvent = new Callback();
    options;
    element;
    delayDblPress;
    delayLongPress;
    nbPress = 0;
    offsetDrag;
    dragDirection;
    state = {
        oneActionTriggered: null,
    };
    startPosition = { x: 0, y: 0 };
    customFcts = {};
    timeoutDblPress = 0;
    timeoutLongPress = 0;
    downEventSaved;
    useDblPress = false;
    stopPropagation = () => true;
    pointersRecord = {};
    functionsBinded = {
        downAction: (e) => { },
        downActionDelay: (e) => { },
        upAction: (e) => { },
        moveAction: (e) => { },
        childPressStart: (e) => { },
        childPressEnd: (e) => { },
        childPressMove: (e) => { }
    };
    /**
     * @param {*} options - The options
     * @param {HTMLElement | HTMLElement[]} options.element - The element to manage
     */
    constructor(options) {
        if (options.element === void 0) {
            throw 'You must provide an element';
        }
        this.offsetDrag = PressManager.globalConfig.offsetDrag !== undefined ? PressManager.globalConfig.offsetDrag : 20;
        this.dragDirection = 'XY';
        this.delayLongPress = PressManager.globalConfig.delayLongPress ?? 700;
        this.delayDblPress = PressManager.globalConfig.delayDblPress ?? 150;
        this.element = options.element;
        this.checkDragConstraint(options);
        this.assignValueOption(options);
        this.options = options;
        this.init();
    }
    /**
     * Get the current element focused by the PressManager
     */
    getElement() {
        return this.element;
    }
    checkDragConstraint(options) {
        if (options.onDrag !== void 0) {
            if (options.onDragStart === void 0) {
                options.onDragStart = (e) => { };
            }
            if (options.onDragEnd === void 0) {
                options.onDragEnd = (e) => { };
            }
        }
        if (options.onDragStart !== void 0) {
            if (options.onDrag === void 0) {
                options.onDrag = (e) => { };
            }
            if (options.onDragEnd === void 0) {
                options.onDragEnd = (e) => { };
            }
        }
        if (options.onDragEnd !== void 0) {
            if (options.onDragStart === void 0) {
                options.onDragStart = (e) => { };
            }
            if (options.onDrag === void 0) {
                options.onDrag = (e) => { };
            }
        }
    }
    assignValueOption(options) {
        if (PressManager.globalConfig.delayDblPress !== undefined) {
            this.delayDblPress = PressManager.globalConfig.delayDblPress;
        }
        if (options.delayDblPress !== undefined) {
            this.delayDblPress = options.delayDblPress;
        }
        if (PressManager.globalConfig.delayLongPress !== undefined) {
            this.delayLongPress = PressManager.globalConfig.delayLongPress;
        }
        if (options.delayLongPress !== undefined) {
            this.delayLongPress = options.delayLongPress;
        }
        if (PressManager.globalConfig.offsetDrag !== undefined) {
            this.offsetDrag = PressManager.globalConfig.offsetDrag;
        }
        if (options.offsetDrag !== undefined) {
            this.offsetDrag = options.offsetDrag;
        }
        if (options.dragDirection !== undefined) {
            this.dragDirection = options.dragDirection;
        }
        if (options.onDblPress !== undefined) {
            this.useDblPress = true;
        }
        if (PressManager.globalConfig.forceDblPress !== undefined) {
            this.useDblPress = PressManager.globalConfig.forceDblPress;
        }
        if (options.forceDblPress !== undefined) {
            this.useDblPress = options.forceDblPress;
        }
        if (typeof PressManager.globalConfig.stopPropagation == 'function') {
            this.stopPropagation = PressManager.globalConfig.stopPropagation;
        }
        else if (options.stopPropagation === false) {
            this.stopPropagation = () => false;
        }
        if (typeof options.stopPropagation == 'function') {
            this.stopPropagation = options.stopPropagation;
        }
        else if (options.stopPropagation === false) {
            this.stopPropagation = () => false;
        }
        if (!options.buttonAllowed)
            options.buttonAllowed = PressManager.globalConfig.buttonAllowed;
        if (!options.buttonAllowed)
            options.buttonAllowed = [0];
        if (!options.onEvent)
            options.onEvent = PressManager.globalConfig.onEvent;
    }
    bindAllFunction() {
        this.functionsBinded.downAction = this.downAction.bind(this);
        this.functionsBinded.downActionDelay = this.downActionDelay.bind(this);
        this.functionsBinded.moveAction = this.moveAction.bind(this);
        this.functionsBinded.upAction = this.upAction.bind(this);
        this.functionsBinded.childPressStart = this.childPressStart.bind(this);
        this.functionsBinded.childPressEnd = this.childPressEnd.bind(this);
        this.functionsBinded.childPressMove = this.childPressMove.bind(this);
    }
    init() {
        this.bindAllFunction();
        this.element.addEventListener("pointerdown", this.functionsBinded.downAction);
        this.element.addEventListener("touchstart", this.functionsBinded.downActionDelay);
        this.element.addEventListener("trigger_pointer_pressstart", this.functionsBinded.childPressStart);
        this.element.addEventListener("trigger_pointer_pressend", this.functionsBinded.childPressEnd);
        this.element.addEventListener("trigger_pointer_pressmove", this.functionsBinded.childPressMove);
    }
    identifyEvent(touch) {
        if ('Touch' in window && touch instanceof Touch)
            return touch.identifier;
        return touch.pointerId;
    }
    registerEvent(ev) {
        if ('TouchEvent' in window && ev instanceof TouchEvent) {
            for (let touch of ev.targetTouches) {
                const id = this.identifyEvent(touch);
                if (this.pointersRecord[id]) {
                    return false;
                }
                this.pointersRecord[id] = ev;
            }
            return true;
        }
        else {
            const id = this.identifyEvent(ev);
            if (this.pointersRecord[id]) {
                return false;
            }
            this.pointersRecord[id] = ev;
            return true;
        }
    }
    unregisterEvent(ev) {
        let result = true;
        if ('TouchEvent' in window && ev instanceof TouchEvent) {
            for (let touch of ev.changedTouches) {
                const id = this.identifyEvent(touch);
                if (!this.pointersRecord[id]) {
                    result = false;
                }
                else {
                    delete this.pointersRecord[id];
                }
            }
        }
        else {
            const id = this.identifyEvent(ev);
            if (!this.pointersRecord[id]) {
                result = false;
            }
            else {
                delete this.pointersRecord[id];
            }
        }
        return result;
    }
    genericDownAction(state, e) {
        this.downEventSaved = e;
        this.startPosition = { x: e.pageX, y: e.pageY };
        if (this.options.onLongPress) {
            this.timeoutLongPress = setTimeout(() => {
                if (!state.oneActionTriggered) {
                    if (this.options.onLongPress) {
                        if (this.options.onLongPress(e, this) !== false) {
                            state.oneActionTriggered = this;
                        }
                    }
                }
            }, this.delayLongPress);
        }
    }
    pointerEventTriggered = false;
    downActionDelay(_ev) {
        const ev = _ev;
        if (!this.pointerEventTriggered) {
            this.downAction(ev);
        }
        else {
            ev.stopImmediatePropagation();
        }
        setTimeout(() => {
            this.pointerEventTriggered = false;
        }, 0);
    }
    downAction(_ev) {
        const ev = _ev;
        this.pointerEventTriggered = true;
        const isFirst = Object.values(this.pointersRecord).length == 0;
        if (!this.registerEvent(ev)) {
            if (this.stopPropagation()) {
                ev.stopImmediatePropagation();
            }
            return;
        }
        const e = new NormalizedEvent(ev);
        if (this.options.onEvent) {
            this.options.onEvent(e);
        }
        PressManager.onEvent.trigger(e, this);
        if (e.button != undefined && !this.options.buttonAllowed?.includes(e.button)) {
            this.unregisterEvent(ev);
            return;
        }
        if (this.stopPropagation()) {
            e.stopImmediatePropagation();
        }
        this.customFcts = {};
        if (this.nbPress == 0 && isFirst) {
            this.state.oneActionTriggered = null;
            clearTimeout(this.timeoutDblPress);
        }
        if (isFirst) {
            document.addEventListener("pointerup", this.functionsBinded.upAction);
            document.addEventListener("pointercancel", this.functionsBinded.upAction);
            document.addEventListener("touchend", this.functionsBinded.upAction);
            document.addEventListener("touchcancel", this.functionsBinded.upAction);
            document.addEventListener("pointermove", this.functionsBinded.moveAction);
        }
        this.genericDownAction(this.state, e);
        if (this.options.onPressStart) {
            this.options.onPressStart(e, this);
            this.lastEmitEvent = e;
            // this.emitTriggerFunctionParent("pressstart", e);
        }
        this.emitTriggerFunction("pressstart", e);
    }
    genericUpAction(state, e) {
        clearTimeout(this.timeoutLongPress);
        if (state.oneActionTriggered == this) {
            if (this.options.onDragEnd) {
                this.options.onDragEnd(e, this);
            }
            else if (this.customFcts.src && this.customFcts.onDragEnd) {
                this.customFcts.onDragEnd(e, this.customFcts.src);
            }
        }
        else {
            if (this.useDblPress) {
                this.nbPress++;
                if (this.nbPress == 2) {
                    if (!state.oneActionTriggered) {
                        this.nbPress = 0;
                        if (this.options.onDblPress) {
                            if (this.options.onDblPress(e, this) !== false) {
                                state.oneActionTriggered = this;
                            }
                        }
                    }
                }
                else if (this.nbPress == 1) {
                    this.timeoutDblPress = setTimeout(() => {
                        this.nbPress = 0;
                        if (!state.oneActionTriggered) {
                            if (this.options.onPress) {
                                if (this.options.onPress(e, this) !== false) {
                                    state.oneActionTriggered = this;
                                }
                            }
                        }
                    }, this.delayDblPress);
                }
            }
            else {
                if (!state.oneActionTriggered) {
                    if (this.options.onPress) {
                        if (this.options.onPress(e, this) !== false) {
                            state.oneActionTriggered = this;
                        }
                    }
                }
            }
        }
    }
    upAction(_ev) {
        const ev = _ev;
        if (!this.unregisterEvent(ev)) {
            if (this.stopPropagation()) {
                ev.stopImmediatePropagation();
            }
            return;
        }
        const e = new NormalizedEvent(ev);
        if (this.options.onEvent) {
            this.options.onEvent(e);
        }
        PressManager.onEvent.trigger(e, this);
        if (this.stopPropagation()) {
            e.stopImmediatePropagation();
        }
        if (Object.values(this.pointersRecord).length == 0) {
            document.removeEventListener("pointerup", this.functionsBinded.upAction);
            document.removeEventListener("pointercancel", this.functionsBinded.upAction);
            document.removeEventListener("touchend", this.functionsBinded.upAction);
            document.removeEventListener("touchcancel", this.functionsBinded.upAction);
            document.removeEventListener("pointermove", this.functionsBinded.moveAction);
        }
        this.genericUpAction(this.state, e);
        if (this.options.onPressEnd) {
            this.options.onPressEnd(e, this);
            this.lastEmitEvent = e;
            // this.emitTriggerFunctionParent("pressend", e);
        }
        this.emitTriggerFunction("pressend", e);
    }
    genericMoveAction(state, e) {
        if (!state.oneActionTriggered) {
            let xDist = e.pageX - this.startPosition.x;
            let yDist = e.pageY - this.startPosition.y;
            let distance = 0;
            if (this.dragDirection == 'XY')
                distance = Math.sqrt(xDist * xDist + yDist * yDist);
            else if (this.dragDirection == 'X')
                distance = Math.abs(xDist);
            else
                distance = Math.abs(yDist);
            if (distance > this.offsetDrag && this.downEventSaved) {
                if (this.options.onDragStart) {
                    if (this.options.onDragStart(this.downEventSaved, this) !== false) {
                        state.oneActionTriggered = this;
                    }
                }
            }
        }
        else if (state.oneActionTriggered == this) {
            if (this.options.onDrag) {
                this.options.onDrag(e, this);
            }
            else if (this.customFcts.src && this.customFcts.onDrag) {
                this.customFcts.onDrag(e, this.customFcts.src);
            }
        }
    }
    moveAction(_ev) {
        const ev = _ev;
        const e = new NormalizedEvent(ev);
        if (this.options.onEvent) {
            this.options.onEvent(e);
        }
        PressManager.onEvent.trigger(e, this);
        if (this.stopPropagation()) {
            e.stopImmediatePropagation();
        }
        this.genericMoveAction(this.state, e);
        this.lastEmitEvent = e;
        // if(this.options.onDrag) {
        //     this.emitTriggerFunctionParent("pressmove", e);
        this.emitTriggerFunction("pressmove", e);
    }
    childPressStart(_e) {
        const e = _e;
        if (this.lastEmitEvent == e.detail.realEvent)
            return;
        this.genericDownAction(e.detail.state, e.detail.realEvent);
        if (this.options.onPressStart) {
            this.options.onPressStart(e.detail.realEvent, this);
        }
    }
    childPressEnd(_e) {
        const e = _e;
        this.unregisterEvent(e.detail.realEvent.event);
        if (Object.values(this.pointersRecord).length == 0) {
            document.removeEventListener("pointerup", this.functionsBinded.upAction);
            document.removeEventListener("pointercancel", this.functionsBinded.upAction);
            document.removeEventListener("touchend", this.functionsBinded.upAction);
            document.removeEventListener("touchcancel", this.functionsBinded.upAction);
            document.removeEventListener("pointermove", this.functionsBinded.moveAction);
        }
        if (this.lastEmitEvent == e.detail.realEvent)
            return;
        this.genericUpAction(e.detail.state, e.detail.realEvent);
        if (this.options.onPressEnd) {
            this.options.onPressEnd(e.detail.realEvent, this);
        }
    }
    childPressMove(_e) {
        const e = _e;
        if (this.lastEmitEvent == e.detail.realEvent)
            return;
        this.genericMoveAction(e.detail.state, e.detail.realEvent);
    }
    lastEmitEvent;
    emitTriggerFunction(action, e, el) {
        let ev = new CustomEvent("trigger_pointer_" + action, {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
                state: this.state,
                customFcts: this.customFcts,
                realEvent: e
            }
        });
        this.lastEmitEvent = e;
        if (!el) {
            el = this.element;
        }
        el.dispatchEvent(ev);
    }
    /**
     * Destroy the Press instance byremoving all events
     */
    destroy() {
        if (this.element) {
            this.element.removeEventListener("pointerdown", this.functionsBinded.downAction);
            this.element.removeEventListener("touchstart", this.functionsBinded.downActionDelay);
            this.element.removeEventListener("trigger_pointer_pressstart", this.functionsBinded.childPressStart);
            this.element.removeEventListener("trigger_pointer_pressend", this.functionsBinded.childPressEnd);
            this.element.removeEventListener("trigger_pointer_pressmove", this.functionsBinded.childPressMove);
            document.removeEventListener("pointerup", this.functionsBinded.upAction);
            document.removeEventListener("pointercancel", this.functionsBinded.upAction);
            document.removeEventListener("touchend", this.functionsBinded.upAction);
            document.removeEventListener("touchcancel", this.functionsBinded.upAction);
            document.removeEventListener("pointermove", this.functionsBinded.moveAction);
        }
    }
}
PressManager.Namespace=`Aventus`;
__as1(_, 'PressManager', PressManager);

let Uri=class Uri {
    static prepare(uri) {
        let params = [];
        let i = 0;
        let regexState = uri.replace(/{.*?}/g, (group, position) => {
            group = group.slice(1, -1);
            let splitted = group.split(":");
            let name = splitted[0].trim();
            let type = "string";
            let result = "([^\\/]+)";
            i++;
            if (splitted.length > 1) {
                if (splitted[1].trim() == "number") {
                    result = "([0-9]+)";
                    type = "number";
                }
            }
            params.push({
                name,
                type,
                position: i
            });
            return result;
        });
        regexState = regexState.replace(/\*/g, ".*?").toLowerCase();
        regexState = "^" + regexState + '$';
        return {
            regex: new RegExp(regexState),
            params
        };
    }
    static getParams(from, current) {
        if (typeof from == "string") {
            from = this.prepare(from);
        }
        let matches = from.regex.exec(current.toLowerCase());
        if (matches) {
            let slugs = {};
            for (let param of from.params) {
                if (param.type == "number") {
                    slugs[param.name] = Number(matches[param.position]);
                }
                else {
                    slugs[param.name] = matches[param.position];
                }
            }
            return slugs;
        }
        return null;
    }
    static isActive(from, current) {
        if (typeof from == "string") {
            from = this.prepare(from);
        }
        return from.regex.test(current);
    }
    static normalize(path) {
        const isAbsolute = path.startsWith('/');
        const parts = path.split('/');
        const normalizedParts = [];
        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === '..') {
                normalizedParts.pop();
            }
            else if (parts[i] !== '.' && parts[i] !== '') {
                normalizedParts.push(parts[i]);
            }
        }
        let normalizedPath = normalizedParts.join('/');
        if (isAbsolute) {
            normalizedPath = '/' + normalizedPath;
        }
        return normalizedPath;
    }
}
Uri.Namespace=`Aventus`;
__as1(_, 'Uri', Uri);

let State=class State {
    /**
     * Activate a custom state inside a specific manager
     * It ll be a generic state with no information inside exept name
     */
    static async activate(stateName, manager) {
        return await manager.setState(stateName);
    }
    /**
     * Activate this state inside a specific manager
     */
    async activate(manager) {
        return await manager.setState(this);
    }
    onActivate() {
    }
    onInactivate(nextState) {
    }
    async askChange(state, nextState) {
        return true;
    }
}
State.Namespace=`Aventus`;
__as1(_, 'State', State);

let EmptyState=class EmptyState extends State {
    localName;
    constructor(stateName) {
        super();
        this.localName = stateName;
    }
    /**
     * @inheritdoc
     */
    get name() {
        return this.localName;
    }
}
EmptyState.Namespace=`Aventus`;
__as1(_, 'EmptyState', EmptyState);

let StateManager=class StateManager {
    subscribers = {};
    static canBeActivate(statePattern, stateName) {
        let stateInfo = Uri.prepare(statePattern);
        return stateInfo.regex.test(stateName);
    }
    activeState;
    changeStateMutex = new Mutex();
    canChangeStateCbs = [];
    afterStateChanged = new Callback();
    /**
     * Subscribe actions for a state or a state list
     */
    subscribe(statePatterns, callbacks, autoActiveState = true) {
        if (!callbacks.active && !callbacks.inactive && !callbacks.askChange) {
            this._log(`Trying to subscribe to state : ${statePatterns} with no callbacks !`, "warning");
            return;
        }
        if (!Array.isArray(statePatterns)) {
            statePatterns = [statePatterns];
        }
        for (let statePattern of statePatterns) {
            if (!this.subscribers.hasOwnProperty(statePattern)) {
                let res = Uri.prepare(statePattern);
                let isActive = this.activeState !== undefined && res.regex.test(this.activeState.name);
                this.subscribers[statePattern] = {
                    "regex": res.regex,
                    "params": res.params,
                    "callbacks": {
                        "active": [],
                        "inactive": [],
                        "askChange": [],
                    },
                    "isActive": isActive,
                };
            }
            if (callbacks.active) {
                if (!Array.isArray(callbacks.active)) {
                    callbacks.active = [callbacks.active];
                }
                for (let activeFct of callbacks.active) {
                    this.subscribers[statePattern].callbacks.active.push(activeFct);
                    if (this.subscribers[statePattern].isActive && this.activeState && autoActiveState) {
                        let slugs = Uri.getParams(this.subscribers[statePattern], this.activeState.name);
                        if (slugs) {
                            activeFct(this.activeState, slugs);
                        }
                    }
                }
            }
            if (callbacks.inactive) {
                if (!Array.isArray(callbacks.inactive)) {
                    callbacks.inactive = [callbacks.inactive];
                }
                for (let inactiveFct of callbacks.inactive) {
                    this.subscribers[statePattern].callbacks.inactive.push(inactiveFct);
                }
            }
            if (callbacks.askChange) {
                if (!Array.isArray(callbacks.askChange)) {
                    callbacks.askChange = [callbacks.askChange];
                }
                for (let askChangeFct of callbacks.askChange) {
                    this.subscribers[statePattern].callbacks.askChange.push(askChangeFct);
                }
            }
        }
    }
    /**
     *
     */
    activateAfterSubscribe(statePatterns, callbacks) {
        if (!Array.isArray(statePatterns)) {
            statePatterns = [statePatterns];
        }
        for (let statePattern of statePatterns) {
            if (callbacks.active) {
                if (!Array.isArray(callbacks.active)) {
                    callbacks.active = [callbacks.active];
                }
                for (let activeFct of callbacks.active) {
                    if (this.subscribers[statePattern].isActive && this.activeState) {
                        let slugs = Uri.getParams(this.subscribers[statePattern], this.activeState.name);
                        if (slugs) {
                            activeFct(this.activeState, slugs);
                        }
                    }
                }
            }
        }
    }
    /**
     * Unsubscribe actions for a state or a state list
     */
    unsubscribe(statePatterns, callbacks) {
        if (!callbacks.active && !callbacks.inactive && !callbacks.askChange) {
            this._log(`Trying to unsubscribe to state : ${statePatterns} with no callbacks !`, "warning");
            return;
        }
        if (!Array.isArray(statePatterns)) {
            statePatterns = [statePatterns];
        }
        for (let statePattern of statePatterns) {
            if (this.subscribers[statePattern]) {
                if (callbacks.active) {
                    if (!Array.isArray(callbacks.active)) {
                        callbacks.active = [callbacks.active];
                    }
                    for (let activeFct of callbacks.active) {
                        let index = this.subscribers[statePattern].callbacks.active.indexOf(activeFct);
                        if (index !== -1) {
                            this.subscribers[statePattern].callbacks.active.splice(index, 1);
                        }
                    }
                }
                if (callbacks.inactive) {
                    if (!Array.isArray(callbacks.inactive)) {
                        callbacks.inactive = [callbacks.inactive];
                    }
                    for (let inactiveFct of callbacks.inactive) {
                        let index = this.subscribers[statePattern].callbacks.inactive.indexOf(inactiveFct);
                        if (index !== -1) {
                            this.subscribers[statePattern].callbacks.inactive.splice(index, 1);
                        }
                    }
                }
                if (callbacks.askChange) {
                    if (!Array.isArray(callbacks.askChange)) {
                        callbacks.askChange = [callbacks.askChange];
                    }
                    for (let askChangeFct of callbacks.askChange) {
                        let index = this.subscribers[statePattern].callbacks.askChange.indexOf(askChangeFct);
                        if (index !== -1) {
                            this.subscribers[statePattern].callbacks.askChange.splice(index, 1);
                        }
                    }
                }
                if (this.subscribers[statePattern].callbacks.active.length === 0 &&
                    this.subscribers[statePattern].callbacks.inactive.length === 0 &&
                    this.subscribers[statePattern].callbacks.askChange.length === 0) {
                    delete this.subscribers[statePattern];
                }
            }
        }
    }
    onAfterStateChanged(cb) {
        this.afterStateChanged.add(cb);
    }
    offAfterStateChanged(cb) {
        this.afterStateChanged.remove(cb);
    }
    assignDefaultState(stateName) {
        return new EmptyState(stateName);
    }
    canChangeState(cb) {
        this.canChangeStateCbs.push(cb);
    }
    /**
     * Activate a current state
     */
    async setState(state) {
        let result = await this.changeStateMutex.safeRunLastAsync(async () => {
            let stateToUse;
            if (typeof state == "string") {
                stateToUse = this.assignDefaultState(state);
            }
            else {
                stateToUse = state;
            }
            if (!stateToUse) {
                this._log("state is undefined", "error");
                this.changeStateMutex.release();
                return false;
            }
            for (let cb of this.canChangeStateCbs) {
                if (!(await cb(stateToUse))) {
                    return false;
                }
            }
            let canChange = true;
            if (this.activeState) {
                let activeToInactive = [];
                let inactiveToActive = [];
                let triggerActive = [];
                canChange = await this.activeState.askChange(this.activeState, stateToUse);
                if (canChange) {
                    for (let statePattern in this.subscribers) {
                        let subscriber = this.subscribers[statePattern];
                        if (subscriber.isActive) {
                            let clone = [...subscriber.callbacks.askChange];
                            let currentSlug = Uri.getParams(subscriber, this.activeState.name);
                            if (currentSlug) {
                                for (let i = 0; i < clone.length; i++) {
                                    let askChange = clone[i];
                                    if (!await askChange(this.activeState, stateToUse, currentSlug)) {
                                        canChange = false;
                                        break;
                                    }
                                }
                            }
                            let slugs = Uri.getParams(subscriber, stateToUse.name);
                            if (slugs === null) {
                                activeToInactive.push(subscriber);
                            }
                            else {
                                triggerActive.push({
                                    subscriber: subscriber,
                                    params: slugs
                                });
                            }
                        }
                        else {
                            let slugs = Uri.getParams(subscriber, stateToUse.name);
                            if (slugs) {
                                inactiveToActive.push({
                                    subscriber,
                                    params: slugs
                                });
                            }
                        }
                        if (!canChange) {
                            break;
                        }
                    }
                }
                if (canChange) {
                    const oldState = this.activeState;
                    this.activeState = stateToUse;
                    oldState.onInactivate(stateToUse);
                    for (let subscriber of activeToInactive) {
                        subscriber.isActive = false;
                        let oldSlug = Uri.getParams(subscriber, oldState.name);
                        if (oldSlug) {
                            let oldSlugNotNull = oldSlug;
                            let callbacks = [...subscriber.callbacks.inactive];
                            for (let callback of callbacks) {
                                callback(oldState, stateToUse, oldSlugNotNull);
                            }
                        }
                    }
                    for (let trigger of triggerActive) {
                        let callbacks = [...trigger.subscriber.callbacks.active];
                        for (let callback of callbacks) {
                            callback(stateToUse, trigger.params);
                        }
                    }
                    for (let trigger of inactiveToActive) {
                        trigger.subscriber.isActive = true;
                        let callbacks = [...trigger.subscriber.callbacks.active];
                        for (let callback of callbacks) {
                            callback(stateToUse, trigger.params);
                        }
                    }
                    stateToUse.onActivate();
                }
            }
            else {
                this.activeState = stateToUse;
                for (let key in this.subscribers) {
                    let slugs = Uri.getParams(this.subscribers[key], stateToUse.name);
                    if (slugs) {
                        let slugsNotNull = slugs;
                        this.subscribers[key].isActive = true;
                        let callbacks = [...this.subscribers[key].callbacks.active];
                        for (let callback of callbacks) {
                            callback(stateToUse, slugsNotNull);
                        }
                    }
                }
                stateToUse.onActivate();
            }
            this.afterStateChanged.trigger();
            return true;
        });
        return result ?? false;
    }
    getState() {
        return this.activeState;
    }
    /**
     * Check if a state is in the subscribers and active, return true if it is, false otherwise
     */
    isStateActive(statePattern) {
        return Uri.isActive(statePattern, this.activeState?.name ?? '');
    }
    /**
     * Get slugs information for the current state, return null if state isn't active
     */
    getStateSlugs(statePattern) {
        return Uri.getParams(statePattern, this.activeState?.name ?? '');
    }
    // 0 = error only / 1 = errors and warning / 2 = error, warning and logs (not implemented)
    logLevel() {
        return 0;
    }
    _log(msg, type) {
        if (type === "error") {
            console.error(msg);
        }
        else if (type === "warning" && this.logLevel() > 0) {
            console.warn(msg);
        }
        else if (type === "info" && this.logLevel() > 1) {
            console.log(msg);
        }
    }
}
StateManager.Namespace=`Aventus`;
__as1(_, 'StateManager', StateManager);

let TemplateContext=class TemplateContext {
    data = {};
    comp;
    computeds = [];
    watch;
    registry;
    isDestroyed = false;
    constructor(component, data = {}, parentContext, registry) {
        this.comp = component;
        this.registry = registry;
        this.watch = Watcher.get({});
        let that = this;
        for (let key in data) {
            if (data[key].__isProxy) {
                Object.defineProperty(this.data, key, {
                    get() {
                        return data[key];
                    }
                });
            }
            else {
                this.watch[key] = data[key];
                Object.defineProperty(this.data, key, {
                    get() {
                        return that.watch[key];
                    }
                });
            }
        }
        if (parentContext) {
            const descriptors = Object.getOwnPropertyDescriptors(parentContext.data);
            for (let name in descriptors) {
                Object.defineProperty(this.data, name, {
                    get() {
                        return parentContext.data[name];
                    }
                });
            }
        }
    }
    print(value) {
        return value == null ? "" : value + "";
    }
    registerIndex() {
        let name = "index";
        let i = 0;
        let fullName = name + i;
        while (this.watch[fullName] !== undefined) {
            i++;
            fullName = name + i;
        }
        return fullName;
    }
    registerLoop(dataName, _indexValue, _indexName, indexName, itemName, onThis) {
        this.watch[_indexName] = _indexValue;
        let getItems;
        let mustBeRecomputed = /if|switch|\?|\[.+?\]/g.test(dataName);
        let _class = mustBeRecomputed ? Computed : ComputedNoRecomputed;
        if (!onThis) {
            getItems = new _class(() => {
                return getValueFromObject(dataName, this.data);
            });
        }
        else {
            dataName = dataName.replace(/^this\./, '');
            getItems = new _class(() => {
                return getValueFromObject(dataName, this.comp);
            });
        }
        let getIndex = new ComputedNoRecomputed(() => {
            let items = getItems.value;
            if (!items)
                throw 'impossible';
            let keys = Object.keys(items);
            let index = keys[_getIndex.value];
            if (/^[0-9]+$/g.test(index))
                return Number(index);
            return index;
        });
        let getItem = new ComputedNoRecomputed(() => {
            let items = getItems.value;
            if (!items)
                throw 'impossible';
            let keys = Object.keys(items);
            let index = keys[_getIndex.value];
            let element = items[index];
            if (element === undefined && (Array.isArray(items) || !items)) {
                if (this.registry) {
                    let indexNb = Number(_getIndex.value);
                    if (!isNaN(indexNb)) {
                        this.registry.templates[indexNb].destructor();
                        this.registry.templates.splice(indexNb, 1);
                        for (let i = indexNb; i < this.registry.templates.length; i++) {
                            this.registry.templates[i].context.decreaseIndex(_indexName);
                        }
                    }
                }
            }
            return element;
        });
        let _getIndex = new ComputedNoRecomputed(() => {
            return this.watch[_indexName];
        });
        this.computeds.push(getIndex);
        this.computeds.push(getItem);
        this.computeds.push(_getIndex);
        if (itemName) {
            Object.defineProperty(this.data, itemName, {
                get() {
                    return getItem.value;
                }
            });
        }
        if (indexName) {
            Object.defineProperty(this.data, indexName, {
                get() {
                    return getIndex.value;
                }
            });
        }
    }
    updateIndex(newIndex, _indexName) {
        // let items: any[] | {};
        // if(!dataName.startsWith("this.")) {
        //     let comp = new Computed(() => {
        //         return getValueFromObject(dataName, this.data);
        //     });
        //     fullName = dataName.replace(/^this\./, '');
        //     items = getValueFromObject(fullName, this.comp);
        // if(Array.isArray(items)) {
        //     let regex = new RegExp("^(" + fullName.replace(/\./g, "\\.") + ")\\[(\\d+?)\\]");
        //     for(let computed of computeds) {
        //         for(let cb of computed.callbacks) {
        //             cb.path = cb.path.replace(regex, "$1[" + newIndex + "]");
        //     let oldKey = Object.keys(items)[this.watch[_indexName]]
        //     let newKey = Object.keys(items)[newIndex]
        //     let regex = new RegExp("^(" + fullName.replace(/\./g, "\\.") + "\\.)(" + oldKey + ")($|\\.)");
        //     for (let computed of computeds) {
        //         for (let cb of computed.callbacks) {
        //             cb.path = cb.path.replace(regex, "$1" + newKey + "$3")
        this.watch[_indexName] = newIndex;
    }
    increaseIndex(_indexName) {
        this.updateIndex(this.watch[_indexName] + 1, _indexName);
    }
    decreaseIndex(_indexName) {
        this.updateIndex(this.watch[_indexName] - 1, _indexName);
    }
    destructor() {
        this.isDestroyed = true;
        for (let computed of this.computeds) {
            computed.destroy();
        }
        this.computeds = [];
    }
    registerWatch(name, value) {
        let that = this;
        that.watch[name] = value;
        Object.defineProperty(that.data, name, {
            get() {
                return that.watch[name];
            }
        });
    }
    updateWatch(name, value, dones) {
        if (Watcher.is(this.watch[name])) {
            this.watch[name].__injectedDones(dones);
        }
        this.watch[name] = value;
    }
    normalizePath(path) {
        path = path.replace(/^this\./, '');
        const regex = /\[(.*?)\]/g;
        let m;
        while ((m = regex.exec(path)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            let name = m[1];
            let result = getValueFromObject(name, this.data);
            if (result !== undefined) {
                path = path.replace(m[0], `[${result}]`);
            }
        }
        return path;
    }
    getValueFromItem(name) {
        if (!name)
            return undefined;
        let result = getValueFromObject(name, this.data);
        if (result !== undefined) {
            return result;
        }
        result = getValueFromObject(name, this.comp);
        if (result !== undefined) {
            return result;
        }
        return undefined;
    }
    setValueToItem(name, value) {
        setValueToObject(name, this.comp, value);
    }
}
TemplateContext.Namespace=`Aventus`;
__as1(_, 'TemplateContext', TemplateContext);

let TemplateInstance=class TemplateInstance {
    context;
    content;
    actions;
    component;
    _components = {};
    firstRenderUniqueCb = {};
    firstRenderCb = [];
    firstChild;
    lastChild;
    computeds = [];
    renderingComputeds = [];
    loopRegisteries = {};
    loops = [];
    ifs = [];
    isDestroyed = false;
    constructor(component, content, actions, loops, ifs, context) {
        this.component = component;
        this.content = content;
        this.actions = actions;
        this.ifs = ifs;
        this.loops = loops;
        this.context = context ? context : new TemplateContext(component);
        this.firstChild = content.firstElementChild;
        this.lastChild = content.lastElementChild;
        this.selectElements();
        this.transformActionsListening();
    }
    render() {
        this.updateContext();
        this.bindEvents();
        for (let cb of this.firstRenderCb) {
            cb();
        }
        for (let key in this.firstRenderUniqueCb) {
            this.firstRenderUniqueCb[key]();
        }
        this.renderSubTemplate();
    }
    destructor() {
        this.isDestroyed = true;
        for (let name in this.loopRegisteries) {
            let register = this.loopRegisteries[name];
            for (let item of register.templates) {
                item.destructor();
            }
            for (let item of register.computeds) {
                item.destroy();
            }
            if (register.unsub) {
                register.unsub();
            }
        }
        this.loopRegisteries = {};
        this.context.destructor();
        for (let computed of this.computeds) {
            computed.destroy();
        }
        for (let computed of this.renderingComputeds) {
            computed.destroy();
        }
        this.computeds = [];
        this.removeFromDOM();
    }
    removeFromDOM(avoidTrigger = false) {
        if (avoidTrigger) {
            let node = this.firstChild;
            while (node && node != this.lastChild) {
                let next = node.nextElementSibling;
                node.parentNode?.removeChild(node);
                node = next;
            }
            this.lastChild?.parentNode?.removeChild(this.lastChild);
        }
        else {
            let node = this.firstChild;
            while (node && node != this.lastChild) {
                let next = node.nextElementSibling;
                node.remove();
                node = next;
            }
            this.lastChild?.remove();
        }
    }
    selectElements() {
        this._components = {};
        let idEls = Array.from(this.content.querySelectorAll('[_id]'));
        for (let idEl of idEls) {
            let id = idEl.attributes['_id'].value;
            if (!this._components[id]) {
                this._components[id] = [];
            }
            this._components[id].push(idEl);
        }
        if (this.actions.elements) {
            for (let element of this.actions.elements) {
                let components = [];
                for (let id of element.ids) {
                    if (this._components[id]) {
                        components = [...components, ...this._components[id]];
                    }
                }
                if (element.isArray) {
                    setValueToObject(element.name, this.component, components);
                }
                else if (components[0]) {
                    setValueToObject(element.name, this.component, components[0]);
                }
            }
        }
    }
    updateContext() {
        if (this.actions.contextEdits) {
            for (let contextEdit of this.actions.contextEdits) {
                this.renderContextEdit(contextEdit);
            }
        }
    }
    renderContextEdit(edit) {
        let _class = edit.once ? ComputedNoRecomputed : Computed;
        let computed = new _class(() => {
            try {
                return edit.fct(this.context);
            }
            catch (e) {
            }
            return {};
        });
        computed.subscribe((action, path, value, dones) => {
            for (let key in computed.value) {
                let newValue = computed.value[key];
                this.context.updateWatch(key, newValue, dones);
            }
        });
        this.computeds.push(computed);
        for (let key in computed.value) {
            this.context.registerWatch(key, computed.value[key]);
        }
    }
    bindEvents() {
        if (this.actions.events) {
            for (let event of this.actions.events) {
                this.bindEvent(event);
            }
        }
        if (this.actions.pressEvents) {
            for (let event of this.actions.pressEvents) {
                this.bindPressEvent(event);
            }
        }
    }
    bindEvent(event) {
        if (!this._components[event.id]) {
            return;
        }
        if (event.isCallback) {
            for (let el of this._components[event.id]) {
                let cb = getValueFromObject(event.eventName, el);
                if (!cb && el.tagName.includes('-')) {
                    customElements.upgrade(el);
                    cb = getValueFromObject(event.eventName, el);
                }
                cb?.add((...args) => {
                    try {
                        return event.fct(this.context, args);
                    }
                    catch (e) {
                        console.error(e);
                    }
                });
            }
        }
        else {
            for (let el of this._components[event.id]) {
                el.addEventListener(event.eventName, (e) => {
                    try {
                        event.fct(e, this.context);
                    }
                    catch (e) {
                        console.error(e);
                    }
                });
            }
        }
    }
    bindPressEvent(event) {
        let id = event['id'];
        if (id && this._components[id]) {
            let clone = {};
            for (let temp in event) {
                if (temp != 'id') {
                    const ev = event;
                    if (ev[temp] instanceof Function) {
                        clone[temp] = (e, pressInstance) => { ev[temp](e, pressInstance, this.context); };
                    }
                    else {
                        clone[temp] = ev[temp];
                    }
                }
            }
            clone.element = this._components[id];
            PressManager.create(clone);
        }
    }
    transformActionsListening() {
        if (this.actions.content) {
            for (let name in this.actions.content) {
                this.transformChangeAction(name, this.actions.content[name]);
            }
        }
        if (this.actions.injection) {
            for (let injection of this.actions.injection) {
                this.transformInjectionAction(injection);
            }
        }
        if (this.actions.bindings) {
            for (let binding of this.actions.bindings) {
                this.transformBindigAction(binding);
            }
        }
    }
    transformChangeAction(name, change) {
        const [id, attr] = name.split("°");
        if (!this._components[id])
            return;
        let apply = () => { };
        if (attr == "@HTML") {
            apply = () => {
                let value = this.context.print(computed.value);
                for (const el of this._components[id])
                    el.innerHTML = value;
            };
        }
        else {
            apply = () => {
                let value = this.context.print(computed.value);
                if (value === "false") {
                    for (const el of this._components[id]) {
                        el.removeAttribute(attr);
                    }
                }
                else {
                    for (const el of this._components[id]) {
                        el.setAttribute(attr, value);
                    }
                }
            };
        }
        let _class = change.once ? ComputedNoRecomputed : Computed;
        let computed = new _class(() => {
            try {
                return change.fct(this.context);
            }
            catch (e) {
                if (e instanceof TypeError && e.message.includes("undefined")) {
                    if (computed instanceof ComputedNoRecomputed) {
                        computed.isInit = false;
                    }
                }
                else {
                    console.error(e);
                }
            }
            return "";
        });
        let timeout;
        computed.subscribe((action, path, value, dones) => {
            clearTimeout(timeout);
            // add timeout to group change that append on the same frame (for example index update)
            timeout = setTimeout(() => {
                if (computed.isDestroy)
                    return;
                apply();
            });
        });
        this.renderingComputeds.push(computed);
        this.firstRenderUniqueCb[name] = () => {
            apply();
        };
    }
    transformInjectionAction(injection) {
        if (!this._components[injection.id])
            return;
        let _class = injection.once ? ComputedNoRecomputed : Computed;
        let computed = new _class(() => {
            try {
                return injection.inject(this.context);
            }
            catch (e) {
                if (e instanceof TypeError && e.message.includes("undefined")) {
                    if (computed instanceof ComputedNoRecomputed) {
                        computed.isInit = false;
                    }
                }
                else {
                    console.error(e);
                }
            }
        });
        this.computeds.push(computed);
        computed.subscribe((action, path, value, dones) => {
            for (const el of this._components[injection.id]) {
                if (el instanceof WebComponent && el.__watch && Object.hasOwn(el.__watch, injection.injectionName)) {
                    el.__watch.__injectedDones(dones);
                }
                el[injection.injectionName] = computed.value;
            }
        });
        this.firstRenderCb.push(() => {
            for (const el of this._components[injection.id]) {
                customElements.upgrade(el);
                el[injection.injectionName] = computed.value;
            }
        });
    }
    transformBindigAction(binding) {
        let isLocalChange = false;
        let _class = binding.once ? ComputedNoRecomputed : Computed;
        let computed = new _class(() => {
            try {
                return binding.inject(this.context);
            }
            catch (e) {
                if (e instanceof TypeError && e.message.includes("undefined")) {
                    if (computed instanceof ComputedNoRecomputed) {
                        computed.isInit = false;
                    }
                }
                else {
                    console.error(e);
                }
            }
        });
        this.computeds.push(computed);
        computed.subscribe((action, path, value, dones) => {
            if (isLocalChange)
                return;
            for (const el of this._components[binding.id]) {
                if (el instanceof WebComponent && el.__watch && Object.hasOwn(el.__watch, binding.injectionName)) {
                    el.__watch.__injectedDones(dones);
                }
                el[binding.injectionName] = computed.value;
            }
        });
        this.firstRenderCb.push(() => {
            for (const el of this._components[binding.id]) {
                customElements.upgrade(el);
                el[binding.injectionName] = computed.value;
            }
        });
        if (binding.isCallback) {
            this.firstRenderCb.push(() => {
                for (var el of this._components[binding.id]) {
                    for (let fct of binding.eventNames) {
                        let cb = getValueFromObject(fct, el);
                        if (!cb && el.tagName.includes('-')) {
                            customElements.upgrade(el);
                            cb = getValueFromObject(binding.injectionName, el);
                        }
                        cb?.add((value) => {
                            let valueToSet = getValueFromObject(binding.injectionName, el);
                            isLocalChange = true;
                            binding.extract(this.context, valueToSet);
                            isLocalChange = false;
                        });
                    }
                }
            });
        }
        else {
            this.firstRenderCb.push(() => {
                for (var el of this._components[binding.id]) {
                    customElements.upgrade(el);
                    for (let fct of binding.eventNames) {
                        el.addEventListener(fct, (e) => {
                            let valueToSet = getValueFromObject(binding.injectionName, e.target);
                            isLocalChange = true;
                            binding.extract(this.context, valueToSet);
                            isLocalChange = false;
                        });
                    }
                }
            });
        }
    }
    renderSubTemplate() {
        for (let loop of this.loops) {
            this.renderLoop(loop);
        }
        for (let _if of this.ifs) {
            this.renderIf(_if);
        }
    }
    renderLoop(loop) {
        if (loop.func) {
            this.renderLoopComplex(loop);
        }
        else if (loop.simple) {
            this.renderLoopSimple(loop, loop.simple);
        }
    }
    resetLoopComplex(anchorId) {
        if (this.loopRegisteries[anchorId]) {
            for (let item of this.loopRegisteries[anchorId].templates) {
                item.destructor();
            }
            for (let item of this.loopRegisteries[anchorId].computeds) {
                item.destroy();
            }
        }
        this.loopRegisteries[anchorId] = {
            templates: [],
            computeds: [],
        };
    }
    renderLoopComplex(loop) {
        if (!loop.func)
            return;
        let fctsTemp = loop.func.bind(this.component)(this.context);
        let fcts = {
            apply: fctsTemp.apply,
            condition: fctsTemp.condition,
            transform: fctsTemp.transform ?? (() => { })
        };
        this.resetLoopComplex(loop.anchorId);
        let computedsCondition = [];
        let alreadyRecreated = false;
        const createComputedCondition = () => {
            let compCondition = new Computed(() => {
                return fcts.condition();
            });
            compCondition.value;
            compCondition.subscribe((action, path, value) => {
                if (!alreadyRecreated) {
                    alreadyRecreated = true;
                    this.renderLoopComplex(loop);
                }
            });
            computedsCondition.push(compCondition);
            this.loopRegisteries[loop.anchorId].computeds.push(compCondition);
            return compCondition;
        };
        let result = [];
        let compCondition = createComputedCondition();
        while (compCondition.value) {
            result.push(fcts.apply());
            fcts.transform();
            compCondition = createComputedCondition();
        }
        let anchor = this._components[loop.anchorId][0];
        for (let i = 0; i < result.length; i++) {
            let context = new TemplateContext(this.component, result[i], this.context, this.loopRegisteries[loop.anchorId]);
            let content = loop.template.template?.content.cloneNode(true);
            document.adoptNode(content);
            customElements.upgrade(content);
            let actions = loop.template.actions;
            let instance = new TemplateInstance(this.component, content, actions, loop.template.loops, loop.template.ifs, context);
            instance.render();
            anchor.parentNode?.insertBefore(instance.content, anchor);
            this.loopRegisteries[loop.anchorId].templates.push(instance);
        }
    }
    resetLoopSimple(anchorId, basePath) {
        let register = this.loopRegisteries[anchorId];
        if (register?.unsub) {
            register.unsub();
        }
        this.resetLoopComplex(anchorId);
    }
    renderLoopSimple(loop, simple) {
        let onThis = simple.data.startsWith("this.");
        let basePath = this.context.normalizePath(simple.data);
        this.resetLoopSimple(loop.anchorId, basePath);
        let getElements = () => this.context.getValueFromItem(basePath);
        let elements = getElements();
        if (!elements) {
            let currentPath = basePath;
            while (currentPath != '' && !elements) {
                let splittedPath = currentPath.split(".");
                splittedPath.pop();
                currentPath = splittedPath.join(".");
                elements = this.context.getValueFromItem(currentPath);
            }
            if (!elements && onThis) {
                const splittedPath = basePath.split(".");
                const firstPart = splittedPath.length > 0 ? splittedPath[0] : null;
                if (firstPart && this.component.__signals[firstPart]) {
                    elements = this.component.__signals[firstPart];
                }
                else {
                    elements = this.component.__watch;
                }
            }
            if (!elements || !(elements.__isProxy || elements instanceof Signal)) {
                debugger;
            }
            const subTemp = (action, path, value) => {
                if (basePath.startsWith(path) || path == "*") {
                    elements.unsubscribe(subTemp);
                    this.renderLoopSimple(loop, simple);
                    return;
                }
            };
            elements.subscribe(subTemp);
            return;
        }
        let indexName = this.context.registerIndex();
        let keys = Object.keys(elements);
        if (elements.__isProxy) {
            let regexArray = new RegExp("^\\[(\\d+?)\\]$");
            let regexObject = new RegExp("^([^\\.]*)$");
            let sub = (action, path, value) => {
                if (this.isDestroyed)
                    return;
                if (path == "") {
                    this.renderLoopSimple(loop, simple);
                    return;
                }
                if (action == WatchAction.UPDATED) {
                    return;
                }
                let index = undefined;
                regexArray.lastIndex = 0;
                regexObject.lastIndex = 0;
                let resultArray = regexArray.exec(path);
                if (resultArray) {
                    index = Number(resultArray[1]);
                }
                else {
                    let resultObject = regexObject.exec(path);
                    if (resultObject) {
                        let oldKey = resultObject[1];
                        if (action == WatchAction.CREATED) {
                            keys = Object.keys(getElements());
                            index = keys.indexOf(oldKey);
                        }
                        else if (action == WatchAction.DELETED) {
                            index = keys.indexOf(oldKey);
                            keys = Object.keys(getElements());
                        }
                    }
                }
                if (index !== undefined) {
                    let registry = this.loopRegisteries[loop.anchorId];
                    if (action == WatchAction.CREATED) {
                        let context = new TemplateContext(this.component, {}, this.context, registry);
                        context.registerLoop(basePath, index, indexName, simple.index, simple.item, onThis);
                        let content = loop.template.template?.content.cloneNode(true);
                        document.adoptNode(content);
                        customElements.upgrade(content);
                        let actions = loop.template.actions;
                        let instance = new TemplateInstance(this.component, content, actions, loop.template.loops, loop.template.ifs, context);
                        instance.render();
                        let anchor;
                        if (index < registry.templates.length) {
                            anchor = registry.templates[index].firstChild;
                        }
                        else {
                            anchor = this._components[loop.anchorId][0];
                        }
                        anchor?.parentNode?.insertBefore(instance.content, anchor);
                        registry.templates.splice(index, 0, instance);
                        for (let i = index + 1; i < registry.templates.length; i++) {
                            registry.templates[i].context.increaseIndex(indexName);
                        }
                    }
                    else if (action == WatchAction.DELETED) {
                        registry.templates[index].destructor();
                        registry.templates.splice(index, 1);
                        for (let i = index; i < registry.templates.length; i++) {
                            registry.templates[i].context.decreaseIndex(indexName);
                        }
                    }
                }
            };
            this.loopRegisteries[loop.anchorId].unsub = () => {
                elements.unsubscribe(sub);
            };
            elements.subscribe(sub);
        }
        let anchor = this._components[loop.anchorId][0];
        for (let i = 0; i < keys.length; i++) {
            let context = new TemplateContext(this.component, {}, this.context, this.loopRegisteries[loop.anchorId]);
            context.registerLoop(basePath, i, indexName, simple.index, simple.item, onThis);
            let content = loop.template.template?.content.cloneNode(true);
            document.adoptNode(content);
            customElements.upgrade(content);
            let actions = loop.template.actions;
            let instance = new TemplateInstance(this.component, content, actions, loop.template.loops, loop.template.ifs, context);
            instance.render();
            anchor.parentNode?.insertBefore(instance.content, anchor);
            this.loopRegisteries[loop.anchorId].templates.push(instance);
        }
    }
    renderIf(_if) {
        // this.renderIfMemory(_if);
        this.renderIfRecreate(_if);
    }
    renderIfMemory(_if) {
        let computeds = [];
        let instances = [];
        if (!this._components[_if.anchorId] || this._components[_if.anchorId].length == 0)
            return;
        let anchor = this._components[_if.anchorId][0];
        let currentActive = -1;
        const calculateActive = () => {
            let newActive = -1;
            for (let i = 0; i < _if.parts.length; i++) {
                if (computeds[i].value) {
                    newActive = i;
                    break;
                }
            }
            if (newActive == currentActive) {
                return;
            }
            if (currentActive != -1) {
                let instance = instances[currentActive];
                let node = instance.firstChild;
                while (node && node != instance.lastChild) {
                    let next = node.nextElementSibling;
                    instance.content.appendChild(node);
                    node = next;
                }
                if (instance.lastChild)
                    instance.content.appendChild(instance.lastChild);
            }
            currentActive = newActive;
            if (instances[currentActive])
                anchor.parentNode?.insertBefore(instances[currentActive].content, anchor);
        };
        for (let i = 0; i < _if.parts.length; i++) {
            const part = _if.parts[i];
            let _class = part.once ? ComputedNoRecomputed : Computed;
            let computed = new _class(() => {
                return part.condition(this.context);
            });
            computeds.push(computed);
            computed.subscribe(() => {
                calculateActive();
            });
            this.computeds.push(computed);
            let context = new TemplateContext(this.component, {}, this.context);
            let content = part.template.template?.content.cloneNode(true);
            document.adoptNode(content);
            customElements.upgrade(content);
            let actions = part.template.actions;
            let instance = new TemplateInstance(this.component, content, actions, part.template.loops, part.template.ifs, context);
            instances.push(instance);
            instance.render();
        }
        calculateActive();
    }
    renderIfRecreate(_if) {
        let computeds = [];
        if (!this._components[_if.anchorId] || this._components[_if.anchorId].length == 0)
            return;
        let anchor = this._components[_if.anchorId][0];
        let currentActive = undefined;
        let currentActiveNb = -1;
        const createContext = () => {
            if (currentActiveNb < 0 || currentActiveNb > _if.parts.length - 1) {
                currentActive = undefined;
                return;
            }
            const part = _if.parts[currentActiveNb];
            let context = new TemplateContext(this.component, {}, this.context);
            let content = part.template.template?.content.cloneNode(true);
            document.adoptNode(content);
            customElements.upgrade(content);
            let actions = part.template.actions;
            let instance = new TemplateInstance(this.component, content, actions, part.template.loops, part.template.ifs, context);
            currentActive = instance;
            instance.render();
            anchor.parentNode?.insertBefore(currentActive.content, anchor);
        };
        for (let i = 0; i < _if.parts.length; i++) {
            const part = _if.parts[i];
            let _class = part.once ? ComputedNoRecomputed : Computed;
            let computed = new _class(() => {
                return part.condition(this.context);
            });
            computeds.push(computed);
            computed.subscribe(() => {
                calculateActive();
            });
            this.computeds.push(computed);
        }
        const calculateActive = () => {
            let newActive = -1;
            for (let i = 0; i < _if.parts.length; i++) {
                if (computeds[i].value) {
                    newActive = i;
                    break;
                }
            }
            if (newActive == currentActiveNb) {
                return;
            }
            if (currentActive) {
                currentActive.destructor();
            }
            currentActiveNb = newActive;
            createContext();
        };
        calculateActive();
    }
}
TemplateInstance.Namespace=`Aventus`;
__as1(_, 'TemplateInstance', TemplateInstance);

let Template=class Template {
    static validatePath(path, pathToCheck) {
        if (pathToCheck.startsWith(path)) {
            return true;
        }
        return false;
    }
    cst;
    constructor(component) {
        this.cst = component;
    }
    htmlParts = [];
    setHTML(data) {
        this.htmlParts.push(data);
    }
    generateTemplate() {
        this.template = document.createElement('template');
        let currentHTML = "<slot></slot>";
        let previousSlots = {
            default: '<slot></slot>'
        };
        for (let htmlPart of this.htmlParts) {
            for (let blockName in htmlPart.blocks) {
                if (!previousSlots.hasOwnProperty(blockName)) {
                    throw "can't found slot with name " + blockName;
                }
                currentHTML = currentHTML.replace(previousSlots[blockName], htmlPart.blocks[blockName]);
            }
            for (let slotName in htmlPart.slots) {
                previousSlots[slotName] = htmlPart.slots[slotName];
            }
        }
        this.template.innerHTML = currentHTML;
    }
    /**
     * Used by the for loop and the if
     * @param template
     */
    setTemplate(template) {
        this.template = document.createElement('template');
        this.template.innerHTML = template;
    }
    template;
    actions = {};
    setActions(actions) {
        if (!this.actions) {
            this.actions = actions;
        }
        else {
            if (actions.elements) {
                if (!this.actions.elements) {
                    this.actions.elements = [];
                }
                this.actions.elements = [...actions.elements, ...this.actions.elements];
            }
            if (actions.events) {
                if (!this.actions.events) {
                    this.actions.events = [];
                }
                this.actions.events = [...actions.events, ...this.actions.events];
            }
            if (actions.pressEvents) {
                if (!this.actions.pressEvents) {
                    this.actions.pressEvents = [];
                }
                this.actions.pressEvents = [...actions.pressEvents, ...this.actions.pressEvents];
            }
            if (actions.content) {
                if (!this.actions.content) {
                    this.actions.content = actions.content;
                }
                else {
                    for (let contextProp in actions.content) {
                        if (!this.actions.content[contextProp]) {
                            this.actions.content[contextProp] = actions.content[contextProp];
                        }
                        else {
                            throw 'this should be impossible';
                        }
                    }
                }
            }
            if (actions.injection) {
                if (!this.actions.injection) {
                    this.actions.injection = actions.injection;
                }
                else {
                    for (let contextProp in actions.injection) {
                        if (!this.actions.injection[contextProp]) {
                            this.actions.injection[contextProp] = actions.injection[contextProp];
                        }
                        else {
                            this.actions.injection[contextProp] = { ...actions.injection[contextProp], ...this.actions.injection[contextProp] };
                        }
                    }
                }
            }
            if (actions.bindings) {
                if (!this.actions.bindings) {
                    this.actions.bindings = actions.bindings;
                }
                else {
                    for (let contextProp in actions.bindings) {
                        if (!this.actions.bindings[contextProp]) {
                            this.actions.bindings[contextProp] = actions.bindings[contextProp];
                        }
                        else {
                            this.actions.bindings[contextProp] = { ...actions.bindings[contextProp], ...this.actions.bindings[contextProp] };
                        }
                    }
                }
            }
            if (actions.contextEdits) {
                if (!this.actions.contextEdits) {
                    this.actions.contextEdits = [];
                }
                this.actions.contextEdits = [...actions.contextEdits, ...this.actions.contextEdits];
            }
        }
    }
    loops = [];
    addLoop(loop) {
        this.loops.push(loop);
    }
    ifs = [];
    addIf(_if) {
        this.ifs.push(_if);
    }
    createInstance(component) {
        let content = this.template.content.cloneNode(true);
        document.adoptNode(content);
        customElements.upgrade(content);
        return new TemplateInstance(component, content, this.actions, this.loops, this.ifs);
    }
}
Template.Namespace=`Aventus`;
__as1(_, 'Template', Template);

let Instance=class Instance {
    static elements = new Map();
    static get(type) {
        let result = this.elements.get(type);
        if (!result) {
            let cst = type.prototype['constructor'];
            result = new cst();
            this.elements.set(type, result);
        }
        return result;
    }
    static set(el) {
        let cst = el.constructor;
        if (this.elements.get(cst)) {
            return false;
        }
        this.elements.set(cst, el);
        return true;
    }
    static destroy(el) {
        let cst = el.constructor;
        return this.elements.delete(cst);
    }
}
Instance.Namespace=`Aventus`;
__as1(_, 'Instance', Instance);

let WebComponent=class WebComponent extends HTMLElement {
    /**
     * Add attributes informations
     */
    static get observedAttributes() {
        return [];
    }
    _first;
    _isReady;
    /**
     * Determine if the component is ready (postCreation done)
     */
    get isReady() {
        return this._isReady;
    }
    /**
     * The current namespace
     */
    static Namespace = "";
    /**
     * The current Tag / empty if abstract class
     */
    static Tag = "";
    /**
     * Get the unique type for the data. Define it as the namespace + class name
     */
    static get Fullname() { return this.Namespace + "." + this.name; }
    /**
     * The current namespace
     */
    get namespace() {
        return this.constructor['Namespace'];
    }
    /**
     * Get the name of the component class
     */
    getClassName() {
        return this.constructor.name;
    }
    /**
     * The current tag
     */
    get tag() {
        return this.constructor['Tag'];
    }
    /**
    * Get the unique type for the data. Define it as the namespace + class name
    */
    get $type() {
        return this.constructor['Fullname'];
    }
    __onChangeFct = {};
    __watch;
    __watchActions = {};
    __watchActionsCb = {};
    __watchFunctions = {};
    __watchFunctionsComputed = {};
    __pressManagers = [];
    __signalActions = {};
    __signals = {};
    __isDefaultState = true;
    __defaultActiveState = new Map();
    __defaultInactiveState = new Map();
    __statesList = {};
    constructor() {
        super();
        if (this.constructor == WebComponent) {
            throw "can't instanciate an abstract class";
        }
        this.__removeNoAnimations = this.__removeNoAnimations.bind(this);
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", this.__removeNoAnimations);
        }
        this._first = true;
        this._isReady = false;
        this.__renderTemplate();
        this.__registerWatchesActions();
        this.__registerPropertiesActions();
        this.__registerSignalsActions();
        this.__createStates();
        this.__subscribeState();
        if (this.constructor == WebComponent) {
            throw "can't instanciate an abstract class";
        }
    }
    /**
     * Remove all listeners
     * State + press
     */
    destructor() {
        WebComponentInstance.removeInstance(this);
        this.__unsubscribeState();
        for (let press of this.__pressManagers) {
            press.destroy();
        }
        for (let name in this.__watchFunctionsComputed) {
            this.__watchFunctionsComputed[name].destroy();
        }
        for (let name in this.__signals) {
            this.__signals[name].destroy();
        }
        // TODO add missing info for destructor();
        this.postDestruction();
        this.destructChildren();
    }
    destructChildren() {
        const recu = (el) => {
            for (let child of Array.from(el.children)) {
                if (child instanceof WebComponent) {
                    child.destructor();
                }
                else if (child instanceof HTMLElement) {
                    recu(child);
                }
            }
            if (el.shadowRoot) {
                for (let child of Array.from(el.shadowRoot.children)) {
                    if (child instanceof WebComponent) {
                        child.destructor();
                    }
                    else if (child instanceof HTMLElement) {
                        recu(child);
                    }
                }
            }
        };
        recu(this);
    }
    __addWatchesActions(name, fct) {
        if (!this.__watchActions[name]) {
            this.__watchActions[name] = [];
            this.__watchActionsCb[name] = (action, path, value) => {
                for (let fct of this.__watchActions[name]) {
                    fct(this, action, path, value);
                }
                if (this.__onChangeFct[name]) {
                    for (let fct of this.__onChangeFct[name]) {
                        fct(path);
                    }
                }
            };
        }
        if (fct) {
            this.__watchActions[name].push(fct);
        }
    }
    __addWatchesFunctions(infos) {
        for (let info of infos) {
            let realName;
            let autoInit;
            if (typeof info == "string") {
                realName = info;
                autoInit = false;
            }
            else {
                realName = info.name;
                autoInit = info.autoInit;
            }
            if (!this.__watchFunctions[realName]) {
                this.__watchFunctions[realName] = { autoInit };
            }
        }
    }
    __registerWatchesActions() {
        if (Object.keys(this.__watchActions).length > 0) {
            if (!this.__watch) {
                let defaultValue = {};
                this.__defaultValuesWatch(defaultValue);
                this.__watch = Watcher.get(defaultValue, (type, path, element) => {
                    try {
                        let action = this.__watchActionsCb[path.split(".")[0]] || this.__watchActionsCb[path.split("[")[0]];
                        action(type, path, element);
                    }
                    catch (e) {
                        console.error(e);
                    }
                });
            }
        }
        for (let name in this.__watchFunctions) {
            this.__watchFunctionsComputed[name] = Watcher.computed(this[name].bind(this));
            if (this.__watchFunctions[name].autoInit) {
                this.__watchFunctionsComputed[name].value;
            }
        }
    }
    __addSignalActions(name, fct) {
        this.__signalActions[name] = () => {
            fct(this);
        };
    }
    __registerSignalsActions() {
        if (Object.keys(this.__signals).length > 0) {
            const defaultValues = {};
            for (let name in this.__signals) {
                this.__registerSignalsAction(name);
                this.__defaultValuesSignal(defaultValues);
            }
            for (let name in defaultValues) {
                this.__signals[name].value = defaultValues[name];
            }
        }
    }
    __registerSignalsAction(name) {
        this.__signals[name] = new Signal(undefined, () => {
            if (this.__signalActions[name]) {
                this.__signalActions[name]();
            }
        });
    }
    __defaultValuesSignal(s) { }
    __addPropertyActions(name, fct) {
        if (!this.__onChangeFct[name]) {
            this.__onChangeFct[name] = [];
        }
        if (fct) {
            this.__onChangeFct[name].push(() => {
                fct(this);
            });
        }
    }
    __registerPropertiesActions() { }
    static __style = ``;
    static __template;
    __templateInstance;
    styleBefore(addStyle) {
        addStyle("@default");
    }
    styleAfter(addStyle) {
    }
    __getStyle() {
        return [WebComponent.__style];
    }
    __getHtml() { }
    __getStatic() {
        return WebComponent;
    }
    static __styleSheets = {};
    __renderStyles() {
        let sheets = {};
        const addStyle = (name) => {
            let sheet = Style.get(name);
            if (sheet) {
                sheets[name] = sheet;
            }
        };
        this.styleBefore(addStyle);
        let localStyle = new CSSStyleSheet();
        let styleTxt = this.__getStyle().join("\r\n");
        if (styleTxt.length > 0) {
            localStyle.replace(styleTxt);
            sheets['@local'] = localStyle;
        }
        this.styleAfter(addStyle);
        return sheets;
    }
    __renderTemplate() {
        let staticInstance = this.__getStatic();
        if (!staticInstance.__template || staticInstance.__template.cst != staticInstance) {
            staticInstance.__template = new Template(staticInstance);
            this.__getHtml();
            this.__registerTemplateAction();
            staticInstance.__template.generateTemplate();
            staticInstance.__styleSheets = this.__renderStyles();
        }
        this.__templateInstance = staticInstance.__template.createInstance(this);
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [...Object.values(staticInstance.__styleSheets), Style.noAnimation];
        shadowRoot.appendChild(this.__templateInstance.content);
        // customElements.upgrade(shadowRoot);
        return shadowRoot;
    }
    __registerTemplateAction() {
    }
    connectedCallback() {
        if (this._first) {
            WebComponentInstance.addInstance(this);
            this._first = false;
            this.__defaultValues();
            this.__upgradeAttributes();
            this.__activateState();
            this.__templateInstance?.render();
            this.__removeNoAnimations();
        }
        else {
            setTimeout(() => {
                this.postConnect();
            });
        }
    }
    disconnectedCallback() {
        setTimeout(() => {
            this.postDisconnect();
        });
    }
    __onReadyCb = [];
    onReady(cb) {
        if (this._isReady) {
            cb();
        }
        else {
            this.__onReadyCb.push(cb);
        }
    }
    __setReady() {
        this._isReady = true;
        this.dispatchEvent(new CustomEvent('postCreationDone'));
        let cbs = [...this.__onReadyCb];
        for (let cb of cbs) {
            cb();
        }
        this.__onReadyCb = [];
    }
    __removeNoAnimations() {
        if (document.readyState !== "loading") {
            setTimeout(() => {
                this.postCreation();
                this.__setReady();
                this.shadowRoot.adoptedStyleSheets = Object.values(this.__getStatic().__styleSheets);
                document.removeEventListener("DOMContentLoaded", this.__removeNoAnimations);
                this.postConnect();
            }, 50);
        }
    }
    __defaultValues() { }
    __defaultValuesWatch(w) { }
    __upgradeAttributes() { }
    __listBoolProps() {
        return [];
    }
    __upgradeProperty(prop) {
        let boolProps = this.__listBoolProps();
        const t = this;
        if (boolProps.indexOf(prop) != -1) {
            if (this.hasAttribute(prop) && (this.getAttribute(prop) === "true" || this.getAttribute(prop) === "")) {
                let value = this.getAttribute(prop);
                delete t[prop];
                t[prop] = value;
            }
            else {
                this.removeAttribute(prop);
                delete t[prop];
                t[prop] = false;
            }
        }
        else {
            if (this.hasAttribute(prop)) {
                let value = this.getAttribute(prop);
                delete t[prop];
                t[prop] = value;
            }
            else if (Object.hasOwn(this, prop)) {
                const value = t[prop];
                delete t[prop];
                t[prop] = value;
            }
        }
    }
    __correctGetter(prop) {
        if (Object.hasOwn(this, prop)) {
            const t = this;
            const value = t[prop];
            delete t[prop];
            t[prop] = value;
        }
    }
    __getStateManager(managerClass) {
        let mClass;
        if (managerClass instanceof StateManager) {
            mClass = managerClass;
        }
        else {
            mClass = Instance.get(managerClass);
        }
        return mClass;
    }
    __addActiveDefState(managerClass, cb) {
        let mClass = this.__getStateManager(managerClass);
        if (!this.__defaultActiveState.has(mClass)) {
            this.__defaultActiveState.set(mClass, []);
        }
        this.__defaultActiveState.get(mClass)?.push(cb);
    }
    __addInactiveDefState(managerClass, cb) {
        let mClass = this.__getStateManager(managerClass);
        if (!this.__defaultInactiveState.has(mClass)) {
            this.__defaultInactiveState.set(mClass, []);
        }
        this.__defaultInactiveState.get(mClass)?.push(cb);
    }
    __addActiveState(statePattern, managerClass, cb) {
        let mClass = this.__getStateManager(managerClass);
        this.__statesList[statePattern].get(mClass)?.active.push(cb);
    }
    __addInactiveState(statePattern, managerClass, cb) {
        let mClass = this.__getStateManager(managerClass);
        this.__statesList[statePattern].get(mClass)?.inactive.push(cb);
    }
    __addAskChangeState(statePattern, managerClass, cb) {
        let mClass = this.__getStateManager(managerClass);
        this.__statesList[statePattern].get(mClass)?.askChange.push(cb);
    }
    __createStates() { }
    __createStatesList(statePattern, managerClass) {
        if (!this.__statesList[statePattern]) {
            this.__statesList[statePattern] = new Map();
        }
        let mClass = this.__getStateManager(managerClass);
        if (!this.__statesList[statePattern].has(mClass)) {
            this.__statesList[statePattern].set(mClass, {
                active: [],
                inactive: [],
                askChange: []
            });
        }
    }
    __inactiveDefaultState(managerClass) {
        if (this.__isDefaultState) {
            this.__isDefaultState = false;
            let mClass = this.__getStateManager(managerClass);
            if (this.__defaultInactiveState.has(mClass)) {
                let fcts = this.__defaultInactiveState.get(mClass) ?? [];
                for (let fct of fcts) {
                    fct.bind(this)();
                }
            }
        }
    }
    __activeDefaultState(nextStep, managerClass) {
        if (!this.__isDefaultState) {
            for (let pattern in this.__statesList) {
                if (StateManager.canBeActivate(pattern, nextStep)) {
                    let mClass = this.__getStateManager(managerClass);
                    if (this.__statesList[pattern].has(mClass)) {
                        return;
                    }
                }
            }
            this.__isDefaultState = true;
            let mClass = this.__getStateManager(managerClass);
            if (this.__defaultActiveState.has(mClass)) {
                let fcts = this.__defaultActiveState.get(mClass) ?? [];
                for (let fct of fcts) {
                    fct.bind(this)();
                }
            }
        }
    }
    __subscribeState() {
        if (!this.isReady && this.__stateCleared) {
            return;
        }
        for (let route in this.__statesList) {
            for (const managerClass of this.__statesList[route].keys()) {
                let el = this.__statesList[route].get(managerClass);
                if (el) {
                    managerClass.subscribe(route, el, false);
                }
            }
        }
    }
    __activateState() {
        for (let route in this.__statesList) {
            for (const managerClass of this.__statesList[route].keys()) {
                let el = this.__statesList[route].get(managerClass);
                if (el) {
                    managerClass.activateAfterSubscribe(route, el);
                }
            }
        }
    }
    __stateCleared = false;
    __unsubscribeState() {
        for (let route in this.__statesList) {
            for (const managerClass of this.__statesList[route].keys()) {
                let el = this.__statesList[route].get(managerClass);
                if (el) {
                    managerClass.unsubscribe(route, el);
                }
            }
        }
        this.__stateCleared = true;
    }
    dateToString(d) {
        if (typeof d == 'string') {
            d = this.stringToDate(d);
        }
        if (d instanceof Date) {
            return new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
        }
        return null;
    }
    dateTimeToString(dt) {
        if (typeof dt == 'string') {
            dt = this.stringToDate(dt);
        }
        if (dt instanceof Date) {
            return new Date(dt.getTime() - (dt.getTimezoneOffset() * 60000)).toISOString().slice(0, -1);
        }
        return null;
    }
    stringToDate(s) {
        let td = new Date(s);
        let d = new Date(td.getTime() + (td.getTimezoneOffset() * 60000));
        if (isNaN(d)) {
            return null;
        }
        return d;
    }
    stringToDateTime(s) {
        let td = new Date(s);
        let d = new Date(td.getTime() + (td.getTimezoneOffset() * 60000));
        if (isNaN(d)) {
            return null;
        }
        return d;
    }
    getBoolean(val) {
        if (val === true || val === 1 || val === 'true' || val === '') {
            return true;
        }
        else if (val === false || val === 0 || val === 'false' || val === null || val === undefined) {
            return false;
        }
        console.error("error parsing boolean value " + val);
        return false;
    }
    __registerPropToWatcher(name) {
        if (Watcher._register) {
            Watcher._register.register(this.getReceiver(name), name, Watcher._register.version, name);
        }
    }
    getStringAttr(name) {
        return this.getAttribute(name)?.replace(/&avquot;/g, '"') ?? undefined;
    }
    setStringAttr(name, val) {
        if (val === undefined || val === null) {
            this.removeAttribute(name);
        }
        else {
            this.setAttribute(name, (val + "").replace(/"/g, '&avquot;'));
        }
    }
    getStringProp(name) {
        this.__registerPropToWatcher(name);
        return this.getStringAttr(name);
    }
    getNumberAttr(name) {
        return Number(this.getAttribute(name));
    }
    setNumberAttr(name, val) {
        if (val === undefined || val === null) {
            this.removeAttribute(name);
        }
        else {
            this.setAttribute(name, val);
        }
    }
    getNumberProp(name) {
        this.__registerPropToWatcher(name);
        return this.getNumberAttr(name);
    }
    getBoolAttr(name) {
        return this.hasAttribute(name);
    }
    setBoolAttr(name, val) {
        val = this.getBoolean(val);
        if (val) {
            this.setAttribute(name, 'true');
        }
        else {
            this.removeAttribute(name);
        }
    }
    getBoolProp(name) {
        this.__registerPropToWatcher(name);
        return this.getBoolAttr(name);
    }
    getDateAttr(name) {
        if (!this.hasAttribute(name)) {
            return undefined;
        }
        return this.stringToDate(this.getAttribute(name));
    }
    setDateAttr(name, val) {
        let valTxt = this.dateToString(val);
        if (valTxt === null) {
            this.removeAttribute(name);
        }
        else {
            this.setAttribute(name, valTxt);
        }
    }
    getDateProp(name) {
        this.__registerPropToWatcher(name);
        return this.getDateAttr(name);
    }
    getDateTimeAttr(name) {
        if (!this.hasAttribute(name))
            return undefined;
        return this.stringToDateTime(this.getAttribute(name));
    }
    setDateTimeAttr(name, val) {
        let valTxt = this.dateTimeToString(val);
        if (valTxt === null) {
            this.removeAttribute(name);
        }
        else {
            this.setAttribute(name, valTxt);
        }
    }
    getDateTimeProp(name) {
        this.__registerPropToWatcher(name);
        return this.getDateTimeAttr(name);
    }
    __propertyReceivers = {};
    getReceiver(name) {
        if (!this.__propertyReceivers[name]) {
            let that = this;
            let result = {
                __subscribes: [],
                subscribe(fct) {
                    let index = this.__subscribes.indexOf(fct);
                    if (index == -1) {
                        this.__subscribes.push(fct);
                    }
                },
                unsubscribe(fct) {
                    let index = this.__subscribes.indexOf(fct);
                    if (index > -1) {
                        this.__subscribes.splice(index, 1);
                    }
                },
                onChange() {
                    for (let fct of this.__subscribes) {
                        fct(WatchAction.UPDATED, name, that[name], []);
                    }
                },
                __path: name
            };
            this.__propertyReceivers[name] = result;
        }
        return this.__propertyReceivers[name];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue || !this.isReady) {
            if (this.__propertyReceivers.hasOwnProperty(name)) {
                this.__propertyReceivers[name].onChange();
            }
            if (this.__onChangeFct.hasOwnProperty(name)) {
                for (let fct of this.__onChangeFct[name]) {
                    fct('');
                }
            }
        }
    }
    /**
     * Remove a component from the dom
     * If desctruct is set to true, the component will be fully destroyed
     */
    remove(destruct = true) {
        super.remove();
        if (destruct) {
            this.destructor();
        }
    }
    /**
     * Function triggered when the component is destroyed
     */
    postDestruction() { }
    /**
     * Function triggered the first time the component is rendering inside DOM
     */
    postCreation() { }
    /**
    * Function triggered each time the component is rendering inside DOM
    */
    postConnect() { }
    /**
    * Function triggered each time the component is removed from the DOM
    */
    postDisconnect() { }
    /**
     * Find a parent by tagname if exist
     */
    findParentByTag(tagname, untilNode) {
        return ElementExtension.findParentByTag(this, tagname, untilNode);
    }
    /**
     * Find a parent by class name if exist
     */
    findParentByClass(classname, untilNode) {
        return ElementExtension.findParentByClass(this, classname, untilNode);
    }
    /**
     * Find a parent by type if exist
     */
    findParentByType(type, untilNode) {
        return ElementExtension.findParentByType(this, type, untilNode);
    }
    /**
     * Find list of parents by tagname
     */
    findParentsByTag(tagname, untilNode) {
        return ElementExtension.findParentsByTag(this, tagname, untilNode);
    }
    /**
     * Find list of parents by custom check
     */
    findParents(tagname, check, untilNode) {
        return ElementExtension.findParents(this, check, untilNode);
    }
    /**
     * Find list of parents by custom check
     */
    findParent(tagname, check, untilNode) {
        return ElementExtension.findParent(this, check, untilNode);
    }
    /**
     * Check if element contains a child
     */
    containsChild(el) {
        return ElementExtension.containsChild(this, el);
    }
    /**
     * Get elements inside slot
     */
    getElementsInSlot(slotName) {
        return ElementExtension.getElementsInSlot(this, slotName);
    }
    /**
     * Get nodes inside slot
     */
    getNodesInSlot(slotName) {
        return ElementExtension.getNodesInSlot(this, slotName);
    }
    /**
     * Get active element from the shadowroot or the document
     */
    getActiveElement(document) {
        return ElementExtension.getActiveElement(document ?? this.shadowRoot);
    }
}
WebComponent.Namespace=`Aventus`;
__as1(_, 'WebComponent', WebComponent);

let WebComponentInstance=class WebComponentInstance {
    static __allDefinitions = [];
    static __allInstances = [];
    /**
     * Last definition insert datetime
     */
    static lastDefinition = 0;
    static registerDefinition(def) {
        WebComponentInstance.lastDefinition = Date.now();
        WebComponentInstance.__allDefinitions.push(def);
    }
    static removeDefinition(def) {
        WebComponentInstance.lastDefinition = Date.now();
        let index = WebComponentInstance.__allDefinitions.indexOf(def);
        if (index > -1) {
            WebComponentInstance.__allDefinitions.splice(index, 1);
        }
    }
    /**
     * Get all sub classes of type
     */
    static getAllClassesOf(type) {
        let result = [];
        for (let def of WebComponentInstance.__allDefinitions) {
            if (def.prototype instanceof type) {
                result.push(def);
            }
        }
        return result;
    }
    /**
     * Get all registered definitions
     */
    static getAllDefinitions() {
        return WebComponentInstance.__allDefinitions;
    }
    static addInstance(instance) {
        this.__allInstances.push(instance);
    }
    static removeInstance(instance) {
        let index = this.__allInstances.indexOf(instance);
        if (index > -1) {
            this.__allInstances.splice(index, 1);
        }
    }
    static getAllInstances(type) {
        let result = [];
        for (let instance of this.__allInstances) {
            if (instance instanceof type) {
                result.push(instance);
            }
        }
        return result;
    }
    static create(type) {
        let _class = customElements.get(type);
        if (_class) {
            return new _class();
        }
        let splitted = type.split(".");
        let current = window;
        for (let part of splitted) {
            current = current[part];
        }
        if (current && current.prototype instanceof WebComponent) {
            return new current();
        }
        return null;
    }
}
WebComponentInstance.Namespace=`Aventus`;
__as1(_, 'WebComponentInstance', WebComponentInstance);

let ResizeObserver=class ResizeObserver {
    callback;
    targets;
    fpsInterval = -1;
    nextFrame;
    entriesChangedEvent;
    willTrigger;
    static resizeObserverClassByObject = {};
    static uniqueInstance;
    static getUniqueInstance() {
        if (!ResizeObserver.uniqueInstance) {
            ResizeObserver.uniqueInstance = new window.ResizeObserver(entries => {
                let allClasses = [];
                for (let j = 0; j < entries.length; j++) {
                    let entry = entries[j];
                    const target = entry.target;
                    let index = target['sourceIndex'];
                    if (ResizeObserver.resizeObserverClassByObject[index]) {
                        for (let i = 0; i < ResizeObserver.resizeObserverClassByObject[index].length; i++) {
                            let classTemp = ResizeObserver.resizeObserverClassByObject[index][i];
                            classTemp.entryChanged(entry);
                            if (allClasses.indexOf(classTemp) == -1) {
                                allClasses.push(classTemp);
                            }
                        }
                    }
                }
                for (let i = 0; i < allClasses.length; i++) {
                    allClasses[i].triggerCb();
                }
            });
        }
        return ResizeObserver.uniqueInstance;
    }
    constructor(options) {
        let realOption;
        if (options instanceof Function) {
            realOption = {
                callback: options,
            };
        }
        else {
            realOption = options;
        }
        this.callback = realOption.callback;
        this.targets = [];
        if (!realOption.fps) {
            realOption.fps = 60;
        }
        if (realOption.fps != -1) {
            this.fpsInterval = 1000 / realOption.fps;
        }
        this.nextFrame = 0;
        this.entriesChangedEvent = {};
        this.willTrigger = false;
    }
    /**
     * Observe size changing for the element
     */
    observe(target) {
        const _target = target;
        if (!_target["sourceIndex"]) {
            _target["sourceIndex"] = Math.random().toString(36);
            this.targets.push(_target);
            ResizeObserver.getUniqueInstance().observe(_target);
        }
        if (!ResizeObserver.resizeObserverClassByObject[_target["sourceIndex"]]) {
            ResizeObserver.resizeObserverClassByObject[_target["sourceIndex"]] = [];
        }
        if (ResizeObserver.resizeObserverClassByObject[_target["sourceIndex"]].indexOf(this) == -1) {
            ResizeObserver.resizeObserverClassByObject[_target["sourceIndex"]].push(this);
        }
    }
    /**
     * Stop observing size changing for the element
     */
    unobserve(target) {
        const _target = target;
        for (let i = 0; this.targets.length; i++) {
            let tempTarget = this.targets[i];
            if (tempTarget == _target) {
                let position = ResizeObserver.resizeObserverClassByObject[_target['sourceIndex']].indexOf(this);
                if (position != -1) {
                    ResizeObserver.resizeObserverClassByObject[_target['sourceIndex']].splice(position, 1);
                }
                if (ResizeObserver.resizeObserverClassByObject[_target['sourceIndex']].length == 0) {
                    delete ResizeObserver.resizeObserverClassByObject[_target['sourceIndex']];
                }
                ResizeObserver.getUniqueInstance().unobserve(_target);
                this.targets.splice(i, 1);
                return;
            }
        }
    }
    /**
     * Destroy the resize observer
     */
    disconnect() {
        for (let i = 0; this.targets.length; i++) {
            this.unobserve(this.targets[i]);
        }
    }
    entryChanged(entry) {
        const _target = entry.target;
        let index = _target.sourceIndex;
        this.entriesChangedEvent[index] = entry;
    }
    triggerCb() {
        if (!this.willTrigger) {
            this.willTrigger = true;
            this._triggerCb();
        }
    }
    _triggerCb() {
        let now = window.performance.now();
        let elapsed = now - this.nextFrame;
        if (this.fpsInterval != -1 && elapsed <= this.fpsInterval) {
            requestAnimationFrame(() => {
                this._triggerCb();
            });
            return;
        }
        this.nextFrame = now - (elapsed % this.fpsInterval);
        let changed = Object.values(this.entriesChangedEvent);
        this.entriesChangedEvent = {};
        this.willTrigger = false;
        setTimeout(() => {
            this.callback(changed, ResizeObserver.uniqueInstance);
        }, 0);
    }
}
ResizeObserver.Namespace=`Aventus`;
__as1(_, 'ResizeObserver', ResizeObserver);

let Animation=class Animation {
    /**
     * Default FPS for all Animation if not set inside options
     */
    static FPS_DEFAULT = 60;
    options;
    nextFrame = 0;
    fpsInterval;
    continueAnimation = false;
    frame_id = 0;
    constructor(options) {
        if (!options.animate) {
            options.animate = () => { };
        }
        if (!options.stopped) {
            options.stopped = () => { };
        }
        if (!options.fps) {
            options.fps = Animation.FPS_DEFAULT;
        }
        this.options = options;
        this.fpsInterval = 1000 / options.fps;
    }
    animate() {
        let now = window.performance.now();
        let elapsed = now - this.nextFrame;
        if (elapsed <= this.fpsInterval) {
            this.frame_id = requestAnimationFrame(() => this.animate());
            return;
        }
        this.nextFrame = now - (elapsed % this.fpsInterval);
        setTimeout(() => {
            this.options.animate();
        }, 0);
        if (this.continueAnimation) {
            this.frame_id = requestAnimationFrame(() => this.animate());
        }
        else {
            this.options.stopped();
        }
    }
    /**
     * Start the of animation
     */
    start() {
        if (this.continueAnimation == false) {
            this.continueAnimation = true;
            this.nextFrame = window.performance.now();
            this.animate();
        }
    }
    /**
     * Stop the animation
     */
    stop() {
        this.continueAnimation = false;
    }
    /**
     * Stop the animation
     */
    immediateStop() {
        cancelAnimationFrame(this.frame_id);
        this.continueAnimation = false;
        this.options.stopped();
    }
    /**
     * Get the FPS
     */
    getFPS() {
        return this.options.fps;
    }
    /**
     * Set the FPS
     */
    setFPS(fps) {
        this.options.fps = fps;
        this.fpsInterval = 1000 / this.options.fps;
    }
    /**
     * Get the animation status (true if animation is running)
     */
    isStarted() {
        return this.continueAnimation;
    }
}
Animation.Namespace=`Aventus`;
__as1(_, 'Animation', Animation);


for(let key in _) { Aventus[key] = _[key] }
})(Aventus);

var MaterialIcon;
(MaterialIcon||(MaterialIcon = {}));
(function (MaterialIcon) {
const __as1 = (o, k, c) => { if (o[k] !== undefined) for (let w in o[k]) { c[w] = o[k][w] } o[k] = c; }
const moduleName = `MaterialIcon`;
const _ = {};


let _n;
const Icon = class Icon extends Aventus.WebComponent {
    static get observedAttributes() {return ["icon", "type", "fill"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'is_hidden'() { return this.getBoolAttr('is_hidden') }
    set 'is_hidden'(val) { this.setBoolAttr('is_hidden', val) }
get 'no_check'() { return this.getBoolAttr('no_check') }
    set 'no_check'(val) { this.setBoolAttr('no_check', val) }
    get 'icon'() { return this.getStringProp('icon') }
    set 'icon'(val) { this.setStringAttr('icon', val) }
get 'type'() { return this.getStringProp('type') }
    set 'type'(val) { this.setStringAttr('type', val) }
get 'fill'() { return this.getBoolProp('fill') }
    set 'fill'(val) { this.setBoolAttr('fill', val) }
    static config = {
        type: 'outlined',
        getFontUrl: (variant) => {
            const name = variant.charAt(0).toUpperCase() + variant.slice(1);
            return 'https://fonts.googleapis.com/css2?family=Material+Symbols+' + name + ":FILL@0..1";
        }
    };
    __registerPropertiesActions() { super.__registerPropertiesActions(); this.__addPropertyActions("icon", ((target) => {
    if (target.isReady) {
        target.init();
    }
}));
this.__addPropertyActions("type", ((target) => {
    if (target.isReady)
        target.loadFont();
}));
this.__addPropertyActions("fill", ((target) => {
    if (target.isReady)
        target.loadFont();
}));
 }
    static __style = `:host{--_material-icon-animation-duration: var(--material-icon-animation-duration, 1.75s)}:host{direction:ltr;display:inline-block;font-family:"Material Symbols Outlined";-moz-font-feature-settings:"liga";font-size:24px;-moz-osx-font-smoothing:grayscale;font-style:normal;font-weight:normal;letter-spacing:normal;line-height:1;text-transform:none;white-space:nowrap;word-wrap:normal}:host .icon{direction:inherit;display:inline-block;font-family:inherit;-moz-font-feature-settings:inherit;font-size:inherit;-moz-osx-font-smoothing:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;white-space:inherit;word-wrap:inherit}:host([is_hidden]){opacity:0}:host([type=sharp]){font-family:"Material Symbols Sharp"}:host([type=rounded]){font-family:"Material Symbols Rounded"}:host([type=outlined]){font-family:"Material Symbols Outlined"}:host([fill]){font-variation-settings:"FILL" 1}:host([spin]){animation:spin var(--_material-icon-animation-duration) linear infinite}:host([reverse_spin]){animation:reverse-spin var(--_material-icon-animation-duration) linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes reverse-spin{0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}`;
    __getStatic() {
        return Icon;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Icon.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="icon" _id="icon_0"></div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "iconEl",
      "ids": [
        "icon_0"
      ]
    }
  ]
});
 }
    getClassName() {
        return "Icon";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('is_hidden')) {this.setAttribute('is_hidden' ,'true'); }
if(!this.hasAttribute('no_check')) { this.attributeChangedCallback('no_check', false, false); }
if(!this.hasAttribute('icon')){ this['icon'] = "check_box_outline_blank"; }
if(!this.hasAttribute('type')){ this['type'] = Icon.config.type; }
if(!this.hasAttribute('fill')) { this.attributeChangedCallback('fill', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('is_hidden');
this.__upgradeProperty('no_check');
this.__upgradeProperty('icon');
this.__upgradeProperty('type');
this.__upgradeProperty('fill');
 }
    __listBoolProps() { return ["is_hidden","no_check","fill"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    async loadFont() {
        if (!this.type)
            return;
        const name = this.type.charAt(0).toUpperCase() + this.type.slice(1);
        let fontsName = [
            'Material Symbols ' + name,
            '"Material Symbols ' + name + '"',
        ];
        const check = () => {
            for (let font of document.fonts) {
                if (fontsName.includes(font.family)) {
                    this.is_hidden = false;
                    return true;
                }
            }
            return false;
        };
        if (check()) {
            return;
        }
        const cb = (e) => {
            check();
            document.fonts.removeEventListener("loadingdone", cb);
        };
        document.fonts.addEventListener("loadingdone", cb);
        let url = Icon.config.getFontUrl(this.type);
        await Aventus.ResourceLoader.loadInHead({
            type: "css",
            url: url
        });
        setTimeout(() => {
            check();
        }, 100);
    }
    async init() {
        if (!this.no_check) {
            await this.loadFont();
        }
        else {
            this.is_hidden = false;
        }
        this.iconEl.innerHTML = this.icon;
    }
    postCreation() {
        this.init();
    }
    static configure(config) {
        this.config = {
            ...this.config,
            ...config,
        };
    }
}
Icon.Namespace=`MaterialIcon`;
Icon.Tag=`mi-icon`;
__as1(_, 'Icon', Icon);
if(!window.customElements.get('mi-icon')){window.customElements.define('mi-icon', Icon);Aventus.WebComponentInstance.registerDefinition(Icon);}


for(let key in _) { MaterialIcon[key] = _[key] }
})(MaterialIcon);

var AventusPhp;
(AventusPhp||(AventusPhp = {}));
(function (AventusPhp) {
const __as1 = (o, k, c) => { if (o[k] !== undefined) for (let w in o[k]) { c[w] = o[k][w] } o[k] = c; }
const moduleName = `AventusPhp`;
const _ = {};


let _n;
let LaravelResult=class LaravelResult extends Aventus.ResultWithError {
    static get Fullname() { return "Aventus.Laraventus.Helpers.LaravelResult"; }
}
LaravelResult.Namespace=`AventusPhp`;
LaravelResult.$schema={...(Aventus.ResultWithError?.$schema ?? {}), };
Aventus.Converter.register(LaravelResult.Fullname, LaravelResult);
__as1(_, 'LaravelResult', LaravelResult);

let AventusFile=class AventusFile {
    static get Fullname() { return "Aventus.Laraventus.Models.AventusFile"; }
    uri;
    upload;
    /**
     * Get the unique type for the data. Define it as the namespace + class name
     */
    get $type() {
        return this.constructor['Fullname'];
    }
    /**
     * @inerhit
     */
    toJSON() {
        let toAvoid = ['className', 'namespace'];
        return Aventus.Json.classToJson(this, {
            isValidKey: (key) => !toAvoid.includes(key),
            beforeEnd: (result) => {
                let resultTemp = {};
                if (result.$type) {
                    resultTemp.$type = result.$type;
                    for (let key in result) {
                        if (key != '$type') {
                            resultTemp[key] = result[key];
                        }
                    }
                    return resultTemp;
                }
                return result;
            }
        });
    }
}
AventusFile.Namespace=`AventusPhp`;
__as1(_, 'AventusFile', AventusFile);

let AventusError=class AventusError extends Aventus.GenericError {
    static get Fullname() { return "Aventus.Laraventus.Helpers.AventusError"; }
}
AventusError.Namespace=`AventusPhp`;
AventusError.$schema={...(Aventus.GenericError?.$schema ?? {}), };
Aventus.Converter.register(AventusError.Fullname, AventusError);
__as1(_, 'AventusError', AventusError);

let AventusImage=class AventusImage extends AventusFile {
    static get Fullname() { return "Aventus.Laraventus.Models.AventusImage"; }
}
AventusImage.Namespace=`AventusPhp`;
__as1(_, 'AventusImage', AventusImage);


for(let key in _) { AventusPhp[key] = _[key] }
})(AventusPhp);

var Aventus;
(Aventus||(Aventus = {}));
(function (Aventus) {
const __as1 = (o, k, c) => { if (o[k] !== undefined) for (let w in o[k]) { c[w] = o[k][w] } o[k] = c; }
const moduleName = `Aventus`;
const _ = {};

let Layout = {};
_.Layout = Aventus.Layout ?? {};
Layout.Tabs = {};
_.Layout.Tabs = Aventus.Layout?.Tabs ?? {};
let Lib = {};
_.Lib = Aventus.Lib ?? {};
let Form = {};
_.Form = Aventus.Form ?? {};
let Navigation = {};
_.Navigation = Aventus.Navigation ?? {};
Form.Validators = {};
_.Form.Validators = Aventus.Form?.Validators ?? {};
let Toast = {};
_.Toast = Aventus.Toast ?? {};
let Modal = {};
_.Modal = Aventus.Modal ?? {};
let _n;
Layout.Row = class Row extends Aventus.WebComponent {
    static __style = `:host{--_col-gap: var(--col-gap, 0px);--_col-gap-y: var(--col-gap-y, var(--_col-gap));--_col-gap-x: var(--col-gap-x, var(--_col-gap))}:host{container-name:row;container-type:inline-size;display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--_col-gap-y) var(--_col-gap-x);width:100%}`;
    constructor() {
        super();
        this.style.containerName = "row";
        this.style.containerType = "inline-size";
    }
    __getStatic() {
        return Row;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Row.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Row";
    }
}
Layout.Row.Namespace=`Aventus.Layout`;
Layout.Row.Tag=`av-row`;
__as1(_.Layout, 'Row', Layout.Row);
if(!window.customElements.get('av-row')){window.customElements.define('av-row', Layout.Row);Aventus.WebComponentInstance.registerDefinition(Layout.Row);}

Layout.Tabs.TabHeader = class TabHeader extends Aventus.WebComponent {
    get 'active'() { return this.getBoolAttr('active') }
    set 'active'(val) { this.setBoolAttr('active', val) }
    _tab;
    get tab() {
        return this._tab;
    }
    tabs;
    static __style = ``;
    constructor() {
        super();
        if (this.constructor == TabHeader) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return TabHeader;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(TabHeader.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "TabHeader";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('active')) { this.attributeChangedCallback('active', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('tab');
this.__upgradeProperty('active');
 }
    __listBoolProps() { return ["active"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    async init(tab, tabs) {
        this.tabs = tabs;
        this._tab = tab;
        tab.tabHeader = this;
        await this.render();
    }
    onPress() {
        if (!this.active) {
            this.tabs.setActive(this);
        }
    }
    addPress() {
        new Aventus.PressManager({
            element: this,
            onPress: () => {
                this.onPress();
            }
        });
    }
    postCreation() {
        super.postCreation();
        this.addPress();
    }
}
Layout.Tabs.TabHeader.Namespace=`Aventus.Layout.Tabs`;
__as1(_.Layout.Tabs, 'TabHeader', Layout.Tabs.TabHeader);

(function (SpecialTouch) {
    SpecialTouch[SpecialTouch["Backspace"] = 0] = "Backspace";
    SpecialTouch[SpecialTouch["Insert"] = 1] = "Insert";
    SpecialTouch[SpecialTouch["End"] = 2] = "End";
    SpecialTouch[SpecialTouch["PageDown"] = 3] = "PageDown";
    SpecialTouch[SpecialTouch["PageUp"] = 4] = "PageUp";
    SpecialTouch[SpecialTouch["Escape"] = 5] = "Escape";
    SpecialTouch[SpecialTouch["AltGraph"] = 6] = "AltGraph";
    SpecialTouch[SpecialTouch["Control"] = 7] = "Control";
    SpecialTouch[SpecialTouch["Alt"] = 8] = "Alt";
    SpecialTouch[SpecialTouch["Shift"] = 9] = "Shift";
    SpecialTouch[SpecialTouch["CapsLock"] = 10] = "CapsLock";
    SpecialTouch[SpecialTouch["Tab"] = 11] = "Tab";
    SpecialTouch[SpecialTouch["Delete"] = 12] = "Delete";
    SpecialTouch[SpecialTouch["ArrowRight"] = 13] = "ArrowRight";
    SpecialTouch[SpecialTouch["ArrowLeft"] = 14] = "ArrowLeft";
    SpecialTouch[SpecialTouch["ArrowUp"] = 15] = "ArrowUp";
    SpecialTouch[SpecialTouch["ArrowDown"] = 16] = "ArrowDown";
    SpecialTouch[SpecialTouch["Enter"] = 17] = "Enter";
})(Lib.SpecialTouch || (Lib.SpecialTouch = {}));
__as1(_.Lib, 'SpecialTouch', Lib.SpecialTouch);

Form.FormElement = class FormElement extends Aventus.WebComponent {
    static get observedAttributes() {return ["disabled"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'has_errors'() { return this.getBoolAttr('has_errors') }
    set 'has_errors'(val) { this.setBoolAttr('has_errors', val) }
    get 'disabled'() { return this.getBoolProp('disabled') }
    set 'disabled'(val) { this.setBoolAttr('disabled', val) }
    get 'value'() {
						return this.__watch["value"];
					}
					set 'value'(val) {
						this.__watch["value"] = val;
					}
get 'errors'() {
						return this.__watch["errors"];
					}
					set 'errors'(val) {
						this.__watch["errors"] = val;
					}
    static get formAssociated() { return true; }
    _form;
    get form() {
        return this._form;
    }
    set form(value) {
        this.unlinkFormPart();
        this._form = value;
        this.linkFormPart();
    }
    internals;
    canLinkValueToForm = false;
    handler = undefined;
    onChange = new Aventus.Callback();
    __registerWatchesActions() {
    this.__addWatchesActions("value", ((target) => {
    target.onValueChange(target.value);
}));
this.__addWatchesActions("errors", ((target) => {
    target.onErrorsChange();
}));
    super.__registerWatchesActions();
}
    static __style = ``;
    constructor() {
        super();
        this.internals = this.attachInternals();
        if (this.constructor == FormElement) {
            throw "can't instanciate an abstract class";
        }
        this.refreshValueFromForm = this.refreshValueFromForm.bind(this);
        this.onFormValidation = this.onFormValidation.bind(this);
    }
    __getStatic() {
        return FormElement;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(FormElement.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "FormElement";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('has_errors')) { this.attributeChangedCallback('has_errors', false, false); }
if(!this.hasAttribute('disabled')) { this.attributeChangedCallback('disabled', false, false); }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["value"] = undefined;
w["errors"] = [];
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('form');
this.__upgradeProperty('has_errors');
this.__upgradeProperty('disabled');
this.__correctGetter('value');
this.__correctGetter('errors');
 }
    __listBoolProps() { return ["has_errors","disabled"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    refreshValueFromForm() {
        if (this._form) {
            this.errors = [];
            this.value = this._form.value.get();
        }
    }
    unlinkFormPart() {
        if (this._form) {
            this._form.unregister(this);
            this._form.onValueChange.remove(this.refreshValueFromForm);
            this._form.onValidation.remove(this.onFormValidation);
        }
    }
    linkFormPart() {
        if (this._form) {
            this._form.register(this);
            this._form.onValueChange.add(this.refreshValueFromForm);
            this._form.onValidation.add(this.onFormValidation);
            this.refreshValueFromForm();
        }
        else {
            this.value = undefined;
        }
    }
    async onFormValidation(errors) {
        let _errors = await this.validation();
        if (_errors.length == 0) {
            _errors = errors;
        }
        else if (errors.length > 0) {
            for (let error of errors) {
                if (!_errors.includes(error)) {
                    _errors.push(error);
                }
            }
        }
        this.errors = _errors;
        return this.errors;
    }
    async validate() {
        if (!this.form) {
            this.errors = await this.validation();
            return this.errors.length == 0;
        }
        return await this.form.test();
    }
    async validation() {
        return [];
    }
    clearErrors() {
        this.errors = [];
    }
    triggerChange(value) {
        this.value = value;
        this.onChange.trigger(this.value);
        if (this.form) {
            this.form.value.set(this.value);
        }
    }
    onValueChange(value) {
        this.linkValueToForm();
    }
    onErrorsChange() {
        this.has_errors = this.errors.length > 0;
        this.linkErrorToForm();
    }
    linkErrorToForm() {
        if (!this.canLinkValueToForm)
            return;
        if (this.has_errors) {
            this.internals.setValidity({
                customError: true
            }, this.errors.join(' & '));
        }
        else {
            this.internals.setValidity({});
        }
    }
    linkValueToForm() {
        if (!this.canLinkValueToForm)
            return;
        if (this.value === undefined) {
            this.internals.setFormValue(null);
        }
        else {
            this.internals.setFormValue(this.value + '');
        }
    }
    formAssociatedCallback(form) {
        this.canLinkValueToForm = true;
        this.linkValueToForm();
        this.linkErrorToForm();
        this.validate();
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    postCreation() {
        super.postCreation();
        let handler = this.findParentByType(_.Form.Form.formElements)?.registerElement(this);
    }
    postDestruction() {
        super.postDestruction();
        this.unlinkFormPart();
    }
}
Form.FormElement.Namespace=`Aventus.Form`;
__as1(_.Form, 'FormElement', Form.FormElement);

let Tracker=class Tracker {
    /**
     * Multiplier for velocity calculations based on device pixel ratio.
     */
    velocityMultiplier = window.devicePixelRatio;
    /**
     * Timestamp of the last update.
     */
    updateTime = Date.now();
    /**
     * Change in position since the last update.
     */
    delta = { x: 0, y: 0 };
    /**
     * Current velocity of the tracker.
     */
    velocity = { x: 0, y: 0 };
    /**
     * Last recorded position.
     */
    lastPosition = { x: 0, y: 0 };
    /**
     * Initializes a new Tracker instance.
     */
    constructor(touch) {
        this.lastPosition = this.getPosition(touch);
    }
    /**
     * Updates the tracker's position, delta, and velocity.
     */
    update(touch) {
        const { velocity, updateTime, lastPosition, } = this;
        const now = Date.now();
        const position = this.getPosition(touch);
        const delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y),
        };
        const duration = (now - updateTime) || 16.7;
        const vx = delta.x / duration * 16.7;
        const vy = delta.y / duration * 16.7;
        velocity.x = vx * this.velocityMultiplier;
        velocity.y = vy * this.velocityMultiplier;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    }
    /**
     * Extracts pointer data from a given event.
     */
    getPointerData(evt) {
        return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
    }
    /**
     * Retrieves the client coordinates from a pointer event.
     */
    getPosition(evt) {
        const data = this.getPointerData(evt);
        return {
            x: data.clientX,
            y: data.clientY,
        };
    }
}
Tracker.Namespace=`Aventus`;
__as1(_, 'Tracker', Tracker);

let RouterStateManager=class RouterStateManager extends Aventus.StateManager {
    /**
     * Retrieves the singleton instance of the RouterStateManager.
     */
    static getInstance() {
        return Aventus.Instance.get(RouterStateManager);
    }
}
RouterStateManager.Namespace=`Aventus`;
__as1(_, 'RouterStateManager', RouterStateManager);

Navigation.Link = class Link extends Aventus.WebComponent {
    get 'to'() { return this.getStringAttr('to') }
    set 'to'(val) { this.setStringAttr('to', val) }
get 'active_pattern'() { return this.getStringAttr('active_pattern') }
    set 'active_pattern'(val) { this.setStringAttr('active_pattern', val) }
    onActiveChange = new Aventus.Callback();
    static __style = `:host{display:contents}:host a{color:inherit;display:contents;text-decoration:none}`;
    __getStatic() {
        return Link;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Link.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<a _id="link_0"><slot></slot></a>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "link_0°href": {
      "fct": (c) => `${c.print(c.comp.__7e4c6c9fe944acd9b1174c61347fdcb6method0())}`,
      "once": true
    }
  },
  "events": [
    {
      "eventName": "click",
      "id": "link_0",
      "fct": (e, c) => c.comp.prevent(e)
    }
  ]
});
 }
    getClassName() {
        return "Link";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('to')){ this['to'] = undefined; }
if(!this.hasAttribute('active_pattern')){ this['active_pattern'] = undefined; }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('to');
this.__upgradeProperty('active_pattern');
 }
    addClickEvent() {
        new Aventus.PressManager({
            element: this,
            onPress: () => {
                if (this.to === undefined)
                    return false;
                let to = this.to;
                if (this.to.startsWith(".")) {
                    to = Aventus.Instance.get(RouterStateManager).getState()?.name ?? "";
                    if (!to.endsWith("/")) {
                        to += "/";
                    }
                    to += this.to;
                    to = Aventus.Uri.normalize(to);
                }
                Aventus.State.activate(to, Aventus.Instance.get(RouterStateManager));
                return true;
            }
        });
    }
    registerActivetoListener() {
        let activeto = this.to;
        if (this.active_pattern) {
            activeto = this.active_pattern;
        }
        if (activeto === undefined)
            return;
        Aventus.Instance.get(RouterStateManager).subscribe(activeto, {
            active: () => {
                this.classList.add("active");
                this.onActiveChange.trigger(true);
            },
            inactive: () => {
                this.classList.remove("active");
                this.onActiveChange.trigger(false);
            }
        });
    }
    prevent(e) {
        e.preventDefault();
    }
    postCreation() {
        this.registerActivetoListener();
        this.addClickEvent();
    }
    __7e4c6c9fe944acd9b1174c61347fdcb6method0() {
        return this.to;
    }
}
Navigation.Link.Namespace=`Aventus.Navigation`;
Navigation.Link.Tag=`av-link`;
__as1(_.Navigation, 'Link', Navigation.Link);
if(!window.customElements.get('av-link')){window.customElements.define('av-link', Navigation.Link);Aventus.WebComponentInstance.registerDefinition(Navigation.Link);}

Navigation.RouterLink = class RouterLink extends Aventus.WebComponent {
    get 'state'() { return this.getStringAttr('state') }
    set 'state'(val) { this.setStringAttr('state', val) }
get 'active_state'() { return this.getStringAttr('active_state') }
    set 'active_state'(val) { this.setStringAttr('active_state', val) }
    onActiveChange = new Aventus.Callback();
    static __style = `:host a{color:inherit;display:contents;text-decoration:none}`;
    __getStatic() {
        return RouterLink;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(RouterLink.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<a _id="routerlink_0"><slot></slot></a>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "routerlink_0°href": {
      "fct": (c) => `${c.print(c.comp.__ad88894dc7dea62195d227cdd21fc210method0())}`,
      "once": true
    }
  },
  "events": [
    {
      "eventName": "click",
      "id": "routerlink_0",
      "fct": (e, c) => c.comp.prevent(e)
    }
  ]
});
 }
    getClassName() {
        return "RouterLink";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('state')){ this['state'] = undefined; }
if(!this.hasAttribute('active_state')){ this['active_state'] = undefined; }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('state');
this.__upgradeProperty('active_state');
 }
    addClickEvent() {
        new Aventus.PressManager({
            element: this,
            onPress: () => {
                if (this.state === undefined)
                    return;
                let state = this.state;
                if (this.state.startsWith(".")) {
                    state = Aventus.Instance.get(RouterStateManager).getState()?.name ?? "";
                    if (!state.endsWith("/")) {
                        state += "/";
                    }
                    state += this.state;
                    state = Aventus.Uri.normalize(state);
                }
                Aventus.State.activate(state, Aventus.Instance.get(RouterStateManager));
            }
        });
    }
    registerActiveStateListener() {
        let activeState = this.state;
        if (this.active_state) {
            activeState = this.active_state;
        }
        if (activeState === undefined)
            return;
        Aventus.Instance.get(RouterStateManager).subscribe(activeState, {
            active: () => {
                this.classList.add("active");
                this.onActiveChange.trigger(true);
            },
            inactive: () => {
                this.classList.remove("active");
                this.onActiveChange.trigger(false);
            }
        });
    }
    prevent(e) {
        e.preventDefault();
    }
    postCreation() {
        this.registerActiveStateListener();
        this.addClickEvent();
    }
    __ad88894dc7dea62195d227cdd21fc210method0() {
        return this.state;
    }
}
Navigation.RouterLink.Namespace=`Aventus.Navigation`;
Navigation.RouterLink.Tag=`av-router-link`;
__as1(_.Navigation, 'RouterLink', Navigation.RouterLink);
if(!window.customElements.get('av-router-link')){window.customElements.define('av-router-link', Navigation.RouterLink);Aventus.WebComponentInstance.registerDefinition(Navigation.RouterLink);}

Navigation.Page = class Page extends Aventus.WebComponent {
    static get observedAttributes() {return ["visible"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'visible'() { return this.getBoolProp('visible') }
    set 'visible'(val) { this.setBoolAttr('visible', val) }
    router;
    state;
    __registerPropertiesActions() { super.__registerPropertiesActions(); this.__addPropertyActions("visible", ((target) => {
    if (target.visible) {
        target.onShow();
    }
    else {
        target.onHide();
    }
}));
 }
    static __style = `:host{display:block}:host(:not([visible])){display:none}`;
    constructor() {
        super();
        if (this.constructor == Page) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return Page;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Page.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Page";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('visible')) { this.attributeChangedCallback('visible', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('visible');
 }
    __listBoolProps() { return ["visible"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    async show(state) {
        this.state = state;
        if (!this.visible)
            this.visible = true;
        else
            this.onShow();
    }
    async hide() {
        this.visible = false;
        this.state = undefined;
    }
    onShow() {
    }
    onHide() {
    }
    isAllowed(state, pattern, router) {
        return true;
    }
<<<<<<< HEAD
    loadData(state) {
        return true;
    }
=======
    loadData(state, path) {
        return true;
    }
    getSlugs(path) {
        const slugs = this.router?.getSlugs();
        return slugs;
    }
>>>>>>> 8835a8f (Update to new version)
}
Navigation.Page.Namespace=`Aventus.Navigation`;
__as1(_.Navigation, 'Page', Navigation.Page);

Navigation.Default404 = class Default404 extends Navigation.Page {
    static __style = `:host{align-items:center;height:100%;justify-content:center;width:100%}:host h1{font-size:48px;text-align:center}:host([visible]){display:flex}`;
    __getStatic() {
        return Default404;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Default404.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<h1>Error 404</h1>` }
    });
}
    getClassName() {
        return "Default404";
    }
    configure() {
        return {
            destroy: true
        };
    }
}
Navigation.Default404.Namespace=`Aventus.Navigation`;
Navigation.Default404.Tag=`av-default-404`;
__as1(_.Navigation, 'Default404', Navigation.Default404);
if(!window.customElements.get('av-default-404')){window.customElements.define('av-default-404', Navigation.Default404);Aventus.WebComponentInstance.registerDefinition(Navigation.Default404);}

Navigation.Router = class Router extends Aventus.WebComponent {
    get 'initializing'() { return this.getBoolAttr('initializing') }
    set 'initializing'(val) { this.setBoolAttr('initializing', val) }
    static page404 = _.Navigation.Default404;
    static destroyPage = false;
    oldPage;
    allRoutes = {};
    activePath = "";
    activeState;
    oneStateActive = false;
    showPageMutex = new Aventus.Mutex();
    isReplace = false;
    get stateManager() {
        return Aventus.Instance.get(RouterStateManager);
    }
    page404;
    static __style = `:host{display:block}`;
    constructor() {
        super();
        this.validError404 = this.validError404.bind(this);
        this.canChangeState = this.canChangeState.bind(this);
        this.stateManager.canChangeState(this.canChangeState);
        if (this.constructor == Router) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return Router;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Router.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'before':`<slot name="before"></slot>`,'after':`<slot name="after"></slot>` }, 
        blocks: { 'default':`<slot name="before"></slot><div class="content" _id="router_0"></div><slot name="after"></slot>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "contentEl",
      "ids": [
        "router_0"
      ]
    }
  ]
});
 }
    getClassName() {
        return "Router";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('initializing')) {this.setAttribute('initializing' ,'true'); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('stateManager');
this.__upgradeProperty('initializing');
 }
    __listBoolProps() { return ["initializing"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    addRouteAsync(options) {
        this.allRoutes[options.route] = options;
    }
    addRoute(route, elementCtr) {
        this.allRoutes[route] = {
            route: route,
            scriptUrl: '',
            render: () => elementCtr
        };
    }
    async register() {
        try {
            await this.defineRoutes();
            this.stateManager.onAfterStateChanged(this.validError404);
            for (let key in this.allRoutes) {
                this.initRoute(key);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    initRoute(path) {
        let element = undefined;
        let allRoutes = this.allRoutes;
        this.stateManager.subscribe(path, {
            active: (currentState) => {
                this.oneStateActive = true;
                this.showPageMutex.safeRunLastAsync(async () => {
                    let isNew = false;
                    if (!element || !element.parentElement) {
                        let options = allRoutes[path];
                        if (options.scriptUrl != "") {
                            await Aventus.ResourceLoader.loadInHead(options.scriptUrl);
                        }
                        let cst = options.render();
                        element = new cst;
                        element.router = this;
                        isNew = true;
                    }
                    const canResult = await element.isAllowed(currentState, path, this);
                    if (canResult !== true) {
                        if (canResult === false) {
                            return;
                        }
                        this.navigate(canResult, { replace: true });
                        return;
                    }
<<<<<<< HEAD
                    const loadDataResult = await element.loadData(currentState);
=======
                    const loadDataResult = await element.loadData(currentState, path);
>>>>>>> 8835a8f (Update to new version)
                    if (loadDataResult !== true) {
                        if (loadDataResult === false) {
                            return;
                        }
                        this.navigate(loadDataResult, { replace: true });
                        return;
                    }
                    if (isNew)
                        this.contentEl.appendChild(element);
                    if (this.oldPage && this.oldPage != element) {
                        await this.oldPage.hide();
                        const { destroy } = await this.oldPage.configure();
                        if (destroy === undefined && this.shouldDestroyFrame(this.oldPage)) {
                            this.oldPage.remove();
                        }
                        else if (destroy === true) {
                            this.oldPage.remove();
                        }
                    }
                    let oldPage = this.oldPage;
                    let oldUrl = this.activePath;
                    this.oldPage = element;
                    this.activePath = path;
                    this.activeState = currentState;
                    await element.show(currentState);
                    const { title, description, keywords } = await element.configure();
                    if (title !== undefined)
                        document.title = title;
                    if (keywords !== undefined) {
                        let meta = document.querySelector('meta[name="keywords"]');
                        if (!meta) {
                            meta = document.createElement('meta');
                        }
                        meta.setAttribute("content", keywords.join(", "));
                    }
                    if (description !== undefined) {
                        let meta = document.querySelector('meta[name="description"]');
                        if (!meta) {
                            meta = document.createElement('meta');
                        }
                        meta.setAttribute("content", description);
                    }
                    if (this.bindToUrl() && window.location.pathname != currentState.name) {
                        let newUrl = window.location.origin + currentState.name;
                        if (this.isReplace) {
                            window.history.replaceState({}, title ?? "", newUrl);
                        }
                        else {
                            window.history.pushState({}, title ?? "", newUrl);
                        }
                    }
                    this.onNewPage(oldUrl, oldPage, path, element);
                });
            },
            inactive: () => {
                this.oneStateActive = false;
            }
        });
    }
    async validError404() {
        if (!this.oneStateActive) {
            let Page404 = this.error404(this.stateManager.getState()) ?? Navigation.Router.page404;
            if (Page404) {
                if (!this.page404 || !this.page404.parentElement) {
                    this.page404 = new Page404();
                    this.page404.router = this;
                    this.contentEl.appendChild(this.page404);
                }
                if (this.oldPage && this.oldPage != this.page404) {
                    await this.oldPage.hide();
                }
                if (this.bindToUrl()) {
                    const currentState = this.stateManager.getState();
                    if (currentState && window.location.pathname != currentState.name) {
                        let newUrl = window.location.origin + currentState.name;
                        if (this.isReplace) {
                            window.history.replaceState({}, "Not found", newUrl);
                        }
                        else {
                            window.history.pushState({}, "Not found", newUrl);
                        }
                    }
                }
                this.activeState = undefined;
                this.oldPage = this.page404;
                this.activePath = '';
                await this.page404.show(this.activeState);
            }
        }
    }
    error404(state) {
        return null;
    }
    onNewPage(oldUrl, oldPage, newUrl, newPage) {
    }
    getSlugs(path) {
        return this.stateManager.getStateSlugs(path ?? this.activePath);
    }
    async canChangeState(newState) {
        return true;
    }
    async navigate(state, options) {
        if (options?.replace) {
            this.isReplace = true;
        }
        const result = await this.stateManager.setState(state);
        if (options?.replace) {
            this.isReplace = false;
        }
        return result;
    }
    bindToUrl() {
        return true;
    }
    defaultUrl() {
        return "/";
    }
    shouldDestroyFrame(page) {
        return Navigation.Router.destroyPage;
    }
    setFirstUrl() {
        let oldUrl = window.localStorage.getItem("navigation_url");
        if (oldUrl !== null) {
            Aventus.State.activate(oldUrl, this.stateManager);
            window.localStorage.removeItem("navigation_url");
        }
        else if (this.bindToUrl()) {
            Aventus.State.activate(window.location.pathname, this.stateManager);
        }
        else {
            let defaultUrl = this.defaultUrl();
            if (defaultUrl) {
                Aventus.State.activate(defaultUrl, this.stateManager);
            }
        }
    }
    async init() {
        await this.register();
        this.setFirstUrl();
        if (this.bindToUrl()) {
            window.onpopstate = (e) => {
                if (window.location.pathname != this.stateManager.getState()?.name) {
                    Aventus.State.activate(window.location.pathname, this.stateManager);
                }
            };
        }
        this.initializing = false;
    }
    postCreation() {
        this.init();
    }
    static configure(options) {
        if (options.page404 !== undefined)
            this.page404 = options.page404;
        if (options.destroyPage !== undefined)
            this.destroyPage = options.destroyPage;
    }
}
Navigation.Router.Namespace=`Aventus.Navigation`;
__as1(_.Navigation, 'Router', Navigation.Router);

let TouchRecord=class TouchRecord {
    /**
     * The identifier of the currently active touch/pointer.
     */
    _activeTouchID;
    /**
     * A map of active touch/pointer IDs to their respective Trackers.
     */
    _touchList = {};
    /**
     * Returns a primitive zero-value coordinate object.
     */
    get _primitiveValue() {
        return { x: 0, y: 0 };
    }
    /**
     * Checks if there is an active touch/pointer event.
     */
    isActive() {
        return this._activeTouchID !== undefined;
    }
    /**
     * Retrieves the delta movement of the active tracker.
     */
    getDelta() {
        const tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return { ...tracker.delta };
    }
    /**
     * Retrieves the velocity of the active tracker.
     */
    getVelocity() {
        const tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return { ...tracker.velocity };
    }
    /**
     * Returns the number of active touch/pointer events.
     */
    getNbOfTouches() {
        return Object.values(this._touchList).length;
    }
    /**
     * Returns an array of active Tracker instances.
     */
    getTouches() {
        return Object.values(this._touchList);
    }
    /**
     * Calculates the easing distance based on current velocity and damping.
     */
    getEasingDistance(damping) {
        const deAcceleration = 1 - damping;
        let distance = {
            x: 0,
            y: 0,
        };
        const vel = this.getVelocity();
        Object.keys(vel).forEach((_dir) => {
            const dir = _dir;
            let v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
            while (v !== 0) {
                distance[dir] += v;
                v = (v * deAcceleration) | 0;
            }
        });
        return distance;
    }
    /**
     * Starts tracking new touch/pointer events.
     */
    track(evt) {
        if ('TouchEvent' in window && evt instanceof TouchEvent) {
            const { targetTouches, } = evt;
            Array.from(targetTouches).forEach(touch => {
                this._add(touch);
            });
        }
        else {
            this._add(evt);
        }
        return this._touchList;
    }
    /**
     * Updates existing tracked touch/pointer events.
     */
    update(evt) {
        if ('TouchEvent' in window && evt instanceof TouchEvent) {
            const { touches, changedTouches, } = evt;
            Array.from(touches).forEach(touch => {
                this._renew(touch);
            });
            this._setActiveID(changedTouches);
        }
        else if (evt instanceof PointerEvent) {
            this._renew(evt);
            this._setActiveID(evt);
        }
        return this._touchList;
    }
    /**
     * Releases tracking for ended touch/pointer events.
     */
    release(evt) {
        if ('TouchEvent' in window && evt instanceof TouchEvent) {
            Array.from(evt.changedTouches).forEach(touch => {
                this._delete(touch);
            });
        }
        else {
            this._delete(evt);
        }
    }
    /**
     * Retrieves a unique identifier for a touch or pointer event.
     */
    _getIdentifier(touch) {
        if ('Touch' in window && touch instanceof Touch)
            return touch.identifier;
        if (touch instanceof PointerEvent)
            return touch.pointerId;
        return touch.button;
    }
    /**
     * Adds a new touch/pointer event to the tracker list.
     */
    _add(touch) {
        if (this._has(touch)) {
            this._delete(touch);
        }
        const tracker = new Tracker(touch);
        const identifier = this._getIdentifier(touch);
        this._touchList[identifier] = tracker;
    }
    /**
     * Renews an existing touch/pointer event in the tracker list.
     */
    _renew(touch) {
        if (!this._has(touch)) {
            return;
        }
        const identifier = this._getIdentifier(touch);
        const tracker = this._touchList[identifier];
        tracker.update(touch);
    }
    /**
     * Deletes a touch/pointer event from the tracker list.
     */
    _delete(touch) {
        const identifier = this._getIdentifier(touch);
        delete this._touchList[identifier];
        if (this._activeTouchID == identifier) {
            this._activeTouchID = undefined;
        }
    }
    /**
     * Checks if a touch/pointer event is being tracked.
     */
    _has(touch) {
        const identifier = this._getIdentifier(touch);
        return this._touchList.hasOwnProperty(identifier);
    }
    /**
     * Sets the identifier of the currently active touch/pointer event.
     */
    _setActiveID(touches) {
        if (touches instanceof PointerEvent || touches instanceof MouseEvent) {
            this._activeTouchID = this._getIdentifier(touches);
        }
        else {
            this._activeTouchID = touches[touches.length - 1].identifier;
        }
    }
    /**
     * Retrieves the currently active Tracker instance.
     */
    _getActiveTracker() {
        const { _touchList, _activeTouchID, } = this;
        if (_activeTouchID !== undefined) {
            return _touchList[_activeTouchID];
        }
        return undefined;
    }
}
TouchRecord.Namespace=`Aventus`;
__as1(_, 'TouchRecord', TouchRecord);

Layout.Scrollable = class Scrollable extends Aventus.WebComponent {
    static get observedAttributes() {return ["zoom"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'min_zoom'() { return this.getNumberAttr('min_zoom') }
    set 'min_zoom'(val) { this.setNumberAttr('min_zoom', val) }
get 'max_zoom'() { return this.getNumberAttr('max_zoom') }
    set 'max_zoom'(val) { this.setNumberAttr('max_zoom', val) }
get 'y_scroll_visible'() { return this.getBoolAttr('y_scroll_visible') }
    set 'y_scroll_visible'(val) { this.setBoolAttr('y_scroll_visible', val) }
get 'x_scroll_visible'() { return this.getBoolAttr('x_scroll_visible') }
    set 'x_scroll_visible'(val) { this.setBoolAttr('x_scroll_visible', val) }
get 'floating_scroll'() { return this.getBoolAttr('floating_scroll') }
    set 'floating_scroll'(val) { this.setBoolAttr('floating_scroll', val) }
get 'x_scroll'() { return this.getBoolAttr('x_scroll') }
    set 'x_scroll'(val) { this.setBoolAttr('x_scroll', val) }
get 'y_scroll'() { return this.getBoolAttr('y_scroll') }
    set 'y_scroll'(val) { this.setBoolAttr('y_scroll', val) }
get 'auto_hide'() { return this.getBoolAttr('auto_hide') }
    set 'auto_hide'(val) { this.setBoolAttr('auto_hide', val) }
get 'break'() { return this.getNumberAttr('break') }
    set 'break'(val) { this.setNumberAttr('break', val) }
get 'disable'() { return this.getBoolAttr('disable') }
    set 'disable'(val) { this.setBoolAttr('disable', val) }
get 'no_user_select'() { return this.getBoolAttr('no_user_select') }
    set 'no_user_select'(val) { this.setBoolAttr('no_user_select', val) }
get 'mouse_drag'() { return this.getBoolAttr('mouse_drag') }
    set 'mouse_drag'(val) { this.setBoolAttr('mouse_drag', val) }
get 'pinch'() { return this.getBoolAttr('pinch') }
    set 'pinch'(val) { this.setBoolAttr('pinch', val) }
get 'flex'() { return this.getBoolAttr('flex') }
    set 'flex'(val) { this.setBoolAttr('flex', val) }
    get 'zoom'() { return this.getNumberProp('zoom') }
    set 'zoom'(val) { this.setNumberAttr('zoom', val) }
    observer;
    display = { x: 0, y: 0 };
    max = {
        x: 0,
        y: 0
    };
    margin = {
        x: 0,
        y: 0
    };
    position = {
        x: 0,
        y: 0
    };
    momentum = { x: 0, y: 0 };
    contentWrapperSize = { x: 0, y: 0 };
    scroller = {
        x: () => {
            if (!this.horizontalScroller) {
                throw 'can\'t find the horizontalScroller';
            }
            return this.horizontalScroller;
        },
        y: () => {
            if (!this.verticalScroller) {
                throw 'can\'t find the verticalScroller';
            }
            return this.verticalScroller;
        }
    };
    scrollerContainer = {
        x: () => {
            if (!this.horizontalScrollerContainer) {
                throw 'can\'t find the horizontalScrollerContainer';
            }
            return this.horizontalScrollerContainer;
        },
        y: () => {
            if (!this.verticalScrollerContainer) {
                throw 'can\'t find the verticalScrollerContainer';
            }
            return this.verticalScrollerContainer;
        }
    };
    hideDelay = { x: 0, y: 0 };
    touchRecord;
    pointerCount = 0;
    loadedOnce = false;
    savedPercent;
    isDragScroller = false;
    cachedSvg;
    previousMidPoint;
    previousDistance;
    startTranslate = { x: 0, y: 0 };
    get x() {
        return this.position.x;
    }
    get y() {
        return this.position.y;
    }
    get xMax() {
        return this.max.x;
    }
    get yMax() {
        return this.max.y;
    }
    onScrollChange = new Aventus.Callback();
    onZoomChange = new Aventus.Callback();
    renderAnimation;
    autoScrollInterval = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };
    autoScrollSpeed = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };
    pressManager;
    __registerPropertiesActions() { super.__registerPropertiesActions(); this.__addPropertyActions("zoom", ((target) => {
    target.changeZoom();
}));
 }
    static __style = `:host{--internal-scrollbar-container-color: var(--scrollbar-container-color, transparent);--internal-scrollbar-color: var(--scrollbar-color, #757575);--internal-scrollbar-active-color: var(--scrollbar-active-color, #858585);--internal-scroller-width: var(--scroller-width, 6px);--internal-scroller-top: var(--scroller-top, 3px);--internal-scroller-bottom: var(--scroller-bottom, 3px);--internal-scroller-right: var(--scroller-right, 3px);--internal-scroller-left: var(--scroller-left, 3px);--_scrollbar-content-padding: var(--scrollbar-content-padding, 0);--_scrollbar-container-display: var(--scrollbar-container-display, inline-block)}:host{display:block;height:100%;min-height:inherit;min-width:inherit;overflow:clip;position:relative;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;width:100%}:host .scroll-main-container{display:block;height:100%;min-height:inherit;min-width:inherit;position:relative;width:100%}:host .scroll-main-container .content-zoom{display:block;height:100%;min-height:inherit;min-width:inherit;position:relative;transform-origin:0 0;width:100%;z-index:4}:host .scroll-main-container .content-zoom .content-hidder{display:block;height:100%;min-height:inherit;min-width:inherit;overflow:clip;position:relative;width:100%}:host .scroll-main-container .content-zoom .content-hidder .content-wrapper{display:var(--_scrollbar-container-display);height:100%;min-height:inherit;min-width:inherit;padding:var(--_scrollbar-content-padding);position:relative;width:100%}:host .scroll-main-container .scroller-wrapper .container-scroller{display:none;overflow:hidden;position:absolute;transition:transform .2s linear;z-index:5}:host .scroll-main-container .scroller-wrapper .container-scroller .shadow-scroller{background-color:var(--internal-scrollbar-container-color);border-radius:5px}:host .scroll-main-container .scroller-wrapper .container-scroller .shadow-scroller .scroller{background-color:var(--internal-scrollbar-color);border-radius:5px;cursor:pointer;position:absolute;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;z-index:5}:host .scroll-main-container .scroller-wrapper .container-scroller .scroller.active{background-color:var(--internal-scrollbar-active-color)}:host .scroll-main-container .scroller-wrapper .container-scroller.vertical{height:calc(100% - var(--internal-scroller-bottom)*2 - var(--internal-scroller-width));padding-left:var(--internal-scroller-left);right:var(--internal-scroller-right);top:var(--internal-scroller-bottom);transform:0;width:calc(var(--internal-scroller-width) + var(--internal-scroller-left))}:host .scroll-main-container .scroller-wrapper .container-scroller.vertical.hide{transform:translateX(calc(var(--internal-scroller-width) + var(--internal-scroller-left)))}:host .scroll-main-container .scroller-wrapper .container-scroller.vertical .shadow-scroller{height:100%}:host .scroll-main-container .scroller-wrapper .container-scroller.vertical .shadow-scroller .scroller{width:calc(100% - var(--internal-scroller-left))}:host .scroll-main-container .scroller-wrapper .container-scroller.horizontal{bottom:var(--internal-scroller-bottom);height:calc(var(--internal-scroller-width) + var(--internal-scroller-top));left:var(--internal-scroller-right);padding-top:var(--internal-scroller-top);transform:0;width:calc(100% - var(--internal-scroller-right)*2 - var(--internal-scroller-width))}:host .scroll-main-container .scroller-wrapper .container-scroller.horizontal.hide{transform:translateY(calc(var(--internal-scroller-width) + var(--internal-scroller-top)))}:host .scroll-main-container .scroller-wrapper .container-scroller.horizontal .shadow-scroller{height:100%}:host .scroll-main-container .scroller-wrapper .container-scroller.horizontal .shadow-scroller .scroller{height:calc(100% - var(--internal-scroller-top))}:host([y_scroll]) .scroll-main-container .content-zoom .content-hidder .content-wrapper{height:auto}:host([x_scroll]) .scroll-main-container .content-zoom .content-hidder .content-wrapper{width:auto}:host([y_scroll_visible]) .scroll-main-container .scroller-wrapper .container-scroller.vertical{display:block}:host([x_scroll_visible]) .scroll-main-container .scroller-wrapper .container-scroller.horizontal{display:block}:host([no_user_select]) .content-wrapper *{user-select:none}:host([no_user_select]) ::slotted{user-select:none}:host([flex]){display:flex;flex-direction:column;min-height:0}:host([flex]) .scroll-main-container{display:flex;flex-direction:column}:host([flex]) .scroll-main-container .content-zoom{display:flex;flex-direction:column}`;
    constructor() {
        super();
        this.renderAnimation = this.createAnimation();
        this.onWheel = this.onWheel.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMovePointer = this.onTouchMovePointer.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchMovePointer = this.onTouchMovePointer.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchEndPointer = this.onTouchEndPointer.bind(this);
        this.touchRecord = new TouchRecord();
    }
    __getStatic() {
        return Scrollable;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Scrollable.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<div class="scroll-main-container" _id="scrollable_0">
    <div class="content-zoom" _id="scrollable_1">
        <div class="content-hidder" _id="scrollable_2">
            <div class="content-wrapper" part="content-wrapper" _id="scrollable_3">
                <slot></slot>
            </div>
        </div>
    </div>
    <div class="scroller-wrapper">
        <div class="container-scroller vertical" _id="scrollable_4">
            <div class="shadow-scroller">
                <div class="scroller" _id="scrollable_5"></div>
            </div>
        </div>
        <div class="container-scroller horizontal" _id="scrollable_6">
            <div class="shadow-scroller">
                <div class="scroller" _id="scrollable_7"></div>
            </div>
        </div>
    </div>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "mainContainer",
      "ids": [
        "scrollable_0"
      ]
    },
    {
      "name": "contentZoom",
      "ids": [
        "scrollable_1"
      ]
    },
    {
      "name": "contentHidder",
      "ids": [
        "scrollable_2"
      ]
    },
    {
      "name": "contentWrapper",
      "ids": [
        "scrollable_3"
      ]
    },
    {
      "name": "verticalScrollerContainer",
      "ids": [
        "scrollable_4"
      ]
    },
    {
      "name": "verticalScroller",
      "ids": [
        "scrollable_5"
      ]
    },
    {
      "name": "horizontalScrollerContainer",
      "ids": [
        "scrollable_6"
      ]
    },
    {
      "name": "horizontalScroller",
      "ids": [
        "scrollable_7"
      ]
    }
  ]
});
 }
    getClassName() {
        return "Scrollable";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('min_zoom')){ this['min_zoom'] = 1; }
if(!this.hasAttribute('max_zoom')){ this['max_zoom'] = undefined; }
if(!this.hasAttribute('y_scroll_visible')) { this.attributeChangedCallback('y_scroll_visible', false, false); }
if(!this.hasAttribute('x_scroll_visible')) { this.attributeChangedCallback('x_scroll_visible', false, false); }
if(!this.hasAttribute('floating_scroll')) { this.attributeChangedCallback('floating_scroll', false, false); }
if(!this.hasAttribute('x_scroll')) { this.attributeChangedCallback('x_scroll', false, false); }
if(!this.hasAttribute('y_scroll')) {this.setAttribute('y_scroll' ,'true'); }
if(!this.hasAttribute('auto_hide')) { this.attributeChangedCallback('auto_hide', false, false); }
if(!this.hasAttribute('break')){ this['break'] = 0.1; }
if(!this.hasAttribute('disable')) { this.attributeChangedCallback('disable', false, false); }
if(!this.hasAttribute('no_user_select')) { this.attributeChangedCallback('no_user_select', false, false); }
if(!this.hasAttribute('mouse_drag')) { this.attributeChangedCallback('mouse_drag', false, false); }
if(!this.hasAttribute('pinch')) { this.attributeChangedCallback('pinch', false, false); }
if(!this.hasAttribute('flex')) { this.attributeChangedCallback('flex', false, false); }
if(!this.hasAttribute('zoom')){ this['zoom'] = 1; }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('x');
this.__correctGetter('y');
this.__correctGetter('xMax');
this.__correctGetter('yMax');
this.__upgradeProperty('min_zoom');
this.__upgradeProperty('max_zoom');
this.__upgradeProperty('y_scroll_visible');
this.__upgradeProperty('x_scroll_visible');
this.__upgradeProperty('floating_scroll');
this.__upgradeProperty('x_scroll');
this.__upgradeProperty('y_scroll');
this.__upgradeProperty('auto_hide');
this.__upgradeProperty('break');
this.__upgradeProperty('disable');
this.__upgradeProperty('no_user_select');
this.__upgradeProperty('mouse_drag');
this.__upgradeProperty('pinch');
this.__upgradeProperty('flex');
this.__upgradeProperty('zoom');
 }
    __listBoolProps() { return ["y_scroll_visible","x_scroll_visible","floating_scroll","x_scroll","y_scroll","auto_hide","disable","no_user_select","mouse_drag","pinch","flex"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    createAnimation() {
        return new Aventus.Animation({
            fps: 60,
            animate: () => {
                const nextX = this.nextPosition('x');
                const nextY = this.nextPosition('y');
                this.momentum.x = nextX.momentum;
                this.momentum.y = nextY.momentum;
                this.scrollDirection('x', nextX.position);
                this.scrollDirection('y', nextY.position);
                if (!this.momentum.x && !this.momentum.y) {
                    this.renderAnimation.stop();
                }
            },
            stopped: () => {
                if (this.momentum.x || this.momentum.y) {
                    this.renderAnimation.start();
                }
            }
        });
    }
    nextPosition(direction) {
        const current = this.position[direction];
        const remain = this.momentum[direction];
        let result = {
            momentum: 0,
            position: 0,
        };
        if (Math.abs(remain) <= 0.1) {
            result.position = current + remain;
        }
        else {
            const _break = this.pointerCount > 0 ? 0.5 : this.break;
            let nextMomentum = remain * (1 - _break);
            nextMomentum |= 0;
            result.momentum = nextMomentum;
            result.position = current + remain - nextMomentum;
        }
        let correctPosition = this.correctScrollValue(result.position, direction);
        if (correctPosition != result.position) {
            result.position = correctPosition;
            result.momentum = 0;
        }
        return result;
    }
    scrollDirection(direction, value) {
        const max = this.max[direction];
        if (max != 0) {
            this.position[direction] = this.correctScrollValue(value, direction);
        }
        else {
            this.position[direction] = 0;
        }
        let container = this.scrollerContainer[direction]();
        let scroller = this.scroller[direction]();
        if (this.auto_hide) {
            container.classList.remove("hide");
            clearTimeout(this.hideDelay[direction]);
            this.hideDelay[direction] = setTimeout(() => {
                container.classList.add("hide");
            }, 1000);
        }
        let containerSize = direction == 'y' ? container.offsetHeight : container.offsetWidth;
        if (this.contentWrapperSize[direction] != 0) {
            let scrollPosition = this.div(this.position[direction], this.contentWrapperSize[direction]) * containerSize;
            scroller.style.transform = `translate${direction.toUpperCase()}(${scrollPosition}px)`;
            this.contentWrapper.style.transform = `translate3d(${-1 * this.x}px, ${-1 * this.y}px, 0)`;
        }
        this.triggerScrollChange();
    }
    scrollDirectionPercent(direction, percent) {
        const max = this.max[direction];
        this.scrollDirection(direction, max * percent / 100);
    }
    correctScrollValue(value, direction) {
        if (value < 0) {
            value = 0;
        }
        else if (value > this.max[direction]) {
            value = this.max[direction];
        }
        return value;
    }
    triggerScrollChange() {
        this.onScrollChange.trigger(this.x, this.y);
    }
    scrollToPosition(x, y) {
        this.scrollDirection('x', x);
        this.scrollDirection('y', y);
    }
    scrollX(x) {
        this.scrollDirection('x', x);
    }
    scrollXPercent(x) {
        this.scrollDirectionPercent('x', x);
    }
    scrollY(y) {
        this.scrollDirection('y', y);
    }
    scrollYPercent(y) {
        this.scrollDirectionPercent('y', y);
    }
    startAutoScrollRight() {
        if (!this.autoScrollInterval.right) {
            this.stopAutoScrollLeft();
            this.autoScrollInterval.right = setInterval(() => {
                if (this.x == this.max.x) {
                    this.stopAutoScrollRight();
                    return;
                }
                this.addDelta({
                    x: this.autoScrollSpeed.right,
                    y: 0
                });
            }, 100);
        }
    }
    autoScrollRight(percent = 50) {
        let slow = this.max.x * 1 / 100;
        let fast = this.max.x * 10 / 100;
        this.autoScrollSpeed.right = (fast - slow) * (percent / 100) + slow;
        this.startAutoScrollRight();
    }
    stopAutoScrollRight() {
        if (this.autoScrollInterval.right) {
            clearInterval(this.autoScrollInterval.right);
            this.autoScrollInterval.right = 0;
        }
    }
    startAutoScrollLeft() {
        if (!this.autoScrollInterval.left) {
            this.stopAutoScrollRight();
            this.autoScrollInterval.left = setInterval(() => {
                if (this.x == 0) {
                    this.stopAutoScrollLeft();
                    return;
                }
                this.addDelta({
                    x: this.autoScrollSpeed.left * -1,
                    y: 0
                });
            }, 100);
        }
    }
    autoScrollLeft(percent = 50) {
        let slow = this.max.x * 1 / 100;
        let fast = this.max.x * 10 / 100;
        this.autoScrollSpeed.left = (fast - slow) * (percent / 100) + slow;
        this.startAutoScrollLeft();
    }
    stopAutoScrollLeft() {
        if (this.autoScrollInterval.left) {
            clearInterval(this.autoScrollInterval.left);
            this.autoScrollInterval.left = 0;
        }
    }
    startAutoScrollTop() {
        if (!this.autoScrollInterval.top) {
            this.stopAutoScrollBottom();
            this.autoScrollInterval.top = setInterval(() => {
                if (this.y == 0) {
                    this.stopAutoScrollTop();
                    return;
                }
                this.addDelta({
                    x: 0,
                    y: this.autoScrollSpeed.top * -1
                });
            }, 100);
        }
    }
    autoScrollTop(percent = 50) {
        let slow = this.max.y * 1 / 100;
        let fast = this.max.y * 10 / 100;
        this.autoScrollSpeed.top = (fast - slow) * (percent / 100) + slow;
        this.startAutoScrollTop();
    }
    stopAutoScrollTop() {
        if (this.autoScrollInterval.top) {
            clearInterval(this.autoScrollInterval.top);
            this.autoScrollInterval.top = 0;
        }
    }
    startAutoScrollBottom() {
        if (!this.autoScrollInterval.bottom) {
            this.stopAutoScrollTop();
            this.autoScrollInterval.bottom = setInterval(() => {
                if (this.y == this.max.y) {
                    this.stopAutoScrollBottom();
                    return;
                }
                this.addDelta({
                    x: 0,
                    y: this.autoScrollSpeed.bottom
                });
            }, 100);
        }
    }
    autoScrollBottom(percent = 50) {
        let slow = this.max.y * 1 / 100;
        let fast = this.max.y * 10 / 100;
        this.autoScrollSpeed.bottom = (fast - slow) * (percent / 100) + slow;
        this.startAutoScrollBottom();
    }
    stopAutoScrollBottom() {
        if (this.autoScrollInterval.bottom) {
            clearInterval(this.autoScrollInterval.bottom);
            this.autoScrollInterval.bottom = 0;
        }
    }
    createMatrix() {
        if (!this.cachedSvg) {
            this.cachedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        }
        return this.cachedSvg.createSVGMatrix();
    }
    getMidPoint(a, b) {
        return {
            x: (a.lastPosition.x + b.lastPosition.x) / 2,
            y: (a.lastPosition.y + b.lastPosition.y) / 2,
        };
    }
    getDistance(a, b) {
        return Math.sqrt((b.lastPosition.x - a.lastPosition.x) ** 2 + (b.lastPosition.y - a.lastPosition.y) ** 2);
    }
    zoomOnPoint(clientX, clientY, newZoom) {
        let targetCoordinates = this.getBoundingClientRect();
        let mousePositionRelativeToTarget = {
            x: targetCoordinates.x - clientX,
            y: targetCoordinates.y - clientY
        };
        let oldScale = this.zoom;
        let newScale;
        if (this.max_zoom > 0) {
            newScale = Math.max(this.min_zoom, Math.min(this.max_zoom, newZoom));
        }
        else {
            newScale = Math.max(this.min_zoom, newZoom);
        }
        let scaleDiff = this.div(newScale, oldScale);
        const matrix = this.createMatrix()
            .translate(this.x, this.y)
            .translate(mousePositionRelativeToTarget.x, mousePositionRelativeToTarget.y)
            .scale(scaleDiff)
            .translate(-mousePositionRelativeToTarget.x, -mousePositionRelativeToTarget.y)
            .scale(this.zoom);
        const newZoomFinal = matrix.a || 1;
        const newX = matrix.e || 0;
        const newY = matrix.f || 0;
        this.zoom = newZoomFinal;
        this.onZoomChange.trigger(newZoomFinal);
        this.scrollDirection('x', newX);
        this.scrollDirection('y', newY);
    }
    pinchAction() {
        const touches = this.touchRecord.getTouches();
        if (touches.length == 2) {
            const newMidpoint = this.getMidPoint(touches[0], touches[1]);
            const prevMidpoint = this.previousMidPoint ?? newMidpoint;
            const positioningElRect = this.getBoundingClientRect();
            const originX = (positioningElRect.left + this.x - this.startTranslate.x) - prevMidpoint.x;
            const originY = (positioningElRect.top + this.y - this.startTranslate.y) - prevMidpoint.y;
            const newDistance = this.getDistance(touches[0], touches[1]);
            const prevDistance = this.previousDistance;
            let scaleDiff = prevDistance ? this.div(newDistance, prevDistance) : 1;
            const panX = prevMidpoint.x - newMidpoint.x;
            const panY = prevMidpoint.y - newMidpoint.y;
            let oldScale = this.zoom;
            let newScale;
            if (this.max_zoom > 0) {
                newScale = Math.max(this.min_zoom, Math.min(this.max_zoom, oldScale * scaleDiff));
            }
            else {
                newScale = Math.max(this.min_zoom, oldScale * scaleDiff);
            }
            scaleDiff = this.div(newScale, oldScale);
            const matrix = this.createMatrix()
                .translate(panX, panY)
                .translate(originX, originY)
                .translate(this.x, this.y)
                .scale(scaleDiff)
                .translate(-originX, -originY)
                .scale(this.zoom);
            const newZoom = matrix.a || 1;
            const newX = matrix.e || 0;
            const newY = matrix.f || 0;
            this.zoom = newZoom;
            this.onZoomChange.trigger(newZoom);
            this.scrollDirection('x', newX);
            this.scrollDirection('y', newY);
            this.previousMidPoint = newMidpoint;
            this.previousDistance = newDistance;
        }
        return null;
    }
    addAction() {
        this.addEventListener("wheel", this.onWheel, { passive: false });
        this.pressManager = new Aventus.PressManager({
            element: this,
            offsetDrag: 0,
            onPressStart: (e) => {
                this.touchRecord.track(e.event);
                this.pointerCount = this.touchRecord.getNbOfTouches();
            },
            onPressEnd: (e) => {
                this.touchRecord.release(e.event);
                this.pointerCount = this.touchRecord.getNbOfTouches();
            },
            onDragStart: (e) => {
                if (!this.pinch && !this.x_scroll_visible && !this.y_scroll_visible) {
                    return false;
                }
                return this.onTouchStartPointer(e);
            },
            onDrag: (e) => {
                this.onTouchMovePointer(e);
            },
            onDragEnd: (e) => {
                this.onTouchEndPointer(e);
            }
        });
        // this.addEventListener("touchstart", this.onTouchStart);
        // this.addEventListener("trigger_pointer_pressstart", this.onTouchStartPointer);
        if (this.mouse_drag) {
            // this.addEventListener("mousedown", this.onTouchStart);
        }
        this.addScrollDrag('x');
        this.addScrollDrag('y');
    }
    addActionMove() {
        // document.body.addEventListener("touchmove", this.onTouchMove);
        // document.body.addEventListener("trigger_pointer_pressmove", this.onTouchMovePointer);
        // document.body.addEventListener("touchcancel", this.onTouchEnd);
        // document.body.addEventListener("touchend", this.onTouchEnd);
        // document.body.addEventListener("trigger_pointer_pressend", this.onTouchEndPointer);
        if (this.mouse_drag) {
            // document.body.addEventListener("mousemove", this.onTouchMove);
            // document.body.addEventListener("mouseup", this.onTouchEnd);
        }
    }
    removeActionMove() {
        // document.body.removeEventListener("touchmove", this.onTouchMove);
        // document.body.removeEventListener("trigger_pointer_pressmove", this.onTouchMovePointer);
        // document.body.removeEventListener("touchcancel", this.onTouchEnd);
        // document.body.removeEventListener("touchend", this.onTouchEnd);
        // document.body.removeEventListener("trigger_pointer_pressend", this.onTouchEndPointer);
        // document.body.removeEventListener("mousemove", this.onTouchMove);
        // document.body.removeEventListener("mouseup", this.onTouchEnd);
    }
    addScrollDrag(direction) {
        let scroller = this.scroller[direction]();
        let startPosition = 0;
        new Aventus.DragAndDrop({
            element: scroller,
            applyDrag: false,
            usePercent: true,
            offsetDrag: 0,
            isDragEnable: () => !this.disable,
            onStart: (e) => {
                this.isDragScroller = true;
                this.no_user_select = true;
                scroller.classList.add("active");
                startPosition = this.position[direction];
            },
            onMove: (e, position) => {
                let delta = position[direction] / 100 * this.contentWrapperSize[direction];
                let value = startPosition + delta;
                this.scrollDirection(direction, value);
            },
            onStop: () => {
                this.no_user_select = false;
                scroller.classList.remove("active");
                this.isDragScroller = false;
            }
        });
    }
    shouldStopPropagation(e, delta) {
        if (!this.y_scroll && this.x_scroll) {
            if ((delta.x > 0 && this.x != this.max.x) ||
                (delta.x <= 0 && this.x != 0)) {
                e.stopPropagation();
            }
        }
        else {
            if ((delta.y > 0 && this.y != this.max.y) ||
                (delta.y <= 0 && this.y != 0)) {
                e.stopPropagation();
            }
        }
    }
    addDelta(delta) {
        if (this.disable) {
            return;
        }
        this.momentum.x += delta.x;
        this.momentum.y += delta.y;
        this.renderAnimation?.start();
    }
    onWheel(e) {
        if (e.ctrlKey) {
            e.preventDefault();
            e.stopPropagation();
            if (this.pinch) {
                let factor = 0.9;
                if (e.deltaY < 0) {
                    factor = 1.1;
                }
                this.zoomOnPoint(e.clientX, e.clientY, this.zoom * factor);
            }
            return;
        }
        const DELTA_MODE = [1.0, 28.0, 500.0];
        const mode = DELTA_MODE[e.deltaMode] || DELTA_MODE[0];
        let newValue = {
            x: 0,
            y: e.deltaY * mode,
        };
        if (!this.y_scroll && this.x_scroll) {
            newValue = {
                x: e.deltaY * mode,
                y: 0,
            };
        }
        else if (this.x_scroll && e.altKey) {
            newValue = {
                x: e.deltaY * mode,
                y: 0,
            };
        }
        this.shouldStopPropagation(e, newValue);
        this.addDelta(newValue);
    }
    onTouchStartPointer(e) {
        const ev = e.event;
        if ('TouchEvent' in window && ev instanceof TouchEvent) {
            this.onTouchStart(ev);
            return true;
        }
        else if (ev instanceof PointerEvent) {
            if (this.mouse_drag || ev.pointerType == "touch") {
                this.onTouchStart(ev);
                return true;
            }
        }
        return false;
    }
    onTouchStart(e) {
        if (this.isDragScroller)
            return;
        this.touchRecord.track(e);
        this.momentum = {
            x: 0,
            y: 0
        };
        if (this.pointerCount === 0) {
            this.addActionMove();
        }
        this.pointerCount = this.touchRecord.getNbOfTouches();
        if (this.pinch && this.pointerCount == 2) {
            this.startTranslate = { x: this.x, y: this.y };
        }
    }
    onTouchMovePointer(e) {
        const ev = e.event;
        if ('TouchEvent' in window && ev instanceof TouchEvent) {
            this.onTouchMove(ev);
        }
        else if (ev instanceof PointerEvent) {
            if (this.mouse_drag || ev.pointerType == "touch") {
                this.onTouchMove(ev);
            }
        }
    }
    onTouchMove(e) {
        if (this.isDragScroller)
            return;
        this.touchRecord.update(e);
        if (this.pinch && this.pointerCount == 2) {
            // zoom
            e.stopPropagation();
            this.renderAnimation?.stop();
            this.pinchAction();
        }
        else {
            const delta = this.touchRecord.getDelta();
            this.shouldStopPropagation(e, delta);
            this.addDelta(delta);
        }
    }
    onTouchEndPointer(e) {
        const ev = e.event;
        if ('TouchEvent' in window && ev instanceof TouchEvent) {
            this.onTouchEnd(ev);
        }
        else if (ev instanceof PointerEvent) {
            if (this.mouse_drag || ev.pointerType == "touch") {
                this.onTouchEnd(ev);
            }
        }
    }
    onTouchEnd(e) {
        if (this.isDragScroller)
            return;
        const delta = this.touchRecord.getEasingDistance(this.break);
        this.shouldStopPropagation(e, delta);
        this.addDelta(delta);
        this.touchRecord.release(e);
        this.pointerCount = this.touchRecord.getNbOfTouches();
        if (this.pointerCount === 0) {
            this.removeActionMove();
        }
        if (this.pointerCount < 2) {
            this.previousMidPoint = undefined;
            this.previousDistance = undefined;
        }
    }
    calculateRealSize() {
        if (!this.contentZoom || !this.mainContainer || !this.contentWrapper) {
            return false;
        }
        const currentOffsetWidth = this.contentZoom.offsetWidth;
        const currentOffsetHeight = this.contentZoom.offsetHeight;
        let hasChanged = false;
        if (this.contentWrapper.offsetWidth != this.contentWrapperSize.x || this.contentWrapper.offsetHeight != this.contentWrapperSize.y)
            hasChanged = true;
        this.contentWrapperSize.x = this.contentWrapper.offsetWidth;
        this.contentWrapperSize.y = this.contentWrapper.offsetHeight;
        if (this.zoom < 1) {
            // scale the container for zoom
            this.contentZoom.style.width = this.div(this.mainContainer.offsetWidth, this.zoom) + 'px';
            this.contentZoom.style.height = this.div(this.mainContainer.offsetHeight, this.zoom) + 'px';
            this.contentZoom.style.maxHeight = this.div(this.mainContainer.offsetHeight, this.zoom) + 'px';
            if (currentOffsetHeight != this.display.y || currentOffsetWidth != this.display.x)
                hasChanged = true;
            this.display.y = currentOffsetHeight;
            this.display.x = currentOffsetWidth;
        }
        else {
            const newX = this.div(currentOffsetWidth, this.zoom);
            const newY = this.div(currentOffsetHeight, this.zoom);
            if (newY != this.display.y || newX != this.display.x)
                hasChanged = true;
            this.display.y = newY;
            this.display.x = newX;
            this.contentZoom.style.width = '';
            this.contentZoom.style.height = '';
            this.contentZoom.style.maxHeight = '';
        }
        return hasChanged;
    }
    calculatePositionScrollerContainer(direction) {
        if (direction == 'y') {
            this.calculatePositionScrollerContainerY();
        }
        else {
            this.calculatePositionScrollerContainerX();
        }
    }
    calculatePositionScrollerContainerY() {
        const leftMissing = this.mainContainer.offsetWidth - this.verticalScrollerContainer.offsetLeft;
        if (leftMissing > 0 && this.y_scroll_visible && !this.floating_scroll) {
            this.contentHidder.style.width = 'calc(100% - ' + leftMissing + 'px)';
            this.contentHidder.style.marginRight = leftMissing + 'px';
            this.margin.x = leftMissing;
        }
        else {
            this.contentHidder.style.width = '';
            this.contentHidder.style.marginRight = '';
            this.margin.x = 0;
        }
    }
    calculatePositionScrollerContainerX() {
        const topMissing = this.mainContainer.offsetHeight - this.horizontalScrollerContainer.offsetTop;
        if (topMissing > 0 && this.x_scroll_visible && !this.floating_scroll) {
            this.contentHidder.style.height = 'calc(100% - ' + topMissing + 'px)';
            this.contentHidder.style.marginBottom = topMissing + 'px';
            this.margin.y = topMissing;
        }
        else {
            this.contentHidder.style.height = '';
            this.contentHidder.style.marginBottom = '';
            this.margin.y = 0;
        }
    }
    calculateSizeScroller(direction) {
        const scrollerSize = (this.div((this.display[direction] - this.margin[direction]), this.contentWrapperSize[direction]) * 100);
        if (direction == "y") {
            this.scroller[direction]().style.height = scrollerSize + '%';
        }
        else {
            this.scroller[direction]().style.width = scrollerSize + '%';
        }
        let maxScrollContent = this.contentWrapperSize[direction] - this.display[direction];
        if (maxScrollContent < 0) {
            maxScrollContent = 0;
        }
        this.max[direction] = maxScrollContent + this.margin[direction];
    }
    changeZoom() {
        this.contentZoom.style.transform = 'scale(' + this.zoom + ')';
        this.dimensionRefreshed(true);
    }
    dimensionRefreshed(force = false) {
        if (this.contentWrapper.offsetHeight > 0 && this.contentWrapper.offsetWidth > 0) {
            this.loadedOnce = true;
            if (this.savedPercent) {
                this.position.x = this.contentWrapper.offsetWidth * this.savedPercent.x;
                this.position.y = this.contentWrapper.offsetHeight * this.savedPercent.y;
                this.savedPercent = undefined;
            }
        }
        else if (this.loadedOnce) {
            this.savedPercent = {
                x: this.div(this.position.x, this.contentWrapperSize.x),
                y: this.div(this.position.y, this.contentWrapperSize.y)
            };
        }
        if (!this.calculateRealSize() && !force) {
            return;
        }
        if (this.contentWrapperSize.y - this.display.y > 0) {
            if (!this.y_scroll_visible) {
                this.y_scroll_visible = true;
                this.calculatePositionScrollerContainer('y');
            }
            this.calculateSizeScroller('y');
            this.scrollDirection('y', this.y);
        }
        else if (this.y_scroll_visible) {
            this.y_scroll_visible = false;
            this.calculatePositionScrollerContainer('y');
            this.calculateSizeScroller('y');
            this.scrollDirection('y', 0);
        }
        if (this.contentWrapperSize.x - this.display.x > 0) {
            if (!this.x_scroll_visible) {
                this.x_scroll_visible = true;
                this.calculatePositionScrollerContainer('x');
            }
            this.calculateSizeScroller('x');
            this.scrollDirection('x', this.x);
        }
        else if (this.x_scroll_visible) {
            this.x_scroll_visible = false;
            this.calculatePositionScrollerContainer('x');
            this.calculateSizeScroller('x');
            this.scrollDirection('x', 0);
        }
    }
    createResizeObserver() {
        let inProgress = false;
        return new Aventus.ResizeObserver({
            callback: entries => {
                if (inProgress) {
                    return;
                }
                inProgress = true;
                this.dimensionRefreshed();
                inProgress = false;
            },
            fps: 30
        });
    }
    addResizeObserver() {
        if (this.observer == undefined) {
            this.observer = this.createResizeObserver();
        }
        this.observer.observe(this.contentWrapper);
        this.observer.observe(this);
    }
    div(nb1, nb2) {
        if (!nb2)
            return nb1;
        return nb1 / nb2;
    }
    postCreation() {
        this.dimensionRefreshed();
        this.addResizeObserver();
        this.addAction();
    }
    static lock(element) {
        const container = element.findParentByType(Layout.Scrollable);
        if (container) {
            container.disable = true;
        }
    }
    static unlock(element) {
        const container = element.findParentByType(Layout.Scrollable);
        if (container) {
            container.disable = false;
        }
    }
}
Layout.Scrollable.Namespace=`Aventus.Layout`;
Layout.Scrollable.Tag=`av-scrollable`;
__as1(_.Layout, 'Scrollable', Layout.Scrollable);
if(!window.customElements.get('av-scrollable')){window.customElements.define('av-scrollable', Layout.Scrollable);Aventus.WebComponentInstance.registerDefinition(Layout.Scrollable);}

let Process=class Process {
    /**
     * Static handler for processing generic errors.
     */
    static handleErrors;
    /**
     * Configures the Process utility with custom error handling.
     */
    static configure(config) {
        this.handleErrors = config.handleErrors;
    }
    static async execute(prom) {
        const queryResult = await prom;
        return await this.parseErrors(queryResult);
    }
    static async parseErrors(result) {
        if (result.errors.length > 0) {
            if (this.handleErrors) {
                let msg = result.errors.map(p => p.message.replace(/\n/g, '<br/>')).join("<br/>");
                this.handleErrors(msg, result.errors);
            }
            return undefined;
        }
        if (result instanceof Aventus.ResultWithError)
            return result.result;
        if (result instanceof Aventus.VoidWithError)
            return result.success;
        return undefined;
    }
}
<<<<<<< HEAD
Process.Namespace=`Aventus`;
__as1(_, 'Process', Process);

Toast.ToastManager = class ToastManager extends Aventus.WebComponent {
    get 'gap'() { return this.getNumberAttr('gap') }
    set 'gap'(val) { this.setNumberAttr('gap', val) }get 'not_main'() { return this.getBoolAttr('not_main') }
    set 'not_main'(val) { this.setBoolAttr('not_main', val) }    static defaultToast;
    static defaultToastManager;
    static defaultPosition = 'top right';
    static defaultDelay = 5000;
    static heightLimitPercent = 100;
    static instance;
    activeToasts = {
        top: [],
        'top left': [],
        'bottom left': [],
        bottom: [],
        'bottom right': [],
        'top right': [],
    };
    waitingToasts = {
        top: [],
        'top left': [],
        'bottom left': [],
        bottom: [],
        'bottom right': [],
        'top right': [],
    };
    get containerHeight() {
        return this.offsetHeight;
    }
    get heightLimit() {
        return this.containerHeight * Toast.ToastManager.heightLimitPercent / 100;
    }
    mutex = new Aventus.Mutex();
    static __style = `:host{--_toast-space-bottom: var(--toast-space-bottom, 20px);--_toast-space-top: var(--toast-space-top, 20px);--_toast-space-right: var(--toast-space-right, 10px);--_toast-space-left: var(--toast-space-left, 10px)}:host{inset:0;overflow:hidden;pointer-events:none;position:fixed;z-index:50}:host ::slotted(*){pointer-events:auto}`;
    __getStatic() {
        return ToastManager;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ToastManager.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "ToastManager";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('gap')){ this['gap'] = 10; }if(!this.hasAttribute('not_main')) { this.attributeChangedCallback('not_main', false, false); } }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('containerHeight');this.__correctGetter('heightLimit');this.__upgradeProperty('gap');this.__upgradeProperty('not_main'); }
    __listBoolProps() { return ["not_main"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    async add(toast) {
        await this.mutex.waitOne();
        let realToast;
        if (toast instanceof _.Toast.ToastElement) {
            realToast = toast;
        }
        else {
            if (!Toast.ToastManager.defaultToast)
                throw "No default toast. Try ToastManager.configure()";
            realToast = new Toast.ToastManager.defaultToast();
            await realToast._setOptions(toast);
        }
        this.appendChild(realToast);
        if (realToast.position == "bottom") {
            return this._notifyBottom(realToast, true);
        }
        else if (realToast.position == "bottom left") {
            return this._notifyBottomLeft(realToast, true);
        }
        else if (realToast.position == "top left") {
            return this._notifyTopLeft(realToast, true);
        }
        else if (realToast.position == "bottom right") {
            return this._notifyBottomRight(realToast, true);
        }
        else if (realToast.position == "top right") {
            return this._notifyTopRight(realToast, true);
        }
        else if (realToast.position == "top") {
            return this._notifyTop(realToast, true);
        }
        return false;
    }
    _calculateBottom(toast, firstTime, position, from) {
        return new Promise((resolve) => {
            let height = toast.offsetHeight;
            let containerHeight = this.containerHeight;
            const _remove = (result) => {
                let index = this.activeToasts[position].indexOf(toast);
                if (index > -1) {
                    this.activeToasts[position].splice(index, 1);
                }
                if (this.waitingToasts[position].length > 0) {
                    let nextNotif = this.waitingToasts[position].splice(0, 1)[0];
                    this._calculateBottom(nextNotif, false, position, index);
                }
                else {
                    let containerHeight = this.containerHeight;
                    for (let i = 0; i < index; i++) {
                        let notif = this.activeToasts[position][i];
                        let bottom = containerHeight - (notif.offsetTop + notif.offsetHeight);
                        notif.style.bottom = bottom - height - this.gap + 'px';
                    }
                }
                resolve(result);
            };
            let length = this.activeToasts[position].length;
            if (length == 0) {
                this.activeToasts[position].push(toast);
                toast.show(_remove);
            }
            else {
                let totHeight = 0;
                for (let t of this.activeToasts[position]) {
                    totHeight += t.offsetHeight + this.gap;
                }
                if (totHeight + height < this.heightLimit) {
                    for (let i = from; i < this.activeToasts[position].length; i++) {
                        let t = this.activeToasts[position][i];
                        let bottom = containerHeight - (t.offsetTop + t.offsetHeight);
                        t.style.bottom = bottom + height + this.gap + 'px';
                    }
                    this.activeToasts[position].push(toast);
                    toast.show(_remove);
                }
                else if (firstTime) {
                    this.waitingToasts[position].push(toast);
                }
            }
        });
    }
    _calculateTop(toast, firstTime, position, from) {
        return new Promise(async (resolve) => {
            let height = toast.offsetHeight;
            const _remove = (result) => {
                let index = this.activeToasts[position].indexOf(toast);
                if (index > -1) {
                    this.activeToasts[position].splice(index, 1);
                }
                if (this.waitingToasts[position].length > 0) {
                    let nextNotif = this.waitingToasts[position].splice(0, 1)[0];
                    this._calculateTop(nextNotif, false, position, index);
                }
                else {
                    for (let i = 0; i < index; i++) {
                        let notif = this.activeToasts[position][i];
                        let top = (notif.offsetTop - height - this.gap);
                        notif.style.top = top + 'px';
                    }
                }
                resolve(result);
            };
            let length = this.activeToasts[position].length;
            if (length == 0) {
                this.activeToasts[position].push(toast);
                toast.show(_remove);
            }
            else {
                let totHeight = 0;
                for (let notif of this.activeToasts[position]) {
                    await notif.waitTransition();
                    totHeight += notif.offsetHeight + this.gap;
                }
                if (totHeight + height < this.heightLimit) {
                    for (let i = from; i < this.activeToasts[position].length; i++) {
                        let notif = this.activeToasts[position][i];
                        await notif.waitTransition();
                        let top = (notif.offsetTop + notif.offsetHeight);
                        notif.style.top = top + this.gap + 'px';
                    }
                    this.activeToasts[position].push(toast);
                    toast.show(_remove);
                }
                else if (firstTime) {
                    this.waitingToasts[position].push(toast);
                }
            }
            this.mutex.release();
            return;
        });
    }
    async _notifyBottomRight(toast, firstTime) {
        return await this._calculateBottom(toast, firstTime, "bottom right", 0);
    }
    async _notifyTopRight(toast, firstTime) {
        return await this._calculateTop(toast, firstTime, "top right", 0);
    }
    async _notifyBottomLeft(toast, firstTime) {
        return await this._calculateBottom(toast, firstTime, "bottom left", 0);
    }
    async _notifyTopLeft(toast, firstTime) {
        return await this._calculateTop(toast, firstTime, "top left", 0);
    }
    async _notifyTop(toast, firstTime, from = 0) {
        return await this._calculateTop(toast, firstTime, "top", 0);
    }
    async _notifyBottom(toast, firstTime, from = 0) {
        return await this._calculateBottom(toast, firstTime, "bottom", from);
    }
    postConnect() {
        super.postConnect();
        if (!Toast.ToastManager.instance && !this.not_main) {
            Toast.ToastManager.instance = this;
        }
    }
    postDisonnect() {
        if (Toast.ToastManager.instance == this) {
            Toast.ToastManager.instance = undefined;
        }
    }
    static add(toast) {
        if (!this.instance) {
            this.instance = this.defaultToastManager ? new this.defaultToastManager() : new Toast.ToastManager();
            document.body.appendChild(this.instance);
        }
        return this.instance.add(toast);
    }
    static configure(options) {
        for (let key in options) {
            if (options[key] !== undefined)
                this[key] = options[key];
        }
    }
}
Toast.ToastManager.Namespace=`Aventus.Toast`;
Toast.ToastManager.Tag=`av-toast-manager`;
__as1(_.Toast, 'ToastManager', Toast.ToastManager);
if(!window.customElements.get('av-toast-manager')){window.customElements.define('av-toast-manager', Toast.ToastManager);Aventus.WebComponentInstance.registerDefinition(Toast.ToastManager);}

Lib.ShortcutManager=class ShortcutManager {
    static memory = {};
    static autoPrevents = [];
    static isInit = false;
    static arrayKeys = [];
    static options = new Map();
    static replacingMemory = {};
    static isTxt(touch) {
        return touch.match(/[a-zA-Z0-9_\+\-]/g);
    }
    static getText(combinaison) {
        let allTouches = [];
        for (let touch of combinaison) {
            let realTouch = "";
            if (typeof touch == "number" && Lib.SpecialTouch[touch] !== undefined) {
                realTouch = Lib.SpecialTouch[touch];
            }
            else if (this.isTxt(touch)) {
                realTouch = touch;
            }
            else {
                throw "I can't use " + touch + " to add a shortcut";
            }
            allTouches.push(realTouch);
        }
        allTouches.sort();
        return allTouches.join("+");
    }
    static subscribe(combinaison, cb, options) {
        if (!Array.isArray(combinaison)) {
            combinaison = [combinaison];
        }
        let key = this.getText(combinaison);
        if (options?.replaceTemp) {
            if (Lib.ShortcutManager.memory[key]) {
                if (!this.replacingMemory[key]) {
                    this.replacingMemory[key] = [];
                }
                this.replacingMemory[key].push(Lib.ShortcutManager.memory[key]);
                delete Lib.ShortcutManager.memory[key];
            }
        }
        if (!Lib.ShortcutManager.memory[key]) {
            Lib.ShortcutManager.memory[key] = [];
        }
        if (!Lib.ShortcutManager.memory[key].includes(cb)) {
            Lib.ShortcutManager.memory[key].push(cb);
            if (options) {
                this.options.set(cb, options);
            }
        }
        if (!Lib.ShortcutManager.isInit) {
            Lib.ShortcutManager.init();
        }
    }
    static unsubscribe(combinaison, cb) {
        if (!Array.isArray(combinaison)) {
            combinaison = [combinaison];
        }
        let key = this.getText(combinaison);
        if (Lib.ShortcutManager.memory[key]) {
            let index = Lib.ShortcutManager.memory[key].indexOf(cb);
            if (index != -1) {
                Lib.ShortcutManager.memory[key].splice(index, 1);
                let options = this.options.get(cb);
                if (options) {
                    this.options.delete(cb);
                }
                if (Lib.ShortcutManager.memory[key].length == 0) {
                    delete Lib.ShortcutManager.memory[key];
                    if (options?.replaceTemp) {
                        if (this.replacingMemory[key]) {
                            if (this.replacingMemory[key].length > 0) {
                                Lib.ShortcutManager.memory[key] = this.replacingMemory[key].pop();
                                if (this.replacingMemory[key].length == 0) {
                                    delete this.replacingMemory[key];
                                }
                            }
                            else {
                                delete this.replacingMemory[key];
                            }
                        }
                    }
                }
                if (Object.keys(Lib.ShortcutManager.memory).length == 0 && Lib.ShortcutManager.isInit) {
                    //ShortcutManager.uninit();
                }
            }
        }
    }
    static async onKeyDown(e) {
        if (e.ctrlKey) {
            let txt = Lib.SpecialTouch[Lib.SpecialTouch.Control];
            if (!this.arrayKeys.includes(txt)) {
                this.arrayKeys.push(txt);
            }
        }
        if (e.altKey) {
            let txt = Lib.SpecialTouch[Lib.SpecialTouch.Alt];
            if (!this.arrayKeys.includes(txt)) {
                this.arrayKeys.push(txt);
            }
        }
        if (e.shiftKey) {
            let txt = Lib.SpecialTouch[Lib.SpecialTouch.Shift];
            if (!this.arrayKeys.includes(txt)) {
                this.arrayKeys.push(txt);
            }
        }
        if (this.isTxt(e.key) && !this.arrayKeys.includes(e.key)) {
            this.arrayKeys.push(e.key);
        }
        else if (Lib.SpecialTouch[e.key] !== undefined && !this.arrayKeys.includes(e.key)) {
            this.arrayKeys.push(e.key);
        }
        this.arrayKeys.sort();
        let key = this.arrayKeys.join("+");
        if (Lib.ShortcutManager.memory[key]) {
            let preventDefault = true;
            for (let cb of Lib.ShortcutManager.memory[key]) {
                let options = this.options.get(cb);
                if (options && options.preventDefault === false) {
                    preventDefault = false;
                }
            }
            this.arrayKeys = [];
            for (let cb of Lib.ShortcutManager.memory[key]) {
                const result = await cb();
                if (result === false) {
                    preventDefault = result;
                }
            }
            if (preventDefault) {
                e.preventDefault();
            }
        }
        else if (Lib.ShortcutManager.autoPrevents.includes(key)) {
            e.preventDefault();
        }
    }
    static onKeyUp(e) {
        let index = this.arrayKeys.indexOf(e.key);
        if (index != -1) {
            this.arrayKeys.splice(index, 1);
        }
    }
    static init() {
        if (Lib.ShortcutManager.isInit)
            return;
        Lib.ShortcutManager.isInit = true;
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        Lib.ShortcutManager.autoPrevents = [
            this.getText([Lib.SpecialTouch.Control, "s"]),
            this.getText([Lib.SpecialTouch.Control, "p"]),
            this.getText([Lib.SpecialTouch.Control, "l"]),
            this.getText([Lib.SpecialTouch.Control, "k"]),
            this.getText([Lib.SpecialTouch.Control, "j"]),
            this.getText([Lib.SpecialTouch.Control, "h"]),
            this.getText([Lib.SpecialTouch.Control, "g"]),
            this.getText([Lib.SpecialTouch.Control, "f"]),
            this.getText([Lib.SpecialTouch.Control, "d"]),
            this.getText([Lib.SpecialTouch.Control, "o"]),
            this.getText([Lib.SpecialTouch.Control, "u"]),
            this.getText([Lib.SpecialTouch.Control, "e"]),
        ];
        window.addEventListener("blur", () => {
            this.arrayKeys = [];
        });
        document.body.addEventListener("keydown", this.onKeyDown);
        document.body.addEventListener("keyup", this.onKeyUp);
    }
    static setAutoPrevents(combinaisons) {
        if (!Lib.ShortcutManager.isInit) {
            this.init();
        }
        Lib.ShortcutManager.autoPrevents = [];
        for (let combinaison of combinaisons) {
            Lib.ShortcutManager.autoPrevents.push(this.getText(combinaison));
        }
    }
    static uninit() {
        document.body.removeEventListener("keydown", this.onKeyDown);
        document.body.removeEventListener("keyup", this.onKeyUp);
        this.arrayKeys = [];
        Lib.ShortcutManager.isInit = false;
    }
}
Lib.ShortcutManager.Namespace=`Aventus.Lib`;
__as1(_.Lib, 'ShortcutManager', Lib.ShortcutManager);

Modal.ModalElement = class ModalElement extends Aventus.WebComponent {
    get 'options'() {
						return this.__watch["options"];
					}
					set 'options'(val) {
						this.__watch["options"] = val;
					}    static defaultCloseWithEsc = true;
    static defaultCloseWithClick = true;
    static defaultRejectValue = null;
    cb;
    pressManagerClickClose;
    pressManagerPrevent;
    __registerWatchesActions() {
    this.__addWatchesActions("options", ((target, action, path, value) => {
    target.onOptionsChanged();
}));    super.__registerWatchesActions();
}
    static __style = `:host{align-items:center;display:flex;inset:0;justify-content:center;position:fixed;z-index:60}:host .modal{background-color:#fff;padding:1.5rem;position:relative}`;
    constructor() {
        super();
        this.options = this.configure();
        if (this.options.closeWithClick === undefined)
            this.options.closeWithClick = Modal.ModalElement.defaultCloseWithClick;
        if (this.options.closeWithEsc === undefined)
            this.options.closeWithEsc = Modal.ModalElement.defaultCloseWithEsc;
        if (!Object.hasOwn(this.options, "rejectValue")) {
            this.options.rejectValue = Modal.ModalElement.defaultRejectValue;
        }
        if (this.constructor == ModalElement) {
            throw "can't instanciate an abstract class";
        }
        this.close = this.close.bind(this);
        this.reject = this.reject.bind(this);
        this.resolve = this.resolve.bind(this);
    }
    __getStatic() {
        return ModalElement;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ModalElement.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<div class="modal" _id="modalelement_0">	<slot></slot></div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "modalEl",
      "ids": [
        "modalelement_0"
      ]
    }
  ]
}); }
    getClassName() {
        return "ModalElement";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["options"] = undefined; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('options'); }
    onOptionsChanged() { }
    init(cb) {
        this.cb = cb;
        if (this.options.closeWithEsc) {
            Lib.ShortcutManager.subscribe(Lib.SpecialTouch.Escape, this.reject, { replaceTemp: true });
        }
        if (this.options.closeWithClick) {
            this.pressManagerClickClose = new Aventus.PressManager({
                element: this,
                onPress: () => {
                    this.reject();
                }
            });
            this.pressManagerPrevent = new Aventus.PressManager({
                element: this.modalEl,
                onPress: () => { }
            });
        }
    }
    show(element) {
        return Modal.ModalElement._show(this, element);
    }
    close() {
        Lib.ShortcutManager.unsubscribe(Lib.SpecialTouch.Escape, this.reject);
        this.pressManagerClickClose?.destroy();
        this.pressManagerPrevent?.destroy();
        this.remove();
    }
    reject(no_close) {
        if (this.cb) {
            this.cb(this.options.rejectValue ?? null);
        }
        if (no_close !== true) {
            this.close();
        }
    }
    resolve(response, no_close) {
        if (this.cb) {
            this.cb(response);
        }
        if (no_close !== true) {
            this.close();
        }
    }
    static configure(options) {
        if (options.closeWithClick !== undefined)
            this.defaultCloseWithClick = options.closeWithClick;
        if (options.closeWithEsc !== undefined)
            this.defaultCloseWithEsc = options.closeWithEsc;
        if (!Object.hasOwn(options, "rejectValue")) {
            this.defaultRejectValue = options.rejectValue;
        }
    }
    static _show(modal, element) {
        return new Promise((resolve) => {
            modal.init((response) => {
                resolve(response);
            });
            if (!element) {
                element = document.body;
            }
            element.appendChild(modal);
        });
    }
}
Modal.ModalElement.Namespace=`Aventus.Modal`;
__as1(_.Modal, 'ModalElement', Modal.ModalElement);

=======
Process.Namespace=`Aventus`;
__as1(_, 'Process', Process);

>>>>>>> 8835a8f (Update to new version)
Form.Validator=class Validator {
    /**
     * The default error message for the validator.
     */
    static msg = "There is an error";
    /**
     * Statically tests a value against one or more validators.
     */
    static async Test(validators, value, name, globalValidation) {
        if (!Array.isArray(validators)) {
            validators = [validators];
        }
        let result = [];
        for (let validator of validators) {
            let resultTemp = new validator();
            const temp = await resultTemp.validate(value, name, globalValidation);
            if (temp === false) {
                result.push('Le champs n\'est pas valide');
            }
            else if (Array.isArray(temp)) {
                for (let error of temp) {
                    result.push(error);
                }
            }
            else if (typeof temp == 'string') {
                result.push(temp);
            }
        }
        return result.length == 0 ? undefined : result;
    }
    _msg;
    /**
     * Initializes a new Validator instance with an optional custom error message.
     */
    constructor(msg) {
        this._msg = msg;
        this.validate = this.validate.bind(this);
    }
    /**
     * Retrieves the error message for the validator, optionally replacing placeholders.
     */
    getMsg(replace) {
        let msg = this._msg ?? this.constructor['msg'];
        if (typeof msg == 'function')
            msg = msg();
        if (replace) {
            for (let field in replace) {
                msg = msg.replace(new RegExp(`\\{ *${field} *\\}`, 'g'), replace[field]);
            }
        }
        return msg;
    }
}
Form.Validator.Namespace=`Aventus.Form`;
__as1(_.Form, 'Validator', Form.Validator);

Form.Validators.Required=class Required extends _.Form.Validator {
    /**
     * The default error message for a required field.
     */
    static msg = "Le champs {name} est requis";
    /**
     * @inheritdoc
     * Validates if the provided value is not undefined, null, or an empty string.
     */
    validate(value, name, globalValidation) {
        const txt = this.getMsg({ name });
        if (value === undefined || value === null) {
            return txt;
        }
        if (typeof value == 'string' && value.trim() == "") {
            return txt;
        }
        return true;
    }
}
Form.Validators.Required.Namespace=`Aventus.Form.Validators`;
__as1(_.Form.Validators, 'Required', Form.Validators.Required);

Toast.ToastElement = class ToastElement extends Aventus.WebComponent {
    get 'position'() { return this.getStringAttr('position') }
    set 'position'(val) { this.setStringAttr('position', val) }
get 'delay'() { return this.getNumberAttr('delay') }
    set 'delay'(val) { this.setNumberAttr('delay', val) }
get 'is_active'() { return this.getBoolAttr('is_active') }
    set 'is_active'(val) { this.setBoolAttr('is_active', val) }
    showAsked = false;
    onHideCallback = () => { };
    timeout = 0;
    hasTransition = false;
    waitTransitionCbs = [];
    static __style = `:host{position:absolute}:host(:not([is_active])){opacity:0;visibility:hidden}:host([position="bottom left"]){bottom:0px;left:0px}:host([position="top left"]){left:0;top:0}:host([position="bottom right"]){bottom:0;right:0}:host([position="top right"]){right:0;top:0}:host([position=top]){left:50%;top:0;transform:translateX(-50%)}:host([position=bottom]){bottom:0;left:50%;transform:translateX(-50%)}`;
    constructor() {
        super();
        this.addTransition();
        if (this.constructor == ToastElement) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return ToastElement;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ToastElement.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "ToastElement";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('position')){ this['position'] = _.Toast.ToastManager.defaultPosition; }
if(!this.hasAttribute('delay')){ this['delay'] = _.Toast.ToastManager.defaultDelay; }
if(!this.hasAttribute('is_active')) { this.attributeChangedCallback('is_active', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('position');
this.__upgradeProperty('delay');
this.__upgradeProperty('is_active');
 }
    __listBoolProps() { return ["is_active"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    _setOptions(options) {
        if (options.position !== undefined)
            this.position = options.position;
        if (options.delay !== undefined)
            this.delay = options.delay;
        return this.setOptions(options);
    }
    show(onHideCallback) {
        this.onHideCallback = onHideCallback;
        if (this.isReady) {
            this.is_active = true;
            this.startDelay();
        }
        else {
            this.showAsked = true;
        }
    }
    startDelay() {
        if (this.delay > 0) {
            this.timeout = setTimeout(() => {
                this.close();
            }, this.delay);
        }
    }
    async close() {
        if (this.onHideCallback) {
            this.is_active = false;
            this.onHideCallback(false);
            this.remove();
        }
    }
    addTransition() {
        this.addEventListener("transitionstart", (e) => {
            this.hasTransition = true;
        });
        this.addEventListener("transitionend", () => {
            this.hasTransition = false;
            let cbs = [...this.waitTransitionCbs];
            this.waitTransitionCbs = [];
            for (let cb of cbs) {
                cb();
            }
        });
    }
    waitTransition() {
        if (this.hasTransition) {
            return new Promise((resolve) => {
                this.waitTransitionCbs.push(resolve);
            });
        }
        return new Promise((resolve) => {
            resolve();
        });
    }
    postCreation() {
        if (this.showAsked) {
            this.is_active = true;
            this.startDelay();
        }
    }
    static add(options) {
        return _.Toast.ToastManager.add(options);
    }
}
Toast.ToastElement.Namespace=`Aventus.Toast`;
__as1(_.Toast, 'ToastElement', Toast.ToastElement);

Form.Form = class Form extends Aventus.WebComponent {
    static get defaultConfig() {
        return _.Form.FormHandler._globalConfig;
    }
    static set formElements(value) {
        _.Form.FormHandler._IFormElements = value;
    }
    static get formElements() {
        return _.Form.FormHandler._IFormElements;
    }
    form;
    request;
    elements = [];
    btns = [];
    onSubmit = new Aventus.Callback();
    static __style = `:host{width:100%}`;
    constructor() {
        super();
        this.checkEnter = this.checkEnter.bind(this);
    }
    __getStatic() {
        return Form;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Form.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Form";
    }
    checkEnter(e) {
        if (e.key == "Enter") {
            this.requestSubmit();
        }
    }
    registerElement(element) {
        if (this.elements.length > 0) {
            this.elements[this.elements.length - 1].removeEventListener("keyup", this.checkEnter);
        }
        this.elements.push(element);
        element.addEventListener("keyup", this.checkEnter);
        return this;
    }
    registerSubmit(element) {
        this.btns.push(element);
        return this;
    }
    async requestSubmit() {
        if (!this.form) {
            for (let element of this.elements) {
                this.form = element.form?.handler;
                if (this.form)
                    break;
            }
        }
        if (this.form) {
            if (this.request || this.form.hasSubmitFct) {
                for (let btn of this.btns) {
                    if ("loading" in btn) {
                        btn.loading = true;
                    }
                }
                await this.form.submit(this.request);
                for (let btn of this.btns) {
                    if ("loading" in btn) {
                        btn.loading = false;
                    }
                }
            }
            else if (await this.form.validate()) {
                this.onSubmit.trigger();
            }
        }
        else {
            this.onSubmit.trigger();
        }
    }
    static createFromController(controller, schema, config, config2) {
        if (typeof schema == "string") {
            let _name = schema;
            let _schema = config;
            let _config = config2;
            return _.Form.FormHandlerController.createWithName(controller, _name, _schema, _config);
        }
        let form = _.Form.FormHandlerController.create(controller, schema, config);
        return form;
    }
    static create(schema, config) {
        let form = new _.Form.FormHandler(schema, config);
        return form;
    }
    static configure(value) {
        _.Form.FormHandler._globalConfig = value;
    }
}
Form.Form.Namespace=`Aventus.Form`;
Form.Form.Tag=`av-form`;
__as1(_.Form, 'Form', Form.Form);
if(!window.customElements.get('av-form')){window.customElements.define('av-form', Form.Form);Aventus.WebComponentInstance.registerDefinition(Form.Form);}

Form.FormHandler=class FormHandler {
    /**
     * Global configuration settings for FormHandler instances.
     */
    static _globalConfig;
    /**
     * List of constructors for elements that implement IForm.
     */
    static _IFormElements = [Form.Form];
    /**
     * Internal watcher instance for tracking form data changes.
     */
    __watcher;
    /**
     * The data item associated with the form.
     */
    get item() {
        return this.__watcher.item;
    }
    /**
     * Sets the data item associated with the form.
     */
    set item(item) {
        this.__watcher.item = item;
    }
    /**
     * Provides access to the internal form parts for the schema.
     */
    get parts() {
        return this.__watcher.form;
    }
    /**
     * Internal map of registered form elements by field name.
     */
    _elements = {};
    /**
     * Provides access to the registered form elements.
     */
    get elements() {
        return { ...this._elements };
    }
    /**
     * Global validation function for the form.
     */
    _globalValidation;
    /**
     * Indicates if validation should occur on input change.
     */
    _validateOnChange = false;
    /**
     * Fallback handler for validation errors not linked to a specific input.
     */
    _onValidateFallback;
    /**
     * Fallback handler for server-side errors not linked to a specific input.
     */
    _onServerFallback;
    /**
     * Function to extract field-specific error messages from a generic error.
     */
    _extractor;
    /**
     * Callback executed upon successful form submission.
     */
    _onSuccess;
    /**
     * The internal function responsible for submitting the form.
     */
    _submitFct;
    /**
     * Checks if a submission function is defined for the form.
     */
    get hasSubmitFct() {
        return this._submitFct != undefined;
    }
    /**
     * The default values for the form fields.
     */
    defaultValues;
    /**
     * Callback triggered when an item's property changes.
     */
    onItemChange = new Aventus.Callback();
    /**
     * Initializes a new FormHandler instance with a given schema and optional configuration.
     */
    constructor(schema, config) {
        this.writeValidationIntoConsole = this.writeValidationIntoConsole.bind(this);
        this.writeErrorIntoConsole = this.writeErrorIntoConsole.bind(this);
        this.defaultExtractor = this.defaultExtractor.bind(this);
        this._globalValidation = config?.validate ?? Form.FormHandler._globalConfig?.validate;
        this._validateOnChange = config?.validateOnChange ?? Form.FormHandler._globalConfig?.validateOnChange ?? false;
        this._onValidateFallback = config?.onValidateFallback ?? Form.FormHandler._globalConfig?.onValidateFallback ?? this.writeValidationIntoConsole;
        this._onServerFallback = config?.onServerFallback ?? Form.FormHandler._globalConfig?.onServerFallback ?? this.writeErrorIntoConsole;
        this._extractor = config?.extractor ?? Form.FormHandler._globalConfig?.extractor ?? this.defaultExtractor;
        this._onSuccess = config?.onSuccess ?? Form.FormHandler._globalConfig?.onSuccess;
        this._submitFct = config?.submit;
        this.defaultValues = config?.defaultValues ?? {};
        this.onWatcherChanged = this.onWatcherChanged.bind(this);
        this.__watcher = Aventus.Watcher.get({
            form: {},
            item: this.defaultValues
        }, this.onWatcherChanged);
        this.__watcher.form = this.transformForm(schema);
    }
    /**
     * Logs validation errors to the console.
     */
    writeValidationIntoConsole(errors) {
        for (let name in errors) {
            if (!errors[name])
                continue;
            for (let error of errors[name]) {
                console.log(name + ": " + error);
            }
        }
    }
    /**
     * Logs generic errors to the console.
     */
    writeErrorIntoConsole(errors) {
        for (let error in errors) {
            console.log(error);
        }
    }
    /**
     * Transforms the raw form schema into an internal representation.
     */
    transformForm(form) {
        const result = form;
        const normalizePart = (part) => {
            let needTransform = true;
            if (typeof part == 'object' && !Array.isArray(part)) {
                const keys = Object.keys(part);
                const keysAllows = ['validate', 'validateOnChange'];
                let isValid = true;
                for (let i = 0; i < keys.length; i++) {
                    const allows = keysAllows;
                    if (!allows.includes(keys[i])) {
                        isValid = false;
                        break;
                    }
                }
                if (isValid) {
                    needTransform = false;
                }
            }
            if (needTransform) {
                return {
                    validate: part
                };
            }
            return part;
        };
        const createKey = (key) => {
            const f = form;
            f[key] = normalizePart(f[key]);
            this.transformFormPart(key, f[key]);
        };
        for (let key in result) {
            createKey(key);
        }
        return result;
    }
    /**
     * Transforms a single form part within the internal form representation.
     */
    transformFormPart(key, part) {
        if (!part)
            return;
        const realPart = part;
        realPart.onValidation = new Aventus.Callback();
        realPart.onValueChange = new Aventus.Callback();
        realPart.handler = this;
        if (part.validate) {
            const isConstructor = (validate) => {
                return Aventus.isClass(validate);
            };
            let validate;
            if (Array.isArray(part.validate)) {
                const fcts = [];
                for (let temp of part.validate) {
                    if (temp instanceof _.Form.Validator) {
                        fcts.push(temp.validate);
                    }
                    else {
                        let resultTemp = new temp();
                        fcts.push(resultTemp.validate);
                    }
                }
                validate = async (value, name, globalFct) => {
                    let result = [];
                    for (let fct of fcts) {
                        const temp = await fct(value, name, globalFct);
                        if (temp === false) {
                            result.push('Le champs n\'est pas valide');
                        }
                        else if (Array.isArray(temp)) {
                            for (let error of temp) {
                                result.push(error);
                            }
                        }
                        else if (typeof temp == 'string') {
                            result.push(temp);
                        }
                    }
                    return result.length == 0 ? undefined : result;
                };
            }
            else if (part.validate instanceof _.Form.Validator) {
                validate = part.validate.validate;
            }
            else if (isConstructor(part.validate)) {
                let cst = part.validate;
                let resultTemp = new cst();
                validate = resultTemp.validate;
            }
            else {
                validate = part.validate;
            }
            realPart.validate = validate;
        }
        realPart.test = async () => {
            const result = await this.validate(key);
            return result;
        };
        if (!this._elements[key]) {
            this._elements[key] = [];
        }
        realPart.register = (el) => {
            if (this._elements[key] && !this._elements[key].includes(el)) {
                this._elements[key].push(el);
            }
        };
        realPart.unregister = (el) => {
            if (!this._elements[key])
                return;
            const index = this._elements[key].indexOf(el);
            if (index != -1) {
                this._elements[key].splice(index, 1);
            }
        };
        realPart.value = {
            get: () => {
                return Aventus.getValueFromObject(key, this.item);
            },
            set: (value) => {
                return Aventus.setValueToObject(key, this.item, value);
            }
        };
        return;
    }
    /**
     * Handles changes observed by the watcher, triggering value change and validation for relevant form parts.
     */
    async onWatcherChanged(action, path, value) {
        if (!this.parts)
            return;
        if (path == "item") {
            for (let key in this.parts) {
                let formPart = this.parts[key];
                formPart.onValueChange.trigger();
            }
        }
        else if (path.startsWith("item.")) {
            let key = path.substring("item.".length);
            const parts = this.parts;
            if (parts[key]) {
                let formPart = parts[key];
                formPart.onValueChange.trigger();
                const validateOnChange = formPart.validateOnChange === undefined ? this._validateOnChange : formPart.validateOnChange;
                if (validateOnChange) {
                    this.validate(key);
                }
            }
            this.onItemChange.trigger(action, key, value);
        }
    }
    async _validate(key) {
        try {
            if (!this.parts)
                return { "@general": ["Aucun formulaire trouvé"] };
            if (key !== undefined) {
                let errorsForm = [];
                if (this.parts[key]) {
                    let formPart = this.parts[key];
                    let value = formPart.value.get();
                    const resultToError = (result) => {
                        if (result === false) {
                            errorsForm.push('Le champs n\'est pas valide');
                        }
                        else if (typeof result == 'string' && result !== "") {
                            errorsForm.push(result);
                        }
                        else if (Array.isArray(result)) {
                            errorsForm = [...errorsForm, ...result];
                        }
                    };
                    if (formPart.validate) {
                        const global = async () => {
                            if (this._globalValidation) {
                                const result = await this._globalValidation(key, value);
                                resultToError(result);
                            }
                        };
                        let result = await formPart.validate(value, key, global);
                        resultToError(result);
                    }
                    else if (this._globalValidation) {
                        const result = await this._globalValidation(key, value);
                        resultToError(result);
                    }
                    const proms = formPart.onValidation.trigger(errorsForm);
                    const errors2d = await Promise.all(proms);
                    const errors = [];
                    for (let errorsTemp of errors2d) {
                        for (let errorTemp of errorsTemp) {
                            if (!errors.includes(errorTemp)) {
                                errors.push(errorTemp);
                            }
                        }
                    }
                    errorsForm = errors;
                }
                return errorsForm.length == 0 ? {} : { [key]: errorsForm };
            }
            let errors = {};
            for (let key in this.parts) {
                errors = { ...errors, ...await this._validate(key) };
            }
            return errors;
        }
        catch (e) {
            return { "@general": [e + ""] };
        }
    }
    async validate(key) {
        const result = await this._validate(key);
        const unhandle = {};
        let triggerUnhandle = false;
        const els = this._elements;
        for (let key in result) {
            if (!els[key] || els[key].length == 0) {
                triggerUnhandle = true;
                unhandle[key] = result[key];
            }
        }
        if (triggerUnhandle && this._onValidateFallback) {
            this._onValidateFallback(unhandle);
        }
        return Object.keys(result).length == 0;
    }
    /**
     * Handles form submission, including validation and execution of the submission function.
     */
    async submit(query) {
        const result = await this.validate();
        if (!result) {
            return null;
        }
        return this.execute(query);
    }
    transformToSend(item) {
        return item;
    }
    /**
     * Executes the form's submission function after validation.
     */
    async execute(query) {
        if (!query) {
            query = this._submitFct;
        }
        if (!query) {
            const res = new Aventus.VoidWithError();
            res.errors.push(new Aventus.GenericError(403, "No submit function defined"));
            return res;
        }
        if (typeof query == "function") {
            if (!this.item) {
                const result = new Aventus.VoidWithError();
                result.errors.push(new Aventus.GenericError(404, "No item inside the form"));
                return result;
            }
            query = query(this.transformToSend(this.item));
        }
        let queryResult = await query;
        if (queryResult.errors.length > 0) {
            queryResult.errors = this.parseErrors(queryResult);
            if (queryResult.errors.length > 0 && this._onServerFallback) {
                this._onServerFallback(queryResult.errors);
            }
        }
        else {
            let result = queryResult instanceof Aventus.ResultWithError ? queryResult.result : undefined;
            if (this._onSuccess)
                await this._onSuccess(result);
        }
        return queryResult;
    }
    /**
     * Extracts field-specific error messages from a generic error object.
     */
    defaultExtractor(error) {
        if (Array.isArray(error.details)) {
            for (let detail of error.details) {
                if (Object.hasOwn(detail, "Name")) {
                    return [{ fieldName: detail.Name, messages: [error.message] }];
                }
            }
        }
        const result = [];
        const details = error.details;
        for (let key in details) {
            const messages = details[key];
            result.push({
                fieldName: key,
                messages: messages
            });
        }
        return result;
    }
    /**
     * Parse errors and display them inside the FormElement if possible
     */
    parseErrors(queryResult) {
        const unappliedErrors = [];
        const elements = this.elements;
        for (const error of queryResult.errors) {
            const extractions = this._extractor(error);
            let applied = false;
            for (const { fieldName, messages } of extractions) {
                const targetElements = elements[fieldName];
                if (targetElements) {
                    for (let element of targetElements) {
                        element.errors.push(...messages);
                    }
                    applied = true;
                }
            }
            if (!applied) {
                unappliedErrors.push(error);
            }
        }
        return unappliedErrors;
    }
    /**
     * Reset form with default values
     */
    reset() {
        this.item = this.defaultValues;
    }
}
Form.FormHandler.Namespace=`Aventus.Form`;
__as1(_.Form, 'FormHandler', Form.FormHandler);

Form.FormHandlerController=class FormHandlerController extends _.Form.FormHandler {
    _controller;
    _formKey;
    /**
     * The HttpRoute controller constructor.
     */
    get controller() {
        return this._controller;
    }
    /**
     * Creates a FormHandlerController instance, inferring the submission method if only one exists.
     */
    static create(controller, schema, config) {
        const fcts = Object.getOwnPropertyNames(controller.prototype).filter(m => m !== "constructor");
        if (fcts.length == 1) {
            if (!config) {
                config = {};
            }
            const ctrl = new controller();
            config.submit = ctrl[fcts[0]];
            return new Form.FormHandlerController(controller, schema, config);
        }
        throw "There isn't exaclty one function inside your controller " + JSON.stringify(fcts) + ". You must use the function createWithName";
    }
    /**
     * Creates a FormHandlerController instance with a explicitly named submission method.
     */
    static createWithName(controller, name, schema, config) {
        if (!config) {
            config = {};
        }
        config.submit = new controller()[name];
        return new Form.FormHandlerController(controller, schema, config);
    }
    /**
     * Creates a FormHandlerController instance, inferring the submission method if only one exists.
     */
    static createSubForm(controller, formKey, schema, config) {
        const fcts = Object.getOwnPropertyNames(controller.prototype).filter(m => m !== "constructor");
        if (fcts.length == 1) {
            if (!config) {
                config = {};
            }
            const ctrl = new controller();
            config.submit = ctrl[fcts[0]];
            return new Form.FormHandlerController(controller, schema, config, formKey);
        }
        throw "There isn't exaclty one function inside your controller " + JSON.stringify(fcts) + ". You must use the function createWithName";
    }
    /**
     * Creates a FormHandlerController instance with a explicitly named submission method.
     */
    static createSubFormWithName(controller, name, formKey, schema, config) {
        if (!config) {
            config = {};
        }
        config.submit = new controller()[name];
        return new Form.FormHandlerController(controller, schema, config, formKey);
    }
    /**
     * Initializes a new FormHandlerController instance.
     */
    constructor(controller, schema, config, formKey) {
        super(schema, config);
        this._controller = controller;
        this._formKey = formKey;
    }
    transformToSend(item) {
        if (this._formKey)
            return {
                [this._formKey]: item
            };
        return item;
    }
}
Form.FormHandlerController.Namespace=`Aventus.Form`;
__as1(_.Form, 'FormHandlerController', Form.FormHandlerController);

Form.ButtonElement = class ButtonElement extends Aventus.WebComponent {
    static get observedAttributes() {return ["type"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'type'() { return this.getStringProp('type') }
    set 'type'(val) { this.setStringAttr('type', val) }
    static get formAssociated() { return true; }
    internals;
    handler = undefined;
    static __style = ``;
    constructor() {
        super();
        this.internals = this.attachInternals();
        if (this.constructor == ButtonElement) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return ButtonElement;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ButtonElement.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "ButtonElement";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('type')){ this['type'] = 'button'; }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('type');
 }
    async triggerSubmit() {
        if (this.type == "submit") {
            if ("loading" in this) {
                if (this.loading)
                    return;
                this.loading = true;
            }
            if (this.internals.form) {
                this.internals.form.requestSubmit();
            }
            else if (this.handler) {
                await this.handler.requestSubmit();
                if ("loading" in this) {
                    this.loading = false;
                }
            }
        }
    }
    registerSubmit() {
        this.handler = this.findParentByType(_.Form.Form.formElements)?.registerSubmit(this);
        if (this.type == "submit") {
            new Aventus.PressManager({
                element: this,
                onPress: () => {
                    this.triggerSubmit();
                }
            });
            this.addEventListener("keyup", (e) => {
                if (e.key == 'Enter') {
                    this.triggerSubmit();
                }
            });
        }
    }
    postCreation() {
        super.postCreation();
        this.registerSubmit();
    }
}
Form.ButtonElement.Namespace=`Aventus.Form`;
__as1(_.Form, 'ButtonElement', Form.ButtonElement);

Toast.ToastManager = class ToastManager extends Aventus.WebComponent {
    get 'not_main'() { return this.getBoolAttr('not_main') }
    set 'not_main'(val) { this.setBoolAttr('not_main', val) }
    static defaultToast;
    static defaultToastManager;
    static defaultPosition = 'top right';
    static defaultDelay = 5000;
    static gap = 10;
    static heightLimitPercent = 100;
    static instance;
    activeToasts = {
        top: [],
        'top left': [],
        'bottom left': [],
        bottom: [],
        'bottom right': [],
        'top right': [],
    };
    waitingToasts = {
        top: [],
        'top left': [],
        'bottom left': [],
        bottom: [],
        'bottom right': [],
        'top right': [],
    };
    get containerHeight() {
        return this.offsetHeight;
    }
    get heightLimit() {
        return this.containerHeight * Toast.ToastManager.heightLimitPercent / 100;
    }
    mutex = new Aventus.Mutex();
    static __style = `:host{--_toast-space-bottom: var(--toast-space-bottom, 20px);--_toast-space-top: var(--toast-space-top, 20px);--_toast-space-right: var(--toast-space-right, 10px);--_toast-space-left: var(--toast-space-left, 10px)}:host{bottom:var(--_toast-space-bottom);left:var(--_toast-space-left);overflow:visible;pointer-events:none;position:fixed;right:var(--_toast-space-right);top:var(--_toast-space-top);z-index:50}:host ::slotted(*){pointer-events:auto}`;
    __getStatic() {
        return ToastManager;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ToastManager.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "ToastManager";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('not_main')) { this.attributeChangedCallback('not_main', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('containerHeight');
this.__correctGetter('heightLimit');
this.__upgradeProperty('not_main');
 }
    __listBoolProps() { return ["not_main"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    async add(toast) {
        await this.mutex.waitOne();
        let realToast;
        if (toast instanceof _.Toast.ToastElement) {
            realToast = toast;
        }
        else {
            if (!Toast.ToastManager.defaultToast)
                throw "No default toast. Try ToastManager.configure()";
            realToast = new Toast.ToastManager.defaultToast();
            await realToast._setOptions(toast);
        }
        this.appendChild(realToast);
        if (realToast.position == "bottom") {
            return this._notifyBottom(realToast, true);
        }
        else if (realToast.position == "bottom left") {
            return this._notifyBottomLeft(realToast, true);
        }
        else if (realToast.position == "top left") {
            return this._notifyTopLeft(realToast, true);
        }
        else if (realToast.position == "bottom right") {
            return this._notifyBottomRight(realToast, true);
        }
        else if (realToast.position == "top right") {
            return this._notifyTopRight(realToast, true);
        }
        else if (realToast.position == "top") {
            return this._notifyTop(realToast, true);
        }
        return false;
    }
    _calculateBottom(toast, firstTime, position) {
        return new Promise(async (resolve) => {
            let height = toast.offsetHeight;
            const _remove = (result) => {
                let index = this.activeToasts[position].indexOf(toast);
                if (index > -1) {
                    this.activeToasts[position].splice(index, 1);
                }
                if (this.waitingToasts[position].length > 0) {
                    let nextNotif = this.waitingToasts[position].splice(0, 1)[0];
                    this._calculateBottom(nextNotif, false, position);
                }
                else {
                    let bottom = 0;
                    for (let i = 0; i < this.activeToasts[position].length; i++) {
                        let notif = this.activeToasts[position][i];
                        notif.style.bottom = bottom + 'px';
                        bottom += notif.offsetHeight + Toast.ToastManager.gap;
                    }
                }
                resolve(result);
            };
            let length = this.activeToasts[position].length;
            if (length == 0) {
                this.activeToasts[position].push(toast);
                toast.show(_remove);
            }
            else {
                let totHeight = 0;
                for (let notif of this.activeToasts[position]) {
                    await notif.waitTransition();
                    totHeight += notif.offsetHeight + Toast.ToastManager.gap;
                }
                if (totHeight + height < this.heightLimit) {
                    this.activeToasts[position].splice(0, 0, toast);
                    let bottom = 0;
                    for (let i = 0; i < this.activeToasts[position].length; i++) {
                        let notif = this.activeToasts[position][i];
                        notif.style.bottom = bottom + 'px';
                        bottom += notif.offsetHeight + Toast.ToastManager.gap;
                    }
                    toast.show(_remove);
                }
                else if (firstTime) {
                    this.waitingToasts[position].push(toast);
                }
            }
            this.mutex.release();
        });
    }
    _calculateTop(toast, firstTime, position) {
        return new Promise(async (resolve) => {
            let height = toast.offsetHeight;
            const _remove = (result) => {
                let index = this.activeToasts[position].indexOf(toast);
                if (index > -1) {
                    this.activeToasts[position].splice(index, 1);
                }
                if (this.waitingToasts[position].length > 0) {
                    let nextNotif = this.waitingToasts[position].splice(0, 1)[0];
                    this._calculateTop(nextNotif, false, position);
                }
                else {
                    let top = 0;
                    for (let i = 0; i < this.activeToasts[position].length; i++) {
                        let notif = this.activeToasts[position][i];
                        notif.style.top = top + 'px';
                        top += notif.offsetHeight + Toast.ToastManager.gap;
                    }
                }
                resolve(result);
            };
            let length = this.activeToasts[position].length;
            if (length == 0) {
                this.activeToasts[position].push(toast);
                toast.show(_remove);
            }
            else {
                let totHeight = 0;
                for (let notif of this.activeToasts[position]) {
                    await notif.waitTransition();
                    totHeight += notif.offsetHeight + Toast.ToastManager.gap;
                }
                if (totHeight + height < this.heightLimit) {
                    this.activeToasts[position].splice(0, 0, toast);
                    let top = 0;
                    for (let i = 0; i < this.activeToasts[position].length; i++) {
                        let notif = this.activeToasts[position][i];
                        notif.style.top = top + 'px';
                        top += notif.offsetHeight + Toast.ToastManager.gap;
                    }
                    toast.show(_remove);
                }
                else if (firstTime) {
                    this.waitingToasts[position].push(toast);
                }
            }
            this.mutex.release();
        });
    }
    async _notifyBottomRight(toast, firstTime) {
        return await this._calculateBottom(toast, firstTime, "bottom right");
    }
    async _notifyTopRight(toast, firstTime) {
        return await this._calculateTop(toast, firstTime, "top right");
    }
    async _notifyBottomLeft(toast, firstTime) {
        return await this._calculateBottom(toast, firstTime, "bottom left");
    }
    async _notifyTopLeft(toast, firstTime) {
        return await this._calculateTop(toast, firstTime, "top left");
    }
    async _notifyTop(toast, firstTime) {
        return await this._calculateTop(toast, firstTime, "top");
    }
    async _notifyBottom(toast, firstTime) {
        return await this._calculateBottom(toast, firstTime, "bottom");
    }
    postConnect() {
        super.postConnect();
        if (!Toast.ToastManager.instance && !this.not_main) {
            Toast.ToastManager.instance = this;
        }
    }
    postDisconnect() {
        if (Toast.ToastManager.instance == this) {
            Toast.ToastManager.instance = undefined;
        }
    }
    static add(toast) {
        if (!this.instance) {
            this.instance = this.defaultToastManager ? new this.defaultToastManager() : new Toast.ToastManager();
            document.body.appendChild(this.instance);
        }
        return this.instance.add(toast);
    }
    static configure(options) {
        const opts = options;
        const t = this;
        for (let key in options) {
            if (opts[key] !== undefined)
                t[key] = opts[key];
        }
    }
}
Toast.ToastManager.Namespace=`Aventus.Toast`;
Toast.ToastManager.Tag=`av-toast-manager`;
__as1(_.Toast, 'ToastManager', Toast.ToastManager);
if(!window.customElements.get('av-toast-manager')){window.customElements.define('av-toast-manager', Toast.ToastManager);Aventus.WebComponentInstance.registerDefinition(Toast.ToastManager);}

Lib.ShortcutManager=class ShortcutManager {
    /**
     * Stores registered shortcut callbacks.
     */
    static memory = {};
    /**
     * List of shortcut key combinations that should automatically prevent default browser behavior.
     */
    static autoPrevents = [];
    /**
     * Indicates if the ShortcutManager has been initialized.
     */
    static isInit = false;
    /**
     * Currently pressed keys.
     */
    static arrayKeys = [];
    /**
     * Stores options for each registered shortcut callback.
     */
    static options = new Map();
    /**
     * Stores temporarily replaced shortcut callbacks.
     */
    static replacingMemory = {};
    /**
     * Checks if a given key is a printable character or a space.
     */
    static isTxt(touch) {
        return touch.match(/[a-zA-Z0-9_\+\-]/g) || touch == " ";
    }
    /**
     * Converts a key combination into a standardized string representation.
     */
    static getText(combinaison) {
        let allTouches = [];
        for (let touch of combinaison) {
            let realTouch = "";
            if (typeof touch == "number" && Lib.SpecialTouch[touch] !== undefined) {
                realTouch = Lib.SpecialTouch[touch];
            }
            else if (this.isTxt(touch)) {
                realTouch = touch;
            }
            else {
                throw "I can't use " + touch + " to add a shortcut";
            }
            allTouches.push(realTouch);
        }
        allTouches.sort();
        return allTouches.join("+");
    }
    /**
     * Subscribes a callback function to a specific keyboard shortcut combination.
     */
    static subscribe(combinaison, cb, options) {
        if (!Array.isArray(combinaison)) {
            combinaison = [combinaison];
        }
        let key = this.getText(combinaison);
        if (options?.replaceTemp) {
            if (Lib.ShortcutManager.memory[key]) {
                if (!this.replacingMemory[key]) {
                    this.replacingMemory[key] = [];
                }
                this.replacingMemory[key].push(Lib.ShortcutManager.memory[key]);
                delete Lib.ShortcutManager.memory[key];
            }
        }
        if (!Lib.ShortcutManager.memory[key]) {
            Lib.ShortcutManager.memory[key] = [];
        }
        if (!Lib.ShortcutManager.memory[key].includes(cb)) {
            Lib.ShortcutManager.memory[key].push(cb);
            if (options) {
                this.options.set(cb, options);
            }
        }
        if (!Lib.ShortcutManager.isInit) {
            Lib.ShortcutManager.init();
        }
    }
    /**
     * Unsubscribes a callback function from a keyboard shortcut combination.
     */
    static unsubscribe(combinaison, cb) {
        if (!Array.isArray(combinaison)) {
            combinaison = [combinaison];
        }
        let key = this.getText(combinaison);
        if (Lib.ShortcutManager.memory[key]) {
            let index = Lib.ShortcutManager.memory[key].indexOf(cb);
            if (index != -1) {
                Lib.ShortcutManager.memory[key].splice(index, 1);
                let options = this.options.get(cb);
                if (options) {
                    this.options.delete(cb);
                }
                if (Lib.ShortcutManager.memory[key].length == 0) {
                    delete Lib.ShortcutManager.memory[key];
                    if (options?.replaceTemp) {
                        if (this.replacingMemory[key]) {
                            if (this.replacingMemory[key].length > 0) {
                                Lib.ShortcutManager.memory[key] = this.replacingMemory[key].pop();
                                if (this.replacingMemory[key].length == 0) {
                                    delete this.replacingMemory[key];
                                }
                            }
                            else {
                                delete this.replacingMemory[key];
                            }
                        }
                    }
                }
                if (Object.keys(Lib.ShortcutManager.memory).length == 0 && Lib.ShortcutManager.isInit) {
                    //ShortcutManager.uninit();
                }
            }
        }
    }
    /**
     * Handles keydown events, processing registered shortcuts and preventing default behavior.
     */
    static async onKeyDown(e) {
        if (e.ctrlKey) {
            let txt = Lib.SpecialTouch[Lib.SpecialTouch.Control];
            if (!this.arrayKeys.includes(txt)) {
                this.arrayKeys.push(txt);
            }
        }
        if (e.altKey) {
            let txt = Lib.SpecialTouch[Lib.SpecialTouch.Alt];
            if (!this.arrayKeys.includes(txt)) {
                this.arrayKeys.push(txt);
            }
        }
        if (e.shiftKey) {
            let txt = Lib.SpecialTouch[Lib.SpecialTouch.Shift];
            if (!this.arrayKeys.includes(txt)) {
                this.arrayKeys.push(txt);
            }
        }
        if (this.isTxt(e.key) && !this.arrayKeys.includes(e.key)) {
            this.arrayKeys.push(e.key);
        }
        else if (Lib.SpecialTouch[e.key] !== undefined && !this.arrayKeys.includes(e.key)) {
            this.arrayKeys.push(e.key);
        }
        this.arrayKeys.sort();
        let key = this.arrayKeys.join("+");
        if (Lib.ShortcutManager.memory[key]) {
            let preventDefault = true;
            for (let cb of Lib.ShortcutManager.memory[key]) {
                let options = this.options.get(cb);
                if (options && options.preventDefault === false) {
                    preventDefault = false;
                }
            }
            this.arrayKeys = [];
            for (let cb of Lib.ShortcutManager.memory[key]) {
                const result = await cb();
                if (result === false) {
                    preventDefault = result;
                }
            }
            if (preventDefault) {
                e.preventDefault();
            }
        }
        else if (Lib.ShortcutManager.autoPrevents.includes(key)) {
            e.preventDefault();
        }
    }
    /**
     * Handles keyup events, removing the released key from the currently pressed keys.
     */
    static onKeyUp(e) {
        let index = this.arrayKeys.indexOf(e.key);
        if (index != -1) {
            this.arrayKeys.splice(index, 1);
        }
    }
    /**
     * Initializes the ShortcutManager, setting up global event listeners.
     */
    static init() {
        if (Lib.ShortcutManager.isInit)
            return;
        Lib.ShortcutManager.isInit = true;
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        Lib.ShortcutManager.autoPrevents = [
            this.getText([Lib.SpecialTouch.Control, "s"]),
            this.getText([Lib.SpecialTouch.Control, "p"]),
            this.getText([Lib.SpecialTouch.Control, "l"]),
            this.getText([Lib.SpecialTouch.Control, "k"]),
            this.getText([Lib.SpecialTouch.Control, "j"]),
            this.getText([Lib.SpecialTouch.Control, "h"]),
            this.getText([Lib.SpecialTouch.Control, "g"]),
            this.getText([Lib.SpecialTouch.Control, "f"]),
            this.getText([Lib.SpecialTouch.Control, "d"]),
            this.getText([Lib.SpecialTouch.Control, "o"]),
            this.getText([Lib.SpecialTouch.Control, "u"]),
            this.getText([Lib.SpecialTouch.Control, "e"]),
        ];
        window.addEventListener("blur", () => {
            this.arrayKeys = [];
        });
        document.body.addEventListener("keydown", this.onKeyDown);
        document.body.addEventListener("keyup", this.onKeyUp);
    }
    /**
     * Sets key combinations that should automatically prevent default browser behavior.
     */
    static setAutoPrevents(combinaisons) {
        if (!Lib.ShortcutManager.isInit) {
            this.init();
        }
        Lib.ShortcutManager.autoPrevents = [];
        for (let combinaison of combinaisons) {
            Lib.ShortcutManager.autoPrevents.push(this.getText(combinaison));
        }
    }
    /**
     * Deinitializes the ShortcutManager, removing global event listeners.
     */
    static uninit() {
        document.body.removeEventListener("keydown", this.onKeyDown);
        document.body.removeEventListener("keyup", this.onKeyUp);
        this.arrayKeys = [];
        Lib.ShortcutManager.isInit = false;
    }
}
Lib.ShortcutManager.Namespace=`Aventus.Lib`;
__as1(_.Lib, 'ShortcutManager', Lib.ShortcutManager);

Modal.ModalElement = class ModalElement extends Aventus.WebComponent {
    get 'options'() {
						return this.__watch["options"];
					}
					set 'options'(val) {
						this.__watch["options"] = val;
					}
    static defaultCloseWithEsc = true;
    static defaultCloseWithClick = true;
    static defaultRejectValue = null;
    cb;
    pressManagerClickClose;
    pressManagerPrevent;
    __registerWatchesActions() {
    this.__addWatchesActions("options", ((target, action, path, value) => {
    target.onOptionsChanged();
}));
    super.__registerWatchesActions();
}
    static __style = `:host{align-items:center;display:flex;inset:0;justify-content:center;position:fixed;z-index:60}:host .modal{background-color:#fff;padding:1.5rem;position:relative}`;
    constructor() {
        super();
        this.options = this.configure();
        if (this.options.closeWithClick === undefined)
            this.options.closeWithClick = Modal.ModalElement.defaultCloseWithClick;
        if (this.options.closeWithEsc === undefined)
            this.options.closeWithEsc = Modal.ModalElement.defaultCloseWithEsc;
        if (!Object.hasOwn(this.options, "rejectValue")) {
            this.options.rejectValue = Modal.ModalElement.defaultRejectValue;
        }
        if (this.constructor == ModalElement) {
            throw "can't instanciate an abstract class";
        }
        this.close = this.close.bind(this);
        this.reject = this.reject.bind(this);
        this.resolve = this.resolve.bind(this);
    }
    __getStatic() {
        return ModalElement;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ModalElement.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<div class="modal" _id="modalelement_0">
	<slot></slot>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "modalEl",
      "ids": [
        "modalelement_0"
      ]
    }
  ]
});
 }
    getClassName() {
        return "ModalElement";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["options"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('options');
 }
    onOptionsChanged() { }
    init(cb) {
        this.cb = cb;
        if (this.options.closeWithEsc) {
            Lib.ShortcutManager.subscribe(Lib.SpecialTouch.Escape, this.reject, { replaceTemp: true });
        }
        if (this.options.closeWithClick) {
            this.pressManagerClickClose = new Aventus.PressManager({
                element: this,
                onPress: () => {
                    this.reject();
                }
            });
            this.pressManagerPrevent = new Aventus.PressManager({
                element: this.modalEl,
                onPress: () => { }
            });
        }
    }
    show(element) {
        return Modal.ModalElement._show(this, element);
    }
    close() {
        Lib.ShortcutManager.unsubscribe(Lib.SpecialTouch.Escape, this.reject);
        this.pressManagerClickClose?.destroy();
        this.pressManagerPrevent?.destroy();
        this.remove();
    }
    reject(no_close) {
        if (this.cb) {
            this.cb(this.options.rejectValue ?? null);
        }
        if (no_close !== true) {
            this.close();
        }
    }
    resolve(response, no_close) {
        if (this.cb) {
            this.cb(response);
        }
        if (no_close !== true) {
            this.close();
        }
    }
    static configure(options) {
        if (options.closeWithClick !== undefined)
            this.defaultCloseWithClick = options.closeWithClick;
        if (options.closeWithEsc !== undefined)
            this.defaultCloseWithEsc = options.closeWithEsc;
        if (!Object.hasOwn(options, "rejectValue")) {
            this.defaultRejectValue = options.rejectValue;
        }
    }
    static _show(modal, element) {
        return new Promise((resolve) => {
            modal.init((response) => {
                resolve(response);
            });
            if (!element) {
                element = document.body;
            }
            element.appendChild(modal);
        });
    }
}
Modal.ModalElement.Namespace=`Aventus.Modal`;
__as1(_.Modal, 'ModalElement', Modal.ModalElement);

Layout.Tabs.Tab = class Tab extends Aventus.WebComponent {
    get 'selected'() { return this.getBoolAttr('selected') }
    set 'selected'(val) { this.setBoolAttr('selected', val) }
get 'loaded'() { return this.getBoolAttr('loaded') }
    set 'loaded'(val) { this.setBoolAttr('loaded', val) }
    tabHeader;
    static __style = `:host(:not([loaded])){display:none}`;
    constructor() {
        super();
        if (this.constructor == Tab) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return Tab;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Tab.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Tab";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('selected')) { this.attributeChangedCallback('selected', false, false); }
if(!this.hasAttribute('loaded')) { this.attributeChangedCallback('loaded', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('selected');
this.__upgradeProperty('loaded');
 }
    __listBoolProps() { return ["selected","loaded"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
}
Layout.Tabs.Tab.Namespace=`Aventus.Layout.Tabs`;
__as1(_.Layout.Tabs, 'Tab', Layout.Tabs.Tab);

Layout.Tabs.Tabs = class Tabs extends Aventus.WebComponent {
    activeHeader;
    tabs = {};
    static __style = ``;
    constructor() {
        super();
        if (this.constructor == Tabs) {
            throw "can't instanciate an abstract class";
        }
        this.reloadFromSlot = this.reloadFromSlot.bind(this);
    }
    __getStatic() {
        return Tabs;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Tabs.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<div class="header" _id="tabs_0"></div><div class="body" _id="tabs_1">
	<slot></slot>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "headerEl",
      "ids": [
        "tabs_0"
      ]
    },
    {
      "name": "bodyEl",
      "ids": [
        "tabs_1"
      ]
    }
  ]
});
 }
    getClassName() {
        return "Tabs";
    }
    async loadTabs() {
        // let elements = this.elements;
        let elements = this.getElementsInSlot();
        let first = null;
        for (let element of elements) {
            if (element instanceof _.Layout.Tabs.Tab) {
                element.style.display = 'none';
                this.tabs[element.identifier()] = element;
                let header = new (this.defineTabHeader())();
                this.headerEl.appendChild(header);
                await header.init(element, this);
                if (first == null) {
                    first = header;
                }
                else if (!first.tab.selected && element.selected) {
                    first = header;
                }
                element.loaded = true;
            }
        }
        if (first) {
            this.setActive(first);
        }
        this.shadowRoot.querySelector("slot")?.addEventListener("slotchange", this.reloadFromSlot);
    }
    async reloadFromSlot() {
        let elements = this.getElementsInSlot();
        let actualTabs = Object.keys(this.tabs);
        let first = null;
        let orders = [];
        for (let element of elements) {
            if (element instanceof _.Layout.Tabs.Tab) {
                element.style.display = 'none';
                const el = element;
                const identifier = element.identifier();
                const indexActual = actualTabs.indexOf(identifier);
                orders.push(identifier);
                if (indexActual == -1) {
                    this.tabs[identifier] = el;
                    let header = new (this.defineTabHeader())();
                    this.headerEl.appendChild(header);
                    await header.init(el, this);
                    if (first == null) {
                        first = header;
                    }
                }
                else {
                    actualTabs.splice(indexActual, 1);
                    if (first == null) {
                        first = this.tabs[identifier].tabHeader;
                    }
                }
                element.loaded = true;
            }
        }
        for (let missing of actualTabs) {
            this.tabs[missing].tabHeader?.remove();
            delete this.tabs[missing];
        }
        let hasSelected = false;
        for (let identifier in this.tabs) {
            if (this.tabs[identifier].selected) {
                if (!hasSelected) {
                    hasSelected = true;
                    first = this.tabs[identifier].tabHeader;
                }
                else {
                    this.tabs[identifier].selected = false;
                    this.tabs[identifier].tabHeader.active = false;
                    this.tabs[identifier].style.display = 'none';
                    this.tabs[identifier].selected = false;
                }
            }
        }
        if (first != null) {
            this.setActive(first);
        }
        for (let i = 0, j = 0; i < orders.length; i++, j++) {
            const shouldBe = this.tabs[orders[i]].tabHeader;
            if (!shouldBe)
                continue;
            while (j < this.headerEl.children.length && !(this.headerEl.children[j] instanceof _.Layout.Tabs.TabHeader)) {
                j++;
            }
            if (shouldBe != this.headerEl.children[j]) {
                this.headerEl.appendChild(shouldBe);
            }
        }
    }
    setActive(tabHeader) {
        if (typeof tabHeader == 'number') {
            if (this.headerEl.children.length > tabHeader) {
                const header = this.headerEl.children[tabHeader];
                if (header instanceof _.Layout.Tabs.TabHeader) {
                    return this.setActive(header);
                }
            }
            return false;
        }
        else if (typeof tabHeader == 'string') {
            const header = this.tabs[tabHeader].tabHeader;
            if (header)
                return this.setActive(header);
            return false;
        }
        if (this.activeHeader) {
            this.activeHeader.active = false;
            this.activeHeader.tab.selected = false;
            this.activeHeader.tab.style.display = 'none';
        }
        this.activeHeader = tabHeader;
        this.activeHeader.active = true;
        this.activeHeader.tab.style.display = '';
        this.activeHeader.tab.selected = true;
        return true;
    }
    postCreation() {
        super.postCreation();
        this.loadTabs();
    }
}
Layout.Tabs.Tabs.Namespace=`Aventus.Layout.Tabs`;
__as1(_.Layout.Tabs, 'Tabs', Layout.Tabs.Tabs);

Layout.Col = class Col extends Aventus.WebComponent {
    get 'use_container'() { return this.getBoolAttr('use_container') }
    set 'use_container'(val) { this.setBoolAttr('use_container', val) }
get 'size'() { return this.getNumberAttr('size') }
    set 'size'(val) { this.setNumberAttr('size', val) }
get 'size_xs'() { return this.getNumberAttr('size_xs') }
    set 'size_xs'(val) { this.setNumberAttr('size_xs', val) }
get 'size_sm'() { return this.getNumberAttr('size_sm') }
    set 'size_sm'(val) { this.setNumberAttr('size_sm', val) }
get 'size_md'() { return this.getNumberAttr('size_md') }
    set 'size_md'(val) { this.setNumberAttr('size_md', val) }
get 'size_lg'() { return this.getNumberAttr('size_lg') }
    set 'size_lg'(val) { this.setNumberAttr('size_lg', val) }
get 'size_xl'() { return this.getNumberAttr('size_xl') }
    set 'size_xl'(val) { this.setNumberAttr('size_xl', val) }
get 'offset'() { return this.getNumberAttr('offset') }
    set 'offset'(val) { this.setNumberAttr('offset', val) }
get 'offset_xs'() { return this.getNumberAttr('offset_xs') }
    set 'offset_xs'(val) { this.setNumberAttr('offset_xs', val) }
get 'offset_sm'() { return this.getNumberAttr('offset_sm') }
    set 'offset_sm'(val) { this.setNumberAttr('offset_sm', val) }
get 'offset_md'() { return this.getNumberAttr('offset_md') }
    set 'offset_md'(val) { this.setNumberAttr('offset_md', val) }
get 'offset_lg'() { return this.getNumberAttr('offset_lg') }
    set 'offset_lg'(val) { this.setNumberAttr('offset_lg', val) }
get 'offset_xl'() { return this.getNumberAttr('offset_xl') }
    set 'offset_xl'(val) { this.setNumberAttr('offset_xl', val) }
get 'offset_right'() { return this.getNumberAttr('offset_right') }
    set 'offset_right'(val) { this.setNumberAttr('offset_right', val) }
get 'offset_right_xs'() { return this.getNumberAttr('offset_right_xs') }
    set 'offset_right_xs'(val) { this.setNumberAttr('offset_right_xs', val) }
get 'offset_right_sm'() { return this.getNumberAttr('offset_right_sm') }
    set 'offset_right_sm'(val) { this.setNumberAttr('offset_right_sm', val) }
get 'offset_right_md'() { return this.getNumberAttr('offset_right_md') }
    set 'offset_right_md'(val) { this.setNumberAttr('offset_right_md', val) }
get 'offset_right_lg'() { return this.getNumberAttr('offset_right_lg') }
    set 'offset_right_lg'(val) { this.setNumberAttr('offset_right_lg', val) }
get 'offset_right_xl'() { return this.getNumberAttr('offset_right_xl') }
    set 'offset_right_xl'(val) { this.setNumberAttr('offset_right_xl', val) }
get 'center'() { return this.getBoolAttr('center') }
    set 'center'(val) { this.setBoolAttr('center', val) }
    static use_container = false;
    static __style = `:host{--_col-padding: var(--col-padding, 8px)}:host{display:flex;padding:var(--internal-col-padding)}:host([center]){justify-content:center}:host([size="0"]){width:0}:host([offset="0"]){margin-left:0}:host([offset_right="0"]){margin-right:0}:host([size="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([offset="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([offset_right="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([size="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([offset="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([offset_right="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([size="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([offset="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([offset_right="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([size="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([offset="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([offset_right="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([size="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([offset="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([offset_right="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([size="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([offset="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([offset_right="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([size="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([offset="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([offset_right="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([size="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([offset="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([offset_right="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([size="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([offset="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([offset_right="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([size="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([offset="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([offset_right="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([size="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([offset="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([offset_right="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([size="12"]){width:100%}:host([offset="12"]){margin-left:100%}:host([offset_right="12"]){margin-right:100%}@container row (min-width: 300px){:host([use_container][size_xs="0"]){width:0}:host([use_container][offset_xs="0"]){margin-left:0}:host([use_container][offset_right_xs="0"]){margin-right:0}:host([use_container][size_xs="0"]){display:none}:host([use_container][size_xs="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_xs="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_right_xs="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][size_xs="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_xs="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_right_xs="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][size_xs="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_xs="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_right_xs="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][size_xs="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_xs="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_right_xs="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][size_xs="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_xs="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_right_xs="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][size_xs="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_xs="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_right_xs="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][size_xs="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_xs="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_right_xs="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][size_xs="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_xs="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_right_xs="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][size_xs="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_xs="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_right_xs="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][size_xs="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_xs="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_right_xs="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][size_xs="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_xs="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_right_xs="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][size_xs="12"]){width:100%}:host([use_container][offset_xs="12"]){margin-left:100%}:host([use_container][offset_right_xs="12"]){margin-right:100%}}@media screen and (min-width: 300px){:host(:not([use_container])[size_xs="0"]){width:0}:host(:not([use_container])[offset_xs="0"]){margin-left:0}:host(:not([use_container])[offset_right_xs="0"]){margin-right:0}:host(:not([use_container])[size_xs="0"]){display:none}:host(:not([use_container])[size_xs="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_xs="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_right_xs="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[size_xs="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_xs="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_right_xs="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[size_xs="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_xs="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_right_xs="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[size_xs="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_xs="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_right_xs="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[size_xs="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_xs="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_right_xs="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[size_xs="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_xs="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_right_xs="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[size_xs="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_xs="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_right_xs="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[size_xs="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_xs="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_right_xs="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[size_xs="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_xs="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_right_xs="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[size_xs="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_xs="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_right_xs="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[size_xs="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_xs="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_right_xs="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[size_xs="12"]){width:100%}:host(:not([use_container])[offset_xs="12"]){margin-left:100%}:host(:not([use_container])[offset_right_xs="12"]){margin-right:100%}}@container row (min-width: 540px){:host([use_container][size_sm="0"]){width:0}:host([use_container][offset_sm="0"]){margin-left:0}:host([use_container][offset_right_sm="0"]){margin-right:0}:host([use_container][size_sm="0"]){display:none}:host([use_container][size_sm="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_sm="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_right_sm="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][size_sm="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_sm="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_right_sm="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][size_sm="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_sm="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_right_sm="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][size_sm="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_sm="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_right_sm="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][size_sm="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_sm="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_right_sm="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][size_sm="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_sm="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_right_sm="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][size_sm="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_sm="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_right_sm="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][size_sm="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_sm="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_right_sm="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][size_sm="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_sm="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_right_sm="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][size_sm="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_sm="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_right_sm="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][size_sm="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_sm="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_right_sm="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][size_sm="12"]){width:100%}:host([use_container][offset_sm="12"]){margin-left:100%}:host([use_container][offset_right_sm="12"]){margin-right:100%}}@media screen and (min-width: 540px){:host(:not([use_container])[size_sm="0"]){width:0}:host(:not([use_container])[offset_sm="0"]){margin-left:0}:host(:not([use_container])[offset_right_sm="0"]){margin-right:0}:host(:not([use_container])[size_sm="0"]){display:none}:host(:not([use_container])[size_sm="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_sm="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_right_sm="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[size_sm="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_sm="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_right_sm="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[size_sm="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_sm="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_right_sm="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[size_sm="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_sm="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_right_sm="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[size_sm="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_sm="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_right_sm="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[size_sm="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_sm="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_right_sm="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[size_sm="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_sm="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_right_sm="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[size_sm="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_sm="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_right_sm="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[size_sm="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_sm="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_right_sm="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[size_sm="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_sm="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_right_sm="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[size_sm="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_sm="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_right_sm="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[size_sm="12"]){width:100%}:host(:not([use_container])[offset_sm="12"]){margin-left:100%}:host(:not([use_container])[offset_right_sm="12"]){margin-right:100%}}@container row (min-width: 720px){:host([use_container][size_md="0"]){width:0}:host([use_container][offset_md="0"]){margin-left:0}:host([use_container][offset_right_md="0"]){margin-right:0}:host([use_container][size_md="0"]){display:none}:host([use_container][size_md="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_md="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_right_md="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][size_md="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_md="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_right_md="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][size_md="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_md="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_right_md="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][size_md="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_md="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_right_md="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][size_md="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_md="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_right_md="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][size_md="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_md="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_right_md="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][size_md="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_md="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_right_md="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][size_md="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_md="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_right_md="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][size_md="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_md="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_right_md="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][size_md="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_md="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_right_md="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][size_md="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_md="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_right_md="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][size_md="12"]){width:100%}:host([use_container][offset_md="12"]){margin-left:100%}:host([use_container][offset_right_md="12"]){margin-right:100%}}@media screen and (min-width: 720px){:host(:not([use_container])[size_md="0"]){width:0}:host(:not([use_container])[offset_md="0"]){margin-left:0}:host(:not([use_container])[offset_right_md="0"]){margin-right:0}:host(:not([use_container])[size_md="0"]){display:none}:host(:not([use_container])[size_md="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_md="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_right_md="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[size_md="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_md="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_right_md="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[size_md="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_md="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_right_md="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[size_md="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_md="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_right_md="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[size_md="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_md="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_right_md="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[size_md="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_md="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_right_md="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[size_md="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_md="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_right_md="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[size_md="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_md="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_right_md="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[size_md="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_md="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_right_md="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[size_md="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_md="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_right_md="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[size_md="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_md="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_right_md="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[size_md="12"]){width:100%}:host(:not([use_container])[offset_md="12"]){margin-left:100%}:host(:not([use_container])[offset_right_md="12"]){margin-right:100%}}@container row (min-width: 960px){:host([use_container][size_lg="0"]){width:0}:host([use_container][offset_lg="0"]){margin-left:0}:host([use_container][offset_right_lg="0"]){margin-right:0}:host([use_container][size_lg="0"]){display:none}:host([use_container][size_lg="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_lg="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_right_lg="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][size_lg="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_lg="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_right_lg="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][size_lg="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_lg="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_right_lg="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][size_lg="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_lg="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_right_lg="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][size_lg="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_lg="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_right_lg="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][size_lg="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_lg="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_right_lg="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][size_lg="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_lg="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_right_lg="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][size_lg="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_lg="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_right_lg="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][size_lg="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_lg="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_right_lg="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][size_lg="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_lg="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_right_lg="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][size_lg="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_lg="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_right_lg="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][size_lg="12"]){width:100%}:host([use_container][offset_lg="12"]){margin-left:100%}:host([use_container][offset_right_lg="12"]){margin-right:100%}}@media screen and (min-width: 960px){:host(:not([use_container])[size_lg="0"]){width:0}:host(:not([use_container])[offset_lg="0"]){margin-left:0}:host(:not([use_container])[offset_right_lg="0"]){margin-right:0}:host(:not([use_container])[size_lg="0"]){display:none}:host(:not([use_container])[size_lg="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_lg="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_right_lg="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[size_lg="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_lg="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_right_lg="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[size_lg="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_lg="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_right_lg="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[size_lg="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_lg="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_right_lg="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[size_lg="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_lg="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_right_lg="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[size_lg="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_lg="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_right_lg="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[size_lg="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_lg="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_right_lg="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[size_lg="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_lg="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_right_lg="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[size_lg="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_lg="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_right_lg="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[size_lg="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_lg="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_right_lg="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[size_lg="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_lg="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_right_lg="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[size_lg="12"]){width:100%}:host(:not([use_container])[offset_lg="12"]){margin-left:100%}:host(:not([use_container])[offset_right_lg="12"]){margin-right:100%}}@container row (min-width: 1140px){:host([use_container][size_xl="0"]){width:0}:host([use_container][offset_xl="0"]){margin-left:0}:host([use_container][offset_right_xl="0"]){margin-right:0}:host([use_container][size_xl="0"]){display:none}:host([use_container][size_xl="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_xl="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][offset_right_xl="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host([use_container][size_xl="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_xl="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][offset_right_xl="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host([use_container][size_xl="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_xl="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][offset_right_xl="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host([use_container][size_xl="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_xl="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][offset_right_xl="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host([use_container][size_xl="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_xl="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][offset_right_xl="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host([use_container][size_xl="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_xl="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][offset_right_xl="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host([use_container][size_xl="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_xl="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][offset_right_xl="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host([use_container][size_xl="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_xl="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][offset_right_xl="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host([use_container][size_xl="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_xl="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][offset_right_xl="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host([use_container][size_xl="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_xl="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][offset_right_xl="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host([use_container][size_xl="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_xl="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][offset_right_xl="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host([use_container][size_xl="12"]){width:100%}:host([use_container][offset_xl="12"]){margin-left:100%}:host([use_container][offset_right_xl="12"]){margin-right:100%}}@media screen and (min-width: 1140px){:host(:not([use_container])[size_xl="0"]){width:0}:host(:not([use_container])[offset_xl="0"]){margin-left:0}:host(:not([use_container])[offset_right_xl="0"]){margin-right:0}:host(:not([use_container])[size_xl="0"]){display:none}:host(:not([use_container])[size_xl="1"]){width:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_xl="1"]){margin-left:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[offset_right_xl="1"]){margin-right:calc(8.3333333333% - (var(--_col-gap-x, 0px) * 11 / 12))}:host(:not([use_container])[size_xl="2"]){width:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_xl="2"]){margin-left:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[offset_right_xl="2"]){margin-right:calc(16.6666666667% - (var(--_col-gap-x, 0px) * 5 / 6))}:host(:not([use_container])[size_xl="3"]){width:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_xl="3"]){margin-left:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[offset_right_xl="3"]){margin-right:calc(25% - (var(--_col-gap-x, 0px) * 3 / 4))}:host(:not([use_container])[size_xl="4"]){width:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_xl="4"]){margin-left:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[offset_right_xl="4"]){margin-right:calc(33.3333333333% - (var(--_col-gap-x, 0px) * 2 / 3))}:host(:not([use_container])[size_xl="5"]){width:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_xl="5"]){margin-left:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[offset_right_xl="5"]){margin-right:calc(41.6666666667% - (var(--_col-gap-x, 0px) * 1.4 / 2.4))}:host(:not([use_container])[size_xl="6"]){width:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_xl="6"]){margin-left:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[offset_right_xl="6"]){margin-right:calc(50% - (var(--_col-gap-x, 0px) * 1 / 2))}:host(:not([use_container])[size_xl="7"]){width:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_xl="7"]){margin-left:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[offset_right_xl="7"]){margin-right:calc(58.3333333333% - (var(--_col-gap-x, 0px) * 0.7142857143 / 1.7142857143))}:host(:not([use_container])[size_xl="8"]){width:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_xl="8"]){margin-left:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[offset_right_xl="8"]){margin-right:calc(66.6666666667% - (var(--_col-gap-x, 0px) * 0.5 / 1.5))}:host(:not([use_container])[size_xl="9"]){width:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_xl="9"]){margin-left:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[offset_right_xl="9"]){margin-right:calc(75% - (var(--_col-gap-x, 0px) * 0.3333333333 / 1.3333333333))}:host(:not([use_container])[size_xl="10"]){width:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_xl="10"]){margin-left:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[offset_right_xl="10"]){margin-right:calc(83.3333333333% - (var(--_col-gap-x, 0px) * 0.2 / 1.2))}:host(:not([use_container])[size_xl="11"]){width:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_xl="11"]){margin-left:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[offset_right_xl="11"]){margin-right:calc(91.6666666667% - (var(--_col-gap-x, 0px) * 0.0909090909 / 1.0909090909))}:host(:not([use_container])[size_xl="12"]){width:100%}:host(:not([use_container])[offset_xl="12"]){margin-left:100%}:host(:not([use_container])[offset_right_xl="12"]){margin-right:100%}}`;
    __getStatic() {
        return Col;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Col.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Col";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('use_container') && Layout.Col.use_container) {this.setAttribute('use_container' ,'true'); }
if(!this.hasAttribute('size')){ this['size'] = undefined; }
if(!this.hasAttribute('size_xs')){ this['size_xs'] = undefined; }
if(!this.hasAttribute('size_sm')){ this['size_sm'] = undefined; }
if(!this.hasAttribute('size_md')){ this['size_md'] = undefined; }
if(!this.hasAttribute('size_lg')){ this['size_lg'] = undefined; }
if(!this.hasAttribute('size_xl')){ this['size_xl'] = undefined; }
if(!this.hasAttribute('offset')){ this['offset'] = undefined; }
if(!this.hasAttribute('offset_xs')){ this['offset_xs'] = undefined; }
if(!this.hasAttribute('offset_sm')){ this['offset_sm'] = undefined; }
if(!this.hasAttribute('offset_md')){ this['offset_md'] = undefined; }
if(!this.hasAttribute('offset_lg')){ this['offset_lg'] = undefined; }
if(!this.hasAttribute('offset_xl')){ this['offset_xl'] = undefined; }
if(!this.hasAttribute('offset_right')){ this['offset_right'] = undefined; }
if(!this.hasAttribute('offset_right_xs')){ this['offset_right_xs'] = undefined; }
if(!this.hasAttribute('offset_right_sm')){ this['offset_right_sm'] = undefined; }
if(!this.hasAttribute('offset_right_md')){ this['offset_right_md'] = undefined; }
if(!this.hasAttribute('offset_right_lg')){ this['offset_right_lg'] = undefined; }
if(!this.hasAttribute('offset_right_xl')){ this['offset_right_xl'] = undefined; }
if(!this.hasAttribute('center')) { this.attributeChangedCallback('center', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('use_container');
this.__upgradeProperty('size');
this.__upgradeProperty('size_xs');
this.__upgradeProperty('size_sm');
this.__upgradeProperty('size_md');
this.__upgradeProperty('size_lg');
this.__upgradeProperty('size_xl');
this.__upgradeProperty('offset');
this.__upgradeProperty('offset_xs');
this.__upgradeProperty('offset_sm');
this.__upgradeProperty('offset_md');
this.__upgradeProperty('offset_lg');
this.__upgradeProperty('offset_xl');
this.__upgradeProperty('offset_right');
this.__upgradeProperty('offset_right_xs');
this.__upgradeProperty('offset_right_sm');
this.__upgradeProperty('offset_right_md');
this.__upgradeProperty('offset_right_lg');
this.__upgradeProperty('offset_right_xl');
this.__upgradeProperty('center');
 }
    __listBoolProps() { return ["use_container","center"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    static configure(options) {
        if (options.use_container !== undefined)
            this.use_container = options.use_container;
    }
}
Layout.Col.Namespace=`Aventus.Layout`;
Layout.Col.Tag=`av-col`;
__as1(_.Layout, 'Col', Layout.Col);
if(!window.customElements.get('av-col')){window.customElements.define('av-col', Layout.Col);Aventus.WebComponentInstance.registerDefinition(Layout.Col);}
<<<<<<< HEAD

Navigation.PageFormRoute = class PageFormRoute extends Navigation.PageForm {
    static __style = ``;
    constructor() {
        super();
        if (this.constructor == PageFormRoute) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return PageFormRoute;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PageFormRoute.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "PageFormRoute";
    }
    async defineSubmit(submit) {
        await this.beforeSubmit();
        const info = this.route();
        let router;
        let key = "";
        if (Array.isArray(info)) {
            router = new info[0];
            key = info[1];
        }
        else {
            router = new info;
            const fcts = Object.getOwnPropertyNames(info.prototype).filter(m => m !== "constructor");
            if (fcts.length == 1) {
                key = fcts[0];
            }
            else {
                const result = new Aventus.VoidWithError();
                result.errors.push(new Aventus.GenericError(500, "More than one fonction is defined"));
                return result;
            }
        }
        const result = await submit(router[key]);
        this.onResult(result);
        return result;
    }
    beforeSubmit() { }
}
Navigation.PageFormRoute.Namespace=`Aventus.Navigation`;
__as1(_.Navigation, 'PageFormRoute', Navigation.PageFormRoute);

Layout.Tabs.TabHeader = class TabHeader extends Aventus.WebComponent {
    get 'active'() { return this.getBoolAttr('active') }
    set 'active'(val) { this.setBoolAttr('active', val) }    _tab;
    get tab() {
        return this._tab;
    }
    tabs;
    static __style = ``;
    constructor() {
        super();
        if (this.constructor == TabHeader) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return TabHeader;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(TabHeader.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "TabHeader";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('active')) { this.attributeChangedCallback('active', false, false); } }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('tab');this.__upgradeProperty('active'); }
    __listBoolProps() { return ["active"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    async init(tab, tabs) {
        this.tabs = tabs;
        this._tab = tab;
        tab.tabHeader = this;
        await this.render();
    }
    onPress() {
        if (!this.active) {
            this.tabs.setActive(this);
        }
    }
    addPress() {
        new Aventus.PressManager({
            element: this,
            onPress: () => {
                this.onPress();
            }
        });
    }
    postCreation() {
        super.postCreation();
        this.addPress();
    }
}
Layout.Tabs.TabHeader.Namespace=`Aventus.Layout.Tabs`;
__as1(_.Layout.Tabs, 'TabHeader', Layout.Tabs.TabHeader);

Layout.Tabs.Tab = class Tab extends Aventus.WebComponent {
    get 'selected'() { return this.getBoolAttr('selected') }
    set 'selected'(val) { this.setBoolAttr('selected', val) }    tabHeader;
    static __style = ``;
    constructor() {
        super();
        if (this.constructor == Tab) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return Tab;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Tab.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Tab";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('selected')) { this.attributeChangedCallback('selected', false, false); } }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('selected'); }
    __listBoolProps() { return ["selected"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
}
Layout.Tabs.Tab.Namespace=`Aventus.Layout.Tabs`;
__as1(_.Layout.Tabs, 'Tab', Layout.Tabs.Tab);


for(let key in _) { Aventus[key] = _[key] }
})(Aventus);

var AventusStore;
(AventusStore||(AventusStore = {}));
(function (AventusStore) {
const __as1 = (o, k, c) => { if (o[k] !== undefined) for (let w in o[k]) { c[w] = o[k][w] } o[k] = c; }
const moduleName = `AventusStore`;
const _ = {};

let App = {};
_.App = AventusStore.App ?? {};
App.Models = {};
_.App.Models = AventusStore.App?.Models ?? {};
App.Http = {};
_.App.Http = AventusStore.App?.Http ?? {};
App.Http.Controllers = {};
_.App.Http.Controllers = AventusStore.App?.Http?.Controllers ?? {};
App.Http.Controllers.User = {};
_.App.Http.Controllers.User = AventusStore.App?.Http?.Controllers?.User ?? {};
App.Http.Controllers.User.EditPicture = {};
_.App.Http.Controllers.User.EditPicture = AventusStore.App?.Http?.Controllers?.User?.EditPicture ?? {};
App.Http.Controllers.User.EditEmail = {};
_.App.Http.Controllers.User.EditEmail = AventusStore.App?.Http?.Controllers?.User?.EditEmail ?? {};
App.Http.Controllers.User.EditBio = {};
_.App.Http.Controllers.User.EditBio = AventusStore.App?.Http?.Controllers?.User?.EditBio ?? {};
App.Http.Controllers.Template = {};
_.App.Http.Controllers.Template = AventusStore.App?.Http?.Controllers?.Template ?? {};
App.Http.Controllers.Template.Search = {};
_.App.Http.Controllers.Template.Search = AventusStore.App?.Http?.Controllers?.Template?.Search ?? {};
App.Http.Controllers.Template.Random = {};
_.App.Http.Controllers.Template.Random = AventusStore.App?.Http?.Controllers?.Template?.Random ?? {};
App.Http.Controllers.Template.Edit = {};
_.App.Http.Controllers.Template.Edit = AventusStore.App?.Http?.Controllers?.Template?.Edit ?? {};
App.Http.Controllers.Template.Edit.Readme = {};
_.App.Http.Controllers.Template.Edit.Readme = AventusStore.App?.Http?.Controllers?.Template?.Edit?.Readme ?? {};
App.Http.Controllers.Template.Download = {};
_.App.Http.Controllers.Template.Download = AventusStore.App?.Http?.Controllers?.Template?.Download ?? {};
App.Http.Controllers.Template.Details = {};
_.App.Http.Controllers.Template.Details = AventusStore.App?.Http?.Controllers?.Template?.Details ?? {};
App.Http.Controllers.Template.Delete = {};
_.App.Http.Controllers.Template.Delete = AventusStore.App?.Http?.Controllers?.Template?.Delete ?? {};
App.Http.Controllers.Remote = {};
_.App.Http.Controllers.Remote = AventusStore.App?.Http?.Controllers?.Remote ?? {};
App.Http.Controllers.Remote.Template = {};
_.App.Http.Controllers.Remote.Template = AventusStore.App?.Http?.Controllers?.Remote?.Template ?? {};
App.Http.Controllers.Remote.Template.Publish = {};
_.App.Http.Controllers.Remote.Template.Publish = AventusStore.App?.Http?.Controllers?.Remote?.Template?.Publish ?? {};
App.Http.Controllers.Remote.Package = {};
_.App.Http.Controllers.Remote.Package = AventusStore.App?.Http?.Controllers?.Remote?.Package ?? {};
App.Http.Controllers.Remote.Package.Publish = {};
_.App.Http.Controllers.Remote.Package.Publish = AventusStore.App?.Http?.Controllers?.Remote?.Package?.Publish ?? {};
App.Http.Controllers.Remote.Auth = {};
_.App.Http.Controllers.Remote.Auth = AventusStore.App?.Http?.Controllers?.Remote?.Auth ?? {};
App.Http.Controllers.Remote.Auth.Logout = {};
_.App.Http.Controllers.Remote.Auth.Logout = AventusStore.App?.Http?.Controllers?.Remote?.Auth?.Logout ?? {};
App.Http.Controllers.Remote.Auth.Login = {};
_.App.Http.Controllers.Remote.Auth.Login = AventusStore.App?.Http?.Controllers?.Remote?.Auth?.Login ?? {};
App.Http.Controllers.Package = {};
_.App.Http.Controllers.Package = AventusStore.App?.Http?.Controllers?.Package ?? {};
App.Http.Controllers.Package.Search = {};
_.App.Http.Controllers.Package.Search = AventusStore.App?.Http?.Controllers?.Package?.Search ?? {};
App.Http.Controllers.Package.Random = {};
_.App.Http.Controllers.Package.Random = AventusStore.App?.Http?.Controllers?.Package?.Random ?? {};
App.Http.Controllers.Package.Edit = {};
_.App.Http.Controllers.Package.Edit = AventusStore.App?.Http?.Controllers?.Package?.Edit ?? {};
App.Http.Controllers.Package.Edit.Readme = {};
_.App.Http.Controllers.Package.Edit.Readme = AventusStore.App?.Http?.Controllers?.Package?.Edit?.Readme ?? {};
App.Http.Controllers.Package.Download = {};
_.App.Http.Controllers.Package.Download = AventusStore.App?.Http?.Controllers?.Package?.Download ?? {};
App.Http.Controllers.Package.Details = {};
_.App.Http.Controllers.Package.Details = AventusStore.App?.Http?.Controllers?.Package?.Details ?? {};
App.Http.Controllers.Package.Delete = {};
_.App.Http.Controllers.Package.Delete = AventusStore.App?.Http?.Controllers?.Package?.Delete ?? {};
App.Http.Controllers.Org = {};
_.App.Http.Controllers.Org = AventusStore.App?.Http?.Controllers?.Org ?? {};
App.Http.Controllers.Org.EditPicture = {};
_.App.Http.Controllers.Org.EditPicture = AventusStore.App?.Http?.Controllers?.Org?.EditPicture ?? {};
App.Http.Controllers.Org.EditBio = {};
_.App.Http.Controllers.Org.EditBio = AventusStore.App?.Http?.Controllers?.Org?.EditBio ?? {};
App.Http.Controllers.Org.Create = {};
_.App.Http.Controllers.Org.Create = AventusStore.App?.Http?.Controllers?.Org?.Create ?? {};
App.Http.Controllers.User.Details = {};
_.App.Http.Controllers.User.Details = AventusStore.App?.Http?.Controllers?.User?.Details ?? {};
App.Http.Controllers.Auth = {};
_.App.Http.Controllers.Auth = AventusStore.App?.Http?.Controllers?.Auth ?? {};
App.Http.Controllers.Auth.Signup = {};
_.App.Http.Controllers.Auth.Signup = AventusStore.App?.Http?.Controllers?.Auth?.Signup ?? {};
App.Http.Controllers.Auth.Logout = {};
_.App.Http.Controllers.Auth.Logout = AventusStore.App?.Http?.Controllers?.Auth?.Logout ?? {};
App.Http.Controllers.Auth.Login = {};
_.App.Http.Controllers.Auth.Login = AventusStore.App?.Http?.Controllers?.Auth?.Login ?? {};
App.Enums = {};
_.App.Enums = AventusStore.App?.Enums ?? {};
App.Http.Controllers.Org.Role = {};
_.App.Http.Controllers.Org.Role = AventusStore.App?.Http?.Controllers?.Org?.Role ?? {};
App.Http.Controllers.Org.Details = {};
_.App.Http.Controllers.Org.Details = AventusStore.App?.Http?.Controllers?.Org?.Details ?? {};
App.Http.Controllers.User.Current = {};
_.App.Http.Controllers.User.Current = AventusStore.App?.Http?.Controllers?.User?.Current ?? {};
App.Http.Resources = {};
_.App.Http.Resources = AventusStore.App?.Http?.Resources ?? {};
App.Http.Resources.Web = {};
_.App.Http.Resources.Web = AventusStore.App?.Http?.Resources?.Web ?? {};
let _n;
=======


for(let key in _) { Aventus[key] = _[key] }
})(Aventus);

var AventusStore;
(AventusStore||(AventusStore = {}));
(function (AventusStore) {
const __as1 = (o, k, c) => { if (o[k] !== undefined) for (let w in o[k]) { c[w] = o[k][w] } o[k] = c; }
const moduleName = `AventusStore`;
const _ = {};

let App = {};
_.App = AventusStore.App ?? {};
App.Models = {};
_.App.Models = AventusStore.App?.Models ?? {};
App.Http = {};
_.App.Http = AventusStore.App?.Http ?? {};
App.Http.Controllers = {};
_.App.Http.Controllers = AventusStore.App?.Http?.Controllers ?? {};
App.Http.Controllers.User = {};
_.App.Http.Controllers.User = AventusStore.App?.Http?.Controllers?.User ?? {};
App.Http.Controllers.User.EditPicture = {};
_.App.Http.Controllers.User.EditPicture = AventusStore.App?.Http?.Controllers?.User?.EditPicture ?? {};
App.Http.Controllers.User.EditEmail = {};
_.App.Http.Controllers.User.EditEmail = AventusStore.App?.Http?.Controllers?.User?.EditEmail ?? {};
App.Http.Controllers.User.EditBio = {};
_.App.Http.Controllers.User.EditBio = AventusStore.App?.Http?.Controllers?.User?.EditBio ?? {};
App.Http.Controllers.Template = {};
_.App.Http.Controllers.Template = AventusStore.App?.Http?.Controllers?.Template ?? {};
App.Http.Controllers.Template.Search = {};
_.App.Http.Controllers.Template.Search = AventusStore.App?.Http?.Controllers?.Template?.Search ?? {};
App.Http.Controllers.Template.Random = {};
_.App.Http.Controllers.Template.Random = AventusStore.App?.Http?.Controllers?.Template?.Random ?? {};
App.Http.Controllers.Template.Edit = {};
_.App.Http.Controllers.Template.Edit = AventusStore.App?.Http?.Controllers?.Template?.Edit ?? {};
App.Http.Controllers.Template.Edit.Readme = {};
_.App.Http.Controllers.Template.Edit.Readme = AventusStore.App?.Http?.Controllers?.Template?.Edit?.Readme ?? {};
App.Http.Controllers.Template.Download = {};
_.App.Http.Controllers.Template.Download = AventusStore.App?.Http?.Controllers?.Template?.Download ?? {};
App.Http.Controllers.Template.Details = {};
_.App.Http.Controllers.Template.Details = AventusStore.App?.Http?.Controllers?.Template?.Details ?? {};
App.Http.Controllers.Template.Delete = {};
_.App.Http.Controllers.Template.Delete = AventusStore.App?.Http?.Controllers?.Template?.Delete ?? {};
App.Http.Controllers.Remote = {};
_.App.Http.Controllers.Remote = AventusStore.App?.Http?.Controllers?.Remote ?? {};
App.Http.Controllers.Remote.Template = {};
_.App.Http.Controllers.Remote.Template = AventusStore.App?.Http?.Controllers?.Remote?.Template ?? {};
App.Http.Controllers.Remote.Template.Publish = {};
_.App.Http.Controllers.Remote.Template.Publish = AventusStore.App?.Http?.Controllers?.Remote?.Template?.Publish ?? {};
App.Http.Controllers.Remote.Package = {};
_.App.Http.Controllers.Remote.Package = AventusStore.App?.Http?.Controllers?.Remote?.Package ?? {};
App.Http.Controllers.Remote.Package.Publish = {};
_.App.Http.Controllers.Remote.Package.Publish = AventusStore.App?.Http?.Controllers?.Remote?.Package?.Publish ?? {};
App.Http.Controllers.Remote.Auth = {};
_.App.Http.Controllers.Remote.Auth = AventusStore.App?.Http?.Controllers?.Remote?.Auth ?? {};
App.Http.Controllers.Remote.Auth.Logout = {};
_.App.Http.Controllers.Remote.Auth.Logout = AventusStore.App?.Http?.Controllers?.Remote?.Auth?.Logout ?? {};
App.Http.Controllers.Remote.Auth.Login = {};
_.App.Http.Controllers.Remote.Auth.Login = AventusStore.App?.Http?.Controllers?.Remote?.Auth?.Login ?? {};
App.Http.Controllers.Package = {};
_.App.Http.Controllers.Package = AventusStore.App?.Http?.Controllers?.Package ?? {};
App.Http.Controllers.Package.Search = {};
_.App.Http.Controllers.Package.Search = AventusStore.App?.Http?.Controllers?.Package?.Search ?? {};
App.Http.Controllers.Package.Random = {};
_.App.Http.Controllers.Package.Random = AventusStore.App?.Http?.Controllers?.Package?.Random ?? {};
App.Http.Controllers.Package.Edit = {};
_.App.Http.Controllers.Package.Edit = AventusStore.App?.Http?.Controllers?.Package?.Edit ?? {};
App.Http.Controllers.Package.Edit.Readme = {};
_.App.Http.Controllers.Package.Edit.Readme = AventusStore.App?.Http?.Controllers?.Package?.Edit?.Readme ?? {};
App.Http.Controllers.Package.Download = {};
_.App.Http.Controllers.Package.Download = AventusStore.App?.Http?.Controllers?.Package?.Download ?? {};
App.Http.Controllers.Package.Details = {};
_.App.Http.Controllers.Package.Details = AventusStore.App?.Http?.Controllers?.Package?.Details ?? {};
App.Http.Controllers.Package.Delete = {};
_.App.Http.Controllers.Package.Delete = AventusStore.App?.Http?.Controllers?.Package?.Delete ?? {};
App.Http.Controllers.Org = {};
_.App.Http.Controllers.Org = AventusStore.App?.Http?.Controllers?.Org ?? {};
App.Http.Controllers.Org.EditPicture = {};
_.App.Http.Controllers.Org.EditPicture = AventusStore.App?.Http?.Controllers?.Org?.EditPicture ?? {};
App.Http.Controllers.Org.EditBio = {};
_.App.Http.Controllers.Org.EditBio = AventusStore.App?.Http?.Controllers?.Org?.EditBio ?? {};
App.Http.Controllers.Org.Create = {};
_.App.Http.Controllers.Org.Create = AventusStore.App?.Http?.Controllers?.Org?.Create ?? {};
App.Http.Controllers.User.Details = {};
_.App.Http.Controllers.User.Details = AventusStore.App?.Http?.Controllers?.User?.Details ?? {};
App.Http.Controllers.Auth = {};
_.App.Http.Controllers.Auth = AventusStore.App?.Http?.Controllers?.Auth ?? {};
App.Http.Controllers.Auth.Signup = {};
_.App.Http.Controllers.Auth.Signup = AventusStore.App?.Http?.Controllers?.Auth?.Signup ?? {};
App.Http.Controllers.Auth.Logout = {};
_.App.Http.Controllers.Auth.Logout = AventusStore.App?.Http?.Controllers?.Auth?.Logout ?? {};
App.Http.Controllers.Auth.Login = {};
_.App.Http.Controllers.Auth.Login = AventusStore.App?.Http?.Controllers?.Auth?.Login ?? {};
App.Enums = {};
_.App.Enums = AventusStore.App?.Enums ?? {};
App.Http.Controllers.Org.Role = {};
_.App.Http.Controllers.Org.Role = AventusStore.App?.Http?.Controllers?.Org?.Role ?? {};
App.Http.Controllers.Org.Details = {};
_.App.Http.Controllers.Org.Details = AventusStore.App?.Http?.Controllers?.Org?.Details ?? {};
App.Http.Controllers.User.Current = {};
_.App.Http.Controllers.User.Current = AventusStore.App?.Http?.Controllers?.User?.Current ?? {};
App.Http.Resources = {};
_.App.Http.Resources = AventusStore.App?.Http?.Resources ?? {};
App.Http.Resources.Web = {};
_.App.Http.Resources.Web = AventusStore.App?.Http?.Resources?.Web ?? {};
let _n;
>>>>>>> 8835a8f (Update to new version)
const Footer = class Footer extends Aventus.WebComponent {
    static __style = `:host{background-color:var(--footer-bg);border-top:1px solid var(--footer-color-border)}:host .footer-container{margin:0 auto;max-width:1280px;padding:2rem 2rem}:host .footer-content{align-items:center;display:flex;flex-direction:column;gap:.25rem;justify-content:space-between}:host .footer-brand{align-items:center;display:flex;gap:.5rem}:host .footer-icon{align-items:center;color:var(--color-accent);display:flex;font-size:1.75rem;height:1.75rem;justify-content:center;width:1.75rem}:host .footer-title{color:var(--footer-text);font-size:1.125rem;font-weight:bold}:host .footer-copy{color:var(--text-muted);font-size:.875rem;margin:0;text-align:center}:host .footer-social{display:flex;gap:1rem}@media(min-width: 768px){:host .footer-content{flex-direction:row;gap:1rem}:host .footer-copy{text-align:right}}`;
    __getStatic() {
        return Footer;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Footer.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="footer-container">
    <div class="footer-content">
        <div class="footer-brand">
            <mi-icon icon="code" class="footer-icon"></mi-icon>
            <span class="footer-title">AventusJs</span>
        </div>
        <p class="footer-copy" _id="footer_0"></p>
        <div class="footer-social">
        </div>
    </div>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "footer_0°@HTML": {
      "fct": (c) => `\n            &copy; ${c.print(c.comp.__6445892e3b1981dca4f1cae255c1f123method0())} AventusJs. All Rights Reserved.\n        `,
      "once": true
    }
  }
});
 }
    getClassName() {
        return "Footer";
    }
    __6445892e3b1981dca4f1cae255c1f123method0() {
        return new Date().getFullYear();
    }
}
Footer.Namespace=`AventusStore`;
Footer.Tag=`as-footer`;
__as1(_, 'Footer', Footer);
if(!window.customElements.get('as-footer')){window.customElements.define('as-footer', Footer);Aventus.WebComponentInstance.registerDefinition(Footer);}

const ValidationResultPage = class ValidationResultPage extends Aventus.Navigation.Page {
    get 'is_success'() { return this.getBoolAttr('is_success') }
    set 'is_success'(val) { this.setBoolAttr('is_success', val) }
    static __style = `:host{display:flex;flex-direction:column;justify-content:center;padding:3rem 1rem}:host .header{margin:0 auto;max-width:28rem;text-align:center;width:100%}:host .header .title{color:var(--text-color);font-size:1.875rem;font-weight:700;margin-top:1.5rem}:host .success-animation{align-items:center;display:flex;justify-content:center}:host .success-animation .checkmark{max-width:100%;stroke:var(--color-success);stroke-width:2;width:16rem}:host .success-animation .checkmark .checkmark__circle{animation:stroke .6s cubic-bezier(0.65, 0, 0.45, 1) forwards;stroke-dasharray:166;stroke-dashoffset:166;stroke-miterlimit:10}:host .success-animation .checkmark .checkmark__check{animation:stroke .3s cubic-bezier(0.65, 0, 0.45, 1) .8s forwards;stroke-dasharray:48;stroke-dashoffset:48;transform-origin:50% 50%}:host .error-animation{align-items:center;display:flex;justify-content:center}:host .error-animation .cross{max-width:100%;stroke:var(--color-danger);stroke-width:2;width:16rem}:host .error-animation .cross .cross__circle{animation:stroke .6s cubic-bezier(0.65, 0, 0.45, 1) forwards;stroke-dasharray:166;stroke-dashoffset:166;stroke-miterlimit:10}:host .error-animation .cross .cross__bar1{animation:stroke .3s cubic-bezier(0.65, 0, 0.45, 1) 1s forwards;stroke-dasharray:48;stroke-dashoffset:48;transform-origin:50% 50%}:host .error-animation .cross .cross__bar2{animation:stroke .3s cubic-bezier(0.65, 0, 0.45, 1) .8s forwards;stroke-dasharray:48;stroke-dashoffset:48;transform-origin:50% 50%}@keyframes stroke{100%{stroke-dashoffset:0}}@keyframes scale{0%,100%{transform:none}50%{transform:scale3d(1.1, 1.1, 1)}}`;
    constructor() {
        super();
        this.is_success = location.href.endsWith("success");
    }
    __getStatic() {
        return ValidationResultPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ValidationResultPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="header">
    <h2 class="title" _id="validationresultpage_0"></h2>
</div><template _id="validationresultpage_1"></template>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "validationresultpage_0°@HTML": {
      "fct": (c) => `Validation ${c.print(c.comp.__2e3d027074dee4b27b5c8cf8926eb06fmethod1())}`
    }
  }
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
    <div class="success-animation">
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"></circle>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
        </svg>
    </div>
`);
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
    <div class="error-animation">
        <svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" xmlns:bx="https://boxy-svg.com">
            <circle class="cross__circle" cx="26" cy="26" r="25" fill="none"></circle>
            <path class="cross__bar1" fill="none" d="M 17.571 34.578 L 34.271 17.778"></path>
            <path class="cross__bar2" fill="none" d="M 17.615 34.622 L 34.315 17.822" style="transform-origin: 50% 50%;" transform="matrix(0, 1, -1, 0, 0.000001, 0.000001)"></path>
        </svg>
    </div>
`);
this.__getStatic().__template.addIf({
                    anchorId: 'validationresultpage_1',
                    parts: [{once: true,
                    condition: (c) => c.comp.__2e3d027074dee4b27b5c8cf8926eb06fmethod0(),
                    template: templ0
                },{once: true,
                    condition: (c) => true,
                    template: templ1
                }]
            });
 }
    getClassName() {
        return "ValidationResultPage";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('is_success')) { this.attributeChangedCallback('is_success', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('is_success');
 }
    __listBoolProps() { return ["is_success"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    isAllowed(state) {
        if (Main.user) {
            return "/";
        }
        return true;
    }
    configure() {
        return {
            title: this.is_success ? "Validation success | Aventus Store" : "Validation error | Aventus Store"
        };
    }
    __2e3d027074dee4b27b5c8cf8926eb06fmethod1() {
        return this.is_success ? "successful" : "failed";
    }
    __2e3d027074dee4b27b5c8cf8926eb06fmethod0() {
        return this.is_success;
    }
}
ValidationResultPage.Namespace=`AventusStore`;
ValidationResultPage.Tag=`as-validation-result-page`;
__as1(_, 'ValidationResultPage', ValidationResultPage);
if(!window.customElements.get('as-validation-result-page')){window.customElements.define('as-validation-result-page', ValidationResultPage);Aventus.WebComponentInstance.registerDefinition(ValidationResultPage);}

const Tab = class Tab extends Aventus.Layout.Tabs.Tab {
    static get observedAttributes() {return ["label", "count", "icon"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'label'() { return this.getStringProp('label') }
    set 'label'(val) { this.setStringAttr('label', val) }
get 'count'() { return this.getNumberProp('count') }
    set 'count'(val) { this.setNumberAttr('count', val) }
get 'icon'() { return this.getStringProp('icon') }
    set 'icon'(val) { this.setStringAttr('icon', val) }
    static __style = `:host{width:100%}`;
    __getStatic() {
        return Tab;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Tab.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Tab";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('label')){ this['label'] = ""; }
if(!this.hasAttribute('count')){ this['count'] = undefined; }
if(!this.hasAttribute('icon')){ this['icon'] = undefined; }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('label');
this.__upgradeProperty('count');
this.__upgradeProperty('icon');
 }
    identifier() {
        return this.label;
    }
}
Tab.Namespace=`AventusStore`;
Tab.Tag=`as-tab`;
__as1(_, 'Tab', Tab);
if(!window.customElements.get('as-tab')){window.customElements.define('as-tab', Tab);Aventus.WebComponentInstance.registerDefinition(Tab);}

const TabHeader = class TabHeader extends Aventus.Layout.Tabs.TabHeader {
    static __style = `:host{align-items:center;background:none;border:none;border-bottom:2px solid rgba(0,0,0,0);color:var(--text-muted);cursor:pointer;display:flex;font-size:.875rem;font-weight:500;padding:1rem .5rem}:host mi-icon{font-size:1rem;margin-right:.5rem}:host mi-icon[icon=""]{display:none}:host .count{background-color:#334155;border-radius:9999px;color:var(--text-color);font-size:.75rem;margin-left:.5rem;padding:.125rem .5rem}:host .count:empty{display:none}:host(:hover){border-color:#334155;color:var(--text-color)}:host([active]){border-color:var(--border-hover);color:var(--border-hover)}`;
    __getStatic() {
        return TabHeader;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(TabHeader.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<mi-icon icon="" _id="tabheader1_0"></mi-icon><span><slot></slot></span><span class="count" _id="tabheader1_1"></span>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "iconEl",
      "ids": [
        "tabheader1_0"
      ]
    },
    {
      "name": "countEl",
      "ids": [
        "tabheader1_1"
      ]
    }
  ]
});
 }
    getClassName() {
        return "TabHeader";
    }
    render() {
        this.innerHTML = this.tab.label;
        if (this.tab.count) {
            this.countEl.innerHTML = this.tab.count + '';
        }
        if (this.tab.icon) {
            this.iconEl.icon = this.tab.icon;
        }
    }
}
TabHeader.Namespace=`AventusStore`;
TabHeader.Tag=`as-tab-header`;
__as1(_, 'TabHeader', TabHeader);
if(!window.customElements.get('as-tab-header')){window.customElements.define('as-tab-header', TabHeader);Aventus.WebComponentInstance.registerDefinition(TabHeader);}

let DateTools=class DateTools {
    static isSameDate(date1, date2) {
        if (date1 == null && date2 == null)
            return true;
        if (date1 == null || date2 == null)
            return false;
        return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
    }
    static isSameDateTime(date1, date2) {
        if (date1 == null && date2 == null)
            return true;
        if (date1 == null || date2 == null)
            return false;
        return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear() && date1.getHours() == date2.getHours() && date1.getMinutes() == date2.getMinutes();
    }
    static printDate(date, options, locale) {
        if (!options) {
            options = {
                year: "numeric",
                month: "long",
                day: "2-digit"
            };
        }
        return date.toLocaleDateString(locale, options);
    }
    static printDateTime(date, options, locale) {
        if (!options) {
            options = {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            };
        }
        return date.toLocaleDateString(locale, options);
    }
    static _localMonths = [];
    static getMonthsName(format = "long") {
        if (this._localMonths.length == 0) {
            for (let i = 0; i < 12; i++) {
                this._localMonths.push(this.printDate(new Date(2024, i, 15), { month: format }));
            }
        }
        return this._localMonths;
    }
    static getStartMonth(date) {
        const start = new Date();
        start.setTime(date.getTime());
        start.setDate(1);
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        start.setMilliseconds(0);
        return start;
    }
    static getEndMonth(date) {
        const end = this.getStartMonth(date);
        end.setMonth(end.getMonth() + 1);
        end.setDate(0);
        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        end.setMilliseconds(999);
        return end;
    }
    static getStartWeek(date) {
        const start = new Date();
        start.setTime(date.getTime());
        const day = start.getDay();
        const diff = (day === 0) ? -6 : 1 - day;
        const monday = start.getDate() + diff;
        start.setDate(monday);
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        start.setMilliseconds(0);
        return start;
    }
    static getEndWeek(date) {
        const end = this.getStartWeek(date);
        end.setDate(end.getDate() + 7);
        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        end.setMilliseconds(999);
        return end;
    }
    static getStartDay(date) {
        const start = new Date();
        start.setTime(date.getTime());
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        start.setMilliseconds(0);
        return start;
    }
    static getEndDay(date) {
        const end = this.getStartDay(date);
        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        end.setMilliseconds(999);
        return end;
    }
    static diffMinutes(d1, d2) {
        const diffMs = Math.abs(d1.getTime() - d2.getTime());
        return Math.floor(diffMs / (1000 * 60));
    }
    static diffHours(d1, d2) {
        const diffMs = Math.abs(d1.getTime() - d2.getTime());
        return Math.floor(diffMs / (1000 * 60 * 60));
    }
    static diffDays(d1, d2) {
        const diffMs = Math.abs(d1.getTime() - d2.getTime());
        return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }
}
DateTools.Namespace=`AventusStore`;
__as1(_, 'DateTools', DateTools);

const Input = class Input extends Aventus.Form.FormElement {
    static get observedAttributes() {return ["label", "placeholder", "type"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'label'() { return this.getStringProp('label') }
    set 'label'(val) { this.setStringAttr('label', val) }
get 'placeholder'() { return this.getStringProp('placeholder') }
    set 'placeholder'(val) { this.setStringAttr('placeholder', val) }
get 'type'() { return this.getStringProp('type') }
    set 'type'(val) { this.setStringAttr('type', val) }
    static __style = `:host{display:flex;flex-direction:column;outline:none}:host .form-label{color:var(--text-muted);display:none;font-size:.875rem;font-weight:500;margin-bottom:.25rem}:host .form-field{background-color:var(--input-bg);border:1px solid var(--input-border);border-radius:.375rem;color:var(--input-text);display:flex;font-size:.875rem;height:2.5rem;padding:.5rem .75rem;width:100%}:host .form-field input{background-color:rgba(0,0,0,0);border:none;box-shadow:none;color:inherit;height:100%;outline:none;width:100%}:host .form-field input::placeholder{color:var(--input-placeholder)}:host .form-field input:-webkit-autofill,:host .form-field input:-webkit-autofill:hover,:host .form-field input:-webkit-autofill:focus,:host .form-field input:-webkit-autofill:active,:host .form-field input:-internal-autofill-selected,:host .form-field input:-internal-autofill-previewed{-webkit-box-shadow:0 0 0 30px var(--input-bg) inset !important;-webkit-text-fill-color:var(--input-text)}:host .errors{color:red;display:none;flex-direction:column;font-size:.75rem;gap:2px;margin-top:.25rem}:host([label]:not([label=""])) .form-label{display:block}:host([label]:not([label=""])) .form-field{margin-top:.25rem}:host(:focus) .form-field{box-shadow:0 0 0 2px var(--input-focus-ring);outline:none}:host([has_errors]) .errors{display:flex}`;
    __getStatic() {
        return Input;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Input.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<label class="form-label" _id="input_0"></label><div class="form-field">
    <input _id="input_1" />
</div><div class="errors">
    <template _id="input_2"></template>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "inputEl",
      "ids": [
        "input_1"
      ]
    }
  ],
  "content": {
    "input_0°for": {
      "fct": (c) => `${c.print(c.comp.__96ce632e3ba94f9f85f87c653f59bea7method1())}`,
      "once": true
    },
    "input_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__96ce632e3ba94f9f85f87c653f59bea7method2())}`,
      "once": true
    },
    "input_1°id": {
      "fct": (c) => `${c.print(c.comp.__96ce632e3ba94f9f85f87c653f59bea7method1())}`,
      "once": true
    },
    "input_1°name": {
      "fct": (c) => `${c.print(c.comp.__96ce632e3ba94f9f85f87c653f59bea7method1())}`,
      "once": true
    },
    "input_1°type": {
      "fct": (c) => `${c.print(c.comp.__96ce632e3ba94f9f85f87c653f59bea7method3())}`,
      "once": true
    },
    "input_1°placeholder": {
      "fct": (c) => `${c.print(c.comp.__96ce632e3ba94f9f85f87c653f59bea7method4())}`,
      "once": true
    }
  },
  "events": [
    {
      "eventName": "input",
      "id": "input_1",
      "fct": (e, c) => c.comp.changeValue(e)
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
        <div class="error" _id="input_3"></div>
    `);
templ0.setActions({
  "content": {
    "input_3°@HTML": {
      "fct": (c) => `${c.print(c.comp.__96ce632e3ba94f9f85f87c653f59bea7method5(c.data.error))}`,
      "once": true
    }
  }
});
this.__getStatic().__template.addLoop({
                    anchorId: 'input_2',
                    template: templ0,
                simple:{data: "this.errors",item:"error"}
});
 }
    getClassName() {
        return "Input";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('label')){ this['label'] = undefined; }
if(!this.hasAttribute('placeholder')){ this['placeholder'] = undefined; }
if(!this.hasAttribute('type')){ this['type'] = "text"; }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('label');
this.__upgradeProperty('placeholder');
this.__upgradeProperty('type');
 }
    async validation() {
        return [];
    }
    formAssociatedCallback(form) {
        super.formAssociatedCallback(form);
    }
    onValueChange(value) {
        super.onValueChange(value);
        this.inputEl.value = value ?? '';
    }
    changeValue() {
        this.triggerChange(this.inputEl.value);
    }
    postCreation() {
        super.postCreation();
        this.addEventListener("focus", () => {
            this.clearErrors();
            this.inputEl.focus();
        });
    }
    __96ce632e3ba94f9f85f87c653f59bea7method1() {
        return this.id;
    }
    __96ce632e3ba94f9f85f87c653f59bea7method2() {
        return this.label;
    }
    __96ce632e3ba94f9f85f87c653f59bea7method3() {
        return this.type;
    }
    __96ce632e3ba94f9f85f87c653f59bea7method4() {
        return this.placeholder;
    }
    __96ce632e3ba94f9f85f87c653f59bea7method5(error) {
        return error;
    }
}
Input.Namespace=`AventusStore`;
Input.Tag=`as-input`;
__as1(_, 'Input', Input);
if(!window.customElements.get('as-input')){window.customElements.define('as-input', Input);Aventus.WebComponentInstance.registerDefinition(Input);}

const UserImg = class UserImg extends Aventus.WebComponent {
    get 'user'() {
						return this.__signals["user"].value;
					}
					set 'user'(val) {
						this.__signals["user"].value = val;
					}
    __registerSignalsActions() { this.__signals["user"] = null;
 super.__registerSignalsActions(); this.__addSignalActions("user", ((target) => {
    target.init();
}));
 }
    static __style = `:host{align-items:center;color:var(--bg-surface);background-position:center;background-size:cover;display:flex;height:100%;justify-content:center;letter-spacing:2px;width:100%;background-color:var(--color-accent);text-transform:uppercase}`;
    __getStatic() {
        return UserImg;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(UserImg.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div _id="userimg_0"></div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "lettersEl",
      "ids": [
        "userimg_0"
      ]
    }
  ]
});
 }
    getClassName() {
        return "UserImg";
    }
    __defaultValuesSignal(s) { super.__defaultValuesSignal(s); s["user"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('user');
 }
    init() {
        if (this.user?.picture?.uri) {
            this.style.backgroundImage = "url('" + this.user?.picture?.uri + "')";
            this.lettersEl.innerHTML = "";
        }
        else {
            this.style.backgroundImage = "";
            const name = this.user.username ?? this.user.name ?? '';
            this.lettersEl.innerHTML = name.slice(0, 2);
        }
    }
}
UserImg.Namespace=`AventusStore`;
UserImg.Tag=`as-user-img`;
__as1(_, 'UserImg', UserImg);
if(!window.customElements.get('as-user-img')){window.customElements.define('as-user-img', UserImg);Aventus.WebComponentInstance.registerDefinition(UserImg);}

let TemplatesPageState=class TemplatesPageState extends Aventus.State {
    static get state() { return "/templates"; }
    /**
     * @inheritdoc
     */
    get name() {
        return TemplatesPageState.state;
    }
    search = "";
}
TemplatesPageState.Namespace=`AventusStore`;
__as1(_, 'TemplatesPageState', TemplatesPageState);

const Button = class Button extends Aventus.Form.ButtonElement {
    get 'variant'() { return this.getStringAttr('variant') }
    set 'variant'(val) { this.setStringAttr('variant', val) }
get 'loading'() { return this.getBoolAttr('loading') }
    set 'loading'(val) { this.setBoolAttr('loading', val) }
    static __style = `:host{--_button-bg-color: var(--button-bg-color, var(--color-accent));--_button-hover-bg-color: var(--button-hover-bg-color, var(--hover-accent));--_button-text-color: var(--text-white)}:host{align-items:center;background-color:var(--_button-bg-color);border:none;border-radius:.375rem;color:var(--_button-text-color);cursor:pointer;display:inline-flex;font-size:.875rem;font-weight:600;height:100%;justify-content:center;outline:none;padding:.5rem 1rem;position:relative;transition:background-color .2s ease}:host .loader-mask{align-items:center;align-items:stretch;display:none;inset:.5rem 1rem;justify-content:center;position:absolute}:host .loader-mask .loader{animation:rotation 1s linear infinite;aspect-ratio:1;border:2px solid #fff;border-bottom-color:rgba(0,0,0,0);border-radius:50000px;display:block;max-height:100%;max-width:100%}:host(:focus){box-shadow:0 0 0 2px #94a3b8,0 0 0 4px #0f172a}:host(:hover){background-color:var(--_button-hover-bg-color)}:host(:disabled){opacity:.5;pointer-events:none}:host([variant=secondary]){--_button-bg-color: var(--button-bg-color, var(--color-secondary));--_button-hover-bg-color: var(--button-hover-bg-color, var(--hover-secondary));--_button-text-color: var(--text-white)}:host([variant=ghost]){--_button-bg-color: var(--button-bg-color, transparent);--_button-hover-bg-color: var(--button-hover-bg-color, var(--bg-hover));--_button-text-color: var(--text-white)}:host([loading]) slot{opacity:0;visibility:hidden}:host([loading]) .loader-mask{display:flex}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;
    __getStatic() {
        return Button;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Button.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot><div class="loader-mask">
    <div class="loader"></div>
</div>` }
    });
}
    getClassName() {
        return "Button";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('variant')){ this['variant'] = undefined; }
if(!this.hasAttribute('loading')) { this.attributeChangedCallback('loading', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('variant');
this.__upgradeProperty('loading');
 }
    __listBoolProps() { return ["loading"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
}
Button.Namespace=`AventusStore`;
Button.Tag=`as-button`;
__as1(_, 'Button', Button);
if(!window.customElements.get('as-button')){window.customElements.define('as-button', Button);Aventus.WebComponentInstance.registerDefinition(Button);}

const ForgotPasswordPage = class ForgotPasswordPage extends Aventus.Navigation.Page {
    get 'submitted'() { return this.getBoolAttr('submitted') }
    set 'submitted'(val) { this.setBoolAttr('submitted', val) }
    static __style = `:host{flex-direction:column;justify-content:center;padding:3rem 1rem}:host .forgot-header{margin:0 auto;max-width:28rem;text-align:center;width:100%}:host .forgot-title{color:var(--text-color);font-size:1.875rem;font-weight:700;margin-top:1.5rem}:host .forgot-subtext{color:var(--text-muted);font-size:.875rem;margin-top:.5rem}:host .forgot-form-wrapper{margin-left:auto;margin-right:auto;margin-top:2rem;max-width:28rem;width:100%}:host .forgot-form-card{background-color:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;box-shadow:0 4px 12px rgba(0,0,0,.25);padding:2rem 1rem}:host .forgot-form{display:flex;flex-direction:column;gap:1.5rem}:host .form-group{display:flex;flex-direction:column}:host .form-label{color:var(--text-muted);font-size:.875rem;font-weight:500;margin-bottom:.25rem}:host .form-field{margin-top:.25rem}:host .btn-full{width:100%}:host .forgot-confirmation{text-align:center}:host .confirmation-title{color:var(--text-color);font-size:1.125rem;font-weight:600}:host .confirmation-text{color:var(--text-muted);font-size:.875rem;margin-top:.5rem}:host .back-link{display:inline-block;margin-top:1.5rem}:host([visible]){display:flex}@media(min-width: 640px){:host .forgot-form-card{padding:2rem 2.5rem}}`;
    __getStatic() {
        return ForgotPasswordPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ForgotPasswordPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="forgot-header">
    <h2 class="forgot-title">Forgot your password?</h2>
    <p class="forgot-subtext">
        Enter your email and we'll send you a reset link.
    </p>
</div><div class="forgot-form-wrapper">
    <div class="forgot-form-card">
        <template _id="forgotpasswordpage_0"></template>
    </div>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
            <div class="forgot-confirmation">
                <h3 class="confirmation-title">Check your email</h3>
                <p class="confirmation-text">
                    If an account exists for <strong>{email}</strong>, you will receive an email with instructions on
                    how to reset your password.
                </p>
                <av-router-link to="/login" class="back-link">
                    <as-button>Back to Login</as-button>
                </av-router-link>
            </div>
        `);
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
            <form class="forgot-form">
                <div class="form-group">
                    <label htmlFor="email" class="form-label">
                        Email address
                    </label>
                    <div class="form-field">
                        <as-input id="email" name="email" type="email" autoComplete="email" required></as-input>
                    </div>
                </div>
                <div>
                    <as-button type="submit" class="btn-full">
                        Send reset link
                    </as-button>
                </div>
            </form>
        `);
this.__getStatic().__template.addIf({
                    anchorId: 'forgotpasswordpage_0',
                    parts: [{once: true,
                    condition: (c) => c.comp.__a9eaad3d630e71dc6baeabc0c2c586e5method0(),
                    template: templ0
                },{once: true,
                    condition: (c) => true,
                    template: templ1
                }]
            });
 }
    getClassName() {
        return "ForgotPasswordPage";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('submitted')) { this.attributeChangedCallback('submitted', false, false); }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('submitted');
 }
    __listBoolProps() { return ["submitted"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    configure() {
        return {};
    }
    __a9eaad3d630e71dc6baeabc0c2c586e5method0() {
        return this.submitted;
    }
}
ForgotPasswordPage.Namespace=`AventusStore`;
ForgotPasswordPage.Tag=`as-forgot-password-page`;
__as1(_, 'ForgotPasswordPage', ForgotPasswordPage);
if(!window.customElements.get('as-forgot-password-page')){window.customElements.define('as-forgot-password-page', ForgotPasswordPage);Aventus.WebComponentInstance.registerDefinition(ForgotPasswordPage);}

let PackagesPageState=class PackagesPageState extends Aventus.State {
    static get state() { return "/packages"; }
    /**
     * @inheritdoc
     */
    get name() {
        return PackagesPageState.state;
    }
    search = "";
}
PackagesPageState.Namespace=`AventusStore`;
__as1(_, 'PackagesPageState', PackagesPageState);

const Loading = class Loading extends Aventus.WebComponent {
    static __style = `:host{align-items:center;display:flex;height:32px;inset:.5rem 1rem;justify-content:center;width:100%}:host .loader{animation:rotation 1s linear infinite;aspect-ratio:1;border:2px solid #fff;border-bottom-color:rgba(0,0,0,0);border-radius:50000px;display:block;height:100%;max-height:100%;max-width:100%}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;
    __getStatic() {
        return Loading;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Loading.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="loader"></div>` }
    });
}
    getClassName() {
        return "Loading";
    }
}
Loading.Namespace=`AventusStore`;
Loading.Tag=`as-loading`;
__as1(_, 'Loading', Loading);
if(!window.customElements.get('as-loading')){window.customElements.define('as-loading', Loading);Aventus.WebComponentInstance.registerDefinition(Loading);}

const Card = class Card extends Aventus.WebComponent {
    static __style = `:host{margin-left:auto;margin-right:auto;margin-top:2rem;max-width:28rem;width:100%}:host .card{background-color:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;box-shadow:0 4px 12px rgba(0,0,0,.25);padding:2rem 1rem}@media(min-width: 640px){:host .card{padding:2rem 2.5rem}}`;
    __getStatic() {
        return Card;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Card.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<div class="card">
    <slot></slot>
</div>` }
    });
}
    getClassName() {
        return "Card";
    }
}
Card.Namespace=`AventusStore`;
Card.Tag=`as-card`;
__as1(_, 'Card', Card);
if(!window.customElements.get('as-card')){window.customElements.define('as-card', Card);Aventus.WebComponentInstance.registerDefinition(Card);}

App.Models.TemplateVersion=class TemplateVersion extends Aventus.Data {
    static get Fullname() { return "App.Models.TemplateVersion"; }
    id;
    template_id;
    version;
    date;
}
App.Models.TemplateVersion.Namespace=`AventusStore.App.Models`;
App.Models.TemplateVersion.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","template_id":"number","version":"string","date":"Date"};
Aventus.Converter.register(App.Models.TemplateVersion.Fullname, App.Models.TemplateVersion);
__as1(_.App.Models, 'TemplateVersion', App.Models.TemplateVersion);

App.Models.Tags=class Tags extends Aventus.Data {
    static get Fullname() { return "App.Models.Tags"; }
    name;
}
App.Models.Tags.Namespace=`AventusStore.App.Models`;
App.Models.Tags.$schema={...(Aventus.Data?.$schema ?? {}), "name":"string"};
Aventus.Converter.register(App.Models.Tags.Fullname, App.Models.Tags);
__as1(_.App.Models, 'Tags', App.Models.Tags);

App.Models.RemoteAccess=class RemoteAccess extends Aventus.Data {
    static get Fullname() { return "App.Models.RemoteAccess"; }
    user_id;
    token;
    machine_id;
    machine_name;
}
App.Models.RemoteAccess.Namespace=`AventusStore.App.Models`;
App.Models.RemoteAccess.$schema={...(Aventus.Data?.$schema ?? {}), "user_id":"number","token":"string","machine_id":"string","machine_name":"string"};
Aventus.Converter.register(App.Models.RemoteAccess.Fullname, App.Models.RemoteAccess);
__as1(_.App.Models, 'RemoteAccess', App.Models.RemoteAccess);

App.Models.PackageVersion=class PackageVersion extends Aventus.Data {
    static get Fullname() { return "App.Models.PackageVersion"; }
    id;
    package_id;
    version;
    date;
}
App.Models.PackageVersion.Namespace=`AventusStore.App.Models`;
App.Models.PackageVersion.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","package_id":"number","version":"string","date":"Date"};
Aventus.Converter.register(App.Models.PackageVersion.Fullname, App.Models.PackageVersion);
__as1(_.App.Models, 'PackageVersion', App.Models.PackageVersion);

App.Models.Tag=class Tag extends Aventus.Data {
    static get Fullname() { return "App.Models.Tag"; }
    name;
}
App.Models.Tag.Namespace=`AventusStore.App.Models`;
App.Models.Tag.$schema={...(Aventus.Data?.$schema ?? {}), "name":"string"};
Aventus.Converter.register(App.Models.Tag.Fullname, App.Models.Tag);
__as1(_.App.Models, 'Tag', App.Models.Tag);

App.Models.PackageTag=class PackageTag extends Aventus.Data {
    static get Fullname() { return "App.Models.PackageTag"; }
    package_id;
    tag_id;
    tag;
    package;
}
App.Models.PackageTag.Namespace=`AventusStore.App.Models`;
App.Models.PackageTag.$schema={...(Aventus.Data?.$schema ?? {}), "package_id":"number","tag_id":"number","tag":"AventusStore.App.Models.Tag","package":"AventusStore.App.Models.Package"};
Aventus.Converter.register(App.Models.PackageTag.Fullname, App.Models.PackageTag);
__as1(_.App.Models, 'PackageTag', App.Models.PackageTag);

App.Models.Role=class Role extends Aventus.Data {
    static get Fullname() { return "App.Models.Role"; }
    id;
    name;
}
App.Models.Role.Namespace=`AventusStore.App.Models`;
App.Models.Role.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","name":"string"};
Aventus.Converter.register(App.Models.Role.Fullname, App.Models.Role);
__as1(_.App.Models, 'Role', App.Models.Role);

App.Http.Controllers.User.EditPicture.Request=class Request {
    file;
}
App.Http.Controllers.User.EditPicture.Request.Namespace=`AventusStore.App.Http.Controllers.User.EditPicture`;
__as1(_.App.Http.Controllers.User.EditPicture, 'Request', App.Http.Controllers.User.EditPicture.Request);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["ValidationError"] = 422] = "ValidationError";
})(App.Http.Controllers.User.EditEmail.ErrorEnum || (App.Http.Controllers.User.EditEmail.ErrorEnum = {}));
__as1(_.App.Http.Controllers.User.EditEmail, 'ErrorEnum', App.Http.Controllers.User.EditEmail.ErrorEnum);

App.Http.Controllers.User.EditEmail.Request=class Request {
    email;
}
App.Http.Controllers.User.EditEmail.Request.Namespace=`AventusStore.App.Http.Controllers.User.EditEmail`;
__as1(_.App.Http.Controllers.User.EditEmail, 'Request', App.Http.Controllers.User.EditEmail.Request);

App.Http.Controllers.User.EditBio.Request=class Request {
    bio = undefined;
}
App.Http.Controllers.User.EditBio.Request.Namespace=`AventusStore.App.Http.Controllers.User.EditBio`;
__as1(_.App.Http.Controllers.User.EditBio, 'Request', App.Http.Controllers.User.EditBio.Request);

(function (ErrorEnum) {
})(App.Http.Controllers.Template.Search.ErrorEnum || (App.Http.Controllers.Template.Search.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Template.Search, 'ErrorEnum', App.Http.Controllers.Template.Search.ErrorEnum);

App.Http.Controllers.Template.Search.Request=class Request {
    txt = undefined;
    limit;
    offset;
}
App.Http.Controllers.Template.Search.Request.Namespace=`AventusStore.App.Http.Controllers.Template.Search`;
__as1(_.App.Http.Controllers.Template.Search, 'Request', App.Http.Controllers.Template.Search.Request);

App.Http.Controllers.Template.Random.Request=class Request {
    number;
}
App.Http.Controllers.Template.Random.Request.Namespace=`AventusStore.App.Http.Controllers.Template.Random`;
__as1(_.App.Http.Controllers.Template.Random, 'Request', App.Http.Controllers.Template.Random.Request);

App.Http.Controllers.Template.Edit.Readme.Response=class Response extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Template.Edit.Readme.Response"; }
    success;
}
App.Http.Controllers.Template.Edit.Readme.Response.Namespace=`AventusStore.App.Http.Controllers.Template.Edit.Readme`;
App.Http.Controllers.Template.Edit.Readme.Response.$schema={...(Aventus.Data?.$schema ?? {}), "success":"boolean"};
Aventus.Converter.register(App.Http.Controllers.Template.Edit.Readme.Response.Fullname, App.Http.Controllers.Template.Edit.Readme.Response);
__as1(_.App.Http.Controllers.Template.Edit.Readme, 'Response', App.Http.Controllers.Template.Edit.Readme.Response);

App.Http.Controllers.Template.Edit.Readme.Request=class Request {
    readme;
}
App.Http.Controllers.Template.Edit.Readme.Request.Namespace=`AventusStore.App.Http.Controllers.Template.Edit.Readme`;
__as1(_.App.Http.Controllers.Template.Edit.Readme, 'Request', App.Http.Controllers.Template.Edit.Readme.Request);

App.Http.Controllers.Template.Download.Request=class Request {
}
App.Http.Controllers.Template.Download.Request.Namespace=`AventusStore.App.Http.Controllers.Template.Download`;
__as1(_.App.Http.Controllers.Template.Download, 'Request', App.Http.Controllers.Template.Download.Request);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["NotFound"] = 404] = "NotFound";
})(App.Http.Controllers.Template.Download.ErrorEnum || (App.Http.Controllers.Template.Download.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Template.Download, 'ErrorEnum', App.Http.Controllers.Template.Download.ErrorEnum);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["NotFound"] = 404] = "NotFound";
})(App.Http.Controllers.Template.Details.ErrorEnum || (App.Http.Controllers.Template.Details.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Template.Details, 'ErrorEnum', App.Http.Controllers.Template.Details.ErrorEnum);

App.Http.Controllers.Template.TemplateDetailsResource=class TemplateDetailsResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Template.TemplateDetailsResource"; }
    name;
    description;
    version;
    downloads;
    fromName;
    fromImg = undefined;
    isUser;
    readme;
    tags = [];
    isOwner = false;
    repos = undefined;
    doc = undefined;
    isGlobal = undefined;
}
App.Http.Controllers.Template.TemplateDetailsResource.Namespace=`AventusStore.App.Http.Controllers.Template`;
App.Http.Controllers.Template.TemplateDetailsResource.$schema={...(Aventus.Data?.$schema ?? {}), "name":"string","description":"string","version":"string","downloads":"number","fromName":"string","fromImg":"string","isUser":"string","readme":"string","isOwner":"boolean","repos":"string","doc":"string","isGlobal":"string"};
Aventus.Converter.register(App.Http.Controllers.Template.TemplateDetailsResource.Fullname, App.Http.Controllers.Template.TemplateDetailsResource);
__as1(_.App.Http.Controllers.Template, 'TemplateDetailsResource', App.Http.Controllers.Template.TemplateDetailsResource);

App.Http.Controllers.Template.Delete.Response=class Response extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Template.Delete.Response"; }
    success;
}
App.Http.Controllers.Template.Delete.Response.Namespace=`AventusStore.App.Http.Controllers.Template.Delete`;
App.Http.Controllers.Template.Delete.Response.$schema={...(Aventus.Data?.$schema ?? {}), "success":"boolean"};
Aventus.Converter.register(App.Http.Controllers.Template.Delete.Response.Fullname, App.Http.Controllers.Template.Delete.Response);
__as1(_.App.Http.Controllers.Template.Delete, 'Response', App.Http.Controllers.Template.Delete.Response);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["AuthenticationError"] = 1] = "AuthenticationError";
    ErrorEnum[ErrorEnum["UserNotFound"] = 2] = "UserNotFound";
    ErrorEnum[ErrorEnum["OrganizationNotFound"] = 3] = "OrganizationNotFound";
    ErrorEnum[ErrorEnum["NameMissedMatch"] = 4] = "NameMissedMatch";
    ErrorEnum[ErrorEnum["VersionMissedMatch"] = 5] = "VersionMissedMatch";
    ErrorEnum[ErrorEnum["VersionBigger"] = 6] = "VersionBigger";
    ErrorEnum[ErrorEnum["Forbidden"] = 7] = "Forbidden";
})(App.Http.Controllers.Remote.Template.Publish.ErrorEnum || (App.Http.Controllers.Remote.Template.Publish.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Remote.Template.Publish, 'ErrorEnum', App.Http.Controllers.Remote.Template.Publish.ErrorEnum);

App.Http.Controllers.Remote.Template.Publish.Response=class Response extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Remote.Template.Publish.Response"; }
}
App.Http.Controllers.Remote.Template.Publish.Response.Namespace=`AventusStore.App.Http.Controllers.Remote.Template.Publish`;
App.Http.Controllers.Remote.Template.Publish.Response.$schema={...(Aventus.Data?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Remote.Template.Publish.Response.Fullname, App.Http.Controllers.Remote.Template.Publish.Response);
__as1(_.App.Http.Controllers.Remote.Template.Publish, 'Response', App.Http.Controllers.Remote.Template.Publish.Response);

App.Http.Controllers.Remote.Template.Publish.Request=class Request {
    tags;
    name;
    description = undefined;
    version;
    is_global;
    is_project;
    organization = undefined;
    templateFile;
    readMe = undefined;
    repository = undefined;
    documentation = undefined;
}
App.Http.Controllers.Remote.Template.Publish.Request.Namespace=`AventusStore.App.Http.Controllers.Remote.Template.Publish`;
__as1(_.App.Http.Controllers.Remote.Template.Publish, 'Request', App.Http.Controllers.Remote.Template.Publish.Request);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["AuthenticationError"] = 1] = "AuthenticationError";
    ErrorEnum[ErrorEnum["UserNotFound"] = 2] = "UserNotFound";
    ErrorEnum[ErrorEnum["OrganizationNotFound"] = 3] = "OrganizationNotFound";
    ErrorEnum[ErrorEnum["NameMissedMatch"] = 4] = "NameMissedMatch";
    ErrorEnum[ErrorEnum["VersionMissedMatch"] = 5] = "VersionMissedMatch";
    ErrorEnum[ErrorEnum["VersionBigger"] = 6] = "VersionBigger";
    ErrorEnum[ErrorEnum["Forbidden"] = 7] = "Forbidden";
})(App.Http.Controllers.Remote.Package.Publish.ErrorEnum || (App.Http.Controllers.Remote.Package.Publish.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Remote.Package.Publish, 'ErrorEnum', App.Http.Controllers.Remote.Package.Publish.ErrorEnum);

App.Http.Controllers.Remote.Package.Publish.Response=class Response extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Remote.Package.Publish.Response"; }
}
App.Http.Controllers.Remote.Package.Publish.Response.Namespace=`AventusStore.App.Http.Controllers.Remote.Package.Publish`;
App.Http.Controllers.Remote.Package.Publish.Response.$schema={...(Aventus.Data?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Remote.Package.Publish.Response.Fullname, App.Http.Controllers.Remote.Package.Publish.Response);
__as1(_.App.Http.Controllers.Remote.Package.Publish, 'Response', App.Http.Controllers.Remote.Package.Publish.Response);

App.Http.Controllers.Remote.Package.Publish.Request=class Request {
    tags;
    name;
    description = undefined;
    version;
    organization = undefined;
    packageFile;
    readMe = undefined;
    repository = undefined;
    documentation = undefined;
}
App.Http.Controllers.Remote.Package.Publish.Request.Namespace=`AventusStore.App.Http.Controllers.Remote.Package.Publish`;
__as1(_.App.Http.Controllers.Remote.Package.Publish, 'Request', App.Http.Controllers.Remote.Package.Publish.Request);

App.Http.Controllers.Remote.Auth.Logout.Controller=class Controller extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request() {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/remote/logout`, Aventus.HttpMethod.POST);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Remote.Auth.Logout.Controller.Namespace=`AventusStore.App.Http.Controllers.Remote.Auth.Logout`;
__as1(_.App.Http.Controllers.Remote.Auth.Logout, 'Controller', App.Http.Controllers.Remote.Auth.Logout.Controller);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["ValidationError"] = 422] = "ValidationError";
    ErrorEnum[ErrorEnum["ValidateEmailFirst"] = 302] = "ValidateEmailFirst";
})(App.Http.Controllers.Remote.Auth.Login.ErrorEnum || (App.Http.Controllers.Remote.Auth.Login.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Remote.Auth.Login, 'ErrorEnum', App.Http.Controllers.Remote.Auth.Login.ErrorEnum);

App.Http.Controllers.Remote.Auth.Login.Request=class Request {
    username;
    password;
    machineId;
    machineName;
}
App.Http.Controllers.Remote.Auth.Login.Request.Namespace=`AventusStore.App.Http.Controllers.Remote.Auth.Login`;
__as1(_.App.Http.Controllers.Remote.Auth.Login, 'Request', App.Http.Controllers.Remote.Auth.Login.Request);

App.Http.Controllers.Package.Search.Response=class Response {
    static get Fullname() { return "App.Http.Controllers.Package.Search.Response"; }
    name;
    description;
    version;
    downloads;
    fromName;
    isUser;
}
App.Http.Controllers.Package.Search.Response.Namespace=`AventusStore.App.Http.Controllers.Package.Search`;
App.Http.Controllers.Package.Search.Response.$schema={"name":"string","description":"string","version":"string","downloads":"number","fromName":"string","isUser":"string"};
Aventus.Converter.register(App.Http.Controllers.Package.Search.Response.Fullname, App.Http.Controllers.Package.Search.Response);
__as1(_.App.Http.Controllers.Package.Search, 'Response', App.Http.Controllers.Package.Search.Response);

(function (ErrorEnum) {
})(App.Http.Controllers.Package.Search.ErrorEnum || (App.Http.Controllers.Package.Search.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Package.Search, 'ErrorEnum', App.Http.Controllers.Package.Search.ErrorEnum);

App.Http.Controllers.Package.Search.Request=class Request {
    txt = undefined;
    limit;
    offset;
}
App.Http.Controllers.Package.Search.Request.Namespace=`AventusStore.App.Http.Controllers.Package.Search`;
__as1(_.App.Http.Controllers.Package.Search, 'Request', App.Http.Controllers.Package.Search.Request);

App.Http.Controllers.Package.Random.Request=class Request {
    number;
}
App.Http.Controllers.Package.Random.Request.Namespace=`AventusStore.App.Http.Controllers.Package.Random`;
__as1(_.App.Http.Controllers.Package.Random, 'Request', App.Http.Controllers.Package.Random.Request);

App.Http.Controllers.Package.Edit.Readme.Response=class Response extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Package.Edit.Readme.Response"; }
    success;
}
App.Http.Controllers.Package.Edit.Readme.Response.Namespace=`AventusStore.App.Http.Controllers.Package.Edit.Readme`;
App.Http.Controllers.Package.Edit.Readme.Response.$schema={...(Aventus.Data?.$schema ?? {}), "success":"boolean"};
Aventus.Converter.register(App.Http.Controllers.Package.Edit.Readme.Response.Fullname, App.Http.Controllers.Package.Edit.Readme.Response);
__as1(_.App.Http.Controllers.Package.Edit.Readme, 'Response', App.Http.Controllers.Package.Edit.Readme.Response);

App.Http.Controllers.Package.Edit.Readme.Request=class Request {
    readme;
}
App.Http.Controllers.Package.Edit.Readme.Request.Namespace=`AventusStore.App.Http.Controllers.Package.Edit.Readme`;
__as1(_.App.Http.Controllers.Package.Edit.Readme, 'Request', App.Http.Controllers.Package.Edit.Readme.Request);

App.Http.Controllers.Package.Download.Request=class Request {
}
App.Http.Controllers.Package.Download.Request.Namespace=`AventusStore.App.Http.Controllers.Package.Download`;
__as1(_.App.Http.Controllers.Package.Download, 'Request', App.Http.Controllers.Package.Download.Request);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["NotFound"] = 404] = "NotFound";
})(App.Http.Controllers.Package.Download.ErrorEnum || (App.Http.Controllers.Package.Download.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Package.Download, 'ErrorEnum', App.Http.Controllers.Package.Download.ErrorEnum);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["NotFound"] = 404] = "NotFound";
})(App.Http.Controllers.Package.Details.ErrorEnum || (App.Http.Controllers.Package.Details.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Package.Details, 'ErrorEnum', App.Http.Controllers.Package.Details.ErrorEnum);

App.Http.Controllers.Package.PackageDetailsResource=class PackageDetailsResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Package.PackageDetailsResource"; }
    name;
    description;
    version;
    downloads;
    fromName;
    fromImg = undefined;
    isUser;
    readme;
    tags = [];
    isOwner = false;
    repos = undefined;
    doc = undefined;
}
App.Http.Controllers.Package.PackageDetailsResource.Namespace=`AventusStore.App.Http.Controllers.Package`;
App.Http.Controllers.Package.PackageDetailsResource.$schema={...(Aventus.Data?.$schema ?? {}), "name":"string","description":"string","version":"string","downloads":"number","fromName":"string","fromImg":"string","isUser":"string","readme":"string","isOwner":"boolean","repos":"string","doc":"string"};
Aventus.Converter.register(App.Http.Controllers.Package.PackageDetailsResource.Fullname, App.Http.Controllers.Package.PackageDetailsResource);
__as1(_.App.Http.Controllers.Package, 'PackageDetailsResource', App.Http.Controllers.Package.PackageDetailsResource);

App.Http.Controllers.Package.Delete.Response=class Response extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Package.Delete.Response"; }
    success;
}
App.Http.Controllers.Package.Delete.Response.Namespace=`AventusStore.App.Http.Controllers.Package.Delete`;
App.Http.Controllers.Package.Delete.Response.$schema={...(Aventus.Data?.$schema ?? {}), "success":"boolean"};
Aventus.Converter.register(App.Http.Controllers.Package.Delete.Response.Fullname, App.Http.Controllers.Package.Delete.Response);
__as1(_.App.Http.Controllers.Package.Delete, 'Response', App.Http.Controllers.Package.Delete.Response);

App.Models.UserPicture=class UserPicture extends AventusPhp.AventusImage {
    static get Fullname() { return "App.Models.UserPicture"; }
}
App.Models.UserPicture.Namespace=`AventusStore.App.Models`;
App.Models.UserPicture.$schema={...(AventusPhp.AventusImage?.$schema ?? {}), };
Aventus.Converter.register(App.Models.UserPicture.Fullname, App.Models.UserPicture);
__as1(_.App.Models, 'UserPicture', App.Models.UserPicture);

App.Http.Controllers.Org.EditPicture.Request=class Request {
    file;
    name;
}
App.Http.Controllers.Org.EditPicture.Request.Namespace=`AventusStore.App.Http.Controllers.Org.EditPicture`;
__as1(_.App.Http.Controllers.Org.EditPicture, 'Request', App.Http.Controllers.Org.EditPicture.Request);

App.Http.Controllers.Org.EditBio.Request=class Request {
    bio = undefined;
    name;
}
App.Http.Controllers.Org.EditBio.Request.Namespace=`AventusStore.App.Http.Controllers.Org.EditBio`;
__as1(_.App.Http.Controllers.Org.EditBio, 'Request', App.Http.Controllers.Org.EditBio.Request);

App.Http.Controllers.Template.TemplateSimpleResource=class TemplateSimpleResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Template.TemplateSimpleResource"; }
    tags;
    name;
    description;
    version;
    downloads;
    fromName;
    fromImg = undefined;
    isUser;
    isGlobal = false;
}
App.Http.Controllers.Template.TemplateSimpleResource.Namespace=`AventusStore.App.Http.Controllers.Template`;
App.Http.Controllers.Template.TemplateSimpleResource.$schema={...(Aventus.Data?.$schema ?? {}), "tags":"string[]","name":"string","description":"string","version":"string","downloads":"number","fromName":"string","fromImg":"string","isUser":"string","isGlobal":"boolean"};
Aventus.Converter.register(App.Http.Controllers.Template.TemplateSimpleResource.Fullname, App.Http.Controllers.Template.TemplateSimpleResource);
__as1(_.App.Http.Controllers.Template, 'TemplateSimpleResource', App.Http.Controllers.Template.TemplateSimpleResource);

App.Http.Controllers.Org.Create.Response=class Response {
    static get Fullname() { return "App.Http.Controllers.Org.Create.Response"; }
}
App.Http.Controllers.Org.Create.Response.Namespace=`AventusStore.App.Http.Controllers.Org.Create`;
App.Http.Controllers.Org.Create.Response.$schema={};
Aventus.Converter.register(App.Http.Controllers.Org.Create.Response.Fullname, App.Http.Controllers.Org.Create.Response);
__as1(_.App.Http.Controllers.Org.Create, 'Response', App.Http.Controllers.Org.Create.Response);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["NamedUsed"] = 1] = "NamedUsed";
})(App.Http.Controllers.Org.Create.ErrorEnum || (App.Http.Controllers.Org.Create.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Org.Create, 'ErrorEnum', App.Http.Controllers.Org.Create.ErrorEnum);

App.Models.OrganizationPicture=class OrganizationPicture extends AventusPhp.AventusImage {
    static get Fullname() { return "App.Models.OrganizationPicture"; }
}
App.Models.OrganizationPicture.Namespace=`AventusStore.App.Models`;
App.Models.OrganizationPicture.$schema={...(AventusPhp.AventusImage?.$schema ?? {}), };
Aventus.Converter.register(App.Models.OrganizationPicture.Fullname, App.Models.OrganizationPicture);
__as1(_.App.Models, 'OrganizationPicture', App.Models.OrganizationPicture);

App.Http.Controllers.Package.PackageSimpleResource=class PackageSimpleResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Package.PackageSimpleResource"; }
    tags;
    name;
    description;
    version;
    downloads;
    fromName;
    fromImg = undefined;
    isUser;
}
App.Http.Controllers.Package.PackageSimpleResource.Namespace=`AventusStore.App.Http.Controllers.Package`;
App.Http.Controllers.Package.PackageSimpleResource.$schema={...(Aventus.Data?.$schema ?? {}), "tags":"string[]","name":"string","description":"string","version":"string","downloads":"number","fromName":"string","fromImg":"string","isUser":"string"};
Aventus.Converter.register(App.Http.Controllers.Package.PackageSimpleResource.Fullname, App.Http.Controllers.Package.PackageSimpleResource);
__as1(_.App.Http.Controllers.Package, 'PackageSimpleResource', App.Http.Controllers.Package.PackageSimpleResource);

App.Http.Controllers.User.Details.UserDetailsResponse=class UserDetailsResponse {
    static get Fullname() { return "App.Http.Controllers.User.Details.Response"; }
    packages;
    username;
    email;
    picture = undefined;
}
App.Http.Controllers.User.Details.UserDetailsResponse.Namespace=`AventusStore.App.Http.Controllers.User.Details`;
App.Http.Controllers.User.Details.UserDetailsResponse.$schema={"packages":"AventusStore.App.Http.Controllers.Package.PackageSimpleResource[]","username":"string","email":"string","picture":"AventusStore.App.Models.UserPicture"};
Aventus.Converter.register(App.Http.Controllers.User.Details.UserDetailsResponse.Fullname, App.Http.Controllers.User.Details.UserDetailsResponse);
__as1(_.App.Http.Controllers.User.Details, 'UserDetailsResponse', App.Http.Controllers.User.Details.UserDetailsResponse);

App.Http.Controllers.Org.Create.Request=class Request {
    name;
    bio = undefined;
    picture = undefined;
}
App.Http.Controllers.Org.Create.Request.Namespace=`AventusStore.App.Http.Controllers.Org.Create`;
__as1(_.App.Http.Controllers.Org.Create, 'Request', App.Http.Controllers.Org.Create.Request);

(function (ErrorEnum) {
})(App.Http.Controllers.Auth.Signup.ErrorEnum || (App.Http.Controllers.Auth.Signup.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Auth.Signup, 'ErrorEnum', App.Http.Controllers.Auth.Signup.ErrorEnum);

App.Http.Controllers.Auth.Signup.Request=class Request {
    username;
    email;
    password;
}
App.Http.Controllers.Auth.Signup.Request.Namespace=`AventusStore.App.Http.Controllers.Auth.Signup`;
__as1(_.App.Http.Controllers.Auth.Signup, 'Request', App.Http.Controllers.Auth.Signup.Request);

App.Http.Controllers.Auth.Logout.AuthLogoutController=class AuthLogoutController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request() {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/logout`, Aventus.HttpMethod.POST);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Auth.Logout.AuthLogoutController.Namespace=`AventusStore.App.Http.Controllers.Auth.Logout`;
__as1(_.App.Http.Controllers.Auth.Logout, 'AuthLogoutController', App.Http.Controllers.Auth.Logout.AuthLogoutController);

(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["ValidationError"] = 422] = "ValidationError";
    ErrorEnum[ErrorEnum["ValidateEmailFirst"] = 302] = "ValidateEmailFirst";
})(App.Http.Controllers.Auth.Login.ErrorEnum || (App.Http.Controllers.Auth.Login.ErrorEnum = {}));
__as1(_.App.Http.Controllers.Auth.Login, 'ErrorEnum', App.Http.Controllers.Auth.Login.ErrorEnum);

App.Http.Controllers.Auth.Login.Request=class Request {
    username;
    password;
}
App.Http.Controllers.Auth.Login.Request.Namespace=`AventusStore.App.Http.Controllers.Auth.Login`;
__as1(_.App.Http.Controllers.Auth.Login, 'Request', App.Http.Controllers.Auth.Login.Request);

(function (RoleEnum) {
    RoleEnum[RoleEnum["Admin"] = 1] = "Admin";
    RoleEnum[RoleEnum["Dev"] = 2] = "Dev";
})(App.Enums.RoleEnum || (App.Enums.RoleEnum = {}));
__as1(_.App.Enums, 'RoleEnum', App.Enums.RoleEnum);

App.Http.Controllers.Org.Role.Response=class Response extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Org.Role.Response"; }
    role = undefined;
}
App.Http.Controllers.Org.Role.Response.Namespace=`AventusStore.App.Http.Controllers.Org.Role`;
App.Http.Controllers.Org.Role.Response.$schema={...(Aventus.Data?.$schema ?? {}), "role":"AventusStore.App.Enums.RoleEnum"};
Aventus.Converter.register(App.Http.Controllers.Org.Role.Response.Fullname, App.Http.Controllers.Org.Role.Response);
__as1(_.App.Http.Controllers.Org.Role, 'Response', App.Http.Controllers.Org.Role.Response);

App.Http.Controllers.Auth.Login.AuthLoginController=class AuthLoginController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/login`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Auth.Login.AuthLoginController.Namespace=`AventusStore.App.Http.Controllers.Auth.Login`;
__as1(_.App.Http.Controllers.Auth.Login, 'AuthLoginController', App.Http.Controllers.Auth.Login.AuthLoginController);

App.Http.Controllers.Auth.Login.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Auth.Login.Error"; }
}
App.Http.Controllers.Auth.Login.Error.Namespace=`AventusStore.App.Http.Controllers.Auth.Login`;
App.Http.Controllers.Auth.Login.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Auth.Login.Error.Fullname, App.Http.Controllers.Auth.Login.Error);
__as1(_.App.Http.Controllers.Auth.Login, 'Error', App.Http.Controllers.Auth.Login.Error);

App.Http.Controllers.Auth.Signup.AuthSignupController=class AuthSignupController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/signup`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Auth.Signup.AuthSignupController.Namespace=`AventusStore.App.Http.Controllers.Auth.Signup`;
__as1(_.App.Http.Controllers.Auth.Signup, 'AuthSignupController', App.Http.Controllers.Auth.Signup.AuthSignupController);

App.Http.Controllers.Auth.Signup.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Auth.Signup.Error"; }
}
App.Http.Controllers.Auth.Signup.Error.Namespace=`AventusStore.App.Http.Controllers.Auth.Signup`;
App.Http.Controllers.Auth.Signup.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Auth.Signup.Error.Fullname, App.Http.Controllers.Auth.Signup.Error);
__as1(_.App.Http.Controllers.Auth.Signup, 'Error', App.Http.Controllers.Auth.Signup.Error);

App.Http.Controllers.Org.OrgUserResource=class OrgUserResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Org.OrgUserResource"; }
    packages;
    name;
    role;
    bio = undefined;
    picture = undefined;
}
App.Http.Controllers.Org.OrgUserResource.Namespace=`AventusStore.App.Http.Controllers.Org`;
App.Http.Controllers.Org.OrgUserResource.$schema={...(Aventus.Data?.$schema ?? {}), "packages":"AventusStore.App.Http.Controllers.Package.PackageSimpleResource[]","name":"string","role":"string","bio":"string","picture":"AventusStore.App.Models.OrganizationPicture"};
Aventus.Converter.register(App.Http.Controllers.Org.OrgUserResource.Fullname, App.Http.Controllers.Org.OrgUserResource);
__as1(_.App.Http.Controllers.Org, 'OrgUserResource', App.Http.Controllers.Org.OrgUserResource);

App.Http.Controllers.User.UserDetailsResource=class UserDetailsResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.User.UserDetailsResource"; }
    packages;
    templates;
    organizations;
    username;
    email;
    bio = undefined;
    picture = undefined;
    created_date;
}
App.Http.Controllers.User.UserDetailsResource.Namespace=`AventusStore.App.Http.Controllers.User`;
App.Http.Controllers.User.UserDetailsResource.$schema={...(Aventus.Data?.$schema ?? {}), "packages":"AventusStore.App.Http.Controllers.Package.PackageSimpleResource[]","templates":"AventusStore.App.Http.Controllers.Template.TemplateSimpleResource[]","organizations":"AventusStore.App.Http.Controllers.Org.OrgUserResource[]","username":"string","email":"string","bio":"string","picture":"AventusStore.App.Models.UserPicture","created_date":"Date"};
Aventus.Converter.register(App.Http.Controllers.User.UserDetailsResource.Fullname, App.Http.Controllers.User.UserDetailsResource);
__as1(_.App.Http.Controllers.User, 'UserDetailsResource', App.Http.Controllers.User.UserDetailsResource);

App.Http.Controllers.User.Details.UserDetailsController=class UserDetailsController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/details/${name}`, Aventus.HttpMethod.GET);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.Details.UserDetailsController.Namespace=`AventusStore.App.Http.Controllers.User.Details`;
__as1(_.App.Http.Controllers.User.Details, 'UserDetailsController', App.Http.Controllers.User.Details.UserDetailsController);

App.Http.Controllers.Org.Create.OrgCreateController=class OrgCreateController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/org/create`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Org.Create.OrgCreateController.Namespace=`AventusStore.App.Http.Controllers.Org.Create`;
__as1(_.App.Http.Controllers.Org.Create, 'OrgCreateController', App.Http.Controllers.Org.Create.OrgCreateController);

App.Http.Controllers.Org.Create.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Org.Create.Error"; }
}
App.Http.Controllers.Org.Create.Error.Namespace=`AventusStore.App.Http.Controllers.Org.Create`;
App.Http.Controllers.Org.Create.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Org.Create.Error.Fullname, App.Http.Controllers.Org.Create.Error);
__as1(_.App.Http.Controllers.Org.Create, 'Error', App.Http.Controllers.Org.Create.Error);

App.Http.Controllers.Org.OrgDetailsResource=class OrgDetailsResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Org.OrgDetailsResource"; }
    packages;
    templates;
    name;
    bio = undefined;
    picture = undefined;
}
App.Http.Controllers.Org.OrgDetailsResource.Namespace=`AventusStore.App.Http.Controllers.Org`;
App.Http.Controllers.Org.OrgDetailsResource.$schema={...(Aventus.Data?.$schema ?? {}), "packages":"AventusStore.App.Http.Controllers.Package.PackageSimpleResource[]","templates":"AventusStore.App.Http.Controllers.Template.TemplateSimpleResource[]","name":"string","bio":"string","picture":"AventusStore.App.Models.OrganizationPicture"};
Aventus.Converter.register(App.Http.Controllers.Org.OrgDetailsResource.Fullname, App.Http.Controllers.Org.OrgDetailsResource);
__as1(_.App.Http.Controllers.Org, 'OrgDetailsResource', App.Http.Controllers.Org.OrgDetailsResource);

App.Http.Controllers.Org.Details.OrgDetailsController=class OrgDetailsController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/orgs/details/${name}`, Aventus.HttpMethod.GET);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Org.Details.OrgDetailsController.Namespace=`AventusStore.App.Http.Controllers.Org.Details`;
__as1(_.App.Http.Controllers.Org.Details, 'OrgDetailsController', App.Http.Controllers.Org.Details.OrgDetailsController);

App.Http.Controllers.Org.EditBio.OrgEditBioController=class OrgEditBioController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/org/edit_bio`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Org.EditBio.OrgEditBioController.Namespace=`AventusStore.App.Http.Controllers.Org.EditBio`;
__as1(_.App.Http.Controllers.Org.EditBio, 'OrgEditBioController', App.Http.Controllers.Org.EditBio.OrgEditBioController);

App.Http.Controllers.Org.EditPicture.OrgEditPictureController=class OrgEditPictureController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/org/edit_picture`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Org.EditPicture.OrgEditPictureController.Namespace=`AventusStore.App.Http.Controllers.Org.EditPicture`;
__as1(_.App.Http.Controllers.Org.EditPicture, 'OrgEditPictureController', App.Http.Controllers.Org.EditPicture.OrgEditPictureController);

App.Http.Controllers.Org.OrgSimpleResource=class OrgSimpleResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Controllers.Org.OrgSimpleResource"; }
    packages;
    name;
    bio = undefined;
    picture = undefined;
}
App.Http.Controllers.Org.OrgSimpleResource.Namespace=`AventusStore.App.Http.Controllers.Org`;
App.Http.Controllers.Org.OrgSimpleResource.$schema={...(Aventus.Data?.$schema ?? {}), "packages":"AventusStore.App.Http.Controllers.Package.PackageSimpleResource[]","name":"string","bio":"string","picture":"AventusStore.App.Models.UserPicture"};
Aventus.Converter.register(App.Http.Controllers.Org.OrgSimpleResource.Fullname, App.Http.Controllers.Org.OrgSimpleResource);
__as1(_.App.Http.Controllers.Org, 'OrgSimpleResource', App.Http.Controllers.Org.OrgSimpleResource);

App.Http.Controllers.Org.Role.OrgRoleController=class OrgRoleController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/orgs/role/${name}`, Aventus.HttpMethod.GET);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Org.Role.OrgRoleController.Namespace=`AventusStore.App.Http.Controllers.Org.Role`;
__as1(_.App.Http.Controllers.Org.Role, 'OrgRoleController', App.Http.Controllers.Org.Role.OrgRoleController);

App.Http.Controllers.Package.Delete.PackageDeleteController=class PackageDeleteController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/package/${name}`, Aventus.HttpMethod.DELETE);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Package.Delete.PackageDeleteController.Namespace=`AventusStore.App.Http.Controllers.Package.Delete`;
__as1(_.App.Http.Controllers.Package.Delete, 'PackageDeleteController', App.Http.Controllers.Package.Delete.PackageDeleteController);

App.Http.Controllers.Package.Details.PackageDetailsController=class PackageDetailsController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/package/details/${name}`, Aventus.HttpMethod.GET);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Package.Details.PackageDetailsController.Namespace=`AventusStore.App.Http.Controllers.Package.Details`;
__as1(_.App.Http.Controllers.Package.Details, 'PackageDetailsController', App.Http.Controllers.Package.Details.PackageDetailsController);

App.Http.Controllers.Package.Details.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Package.Details.Error"; }
}
App.Http.Controllers.Package.Details.Error.Namespace=`AventusStore.App.Http.Controllers.Package.Details`;
App.Http.Controllers.Package.Details.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Package.Details.Error.Fullname, App.Http.Controllers.Package.Details.Error);
__as1(_.App.Http.Controllers.Package.Details, 'Error', App.Http.Controllers.Package.Details.Error);

App.Http.Controllers.Package.Download.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Package.Download.Error"; }
}
App.Http.Controllers.Package.Download.Error.Namespace=`AventusStore.App.Http.Controllers.Package.Download`;
App.Http.Controllers.Package.Download.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Package.Download.Error.Fullname, App.Http.Controllers.Package.Download.Error);
__as1(_.App.Http.Controllers.Package.Download, 'Error', App.Http.Controllers.Package.Download.Error);

App.Http.Controllers.Package.Edit.Readme.PackageEditReadmeController=class PackageEditReadmeController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name, body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/package/${name}/readme`, Aventus.HttpMethod.PUT);
        request.enableMethodSpoofing();
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Package.Edit.Readme.PackageEditReadmeController.Namespace=`AventusStore.App.Http.Controllers.Package.Edit.Readme`;
__as1(_.App.Http.Controllers.Package.Edit.Readme, 'PackageEditReadmeController', App.Http.Controllers.Package.Edit.Readme.PackageEditReadmeController);

App.Http.Controllers.Package.Random.PackageRandomController=class PackageRandomController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/package/random`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Package.Random.PackageRandomController.Namespace=`AventusStore.App.Http.Controllers.Package.Random`;
__as1(_.App.Http.Controllers.Package.Random, 'PackageRandomController', App.Http.Controllers.Package.Random.PackageRandomController);

App.Http.Controllers.Package.Search.PackageSearchController=class PackageSearchController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/package/search`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Package.Search.PackageSearchController.Namespace=`AventusStore.App.Http.Controllers.Package.Search`;
__as1(_.App.Http.Controllers.Package.Search, 'PackageSearchController', App.Http.Controllers.Package.Search.PackageSearchController);

App.Http.Controllers.Package.Search.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Package.Search.Error"; }
}
App.Http.Controllers.Package.Search.Error.Namespace=`AventusStore.App.Http.Controllers.Package.Search`;
App.Http.Controllers.Package.Search.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Package.Search.Error.Fullname, App.Http.Controllers.Package.Search.Error);
__as1(_.App.Http.Controllers.Package.Search, 'Error', App.Http.Controllers.Package.Search.Error);

App.Http.Controllers.Remote.Auth.Login.Controller=class Controller extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/remote/login`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Remote.Auth.Login.Controller.Namespace=`AventusStore.App.Http.Controllers.Remote.Auth.Login`;
__as1(_.App.Http.Controllers.Remote.Auth.Login, 'Controller', App.Http.Controllers.Remote.Auth.Login.Controller);

App.Http.Controllers.Remote.Auth.Login.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Remote.Auth.Login.Error"; }
}
App.Http.Controllers.Remote.Auth.Login.Error.Namespace=`AventusStore.App.Http.Controllers.Remote.Auth.Login`;
App.Http.Controllers.Remote.Auth.Login.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Remote.Auth.Login.Error.Fullname, App.Http.Controllers.Remote.Auth.Login.Error);
__as1(_.App.Http.Controllers.Remote.Auth.Login, 'Error', App.Http.Controllers.Remote.Auth.Login.Error);

App.Http.Controllers.Remote.Package.Publish.Controller=class Controller extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/remote/package/publish`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Remote.Package.Publish.Controller.Namespace=`AventusStore.App.Http.Controllers.Remote.Package.Publish`;
__as1(_.App.Http.Controllers.Remote.Package.Publish, 'Controller', App.Http.Controllers.Remote.Package.Publish.Controller);

App.Http.Controllers.Remote.Package.Publish.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Remote.Package.Publish.Error"; }
}
App.Http.Controllers.Remote.Package.Publish.Error.Namespace=`AventusStore.App.Http.Controllers.Remote.Package.Publish`;
App.Http.Controllers.Remote.Package.Publish.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Remote.Package.Publish.Error.Fullname, App.Http.Controllers.Remote.Package.Publish.Error);
__as1(_.App.Http.Controllers.Remote.Package.Publish, 'Error', App.Http.Controllers.Remote.Package.Publish.Error);

App.Http.Controllers.Remote.Template.Publish.RemoteTemplatePublishController=class RemoteTemplatePublishController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/remote/template/publish`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Remote.Template.Publish.RemoteTemplatePublishController.Namespace=`AventusStore.App.Http.Controllers.Remote.Template.Publish`;
__as1(_.App.Http.Controllers.Remote.Template.Publish, 'RemoteTemplatePublishController', App.Http.Controllers.Remote.Template.Publish.RemoteTemplatePublishController);

App.Http.Controllers.Remote.Template.Publish.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Remote.Template.Publish.Error"; }
}
App.Http.Controllers.Remote.Template.Publish.Error.Namespace=`AventusStore.App.Http.Controllers.Remote.Template.Publish`;
App.Http.Controllers.Remote.Template.Publish.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Remote.Template.Publish.Error.Fullname, App.Http.Controllers.Remote.Template.Publish.Error);
__as1(_.App.Http.Controllers.Remote.Template.Publish, 'Error', App.Http.Controllers.Remote.Template.Publish.Error);

App.Http.Controllers.Template.Delete.TemplateDeleteController=class TemplateDeleteController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/${name}`, Aventus.HttpMethod.DELETE);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Delete.TemplateDeleteController.Namespace=`AventusStore.App.Http.Controllers.Template.Delete`;
__as1(_.App.Http.Controllers.Template.Delete, 'TemplateDeleteController', App.Http.Controllers.Template.Delete.TemplateDeleteController);

App.Http.Controllers.Template.Details.TemplateDetailsController=class TemplateDetailsController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/details/${name}`, Aventus.HttpMethod.GET);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Details.TemplateDetailsController.Namespace=`AventusStore.App.Http.Controllers.Template.Details`;
__as1(_.App.Http.Controllers.Template.Details, 'TemplateDetailsController', App.Http.Controllers.Template.Details.TemplateDetailsController);

App.Http.Controllers.Template.Details.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Template.Details.Error"; }
}
App.Http.Controllers.Template.Details.Error.Namespace=`AventusStore.App.Http.Controllers.Template.Details`;
App.Http.Controllers.Template.Details.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Template.Details.Error.Fullname, App.Http.Controllers.Template.Details.Error);
__as1(_.App.Http.Controllers.Template.Details, 'Error', App.Http.Controllers.Template.Details.Error);

App.Http.Controllers.Template.Download.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Template.Download.Error"; }
}
App.Http.Controllers.Template.Download.Error.Namespace=`AventusStore.App.Http.Controllers.Template.Download`;
App.Http.Controllers.Template.Download.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Template.Download.Error.Fullname, App.Http.Controllers.Template.Download.Error);
__as1(_.App.Http.Controllers.Template.Download, 'Error', App.Http.Controllers.Template.Download.Error);

App.Http.Controllers.Template.Edit.Readme.TemplateEditReadmeController=class TemplateEditReadmeController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name, body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/${name}/readme`, Aventus.HttpMethod.PUT);
        request.enableMethodSpoofing();
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Edit.Readme.TemplateEditReadmeController.Namespace=`AventusStore.App.Http.Controllers.Template.Edit.Readme`;
__as1(_.App.Http.Controllers.Template.Edit.Readme, 'TemplateEditReadmeController', App.Http.Controllers.Template.Edit.Readme.TemplateEditReadmeController);

App.Http.Controllers.Template.Random.TemplateRandomController=class TemplateRandomController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/random`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Random.TemplateRandomController.Namespace=`AventusStore.App.Http.Controllers.Template.Random`;
__as1(_.App.Http.Controllers.Template.Random, 'TemplateRandomController', App.Http.Controllers.Template.Random.TemplateRandomController);

App.Http.Controllers.Template.Search.TemplateSearchController=class TemplateSearchController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/search`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Search.TemplateSearchController.Namespace=`AventusStore.App.Http.Controllers.Template.Search`;
__as1(_.App.Http.Controllers.Template.Search, 'TemplateSearchController', App.Http.Controllers.Template.Search.TemplateSearchController);

App.Http.Controllers.Template.Search.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Template.Search.Error"; }
}
App.Http.Controllers.Template.Search.Error.Namespace=`AventusStore.App.Http.Controllers.Template.Search`;
App.Http.Controllers.Template.Search.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Template.Search.Error.Fullname, App.Http.Controllers.Template.Search.Error);
__as1(_.App.Http.Controllers.Template.Search, 'Error', App.Http.Controllers.Template.Search.Error);

App.Http.Controllers.User.Current.UserCurrentController=class UserCurrentController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request() {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/current`, Aventus.HttpMethod.GET);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.Current.UserCurrentController.Namespace=`AventusStore.App.Http.Controllers.User.Current`;
__as1(_.App.Http.Controllers.User.Current, 'UserCurrentController', App.Http.Controllers.User.Current.UserCurrentController);

App.Http.Controllers.User.EditBio.UserEditBioController=class UserEditBioController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/edit_bio`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.EditBio.UserEditBioController.Namespace=`AventusStore.App.Http.Controllers.User.EditBio`;
__as1(_.App.Http.Controllers.User.EditBio, 'UserEditBioController', App.Http.Controllers.User.EditBio.UserEditBioController);

App.Http.Controllers.User.EditEmail.UserEditEmailController=class UserEditEmailController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/edit_email`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.EditEmail.UserEditEmailController.Namespace=`AventusStore.App.Http.Controllers.User.EditEmail`;
__as1(_.App.Http.Controllers.User.EditEmail, 'UserEditEmailController', App.Http.Controllers.User.EditEmail.UserEditEmailController);

App.Http.Controllers.User.EditEmail.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.User.EditEmail.Error"; }
}
App.Http.Controllers.User.EditEmail.Error.Namespace=`AventusStore.App.Http.Controllers.User.EditEmail`;
App.Http.Controllers.User.EditEmail.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.User.EditEmail.Error.Fullname, App.Http.Controllers.User.EditEmail.Error);
__as1(_.App.Http.Controllers.User.EditEmail, 'Error', App.Http.Controllers.User.EditEmail.Error);

App.Http.Controllers.User.EditPicture.UserEditPictureController=class UserEditPictureController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/edit_picture`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.EditPicture.UserEditPictureController.Namespace=`AventusStore.App.Http.Controllers.User.EditPicture`;
__as1(_.App.Http.Controllers.User.EditPicture, 'UserEditPictureController', App.Http.Controllers.User.EditPicture.UserEditPictureController);

App.Models.OrganizationUser=class OrganizationUser extends Aventus.Data {
    static get Fullname() { return "App.Models.OrganizationUser"; }
    id;
    user_id;
    user;
    organization_id;
    organization;
    role_id;
    role;
}
App.Models.OrganizationUser.Namespace=`AventusStore.App.Models`;
App.Models.OrganizationUser.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","user_id":"number","user":"AventusStore.App.Models.User","organization_id":"number","organization":"AventusStore.App.Models.Organization","role_id":"number","role":"AventusStore.App.Models.Role"};
Aventus.Converter.register(App.Models.OrganizationUser.Fullname, App.Models.OrganizationUser);
__as1(_.App.Models, 'OrganizationUser', App.Models.OrganizationUser);

App.Models.TemplateTag=class TemplateTag extends Aventus.Data {
    static get Fullname() { return "App.Models.TemplateTag"; }
    template_id;
    tag_id;
    tag;
    template;
}
App.Models.TemplateTag.Namespace=`AventusStore.App.Models`;
App.Models.TemplateTag.$schema={...(Aventus.Data?.$schema ?? {}), "template_id":"number","tag_id":"number","tag":"AventusStore.App.Models.Tag","template":"AventusStore.App.Models.Template"};
Aventus.Converter.register(App.Models.TemplateTag.Fullname, App.Models.TemplateTag);
__as1(_.App.Models, 'TemplateTag', App.Models.TemplateTag);

App.Models.Template=class Template extends Aventus.Data {
    static get Fullname() { return "App.Models.Template"; }
    id;
    name;
    description;
    readme;
    version;
    repos = undefined;
    doc = undefined;
    downloads;
    is_global;
    is_project;
    user_id = undefined;
    user = undefined;
    organization_id = undefined;
    organization = undefined;
    release_date;
    tags;
}
App.Models.Template.Namespace=`AventusStore.App.Models`;
App.Models.Template.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","name":"string","description":"string","readme":"string","version":"string","repos":"string","doc":"string","downloads":"number","is_global":"boolean","is_project":"boolean","user_id":"number","user":"AventusStore.App.Models.User","organization_id":"number","organization":"AventusStore.App.Models.Organization","release_date":"Date","tags":"AventusStore.App.Models.TemplateTag[]"};
Aventus.Converter.register(App.Models.Template.Fullname, App.Models.Template);
__as1(_.App.Models, 'Template', App.Models.Template);

App.Models.TemplateDownload=class TemplateDownload extends Aventus.Data {
    static get Fullname() { return "App.Models.TemplateDownload"; }
    template_id;
    version;
    date;
    downloads;
    template;
}
App.Models.TemplateDownload.Namespace=`AventusStore.App.Models`;
App.Models.TemplateDownload.$schema={...(Aventus.Data?.$schema ?? {}), "template_id":"number","version":"string","date":"Date","downloads":"number","template":"AventusStore.App.Models.Template"};
Aventus.Converter.register(App.Models.TemplateDownload.Fullname, App.Models.TemplateDownload);
__as1(_.App.Models, 'TemplateDownload', App.Models.TemplateDownload);

App.Models.Organization=class Organization extends Aventus.Data {
    static get Fullname() { return "App.Models.Organization"; }
    id;
    name;
    bio = undefined;
    picture = undefined;
    users;
    packages;
    templates;
}
App.Models.Organization.Namespace=`AventusStore.App.Models`;
App.Models.Organization.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","name":"string","bio":"string","picture":"AventusStore.App.Models.OrganizationPicture","users":"AventusStore.App.Models.OrganizationUser[]","packages":"AventusStore.App.Models.Package[]","templates":"AventusStore.App.Models.Template[]"};
Aventus.Converter.register(App.Models.Organization.Fullname, App.Models.Organization);
__as1(_.App.Models, 'Organization', App.Models.Organization);

App.Models.Package=class Package extends Aventus.Data {
    static get Fullname() { return "App.Models.Package"; }
    id;
    name;
    description;
    readme;
    version;
    repos = undefined;
    doc = undefined;
    downloads;
    user_id = undefined;
    user = undefined;
    organization_id = undefined;
    organization = undefined;
    release_date;
    tags;
}
App.Models.Package.Namespace=`AventusStore.App.Models`;
App.Models.Package.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","name":"string","description":"string","readme":"string","version":"string","repos":"string","doc":"string","downloads":"number","user_id":"number","user":"AventusStore.App.Models.User","organization_id":"number","organization":"AventusStore.App.Models.Organization","release_date":"Date","tags":"AventusStore.App.Models.PackageTag[]"};
Aventus.Converter.register(App.Models.Package.Fullname, App.Models.Package);
__as1(_.App.Models, 'Package', App.Models.Package);

App.Models.PackageDownload=class PackageDownload extends Aventus.Data {
    static get Fullname() { return "App.Models.PackageDownload"; }
    package_id;
    version;
    date;
    downloads;
    package;
}
App.Models.PackageDownload.Namespace=`AventusStore.App.Models`;
App.Models.PackageDownload.$schema={...(Aventus.Data?.$schema ?? {}), "package_id":"number","version":"string","date":"Date","downloads":"number","package":"AventusStore.App.Models.Package"};
Aventus.Converter.register(App.Models.PackageDownload.Fullname, App.Models.PackageDownload);
__as1(_.App.Models, 'PackageDownload', App.Models.PackageDownload);

App.Models.User=class User extends Aventus.Data {
    static get Fullname() { return "App.Models.User"; }
    id;
    username;
    email;
    bio = undefined;
    password;
    verified;
    picture = undefined;
    token_action;
    created_date;
    packages;
    templates;
    static _current = null;
    static _current_id = null;
}
App.Models.User.Namespace=`AventusStore.App.Models`;
App.Models.User.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","username":"string","email":"string","bio":"string","password":"string","verified":"boolean","picture":"AventusStore.App.Models.UserPicture","token_action":"string","created_date":"Date","packages":"AventusStore.App.Models.Package[]","templates":"AventusStore.App.Models.Template[]"};
Aventus.Converter.register(App.Models.User.Fullname, App.Models.User);
__as1(_.App.Models, 'User', App.Models.User);

const Header = class Header extends Aventus.WebComponent {
    get 'is_menu_open'() { return this.getBoolAttr('is_menu_open') }
    set 'is_menu_open'(val) { this.setBoolAttr('is_menu_open', val) }
get 'open_menu_mobile'() { return this.getBoolAttr('open_menu_mobile') }
    set 'open_menu_mobile'(val) { this.setBoolAttr('open_menu_mobile', val) }
get 'is_ready'() { return this.getBoolAttr('is_ready') }
    set 'is_ready'(val) { this.setBoolAttr('is_ready', val) }
    get 'user'() {
						return this.__watch["user"];
					}
					set 'user'(val) {
						this.__watch["user"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("user");
    super.__registerWatchesActions();
}
    static __style = `:host{background-color:var(--header-bg);border-bottom:1px solid var(--header-color-border);opacity:0;position:relative;visibility:hidden;width:100%;z-index:50}:host .header-container{align-items:center;display:flex;height:4rem;justify-content:space-between;margin:0 auto;max-width:1280px;padding:0 2rem}:host .logo{align-items:center;display:flex;gap:.5rem;text-decoration:none}:host .logo .logo-icon{align-items:center;color:var(--color-accent);display:flex;font-size:2rem;height:2rem;justify-content:center;width:2rem}:host .logo .logo-text{color:var(--color-white);font-size:1.25rem;font-weight:bold}:host .nav-links{display:flex;gap:1.5rem}:host .nav-links .nav-link{align-items:center;color:var(--color-light);display:flex;font-size:.875rem;gap:1rem;text-decoration:none;transition:color .2s ease}:host .nav-links .nav-link mi-icon{display:none}:host .nav-links .nav-link:hover{color:var(--color-white)}:host .user-actions{align-items:center;display:flex;gap:1rem}:host .user-actions .user-menu-wrapper{position:relative}:host .user-actions .user-menu-wrapper .user-button{align-items:center;background:none;border:none;border-radius:9999px;color:var(--color-light);cursor:pointer;display:flex;gap:.5rem;outline:none}:host .user-actions .user-menu-wrapper .user-button .user-avatar{border-radius:9999px;height:2.25rem;letter-spacing:0;width:2.25rem}:host .user-actions .user-menu-wrapper .user-button mi-icon{height:1rem;transition:transform .2s ease;width:1rem}:host .user-actions .user-menu-wrapper .dropdown-menu{background-color:#1e293b;border-radius:.375rem;box-shadow:0 4px 12px rgba(0,0,0,.3);display:none;margin-top:.5rem;overflow:hidden;padding:.25rem 0;position:absolute;right:0;width:12rem;z-index:10}:host .user-actions .user-menu-wrapper .dropdown-menu .dropdown-header{border-bottom:1px solid #334155;color:var(--color-light);font-size:.875rem;padding:.5rem 1rem;width:100%}:host .user-actions .user-menu-wrapper .dropdown-menu .dropdown-header .username{color:var(--color-white);font-weight:500;font-weight:bold;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}:host .user-actions .user-menu-wrapper .dropdown-menu .dropdown-item{background:none;border:none;color:var(--color-light);cursor:pointer;display:block;font-size:.875rem;padding:.5rem 1rem;text-align:left;text-decoration:none;width:100%}:host .user-actions .user-menu-wrapper .dropdown-menu .dropdown-item:hover{background-color:var(--hover-dark)}:host .user-actions .auth-links{display:flex;gap:.5rem}:host .user-actions .mobile-menu{background:none;border:none;cursor:pointer;display:none}:host .user-actions .mobile-menu .menu-icon{align-items:center;color:var(--color-white);display:flex;font-size:1.5rem;height:1.5rem;justify-content:center;width:1.5rem}:host .nav-hider{display:none;inset:0;position:fixed;z-index:3}:host .sidenav{background-color:var(--header-bg);border-left:1px solid var(--header-color-border);display:none;flex-direction:column;height:100vh;min-height:0;position:absolute;right:-300px;top:0;transition:right .3s ease-in-out;width:300px;z-index:5}:host .sidenav .connected{align-items:center;display:flex;gap:1rem;padding-left:1.5rem;padding-top:1rem}:host .sidenav .connected .user-avatar{border-radius:9999px;height:2.25rem;letter-spacing:0;width:2.25rem}:host .sidenav .links{display:flex;flex-direction:column;flex-grow:1;gap:.25rem;margin-top:4rem}:host .sidenav .links .link{align-items:center;display:flex;gap:1rem;padding:.5rem 1.5rem}:host .sidenav .links .link mi-icon{display:inline-block}:host .sidenav .connected~.links{margin-top:1.5rem}:host .sidenav .close{color:var(--color-white);position:absolute;right:1rem;top:1rem}:host .sidenav .auth-links{align-items:center;display:flex;gap:1rem;justify-content:center;margin-bottom:1rem;width:100%}:host([is_ready]){opacity:1;visibility:visible}:host([is_menu_open]) .user-actions .user-menu-wrapper .dropdown-menu{display:block}@media(max-width: 767px){:host .sidenav{display:flex}:host .nav-links{display:none}:host .user-actions .auth-links{display:none}:host .user-actions .user-menu-wrapper{display:none}:host .user-actions .mobile-menu{display:block}:host([open_menu_mobile]) .sidenav{right:0px}:host([open_menu_mobile]) .nav-hider{display:block}}`;
    __getStatic() {
        return Header;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Header.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="header-container">
    <av-link to="/" class="logo">
        <mi-icon icon="code" class="logo-icon"></mi-icon>
        <span class="logo-text">AventusJs</span>
    </av-link>
    <nav class="nav-links">
        <av-link to="/" class="nav-link">
            <span>Home</span>
        </av-link>
        <av-link to="/packages" class="nav-link">
            <span>Packages</span>
        </av-link>
        <av-link to="/templates" class="nav-link">
            <span>Templates</span>
        </av-link>
    </nav>
    <div class="user-actions">
        <template _id="header_0"></template>
        <button class="mobile-menu" _id="header_7">
            <mi-icon icon="menu" class="menu-icon"></mi-icon>
        </button>
    </div>
    <div class="sidenav">
        <mi-icon icon="close" class="close" _id="header_8"></mi-icon>
         <template _id="header_9"></template>
        <div class="links">
            <av-link to="/" class="link">
                <mi-icon icon="home"></mi-icon>
                <span>Home</span>
            </av-link>
            <av-link to="/packages" class="link">
                <mi-icon icon="package_2"></mi-icon>
                <span>Packages</span>
            </av-link>
            <av-link to="/templates" class="link">
                <mi-icon icon="responsive_layout"></mi-icon>
                <span>Templates</span>
            </av-link>
            <template _id="header_12"></template>
        </div>
        <template _id="header_14"></template>
    </div>
</div><div class="nav-hider" _id="header_15"></div>` }
    });
}
    get menuEl () { return this.shadowRoot.querySelector('[_id="header_1"]'); }
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "pressEvents": [
    {
      "id": "header_7",
      "onPress": (e, pressInstance, c) => { c.comp.openMobileNav(e, pressInstance); }
    },
    {
      "id": "header_8",
      "onPress": (e, pressInstance, c) => { c.comp.closeMobileNav(e, pressInstance); }
    },
    {
      "id": "header_15",
      "onPress": (e, pressInstance, c) => { c.comp.closeMobileNav(e, pressInstance); }
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
            <div class="user-menu-wrapper" tabindex="-1" _id="header_1">
                <button class="user-button" _id="header_2">
                    <as-user-img class="user-avatar" _id="header_3"></as-user-img>
                    <mi-icon icon="keyboard_arrow_down"></mi-icon>
                </button>
                <div class="dropdown-menu">
                    <div class="dropdown-header">
                        <div>Signed in as</div>
                        <div class="username" _id="header_4"></div>
                    </div>
                    <av-link class="dropdown-item" to="/profile" _id="header_5">
                        My Profile
                    </av-link>
                    <button class="dropdown-item" _id="header_6">
                        Logout
                    </button>
                </div>
            </div>
        `);
templ0.setActions({
  "content": {
    "header_4°@HTML": {
      "fct": (c) => `${c.print(c.comp.__d51db0f5204592e74b573aca2e0ef5fbmethod5())}`
    }
  },
  "injection": [
    {
      "id": "header_3",
      "injectionName": "user",
      "inject": (c) => c.comp.__d51db0f5204592e74b573aca2e0ef5fbmethod4(),
      "once": true
    }
  ],
  "events": [
    {
      "eventName": "blur",
      "id": "header_1",
      "fct": (e, c) => c.comp.closeMenu(e)
    },
    {
      "eventName": "click",
      "id": "header_5",
      "fct": (e, c) => c.comp.closeMenu(e)
    }
  ],
  "pressEvents": [
    {
      "id": "header_2",
      "onPress": (e, pressInstance, c) => { c.comp.openMenu(e, pressInstance); }
    },
    {
      "id": "header_6",
      "onPress": (e, pressInstance, c) => { c.comp.logout(e, pressInstance); }
    }
  ]
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
            <div class="auth-links">
                <av-link to="/login">
                    <as-button variant="ghost">Log In</as-button>
                </av-link>
                <av-link to="/signup">
                    <as-button variant="primary">Sign Up</as-button>
                </av-link>
            </div>
        `);
this.__getStatic().__template.addIf({
                    anchorId: 'header_0',
                    parts: [{once: true,
                    condition: (c) => c.comp.__d51db0f5204592e74b573aca2e0ef5fbmethod0(),
                    template: templ0
                },{once: true,
                    condition: (c) => true,
                    template: templ1
                }]
            });
const templ2 = new Aventus.Template(this);
templ2.setTemplate(`
            <div class="connected">
                <as-user-img class="user-avatar" _id="header_10"></as-user-img>
                <div class="username" _id="header_11"></div>
            </div>
        `);
templ2.setActions({
  "content": {
    "header_11°@HTML": {
      "fct": (c) => `${c.print(c.comp.__d51db0f5204592e74b573aca2e0ef5fbmethod5())}`
    }
  },
  "injection": [
    {
      "id": "header_10",
      "injectionName": "user",
      "inject": (c) => c.comp.__d51db0f5204592e74b573aca2e0ef5fbmethod6(),
      "once": true
    }
  ]
});
this.__getStatic().__template.addIf({
                    anchorId: 'header_9',
                    parts: [{once: true,
                    condition: (c) => c.comp.__d51db0f5204592e74b573aca2e0ef5fbmethod1(),
                    template: templ2
                }]
            });
const templ3 = new Aventus.Template(this);
templ3.setTemplate(`
                <av-link class="link" to="/profile">
                    <mi-icon icon="person"></mi-icon>
                    <span>My Profile</span>
                </av-link>
                <div class="link" _id="header_13">
                    <mi-icon icon="exit_to_app"></mi-icon>
                    <span>Logout</span>
                </div>
            `);
templ3.setActions({
  "events": [
    {
      "eventName": "click",
      "id": "header_13",
      "fct": (e, c) => c.comp.logout(e)
    }
  ]
});
this.__getStatic().__template.addIf({
                    anchorId: 'header_12',
                    parts: [{once: true,
                    condition: (c) => c.comp.__d51db0f5204592e74b573aca2e0ef5fbmethod2(),
                    template: templ3
                }]
            });
const templ4 = new Aventus.Template(this);
templ4.setTemplate(`
            <div class="auth-links">
                <av-link to="/login">
                    <as-button variant="ghost">Log In</as-button>
                </av-link>
                <av-link to="/signup">
                    <as-button variant="primary">Sign Up</as-button>
                </av-link>
            </div>
        `);
this.__getStatic().__template.addIf({
                    anchorId: 'header_14',
                    parts: [{once: true,
                    condition: (c) => c.comp.__d51db0f5204592e74b573aca2e0ef5fbmethod3(),
                    template: templ4
                }]
            });
 }
    getClassName() {
        return "Header";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('is_menu_open')) { this.attributeChangedCallback('is_menu_open', false, false); }
if(!this.hasAttribute('open_menu_mobile')) { this.attributeChangedCallback('open_menu_mobile', false, false); }
if(!this.hasAttribute('is_ready')) { this.attributeChangedCallback('is_ready', false, false); }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["user"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('is_menu_open');
this.__upgradeProperty('open_menu_mobile');
this.__upgradeProperty('is_ready');
this.__correctGetter('user');
 }
    __listBoolProps() { return ["is_menu_open","open_menu_mobile","is_ready"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    openMobileNav() {
        this.open_menu_mobile = true;
    }
    closeMobileNav() {
        this.open_menu_mobile = false;
    }
    openMenu() {
        this.is_menu_open = true;
        if (this.is_menu_open) {
            setTimeout(() => {
                this.menuEl.focus();
            }, 200);
        }
    }
    closeMenu() {
        this.is_menu_open = false;
    }
    async logout() {
        await new App.Http.Controllers.Auth.Logout.AuthLogoutController().request();
        window.location.reload();
    }
    postCreation() {
        this.user = Main.user;
        this.is_ready = true;
        Main.instance.onRouteChange.add(() => {
            this.open_menu_mobile = false;
        });
    }
    __d51db0f5204592e74b573aca2e0ef5fbmethod5() {
        return this.user?.username;
    }
    __d51db0f5204592e74b573aca2e0ef5fbmethod0() {
        return this.user;
    }
    __d51db0f5204592e74b573aca2e0ef5fbmethod1() {
        return this.user;
    }
    __d51db0f5204592e74b573aca2e0ef5fbmethod2() {
        return this.user;
    }
    __d51db0f5204592e74b573aca2e0ef5fbmethod3() {
        return !this.user;
    }
    __d51db0f5204592e74b573aca2e0ef5fbmethod4() {
        return this.user;
    }
    __d51db0f5204592e74b573aca2e0ef5fbmethod6() {
        return this.user;
    }
}
Header.Namespace=`AventusStore`;
Header.Tag=`as-header`;
__as1(_, 'Header', Header);
if(!window.customElements.get('as-header')){window.customElements.define('as-header', Header);Aventus.WebComponentInstance.registerDefinition(Header);}

App.Http.Resources.Web.IndexResource=class IndexResource extends Aventus.Data {
    static get Fullname() { return "App.Http.Resources.Web.IndexResource"; }
    user = undefined;
}
App.Http.Resources.Web.IndexResource.Namespace=`AventusStore.App.Http.Resources.Web`;
App.Http.Resources.Web.IndexResource.$schema={...(Aventus.Data?.$schema ?? {}), "user":"AventusStore.App.Models.User"};
Aventus.Converter.register(App.Http.Resources.Web.IndexResource.Fullname, App.Http.Resources.Web.IndexResource);
__as1(_.App.Http.Resources.Web, 'IndexResource', App.Http.Resources.Web.IndexResource);

const TemplateCard = class TemplateCard extends Aventus.WebComponent {
    get 'no_owner'() { return this.getBoolAttr('no_owner') }
    set 'no_owner'(val) { this.setBoolAttr('no_owner', val) }
    get 'template'() {
						return this.__watch["template"];
					}
					set 'template'(val) {
						this.__watch["template"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("template");
    super.__registerWatchesActions();
}
    static __style = `:host{display:block;height:100%}:host .template-card-link{display:contents}:host .template-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;display:flex;flex-direction:column;height:100%;justify-content:space-between;padding:1.5rem;transition:all .2s ease-in-out}:host .template-card:hover{background:var(--card-bg-hover);border-color:var(--card-border-hover);transform:translateY(-4px)}:host .template-name{color:var(--text-white);font-size:1.25rem;font-weight:bold;margin:0}:host .template-description{color:var(--text-muted);font-size:.875rem;margin-top:.5rem}:host .template-footer{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}:host .template-tags{display:flex;flex-wrap:wrap;gap:.5rem}:host .template-tags .template-tag{background-color:var(--tag-bg);border-radius:.25rem;color:var(--tag-text);cursor:pointer;font-size:.8rem;font-weight:500;padding:.5rem .75rem;transition:background-color .2s ease-in-out}:host .template-tags .template-tag:hover{background-color:var(--tag-bg-hover)}:host .template-meta{align-items:center;color:var(--text-muted);display:flex;font-size:.875rem;justify-content:space-between}:host .template-author{align-items:center;color:inherit;display:flex;gap:.5rem;text-decoration:none}:host .template-author:hover{color:var(--color-accent)}:host .author-avatar{border-radius:9999px;font-size:10px;height:1.5rem;letter-spacing:0;width:1.5rem}:host .template-downloads{align-items:center;display:flex;gap:.4rem}:host .icon-xs{align-items:center;display:flex;font-size:1rem;height:1rem;justify-content:center;width:1rem}:host([no_owner]) .template-footer{flex-direction:row}:host([no_owner]) .template-footer .template-tags{flex-grow:1;flex-wrap:wrap}:host([no_owner]) .template-footer .template-meta{flex-shrink:0}:host([no_owner]) .template-author{display:none}`;
    __getStatic() {
        return TemplateCard;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(TemplateCard.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<av-router-link class="template-card-link" _id="templatecard_0">
    <div class="template-card">
        <div>
            <h3 class="template-name" _id="templatecard_1"></h3>
            <p class="template-description" _id="templatecard_2"></p>
        </div>
        <div class="template-footer">
            <div class="template-tags">
                <template _id="templatecard_3"></template>
            </div>
            <div class="template-meta">
                <av-router-link class="template-author" _id="templatecard_5">
                    <as-user-img class="author-avatar" _id="templatecard_6"></as-user-img>
                    <span _id="templatecard_7"></span>
                </av-router-link>
                <div class="template-downloads">
                    <mi-icon icon="download" class="icon-xs"></mi-icon>
                    <span _id="templatecard_8"></span>
                </div>
            </div>
        </div>
    </div>
</av-router-link>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "templatecard_0°state": {
      "fct": (c) => `${c.print(c.comp.__8431eccc896d4a5b9e4413d318e76618method1())}`,
      "once": true
    },
    "templatecard_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__8431eccc896d4a5b9e4413d318e76618method2())}`,
      "once": true
    },
    "templatecard_2°@HTML": {
      "fct": (c) => `${c.print(c.comp.__8431eccc896d4a5b9e4413d318e76618method3())}`,
      "once": true
    },
    "templatecard_5°state": {
      "fct": (c) => `${c.print(c.comp.__8431eccc896d4a5b9e4413d318e76618method5())}`,
      "once": true
    },
    "templatecard_7°@HTML": {
      "fct": (c) => `${c.print(c.comp.__8431eccc896d4a5b9e4413d318e76618method7())}`,
      "once": true
    },
    "templatecard_8°@HTML": {
      "fct": (c) => `${c.print(c.comp.__8431eccc896d4a5b9e4413d318e76618method8())}`,
      "once": true
    }
  },
  "injection": [
    {
      "id": "templatecard_6",
      "injectionName": "user",
      "inject": (c) => c.comp.__8431eccc896d4a5b9e4413d318e76618method6(),
      "once": true
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(` 
                    <span class="template-tag" _id="templatecard_4"></span>
                `);
templ0.setActions({
  "content": {
    "templatecard_4°@HTML": {
      "fct": (c) => `${c.print(c.comp.__8431eccc896d4a5b9e4413d318e76618method4(c.data.tag))}`,
      "once": true
    }
  },
  "pressEvents": [
    {
      "id": "templatecard_4",
      "onPress": (e, pressInstance, c) => { c.comp.searchTag(e, pressInstance); }
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'templatecard_3',
                    template: templ0,
                simple:{data: "this.template.tags",item:"tag"}
});
 }
    getClassName() {
        return "TemplateCard";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_owner')) { this.attributeChangedCallback('no_owner', false, false); }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["template"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_owner');
this.__correctGetter('template');
 }
    __listBoolProps() { return ["no_owner"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    getFromState() {
        if (this.template.isUser) {
            return "/user/" + this.template.fromName;
        }
        return "/org/" + this.template.fromName;
    }
    searchTag(e, press) {
        let state = new TemplatesPageState();
        state.search = "#" + press.getElement().innerHTML;
        Main.instance.navigate(state);
    }
    __8431eccc896d4a5b9e4413d318e76618method1() {
        return '/templates/' + this.template.name;
    }
    __8431eccc896d4a5b9e4413d318e76618method2() {
        return this.template.name;
    }
    __8431eccc896d4a5b9e4413d318e76618method3() {
        return this.template.description;
    }
    __8431eccc896d4a5b9e4413d318e76618method4(tag) {
        return tag;
    }
    __8431eccc896d4a5b9e4413d318e76618method5() {
        return this.getFromState();
    }
    __8431eccc896d4a5b9e4413d318e76618method7() {
        return this.template.fromName;
    }
    __8431eccc896d4a5b9e4413d318e76618method8() {
        return this.template.downloads;
    }
    __8431eccc896d4a5b9e4413d318e76618method6() {
        return { username: this.template.fromName, picture: { 'uri': this.template.fromImg } };
    }
}
TemplateCard.Namespace=`AventusStore`;
TemplateCard.Tag=`as-template-card`;
__as1(_, 'TemplateCard', TemplateCard);
if(!window.customElements.get('as-template-card')){window.customElements.define('as-template-card', TemplateCard);Aventus.WebComponentInstance.registerDefinition(TemplateCard);}

const TemplatesPage = class TemplatesPage extends Aventus.Navigation.Page {
    get 'loading'() { return this.getBoolAttr('loading') }
    set 'loading'(val) { this.setBoolAttr('loading', val) }
get 'page'() { return this.getNumberAttr('page') }
    set 'page'(val) { this.setNumberAttr('page', val) }
    get 'searchTxt'() {
						return this.__watch["searchTxt"];
					}
					set 'searchTxt'(val) {
						this.__watch["searchTxt"] = val;
					}
get 'searchResult'() {
						return this.__watch["searchResult"];
					}
					set 'searchResult'(val) {
						this.__watch["searchResult"] = val;
					}
get 'templates'() {
						return this.__watch["templates"];
					}
					set 'templates'(val) {
						this.__watch["templates"] = val;
					}
    templatesRandom;
    timeout;
    elementsByPage = 21;
    canLoadMore = false;
    guard = new Aventus.ActionGuard();
    isSearching = false;
    __registerWatchesActions() {
    this.__addWatchesActions("searchTxt");
this.__addWatchesActions("searchResult");
this.__addWatchesActions("templates");
    super.__registerWatchesActions();
}
    static __style = `:host{margin:0 auto;max-width:80rem;padding:3rem 2rem}:host .templates-header{text-align:center}:host .templates-title{color:var(--text-color);font-size:2.25rem;font-weight:800}:host .templates-subtitle{color:var(--text-muted);font-size:1.125rem;margin-left:auto;margin-right:auto;margin-top:1rem;max-width:40rem}:host .templates-search{margin:2.5rem auto 3rem;max-width:36rem}:host .search-input-wrapper{position:relative}:host .search-input{padding-left:2.5rem !important;width:100%}:host .search-icon{color:var(--text-muted);left:.75rem;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%)}:host .icon-sm{align-items:center;display:flex;font-size:1.25rem;height:1.25rem;justify-content:center;width:1.25rem}:host as-loading{display:none;margin-top:2rem}:host .templates-grid{display:grid;gap:2rem;grid-template-columns:1fr;margin-bottom:1rem}:host .templates-empty{color:var(--text-muted);padding:2rem 0;text-align:center}:host([loading]) as-loading{display:flex}:host([loading][page="0"]) as-loading{margin-top:0rem}:host([loading][page="0"]) .templates-grid{display:none}:host([loading][page="0"]) .templates-empty{display:none}@media(min-width: 768px){:host .templates-grid{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 1024px){:host .templates-grid{grid-template-columns:repeat(3, 1fr)}}`;
    constructor() {
        super();
        this.needMoreLoad = this.needMoreLoad.bind(this);
    }
    __getStatic() {
        return TemplatesPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(TemplatesPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="templates-header">
    <h1 class="templates-title">Explore Templates</h1>
    <p class="templates-subtitle">
       Bootstrap your next AventusJs project with our ready-to-use templates.
    </p>
</div><div class="templates-search">
    <div class="search-input-wrapper">
        <as-input type="text" placeholder="Search for templates..." class="search-input" _id="templatespage_0"></as-input>
        <div class="search-icon">
            <mi-icon icon="search" class="icon-sm"></mi-icon>
        </div>
    </div>
</div><template _id="templatespage_1"></template><as-loading></as-loading>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "bindings": [
    {
      "id": "templatespage_0",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__944e817e76f557f6ffd876937383aa87method3(),
      "extract": (c, v) => c.comp.__944e817e76f557f6ffd876937383aa87method4(v),
      "once": true,
      "isCallback": true
    }
  ],
  "events": [
    {
      "eventName": "onChange",
      "id": "templatespage_0",
      "fct": (c, ...args) => c.comp.changeSearch.apply(c.comp, ...args),
      "isCallback": true
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
    <div class="templates-grid">
        <template _id="templatespage_2"></template>
    </div>
`);
const templ2 = new Aventus.Template(this);
templ2.setTemplate(` 
            <as-template-card _id="templatespage_3"></as-template-card>
        `);
templ2.setActions({
  "injection": [
    {
      "id": "templatespage_3",
      "injectionName": "template",
      "inject": (c) => c.comp.__944e817e76f557f6ffd876937383aa87method5(c.data.p),
      "once": true
    }
  ]
});
templ0.addLoop({
                    anchorId: 'templatespage_2',
                    template: templ2,
                simple:{data: "this.templates",item:"p"}
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
    <div class="templates-empty">No templates found</div>
`);
this.__getStatic().__template.addIf({
                    anchorId: 'templatespage_1',
                    parts: [{once: true,
                    condition: (c) => c.comp.__944e817e76f557f6ffd876937383aa87method0(),
                    template: templ0
                },{once: true,
                    condition: (c) => c.comp.__944e817e76f557f6ffd876937383aa87method1(),
                    template: templ1
                }]
            });
 }
    getClassName() {
        return "TemplatesPage";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('loading')) { this.attributeChangedCallback('loading', false, false); }
if(!this.hasAttribute('page')){ this['page'] = 0; }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["searchTxt"] = "";
w["searchResult"] = "";
w["templates"] = [];
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('loading');
this.__upgradeProperty('page');
this.__correctGetter('searchTxt');
this.__correctGetter('searchResult');
this.__correctGetter('templates');
 }
    __listBoolProps() { return ["loading"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    changeSearch() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.timeout = undefined;
            this.search(true);
        }, 500);
    }
    async search(reset) {
        this.isSearching = true;
        await this.guard.run(async () => {
            if (!reset && !this.canLoadMore)
                return;
            if (reset) {
                this.page = 0;
            }
            const txt = this.searchTxt;
            if (txt == "") {
                if (!this.templatesRandom) {
                    this.templatesRandom = await Aventus.Process.execute(new App.Http.Controllers.Template.Random.TemplateRandomController().request({ number: 6 }));
                }
                this.templates = this.templatesRandom ?? [];
            }
            else {
                this.loading = true;
                const result = await Aventus.Process.execute(new App.Http.Controllers.Template.Search.TemplateSearchController().request({ txt, limit: this.elementsByPage, offset: this.page * this.elementsByPage }));
                if (result) {
                    if (this.page == 0) {
                        this.templates = result;
                    }
                    else {
                        this.templates = [...this.templates, ...result];
                    }
                    this.canLoadMore = result.length >= this.elementsByPage;
                }
                this.loading = false;
            }
            this.searchResult = txt;
        });
        this.isSearching = false;
    }
    needMoreLoad(x, y) {
        if (this.isSearching)
            return;
        if (this.canLoadMore && Main.instance.scrollEl.yMax - y < 200) {
            this.page++;
            this.search(false);
        }
    }
    configure() {
        return {};
    }
    show(state) {
        super.show(state);
        if (state instanceof TemplatesPageState) {
            this.searchTxt = state.search;
            this.search(true);
        }
    }
    onShow() {
        Main.instance.onScrollChange.add(this.needMoreLoad);
    }
    onHide() {
        Main.instance.onScrollChange.remove(this.needMoreLoad);
    }
    postCreation() {
        super.postCreation();
        this.search(true);
    }
    __944e817e76f557f6ffd876937383aa87method0() {
        return this.templates.length > 0;
    }
    __944e817e76f557f6ffd876937383aa87method1() {
        return this.searchResult != "";
    }
    __944e817e76f557f6ffd876937383aa87method5(p) {
        return p;
    }
    __944e817e76f557f6ffd876937383aa87method3() {
        return this.searchTxt;
    }
    __944e817e76f557f6ffd876937383aa87method4(v) {
        if (this) {
            this.searchTxt = v;
        }
    }
}
TemplatesPage.Namespace=`AventusStore`;
TemplatesPage.Tag=`as-templates-page`;
__as1(_, 'TemplatesPage', TemplatesPage);
if(!window.customElements.get('as-templates-page')){window.customElements.define('as-templates-page', TemplatesPage);Aventus.WebComponentInstance.registerDefinition(TemplatesPage);}

const HomePage = class HomePage extends Aventus.Navigation.Page {
    get 'packages'() {
						return this.__watch["packages"];
					}
					set 'packages'(val) {
						this.__watch["packages"] = val;
					}
get 'templates'() {
						return this.__watch["templates"];
					}
					set 'templates'(val) {
						this.__watch["templates"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("packages");
this.__addWatchesActions("templates");
    super.__registerWatchesActions();
}
    static __style = `:host .homepage{padding-bottom:5rem}:host .hero{padding-bottom:2.5rem;padding-top:5rem;position:relative;text-align:center}:host .hero-background{background-color:var(--bg-color);background-image:radial-gradient(var(--bg-hover) 1px, transparent 1px);background-size:32px 32px;height:100%;inset:0;position:absolute;width:100%;z-index:-1}:host .container{margin:0 auto;max-width:1280px;padding-left:1rem;padding-right:1rem}:host .hero-title{color:var(--text-white);font-size:2.25rem;font-weight:800}:host .hero-title .highlight{color:var(--color-accent)}:host .hero-subtitle{color:var(--text-color);font-size:1.125rem;margin-left:auto;margin-right:auto;margin-top:1.5rem;max-width:48rem}:host .hero-buttons{display:flex;gap:1rem;justify-content:center;margin-top:2rem}:host .btn-lg{font-size:1.125rem;padding:.75rem 2rem}:host .section{margin:0 auto;max-width:1280px;padding:0 2rem}:host .text-center{text-align:center}:host .section-title{color:var(--text-white);font-size:1.875rem;font-weight:bold}:host .section-description{color:var(--text-muted);font-size:1.125rem;margin-top:1rem}:host .card-grid{display:grid;gap:2rem;margin-top:3rem}:host .section-footer{margin-top:2rem;text-align:center}:host .icon-right{align-items:center;display:flex;font-size:1rem;height:1rem;justify-content:center;margin-left:.5rem;width:1rem}@media(min-width: 768px){:host .card-grid{grid-template-columns:repeat(2, 1fr)}:host .hero{padding-bottom:5rem;padding-top:8rem}:host .hero-title{font-size:3rem}:host .hero-subtitle{font-size:1.25rem}}@media(min-width: 1024px){:host .hero-title{font-size:4.5rem}}`;
    __getStatic() {
        return HomePage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(HomePage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="homepage">
    <section class="hero">
        <div class="hero-background"></div>
        <div class="container">
            <h1 class="hero-title">
                The Webcomponent <span class="highlight">JavaScript</span> Framework
            </h1>
            <p class="hero-subtitle">
                AventusJs provides the building blocks to create powerful, fast, and scalable web applications with an
                amazing developer experience.
            </p>
            <div class="hero-buttons">
                <av-router-link state="/packages">
                    <as-button variant="primary" class="btn-lg">
                        Search Packages
                    </as-button>
                </av-router-link>
                <av-router-link state="/templates">
                    <as-button variant="secondary" class="btn-lg">
                        Explore Templates
                    </as-button>
                </av-router-link>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="text-center">
            <h2 class="section-title">Featured Packages</h2>
            <p class="section-description">Discover powerful packages to supercharge your project.</p>
        </div>
        <div class="card-grid">
            <template _id="homepage_0"></template>
        </div>
        <div class="section-footer">
            <av-router-link to="/packages">
                <as-button variant="ghost">
                    <span>View All Packages</span>
                    <mi-icon icon="chevron_right" class="icon-right"></mi-icon>
                </as-button>
            </av-router-link>
        </div>
    </section>
    <section class="section">
        <div class="text-center">
            <h2 class="section-title">Featured Templates</h2>
            <p class="section-description">Start your next project with a solid foundation.</p>
        </div>
        <div class="card-grid">
            <template _id="homepage_2"></template>
        </div>
        <div class="section-footer">
            <av-router-link to="/templates">
                <as-button variant="ghost">
                    <span>View All Templates</span>
                    <mi-icon icon="chevron_right" class="icon-right"></mi-icon>
                </as-button>
            </av-router-link>
        </div>
    </section>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
                <as-package-card _id="homepage_1"></as-package-card>
            `);
templ0.setActions({
  "injection": [
    {
      "id": "homepage_1",
      "injectionName": "package",
      "inject": (c) => c.comp.__f725a6f94f460d959be619e682001f79method2(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'homepage_0',
                    template: templ0,
                simple:{data: "this.packages",item:"p"}
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
                <as-template-card _id="homepage_3"></as-template-card>
            `);
templ1.setActions({
  "injection": [
    {
      "id": "homepage_3",
      "injectionName": "template",
      "inject": (c) => c.comp.__f725a6f94f460d959be619e682001f79method3(c.data.t),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'homepage_2',
                    template: templ1,
                simple:{data: "this.templates",item:"t"}
});
 }
    getClassName() {
        return "HomePage";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["packages"] = [];
w["templates"] = [];
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('packages');
this.__correctGetter('templates');
 }
    configure() {
        return {};
    }
    async loadData(state) {
        this.packages = await Aventus.Process.execute(new App.Http.Controllers.Package.Random.PackageRandomController().request({ number: 4 })) ?? [];
        this.templates = await Aventus.Process.execute(new App.Http.Controllers.Template.Random.TemplateRandomController().request({ number: 4 })) ?? [];
        return true;
    }
    __f725a6f94f460d959be619e682001f79method2(p) {
        return p;
    }
    __f725a6f94f460d959be619e682001f79method3(t) {
        return t;
    }
}
HomePage.Namespace=`AventusStore`;
HomePage.Tag=`as-home-page`;
__as1(_, 'HomePage', HomePage);
if(!window.customElements.get('as-home-page')){window.customElements.define('as-home-page', HomePage);Aventus.WebComponentInstance.registerDefinition(HomePage);}

const PackagesPage = class PackagesPage extends Aventus.Navigation.Page {
    get 'loading'() { return this.getBoolAttr('loading') }
    set 'loading'(val) { this.setBoolAttr('loading', val) }
get 'page'() { return this.getNumberAttr('page') }
    set 'page'(val) { this.setNumberAttr('page', val) }
    get 'searchTxt'() {
						return this.__watch["searchTxt"];
					}
					set 'searchTxt'(val) {
						this.__watch["searchTxt"] = val;
					}
get 'searchResult'() {
						return this.__watch["searchResult"];
					}
					set 'searchResult'(val) {
						this.__watch["searchResult"] = val;
					}
get 'packages'() {
						return this.__watch["packages"];
					}
					set 'packages'(val) {
						this.__watch["packages"] = val;
					}
    packagesRandom;
    timeout;
    elementsByPage = 21;
    canLoadMore = false;
    guard = new Aventus.ActionGuard();
    isSearching = false;
    __registerWatchesActions() {
    this.__addWatchesActions("searchTxt");
this.__addWatchesActions("searchResult");
this.__addWatchesActions("packages");
    super.__registerWatchesActions();
}
    static __style = `:host{margin:0 auto;max-width:80rem;padding:3rem 2rem}:host .packages-header{text-align:center}:host .packages-title{color:var(--text-color);font-size:2.25rem;font-weight:800}:host .packages-subtitle{color:var(--text-muted);font-size:1.125rem;margin-left:auto;margin-right:auto;margin-top:1rem;max-width:40rem}:host .packages-search{margin:2.5rem auto 3rem;max-width:36rem}:host .search-input-wrapper{position:relative}:host .search-input{padding-left:2.5rem !important;width:100%}:host .search-icon{color:var(--text-muted);left:.75rem;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%)}:host .icon-sm{align-items:center;display:flex;font-size:1.25rem;height:1.25rem;justify-content:center;width:1.25rem}:host as-loading{display:none;margin-top:2rem}:host .packages-grid{display:grid;gap:2rem;grid-template-columns:1fr;margin-bottom:1rem}:host .packages-empty{color:var(--text-muted);padding:2rem 0;text-align:center}:host([loading]) as-loading{display:flex}:host([loading][page="0"]) as-loading{margin-top:0rem}:host([loading][page="0"]) .packages-grid{display:none}:host([loading][page="0"]) .packages-empty{display:none}@media(min-width: 768px){:host .packages-grid{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 1024px){:host .packages-grid{grid-template-columns:repeat(3, 1fr)}}`;
    constructor() {
        super();
        this.needMoreLoad = this.needMoreLoad.bind(this);
    }
    __getStatic() {
        return PackagesPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PackagesPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="packages-header">
    <h1 class="packages-title">Explore Packages</h1>
    <p class="packages-subtitle">
        Find the perfect building blocks for your AventusJs application.
    </p>
</div><div class="packages-search">
    <div class="search-input-wrapper">
        <as-input type="text" placeholder="Search for packages..." class="search-input" _id="packagespage_0"></as-input>
        <div class="search-icon">
            <mi-icon icon="search" class="icon-sm"></mi-icon>
        </div>
    </div>
</div><template _id="packagespage_1"></template><as-loading></as-loading>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "bindings": [
    {
      "id": "packagespage_0",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__d75e202a7e0493149d77ed808e3dbc7amethod3(),
      "extract": (c, v) => c.comp.__d75e202a7e0493149d77ed808e3dbc7amethod4(v),
      "once": true,
      "isCallback": true
    }
  ],
  "events": [
    {
      "eventName": "onChange",
      "id": "packagespage_0",
      "fct": (c, ...args) => c.comp.changeSearch.apply(c.comp, ...args),
      "isCallback": true
    }
  ]
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
    <div class="packages-grid">
        <template _id="packagespage_2"></template>
    </div>
`);
const templ3 = new Aventus.Template(this);
templ3.setTemplate(` 
            <as-package-card _id="packagespage_3"></as-package-card>
        `);
templ3.setActions({
  "injection": [
    {
      "id": "packagespage_3",
      "injectionName": "package",
      "inject": (c) => c.comp.__d75e202a7e0493149d77ed808e3dbc7amethod5(c.data.p),
      "once": true
    }
  ]
});
templ1.addLoop({
                    anchorId: 'packagespage_2',
                    template: templ3,
                simple:{data: "this.packages",item:"p"}
});
const templ2 = new Aventus.Template(this);
templ2.setTemplate(`
    <div class="packages-empty">No packages found</div>
`);
this.__getStatic().__template.addIf({
                    anchorId: 'packagespage_1',
                    parts: [{once: true,
                    condition: (c) => c.comp.__d75e202a7e0493149d77ed808e3dbc7amethod0(),
                    template: templ1
                },{once: true,
                    condition: (c) => c.comp.__d75e202a7e0493149d77ed808e3dbc7amethod1(),
                    template: templ2
                }]
            });
 }
    getClassName() {
        return "PackagesPage";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('loading')) { this.attributeChangedCallback('loading', false, false); }
if(!this.hasAttribute('page')){ this['page'] = 0; }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["searchTxt"] = "";
w["searchResult"] = "";
w["packages"] = [];
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('loading');
this.__upgradeProperty('page');
this.__correctGetter('searchTxt');
this.__correctGetter('searchResult');
this.__correctGetter('packages');
 }
    __listBoolProps() { return ["loading"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    changeSearch() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.timeout = undefined;
            this.search(true);
        }, 500);
    }
    async search(reset) {
        this.isSearching = true;
        await this.guard.run(async () => {
            if (!reset && !this.canLoadMore)
                return;
            if (reset) {
                this.page = 0;
            }
            const txt = this.searchTxt;
            if (txt == "") {
                if (!this.packagesRandom) {
                    this.packagesRandom = await Aventus.Process.execute(new App.Http.Controllers.Package.Random.PackageRandomController().request({ number: 6 }));
                }
                this.packages = this.packagesRandom ?? [];
            }
            else {
                this.loading = true;
                const result = await Aventus.Process.execute(new App.Http.Controllers.Package.Search.PackageSearchController().request({ txt, limit: this.elementsByPage, offset: this.page * this.elementsByPage }));
                if (result) {
                    if (this.page == 0) {
                        this.packages = result;
                    }
                    else {
                        this.packages = [...this.packages, ...result];
                    }
                    this.canLoadMore = result.length >= this.elementsByPage;
                }
                this.loading = false;
            }
            this.searchResult = txt;
        });
        this.isSearching = false;
    }
    needMoreLoad(x, y) {
        if (this.isSearching)
            return;
        if (this.canLoadMore && Main.instance.scrollEl.yMax - y < 200) {
            this.page++;
            this.search(false);
        }
    }
    configure() {
        return {};
    }
    show(state) {
        super.show(state);
        if (state instanceof PackagesPageState) {
            this.searchTxt = state.search;
            this.search(true);
        }
    }
    onShow() {
        Main.instance.onScrollChange.add(this.needMoreLoad);
    }
    onHide() {
        Main.instance.onScrollChange.remove(this.needMoreLoad);
    }
    postCreation() {
        super.postCreation();
        this.search(true);
    }
    __d75e202a7e0493149d77ed808e3dbc7amethod0() {
        return this.packages.length > 0;
    }
    __d75e202a7e0493149d77ed808e3dbc7amethod1() {
        return this.searchResult != "";
    }
    __d75e202a7e0493149d77ed808e3dbc7amethod5(p) {
        return p;
    }
    __d75e202a7e0493149d77ed808e3dbc7amethod3() {
        return this.searchTxt;
    }
    __d75e202a7e0493149d77ed808e3dbc7amethod4(v) {
        if (this) {
            this.searchTxt = v;
        }
    }
}
PackagesPage.Namespace=`AventusStore`;
PackagesPage.Tag=`as-packages-page`;
__as1(_, 'PackagesPage', PackagesPage);
if(!window.customElements.get('as-packages-page')){window.customElements.define('as-packages-page', PackagesPage);Aventus.WebComponentInstance.registerDefinition(PackagesPage);}
<<<<<<< HEAD

App.Http.Controllers.Package.Search.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Package.Search.Error"; }
}
App.Http.Controllers.Package.Search.Error.Namespace=`AventusStore.App.Http.Controllers.Package.Search`;
App.Http.Controllers.Package.Search.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Package.Search.Error.Fullname, App.Http.Controllers.Package.Search.Error);
__as1(_.App.Http.Controllers.Package.Search, 'Error', App.Http.Controllers.Package.Search.Error);

App.Http.Controllers.Remote.Auth.Login.Controller=class Controller extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/remote/login`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Remote.Auth.Login.Controller.Namespace=`AventusStore.App.Http.Controllers.Remote.Auth.Login`;
__as1(_.App.Http.Controllers.Remote.Auth.Login, 'Controller', App.Http.Controllers.Remote.Auth.Login.Controller);

App.Http.Controllers.Remote.Auth.Login.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Remote.Auth.Login.Error"; }
}
App.Http.Controllers.Remote.Auth.Login.Error.Namespace=`AventusStore.App.Http.Controllers.Remote.Auth.Login`;
App.Http.Controllers.Remote.Auth.Login.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Remote.Auth.Login.Error.Fullname, App.Http.Controllers.Remote.Auth.Login.Error);
__as1(_.App.Http.Controllers.Remote.Auth.Login, 'Error', App.Http.Controllers.Remote.Auth.Login.Error);

App.Http.Controllers.Remote.Package.Publish.Controller=class Controller extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/remote/package/publish`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Remote.Package.Publish.Controller.Namespace=`AventusStore.App.Http.Controllers.Remote.Package.Publish`;
__as1(_.App.Http.Controllers.Remote.Package.Publish, 'Controller', App.Http.Controllers.Remote.Package.Publish.Controller);

App.Http.Controllers.Remote.Package.Publish.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Remote.Package.Publish.Error"; }
}
App.Http.Controllers.Remote.Package.Publish.Error.Namespace=`AventusStore.App.Http.Controllers.Remote.Package.Publish`;
App.Http.Controllers.Remote.Package.Publish.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Remote.Package.Publish.Error.Fullname, App.Http.Controllers.Remote.Package.Publish.Error);
__as1(_.App.Http.Controllers.Remote.Package.Publish, 'Error', App.Http.Controllers.Remote.Package.Publish.Error);

App.Http.Controllers.Remote.Template.Publish.RemoteTemplatePublishController=class RemoteTemplatePublishController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/remote/template/publish`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Remote.Template.Publish.RemoteTemplatePublishController.Namespace=`AventusStore.App.Http.Controllers.Remote.Template.Publish`;
__as1(_.App.Http.Controllers.Remote.Template.Publish, 'RemoteTemplatePublishController', App.Http.Controllers.Remote.Template.Publish.RemoteTemplatePublishController);

App.Http.Controllers.Remote.Template.Publish.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Remote.Template.Publish.Error"; }
}
App.Http.Controllers.Remote.Template.Publish.Error.Namespace=`AventusStore.App.Http.Controllers.Remote.Template.Publish`;
App.Http.Controllers.Remote.Template.Publish.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Remote.Template.Publish.Error.Fullname, App.Http.Controllers.Remote.Template.Publish.Error);
__as1(_.App.Http.Controllers.Remote.Template.Publish, 'Error', App.Http.Controllers.Remote.Template.Publish.Error);

App.Http.Controllers.Template.Delete.TemplateDeleteController=class TemplateDeleteController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/${name}`, Aventus.HttpMethod.DELETE);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Delete.TemplateDeleteController.Namespace=`AventusStore.App.Http.Controllers.Template.Delete`;
__as1(_.App.Http.Controllers.Template.Delete, 'TemplateDeleteController', App.Http.Controllers.Template.Delete.TemplateDeleteController);

App.Http.Controllers.Template.Details.TemplateDetailsController=class TemplateDetailsController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/details/${name}`, Aventus.HttpMethod.GET);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Details.TemplateDetailsController.Namespace=`AventusStore.App.Http.Controllers.Template.Details`;
__as1(_.App.Http.Controllers.Template.Details, 'TemplateDetailsController', App.Http.Controllers.Template.Details.TemplateDetailsController);

App.Http.Controllers.Template.Details.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Template.Details.Error"; }
}
App.Http.Controllers.Template.Details.Error.Namespace=`AventusStore.App.Http.Controllers.Template.Details`;
App.Http.Controllers.Template.Details.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Template.Details.Error.Fullname, App.Http.Controllers.Template.Details.Error);
__as1(_.App.Http.Controllers.Template.Details, 'Error', App.Http.Controllers.Template.Details.Error);

App.Http.Controllers.Template.Download.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Template.Download.Error"; }
}
App.Http.Controllers.Template.Download.Error.Namespace=`AventusStore.App.Http.Controllers.Template.Download`;
App.Http.Controllers.Template.Download.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Template.Download.Error.Fullname, App.Http.Controllers.Template.Download.Error);
__as1(_.App.Http.Controllers.Template.Download, 'Error', App.Http.Controllers.Template.Download.Error);

App.Http.Controllers.Template.Edit.Readme.TemplateEditReadmeController=class TemplateEditReadmeController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(name, body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/${name}/readme`, Aventus.HttpMethod.PUT);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Edit.Readme.TemplateEditReadmeController.Namespace=`AventusStore.App.Http.Controllers.Template.Edit.Readme`;
__as1(_.App.Http.Controllers.Template.Edit.Readme, 'TemplateEditReadmeController', App.Http.Controllers.Template.Edit.Readme.TemplateEditReadmeController);

App.Http.Controllers.Template.Random.TemplateRandomController=class TemplateRandomController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/random`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Random.TemplateRandomController.Namespace=`AventusStore.App.Http.Controllers.Template.Random`;
__as1(_.App.Http.Controllers.Template.Random, 'TemplateRandomController', App.Http.Controllers.Template.Random.TemplateRandomController);

const HomePage = class HomePage extends Aventus.Navigation.Page {
    get 'packages'() {
						return this.__watch["packages"];
					}
					set 'packages'(val) {
						this.__watch["packages"] = val;
					}get 'templates'() {
						return this.__watch["templates"];
					}
					set 'templates'(val) {
						this.__watch["templates"] = val;
					}    __registerWatchesActions() {
    this.__addWatchesActions("packages");this.__addWatchesActions("templates");    super.__registerWatchesActions();
}
    static __style = `:host .homepage{padding-bottom:5rem}:host .hero{padding-bottom:2.5rem;padding-top:5rem;position:relative;text-align:center}:host .hero-background{background-color:var(--bg-color);background-image:radial-gradient(var(--bg-hover) 1px, transparent 1px);background-size:32px 32px;height:100%;inset:0;position:absolute;width:100%;z-index:-1}:host .container{margin:0 auto;max-width:1280px;padding-left:1rem;padding-right:1rem}:host .hero-title{color:var(--text-white);font-size:2.25rem;font-weight:800}:host .hero-title .highlight{color:var(--color-accent)}:host .hero-subtitle{color:var(--text-color);font-size:1.125rem;margin-left:auto;margin-right:auto;margin-top:1.5rem;max-width:48rem}:host .hero-buttons{display:flex;gap:1rem;justify-content:center;margin-top:2rem}:host .btn-lg{font-size:1.125rem;padding:.75rem 2rem}:host .section{margin:0 auto;max-width:1280px;padding:0 2rem}:host .text-center{text-align:center}:host .section-title{color:var(--text-white);font-size:1.875rem;font-weight:bold}:host .section-description{color:var(--text-muted);font-size:1.125rem;margin-top:1rem}:host .card-grid{display:grid;gap:2rem;margin-top:3rem}:host .section-footer{margin-top:2rem;text-align:center}:host .icon-right{align-items:center;display:flex;font-size:1rem;height:1rem;justify-content:center;margin-left:.5rem;width:1rem}@media(min-width: 768px){:host .card-grid{grid-template-columns:repeat(2, 1fr)}:host .hero{padding-bottom:5rem;padding-top:8rem}:host .hero-title{font-size:3rem}:host .hero-subtitle{font-size:1.25rem}}@media(min-width: 1024px){:host .hero-title{font-size:4.5rem}}`;
    __getStatic() {
        return HomePage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(HomePage.__style);
        return arrStyle;
    }
    __getHtml() {super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="homepage">
    <section class="hero">
        <div class="hero-background"></div>
        <div class="container">
            <h1 class="hero-title">
                The Webcomponent <span class="highlight">JavaScript</span> Framework
            </h1>
            <p class="hero-subtitle">
                AventusJs provides the building blocks to create powerful, fast, and scalable web applications with an
                amazing developer experience.
            </p>
            <div class="hero-buttons">
                <av-router-link state="/packages">
                    <as-button variant="primary" class="btn-lg">
                        Search Packages
                    </as-button>
                </av-router-link>
                <av-router-link state="/templates">
                    <as-button variant="secondary" class="btn-lg">
                        Explore Templates
                    </as-button>
                </av-router-link>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="text-center">
            <h2 class="section-title">Featured Packages</h2>
            <p class="section-description">Discover powerful packages to supercharge your project.</p>
        </div>
        <div class="card-grid">
            <template _id="homepage_0"></template>
        </div>
        <div class="section-footer">
            <av-router-link to="/packages">
                <as-button variant="ghost">
                    <span>View All Packages</span>
                    <mi-icon icon="chevron_right" class="icon-right"></mi-icon>
                </as-button>
            </av-router-link>
        </div>
    </section>
    <section class="section">
        <div class="text-center">
            <h2 class="section-title">Featured Templates</h2>
            <p class="section-description">Start your next project with a solid foundation.</p>
        </div>
        <div class="card-grid">
            <template _id="homepage_2"></template>
        </div>
        <div class="section-footer">
            <av-router-link to="/templates">
                <as-button variant="ghost">
                    <span>View All Templates</span>
                    <mi-icon icon="chevron_right" class="icon-right"></mi-icon>
                </as-button>
            </av-router-link>
        </div>
    </section>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();const templ0 = new Aventus.Template(this);templ0.setTemplate(`
                <as-package-card _id="homepage_1"></as-package-card>
            `);templ0.setActions({
  "injection": [
    {
      "id": "homepage_1",
      "injectionName": "package",
      "inject": (c) => c.comp.__f725a6f94f460d959be619e682001f79method2(c.data.p),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'homepage_0',
                    template: templ0,
                simple:{data: "this.packages",item:"p"}});const templ1 = new Aventus.Template(this);templ1.setTemplate(`
                <as-template-card _id="homepage_3"></as-template-card>
            `);templ1.setActions({
  "injection": [
    {
      "id": "homepage_3",
      "injectionName": "template",
      "inject": (c) => c.comp.__f725a6f94f460d959be619e682001f79method3(c.data.t),
      "once": true
    }
  ]
});this.__getStatic().__template.addLoop({
                    anchorId: 'homepage_2',
                    template: templ1,
                simple:{data: "this.templates",item:"t"}}); }
    getClassName() {
        return "HomePage";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["packages"] = [];w["templates"] = []; }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('packages');this.__correctGetter('templates'); }
    configure() {
        return {};
    }
    async loadData(state) {
        this.packages = await Aventus.Process.execute(new App.Http.Controllers.Package.Random.PackageRandomController().request({ number: 4 })) ?? [];
        this.templates = await Aventus.Process.execute(new App.Http.Controllers.Template.Random.TemplateRandomController().request({ number: 4 })) ?? [];
        return true;
    }
    __f725a6f94f460d959be619e682001f79method2(p) {
        return p;
    }
    __f725a6f94f460d959be619e682001f79method3(t) {
        return t;
    }
}
HomePage.Namespace=`AventusStore`;
HomePage.Tag=`as-home-page`;
__as1(_, 'HomePage', HomePage);
if(!window.customElements.get('as-home-page')){window.customElements.define('as-home-page', HomePage);Aventus.WebComponentInstance.registerDefinition(HomePage);}

App.Http.Controllers.Template.Search.TemplateSearchController=class TemplateSearchController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/template/search`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.Template.Search.TemplateSearchController.Namespace=`AventusStore.App.Http.Controllers.Template.Search`;
__as1(_.App.Http.Controllers.Template.Search, 'TemplateSearchController', App.Http.Controllers.Template.Search.TemplateSearchController);

App.Http.Controllers.Template.Search.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.Template.Search.Error"; }
}
App.Http.Controllers.Template.Search.Error.Namespace=`AventusStore.App.Http.Controllers.Template.Search`;
App.Http.Controllers.Template.Search.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.Template.Search.Error.Fullname, App.Http.Controllers.Template.Search.Error);
__as1(_.App.Http.Controllers.Template.Search, 'Error', App.Http.Controllers.Template.Search.Error);

App.Http.Controllers.User.Current.UserCurrentController=class UserCurrentController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request() {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/current`, Aventus.HttpMethod.GET);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.Current.UserCurrentController.Namespace=`AventusStore.App.Http.Controllers.User.Current`;
__as1(_.App.Http.Controllers.User.Current, 'UserCurrentController', App.Http.Controllers.User.Current.UserCurrentController);

App.Http.Controllers.User.EditBio.UserEditBioController=class UserEditBioController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/edit_bio`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.EditBio.UserEditBioController.Namespace=`AventusStore.App.Http.Controllers.User.EditBio`;
__as1(_.App.Http.Controllers.User.EditBio, 'UserEditBioController', App.Http.Controllers.User.EditBio.UserEditBioController);

App.Http.Controllers.User.EditEmail.UserEditEmailController=class UserEditEmailController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/edit_email`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.EditEmail.UserEditEmailController.Namespace=`AventusStore.App.Http.Controllers.User.EditEmail`;
__as1(_.App.Http.Controllers.User.EditEmail, 'UserEditEmailController', App.Http.Controllers.User.EditEmail.UserEditEmailController);

App.Http.Controllers.User.EditEmail.Error=class Error extends AventusPhp.AventusError {
    static get Fullname() { return "App.Http.Controllers.User.EditEmail.Error"; }
}
App.Http.Controllers.User.EditEmail.Error.Namespace=`AventusStore.App.Http.Controllers.User.EditEmail`;
App.Http.Controllers.User.EditEmail.Error.$schema={...(AventusPhp.AventusError?.$schema ?? {}), };
Aventus.Converter.register(App.Http.Controllers.User.EditEmail.Error.Fullname, App.Http.Controllers.User.EditEmail.Error);
__as1(_.App.Http.Controllers.User.EditEmail, 'Error', App.Http.Controllers.User.EditEmail.Error);

App.Http.Controllers.User.EditPicture.UserEditPictureController=class UserEditPictureController extends Aventus.HttpRoute {
    constructor(router) {
        super(router);
        this.request = this.request.bind(this);
    }
    async request(body) {
        const request = new Aventus.HttpRequest(`${this.getPrefix()}/api/user/edit_picture`, Aventus.HttpMethod.POST);
        request.setBody(body);
        return await request.queryJSON(this.router);
    }
}
App.Http.Controllers.User.EditPicture.UserEditPictureController.Namespace=`AventusStore.App.Http.Controllers.User.EditPicture`;
__as1(_.App.Http.Controllers.User.EditPicture, 'UserEditPictureController', App.Http.Controllers.User.EditPicture.UserEditPictureController);

App.Models.OrganizationUser=class OrganizationUser extends Aventus.Data {
    static get Fullname() { return "App.Models.OrganizationUser"; }
    id;
    user_id;
    user;
    organization_id;
    organization;
    role_id;
    role;
}
App.Models.OrganizationUser.Namespace=`AventusStore.App.Models`;
App.Models.OrganizationUser.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","user_id":"number","user":"AventusStore.App.Models.User","organization_id":"number","organization":"AventusStore.App.Models.Organization","role_id":"number","role":"AventusStore.App.Models.Role"};
Aventus.Converter.register(App.Models.OrganizationUser.Fullname, App.Models.OrganizationUser);
__as1(_.App.Models, 'OrganizationUser', App.Models.OrganizationUser);

App.Models.TemplateTag=class TemplateTag extends Aventus.Data {
    static get Fullname() { return "App.Models.TemplateTag"; }
    template_id;
    tag_id;
    tag;
    template;
}
App.Models.TemplateTag.Namespace=`AventusStore.App.Models`;
App.Models.TemplateTag.$schema={...(Aventus.Data?.$schema ?? {}), "template_id":"number","tag_id":"number","tag":"AventusStore.App.Models.Tag","template":"AventusStore.App.Models.Template"};
Aventus.Converter.register(App.Models.TemplateTag.Fullname, App.Models.TemplateTag);
__as1(_.App.Models, 'TemplateTag', App.Models.TemplateTag);

App.Models.Template=class Template extends Aventus.Data {
    static get Fullname() { return "App.Models.Template"; }
    id;
    name;
    description;
    readme;
    version;
    repos = undefined;
    doc = undefined;
    downloads;
    is_project;
    user_id = undefined;
    user = undefined;
    organization_id = undefined;
    organization = undefined;
    release_date;
    tags;
}
App.Models.Template.Namespace=`AventusStore.App.Models`;
App.Models.Template.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","name":"string","description":"string","readme":"string","version":"string","repos":"string","doc":"string","downloads":"number","is_project":"boolean","user_id":"number","user":"AventusStore.App.Models.User","organization_id":"number","organization":"AventusStore.App.Models.Organization","release_date":"Date","tags":"AventusStore.App.Models.TemplateTag[]"};
Aventus.Converter.register(App.Models.Template.Fullname, App.Models.Template);
__as1(_.App.Models, 'Template', App.Models.Template);

App.Models.TemplateDownload=class TemplateDownload extends Aventus.Data {
    static get Fullname() { return "App.Models.TemplateDownload"; }
    template_id;
    version;
    date;
    downloads;
    template;
}
App.Models.TemplateDownload.Namespace=`AventusStore.App.Models`;
App.Models.TemplateDownload.$schema={...(Aventus.Data?.$schema ?? {}), "template_id":"number","version":"string","date":"Date","downloads":"number","template":"AventusStore.App.Models.Template"};
Aventus.Converter.register(App.Models.TemplateDownload.Fullname, App.Models.TemplateDownload);
__as1(_.App.Models, 'TemplateDownload', App.Models.TemplateDownload);

App.Models.Organization=class Organization extends Aventus.Data {
    static get Fullname() { return "App.Models.Organization"; }
    id;
    name;
    bio = undefined;
    picture = undefined;
    users;
    packages;
    templates;
}
App.Models.Organization.Namespace=`AventusStore.App.Models`;
App.Models.Organization.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","name":"string","bio":"string","picture":"AventusStore.App.Models.OrganizationPicture","users":"AventusStore.App.Models.OrganizationUser[]","packages":"AventusStore.App.Models.Package[]","templates":"AventusStore.App.Models.Template[]"};
Aventus.Converter.register(App.Models.Organization.Fullname, App.Models.Organization);
__as1(_.App.Models, 'Organization', App.Models.Organization);

App.Models.Package=class Package extends Aventus.Data {
    static get Fullname() { return "App.Models.Package"; }
    id;
    name;
    description;
    readme;
    version;
    repos = undefined;
    doc = undefined;
    downloads;
    user_id = undefined;
    user = undefined;
    organization_id = undefined;
    organization = undefined;
    release_date;
    tags;
}
App.Models.Package.Namespace=`AventusStore.App.Models`;
App.Models.Package.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","name":"string","description":"string","readme":"string","version":"string","repos":"string","doc":"string","downloads":"number","user_id":"number","user":"AventusStore.App.Models.User","organization_id":"number","organization":"AventusStore.App.Models.Organization","release_date":"Date","tags":"AventusStore.App.Models.PackageTag[]"};
Aventus.Converter.register(App.Models.Package.Fullname, App.Models.Package);
__as1(_.App.Models, 'Package', App.Models.Package);

App.Models.PackageDownload=class PackageDownload extends Aventus.Data {
    static get Fullname() { return "App.Models.PackageDownload"; }
    package_id;
    version;
    date;
    downloads;
    package;
}
App.Models.PackageDownload.Namespace=`AventusStore.App.Models`;
App.Models.PackageDownload.$schema={...(Aventus.Data?.$schema ?? {}), "package_id":"number","version":"string","date":"Date","downloads":"number","package":"AventusStore.App.Models.Package"};
Aventus.Converter.register(App.Models.PackageDownload.Fullname, App.Models.PackageDownload);
__as1(_.App.Models, 'PackageDownload', App.Models.PackageDownload);

App.Models.User=class User extends Aventus.Data {
    static get Fullname() { return "App.Models.User"; }
    id;
    username;
    email;
    bio = undefined;
    password;
    verified;
    picture = undefined;
    token_action;
    created_date;
    packages;
    templates;
    static _current = null;
    static _current_id = null;
}
App.Models.User.Namespace=`AventusStore.App.Models`;
App.Models.User.$schema={...(Aventus.Data?.$schema ?? {}), "id":"number","username":"string","email":"string","bio":"string","password":"string","verified":"boolean","picture":"AventusStore.App.Models.UserPicture","token_action":"string","created_date":"Date","packages":"AventusStore.App.Models.Package[]","templates":"AventusStore.App.Models.Template[]"};
Aventus.Converter.register(App.Models.User.Fullname, App.Models.User);
__as1(_.App.Models, 'User', App.Models.User);

App.Http.Resources.Web.IndexResource=class IndexResource {
    static get Fullname() { return "App.Http.Resources.Web.IndexResource"; }
    user = undefined;
}
App.Http.Resources.Web.IndexResource.Namespace=`AventusStore.App.Http.Resources.Web`;
App.Http.Resources.Web.IndexResource.$schema={"user":"AventusStore.App.Models.User"};
Aventus.Converter.register(App.Http.Resources.Web.IndexResource.Fullname, App.Http.Resources.Web.IndexResource);
__as1(_.App.Http.Resources.Web, 'IndexResource', App.Http.Resources.Web.IndexResource);

=======

>>>>>>> 8835a8f (Update to new version)
const Toast = class Toast extends Aventus.Toast.ToastElement {
    get 'type'() { return this.getStringAttr('type') }
    set 'type'(val) { this.setStringAttr('type', val) }
get 'closing'() { return this.getBoolAttr('closing') }
    set 'closing'(val) { this.setBoolAttr('closing', val) }
    get 'toastTitle'() {
						return this.__watch["toastTitle"];
					}
					set 'toastTitle'(val) {
						this.__watch["toastTitle"] = val;
					}
get 'toastMessage'() {
						return this.__watch["toastMessage"];
					}
					set 'toastMessage'(val) {
						this.__watch["toastMessage"] = val;
					}
    icon;
    __registerWatchesActions() {
    this.__addWatchesActions("toastTitle");
this.__addWatchesActions("toastMessage");
    super.__registerWatchesActions();
}
    static __style = `:host{background-color:var(--bg-surface);border:1px solid var(--border);border-radius:.5rem;box-shadow:0 25px 50px rgba(0,0,0,.25);max-width:24rem;overflow:hidden;pointer-events:auto;transition:top .2s linear,opacity .2s linear,visibility .2s linear;width:100%}:host .toast-content{padding:1rem}:host .toast-flex{align-items:flex-start;display:flex}:host .toast-icon-wrapper{flex-shrink:0}:host .toast-icon{align-items:center;display:flex;font-size:1.5rem;height:1.5rem;justify-content:center;width:1.5rem}:host .toast-message-wrapper{flex:1;margin-left:.75rem;padding-top:.125rem}:host .toast-title{color:var(--color-white);font-size:.875rem;font-weight:500;margin:0}:host .toast-message{color:var(--color-light);font-size:.875rem;margin-top:.25rem}:host .toast-close-wrapper{flex-shrink:0;margin-left:1rem}:host .toast-close-wrapper .sr-only{border-width:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host .toast-close-wrapper .toast-close-button{background-color:var(--color-slate-800);border:none;border-radius:.375rem;color:var(--text-muted);cursor:pointer;display:inline-flex;margin-right:-0.25rem;margin-top:-0.25rem;padding:.25rem;transition:color .2s}:host .toast-close-wrapper .toast-close-button:hover{color:var(--hover-light)}:host .toast-close-wrapper .toast-close-button:focus{box-shadow:0 0 0 2px var(--color-accent);outline:none}:host .toast-close-wrapper .toast-close-icon{align-items:center;display:flex;font-size:1.25rem;height:1.25rem;justify-content:center;width:1.25rem}:host([closing]){opacity:0;visibility:hidden}:host([type=success]) .toast-icon{color:var(--color-success)}:host([type=info]) .toast-icon{color:var(--color-info)}:host([type=warning]) .toast-icon{color:var(--color-warning)}:host([type=danger]) .toast-icon{color:var(--color-danger)}`;
    __getStatic() {
        return Toast;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Toast.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="toast-content">
    <div class="toast-flex">
        <div class="toast-icon-wrapper">
            <mi-icon class="toast-icon" aria-hidden="true" _id="toast_0"></mi-icon>
        </div>
        <div class="toast-message-wrapper">
            <p class="toast-title" _id="toast_1"></p>
            <template _id="toast_2"></template>
        </div>
        <div class="toast-close-wrapper">
            <button class="toast-close-button" _id="toast_4">
                <span class="sr-only">Close</span>
                <mi-icon icon="close" class="toast-close-icon"></mi-icon>
            </button>
        </div>
    </div>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "toast_0°icon": {
      "fct": (c) => `${c.print(c.comp.__7d0e796e41a97c78b09f71a4664c5f80method1())}`,
      "once": true
    },
    "toast_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__7d0e796e41a97c78b09f71a4664c5f80method2())}`,
      "once": true
    }
  },
  "events": [
    {
      "eventName": "click",
      "id": "toast_4",
      "fct": (e, c) => c.comp.close(e)
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
                <p class="toast-message" _id="toast_3"></p>
            `);
templ0.setActions({
  "content": {
    "toast_3°@HTML": {
      "fct": (c) => `${c.print(c.comp.__7d0e796e41a97c78b09f71a4664c5f80method3())}`,
      "once": true
    }
  }
});
this.__getStatic().__template.addIf({
                    anchorId: 'toast_2',
                    parts: [{once: true,
                    condition: (c) => c.comp.__7d0e796e41a97c78b09f71a4664c5f80method0(),
                    template: templ0
                }]
            });
 }
    getClassName() {
        return "Toast";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('type')){ this['type'] = "warning"; }
if(!this.hasAttribute('closing')) { this.attributeChangedCallback('closing', false, false); }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["toastTitle"] = "";
w["toastMessage"] = "";
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('type');
this.__upgradeProperty('closing');
this.__correctGetter('toastTitle');
this.__correctGetter('toastMessage');
 }
    __listBoolProps() { return ["closing"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    close() {
        if (this.onHideCallback) {
            this.closing = true;
            this.is_active = false;
            this.onHideCallback(false);
            Aventus.sleep(300).then(() => {
                this.remove();
            });
        }
    }
    setOptions(options) {
        if (options.type != undefined)
            this.type = options.type;
        if (options.icon != undefined)
            this.icon = options.icon;
        if (options.title != undefined)
            this.toastTitle = options.title;
        if (options.message != undefined)
            this.toastMessage = options.message;
    }
    getIcon() {
        if (this.icon !== undefined)
            return this.icon;
        if (this.type == "danger")
            return 'error';
        if (this.type == "info")
            return 'info';
        if (this.type == "success")
            return 'check';
        if (this.type == "warning")
            return 'warning';
        return 'error';
    }
    __7d0e796e41a97c78b09f71a4664c5f80method1() {
        return this.getIcon();
    }
    __7d0e796e41a97c78b09f71a4664c5f80method2() {
        return this.toastTitle;
    }
    __7d0e796e41a97c78b09f71a4664c5f80method3() {
        return this.toastMessage;
    }
    __7d0e796e41a97c78b09f71a4664c5f80method0() {
        return this.toastMessage;
    }
    static add(options) {
        return super.add(options);
    }
}
Toast.Namespace=`AventusStore`;
Toast.Tag=`as-toast`;
__as1(_, 'Toast', Toast);
if(!window.customElements.get('as-toast')){window.customElements.define('as-toast', Toast);Aventus.WebComponentInstance.registerDefinition(Toast);}

const SignupPage = class SignupPage extends Aventus.Navigation.Page {
    form;
    static __style = `:host{flex-direction:column;justify-content:center;padding:3rem 1rem}:host .signup-header{margin:0 auto;max-width:28rem;text-align:center;width:100%}:host .signup-title{color:var(--text-color);font-size:1.875rem;font-weight:700;margin-top:1.5rem}:host .signup-subtext{color:var(--text-muted);font-size:.875rem;margin-top:.5rem}:host .link-accent{color:var(--color-accent);font-weight:500;text-decoration:none}:host .link-accent:hover{color:var(--hover-accent)}:host .signup-form-wrapper{margin-left:auto;margin-right:auto;margin-top:2rem;max-width:28rem;width:100%}:host .signup-form-card{background-color:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;box-shadow:0 4px 12px rgba(0,0,0,.25);padding:2rem 1rem}:host .signup-form{display:flex;flex-direction:column;gap:1.5rem}:host .form-group{display:flex;flex-direction:column}:host .form-label{color:var(--text-muted);font-size:.875rem;font-weight:500;margin-bottom:.25rem}:host .form-field{margin-top:.25rem}:host .btn-full{width:100%}:host([visible]){display:flex}@media(min-width: 640px){:host .signup-form-card{padding:2rem 2.5rem}}`;
    constructor() {
        super();
        this.form = Aventus.Form.FormHandlerController.create(App.Http.Controllers.Auth.Signup.AuthSignupController, {
            email: Aventus.Form.Validators.Required,
            password: Aventus.Form.Validators.Required,
            username: Aventus.Form.Validators.Required
        }, {
            onSuccess: () => {
                this.form.item = {
                    email: "",
                    password: "",
                    username: ""
                };
                Toast.add({
                    type: "success",
                    title: "Account created",
                    message: "Check your mail to validate your account"
                });
                this.router?.navigate("/login");
            }
        });
    }
    __getStatic() {
        return SignupPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(SignupPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="signup-header">
    <h2 class="signup-title">Create a new account</h2>
    <p class="signup-subtext">
        <span>Or&nbsp;</span>
        <av-router-link state="/login" class="link-accent">
            sign in to your existing account
        </av-router-link>
    </p>
</div><div class="signup-form-wrapper">
    <div class="signup-form-card">
        <av-form class="signup-form">
            <as-input id="username" label="Username" _id="signuppage_0"></as-input>
            <as-input id="email" label="Email" _id="signuppage_1"></as-input>
            <as-input id="password" label="Password" type="password" _id="signuppage_2"></as-input>
            <as-button type="submit" class="btn-full">Create account</as-button>
        </av-form>
    </div>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "injection": [
    {
      "id": "signuppage_0",
      "injectionName": "form",
      "inject": (c) => c.comp.__97e8b20e4871beaccfd7ae6d7f572c4bmethod0(),
      "once": true
    },
    {
      "id": "signuppage_1",
      "injectionName": "form",
      "inject": (c) => c.comp.__97e8b20e4871beaccfd7ae6d7f572c4bmethod1(),
      "once": true
    },
    {
      "id": "signuppage_2",
      "injectionName": "form",
      "inject": (c) => c.comp.__97e8b20e4871beaccfd7ae6d7f572c4bmethod2(),
      "once": true
    }
  ]
});
 }
    getClassName() {
        return "SignupPage";
    }
    configure() {
        return {};
    }
    isAllowed(state) {
        if (Main.user) {
            return "/";
        }
        return true;
    }
    __97e8b20e4871beaccfd7ae6d7f572c4bmethod0() {
        return this.form.parts.username;
    }
    __97e8b20e4871beaccfd7ae6d7f572c4bmethod1() {
        return this.form.parts.email;
    }
    __97e8b20e4871beaccfd7ae6d7f572c4bmethod2() {
        return this.form.parts.password;
    }
}
SignupPage.Namespace=`AventusStore`;
SignupPage.Tag=`as-signup-page`;
__as1(_, 'SignupPage', SignupPage);
if(!window.customElements.get('as-signup-page')){window.customElements.define('as-signup-page', SignupPage);Aventus.WebComponentInstance.registerDefinition(SignupPage);}

const Modal = class Modal extends Aventus.Modal.ModalElement {
    static __style = `:host{align-items:center;background:var(--color-black-opacity);display:flex;inset:0;justify-content:center;position:fixed;z-index:60}:host .modal{background-color:var(--bg-surface);border:1px solid var(--border);border-radius:.75rem;box-shadow:0 25px 50px rgba(0,0,0,.25);max-width:32rem;padding:1.5rem;position:relative;text-align:left;transform:translateZ(0);transition:all .2s ease-in-out;width:100%}:host .modal-header{align-items:flex-start;display:flex;justify-content:space-between}:host .modal-title{color:var(--color-white);font-size:1.25rem;font-weight:600;line-height:1.5rem;margin:0}:host .close-button{margin-top:-0.75rem;margin-right:-0.75rem}:host .close-button:hover{background:var(--color-secondary);color:var(--color-white)}:host .close-button:focus{box-shadow:0 0 0 2px var(--color-accent);outline:none}:host .icon{height:1.5rem;width:1.5rem;font-size:1.5rem;display:flex}:host .modal-body{color:var(--color-light);margin-top:1rem}:host .modal-body ::slotted(p){margin-bottom:1rem}`;
    constructor() {
        super();
        if (this.constructor == Modal) {
            throw "can't instanciate an abstract class";
        }
    }
    __getStatic() {
        return Modal;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Modal.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot>
    </slot>` }, 
        blocks: { 'default':`<div class="modal-header">
    <h3 class="modal-title" id="modal-title" _id="modal_0"></h3>
    <template _id="modal_1"></template>
</div><div class="modal-body">
    <slot>
    </slot>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "modal_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__00bfa3bc03a20d8089bc8969af170611method1())}`,
      "once": true
    }
  }
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
        <as-button type="button" variant="ghost" class="close-button" aria-label="Close" _id="modal_2">
            <mi-icon icon="close" class="close"></mi-icon>
        </as-button>
    `);
templ0.setActions({
  "pressEvents": [
    {
      "id": "modal_2",
      "onPress": (e, pressInstance, c) => { c.comp.reject(e, pressInstance); }
    }
  ]
});
this.__getStatic().__template.addIf({
                    anchorId: 'modal_1',
                    parts: [{once: true,
                    condition: (c) => c.comp.__00bfa3bc03a20d8089bc8969af170611method0(),
                    template: templ0
                }]
            });
 }
    getClassName() {
        return "Modal";
    }
    __00bfa3bc03a20d8089bc8969af170611method1() {
        return this.options.title;
    }
    __00bfa3bc03a20d8089bc8969af170611method0() {
        return !this.options.noClose;
    }
}
Modal.Namespace=`AventusStore`;
__as1(_, 'Modal', Modal);

const ModalCreateOrg = class ModalCreateOrg extends Modal {
    static get observedAttributes() {return ["uri"].concat(super.observedAttributes).filter((v, i, a) => a.indexOf(v) === i);}
    get 'uri'() { return this.getStringProp('uri') }
    set 'uri'(val) { this.setStringAttr('uri', val) }
    form;
    static __style = `:host .modal{background-color:var(--bg-color);max-width:800px}:host .modal .modal-body{margin-top:2rem}:host .modal av-row{--col-gap: 16px}:host .modal as-input{width:100%}:host .modal .avatar{align-items:center;border:2px solid var(--border);border-radius:9999px;cursor:pointer;display:flex;height:8rem;justify-content:center;overflow:hidden;position:relative;transition:border .2s ease-in-out;width:8rem}:host .modal .avatar .bg{width:100%;height:100%;background-position:center center;background-repeat:no-repeat;background-size:cover}:host .modal .avatar mi-icon{color:#fff;font-size:32px}:host .modal .avatar input{display:none}:host .modal .info{display:flex;flex-direction:column;gap:16px}:host .modal .btns{align-items:center;display:flex;gap:.5rem;justify-content:flex-end;margin-top:.5rem;width:100%}`;
    constructor() {
        super();
        this.form = Aventus.Form.Form.create({
            bio: {},
            name: Aventus.Form.Validators.Required,
            picture: {}
        });
    }
    __getStatic() {
        return ModalCreateOrg;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ModalCreateOrg.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<av-row>
    <av-col size="12" size_md="6" center>
        <div class="avatar" _id="modalcreateorg_0">
            <template _id="modalcreateorg_1"></template>
            <input type="file" accept="image/png, image/gif, image/jpeg, image/svg+xml" _id="modalcreateorg_3" />
        </div>
    </av-col>
    <av-col size="12" size_md="6" class="info">
        <as-input label="Name" _id="modalcreateorg_4"></as-input>
        <as-input label="Bio" _id="modalcreateorg_5"></as-input>
    </av-col>
    <div class="btns">
        <as-button variant="secondary" _id="modalcreateorg_6">Cancel</as-button>
        <as-button _id="modalcreateorg_7">Save</as-button>
    </div>
</av-row>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "uploadPictrueEl",
      "ids": [
        "modalcreateorg_3"
      ]
    }
  ],
  "injection": [
    {
      "id": "modalcreateorg_4",
      "injectionName": "form",
      "inject": (c) => c.comp.__1866c25329103211c52baff0e955ddc8method2(),
      "once": true
    },
    {
      "id": "modalcreateorg_5",
      "injectionName": "form",
      "inject": (c) => c.comp.__1866c25329103211c52baff0e955ddc8method3(),
      "once": true
    }
  ],
  "events": [
    {
      "eventName": "change",
      "id": "modalcreateorg_3",
      "fct": (e, c) => c.comp.uploadFile(e)
    }
  ],
  "pressEvents": [
    {
      "id": "modalcreateorg_0",
      "onPress": (e, pressInstance, c) => { c.comp.editPicture(e, pressInstance); }
    },
    {
      "id": "modalcreateorg_6",
      "onPress": (e, pressInstance, c) => { c.comp.cancel(e, pressInstance); }
    },
    {
      "id": "modalcreateorg_7",
      "onPress": (e, pressInstance, c) => { c.comp.save(e, pressInstance); }
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
                <div class="bg" _id="modalcreateorg_2"></div>
            `);
templ0.setActions({
  "content": {
    "modalcreateorg_2°style": {
      "fct": (c) => `background-image:url('${c.print(c.comp.__1866c25329103211c52baff0e955ddc8method1())}')`,
      "once": true
    }
  }
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
                <mi-icon icon="photo_camera"></mi-icon>
            `);
this.__getStatic().__template.addIf({
                    anchorId: 'modalcreateorg_1',
                    parts: [{once: true,
                    condition: (c) => c.comp.__1866c25329103211c52baff0e955ddc8method0(),
                    template: templ0
                },{once: true,
                    condition: (c) => true,
                    template: templ1
                }]
            });
 }
    getClassName() {
        return "ModalCreateOrg";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('uri')){ this['uri'] = undefined; }
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('uri');
 }
    configure() {
        return {
            title: "Organization creation",
            closeWithClick: false,
            closeWithEsc: true,
        };
    }
    async uploadFile() {
        if (this.uploadPictrueEl.files && this.uploadPictrueEl.files.length > 0) {
            this.uri = URL.createObjectURL(this.uploadPictrueEl.files[0]);
            this.form.item.picture = this.uploadPictrueEl.files[0];
        }
    }
    editPicture() {
        this.uploadPictrueEl.click();
    }
    cancel() {
        this.resolve(undefined);
    }
    async save() {
        const result = await this.form.submit(new App.Http.Controllers.Org.Create.OrgCreateController().request);
        if (result?.result) {
            this.resolve(result.result);
        }
    }
    __1866c25329103211c52baff0e955ddc8method1() {
        return this.uri;
    }
    __1866c25329103211c52baff0e955ddc8method0() {
        return this.uri;
    }
    __1866c25329103211c52baff0e955ddc8method2() {
        return this.form.parts.name;
    }
    __1866c25329103211c52baff0e955ddc8method3() {
        return this.form.parts.bio;
    }
}
ModalCreateOrg.Namespace=`AventusStore`;
ModalCreateOrg.Tag=`as-modal-create-org`;
__as1(_, 'ModalCreateOrg', ModalCreateOrg);
if(!window.customElements.get('as-modal-create-org')){window.customElements.define('as-modal-create-org', ModalCreateOrg);Aventus.WebComponentInstance.registerDefinition(ModalCreateOrg);}

const ModalEditBio = class ModalEditBio extends Modal {
    get 'value'() {
						return this.__watch["value"];
					}
					set 'value'(val) {
						this.__watch["value"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("value");
    super.__registerWatchesActions();
}
    static __style = `:host .footer{display:flex;justify-content:flex-end;margin-top:1rem;gap:.5rem}`;
    __getStatic() {
        return ModalEditBio;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(ModalEditBio.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<as-input label="Description" _id="modaleditbio_0"></as-input><div class="footer">
    <as-button variant="secondary" _id="modaleditbio_1">Cancel</as-button>
    <as-button _id="modaleditbio_2">Save</as-button>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "bindings": [
    {
      "id": "modaleditbio_0",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__539b4394c72ee2ff84aa0d4262a8d476method0(),
      "extract": (c, v) => c.comp.__539b4394c72ee2ff84aa0d4262a8d476method1(v),
      "once": true,
      "isCallback": true
    }
  ],
  "pressEvents": [
    {
      "id": "modaleditbio_1",
      "onPress": (e, pressInstance, c) => { c.comp.reject(e, pressInstance); }
    },
    {
      "id": "modaleditbio_2",
      "onPress": (e, pressInstance, c) => { c.comp.save(e, pressInstance); }
    }
  ]
});
 }
    getClassName() {
        return "ModalEditBio";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["value"] = "";
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('value');
 }
    save() {
        this.resolve(this.value);
    }
    configure() {
        return {
            title: "Edit your description",
            closeWithClick: false,
            closeWithEsc: true,
            rejectValue: null,
        };
    }
    __539b4394c72ee2ff84aa0d4262a8d476method0() {
        return this.value;
    }
    __539b4394c72ee2ff84aa0d4262a8d476method1(v) {
        if (this) {
            this.value = v;
        }
    }
}
ModalEditBio.Namespace=`AventusStore`;
ModalEditBio.Tag=`as-modal-edit-bio`;
__as1(_, 'ModalEditBio', ModalEditBio);
if(!window.customElements.get('as-modal-edit-bio')){window.customElements.define('as-modal-edit-bio', ModalEditBio);Aventus.WebComponentInstance.registerDefinition(ModalEditBio);}

const EditMarkdownModal = class EditMarkdownModal extends Modal {
    get 'content'() {
						return this.__signals["content"].value;
					}
					set 'content'(val) {
						this.__signals["content"].value = val;
					}
    __registerSignalsActions() { this.__signals["content"] = null;
 super.__registerSignalsActions();  }
    static __style = `:host .modal{background-color:var(--bg-color);height:100%;max-height:90%;max-width:90%}:host .modal .modal-body{display:flex;flex-direction:column;height:calc(100% - 30px);min-height:0}:host .modal .modal-body .body{display:flex;flex-grow:1;gap:12px;width:100%;height:calc(100% - 35px)}:host .modal .modal-body .body .left,:host .modal .modal-body .body .right{display:flex;flex-direction:column;height:100%;min-height:0;width:calc(50% - 6px)}:host .modal .modal-body .body .left .label,:host .modal .modal-body .body .right .label{flex-shrink:0;margin-bottom:6px}:host .modal .modal-body .body .edit{background-color:var(--input-bg);border:1px solid var(--input-border);border-radius:.375rem;color:var(--input-text);display:flex;flex-grow:1;font-size:.875rem;height:100%;padding:.5rem .75rem;resize:none;width:100%}:host .modal .modal-body .body .render{background-color:#1e293b;border:1px solid var(--color-secondary);border-radius:.5rem;color:var(--text-color);flex-grow:1;font-family:monospace;font-size:.875rem;height:100%;overflow:auto;padding:1rem;position:relative;width:100%}:host .modal .modal-body .footer{align-items:center;display:flex;flex-shrink:0;gap:12px;justify-content:flex-end;margin-top:16px}`;
    __getStatic() {
        return EditMarkdownModal;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(EditMarkdownModal.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="body">
    <div class="left">
        <div class="label">Edit</div>
        <textarea class="edit" _id="editmarkdownmodal_0"></textarea>
    </div>
    <div class="right">
        <div class="label">Render</div>
        <div class="render" _id="editmarkdownmodal_1"></div>
    </div>
</div><div class="footer">
    <as-button variant="secondary" _id="editmarkdownmodal_2">Cancel</as-button>
    <as-button _id="editmarkdownmodal_3">Save</as-button>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "editmarkdownmodal_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__1aaaa5049af509b64054cba1c382e132method2())}`,
      "once": true
    }
  },
  "bindings": [
    {
      "id": "editmarkdownmodal_0",
      "injectionName": "value",
      "eventNames": [
        "change",
        "input"
      ],
      "inject": (c) => c.comp.__1aaaa5049af509b64054cba1c382e132method0(),
      "extract": (c, v) => c.comp.__1aaaa5049af509b64054cba1c382e132method1(v),
      "once": true
    }
  ],
  "pressEvents": [
    {
      "id": "editmarkdownmodal_2",
      "onPress": (e, pressInstance, c) => { c.comp.reject(e, pressInstance); }
    },
    {
      "id": "editmarkdownmodal_3",
      "onPress": (e, pressInstance, c) => { c.comp.save(e, pressInstance); }
    }
  ]
});
 }
    getClassName() {
        return "EditMarkdownModal";
    }
    __defaultValuesSignal(s) { super.__defaultValuesSignal(s); s["content"] = "";
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('content');
 }
    configure() {
        return {
            title: "Edit markdown",
            closeWithClick: false,
            closeWithEsc: false,
            rejectValue: null,
        };
    }
    renderContent() {
        let converter = new npmCompilation['115c87258963fd94d34e6a96a9c4d27d'].Converter({});
        return converter.makeHtml(this.content);
    }
    save() {
        this.resolve(this.content);
    }
    __1aaaa5049af509b64054cba1c382e132method2() {
        return this.renderContent();
    }
    __1aaaa5049af509b64054cba1c382e132method0() {
        return this.content;
    }
    __1aaaa5049af509b64054cba1c382e132method1(v) {
        if (this) {
            this.content = v;
        }
    }
}
EditMarkdownModal.Namespace=`AventusStore`;
EditMarkdownModal.Tag=`as-edit-markdown-modal`;
__as1(_, 'EditMarkdownModal', EditMarkdownModal);
if(!window.customElements.get('as-edit-markdown-modal')){window.customElements.define('as-edit-markdown-modal', EditMarkdownModal);Aventus.WebComponentInstance.registerDefinition(EditMarkdownModal);}

const Confirm = class Confirm extends Modal {
    static __style = `:host .footer{display:flex;justify-content:flex-end;margin-top:1rem;gap:.5rem}`;
    __getStatic() {
        return Confirm;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Confirm.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="content" _id="confirm_0"></div><div class="footer">
    <as-button variant="secondary" _id="confirm_1"></as-button>
    <as-button _id="confirm_2"></as-button>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "confirm_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__876296062cc683db1f5b0238841ea050method0())}`,
      "once": true
    },
    "confirm_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__876296062cc683db1f5b0238841ea050method1())}`,
      "once": true
    },
    "confirm_2°@HTML": {
      "fct": (c) => `${c.print(c.comp.__876296062cc683db1f5b0238841ea050method2())}`,
      "once": true
    }
  },
  "pressEvents": [
    {
      "id": "confirm_1",
      "onPress": (e, pressInstance, c) => { c.comp.no(e, pressInstance); }
    },
    {
      "id": "confirm_2",
      "onPress": (e, pressInstance, c) => { c.comp.yes(e, pressInstance); }
    }
  ]
});
 }
    getClassName() {
        return "Confirm";
    }
    configure() {
        return {
            title: "I'm a confirm popup",
            content: "lorem",
            btnYesTxt: "Yes",
            btnNoTxt: "No",
            noClose: true
        };
    }
    no() {
        this.resolve(false);
    }
    yes() {
        this.resolve(true);
    }
    __876296062cc683db1f5b0238841ea050method0() {
        return this.options.content;
    }
    __876296062cc683db1f5b0238841ea050method1() {
        return this.options.btnNoTxt;
    }
    __876296062cc683db1f5b0238841ea050method2() {
        return this.options.btnYesTxt;
    }
    static async open(options) {
        const popup = new Confirm();
        popup.options = { ...popup.options, ...options };
        return await Confirm._show(popup);
    }
}
Confirm.Namespace=`AventusStore`;
Confirm.Tag=`as-confirm`;
__as1(_, 'Confirm', Confirm);
if(!window.customElements.get('as-confirm')){window.customElements.define('as-confirm', Confirm);Aventus.WebComponentInstance.registerDefinition(Confirm);}

const TemplateDetailsPage = class TemplateDetailsPage extends Aventus.Navigation.Page {
    get 'no_right'() { return this.getBoolAttr('no_right') }
    set 'no_right'(val) { this.setBoolAttr('no_right', val) }
get 'admin'() { return this.getBoolAttr('admin') }
    set 'admin'(val) { this.setBoolAttr('admin', val) }
    get 'template'() {
						return this.__watch["template"];
					}
					set 'template'(val) {
						this.__watch["template"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("template");
    super.__registerWatchesActions();
}
    static __style = `:host{margin:0 auto;max-width:80rem;padding:3rem 2rem}:host .template-header{border-bottom:1px solid var(--color-secondary);display:flex;gap:16px;justify-content:stretch;padding-bottom:2rem}:host .template-header .template-left{flex-grow:1}:host .template-header .template-left .template-title{color:var(--text-color);font-size:2.25rem;font-weight:800}:host .template-header .template-left .template-description{color:var(--text-muted);font-size:1.25rem;margin-top:1rem}:host .template-header .template-left .template-tags{display:flex;flex-wrap:wrap;gap:.5rem}:host .template-header .template-left .template-tags .template-tag{background-color:var(--tag-bg);border-radius:.25rem;color:var(--tag-text);cursor:pointer;font-size:.8rem;font-weight:500;padding:.5rem .75rem;transition:background-color .2s ease-in-out}:host .template-header .template-left .template-tags .template-tag:hover{background-color:var(--tag-bg-hover)}:host .template-header .template-left .template-meta{align-items:center;display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:1.5rem}:host .template-header .template-left .author-link{align-items:center;display:flex;font-size:.875rem;gap:.5rem;text-decoration:none}:host .template-header .template-left .author-link .author-avatar{border-radius:9999px;font-size:12px;height:2rem;letter-spacing:0px;width:2rem}:host .template-header .template-left .author-link .author-name{color:var(--text-color);font-weight:600;transition:color .2s ease-in-out}:host .template-header .template-left .author-link:hover .author-name{color:var(--color-accent)}:host .template-header .template-left .template-version{background-color:#1e293b;border-radius:.25rem;font-family:monospace;font-size:.875rem;padding:.25rem .5rem}:host .template-header .template-left .template-downloads{align-items:center;color:var(--text-muted);display:flex;font-size:.875rem;gap:.5rem}:host .template-header .template-left .template-download-button{margin-top:1.5rem}:host .template-header .template-left .template-download-button .btns{display:flex;gap:12px}:host .template-header .template-left .template-download-button .btns .delete-btn{--button-bg-color: var(--color-danger);--button-hover-bg-color: var(--hover-danger)}:host .template-header .template-right{border-left:1px solid var(--color-secondary);display:flex;flex-direction:column;flex-shrink:0;width:400px}:host .template-header .template-right .link{border-bottom:1px solid var(--color-secondary);margin:0 16px;padding:16px}:host .template-header .template-right .link .link-title{color:var(--text-muted)}:host .template-header .template-right .link .link-info{display:flex;gap:12px;margin-top:12px}:host .template-header .template-right .link .link-info a{color:inherit;font-size:15px;text-decoration:none}:host .template-header .template-right .link .link-info a:hover{color:var(--color-accent)}:host .template-header .template-right .link:last-child{border-bottom:none}:host .icon-sm{align-items:center;display:flex;font-size:1.25rem;height:1.25rem;justify-content:center;width:1.25rem}:host .mr-2{margin-right:.5rem}:host .template-readme{background-color:#1e293b;border:1px solid var(--color-secondary);border-radius:.5rem;color:var(--text-color);font-family:monospace;font-size:.875rem;margin-top:2rem;overflow-x:auto;padding:1rem;position:relative}:host .template-readme mi-icon.edit-btn{cursor:pointer;position:absolute;right:1rem;top:1rem}:host .template-readme a{color:var(--color-accent)}:host .template-readme:empty{display:none}:host([no_right]) .template-header .template-right{display:none}:host([admin]) .template-readme{min-height:4rem}`;
    __getStatic() {
        return TemplateDetailsPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(TemplateDetailsPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<header class="template-header">
    <div class="template-left">
        <h1 class="template-title" _id="templatedetailspage_0"></h1>
        <p class="template-description" _id="templatedetailspage_1"></p>
        <div class="template-tags">
            <template _id="templatedetailspage_2"></template>
        </div>
        <div class="template-meta">
            <av-router-link class="author-link" _id="templatedetailspage_4">
                <as-user-img class="author-avatar" _id="templatedetailspage_5"></as-user-img>
                <span class="author-name" _id="templatedetailspage_6"></span>
            </av-router-link>
            <div class="template-version" _id="templatedetailspage_7"></div>
            <div class="template-downloads">
                <mi-icon icon="download" class="icon-sm"></mi-icon>
                <span _id="templatedetailspage_8"></span>
            </div>
        </div>
        <div class="template-download-button">
            <div class="btns">
                <a _id="templatedetailspage_9">
                    <as-button>
                        <mi-icon icon="download" class="icon-sm mr-2"></mi-icon>
                        <span>Download</span>
                    </as-button>
                </a>
                <template _id="templatedetailspage_10"></template>
            </div>
        </div>
    </div>
    <div class="template-right">
        <template _id="templatedetailspage_12"></template>
        <template _id="templatedetailspage_14"></template>
    </div>
</header><template _id="templatedetailspage_16"></template>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "templatedetailspage_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method5())}`,
      "once": true
    },
    "templatedetailspage_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method6())}`,
      "once": true
    },
    "templatedetailspage_4°state": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method8())}`
    },
    "templatedetailspage_6°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method10())}`,
      "once": true
    },
    "templatedetailspage_7°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method11())}`,
      "once": true
    },
    "templatedetailspage_8°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method12())} downloads`,
      "once": true
    },
    "templatedetailspage_9°href": {
      "fct": (c) => `vscode://cobwebsite.aventus/template/download?url=${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method13())}`,
      "once": true
    }
  },
  "injection": [
    {
      "id": "templatedetailspage_5",
      "injectionName": "user",
      "inject": (c) => c.comp.__de96e0640d4de42f59926e8b87571d87method9(),
      "once": true
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(` 
                <span class="template-tag" _id="templatedetailspage_3"></span>
            `);
templ0.setActions({
  "content": {
    "templatedetailspage_3°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method7(c.data.tag))}`,
      "once": true
    }
  },
  "pressEvents": [
    {
      "id": "templatedetailspage_3",
      "onPress": (e, pressInstance, c) => { c.comp.searchTag(e, pressInstance); }
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'templatedetailspage_2',
                    template: templ0,
                simple:{data: "this.template.tags",item:"tag"}
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
                    <as-button class="delete-btn" _id="templatedetailspage_11">
                        <mi-icon icon="delete" class="icon-sm mr-2"></mi-icon>
                        <span>Delete</span>
                    </as-button>
                `);
templ1.setActions({
  "pressEvents": [
    {
      "id": "templatedetailspage_11",
      "onPress": (e, pressInstance, c) => { c.comp.deleteTemplate(e, pressInstance); }
    }
  ]
});
this.__getStatic().__template.addIf({
                    anchorId: 'templatedetailspage_10',
                    parts: [{once: true,
                    condition: (c) => c.comp.__de96e0640d4de42f59926e8b87571d87method1(),
                    template: templ1
                }]
            });
const templ2 = new Aventus.Template(this);
templ2.setTemplate(`
            <div class="link">
                <div class="link-title">Repository</div>
                <div class="link-info">
                    <mi-icon icon="commit"></mi-icon>
                    <a target="_blank" _id="templatedetailspage_13"></a>
                </div>
            </div>
        `);
templ2.setActions({
  "content": {
    "templatedetailspage_13°href": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method14())}`,
      "once": true
    },
    "templatedetailspage_13°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method15())}`
    }
  }
});
this.__getStatic().__template.addIf({
                    anchorId: 'templatedetailspage_12',
                    parts: [{once: true,
                    condition: (c) => c.comp.__de96e0640d4de42f59926e8b87571d87method2(),
                    template: templ2
                }]
            });
const templ3 = new Aventus.Template(this);
templ3.setTemplate(`
            <div class="link">
                <div class="link-title">Documentation</div>
                <div class="link-info">
                    <mi-icon icon="book_4"></mi-icon>
                    <a target="_blank" _id="templatedetailspage_15"></a>
                </div>
            </div>
        `);
templ3.setActions({
  "content": {
    "templatedetailspage_15°href": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method16())}`,
      "once": true
    },
    "templatedetailspage_15°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method17())}`
    }
  }
});
this.__getStatic().__template.addIf({
                    anchorId: 'templatedetailspage_14',
                    parts: [{once: true,
                    condition: (c) => c.comp.__de96e0640d4de42f59926e8b87571d87method3(),
                    template: templ3
                }]
            });
const templ4 = new Aventus.Template(this);
templ4.setTemplate(`
    <div class="template-readme">
        <div _id="templatedetailspage_17"></div>
        <mi-icon icon="edit" class="edit-btn" _id="templatedetailspage_18"></mi-icon>
    </div>
`);
templ4.setActions({
  "content": {
    "templatedetailspage_17°@HTML": {
      "fct": (c) => `\n            ${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method18())}\n        `,
      "once": true
    }
  },
  "pressEvents": [
    {
      "id": "templatedetailspage_18",
      "onPress": (e, pressInstance, c) => { c.comp.editMarkdown(e, pressInstance); }
    }
  ]
});
const templ5 = new Aventus.Template(this);
templ5.setTemplate(`
    <div class="template-readme" _id="templatedetailspage_19"></div>
`);
templ5.setActions({
  "content": {
    "templatedetailspage_19°@HTML": {
      "fct": (c) => `${c.print(c.comp.__de96e0640d4de42f59926e8b87571d87method18())}`,
      "once": true
    }
  }
});
this.__getStatic().__template.addIf({
                    anchorId: 'templatedetailspage_16',
                    parts: [{once: true,
                    condition: (c) => c.comp.__de96e0640d4de42f59926e8b87571d87method4(),
                    template: templ4
                },{once: true,
                    condition: (c) => true,
                    template: templ5
                }]
            });
 }
    getClassName() {
        return "TemplateDetailsPage";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_right')) { this.attributeChangedCallback('no_right', false, false); }
if(!this.hasAttribute('admin')) { this.attributeChangedCallback('admin', false, false); }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["template"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_right');
this.__upgradeProperty('admin');
this.__correctGetter('template');
 }
    __listBoolProps() { return ["no_right","admin"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    configure() {
        return {};
    }
    async isAllowed(state, pattern, router) {
        let slugs = Aventus.Uri.getParams(pattern, state.name);
        if (slugs && slugs['id']) {
            let data = await Aventus.Process.execute(new App.Http.Controllers.Template.Details.TemplateDetailsController().request(slugs['id']));
            if (data) {
                this.template = data;
                this.no_right = (data.doc == undefined && data.repos == undefined);
                this.admin = data.isOwner;
                return true;
            }
        }
        return '/not_found';
    }
    getReadMe() {
        if (!this.template)
            return "";
        let converter = new npmCompilation['115c87258963fd94d34e6a96a9c4d27d'].Converter({});
        return converter.makeHtml(this.template.readme);
    }
    getDownloadUri() {
        return location.protocol + "//" + location.host + "/template/download/" + this.template.name + "/" + this.template.version;
    }
    searchTag(e, press) {
        let state = new TemplatesPageState();
        state.search = "#" + press.getElement().innerHTML;
        Main.instance.navigate(state);
    }
    async deleteTemplate() {
        const result = await Confirm.open({
            title: "Confirm Template Deletion",
            content: "Are you sure you want to delete this template? This action cannot be undone."
        });
        if (result) {
            const result = await Aventus.Process.execute(new App.Http.Controllers.Template.Delete.TemplateDeleteController().request(this.template.name));
            if (result?.success) {
                location.href = "/profile";
            }
        }
    }
    async editMarkdown() {
        const modal = new EditMarkdownModal();
        modal.content = this.template.readme ?? "";
        const result = await modal.show();
        if (result != null) {
            const request = await Aventus.Process.execute(new App.Http.Controllers.Template.Edit.Readme.TemplateEditReadmeController().request(this.template.name, { readme: result }));
            if (request?.success) {
                this.template.readme = result;
            }
        }
    }
    onShow() {
        super.onShow();
    }
    postCreation() {
        super.postCreation();
    }
    __de96e0640d4de42f59926e8b87571d87method5() {
        return this.template.name;
    }
    __de96e0640d4de42f59926e8b87571d87method6() {
        return this.template.description;
    }
    __de96e0640d4de42f59926e8b87571d87method7(tag) {
        return tag;
    }
    __de96e0640d4de42f59926e8b87571d87method8() {
        return this.template.isUser ? '/user/' + this.template.fromName : '/org/' + this.template.fromName;
    }
    __de96e0640d4de42f59926e8b87571d87method10() {
        return this.template.fromName;
    }
    __de96e0640d4de42f59926e8b87571d87method11() {
        return this.template.version;
    }
    __de96e0640d4de42f59926e8b87571d87method12() {
        return this.template.downloads;
    }
    __de96e0640d4de42f59926e8b87571d87method13() {
        return this.getDownloadUri();
    }
    __de96e0640d4de42f59926e8b87571d87method14() {
        return this.template.repos;
    }
    __de96e0640d4de42f59926e8b87571d87method15() {
        return this.template.repos?.replace("https://", "");
    }
    __de96e0640d4de42f59926e8b87571d87method16() {
        return this.template.doc;
    }
    __de96e0640d4de42f59926e8b87571d87method17() {
        return this.template.doc?.replace("https://", "");
    }
    __de96e0640d4de42f59926e8b87571d87method18() {
        return this.getReadMe();
    }
    __de96e0640d4de42f59926e8b87571d87method1() {
        return this.template.isOwner;
    }
    __de96e0640d4de42f59926e8b87571d87method2() {
        return this.template.repos;
    }
    __de96e0640d4de42f59926e8b87571d87method3() {
        return this.template.doc;
    }
    __de96e0640d4de42f59926e8b87571d87method4() {
        return this.template.isOwner;
    }
    __de96e0640d4de42f59926e8b87571d87method9() {
        return { username: this.template.fromName, picture: { 'uri': this.template.fromImg } };
    }
}
TemplateDetailsPage.Namespace=`AventusStore`;
TemplateDetailsPage.Tag=`as-template-details-page`;
__as1(_, 'TemplateDetailsPage', TemplateDetailsPage);
if(!window.customElements.get('as-template-details-page')){window.customElements.define('as-template-details-page', TemplateDetailsPage);Aventus.WebComponentInstance.registerDefinition(TemplateDetailsPage);}

const PackageDetailsPage = class PackageDetailsPage extends Aventus.Navigation.Page {
    get 'show_download'() { return this.getBoolAttr('show_download') }
    set 'show_download'(val) { this.setBoolAttr('show_download', val) }
get 'no_right'() { return this.getBoolAttr('no_right') }
    set 'no_right'(val) { this.setBoolAttr('no_right', val) }
get 'admin'() { return this.getBoolAttr('admin') }
    set 'admin'(val) { this.setBoolAttr('admin', val) }
    get 'package'() {
						return this.__watch["package"];
					}
					set 'package'(val) {
						this.__watch["package"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("package");
    super.__registerWatchesActions();
}
    static __style = `:host{margin:0 auto;max-width:80rem;padding:3rem 2rem}:host .package-header{border-bottom:1px solid var(--color-secondary);display:flex;gap:16px;justify-content:stretch;padding-bottom:2rem}:host .package-header .package-left{flex-grow:1}:host .package-header .package-left .package-title{color:var(--text-color);font-size:2.25rem;font-weight:800}:host .package-header .package-left .package-description{color:var(--text-muted);font-size:1.25rem;margin-top:1rem}:host .package-header .package-left .package-tags{display:flex;flex-wrap:wrap;gap:.5rem}:host .package-header .package-left .package-tags .package-tag{background-color:var(--tag-bg);border-radius:.25rem;color:var(--tag-text);cursor:pointer;font-size:.8rem;font-weight:500;padding:.5rem .75rem;transition:background-color .2s ease-in-out}:host .package-header .package-left .package-tags .package-tag:hover{background-color:var(--tag-bg-hover)}:host .package-header .package-left .package-meta{align-items:center;display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:1.5rem}:host .package-header .package-left .package-meta .author-link{align-items:center;display:flex;font-size:.875rem;gap:.5rem;text-decoration:none}:host .package-header .package-left .package-meta .author-link .author-avatar{border-radius:9999px;font-size:12px;height:2rem;letter-spacing:0px;width:2rem}:host .package-header .package-left .package-meta .author-link .author-name{color:var(--text-color);font-weight:600;transition:color .2s ease-in-out}:host .package-header .package-left .package-meta .author-link:hover .author-name{color:var(--color-accent)}:host .package-header .package-left .package-meta .package-version{background-color:#1e293b;border-radius:.25rem;font-family:monospace;font-size:.875rem;padding:.25rem .5rem}:host .package-header .package-left .package-meta .package-downloads{align-items:center;color:var(--text-muted);display:flex;font-size:.875rem;gap:.5rem}:host .package-header .package-left .package-download-button{margin-top:1.5rem}:host .package-header .package-left .package-download-button .btns{display:flex;gap:12px}:host .package-header .package-left .package-download-button .btns .delete-btn{--button-bg-color: var(--color-danger);--button-hover-bg-color: var(--hover-danger)}:host .package-header .package-left .package-download-button .download-ligne{align-items:center;background-color:#1e293b;border:1px solid var(--color-secondary);border-radius:.5rem;color:var(--text-color);display:flex;font-family:monospace;font-size:.875rem;margin-top:.5rem;padding:16px}:host .package-header .package-left .package-download-button .download-ligne .ligne{flex-grow:1}:host .package-header .package-left .package-download-button .download-ligne .copy{align-items:center;border-radius:.5rem;cursor:pointer;display:flex;flex-shrink:0;justify-content:center}:host .package-header .package-left .package-download-button .download-ligne .copy mi-icon{font-size:18px;padding:8px}:host .package-header .package-left .package-download-button .download-ligne .copy:hover{background-color:var(--hover-secondary)}:host .package-header .package-right{border-left:1px solid var(--color-secondary);display:flex;flex-direction:column;flex-shrink:0;width:400px}:host .package-header .package-right .link{border-bottom:1px solid var(--color-secondary);margin:0 16px;padding:16px}:host .package-header .package-right .link .link-title{color:var(--text-muted)}:host .package-header .package-right .link .link-info{display:flex;gap:12px;margin-top:12px}:host .package-header .package-right .link .link-info a{color:inherit;font-size:15px;text-decoration:none}:host .package-header .package-right .link .link-info a:hover{color:var(--color-accent)}:host .package-header .package-right .link:last-child{border-bottom:none}:host .icon-sm{align-items:center;display:flex;font-size:1.25rem;height:1.25rem;justify-content:center;width:1.25rem}:host .mr-2{margin-right:.5rem}:host .package-readme{background-color:#1e293b;border:1px solid var(--color-secondary);border-radius:.5rem;color:var(--text-color);font-family:monospace;font-size:.875rem;margin-top:2rem;overflow-x:auto;padding:1rem;position:relative}:host .package-readme mi-icon.edit-btn{position:absolute;right:1rem;top:1rem;cursor:pointer}:host .package-readme a{color:var(--color-accent)}:host .package-readme:empty{display:none}:host(:not([show_download])) .package-header .package-left .package-download-button .download-ligne{display:none}:host([no_right]) .package-header .package-right{display:none}:host([admin]) .package-readme{min-height:4rem}`;
    __getStatic() {
        return PackageDetailsPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PackageDetailsPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<header class="package-header">
    <div class="package-left">
        <h1 class="package-title" _id="packagedetailspage_0"></h1>
        <p class="package-description" _id="packagedetailspage_1"></p>
        <div class="package-tags">
            <template _id="packagedetailspage_2"></template>
        </div>
        <div class="package-meta">
            <av-router-link class="author-link" _id="packagedetailspage_4">
                <as-user-img class="author-avatar" _id="packagedetailspage_5"></as-user-img>
                <span class="author-name" _id="packagedetailspage_6"></span>
            </av-router-link>
            <div class="package-version" _id="packagedetailspage_7"></div>
            <div class="package-downloads">
                <mi-icon icon="download" class="icon-sm"></mi-icon>
                <span _id="packagedetailspage_8"></span>
            </div>
        </div>
        <div class="package-download-button">
            <div class="btns">
                <as-button _id="packagedetailspage_9">
                    <mi-icon icon="download" class="icon-sm mr-2"></mi-icon>
                    <span>Download</span>
                </as-button>
                <template _id="packagedetailspage_10"></template>
            </div>
            <div class="download-ligne">
                <div class="ligne" _id="packagedetailspage_12"></div>
                <div class="copy" _id="packagedetailspage_13">
                    <mi-icon icon="content_copy"></mi-icon>
                </div>
            </div>
        </div>
    </div>
    <div class="package-right">
        <template _id="packagedetailspage_14"></template>
        <template _id="packagedetailspage_16"></template>
    </div>
</header><template _id="packagedetailspage_18"></template>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "packagedetailspage_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method5())}`,
      "once": true
    },
    "packagedetailspage_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method6())}`,
      "once": true
    },
    "packagedetailspage_4°state": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method8())}`
    },
    "packagedetailspage_6°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method10())}`,
      "once": true
    },
    "packagedetailspage_7°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method11())}`,
      "once": true
    },
    "packagedetailspage_8°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method12())} downloads`,
      "once": true
    },
    "packagedetailspage_12°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method13())}`,
      "once": true
    }
  },
  "injection": [
    {
      "id": "packagedetailspage_5",
      "injectionName": "user",
      "inject": (c) => c.comp.__2288f4ee871702d4fd3a313e21ad52c5method9(),
      "once": true
    }
  ],
  "pressEvents": [
    {
      "id": "packagedetailspage_9",
      "onPress": (e, pressInstance, c) => { c.comp.showDownload(e, pressInstance); }
    },
    {
      "id": "packagedetailspage_13",
      "onPress": (e, pressInstance, c) => { c.comp.copyLigne(e, pressInstance); }
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(` 
                <span class="package-tag" _id="packagedetailspage_3"></span>
            `);
templ0.setActions({
  "content": {
    "packagedetailspage_3°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method7(c.data.tag))}`,
      "once": true
    }
  },
  "pressEvents": [
    {
      "id": "packagedetailspage_3",
      "onPress": (e, pressInstance, c) => { c.comp.searchTag(e, pressInstance); }
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'packagedetailspage_2',
                    template: templ0,
                simple:{data: "this.package.tags",item:"tag"}
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
                    <as-button class="delete-btn" _id="packagedetailspage_11">
                        <mi-icon icon="delete" class="icon-sm mr-2"></mi-icon>
                        <span>Delete</span>
                    </as-button>
                `);
templ1.setActions({
  "pressEvents": [
    {
      "id": "packagedetailspage_11",
      "onPress": (e, pressInstance, c) => { c.comp.deletePackage(e, pressInstance); }
    }
  ]
});
this.__getStatic().__template.addIf({
                    anchorId: 'packagedetailspage_10',
                    parts: [{once: true,
                    condition: (c) => c.comp.__2288f4ee871702d4fd3a313e21ad52c5method1(),
                    template: templ1
                }]
            });
const templ2 = new Aventus.Template(this);
templ2.setTemplate(`
            <div class="link">
                <div class="link-title">Repository</div>
                <div class="link-info">
                    <mi-icon icon="commit"></mi-icon>
                    <a target="_blank" _id="packagedetailspage_15"></a>
                </div>
            </div>
        `);
templ2.setActions({
  "content": {
    "packagedetailspage_15°href": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method14())}`,
      "once": true
    },
    "packagedetailspage_15°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method15())}`
    }
  }
});
this.__getStatic().__template.addIf({
                    anchorId: 'packagedetailspage_14',
                    parts: [{once: true,
                    condition: (c) => c.comp.__2288f4ee871702d4fd3a313e21ad52c5method2(),
                    template: templ2
                }]
            });
const templ3 = new Aventus.Template(this);
templ3.setTemplate(`
            <div class="link">
                <div class="link-title">Documentation</div>
                <div class="link-info">
                    <mi-icon icon="book_4"></mi-icon>
                    <a target="_blank" _id="packagedetailspage_17"></a>
                </div>
            </div>
        `);
templ3.setActions({
  "content": {
    "packagedetailspage_17°href": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method16())}`,
      "once": true
    },
    "packagedetailspage_17°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method17())}`
    }
  }
});
this.__getStatic().__template.addIf({
                    anchorId: 'packagedetailspage_16',
                    parts: [{once: true,
                    condition: (c) => c.comp.__2288f4ee871702d4fd3a313e21ad52c5method3(),
                    template: templ3
                }]
            });
const templ4 = new Aventus.Template(this);
templ4.setTemplate(`
    <div class="package-readme">
        <div _id="packagedetailspage_19"></div>
        <mi-icon icon="edit" class="edit-btn" _id="packagedetailspage_20"></mi-icon>
    </div>
`);
templ4.setActions({
  "content": {
    "packagedetailspage_19°@HTML": {
      "fct": (c) => `\n            ${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method18())}\n        `,
      "once": true
    }
  },
  "pressEvents": [
    {
      "id": "packagedetailspage_20",
      "onPress": (e, pressInstance, c) => { c.comp.editMarkdown(e, pressInstance); }
    }
  ]
});
const templ5 = new Aventus.Template(this);
templ5.setTemplate(`
    <div class="package-readme" _id="packagedetailspage_21"></div>
`);
templ5.setActions({
  "content": {
    "packagedetailspage_21°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2288f4ee871702d4fd3a313e21ad52c5method18())}`,
      "once": true
    }
  }
});
this.__getStatic().__template.addIf({
                    anchorId: 'packagedetailspage_18',
                    parts: [{once: true,
                    condition: (c) => c.comp.__2288f4ee871702d4fd3a313e21ad52c5method4(),
                    template: templ4
                },{once: true,
                    condition: (c) => true,
                    template: templ5
                }]
            });
 }
    getClassName() {
        return "PackageDetailsPage";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('show_download')) { this.attributeChangedCallback('show_download', false, false); }
if(!this.hasAttribute('no_right')) { this.attributeChangedCallback('no_right', false, false); }
if(!this.hasAttribute('admin')) { this.attributeChangedCallback('admin', false, false); }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["package"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('show_download');
this.__upgradeProperty('no_right');
this.__upgradeProperty('admin');
this.__correctGetter('package');
 }
    __listBoolProps() { return ["show_download","no_right","admin"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    configure() {
        return {};
    }
    async isAllowed(state, pattern, router) {
        let slugs = Aventus.Uri.getParams(pattern, state.name);
        if (slugs && slugs['id']) {
            let data = await Aventus.Process.execute(new App.Http.Controllers.Package.Details.PackageDetailsController().request(slugs['id']));
            if (data) {
                this.package = data;
                this.no_right = (data.doc == undefined && data.repos == undefined);
                this.admin = data.isOwner;
                return true;
            }
        }
        return '/not_found';
    }
    getReadMe() {
        if (!this.package)
            return "";
        let converter = new npmCompilation['115c87258963fd94d34e6a96a9c4d27d'].Converter({});
        return converter.makeHtml(this.package.readme);
    }
    getDownloadUri() {
        return `"${this.package.name}": "${this.package.version}"`;
        // return location.protocol + "//" + location.host + "/package/download/" + this.package.name + "/" + this.package.version;
    }
    async copyLigne() {
        await navigator.clipboard.writeText(this.getDownloadUri());
        await Toast.add({
            type: "success",
            title: "Copied"
        });
    }
    searchTag(e, press) {
        let state = new PackagesPageState();
        state.search = "#" + press.getElement().innerHTML;
        Main.instance.navigate(state);
    }
    showDownload() {
        this.show_download = true;
    }
    async deletePackage() {
        const result = await Confirm.open({
            title: "Confirm Package Deletion",
            content: "Are you sure you want to delete this package? This action cannot be undone."
        });
        if (result) {
            const result = await Aventus.Process.execute(new App.Http.Controllers.Package.Delete.PackageDeleteController().request(this.package.name));
            if (result?.success) {
                location.href = "/profile";
            }
        }
    }
    onShow() {
        super.onShow();
        this.show_download = false;
    }
    async editMarkdown() {
        const modal = new EditMarkdownModal();
        modal.content = this.package.readme ?? "";
        const result = await modal.show();
        if (result != null) {
            const request = await Aventus.Process.execute(new App.Http.Controllers.Package.Edit.Readme.PackageEditReadmeController().request(this.package.name, { readme: result }));
            if (request?.success) {
                this.package.readme = result;
            }
        }
    }
    postCreation() {
        super.postCreation();
    }
    __2288f4ee871702d4fd3a313e21ad52c5method5() {
        return this.package.name;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method6() {
        return this.package.description;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method7(tag) {
        return tag;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method8() {
        return this.package.isUser ? '/user/' + this.package.fromName : '/org/' + this.package.fromName;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method10() {
        return this.package.fromName;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method11() {
        return this.package.version;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method12() {
        return this.package.downloads;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method13() {
        return this.getDownloadUri();
    }
    __2288f4ee871702d4fd3a313e21ad52c5method14() {
        return this.package.repos;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method15() {
        return this.package.repos?.replace("https://", "");
    }
    __2288f4ee871702d4fd3a313e21ad52c5method16() {
        return this.package.doc;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method17() {
        return this.package.doc?.replace("https://", "");
    }
    __2288f4ee871702d4fd3a313e21ad52c5method18() {
        return this.getReadMe();
    }
    __2288f4ee871702d4fd3a313e21ad52c5method1() {
        return this.package.isOwner;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method2() {
        return this.package.repos;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method3() {
        return this.package.doc;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method4() {
        return this.package.isOwner;
    }
    __2288f4ee871702d4fd3a313e21ad52c5method9() {
        return { username: this.package.fromName, picture: { 'uri': this.package.fromImg } };
    }
}
PackageDetailsPage.Namespace=`AventusStore`;
PackageDetailsPage.Tag=`as-package-details-page`;
__as1(_, 'PackageDetailsPage', PackageDetailsPage);
if(!window.customElements.get('as-package-details-page')){window.customElements.define('as-package-details-page', PackageDetailsPage);Aventus.WebComponentInstance.registerDefinition(PackageDetailsPage);}

const Tabs = class Tabs extends Aventus.Layout.Tabs.Tabs {
    static __style = `:host{width:100%}:host .header{border-bottom:1px solid var(--border);display:flex;gap:2rem;margin-top:2rem}:host .body{width:100%}`;
    __getStatic() {
        return Tabs;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Tabs.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        slots: { 'default':`<slot></slot>` }, 
        blocks: { 'default':`<slot></slot>` }
    });
}
    getClassName() {
        return "Tabs";
    }
    defineTabHeader() {
        return TabHeader;
    }
}
Tabs.Namespace=`AventusStore`;
Tabs.Tag=`as-tabs`;
__as1(_, 'Tabs', Tabs);
if(!window.customElements.get('as-tabs')){window.customElements.define('as-tabs', Tabs);Aventus.WebComponentInstance.registerDefinition(Tabs);}

const OrganizationAdminPage = class OrganizationAdminPage extends Aventus.Navigation.Page {
    get 'activeTab'() {
						return this.__watch["activeTab"];
					}
					set 'activeTab'(val) {
						this.__watch["activeTab"] = val;
					}
get 'org'() {
						return this.__watch["org"];
					}
					set 'org'(val) {
						this.__watch["org"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("activeTab");
this.__addWatchesActions("org");
    super.__registerWatchesActions();
}
    static __style = `:host{margin:0 auto;max-width:80rem;padding:3rem 2rem}:host .profile-header{align-items:center;display:flex;flex-direction:column;gap:1.5rem;text-align:center}:host .profile-header .avatar{border:2px solid var(--border);border-radius:9999px;height:8rem;overflow:hidden;position:relative;transition:border .2s ease-in-out;width:8rem}:host .profile-header .avatar .img{border:2px solid var(--border);border-radius:9999px;font-size:32px}:host .profile-header .avatar .edit{align-items:center;background-color:rgba(0,0,0,.4);color:#fff;cursor:pointer;display:flex;inset:0;justify-content:center;opacity:0;position:absolute;transition:all .2s ease-in-out;visibility:hidden}:host .profile-header .avatar .edit mi-icon{font-size:32px}:host .profile-header .avatar .edit input{display:none}:host .profile-header .avatar:hover{border:2px solid var(--border-hover)}:host .profile-header .avatar:hover .edit{opacity:1;visibility:visible}:host .profile-header .username{color:var(--text-white);font-size:2.25rem;font-weight:bold;margin:0}:host .profile-header .bio{align-items:center;color:var(--text-muted);display:flex;font-size:1.125rem;gap:1rem;margin-top:.5rem}:host .profile-header .bio mi-icon{border-radius:4px;cursor:pointer;font-size:20px;padding:8px}:host .profile-header .bio mi-icon:hover{background-color:#334155}:host .profile-header .bio.no-bio span::after{content:"Short description";font-size:13px;font-style:italic}:host .profile-header .join-date{color:#64748b;font-size:.875rem;margin-top:.5rem}:host .cards-grid{display:grid;gap:2rem;grid-template-columns:1fr;margin-top:2rem}:host .actions{align-items:center;display:flex;justify-content:flex-end;margin-bottom:1rem;margin-top:1rem}:host .list{background-color:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;display:flex;flex-direction:column;overflow:hidden;width:100%}:host .list .item{align-items:center;border-top:1px solid var(--card-border);display:flex;gap:16px;height:50px;padding:0 1rem}:host .list .item .role{color:var(--card-border-hover)}:host .list .item:hover{background-color:var(--card-bg-hover)}:host .list av-link:first-child .item{border-top:none}:host .empty-message{color:var(--text-muted);grid-column:span 2;padding:4rem 0;text-align:center}:host .settings-card{max-width:none;width:calc(100% - 32px)}:host .settings-card .settings-card-content{display:flex;flex-direction:column;gap:1.5rem}@media(min-width: 640px){:host .profile-header{flex-direction:row;text-align:left}}@media(min-width: 768px){:host .cards-grid{grid-template-columns:1fr 1fr}}`;
    __getStatic() {
        return OrganizationAdminPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(OrganizationAdminPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="profile-header">
    <div class="avatar">
        <as-user-img class="img" _id="organizationadminpage_0"></as-user-img>
        <div class="edit" _id="organizationadminpage_1">
            <mi-icon icon="edit"></mi-icon>
            <input type="file" accept="image/png, image/gif, image/jpeg, image/svg+xml" _id="organizationadminpage_2" />
        </div>
    </div>
    <div>
        <h1 class="username" _id="organizationadminpage_3"></h1>
        <p _id="organizationadminpage_4">
            <span _id="organizationadminpage_5"></span>
            <mi-icon icon="edit" _id="organizationadminpage_6"></mi-icon>
        </p>
    </div>
</div><as-tabs>
    <as-tab label="Packages" _id="organizationadminpage_7">
        <div class="cards-grid">
            <template _id="organizationadminpage_8"></template>
        </div>
    </as-tab>
    <as-tab label="Templates" _id="organizationadminpage_10">
        <div class="cards-grid">
            <template _id="organizationadminpage_11"></template>
        </div>
    </as-tab>
</as-tabs>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "uploadPictrueEl",
      "ids": [
        "organizationadminpage_2"
      ]
    }
  ],
  "content": {
    "organizationadminpage_3°@HTML": {
      "fct": (c) => `${c.print(c.comp.__526760aafbddd811e0afa66bfc91f4bdmethod3())}`,
      "once": true
    },
    "organizationadminpage_4°class": {
      "fct": (c) => `bio ${c.print(c.comp.__526760aafbddd811e0afa66bfc91f4bdmethod4())}`
    },
    "organizationadminpage_5°@HTML": {
      "fct": (c) => `${c.print(c.comp.__526760aafbddd811e0afa66bfc91f4bdmethod5())}`,
      "once": true
    },
    "organizationadminpage_7°count": {
      "fct": (c) => `${c.print(c.comp.__526760aafbddd811e0afa66bfc91f4bdmethod6())}`,
      "once": true
    },
    "organizationadminpage_10°count": {
      "fct": (c) => `${c.print(c.comp.__526760aafbddd811e0afa66bfc91f4bdmethod8())}`,
      "once": true
    }
  },
  "injection": [
    {
      "id": "organizationadminpage_0",
      "injectionName": "user",
      "inject": (c) => c.comp.__526760aafbddd811e0afa66bfc91f4bdmethod2(),
      "once": true
    }
  ],
  "events": [
    {
      "eventName": "change",
      "id": "organizationadminpage_2",
      "fct": (e, c) => c.comp.uploadFile(e)
    }
  ],
  "pressEvents": [
    {
      "id": "organizationadminpage_1",
      "onPress": (e, pressInstance, c) => { c.comp.editPicture(e, pressInstance); }
    },
    {
      "id": "organizationadminpage_6",
      "onPress": (e, pressInstance, c) => { c.comp.editBio(e, pressInstance); }
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
                <as-package-card no_owner _id="organizationadminpage_9"></as-package-card>
            `);
templ0.setActions({
  "injection": [
    {
      "id": "organizationadminpage_9",
      "injectionName": "package",
      "inject": (c) => c.comp.__526760aafbddd811e0afa66bfc91f4bdmethod7(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'organizationadminpage_8',
                    template: templ0,
                simple:{data: "this.org.packages",item:"p"}
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
                <as-template-card no_owner _id="organizationadminpage_12"></as-template-card>
            `);
templ1.setActions({
  "injection": [
    {
      "id": "organizationadminpage_12",
      "injectionName": "template",
      "inject": (c) => c.comp.__526760aafbddd811e0afa66bfc91f4bdmethod9(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'organizationadminpage_11',
                    template: templ1,
                simple:{data: "this.org.templates",item:"p"}
});
 }
    getClassName() {
        return "OrganizationAdminPage";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["activeTab"] = undefined;
w["org"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('activeTab');
this.__correctGetter('org');
 }
    async isAllowed(state, pattern, router) {
        let slugs = Aventus.Uri.getParams(pattern, state.name);
        if (slugs && slugs['id']) {
            const roleResult = await Aventus.Process.execute(new App.Http.Controllers.Org.Role.OrgRoleController().request(slugs['id']));
            if (roleResult?.role !== App.Enums.RoleEnum.Admin) {
                return '/org/Cobwebsite';
            }
            const result = await Aventus.Process.execute(new App.Http.Controllers.Org.Details.OrgDetailsController().request(slugs['id']));
            if (result) {
                this.org = result;
                return true;
            }
        }
        return '/not_found';
    }
    configure() {
        return {};
    }
    async editBio() {
        let p = new ModalEditBio();
        p.value = this.org.bio ?? '';
        const txt = await p.show();
        if (txt !== null) {
            const ctrl = new App.Http.Controllers.Org.EditBio.OrgEditBioController();
            const bio = !txt ? undefined : txt;
            const result = await Aventus.Process.execute(ctrl.request({ bio, name: this.org.name }));
            if (result) {
                this.org = result;
            }
        }
    }
    editPicture() {
        this.uploadPictrueEl.click();
    }
    async uploadFile() {
        if (this.uploadPictrueEl.files && this.uploadPictrueEl.files.length > 0) {
            const result = await Aventus.Process.execute(new App.Http.Controllers.Org.EditPicture.OrgEditPictureController().request({ file: this.uploadPictrueEl.files[0], name: this.org.name }));
            if (result) {
                this.org = result;
            }
        }
    }
    __526760aafbddd811e0afa66bfc91f4bdmethod3() {
        return this.org.name;
    }
    __526760aafbddd811e0afa66bfc91f4bdmethod4() {
        return this.org.bio ? '' : 'no-bio';
    }
    __526760aafbddd811e0afa66bfc91f4bdmethod5() {
        return this.org.bio;
    }
    __526760aafbddd811e0afa66bfc91f4bdmethod6() {
        return this.org.packages.length;
    }
    __526760aafbddd811e0afa66bfc91f4bdmethod8() {
        return this.org.templates.length;
    }
    __526760aafbddd811e0afa66bfc91f4bdmethod2() {
        return this.org;
    }
    __526760aafbddd811e0afa66bfc91f4bdmethod7(p) {
        return p;
    }
    __526760aafbddd811e0afa66bfc91f4bdmethod9(p) {
        return p;
    }
}
OrganizationAdminPage.Namespace=`AventusStore`;
OrganizationAdminPage.Tag=`as-organization-admin-page`;
__as1(_, 'OrganizationAdminPage', OrganizationAdminPage);
if(!window.customElements.get('as-organization-admin-page')){window.customElements.define('as-organization-admin-page', OrganizationAdminPage);Aventus.WebComponentInstance.registerDefinition(OrganizationAdminPage);}

const OrganizationPage = class OrganizationPage extends Aventus.Navigation.Page {
    get 'activeTab'() {
						return this.__watch["activeTab"];
					}
					set 'activeTab'(val) {
						this.__watch["activeTab"] = val;
					}
get 'org'() {
						return this.__watch["org"];
					}
					set 'org'(val) {
						this.__watch["org"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("activeTab");
this.__addWatchesActions("org");
    super.__registerWatchesActions();
}
    static __style = `:host{margin:0 auto;max-width:80rem;padding:3rem 2rem}:host .profile-header{align-items:center;display:flex;flex-direction:column;gap:1.5rem;text-align:center}:host .profile-header .avatar{border:2px solid var(--border);border-radius:9999px;height:8rem;overflow:hidden;position:relative;transition:border .2s ease-in-out;width:8rem}:host .profile-header .avatar .img{border:2px solid var(--border);border-radius:9999px;font-size:32px}:host .profile-header .username{color:var(--text-white);font-size:2.25rem;font-weight:bold;margin:0}:host .profile-header .bio{align-items:center;color:var(--text-muted);display:flex;font-size:1.125rem;gap:1rem;margin-top:.5rem}:host .profile-header .join-date{color:#64748b;font-size:.875rem;margin-top:.5rem}:host .cards-grid{display:grid;gap:2rem;grid-template-columns:1fr;margin-top:2rem}:host .list{background-color:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;display:flex;flex-direction:column;margin-top:2rem;overflow:hidden;width:100%}:host .list .item{align-items:center;border-top:1px solid var(--card-border);display:flex;gap:16px;height:50px;padding:0 1rem}:host .list .item .role{color:var(--card-border-hover)}:host .list .item:hover{background-color:var(--card-bg-hover)}:host .list av-link:first-child .item{border-top:none}:host .empty-message{color:var(--text-muted);grid-column:span 2;padding:4rem 0;text-align:center}:host .settings-card{width:calc(100% - 32px);max-width:none}:host .settings-card .settings-card-content{display:flex;flex-direction:column;gap:1.5rem}@media(min-width: 640px){:host .profile-header{flex-direction:row;text-align:left}}@media(min-width: 768px){:host .cards-grid{grid-template-columns:1fr 1fr}}`;
    __getStatic() {
        return OrganizationPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(OrganizationPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="profile-header">
    <div class="avatar">
        <as-user-img class="img" _id="organizationpage_0"></as-user-img>
    </div>
    <div>
        <h1 class="username" _id="organizationpage_1"></h1>
        <p class="bio">
            <span _id="organizationpage_2"></span>
        </p>
    </div>
</div><as-tabs>
    <as-tab label="Packages" _id="organizationpage_3">
        <div class="cards-grid">
            <template _id="organizationpage_4"></template>
        </div>
    </as-tab>
    <as-tab label="Templates" _id="organizationpage_6">
        <div class="cards-grid">
            <template _id="organizationpage_7"></template>
        </div>
    </as-tab>
</as-tabs>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "organizationpage_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2f583510b54249c3554827b220574e6cmethod3())}`,
      "once": true
    },
    "organizationpage_2°@HTML": {
      "fct": (c) => `${c.print(c.comp.__2f583510b54249c3554827b220574e6cmethod4())}`,
      "once": true
    },
    "organizationpage_3°count": {
      "fct": (c) => `${c.print(c.comp.__2f583510b54249c3554827b220574e6cmethod5())}`,
      "once": true
    },
    "organizationpage_6°count": {
      "fct": (c) => `${c.print(c.comp.__2f583510b54249c3554827b220574e6cmethod7())}`,
      "once": true
    }
  },
  "injection": [
    {
      "id": "organizationpage_0",
      "injectionName": "user",
      "inject": (c) => c.comp.__2f583510b54249c3554827b220574e6cmethod2(),
      "once": true
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
                <as-package-card no_owner _id="organizationpage_5"></as-package-card>
            `);
templ0.setActions({
  "injection": [
    {
      "id": "organizationpage_5",
      "injectionName": "package",
      "inject": (c) => c.comp.__2f583510b54249c3554827b220574e6cmethod6(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'organizationpage_4',
                    template: templ0,
                simple:{data: "this.org.packages",item:"p"}
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
                <as-template-card no_owner _id="organizationpage_8"></as-template-card>
            `);
templ1.setActions({
  "injection": [
    {
      "id": "organizationpage_8",
      "injectionName": "template",
      "inject": (c) => c.comp.__2f583510b54249c3554827b220574e6cmethod8(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'organizationpage_7',
                    template: templ1,
                simple:{data: "this.org.templates",item:"p"}
});
 }
    getClassName() {
        return "OrganizationPage";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["activeTab"] = undefined;
w["org"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('activeTab');
this.__correctGetter('org');
 }
    async isAllowed(state, pattern, router) {
        let slugs = Aventus.Uri.getParams(pattern, state.name);
        if (slugs && slugs['id']) {
            const roleResult = await Aventus.Process.execute(new App.Http.Controllers.Org.Role.OrgRoleController().request(slugs['id']));
            if (roleResult?.role == App.Enums.RoleEnum.Admin) {
                return '/org/Cobwebsite/admin';
            }
            const result = await Aventus.Process.execute(new App.Http.Controllers.Org.Details.OrgDetailsController().request(slugs['id']));
            if (result) {
                this.org = result;
                return true;
            }
        }
        return '/not_found';
    }
    configure() {
        return {};
    }
    __2f583510b54249c3554827b220574e6cmethod3() {
        return this.org.name;
    }
    __2f583510b54249c3554827b220574e6cmethod4() {
        return this.org.bio;
    }
    __2f583510b54249c3554827b220574e6cmethod5() {
        return this.org.packages.length;
    }
    __2f583510b54249c3554827b220574e6cmethod7() {
        return this.org.templates.length;
    }
    __2f583510b54249c3554827b220574e6cmethod2() {
        return this.org;
    }
    __2f583510b54249c3554827b220574e6cmethod6(p) {
        return p;
    }
    __2f583510b54249c3554827b220574e6cmethod8(p) {
        return p;
    }
}
OrganizationPage.Namespace=`AventusStore`;
OrganizationPage.Tag=`as-organization-page`;
__as1(_, 'OrganizationPage', OrganizationPage);
if(!window.customElements.get('as-organization-page')){window.customElements.define('as-organization-page', OrganizationPage);Aventus.WebComponentInstance.registerDefinition(OrganizationPage);}

const UserPage = class UserPage extends Aventus.Navigation.Page {
    get 'activeTab'() {
						return this.__watch["activeTab"];
					}
					set 'activeTab'(val) {
						this.__watch["activeTab"] = val;
					}
get 'user'() {
						return this.__watch["user"];
					}
					set 'user'(val) {
						this.__watch["user"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("activeTab");
this.__addWatchesActions("user");
    super.__registerWatchesActions();
}
    static __style = `:host{margin:0 auto;max-width:80rem;padding:3rem 2rem}:host .profile-header{align-items:center;display:flex;flex-direction:column;gap:1.5rem;text-align:center}:host .profile-header .avatar{border:2px solid var(--border);border-radius:9999px;height:8rem;overflow:hidden;position:relative;transition:border .2s ease-in-out;width:8rem}:host .profile-header .avatar .img{border:2px solid var(--border);border-radius:9999px;font-size:32px}:host .profile-header .username{color:var(--text-white);font-size:2.25rem;font-weight:bold;margin:0}:host .profile-header .bio{align-items:center;color:var(--text-muted);display:flex;font-size:1.125rem;gap:1rem;margin-top:.5rem}:host .profile-header .join-date{color:#64748b;font-size:.875rem;margin-top:.5rem}:host .cards-grid{display:grid;gap:2rem;grid-template-columns:1fr;margin-top:2rem}:host .list{background-color:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;display:flex;flex-direction:column;margin-top:2rem;overflow:hidden;width:100%}:host .list .item{align-items:center;border-top:1px solid var(--card-border);display:flex;gap:16px;height:50px;padding:0 1rem}:host .list .item .role{color:var(--card-border-hover)}:host .list .item:hover{background-color:var(--card-bg-hover)}:host .list av-link:first-child .item{border-top:none}:host .empty-message{color:var(--text-muted);grid-column:span 2;padding:4rem 0;text-align:center}:host .settings-card{width:calc(100% - 32px);max-width:none}:host .settings-card .settings-card-content{display:flex;flex-direction:column;gap:1.5rem}@media(min-width: 640px){:host .profile-header{flex-direction:row;text-align:left}}@media(min-width: 768px){:host .cards-grid{grid-template-columns:1fr 1fr}}`;
    __getStatic() {
        return UserPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(UserPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="profile-header">
    <div class="avatar">
        <as-user-img class="img" _id="userpage_0"></as-user-img>
    </div>
    <div>
        <h1 class="username" _id="userpage_1"></h1>
        <p class="bio">
            <span _id="userpage_2"></span>
        </p>
        <p class="join-date" _id="userpage_3"></p>
    </div>
</div><as-tabs>
    <as-tab label="Packages" _id="userpage_4">
        <div class="cards-grid">
            <template _id="userpage_5"></template>
        </div>
    </as-tab>
    <as-tab label="Templates" _id="userpage_7">
        <div class="cards-grid">
             <template _id="userpage_8"></template>
        </div>
    </as-tab>
    <as-tab label="Organizations" _id="userpage_10">
        <div class="list">
            <template _id="userpage_11"></template>
        </div>
    </as-tab>
</as-tabs>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "userpage_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method4())}`,
      "once": true
    },
    "userpage_2°@HTML": {
      "fct": (c) => `${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method5())}`,
      "once": true
    },
    "userpage_3°@HTML": {
      "fct": (c) => `Joined on ${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method6())}`,
      "once": true
    },
    "userpage_4°count": {
      "fct": (c) => `${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method7())}`,
      "once": true
    },
    "userpage_7°count": {
      "fct": (c) => `${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method9())}`,
      "once": true
    },
    "userpage_10°count": {
      "fct": (c) => `${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method11())}`,
      "once": true
    }
  },
  "injection": [
    {
      "id": "userpage_0",
      "injectionName": "user",
      "inject": (c) => c.comp.__70664b655c5ebf5512e5d15976b27ea2method3(),
      "once": true
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
                <as-package-card no_owner _id="userpage_6"></as-package-card>
            `);
templ0.setActions({
  "injection": [
    {
      "id": "userpage_6",
      "injectionName": "package",
      "inject": (c) => c.comp.__70664b655c5ebf5512e5d15976b27ea2method8(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'userpage_5',
                    template: templ0,
                simple:{data: "this.user.packages",item:"p"}
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
                <as-template-card no_owner _id="userpage_9"></as-template-card>
            `);
templ1.setActions({
  "injection": [
    {
      "id": "userpage_9",
      "injectionName": "template",
      "inject": (c) => c.comp.__70664b655c5ebf5512e5d15976b27ea2method10(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'userpage_8',
                    template: templ1,
                simple:{data: "this.user.templates",item:"p"}
});
const templ2 = new Aventus.Template(this);
templ2.setTemplate(`
                <av-link _id="userpage_12">
                    <div class="item">
                        <span class="name" _id="userpage_13"></span>
                        <span>-</span>
                        <div class="role" _id="userpage_14"></div>
                    </div>
                </av-link>
            `);
templ2.setActions({
  "content": {
    "userpage_12°to": {
      "fct": (c) => `/org/${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method12(c.data.org))}`,
      "once": true
    },
    "userpage_13°@HTML": {
      "fct": (c) => `${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method12(c.data.org))}`,
      "once": true
    },
    "userpage_14°@HTML": {
      "fct": (c) => `${c.print(c.comp.__70664b655c5ebf5512e5d15976b27ea2method13(c.data.org))}`,
      "once": true
    }
  }
});
this.__getStatic().__template.addLoop({
                    anchorId: 'userpage_11',
                    template: templ2,
                simple:{data: "this.user.organizations",item:"org"}
});
 }
    getClassName() {
        return "UserPage";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["activeTab"] = undefined;
w["user"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('activeTab');
this.__correctGetter('user');
 }
    async isAllowed(state, pattern, router) {
        let slugs = Aventus.Uri.getParams(pattern, state.name);
        if (slugs && slugs['id']) {
            if (slugs['id'] == Main.user?.username) {
                return "/profile";
            }
            const result = await Aventus.Process.execute(new App.Http.Controllers.User.Details.UserDetailsController().request(slugs['id']));
            if (result) {
                this.user = result;
                return true;
            }
        }
        return '/not_found';
    }
    configure() {
        return {};
    }
    __70664b655c5ebf5512e5d15976b27ea2method4() {
        return this.user.username;
    }
    __70664b655c5ebf5512e5d15976b27ea2method5() {
        return this.user.bio;
    }
    __70664b655c5ebf5512e5d15976b27ea2method6() {
        return DateTools.printDate(this.user.created_date, undefined, "en-gb");
    }
    __70664b655c5ebf5512e5d15976b27ea2method7() {
        return this.user.packages.length;
    }
    __70664b655c5ebf5512e5d15976b27ea2method9() {
        return this.user.templates.length;
    }
    __70664b655c5ebf5512e5d15976b27ea2method11() {
        return this.user.organizations.length;
    }
    __70664b655c5ebf5512e5d15976b27ea2method12(org) {
        return org.name;
    }
    __70664b655c5ebf5512e5d15976b27ea2method13(org) {
        return org.role;
    }
    __70664b655c5ebf5512e5d15976b27ea2method3() {
        return this.user;
    }
    __70664b655c5ebf5512e5d15976b27ea2method8(p) {
        return p;
    }
    __70664b655c5ebf5512e5d15976b27ea2method10(p) {
        return p;
    }
}
UserPage.Namespace=`AventusStore`;
UserPage.Tag=`as-user-page`;
__as1(_, 'UserPage', UserPage);
if(!window.customElements.get('as-user-page')){window.customElements.define('as-user-page', UserPage);Aventus.WebComponentInstance.registerDefinition(UserPage);}

const UserProfilePage = class UserProfilePage extends Aventus.Navigation.Page {
    get 'activeTab'() {
						return this.__watch["activeTab"];
					}
					set 'activeTab'(val) {
						this.__watch["activeTab"] = val;
					}
get 'user'() {
						return this.__watch["user"];
					}
					set 'user'(val) {
						this.__watch["user"] = val;
					}
get 'email'() {
						return this.__watch["email"];
					}
					set 'email'(val) {
						this.__watch["email"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("activeTab");
this.__addWatchesActions("user", ((target) => {
    target.email = target.user.email;
}));
this.__addWatchesActions("email");
    super.__registerWatchesActions();
}
    static __style = `:host{margin:0 auto;max-width:80rem;padding:3rem 2rem}:host .profile-header{align-items:center;display:flex;flex-direction:column;gap:1.5rem;text-align:center}:host .profile-header .avatar{border:2px solid var(--border);border-radius:9999px;height:8rem;overflow:hidden;position:relative;transition:border .2s ease-in-out;width:8rem}:host .profile-header .avatar .img{border:2px solid var(--border);border-radius:9999px;font-size:32px}:host .profile-header .avatar .edit{align-items:center;background-color:rgba(0,0,0,.4);color:#fff;cursor:pointer;display:flex;inset:0;justify-content:center;opacity:0;position:absolute;transition:all .2s ease-in-out;visibility:hidden}:host .profile-header .avatar .edit mi-icon{font-size:32px}:host .profile-header .avatar .edit input{display:none}:host .profile-header .avatar:hover{border:2px solid var(--border-hover)}:host .profile-header .avatar:hover .edit{opacity:1;visibility:visible}:host .profile-header .username{color:var(--text-white);font-size:2.25rem;font-weight:bold;margin:0}:host .profile-header .bio{align-items:center;color:var(--text-muted);display:flex;font-size:1.125rem;gap:1rem;margin-top:.5rem}:host .profile-header .bio mi-icon{border-radius:4px;cursor:pointer;font-size:20px;padding:8px}:host .profile-header .bio mi-icon:hover{background-color:#334155}:host .profile-header .bio.no-bio span::after{content:"Short description";font-size:13px;font-style:italic}:host .profile-header .join-date{color:#64748b;font-size:.875rem;margin-top:.5rem}:host .cards-grid{display:grid;gap:2rem;grid-template-columns:1fr;margin-top:2rem}:host .actions{align-items:center;display:flex;justify-content:flex-end;margin-bottom:1rem;margin-top:1rem}:host .list{background-color:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;display:flex;flex-direction:column;overflow:hidden;width:100%}:host .list .item{align-items:center;border-top:1px solid var(--card-border);display:flex;gap:16px;height:50px;padding:0 1rem}:host .list .item .role{color:var(--card-border-hover)}:host .list .item:hover{background-color:var(--card-bg-hover)}:host .list av-link:first-child .item{border-top:none}:host .empty-message{color:var(--text-muted);grid-column:span 2;padding:4rem 0;text-align:center}:host .settings-card{max-width:none;width:calc(100% - 32px)}:host .settings-card .settings-card-content{display:flex;flex-direction:column;gap:1.5rem}@media(min-width: 640px){:host .profile-header{flex-direction:row;text-align:left}}@media(min-width: 768px){:host .cards-grid{grid-template-columns:1fr 1fr}}`;
    __getStatic() {
        return UserProfilePage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(UserProfilePage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="profile-header">
    <div class="avatar">
        <as-user-img class="img" _id="userprofilepage_0"></as-user-img>
        <div class="edit" _id="userprofilepage_1">
            <mi-icon icon="edit"></mi-icon>
            <input type="file" accept="image/png, image/gif, image/jpeg, image/svg+xml" _id="userprofilepage_2" />
        </div>
    </div>
    <div>
        <h1 class="username" _id="userprofilepage_3"></h1>
        <p _id="userprofilepage_4">
            <span _id="userprofilepage_5"></span>
            <mi-icon icon="edit" _id="userprofilepage_6"></mi-icon>
        </p>
        <p class="join-date" _id="userprofilepage_7"></p>
    </div>
</div><as-tabs>
    <as-tab label="Packages" _id="userprofilepage_8">
        <div class="cards-grid">
            <template _id="userprofilepage_9"></template>
        </div>
    </as-tab>
    <as-tab label="Templates" _id="userprofilepage_11">
        <div class="cards-grid">
            <template _id="userprofilepage_12"></template>
        </div>
    </as-tab>
    <as-tab label="Organizations" _id="userprofilepage_14">
        <div class="actions">
            <as-button _id="userprofilepage_15">Create</as-button>
        </div>
        <div class="list">
            <template _id="userprofilepage_16"></template>
        </div>
    </as-tab>
    <as-tab label="Settings" icon="settings">
        <av-row>
            <av-col size="12" size_md="6">
                <as-card class="settings-card">
                    <div class="settings-card-content">
                        <div class="title">Update Mail</div>
                        <as-input label="Mail" _id="userprofilepage_20"></as-input>
                        <div class="btn">
                            <as-button variant="primary" _id="userprofilepage_21">Save</as-button>
                        </div>
                    </div>
                </as-card>
            </av-col>
            <av-col size="12" size_md="6">
                <as-card class="settings-card">
                    <div class="settings-card-content">
                        <div class="title">Change Password</div>
                        <as-input label="Old Password" type="password"></as-input>
                        <as-input label="New Password" type="password"></as-input>
                        <as-input label="Repeat New Password" type="password"></as-input>
                        <div class="btn">
                            <as-button variant="primary">Save</as-button>
                        </div>
                    </div>
                </as-card>
            </av-col>
        </av-row>
    </as-tab>
</as-tabs>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "uploadPictrueEl",
      "ids": [
        "userprofilepage_2"
      ]
    },
    {
      "name": "emailInput",
      "ids": [
        "userprofilepage_20"
      ]
    }
  ],
  "content": {
    "userprofilepage_3°@HTML": {
      "fct": (c) => `${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method4())}`,
      "once": true
    },
    "userprofilepage_4°class": {
      "fct": (c) => `bio ${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method5())}`
    },
    "userprofilepage_5°@HTML": {
      "fct": (c) => `${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method6())}`,
      "once": true
    },
    "userprofilepage_7°@HTML": {
      "fct": (c) => `Joined on ${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method7())}`,
      "once": true
    },
    "userprofilepage_8°count": {
      "fct": (c) => `${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method8())}`,
      "once": true
    },
    "userprofilepage_11°count": {
      "fct": (c) => `${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method10())}`,
      "once": true
    },
    "userprofilepage_14°count": {
      "fct": (c) => `${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method12())}`,
      "once": true
    }
  },
  "injection": [
    {
      "id": "userprofilepage_0",
      "injectionName": "user",
      "inject": (c) => c.comp.__11865033adb591bd7ee8cecbe17eb1e3method3(),
      "once": true
    }
  ],
  "bindings": [
    {
      "id": "userprofilepage_20",
      "injectionName": "value",
      "eventNames": [
        "onChange"
      ],
      "inject": (c) => c.comp.__11865033adb591bd7ee8cecbe17eb1e3method15(),
      "extract": (c, v) => c.comp.__11865033adb591bd7ee8cecbe17eb1e3method16(v),
      "once": true,
      "isCallback": true
    }
  ],
  "events": [
    {
      "eventName": "change",
      "id": "userprofilepage_2",
      "fct": (e, c) => c.comp.uploadFile(e)
    }
  ],
  "pressEvents": [
    {
      "id": "userprofilepage_1",
      "onPress": (e, pressInstance, c) => { c.comp.editPicture(e, pressInstance); }
    },
    {
      "id": "userprofilepage_6",
      "onPress": (e, pressInstance, c) => { c.comp.editBio(e, pressInstance); }
    },
    {
      "id": "userprofilepage_15",
      "onPress": (e, pressInstance, c) => { c.comp.createOrg(e, pressInstance); }
    },
    {
      "id": "userprofilepage_21",
      "onPress": (e, pressInstance, c) => { c.comp.changeEmail(e, pressInstance); }
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
                <as-package-card no_owner _id="userprofilepage_10"></as-package-card>
            `);
templ0.setActions({
  "injection": [
    {
      "id": "userprofilepage_10",
      "injectionName": "package",
      "inject": (c) => c.comp.__11865033adb591bd7ee8cecbe17eb1e3method9(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'userprofilepage_9',
                    template: templ0,
                simple:{data: "this.user.packages",item:"p"}
});
const templ1 = new Aventus.Template(this);
templ1.setTemplate(`
                <as-template-card no_owner _id="userprofilepage_13"></as-template-card>
            `);
templ1.setActions({
  "injection": [
    {
      "id": "userprofilepage_13",
      "injectionName": "template",
      "inject": (c) => c.comp.__11865033adb591bd7ee8cecbe17eb1e3method11(c.data.p),
      "once": true
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'userprofilepage_12',
                    template: templ1,
                simple:{data: "this.user.templates",item:"p"}
});
const templ2 = new Aventus.Template(this);
templ2.setTemplate(`
                <av-link _id="userprofilepage_17">
                    <div class="item">
                        <span class="name" _id="userprofilepage_18"></span>
                        <span>-</span>
                        <div class="role" _id="userprofilepage_19"></div>
                    </div>
                </av-link>
            `);
templ2.setActions({
  "content": {
    "userprofilepage_17°to": {
      "fct": (c) => `/org/${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method13(c.data.org))}`,
      "once": true
    },
    "userprofilepage_18°@HTML": {
      "fct": (c) => `${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method13(c.data.org))}`,
      "once": true
    },
    "userprofilepage_19°@HTML": {
      "fct": (c) => `${c.print(c.comp.__11865033adb591bd7ee8cecbe17eb1e3method14(c.data.org))}`,
      "once": true
    }
  }
});
this.__getStatic().__template.addLoop({
                    anchorId: 'userprofilepage_16',
                    template: templ2,
                simple:{data: "this.user.organizations",item:"org"}
});
 }
    getClassName() {
        return "UserProfilePage";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["activeTab"] = undefined;
w["user"] = undefined;
w["email"] = "";
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('activeTab');
this.__correctGetter('user');
this.__correctGetter('email');
 }
    async isAllowed(state, pattern, router) {
        if (!Main.user)
            return "/login";
        const result = await Aventus.Process.execute(new App.Http.Controllers.User.Current.UserCurrentController().request());
        if (result) {
            this.user = result;
            return true;
        }
        return '/not_found';
    }
    async changeEmail() {
        const result = await new App.Http.Controllers.User.EditEmail.UserEditEmailController().request({ email: this.email });
        if (result.result) {
            this.user = result.result;
        }
        else {
            this.emailInput.errors = result.errors.map(e => e.message);
        }
    }
    configure() {
        return {};
    }
    async editBio() {
        let p = new ModalEditBio();
        p.value = this.user.bio ?? '';
        const txt = await p.show();
        if (txt !== null) {
            const ctrl = new App.Http.Controllers.User.EditBio.UserEditBioController();
            const bio = !txt ? undefined : txt;
            const result = await Aventus.Process.execute(ctrl.request({ bio }));
            if (result) {
                this.user = result;
            }
        }
    }
    async editEmail() {
    }
    editPicture() {
        this.uploadPictrueEl.click();
    }
    async uploadFile() {
        if (this.uploadPictrueEl.files && this.uploadPictrueEl.files.length > 0) {
            const result = await Aventus.Process.execute(new App.Http.Controllers.User.EditPicture.UserEditPictureController().request({ file: this.uploadPictrueEl.files[0] }));
            if (result) {
                this.user = result;
            }
        }
    }
    async createOrg() {
        const modal = new ModalCreateOrg();
        const result = await modal.show();
        if (result) {
            this.user.organizations.push(result);
        }
    }
    __11865033adb591bd7ee8cecbe17eb1e3method4() {
        return this.user.username;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method5() {
        return this.user.bio ? '' : 'no-bio';
    }
    __11865033adb591bd7ee8cecbe17eb1e3method6() {
        return this.user.bio;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method7() {
        return DateTools.printDate(this.user.created_date, undefined, "en-gb");
    }
    __11865033adb591bd7ee8cecbe17eb1e3method8() {
        return this.user.packages.length;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method10() {
        return this.user.templates.length;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method12() {
        return this.user.organizations.length;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method13(org) {
        return org.name;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method14(org) {
        return org.role;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method3() {
        return this.user;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method9(p) {
        return p;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method11(p) {
        return p;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method15() {
        return this.email;
    }
    __11865033adb591bd7ee8cecbe17eb1e3method16(v) {
        if (this) {
            this.email = v;
        }
    }
}
UserProfilePage.Namespace=`AventusStore`;
UserProfilePage.Tag=`as-user-profile-page`;
__as1(_, 'UserProfilePage', UserProfilePage);
if(!window.customElements.get('as-user-profile-page')){window.customElements.define('as-user-profile-page', UserProfilePage);Aventus.WebComponentInstance.registerDefinition(UserProfilePage);}

const Alert = class Alert extends Modal {
    static __style = `:host .modal{max-height:100%}:host .content{line-break:anywhere;overflow:auto}:host .footer{display:flex;justify-content:flex-end;margin-top:1rem}`;
    __getStatic() {
        return Alert;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Alert.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="content" _id="alert_0"></div><div class="footer">
    <as-button _id="alert_1"></as-button>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "alert_0°@HTML": {
      "fct": (c) => `${c.print(c.comp.__45b91fe89ba8697cec8a20f3299c82d1method0())}`,
      "once": true
    },
    "alert_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__45b91fe89ba8697cec8a20f3299c82d1method1())}`,
      "once": true
    }
  },
  "pressEvents": [
    {
      "id": "alert_1",
      "onPress": (e, pressInstance, c) => { c.comp.ok(e, pressInstance); }
    }
  ]
});
 }
    getClassName() {
        return "Alert";
    }
    configure() {
        return {
            title: "I'm an alert",
            content: "lorem",
            btnTxt: "Ok",
            noClose: true
        };
    }
    ok() {
        this.resolve();
    }
    __45b91fe89ba8697cec8a20f3299c82d1method0() {
        return this.options.content;
    }
    __45b91fe89ba8697cec8a20f3299c82d1method1() {
        return this.options.btnTxt;
    }
    static async open(options) {
        const alert = new Alert();
        alert.options = { ...alert.options, ...options };
        return await Alert._show(alert);
    }
}
Alert.Namespace=`AventusStore`;
Alert.Tag=`as-alert`;
__as1(_, 'Alert', Alert);
if(!window.customElements.get('as-alert')){window.customElements.define('as-alert', Alert);Aventus.WebComponentInstance.registerDefinition(Alert);}

const LoginPage = class LoginPage extends Aventus.Navigation.Page {
    get 'error'() {
						return this.__watch["error"];
					}
					set 'error'(val) {
						this.__watch["error"] = val;
					}
get 'isLoading'() {
						return this.__watch["isLoading"];
					}
					set 'isLoading'(val) {
						this.__watch["isLoading"] = val;
					}
    form;
    __registerWatchesActions() {
    this.__addWatchesActions("error");
this.__addWatchesActions("isLoading");
    super.__registerWatchesActions();
}
    static __style = `:host{flex-direction:column;justify-content:center;padding:3rem 1rem}:host .login-header{margin:0 auto;max-width:28rem;text-align:center;width:100%}:host .login-title{color:var(--text-color);font-size:1.875rem;font-weight:700;margin-top:1.5rem}:host .login-subtext{color:var(--text-muted);font-size:.875rem;margin-top:.5rem}:host .link-accent{color:var(--color-accent);font-weight:500;text-decoration:none}:host .link-accent:hover{color:var(--hover-accent)}:host .login-form-wrapper{margin-left:auto;margin-right:auto;margin-top:2rem;max-width:28rem;width:100%}:host .login-form-card{background-color:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;box-shadow:0 4px 12px rgba(0,0,0,.25);padding:2rem 1rem}:host .login-form{display:flex;flex-direction:column;gap:1.5rem}:host .form-group{display:flex;flex-direction:column}:host .form-label{color:var(--text-muted);font-size:.875rem;font-weight:500;margin-bottom:.25rem}:host .form-field{margin-top:.25rem}:host .form-error{font-size:.875rem;color:var(--color-danger)}:host .form-footer{display:flex;font-size:.875rem;justify-content:flex-end}:host .btn-full{width:100%}:host([visible]){display:flex}@media(min-width: 640px){:host .login-form-card{padding:2rem 2.5rem}}`;
    constructor() {
        super();
        this.form = Aventus.Form.FormHandlerController.create(App.Http.Controllers.Auth.Login.AuthLoginController, {
            username: Aventus.Form.Validators.Required,
            password: Aventus.Form.Validators.Required
        }, {
            onSuccess: (result) => {
                if (result) {
                    localStorage.setItem("token", result);
                    window.location.href = "/";
                }
            },
            onServerFallback: (errors) => {
                if (errors.some(p => p.code == 422)) {
                    this.error = "Wrong credentials";
                }
                else {
                    let msg = errors.map(p => p.message.replace(/\n/g, '<br/>')).join("<br/>");
                    Alert.open({
                        title: "Execution error",
                        content: msg,
                    });
                }
            }
        });
    }
    __getStatic() {
        return LoginPage;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(LoginPage.__style);
        return arrStyle;
    }
    __getHtml() {
super.__getHtml();
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<div class="login-header">
    <h2 class="login-title">Sign in to your account</h2>
    <p class="login-subtext">
        <span>Or&nbsp;</span>
        <av-router-link state="/signup" class="link-accent">
            create a new account
        </av-router-link>
    </p>
</div><div class="login-form-wrapper">
    <div class="login-form-card">
        <av-form class="login-form">
            <as-input label="Username" id="username" type="text" autoComplete="username" _id="loginpage_0"></as-input>
            <as-input label="Password" id="password" type="password" autoComplete="current-password" _id="loginpage_1"></as-input>
            <template _id="loginpage_2"></template>
            <div class="form-footer">
                <av-router-link state="/forgot-password" class="link-accent">
                    Forgot your password?
                </av-router-link>
            </div>
            <div>
                <as-button type="submit" class="btn-full" _id="loginpage_4">
                    Sign in
                </as-button>
            </div>
        </av-form>
    </div>
</div>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "injection": [
    {
      "id": "loginpage_0",
      "injectionName": "form",
      "inject": (c) => c.comp.__27946d41fc0e75aee3c4ffe1584badabmethod1(),
      "once": true
    },
    {
      "id": "loginpage_1",
      "injectionName": "form",
      "inject": (c) => c.comp.__27946d41fc0e75aee3c4ffe1584badabmethod2(),
      "once": true
    },
    {
      "id": "loginpage_4",
      "injectionName": "loading",
      "inject": (c) => c.comp.__27946d41fc0e75aee3c4ffe1584badabmethod4(),
      "once": true
    }
  ],
  "events": [
    {
      "eventName": "focus",
      "id": "loginpage_0",
      "fct": (e, c) => c.comp.clearError(e)
    },
    {
      "eventName": "focus",
      "id": "loginpage_1",
      "fct": (e, c) => c.comp.clearError(e)
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(`
                <div class="form-error">
                    <div class="error" _id="loginpage_3"></div>
                </div>
            `);
templ0.setActions({
  "content": {
    "loginpage_3°@HTML": {
      "fct": (c) => `${c.print(c.comp.__27946d41fc0e75aee3c4ffe1584badabmethod3())}`,
      "once": true
    }
  }
});
this.__getStatic().__template.addIf({
                    anchorId: 'loginpage_2',
                    parts: [{once: true,
                    condition: (c) => c.comp.__27946d41fc0e75aee3c4ffe1584badabmethod0(),
                    template: templ0
                }]
            });
 }
    getClassName() {
        return "LoginPage";
    }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["error"] = undefined;
w["isLoading"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__correctGetter('error');
this.__correctGetter('isLoading');
 }
    configure() {
        return {};
    }
    isAllowed(state) {
        if (Main.user) {
            return "/";
        }
        return true;
    }
    clearError() {
        this.error = undefined;
    }
    __27946d41fc0e75aee3c4ffe1584badabmethod3() {
        return this.error;
    }
    __27946d41fc0e75aee3c4ffe1584badabmethod0() {
        return this.error;
    }
    __27946d41fc0e75aee3c4ffe1584badabmethod1() {
        return this.form.parts.username;
    }
    __27946d41fc0e75aee3c4ffe1584badabmethod2() {
        return this.form.parts.password;
    }
    __27946d41fc0e75aee3c4ffe1584badabmethod4() {
        return this.isLoading;
    }
}
LoginPage.Namespace=`AventusStore`;
LoginPage.Tag=`as-login-page`;
__as1(_, 'LoginPage', LoginPage);
if(!window.customElements.get('as-login-page')){window.customElements.define('as-login-page', LoginPage);Aventus.WebComponentInstance.registerDefinition(LoginPage);}

const Main = class Main extends Aventus.Navigation.Router {
    static instance;
    static get user() {
        return this.instance.indexResource.user;
    }
    indexResource;
    bearer;
    onScrollChange = new Aventus.Callback();
    onRouteChange = new Aventus.Callback();
    static __style = `:host{display:flex;flex-direction:column;height:100%;position:relative;width:100%;z-index:1}:host .scroll{--scroller-right: 6px;--scroller-left: 6px;width:100%;flex-grow:1;min-height:0}:host .scroll .scroll-wrapper{display:flex;flex-direction:column;height:100%;min-height:calc(100vh - 65px)}:host .scroll .scroll-wrapper .content{flex-grow:1;min-height:0}`;
    constructor() {
        super();
        Main.instance = this;
        this.indexResource = window['indexResource'];
        this.bearer = localStorage.getItem("token");
    }
    __getStatic() {
        return Main;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(Main.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<as-header></as-header><av-scrollable floating_scroll class="scroll" auto_hide _id="main_0">
    <div class="scroll-wrapper">
        <div class="content" _id="main_1"></div>
        <as-footer></as-footer>
    </div>
</av-scrollable>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "elements": [
    {
      "name": "scrollEl",
      "ids": [
        "main_0"
      ]
    },
    {
      "name": "contentEl",
      "ids": [
        "main_1"
      ]
    }
  ]
});
 }
    getClassName() {
        return "Main";
    }
    addScroll() {
        this.scrollEl.onScrollChange.add((x, y) => {
            this.onScrollChange.trigger(x, y);
        });
    }
    defineRoutes() {
        this.addRoute('/', HomePage);
        this.addRoute('/packages', PackagesPage);
        this.addRoute('/packages/{id:string}', PackageDetailsPage);
        this.addRoute('/templates', TemplatesPage);
        this.addRoute('/templates/{id:string}', TemplateDetailsPage);
        this.addRoute('/user/{id:string}', UserPage);
        this.addRoute('/profile', UserProfilePage);
        this.addRoute('/org/{id:string}', OrganizationPage);
        this.addRoute('/org/{id:string}/admin', OrganizationAdminPage);
        //#region auth
        this.addRoute('/login', LoginPage);
        this.addRoute('/signup', SignupPage);
        this.addRoute('/forgot-password', ForgotPasswordPage);
        this.addRoute('/validation/success', ValidationResultPage);
        this.addRoute('/validation/failure', ValidationResultPage);
        //#endregion
    }
    postCreation() {
        super.postCreation();
        this.addScroll();
        Aventus.Toast.ToastManager.configure({
            defaultDelay: 5000,
            defaultPosition: "top right",
            defaultToast: Toast,
            heightLimitPercent: 100
        });
        Modal.configure({
            closeWithClick: false,
            closeWithEsc: false,
            rejectValue: null
        });
        Aventus.Form.Form.configure({
            onServerFallback: (errors) => {
                if (errors.length > 0) {
                    let msg = errors.map(p => p.message.replace(/\n/g, '<br/>')).join("<br/>");
                    Alert.open({
                        title: "Execution error",
                        content: msg,
                    });
                }
            },
            onValidateFallback: (errors) => {
                const li = [];
                for (let key in errors) {
                    if (errors[key]) {
                        for (let msg of errors[key]) {
                            li.push(`<li>${key} : ${msg}</li>`);
                        }
                    }
                }
                Alert.open({
                    title: "Form validation error",
                    content: `<p>The form can't be validated because of :</p><ul>${li.join("")}</ul>`
                });
            }
        });
        Aventus.HttpRequest.configure({
            beforeSend: (request) => {
                const result = new Aventus.VoidWithError();
                request.setCredentials("include");
                if (this.indexResource.user) {
                    request.setHeader("Authorization", "Bearer " + this.bearer);
                }
                return result;
            },
            responseMiddleware: (response, request) => {
                if (response.containsCode(401)) {
                    location.reload();
                }
                return response;
            }
        });
        Aventus.Process.configure({
            handleErrors: (msg) => {
                Alert.open({
                    title: "Execution error",
                    content: msg,
                });
            }
        });
        Aventus.Form.Validators.Required.msg = "Thie field {name} is required";
        this.stateManager.onAfterStateChanged(() => {
            this.onRouteChange.trigger();
        });
    }
}
Main.Namespace=`AventusStore`;
Main.Tag=`as-main`;
__as1(_, 'Main', Main);
if(!window.customElements.get('as-main')){window.customElements.define('as-main', Main);Aventus.WebComponentInstance.registerDefinition(Main);}

const PackageCard = class PackageCard extends Aventus.WebComponent {
    get 'no_owner'() { return this.getBoolAttr('no_owner') }
    set 'no_owner'(val) { this.setBoolAttr('no_owner', val) }
    get 'package'() {
						return this.__watch["package"];
					}
					set 'package'(val) {
						this.__watch["package"] = val;
					}
    __registerWatchesActions() {
    this.__addWatchesActions("package");
    super.__registerWatchesActions();
}
    static __style = `:host{display:block;height:100%}:host .package-card-link{display:contents}:host .package-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:.5rem;display:flex;flex-direction:column;height:100%;justify-content:space-between;padding:1.5rem;transition:all .2s ease-in-out}:host .package-card:hover{background:var(--card-bg-hover);border-color:var(--card-border-hover);transform:translateY(-4px)}:host .package-name{color:var(--text-white);font-size:1.25rem;font-weight:bold;margin:0}:host .package-description{color:var(--text-muted);font-size:.875rem;margin-top:.5rem}:host .package-footer{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}:host .package-tags{display:flex;flex-wrap:wrap;gap:.5rem}:host .package-tags .package-tag{background-color:var(--tag-bg);border-radius:.25rem;color:var(--tag-text);cursor:pointer;font-size:.8rem;font-weight:500;padding:.5rem .75rem;transition:background-color .2s ease-in-out}:host .package-tags .package-tag:hover{background-color:var(--tag-bg-hover)}:host .package-meta{align-items:center;color:var(--text-muted);display:flex;font-size:.875rem;justify-content:space-between}:host .package-author{align-items:center;color:inherit;display:flex;gap:.5rem;text-decoration:none}:host .package-author:hover{color:var(--color-accent)}:host .author-avatar{border-radius:9999px;font-size:10px;height:1.5rem;letter-spacing:0;width:1.5rem}:host .package-downloads{align-items:center;display:flex;gap:.4rem}:host .icon-xs{align-items:center;display:flex;font-size:1rem;height:1rem;justify-content:center;width:1rem}:host([no_owner]) .package-footer{flex-direction:row}:host([no_owner]) .package-footer .package-tags{flex-grow:1;flex-wrap:wrap}:host([no_owner]) .package-footer .package-meta{flex-shrink:0}:host([no_owner]) .package-author{display:none}`;
    __getStatic() {
        return PackageCard;
    }
    __getStyle() {
        let arrStyle = super.__getStyle();
        arrStyle.push(PackageCard.__style);
        return arrStyle;
    }
    __getHtml() {
    this.__getStatic().__template.setHTML({
        blocks: { 'default':`<av-router-link class="package-card-link" _id="packagecard_0">
    <div class="package-card">
        <div>
            <h3 class="package-name" _id="packagecard_1"></h3>
            <p class="package-description" _id="packagecard_2"></p>
        </div>
        <div class="package-footer">
            <div class="package-tags">
                <template _id="packagecard_3"></template>
            </div>
            <div class="package-meta">
                <av-router-link class="package-author" _id="packagecard_5">
                    <as-user-img class="author-avatar" _id="packagecard_6"></as-user-img>
                    <span _id="packagecard_7"></span>
                </av-router-link>
                <div class="package-downloads">
                    <mi-icon icon="download" class="icon-xs"></mi-icon>
                    <span _id="packagecard_8"></span>
                </div>
            </div>
        </div>
    </div>
</av-router-link>` }
    });
}
    __registerTemplateAction() { super.__registerTemplateAction();
this.__getStatic().__template.setActions({
  "content": {
    "packagecard_0°state": {
      "fct": (c) => `${c.print(c.comp.__9889d5032f655f5f060fcc03aefaedc9method1())}`,
      "once": true
    },
    "packagecard_1°@HTML": {
      "fct": (c) => `${c.print(c.comp.__9889d5032f655f5f060fcc03aefaedc9method2())}`,
      "once": true
    },
    "packagecard_2°@HTML": {
      "fct": (c) => `${c.print(c.comp.__9889d5032f655f5f060fcc03aefaedc9method3())}`,
      "once": true
    },
    "packagecard_5°state": {
      "fct": (c) => `${c.print(c.comp.__9889d5032f655f5f060fcc03aefaedc9method5())}`,
      "once": true
    },
    "packagecard_7°@HTML": {
      "fct": (c) => `${c.print(c.comp.__9889d5032f655f5f060fcc03aefaedc9method7())}`,
      "once": true
    },
    "packagecard_8°@HTML": {
      "fct": (c) => `${c.print(c.comp.__9889d5032f655f5f060fcc03aefaedc9method8())}`,
      "once": true
    }
  },
  "injection": [
    {
      "id": "packagecard_6",
      "injectionName": "user",
      "inject": (c) => c.comp.__9889d5032f655f5f060fcc03aefaedc9method6(),
      "once": true
    }
  ]
});
const templ0 = new Aventus.Template(this);
templ0.setTemplate(` 
                    <span class="package-tag" _id="packagecard_4"></span>
                `);
templ0.setActions({
  "content": {
    "packagecard_4°@HTML": {
      "fct": (c) => `${c.print(c.comp.__9889d5032f655f5f060fcc03aefaedc9method4(c.data.tag))}`,
      "once": true
    }
  },
  "pressEvents": [
    {
      "id": "packagecard_4",
      "onPress": (e, pressInstance, c) => { c.comp.searchTag(e, pressInstance); }
    }
  ]
});
this.__getStatic().__template.addLoop({
                    anchorId: 'packagecard_3',
                    template: templ0,
                simple:{data: "this.package.tags",item:"tag"}
});
 }
    getClassName() {
        return "PackageCard";
    }
    __defaultValues() { super.__defaultValues(); if(!this.hasAttribute('no_owner')) { this.attributeChangedCallback('no_owner', false, false); }
 }
    __defaultValuesWatch(w) { super.__defaultValuesWatch(w); w["package"] = undefined;
 }
    __upgradeAttributes() { super.__upgradeAttributes(); this.__upgradeProperty('no_owner');
this.__correctGetter('package');
 }
    __listBoolProps() { return ["no_owner"].concat(super.__listBoolProps()).filter((v, i, a) => a.indexOf(v) === i); }
    getFromState() {
        if (this.package.isUser) {
            return "/user/" + this.package.fromName;
        }
        return "/org/" + this.package.fromName;
    }
    searchTag(e, press) {
        let state = new PackagesPageState();
        state.search = "#" + press.getElement().innerHTML;
        Main.instance.navigate(state);
    }
    __9889d5032f655f5f060fcc03aefaedc9method1() {
        return '/packages/' + this.package.name;
    }
    __9889d5032f655f5f060fcc03aefaedc9method2() {
        return this.package.name;
    }
    __9889d5032f655f5f060fcc03aefaedc9method3() {
        return this.package.description;
    }
    __9889d5032f655f5f060fcc03aefaedc9method4(tag) {
        return tag;
    }
    __9889d5032f655f5f060fcc03aefaedc9method5() {
        return this.getFromState();
    }
    __9889d5032f655f5f060fcc03aefaedc9method7() {
        return this.package.fromName;
    }
    __9889d5032f655f5f060fcc03aefaedc9method8() {
        return this.package.downloads;
    }
    __9889d5032f655f5f060fcc03aefaedc9method6() {
        return { username: this.package.fromName, picture: { 'uri': this.package.fromImg } };
    }
}
PackageCard.Namespace=`AventusStore`;
PackageCard.Tag=`as-package-card`;
__as1(_, 'PackageCard', PackageCard);
if(!window.customElements.get('as-package-card')){window.customElements.define('as-package-card', PackageCard);Aventus.WebComponentInstance.registerDefinition(PackageCard);}


for(let key in _) { AventusStore[key] = _[key] }
})(AventusStore);
