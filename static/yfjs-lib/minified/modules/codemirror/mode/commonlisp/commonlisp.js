!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("commonlisp",function(a){function b(a){for(var b;b=a.next();)if("\\"==b)a.next();else if(!j.test(b)){a.backUp(1);break}return a.current()}function c(a,c){if(a.eatSpace())return f="ws",null;if(a.match(i))return"number";var j=a.next();if("\\"==j&&(j=a.next()),'"'==j)return(c.tokenize=d)(a,c);if("("==j)return f="open","bracket";if(")"==j||"]"==j)return f="close","bracket";if(";"==j)return a.skipToEnd(),f="ws","comment";if(/['`,@]/.test(j))return null;if("|"==j)return a.skipTo("|")?(a.next(),"symbol"):(a.skipToEnd(),"error");if("#"==j){var j=a.next();return"["==j?(f="open","bracket"):/[+\-=\.']/.test(j)?null:/\d/.test(j)&&a.match(/^\d*#/)?null:"|"==j?(c.tokenize=e)(a,c):":"==j?(b(a),"meta"):"error"}var k=b(a);return"."==k?null:(f="symbol","nil"==k||"t"==k||":"==k.charAt(0)?"atom":"open"==c.lastType&&(g.test(k)||h.test(k))?"keyword":"&"==k.charAt(0)?"variable-2":"variable")}function d(a,b){for(var d,e=!1;d=a.next();){if('"'==d&&!e){b.tokenize=c;break}e=!e&&"\\"==d}return"string"}function e(a,b){for(var d,e;d=a.next();){if("#"==d&&"|"==e){b.tokenize=c;break}e=d}return f="ws","comment"}var f,g=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,h=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,i=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,j=/[^\s'`,@()\[\]";]/;return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:c}},token:function(b,c){b.sol()&&"number"!=typeof c.ctx.indentTo&&(c.ctx.indentTo=c.ctx.start+1),f=null;var d=c.tokenize(b,c);return"ws"!=f&&(null==c.ctx.indentTo?"symbol"==f&&h.test(b.current())?c.ctx.indentTo=c.ctx.start+a.indentUnit:c.ctx.indentTo="next":"next"==c.ctx.indentTo&&(c.ctx.indentTo=b.column()),c.lastType=f),"open"==f?c.ctx={prev:c.ctx,start:b.column(),indentTo:null}:"close"==f&&(c.ctx=c.ctx.prev||c.ctx),d},indent:function(a,b){var c=a.ctx.indentTo;return"number"==typeof c?c:a.ctx.start+1},closeBrackets:{pairs:'()[]{}""'},lineComment:";;",blockCommentStart:"#|",blockCommentEnd:"|#"}}),a.defineMIME("text/x-common-lisp","commonlisp")});