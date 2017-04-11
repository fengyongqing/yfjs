!function(root, undefined) {
	"use strict";

    var isUndef = function(o) { return typeof o === "undefined"; };

    var isFunction = function(o) { return typeof o === "function"; };

    var hasOwn = {}.hasOwnProperty || function(prop) { return this && !isUndef(this[prop]); };

    var $Array = Array;
    var ArrayPrototype = $Array.prototype;
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    var $Function = Function;
    var FunctionPrototype = $Function.prototype;
    var $String = String;
    var StringPrototype = $String.prototype;
    var $Number = Number;
    var NumberPrototype = $Number.prototype;

    var YFjs = {};

    YFjs.VERSION = '0.8.1' || '@version';

    // 判断浏览器版本
    YFjs.browser = (function() {
        //ie11: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; InfoPath.3; rv:11.0) like Gecko
        //ie9 : Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)
        //ie8 : Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)
        //ie7 : Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; Tablet PC 2.0; .NET4.0E; .NET4.0C)
        //Firefox : Mozilla/5.0 (Windows NT 6.1; rv:20.0) Gecko/20100101 Firefox/20.0
        //Chrome  : Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22
        //Opera   : Opera/9.80  (Windows NT 6.1; Edition IBIS) Presto/2.12.388 Version/12.14
        //Safari  : Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
        var userAgent = (function() {
            try {
                return root.navigator.userAgent;
            } catch (e) {
                return '';
            }
        })();

        var browser = {
            ie: false,
            ie55: false,
            ie6: false,
            ie7: false,
            ie8: false,
            ie9: false,
            ie10: false,
            ie11: false,
            edge: false,
            ff: false,
            safari: false,
            chrome: false,
            opera: false
        };

        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
        var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

        var version;

        if (isEdge) {
            browser.ie = 'edge';
            browser.edge = true;
        } else if (isIE) {
            var reIE = /MSIE (\d+\.\d+);/;
            if (version = userAgent.match(reIE)) {
                version = parseFloat(version[1]);
            }
            version = version || 0.1;
            switch (version) {
                case 5.5:
                    browser.ie55 = true;
                    break;
                case 6.0:
                    browser.ie6 = true;
                    break;
                case 7.0:
                    browser.ie7 = true;
                    break;
                case 8.0:
                    browser.ie8 = true;
                    break;
                case 9.0:
                    if (!root.innerWidth) {
                        browser.ie8 = true;
                    } else {
                        browser.ie9 = true;
                    }
                    break;
                case 10.0:
                    browser.ie10 = true;
                    break;
                case 11.0:
                    browser.ie11 = true;
                    break;
                default:
                    break;
            }
            browser.ie = version;
        } else if (isFF) {
            var reFF = /Firefox\/(\d+(?:\.\d+)+)/;
            if (version = userAgent.match(reFF)) {
                version = parseFloat(version[1]);
            }
            browser.ff = version || 0.1;
        } else if (isChrome) {
            var reChrome = /Chrome\/(\d+(?:\.\d+)+)/;
            if (version = userAgent.match(reChrome)) {
                version = parseFloat(version[1]);
            }
            browser.chrome = version || 0.1;
        } else if (isSafari) {
            var reSafari = /Safari\/(\d+(?:\.\d+)+)/;
            if (version = userAgent.match(reSafari)) {
                version = parseFloat(version[1]);
            }
            browser.safari = version || 0.1;
        } else if (isOpera) {
            var reOpera = /Opera\/(\d+(?:\.\d+)+)/;
            if (version = userAgent.match(reOpera)) {
                version = parseFloat(version[1]);
            }
            browser.opera = version || 0.1;
        } else if (isIE11()) {
            // IE11
            browser.ie11 = true;
            browser.ie = 11;
        }

        return browser;

        function isIE11() {
            if (!!root.ActiveXObject || "ActiveXObject" in root)
                return true;
            else
                return false;
        }
    })();

    var document = document || root.document;

    var headElement = document.head || document.getElementsByTagName("head")[0];
    var baseElement = null;

    // base href
    var baseHref = function() {
        // Create
        var
            baseElements = document.getElementsByTagName('base'),
            baseHref = '';

        // Test for Base Element
        if ( baseElements.length === 1 ) {
            // Prepare for Base Element
            baseElement = baseElements[0];
            baseHref = baseElement.href.replace(/[^\/]+$/,'');
        }

        // Adjust trailing slash
        baseHref = baseHref.replace(/\/+$/,'');
        if ( baseHref ) baseHref += '/';

        // Return
        return baseHref;
    }();

    var styleLinks = function() {
        var styleLinks = [];
        try {
            var links = document.getElementsByTagName("link");
            for (var i=0; i<links.length; i++) {
                var link = links[i];
                if (link && link.rel == "stylesheet") {
                    styleLinks.push(link);
                }
            }
        } catch(e) {
            styleLinks = [];
        }
        return styleLinks;
    };
    
    var firstStyleLink = function() {
        var _styleLinks = styleLinks();
        var firstStyleLink = null;
        if (_styleLinks && _styleLinks.length) {
            firstStyleLink = _styleLinks[0];
        }
        return firstStyleLink;
    }();


    var docHref = document.location.href || '';
    var protocol = document.location.protocol || '';
    var host = document.location.hostname || document.location.host || '';
    var port = document.location.port == null ? '' : document.location.port + '';
    var domain = function() {
        var domain;

        var portEnds = ':' + port,
            posPortEnd = host.indexOf(portEnds);

        if (posPortEnd == host.length - portEnds.length) {
            host = host.substring(0, posPortEnd);
        }

        if (port.length) {
            domain = host + portEnds;
        } else {
            domain = host;
        }

        return domain;
    }();

    // 根路径
    var rootUrl = function() {
        var root = protocol + (
            docHref.indexOf(protocol + "//") == 0 ? '//' : '/'
        ) + domain;
        if (root === '//' || root === '/') {
            root = '';
        }
        root += '/';
        return root;
    }();

    var scripts = function() {
        var scripts;
        try {
            scripts = document.getElementsByTagName("script") || [];
        } catch (e) {
            scripts = [];
        }
        return scripts;
    };

    var mainScriptData;

    var scriptDataList = [
    	// 全局缓存开关
    	'data-cache',
    	// 调试模式开关
    	'data-debug',
        'data-debug-css',
        'data-debug-module',
        // 是否引入基本样式文件
        'data-basecss',
    	// 应用访问基路径
    	'data-base',
        // 应用内自定义模块引入基路径
        'data-base-require',
    	// 是否引入所有兼容脚本
    	'data-compatible',
        // 是否引入 Modernizr 兼容脚本
        'data-compatible-modernizr',
        // 是否引入 respond 兼容脚本
        'data-compatible-respond',
        // 是否引入 html5shiv 兼容脚本
        'data-compatible-html5',
        // 是否引入 es5 兼容脚本
        'data-compatible-es5',
        // 是否引入 es6 兼容脚本
        'data-compatible-es6',
        // 是否引入 json 兼容脚本
        'data-compatible-json',
     	// 应用入口 JS 文件
    	'data-main'
	];

    var mainScript = function() {
        var script;
        if ('currentScript' in document) {
            script = document.currentScript;
        }
        if (!script) {
            var _scripts = scripts(), scriptData, scriptDataItem;
            for (var i=_scripts.length-1; i>-1; i--) {
                script = _scripts[i];
                for (var j=0; j<scriptDataList.length; j++) {
                    scriptDataItem = scriptDataList[i];
                    scriptData = script.getAttribute(scriptDataItem);
                    if (scriptData != null) {
                        if (scriptDataItem == 'data-main') {
                            mainScriptData = scriptData;
                        }
                        break;
                    }
                }
                if (scriptData != null) break;
            }
            if (!script) {
                script = _scripts[_scripts.length-1];
            }
        } else {
            mainScriptData = script.getAttribute('data-main');
        }
        return script;
    }();

    if (mainScript != null && mainScriptData != null) {
        try {
            mainScript.removeAttribute("data-main");
        } catch(e) {}
    }

    // 是否引入兼容脚本。不为 false 时将自动引入 moderrespond、html5-shiv 等兼容脚本
	YFjs.bCompatible = parseBooleanAttr('data-compatible');

    // 是否引入 Modernizr 兼容脚本。不为 false 时将自动引入
    YFjs.bCompatibleModernizr = parseBooleanAttr('data-compatible-modernizr', YFjs.bCompatible);
    
    // 是否引入 respond 兼容脚本。不为 false 时将自动引入
    YFjs.bCompatibleRespond = parseBooleanAttr('data-compatible-respond', YFjs.bCompatible);
    
    // 是否引入 html5shiv 兼容脚本。不为 false 时将自动引入
    YFjs.bCompatibleHtml5 = parseBooleanAttr('data-compatible-html5', YFjs.bCompatible);
    
    // 是否引入 ECMAScript 5 兼容脚本。不为 false 时将自动引入
    YFjs.bCompatibleES5 = parseBooleanAttr('data-compatible-es5', YFjs.bCompatible);
    
    // 是否引入 ECMAScript 6 兼容脚本。不为 false 时将自动引入
    YFjs.bCompatibleES6 = parseBooleanAttr('data-compatible-es6', YFjs.bCompatible);
    
    // 是否引入 JSON 兼容脚本。不为 false 时将自动引入
    YFjs.bCompatibleJSON = parseBooleanAttr('data-compatible-json', YFjs.bCompatible);

    // 是否引入基本样式文件。不为 false 时将自动引入框架的 base.css 文件
	YFjs.bBaseCss = parseBooleanAttr('data-basecss');

    // 是否开启调试模式。调试模式下使用未压缩的代码
	YFjs.bDebug = parseBooleanAttr('data-debug');

    // 是否开启基本样式调试模式。基本样式调试模式下使用未压缩的基本样式代码
    YFjs.bDebugCss = parseBooleanAttr('data-debug-css', YFjs.bDebug);

    // 是否开启模块调试模式。模块调试模式下使用未压缩的模块代码
    YFjs.bDebugModule = parseBooleanAttr('data-debug-module', YFjs.bDebug);

    if (YFjs.bDebug == null) {
        YFjs.bDebug = YFjs.bDebugModule != null ? YFjs.bDebugModule : (YFjs.bDebugCss != null ? YFjs.bDebugCss : YFjs.bDebug);
    }

    // 是否开启模块缓存。不启用缓存时则在引入模块时添加时间戳标记，防止浏览器缓存模块内容
    YFjs.bCache = parseBooleanAttr('data-cache');

    // 当前应用 baseUrl
    YFjs.baseUrl = function() {
        var base;
        try {
            base = mainScript.getAttribute('data-base');
        } catch (e) {
            base = null;
        }
        if (base == null) {
            base = baseHref;
        }
        return getUrl(base, rootUrl);
    }();

    // 框架基本样式 baseUrl
    YFjs.baseCss = getSrcBaseUrl(YFjs.bDebugCss);

    // 框架模块 baseUrl
    YFjs.baseMd = getSrcBaseUrl(YFjs.bDebugModule);

    function getSrcBaseUrl(bDebug) {
        var mainUrl;
        try {
            mainUrl = mainScript.src || '';
        } catch (e) {
            mainUrl = '';
        }
        mainUrl = mainUrl.split('/');
        mainUrl.pop();
        mainUrl.push(bDebug !== true ? 'minified' : 'original');
        mainUrl = mainUrl.length ? mainUrl.join('/')  + '/' : '';
        return getUrl(mainUrl);
    }

    // 自定义模块 baseUrl
    YFjs.baseRq = function() {
        var rqPath;
        try {
            rqPath = mainScript.getAttribute('data-base-require');
        } catch (e) {
            rqPath = null;
        }
        return getUrl(rqPath);
    }();

    try {
        YFjs.timestamp = new Date().getTime();
    } catch (e) {
        YFjs.timestamp = "nowTime";
    }

    function getUrl(path, relativeUrl) {
        var url;

        if (relativeUrl == null) {
            relativeUrl = YFjs.baseUrl;
        }

        path = path == null ? "" : (path + "").replace(/(^\s*)|(\s*$)/g, "");

        if (path.length) {
            if (/^\/\/(?!\/)/.test(path)) {
                path = protocol + path;
            }
            if (/^((?:(?:https?|s?ftp):)|(?:file:\/))\/\//.test(path)) {
                url = path;
            } else {
                if (/^\//.test(path)) {
                    relativeUrl = rootUrl;
                }
                path = path.replace(/^\/+/, "");
                if (!/\/$/.test(relativeUrl)) {
                    relativeUrl += "/";
                }
                url = relativeUrl + path;
            }
        } else {
            url = relativeUrl;
        }

        if (url == null) {
            url = "";
        }

        url = url.replace(/\/+$/, "").replace(/\\+/g, "/");

        return url;
    }

    function parseBooleanAttr(attrName, def) {
    	var val;
    	if (attrName == null) return val;
		try {
        	val = mainScript.getAttribute(attrName + '');
	        if (val != null) {
	            val = eval(val);
	        } else {
	            val = def;
	        }
	    } catch (e) {
	        val = def;
	    }
	    return val;
    }

    function createScriptElement(src, attrs) {
        if (src == null) return null;

        var script = document.createElement('script');
        script.setAttribute('type', "text/javascript");

        if (attrs != null) {
            for (var key in attrs) {
                script.setAttribute(key, attrs[key]);
            }
        }

        script.setAttribute('src', src);

        return script;
    }

    function insertBefore(newEl, targetEl) {
        targetEl = targetEl || mainScript;
        if (targetEl) {
            var parentEl = targetEl.parentNode || headElement;
            parentEl.insertBefore(newEl, targetEl);
        }
    }

    function insertAfter(newEl, targetEl) {
        targetEl = targetEl || mainScript;
        if (targetEl) {
            var parentEl = targetEl.parentNode;
            if (parentEl.lastChild == targetEl) {
                parentEl.appendChild(newEl);
            } else {
                parentEl.insertBefore(newEl, targetEl.nextSibling);
            }
        }
    }

    function appendChild(newEl) {
        headElement.appendChild(newEl);
    }

    var mod = "__yfjs__";

    function injectElementWithStyles( rule, callback, nodes, testnames ) {

        var style, ret, node, docOverflow,
            div = document.createElement('div'),
            body = document.body,
            fakeBody = body || document.createElement('body');

        if ( parseInt(nodes, 10) ) {
            while ( nodes-- ) {
                node = document.createElement('div');
                node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                div.appendChild(node);
            }
        }

        style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
        div.id = mod;
        (body ? div : fakeBody).innerHTML += style;
        fakeBody.appendChild(div);
        if ( !body ) {
            fakeBody.style.background = '';
            fakeBody.style.overflow = 'hidden';
            docOverflow = docElement.style.overflow;
            docElement.style.overflow = 'hidden';
            docElement.appendChild(fakeBody);
        }

        ret = callback(div, rule);
        if ( !body ) {
            fakeBody.parentNode.removeChild(fakeBody);
            docElement.style.overflow = docOverflow;
        } else {
            div.parentNode.removeChild(div);
        }

        return !!ret;

    }

    function testMediaQuery( mq ) {

        var matchMedia = window.matchMedia || window.msMatchMedia;
        if ( matchMedia ) {
            return matchMedia(mq) && matchMedia(mq).matches || false;
        }

        var bool;

        injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
            bool = (window.getComputedStyle ?
                getComputedStyle(node, null) :
                node.currentStyle)['position'] == 'absolute';
        });

        return bool;

    }

    function testHtml5Elements () {
    	var supportsHtml5Styles, supportsUnknownElements;
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                (document.createElement)('a');
                var frag = document.createDocumentFragment();
                return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
                );
            }());
        } catch(e) {
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
        }
        return (supportsHtml5Styles && supportsUnknownElements);
    }

    function testJSON() {
    	return 'JSON' in root && 'parse' in root.JSON && 'stringify' in root.JSON;
    }

    function testSupportsES5() {
        // Object
        var supportsObject =
            isFunction($Object.keys)
            && isFunction($Object.getPrototypeOf)
            && isFunction($Object.getOwnPropertyDescriptor)
            && isFunction($Object.getOwnPropertyNames)
            && isFunction($Object.defineProperty)
            && isFunction($Object.defineProperties)
            && isFunction($Object.seal)
            && isFunction($Object.freeze)
            && isFunction($Object.preventExtensions)
            && isFunction($Object.isSealed)
            && isFunction($Object.isFrozen)
            && isFunction($Object.isExtensible);
        if (!supportsObject) return false;
        // Function
        var supportsFunction = 
            isFunction(FunctionPrototype.bind);
        if (!supportsFunction) return false;
        // String
        var supportsString =
            isFunction(StringPrototype.trim);
        if (!supportsString) return false;
        // Array
        var supportsArray = 
            !isUndef([].unshift(0))
            && isFunction($Array.isArray)
            && isFunction(ArrayPrototype.forEach)
            && isFunction(ArrayPrototype.map)
            && isFunction(ArrayPrototype.filter)
            && isFunction(ArrayPrototype.every)
            && isFunction(ArrayPrototype.some)
            && isFunction(ArrayPrototype.reduce)
            && isFunction(ArrayPrototype.reduceRight)
            && ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) === -1
            && ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) === -1;
        if (!supportsArray) return false;
        // Date
        var supportsDate = 
            isFunction(Date.now)
            && isFunction(Date.prototype.toJSON)
        if (!supportsDate) return false;
        return true;
    }

    function testSupportsES6() {
        // Object
        var supportsObject = 
            isFunction($Object.assign)
            && isFunction($Object.is);
        if (!supportsObject) return false;
        // String
        var supportsString = 
            isFunction($String.fromCodePoint)
            && isFunction($String.raw)
            && isFunction(StringPrototype.repeat)
            && isFunction(StringPrototype.startsWith)
            && isFunction(StringPrototype.endsWith)
            && isFunction(StringPrototype.includes)
            && isFunction(StringPrototype.codePointAt);
        if (!supportsString) return false;
        // Array
        var supportsArray = 
            isFunction($Array.from)
            && isFunction($Array.of)
            && isFunction(ArrayPrototype.copyWithin)
            && isFunction(ArrayPrototype.fill)
            && isFunction(ArrayPrototype.find)
            && isFunction(ArrayPrototype.findIndex)
            && isFunction(ArrayPrototype.keys)
            && isFunction(ArrayPrototype.values)
            && isFunction(ArrayPrototype.entries);
        if (!supportsArray) return false;
        // Promise
        var supportsPromise = !isUndef(Promise);
        if (!supportsPromise) return false;
        return true;
    }

    function onLoad(node, callback) {
        if (node == null) return;
        var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]';
        if (
            node.attachEvent &&
                //Check if node.attachEvent is artificially added by custom script or
                //natively supported by browser
                //if we can NOT find [native code] then it must NOT natively supported.
                //in IE8, node.attachEvent does not have toString()
                //Note the test for "[native code" with no closing brace
                !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                !isOpera
        ) {
            node.attachEvent("onreadystatechange", callback);
        } else if (node.addEventListener) {
            node.addEventListener("load", callback, false);
            node.addEventListener("error", callback, false);
        }
    }

    YFjs.testMediaQuery = testMediaQuery;
    YFjs.testHtml5Elements = testHtml5Elements;
    YFjs.testJSON = testJSON;
    YFjs.testSupportsES5 = testSupportsES5;
    YFjs.testSupportsES6 = testSupportsES6;

    YFjs.createScriptElement = createScriptElement;

    YFjs.insertBefore = insertBefore;
    YFjs.insertAfter = insertAfter;
    YFjs.appendChild = appendChild;

    YFjs.ready = function(callback) {
        if (YFjs.ready.__ready__) {
            delete YFjs.ready.__callback__;
            typeof callback === "function" && callback.call(YFjs);
        } else {
            YFjs.ready.__callback__ = callback;
        }
    };

    root.YFjs = YFjs;

    // write style && script
    if (YFjs.bBaseCss !== false) {
        var baseCssLink = document.createElement("link");
        baseCssLink.setAttribute('rel', "stylesheet");
        baseCssLink.setAttribute('type', "text/css");
        baseCssLink.setAttribute('href', getUrl("styles/base.css", YFjs.baseCss) + '?v=' + YFjs.VERSION);
        if (baseElement) {
            insertAfter(baseCssLink, baseElement);
        } else if (firstStyleLink) {
            insertBefore(baseCssLink, firstStyleLink);
        } else if (mainScript) {
            insertBefore(baseCssLink, mainScript);
        } else {
            appendChild(baseCssLink);
        }
    }

    var yfjsCoreScript = createScriptElement(
        getUrl("yfjs-core.js", YFjs.baseMd) + '?v=' + YFjs.VERSION,
        mainScriptData != null ? { 'data-main': mainScriptData } : null
    );

    if (yfjsCoreScript) {
        onLoad(yfjsCoreScript, function() {
            var callback = YFjs.ready.__callback__;
            delete YFjs.ready.__callback__;
            YFjs.ready.__ready__ = true;
            typeof callback === "function" && callback.call(YFjs);
        });
        if (mainScript) {
            insertAfter(yfjsCoreScript, mainScript);
        } else {
            appendChild(yfjsCoreScript);
        }
    }

}(this || window);