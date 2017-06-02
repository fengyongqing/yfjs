define(["jquery"],function(a){"use strict";var b=function(a,b){this.init(a,b)};b.VERSION="1.0.2",b.DEFAULTS={dom:"p",size:"normal",sizeMap:{large:"pagination-lg",small:"pagination-sm",mini:""},alignment:"left",containerClass:"",itemContainerClass:function(a,b,c){return b===c?"active":""},itemContentClass:function(a,b,c){return""},currentPage:1,numberOfPages:5,totalCount:0,pageUrl:function(a,b,c){return null},onPageClicked:null,onPageChanged:null,onPageNumberChanged:null,shouldShowPage:function(a,b,c){var d=!0;switch(a){case"first":case"prev":d=1!==c;break;case"next":case"last":d=c!==this.totalPages;break;case"page":d=!0}return d},tooltip:!1,tooltipOptions:{animation:!0,html:!0,placement:"top",selector:!1,title:"",container:!1},info:!1,currentPageInfo:!1,numbers:!1,numbersList:[10,25,50,100],language:{page:function(a,b,c){switch(a){case"first":return"&lt;&lt;";case"prev":return"&lt;";case"next":return"&gt;";case"last":return"&gt;&gt;";case"page":return b}},tooltip:function(a,b,c){switch(a){case"first":return"Go to first page";case"prev":return"Go to previous page";case"next":return"Go to next page";case"last":return"Go to last page";case"page":return b===c?"Current page is "+b:"Go to page "+b}},info:function(a,b,c){a=parseInt(a,10)||0,b=parseInt(b,10)||0;var d=a*b;return d>c&&(d=c),"Total <em>"+d+"</em> entries"},currentPageInfo:function(a,b){return a=parseInt(a,10)||0,b=parseInt(b,10)||0,"Pages: "+a+"/"+b},numbers:function(a,b){return"Show "+a+" entries"}}},b.prototype={options:function(){return a.extend({},b.DEFAULTS)}(),init:function(b,c){this.$element=a(b),this.currentPage=1,this.lastPage=1,this.setOptions(c),this.initialized=!0},setOptions:function(c){this.options=a.extend(!0,{},this.options,c),c&&a.isArray(c.numbersList)&&(this.options.numbersList=[].concat(c.numbersList)),a.isArray(this.options.numbersList)||(this.options.numbersList=[].concat(b.DEFAULTS.numbersList)),this.numberOfPages=parseInt(this.options.numberOfPages,10),this.totalCount=parseInt(this.options.totalCount,10),this.totalPages=Math.ceil(this.options.totalCount/this.numberOfPages),~a.inArray(this.numberOfPages,this.options.numbersList)||this.options.numbersList.unshift(this.numberOfPages),c&&void 0!==c.currentPage&&this.setCurrentPage(c.currentPage),this.listen(),this.render(),this.initialized||this.lastPage===this.currentPage||this.$element.trigger("pageChanged.paging",[this.lastPage,this.currentPage])},listen:function(){this.$element.off("pageClicked.paging"),this.$element.off("pageChanged.paging"),this.$element.off("pageNumberChanged.paging"),"function"==typeof this.options.onPageClicked&&this.$element.on("pageClicked.paging",this.options.onPageClicked),"function"==typeof this.options.onPageChanged&&this.$element.on("pageChanged.paging",this.options.onPageChanged),"function"==typeof this.options.onPageNumberChanged&&this.$element.on("pageNumberChanged.paging",this.options.onPageNumberChanged),this.$element.on("pageClicked.paging",this.onPageClicked)},render:function(){this.$element.empty(),this.$element.addClass("nav-pagination");var b=this.options.alignment||"left";if(this.$element.addClass("nav-pagination-"+b.toLowerCase()),!(this.totalPages<=0)){var c,d,e,f,g,h,i,j,k,l=this.getValueFromOption(this.options.dom)||"",m=this.$element;for(j=0;j<l.length;j++)switch(l.charAt(j)){case"<":if(g=a("<div/>")[0],'"'==(h=l.charAt(j+1))||"'"==h){for(i="",k=2;l.charAt(j+k)!=h;)i+=l.charAt(j+k),k++;if(-1!=i.indexOf(".")){var n=i.split(".");g.id=n[0].substr(1,n[0].length-1),g.className=n[1]}else"#"==i.charAt(0)?g.id=i.substr(1,i.length-1):g.className=i;j+=k}m.append(g),m=a(g);break;case">":m=m.parent();break;case"p":c=a("<ul></ul>"),m.append(c);break;case"i":this.getValueFromOption(this.options.info)&&(d=a("<label></label>"),d.addClass("pagination-info"),d.html(this.getValueFromOption(this.options.language.info,this.numberOfPages,this.totalPages,this.totalCount)),m.append(d));break;case"c":this.getValueFromOption(this.options.currentPageInfo)&&(e=a("<label></label>"),e.addClass("pagination-info-page"),e.html(this.getValueFromOption(this.options.language.currentPageInfo,this.currentPage,this.totalPages)),m.append(e));break;case"n":if(this.getValueFromOption(this.options.numbers)){f=a("<label></label>"),f.addClass("pagination-numbers");var o="<select>";a.each(this.getValueFromOption(this.options.numbersList),a.proxy(function(a,b){o+='<option value="'+b+'"'+(b==this.numberOfPages?' selected="selected"':"")+">"+b+"</option>"},this)),o+="</select>",f.html(this.getValueFromOption(this.options.language.numbers,o,this.numberOfPages)),m.append(f),m.on("change",".pagination-numbers select",{oldNumber:this.numberOfPages},a.proxy(this.onPageNumberChanged,this))}}j=0;var p=this.options.size||"normal",q=this.getPages(),r=this.getValueFromOption(this.options.containerClass,this.$element),s=null,t=null,u=null,v=null,w=null;switch(c.prop("class","").addClass("pagination"),p.toLowerCase()){case"large":case"small":case"mini":c.addClass(this.options.sizeMap[p.toLowerCase()])}for(c.addClass(r),this.pageRef=[],q.first&&(s=this.buildPageItem("first",q.first))&&c.append(s),q.prev&&(t=this.buildPageItem("prev",q.prev))&&c.append(t),j=0;j<q.length;j+=1)(w=this.buildPageItem("page",q[j]))&&c.append(w);q.next&&(u=this.buildPageItem("next",q.next))&&c.append(u),q.last&&(v=this.buildPageItem("last",q.last))&&c.append(v)}},buildPageItem:function(b,c){var d=a("<li></li>"),e=a("<a></a>"),f="",g="",h=this.options.itemContainerClass(b,c,this.currentPage),i=this.getValueFromOption(this.options.itemContentClass,b,c,this.currentPage),j=null;switch(b){case"first":if(!this.getValueFromOption(this.options.shouldShowPage,b,c,this.currentPage))return;this.currentPage<=1&&e.prop("disabled",!0),f=this.getValueFromOption(this.options.language.page,b,c,this.currentPage),g=this.getValueFromOption(this.options.language.tooltip,b,c,this.currentPage);break;case"last":if(!this.getValueFromOption(this.options.shouldShowPage,b,c,this.currentPage))return;this.currentPage>=this.totalPages&&e.prop("disabled",!0),f=this.getValueFromOption(this.options.language.page,b,c,this.currentPage),g=this.getValueFromOption(this.options.language.tooltip,b,c,this.currentPage);break;case"prev":if(!this.getValueFromOption(this.options.shouldShowPage,b,c,this.currentPage))return;this.currentPage<=1&&e.prop("disabled",!0),f=this.getValueFromOption(this.options.language.page,b,c,this.currentPage),g=this.getValueFromOption(this.options.language.tooltip,b,c,this.currentPage);break;case"next":if(!this.getValueFromOption(this.options.shouldShowPage,b,c,this.currentPage))return;this.currentPage>=this.totalPages&&e.prop("disabled",!0),f=this.getValueFromOption(this.options.language.page,b,c,this.currentPage),g=this.getValueFromOption(this.options.language.tooltip,b,c,this.currentPage);break;case"page":if(!this.getValueFromOption(this.options.shouldShowPage,b,c,this.currentPage))return;f=this.getValueFromOption(this.options.language.page,b,c,this.currentPage),g=this.getValueFromOption(this.options.language.tooltip,b,c,this.currentPage)}return d.addClass(h).append(e),e.addClass(i).html(f).on("click",null,{type:b,page:c},a.proxy(this.onPageItemClicked,this)),this.options.pageUrl&&e.attr("href",this.getValueFromOption(this.options.pageUrl,b,c,this.currentPage)),e.attr("href")||e.attr("href","javascript:;"),this.options.tooltip?(j=a.extend({},this.options.tooltipOptions,{title:g}),e.tooltip(j)):e.attr("title",g),d},destroy:function(){this.$element.off("pageClicked.paging"),this.$element.off("pageChanged.paging"),this.$element.removeData("paging.bs"),this.$element.empty()},show:function(a){this.setCurrentPage(a),this.render(),this.lastPage!==this.currentPage&&this.$element.trigger("pageChanged.paging",[this.lastPage,this.currentPage])},showNext:function(){var a=this.getPages();a.next&&this.show(a.next)},showPrevious:function(){var a=this.getPages();a.prev&&this.show(a.prev)},showFirst:function(){var a=this.getPages();a.first&&this.show(a.first)},showLast:function(){var a=this.getPages();a.last&&this.show(a.last)},onPageItemClicked:function(b){if(a(b.currentTarget).is(":disabled"))return this;var c=b.data.type,d=b.data.page;this.$element.trigger("pageClicked.paging",[b,c,d])},onPageNumberChanged:function(b){this.currentPage=1,this.lastPage=1,this.setOptions({currentPage:1,numberOfPages:a(b.target).val()});var c=b.data.oldNumber;this.$element.trigger("pageNumberChanged.paging",[b,c])},onPageClicked:function(b,c,d,e){if(a(c.currentTarget).is(":disabled"))return this;var f=a(b.currentTarget);switch(d){case"first":f.paging("showFirst");break;case"prev":f.paging("showPrevious");break;case"next":f.paging("showNext");break;case"last":f.paging("showLast");break;case"page":f.paging("show",e)}},setCurrentPage:function(a){a>this.totalPages||a<1||(this.lastPage=this.currentPage,this.currentPage=parseInt(a,10))},getPages:function(){var a=this.totalPages,b=this.currentPage%this.numberOfPages==0?(parseInt(this.currentPage/this.numberOfPages,10)-1)*this.numberOfPages+1:parseInt(this.currentPage/this.numberOfPages,10)*this.numberOfPages+1,c=[],d=0,e=0;for(b=b<1?1:b,d=b,e=0;e<this.numberOfPages&&d<=a;d+=1,e+=1)c.push(d);return c.first=1,this.currentPage>1?c.prev=this.currentPage-1:c.prev=1,this.currentPage<a?c.next=this.currentPage+1:c.next=a,c.last=a,c.current=this.currentPage,c.total=a,c.totalCount=this.totalCount,c.numberOfPages=this.options.numberOfPages,c},getValueFromOption:function(a){var b=Array.prototype.slice.call(arguments,1);return"function"==typeof a?a.apply(this,b):a}};var c=a.fn.paging;return a.fn.paging=function(c){var d=arguments,e=null;return a(this).each(function(f,g){var h=a(g),i=h.data("paging.bs"),j="object"!=typeof c?null:c;if(!i)return i=new b(this,j),h=a(i.$element),void h.data("paging.bs",i);if("string"==typeof c){if(!i[c])throw"Paging Error: Method "+c+" does not exist";e=i[c].apply(i,Array.prototype.slice.call(d,1))}else e=i.setOptions(c)}),e},a.fn.paging.setDefaults=function(c){c&&"object"==typeof c&&(b.prototype.options=a.extend(!0,{},b.DEFAULTS,c))},a.fn.paging.noConflict=function(){return a.fn.paging=c,this},a.fn.paging.Constructor=b,b});