!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("sass",function(a){function b(a){return new RegExp("^"+a.join("|"))}function c(a,b){var c=a.peek();return")"===c?(a.next(),b.tokenizer=i,"operator"):"("===c?(a.next(),a.eatSpace(),"operator"):"'"===c||'"'===c?(b.tokenizer=e(a.next()),"string"):(b.tokenizer=e(")",!1),"string")}function d(a,b){return function(c,d){return c.sol()&&c.indentation()<=a?(d.tokenizer=i,i(c,d)):(b&&c.skipTo("*/")?(c.next(),c.next(),d.tokenizer=i):c.skipToEnd(),"comment")}}function e(a,b){function c(d,e){var g=d.next(),h=d.peek(),j=d.string.charAt(d.pos-2);return"\\"!==g&&h===a||g===a&&"\\"!==j?(g!==a&&b&&d.next(),e.tokenizer=i,"string"):"#"===g&&"{"===h?(e.tokenizer=f(c),d.next(),"operator"):"string"}return null==b&&(b=!0),c}function f(a){return function(b,c){return"}"===b.peek()?(b.next(),c.tokenizer=a,"operator"):i(b,c)}}function g(b){if(0==b.indentCount){b.indentCount++;var c=b.scopes[0].offset,d=c+a.indentUnit;b.scopes.unshift({offset:d})}}function h(a){1!=a.scopes.length&&a.scopes.shift()}function i(a,b){var j=a.peek();if(a.match("/*"))return b.tokenizer=d(a.indentation(),!0),b.tokenizer(a,b);if(a.match("//"))return b.tokenizer=d(a.indentation(),!1),b.tokenizer(a,b);if(a.match("#{"))return b.tokenizer=f(i),"operator";if('"'===j||"'"===j)return a.next(),b.tokenizer=e(j),"string";if(b.cursorHalf){if("#"===j&&(a.next(),a.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))return a.peek()||(b.cursorHalf=0),"number";if(a.match(/^-?[0-9\.]+/))return a.peek()||(b.cursorHalf=0),"number";if(a.match(/^(px|em|in)\b/))return a.peek()||(b.cursorHalf=0),"unit";if(a.match(l))return a.peek()||(b.cursorHalf=0),"keyword";if(a.match(/^url/)&&"("===a.peek())return b.tokenizer=c,a.peek()||(b.cursorHalf=0),"atom";if("$"===j)return a.next(),a.eatWhile(/[\w-]/),a.peek()||(b.cursorHalf=0),"variable-3";if("!"===j)return a.next(),a.peek()||(b.cursorHalf=0),a.match(/^[\w]+/)?"keyword":"operator";if(a.match(n))return a.peek()||(b.cursorHalf=0),"operator";if(a.eatWhile(/[\w-]/))return a.peek()||(b.cursorHalf=0),"attribute";if(!a.peek())return b.cursorHalf=0,null}else{if("."===j){if(a.next(),a.match(/^[\w-]+/))return g(b),"atom";if("#"===a.peek())return g(b),"atom"}if("#"===j){if(a.next(),a.match(/^[\w-]+/))return g(b),"atom";if("#"===a.peek())return g(b),"atom"}if("$"===j)return a.next(),a.eatWhile(/[\w-]/),"variable-2";if(a.match(/^-?[0-9\.]+/))return"number";if(a.match(/^(px|em|in)\b/))return"unit";if(a.match(l))return"keyword";if(a.match(/^url/)&&"("===a.peek())return b.tokenizer=c,"atom";if("="===j&&a.match(/^=[\w-]+/))return g(b),"meta";if("+"===j&&a.match(/^\+[\w-]+/))return"variable-3";if("@"===j&&a.match(/@extend/)&&(a.match(/\s*[\w]/)||h(b)),a.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return g(b),"meta";if("@"===j)return a.next(),a.eatWhile(/[\w-]/),"meta";if(a.eatWhile(/[\w-]/))return a.match(/ *: *[\w-\+\$#!\("']/,!1)?"property":a.match(/ *:/,!1)?(g(b),b.cursorHalf=1,"atom"):a.match(/ *,/,!1)?"atom":(g(b),"atom");if(":"===j)return a.match(o)?"keyword":(a.next(),b.cursorHalf=1,"operator")}return a.match(n)?"operator":(a.next(),null)}function j(b,c){b.sol()&&(c.indentCount=0);var d=c.tokenizer(b,c),e=b.current();if("@return"!==e&&"}"!==e||h(c),null!==d){for(var f=b.pos-e.length,g=f+a.indentUnit*c.indentCount,i=[],j=0;j<c.scopes.length;j++){var k=c.scopes[j];k.offset<=g&&i.push(k)}c.scopes=i}return d}var k=["true","false","null","auto"],l=new RegExp("^"+k.join("|")),m=["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"],n=b(m),o=/^::?[a-zA-Z_][\w\-]*/;return{startState:function(){return{tokenizer:i,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(a,b){var c=j(a,b);return b.lastToken={style:c,content:a.current()},c},indent:function(a){return a.scopes[0].offset}}}),a.defineMIME("text/x-sass","sass")});