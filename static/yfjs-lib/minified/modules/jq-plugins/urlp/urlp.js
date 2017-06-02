define(["jquery"],function(a){var b=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,c={},d="",e=function(){var b=j.apply(this);""==b&&(this.get(0)==a(document).get(0)?b=document.location.href:this.is("[href]")?b=this.attr("href"):this.is("[src]")&&(b=this.attr("src")),""!=b&&(b=p(b),this.data("href",b)))},f=function(){if(this.get(0)!=a(document).get(0)&&null==this.attr("href")&&null==this.attr("src")&&null!=this.html()&&0==this.hasClass("urlp-span")){for(var b=[],c=!1,d="",e=/((((mailto|spotify|skype)\:([a-zA-Z0-9\.\-\:@\?\=\%]*))|((ftp|git|irc|ircs|irc6|pop|rss|ssh|svn|udp|feed|imap|ldap|nntp|rtmp|sftp|snmp|xmpp|http|https|telnet|ventrilo|webcal|view\-source)\:[\/]{2})?(([a-zA-Z0-9\.\-]+)\:([a-zA-Z0-9\.&;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|[a-zA-Z]{2}))(\:[0-9]+)*(\/($|[a-zA-Z0-9\.\,\?\'\\\+&;%\$\=~_\-]+)?(#\w*)?)*))/i,f=this.html();d=e.exec(f);)f=f.replace(d[0],"$"+b.length),b.push(d[0]),c=!0;for(var g=0;g<b.length;g++){var h=f.indexOf("$"+g),i=f.substring(h-6,h-1);f="href="==i||" src="==i||">"==f.substring(h-1,h)?f.replace("$"+g,b[g]):f.replace("$"+g,'<a href="[url]" class="urlp-no-watch">[url]</a>'.replace(/\[url\]/g,b[g]))}if(0!=c)return this.addClass("urlp-span"),this.html(f),this.find("a[href]").each(function(){var b=j.apply(a(this));m.apply(a(this),[b])})}return null},g=function(a,b){0!=this.is("["+a+"]")&&(null==this.data("original-"+a)&&this.data("original-"+a,this.attr(a)),this.attr(a,b))},h=function(a){null!=this.data("original-"+a)&&(this.attr(a,this.data("original-"+a)),this.removeData("original-"+a))},i=function(){this.removeData("href"),h.apply(this,["href"]),h.apply(this,["src"]),this.removeData("urlp-no-watch"),this.removeData("is-watched"),O.unwatch.apply(this)},j=function(){return this.href||this.data("href")||this.attr("href")||this.attr("src")||""},k=function(a,b){m.apply(this,[q(j.apply(this),a,b)])},l=function(a){k.apply(this,[a[0],a[1]])},m=function(b){if("object"==typeof b&&(b=o(b)),b=p(b),null!=this.href)return void(this.href=b);this.get(0)==a(document).get(0)?this.data("href",b):(g.apply(this,["href",b]),g.apply(this,["src",b]))},n=function(a){if(null==a)return{scheme:"",user:"",password:"",host:"",port:"",path:"",query:"",fragment:""};var c={user:"",password:""};if("//"==a.substring(0,2)&&(a="http:"+a),""!=a&&-1==a.indexOf("://")&&(a="http://"+a),-1!=a.indexOf("@")){var d=a.match(b);d[4]&&(c.user=d[4]),d[5]&&(c.password=d[5])}var e=document.createElement("a");e.href=a;try{e.protocol}catch(b){if(-2146697202==b.number){var f="";""!=c.user&&(f+=c.user,""!=c.password&&(f+=":"+c.password),f+="@",e.href=a.replace(f,""))}}var g=e.protocol;-1==e.protocol.indexOf("//")&&(g+="//");var h=e.pathname;"/"!=h[0]&&(h="/"+h);var i=e.port+"";return("21"==i&&-1==a.indexOf(":21")||"80"==i&&-1==a.indexOf(":80")||"443"==i&&-1==a.indexOf(":443")||"0"==i)&&(i=""),{scheme:g,user:c.user,password:c.password,host:e.hostname,port:i,path:h,query:e.search,fragment:e.hash}},o=function(a){var b=a.scheme;return null!=a.user&&""!=a.user&&(b+=a.user,null!=a.password&&""!=a.password&&(b+=":"+a.password),b+="@"),b+a.host+(""!=a.port?":"+a.port:"")+a.path+a.query+a.fragment},p=function(a){return M.parse(a).toString()},q=function(a,b,c){var d=M.parse(a);return d[b]=c,o(d)},r=function(a){return"string"==typeof a?M.parse(a):a},s=function(a){return r(a).fragment},t=function(a){var b=r(a).query;return"?"==b[0]?b.slice(1):b},u=function(b){var c={},d=w(j.apply(this));"string"==typeof b?("?"==b[0]&&(d={},b=b.substring(1)),c=v(b)):c=b,0==a.isEmptyObject(c)?c=a.extend(d,c):d={},k.apply(this,["query",x.apply(c)])},v=function(a){var b={};if(""!=a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b},w=function(a){return v(t(a))},x=function(){var a="";for(var b in this)"toString"!=b&&null!=this[b]&&(a+="&"+b+"="+this[b]);return"&"==a[0]&&(a="?"+a.slice(1)),a},y=function(a){var b=r(a).path;return"/"==b[0]?b.slice(1):b},z=function(a){var b=y(a);return""!=b?b.split("/"):[]},A=function(a){var b=r(j.apply(this)).path.split("/"),c=a.split("/"),d=0;""==c[0]&&(b=[],d++),b.splice(0,1);for(var e=c.length;d<e;d++)".."==c[d]?b.length>0&&b.splice(b.length-1,1):"."==c[d]||b.push(c[d]);k.apply(this,["path",B.apply(b)])},B=function(){return this.length>0?"/"+this.join("/"):"/"},C=function(a){return r(a).port},D=function(a){return r(a).host},E=function(a){return r(a).password},F=function(a){return r(a).user},G=function(a){return r(a).scheme},H=function(a,b,e){1!=a.data("is-watched")&&c[d]&&c[d].push([b,e])},I=function(b,c){return null!=this.href?(b.apply(this,[c]),this):(H(this,b,[c]),this.each(function(){b.apply(a(this),[c])}))},J=function(b,c){if(null!=this.href)return b.apply(this,[c]);var d=[];return this.each(function(){d.push(b.apply(a(this),[c]))}),d},K=function(a,b,c){return 0==c.length?a.apply(this):b.apply(this,c)},L=function(a){return null!=O[a]?O[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"==typeof a||null==a?O.initialise.apply(this,Array.prototype.slice.call(arguments,1)):this},M={toString:{http:function(){return o(this)},mailto:function(){return this.password="",this.path="",this.port="",o(this)},javascript:function(){return"javascript:"+this.javascript},generic:function(){return this.scheme+this.url}},parsers:{http:function(b){return a.extend(n(b),{toString:M.toString.http})},mailto:function(b){return a.extend(n(b.substring(7)),{scheme:"mailto:",toString:M.toString.mailto})},javascript:function(b){return a.extend(n(document.location.href),{javascript:b.substring(11),toString:M.toString.javascript})},generic:function(b,c){return"//"==c.substring(0,2)?a.extend(n(c.substring(2)),{scheme:b+"://",toString:M.toString.http}):{scheme:b+":",url:c,toString:M.toString.generic}}},parse:function(a){if("string"!=typeof a)return a;var b=a.indexOf(":");if(-1!=b){var c=a.substring(0,b).toLowerCase();return null!=this.parsers[c]?this.parsers[c](a):this.parsers.generic(c,a.substring(b+1))}return this.parsers.http(a)}},N={getUrl:function(){return J.apply(this,[j,null])},setUrl:function(a){m.apply(this,[a])},parseUrl:function(){return J.apply(this,[function(){return M.parse(j.apply(this))},null])},getFragment:function(){return J.apply(this,[function(){return s(j.apply(this))},null])},setFragment:function(a){return"#"!=a[0]&&(a="#"+a),I.apply(this,[l,["fragment",a]])},getQuery:function(){return J.apply(this,[function(){return a.extend(w(j.apply(this)),{toString:x})},null])},setQuery:function(a){return I.apply(this,[u,a])},getPath:function(){return J.apply(this,[function(){return a.extend(z(j.apply(this)),{toString:B})},null])},setPath:function(a){return I.apply(this,[A,a])},getPort:function(){return J.apply(this,[function(){return C(j.apply(this))},null])},setPort:function(a){return I.apply(this,[l,["port",a]])},getHost:function(){return J.apply(this,[function(){return D(j.apply(this))},null])},setHost:function(a){return I.apply(this,[l,["host",a]])},getPassword:function(){return J.apply(this,[function(){return E(j.apply(this))},null])},setPassword:function(a){return I.apply(this,[l,["password",a]])},getUser:function(){return J.apply(this,[function(){return F(j.apply(this))},null])},setUser:function(a){return I.apply(this,[l,["user",a]])},getScheme:function(){return J.apply(this,[function(){return G(j.apply(this))},null])},setScheme:function(a){return I.apply(this,[l,["scheme",a]])},filters:{"=":function(a,b){return a==b},"!=":function(a,b){return a!=b},"<":function(a,b){return a<b},">":function(a,b){return a>b},"<=":function(a,b){return a<=b},">=":function(a,b){return a>=b},"*=":function(a,b){return-1!=a.indexOf(b)},"^=":function(a,b){return a.length>=b.length&&a.substring(0,b.length)==b},"$=":function(a,b){return a.length>=b.length&&a.substring(a.length-b.length)==b},regex:function(a,b){return a.match(b)}}},O={url:function(a){return K.apply(this,[N.parseUrl,N.setUrl,arguments])},fragment:function(a){return K.apply(this,[N.getFragment,N.setFragment,arguments])},query:function(a){return K.apply(this,[N.getQuery,N.setQuery,arguments])},path:function(a){return K.apply(this,[N.getPath,N.setPath,arguments])},port:function(a){return K.apply(this,[N.getPort,N.setPort,arguments])},host:function(a){return K.apply(this,[N.getHost,N.setHost,arguments])},password:function(a){return K.apply(this,[N.getPassword,N.setPassword,arguments])},user:function(a){return K.apply(this,[N.getUser,N.setUser,arguments])},scheme:function(a){return K.apply(this,[N.getScheme,N.setScheme,arguments])},initialise:function(){var b=this,c=[];return c=f.apply(a(this)),null!=c?I.apply(this.filter(function(){return a(this).get(0)!=a(b).get(0)}).add(c),[e]):I.apply(b,[e])},restore:function(){return I.apply(this,[i])},goto:function(){document.location.href=j.apply(this)},proxy:function(a,b){var c=j.apply(this),d={};m.apply(this,[o(r(a))]),d[b]=c,N.setQuery.apply(this,[d])},watch:function(b){var e=this.selector;return null==c[d]&&(c[d]=[],a(document).bind("DOMNodeInserted",function d(f){if(null==c[e])return void a(document).unbind("DOMNodeInserted",d);var g=a(f.target).filter(e);if(null==g.get(0)&&(g=a(f.target).find(e)),g.length>0&&0==g.is(".urlp-no-watch")){var h=!1;g.data("is-watched",!0);for(var i=0,j=c[e].length;i<j;i++){var k=c[e][i][0].apply(g,c[e][i][1]);if(null!=k&&0==k.length){h=!0;break}}0==h&&"function"==typeof b&&g.each(function(){b(a(this),e)})}})),this},unwatch:function(){c[this.selector]=null},filter:function(b,c,d){var e=M.parse(j.apply(this));return"=="==c&&(c="="),"url"!=b&&null==e[b]||null==N.filters[c]?this:(H(this,O.filter,[b,c,d]),this.filter(function(){var e=j.apply(a(this)),f="";return f="url"!=b?M.parse(e)[b]:e,"port"==b&&(f=parseInt(f,10),d=parseInt(d,10)),N.filters[c].apply(a(this),[f,d])}))},interface:function(){return O}};a.fn.urlp=function(a){return-1==this.selector.indexOf(".filter")&&(d=this.selector),I.apply(this,[e]),L.apply(this,arguments)},a.urlp=function(b){return{href:b||document.location.href,url:O.url,scheme:O.scheme,user:O.user,password:O.password,host:O.host,port:O.port,path:O.path,query:O.query,fragment:O.fragment,proxy:O.proxy,goto:O.goto,watch:function(b){var c=this.host();return a('[href*="'+c+'"],[src*="'+c+'"]').urlp("watch",b)},unwatch:function(){var b=this.host();return a('[href*="'+b+'"],[src*="'+b+'"]').urlp("unwatch")}}}});