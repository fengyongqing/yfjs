var FixedHeader;!function(a,b,c){var d=function(d,e){"use strict";return FixedHeader=function(a,b){if(!this instanceof FixedHeader)return void alert("FixedHeader warning: FixedHeader must be initialised with the 'new' keyword.");var c={aoCache:[],oSides:{top:!0,bottom:!1,left:0,right:0},oZIndexes:{top:104,bottom:103,left:102,right:101},oCloneOnDraw:{top:!1,bottom:!1,left:!0,right:!0},oMes:{iTableWidth:0,iTableHeight:0,iTableLeft:0,iTableRight:0,iTableTop:0,iTableBottom:0},oOffset:{top:0},nTable:null,bFooter:!1,bInitComplete:!1};this.fnGetSettings=function(){return c},this.fnUpdate=function(){this._fnUpdateClones(),this._fnUpdatePositions()},this.fnPosition=function(){this._fnUpdatePositions()};var e=d.fn.dataTable.Api?new d.fn.dataTable.Api(a).settings()[0]:a.fnSettings();e._oPluginFixedHeader=this,this.fnInit(e,b)},FixedHeader.prototype={fnInit:function(b,c){var e=this.fnGetSettings(),f=this;if(this.fnInitSettings(e,c),""!==b.oScroll.sX||""!==b.oScroll.sY)return void alert("FixedHeader 2 is not supported with DataTables' scrolling mode at this time");e.nTable=b.nTable,b.aoDrawCallback.unshift({fn:function(){FixedHeader.fnMeasure(),f._fnUpdateClones.call(f),f._fnUpdatePositions.call(f)},sName:"FixedHeader"}),e.bFooter=d(">tfoot",e.nTable).length>0,e.oSides.top&&e.aoCache.push(f._fnCloneTable("fixedHeader","FixedHeader_Header",f._fnCloneThead)),e.oSides.bottom&&e.aoCache.push(f._fnCloneTable("fixedFooter","FixedHeader_Footer",f._fnCloneTfoot)),e.oSides.left&&e.aoCache.push(f._fnCloneTable("fixedLeft","FixedHeader_Left",f._fnCloneTLeft,e.oSides.left)),e.oSides.right&&e.aoCache.push(f._fnCloneTable("fixedRight","FixedHeader_Right",f._fnCloneTRight,e.oSides.right)),FixedHeader.afnScroll.push(function(){f._fnUpdatePositions.call(f)}),d(a).resize(function(){FixedHeader.fnMeasure(),f._fnUpdateClones.call(f),f._fnUpdatePositions.call(f)}),d(e.nTable).on("column-reorder.dt",function(){FixedHeader.fnMeasure(),f._fnUpdateClones(!0),f._fnUpdatePositions()}).on("column-visibility.dt",function(){FixedHeader.fnMeasure(),f._fnUpdateClones(!0),f._fnUpdatePositions()}),FixedHeader.fnMeasure(),f._fnUpdateClones(),f._fnUpdatePositions(),e.bInitComplete=!0},fnInitSettings:function(a,b){b!==c&&(b.top!==c&&(a.oSides.top=b.top),b.bottom!==c&&(a.oSides.bottom=b.bottom),"boolean"==typeof b.left?a.oSides.left=b.left?1:0:b.left!==c&&(a.oSides.left=b.left),"boolean"==typeof b.right?a.oSides.right=b.right?1:0:b.right!==c&&(a.oSides.right=b.right),b.zTop!==c&&(a.oZIndexes.top=b.zTop),b.zBottom!==c&&(a.oZIndexes.bottom=b.zBottom),b.zLeft!==c&&(a.oZIndexes.left=b.zLeft),b.zRight!==c&&(a.oZIndexes.right=b.zRight),b.offsetTop!==c&&(a.oOffset.top=b.offsetTop),b.alwaysCloneTop!==c&&(a.oCloneOnDraw.top=b.alwaysCloneTop),b.alwaysCloneBottom!==c&&(a.oCloneOnDraw.bottom=b.alwaysCloneBottom),b.alwaysCloneLeft!==c&&(a.oCloneOnDraw.left=b.alwaysCloneLeft),b.alwaysCloneRight!==c&&(a.oCloneOnDraw.right=b.alwaysCloneRight))},_fnCloneTable:function(a,c,e,f){var g,h=this.fnGetSettings();"absolute"!=d(h.nTable.parentNode).css("position")&&(h.nTable.parentNode.style.position="relative"),g=h.nTable.cloneNode(!1),g.removeAttribute("id");var i=b.createElement("div");return i.style.position="absolute",i.style.top="0px",i.style.left="0px",i.className+=" FixedHeader_Cloned "+a+" "+c,"fixedHeader"==a&&(i.style.zIndex=h.oZIndexes.top),"fixedFooter"==a&&(i.style.zIndex=h.oZIndexes.bottom),"fixedLeft"==a?i.style.zIndex=h.oZIndexes.left:"fixedRight"==a&&(i.style.zIndex=h.oZIndexes.right),g.style.margin="0",i.appendChild(g),b.body.appendChild(i),{nNode:g,nWrapper:i,sType:a,sPosition:"",sTop:"",sLeft:"",fnClone:e,iCells:f}},_fnMeasure:function(){var a=this.fnGetSettings(),b=a.oMes,c=d(a.nTable),e=c.offset(),f=this._fnSumScroll(a.nTable.parentNode,"scrollTop");this._fnSumScroll(a.nTable.parentNode,"scrollLeft");b.iTableWidth=c.outerWidth(),b.iTableHeight=c.outerHeight(),b.iTableLeft=e.left+a.nTable.parentNode.scrollLeft,b.iTableTop=e.top+f,b.iTableRight=b.iTableLeft+b.iTableWidth,b.iTableRight=FixedHeader.oDoc.iWidth-b.iTableLeft-b.iTableWidth,b.iTableBottom=FixedHeader.oDoc.iHeight-b.iTableTop-b.iTableHeight},_fnSumScroll:function(a,b){for(var c=a[b];(a=a.parentNode)&&"HTML"!=a.nodeName&&"BODY"!=a.nodeName;)c=a[b];return c},_fnUpdatePositions:function(){var a=this.fnGetSettings();this._fnMeasure();for(var b=0,c=a.aoCache.length;b<c;b++)"fixedHeader"==a.aoCache[b].sType?this._fnScrollFixedHeader(a.aoCache[b]):"fixedFooter"==a.aoCache[b].sType?this._fnScrollFixedFooter(a.aoCache[b]):"fixedLeft"==a.aoCache[b].sType?this._fnScrollHorizontalLeft(a.aoCache[b]):this._fnScrollHorizontalRight(a.aoCache[b])},_fnUpdateClones:function(a){var b=this.fnGetSettings();a&&(b.bInitComplete=!1);for(var c=0,d=b.aoCache.length;c<d;c++)b.aoCache[c].fnClone.call(this,b.aoCache[c]);a&&(b.bInitComplete=!0)},_fnScrollHorizontalRight:function(a){var b=this.fnGetSettings(),c=b.oMes,e=FixedHeader.oWin,f=FixedHeader.oDoc,g=a.nWrapper,h=d(g).outerWidth();e.iScrollRight<c.iTableRight?(this._fnUpdateCache(a,"sPosition","absolute","position",g.style),this._fnUpdateCache(a,"sTop",c.iTableTop+"px","top",g.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+c.iTableWidth-h+"px","left",g.style)):c.iTableLeft<f.iWidth-e.iScrollRight-h?(this._fnUpdateCache(a,"sPosition","fixed","position",g.style),this._fnUpdateCache(a,"sTop",c.iTableTop-e.iScrollTop+"px","top",g.style),this._fnUpdateCache(a,"sLeft",e.iWidth-h+"px","left",g.style)):(this._fnUpdateCache(a,"sPosition","absolute","position",g.style),this._fnUpdateCache(a,"sTop",c.iTableTop+"px","top",g.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",g.style))},_fnScrollHorizontalLeft:function(a){var b=this.fnGetSettings(),c=b.oMes,e=FixedHeader.oWin,f=(FixedHeader.oDoc,a.nWrapper),g=d(f).outerWidth();e.iScrollLeft<c.iTableLeft?(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",c.iTableTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",f.style)):e.iScrollLeft<c.iTableLeft+c.iTableWidth-g?(this._fnUpdateCache(a,"sPosition","fixed","position",f.style),this._fnUpdateCache(a,"sTop",c.iTableTop-e.iScrollTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft","0px","left",f.style)):(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",c.iTableTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+c.iTableWidth-g+"px","left",f.style))},_fnScrollFixedFooter:function(a){var b=this.fnGetSettings(),c=b.oMes,e=FixedHeader.oWin,f=(FixedHeader.oDoc,a.nWrapper),g=d("thead",b.nTable).outerHeight(),h=d(f).outerHeight();e.iScrollBottom<c.iTableBottom?(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",c.iTableTop+c.iTableHeight-h+"px","top",f.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",f.style)):e.iScrollBottom<c.iTableBottom+c.iTableHeight-h-g?(this._fnUpdateCache(a,"sPosition","fixed","position",f.style),this._fnUpdateCache(a,"sTop",e.iHeight-h+"px","top",f.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft-e.iScrollLeft+"px","left",f.style)):(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",c.iTableTop+h+"px","top",f.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",f.style))},_fnScrollFixedHeader:function(a){for(var b=this.fnGetSettings(),c=b.oMes,d=FixedHeader.oWin,e=(FixedHeader.oDoc,a.nWrapper),f=0,g=b.nTable.getElementsByTagName("tbody"),h=0;h<g.length;++h)f+=g[h].offsetHeight;c.iTableTop>d.iScrollTop+b.oOffset.top?(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",c.iTableTop+"px","top",e.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",e.style)):d.iScrollTop+b.oOffset.top>c.iTableTop+f?(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",c.iTableTop+f+"px","top",e.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",e.style)):(this._fnUpdateCache(a,"sPosition","fixed","position",e.style),this._fnUpdateCache(a,"sTop",b.oOffset.top+"px","top",e.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft-d.iScrollLeft+"px","left",e.style))},_fnUpdateCache:function(a,b,c,d,e){a[b]!=c&&(e[d]=c,a[b]=c)},_fnClassUpdate:function(a,b){var c=this;"TR"!==a.nodeName.toUpperCase()&&"TH"!==a.nodeName.toUpperCase()&&"TD"!==a.nodeName.toUpperCase()&&"SPAN"!==a.nodeName.toUpperCase()||(b.className=a.className),d(a).children().each(function(e){c._fnClassUpdate(d(a).children()[e],d(b).children()[e])})},_fnCloneThead:function(a){var b=this.fnGetSettings(),c=a.nNode;if(b.bInitComplete&&!b.oCloneOnDraw.top)return void this._fnClassUpdate(d("thead",b.nTable)[0],d("thead",c)[0]);var e=d(b.nTable).outerWidth();for(a.nWrapper.style.width=e+"px",c.style.width=e+"px";c.childNodes.length>0;)d("thead th",c).unbind("click"),c.removeChild(c.childNodes[0]);var f=d("thead",b.nTable).clone(!0)[0];c.appendChild(f);var g=[],h=[];d("thead>tr th",b.nTable).each(function(a){g.push(d(this).width())}),d("thead>tr td",b.nTable).each(function(a){h.push(d(this).width())}),d("thead>tr th",b.nTable).each(function(a){d("thead>tr th:eq("+a+")",c).width(g[a]),d(this).width(g[a])}),d("thead>tr td",b.nTable).each(function(a){d("thead>tr td:eq("+a+")",c).width(h[a]),d(this).width(h[a])}),d("th.sorting, th.sorting_desc, th.sorting_asc",c).bind("click",function(){this.blur()})},_fnCloneTfoot:function(a){var b=this.fnGetSettings(),c=a.nNode;for(a.nWrapper.style.width=d(b.nTable).outerWidth()+"px";c.childNodes.length>0;)c.removeChild(c.childNodes[0]);var e=d("tfoot",b.nTable).clone(!0)[0];c.appendChild(e),d("tfoot:eq(0)>tr th",b.nTable).each(function(a){d("tfoot:eq(0)>tr th:eq("+a+")",c).width(d(this).width())}),d("tfoot:eq(0)>tr td",b.nTable).each(function(a){d("tfoot:eq(0)>tr td:eq("+a+")",c).width(d(this).width())})},_fnCloneTLeft:function(a){for(var b=this.fnGetSettings(),c=a.nNode,e=d("tbody",b.nTable)[0];c.childNodes.length>0;)c.removeChild(c.childNodes[0]);c.appendChild(d("thead",b.nTable).clone(!0)[0]),c.appendChild(d("tbody",b.nTable).clone(!0)[0]),b.bFooter&&c.appendChild(d("tfoot",b.nTable).clone(!0)[0]);var f="gt("+(a.iCells-1)+")";d("thead tr",c).each(function(a){d("th:"+f,this).remove()}),d("tfoot tr",c).each(function(a){d("th:"+f,this).remove()}),d("tbody tr",c).each(function(a){d("td:"+f,this).remove()}),this.fnEqualiseHeights("thead",e.parentNode,c),this.fnEqualiseHeights("tbody",e.parentNode,c),this.fnEqualiseHeights("tfoot",e.parentNode,c);for(var g=0,h=0;h<a.iCells;h++)g+=d("thead tr th:eq("+h+")",b.nTable).outerWidth();c.style.width=g+"px",a.nWrapper.style.width=g+"px"},_fnCloneTRight:function(a){for(var b=this.fnGetSettings(),c=d("tbody",b.nTable)[0],e=a.nNode,f=d("tbody tr:eq(0) td",b.nTable).length;e.childNodes.length>0;)e.removeChild(e.childNodes[0]);e.appendChild(d("thead",b.nTable).clone(!0)[0]),e.appendChild(d("tbody",b.nTable).clone(!0)[0]),b.bFooter&&e.appendChild(d("tfoot",b.nTable).clone(!0)[0]),d("thead tr th:lt("+(f-a.iCells)+")",e).remove(),d("tfoot tr th:lt("+(f-a.iCells)+")",e).remove(),d("tbody tr",e).each(function(b){d("td:lt("+(f-a.iCells)+")",this).remove()}),this.fnEqualiseHeights("thead",c.parentNode,e),this.fnEqualiseHeights("tbody",c.parentNode,e),this.fnEqualiseHeights("tfoot",c.parentNode,e);for(var g=0,h=0;h<a.iCells;h++)g+=d("thead tr th:eq("+(f-1-h)+")",b.nTable).outerWidth();e.style.width=g+"px",a.nWrapper.style.width=g+"px"},fnEqualiseHeights:function(a,b,c){var e,f=d(a+" tr",b);d(a+" tr",c).each(function(a){e=f.eq(a).css("height"),"Microsoft Internet Explorer"==navigator.appName&&(e=parseInt(e,10)+1),d(this).css("height",e),f.eq(a).css("height",e)})}},FixedHeader.oWin={iScrollTop:0,iScrollRight:0,iScrollBottom:0,iScrollLeft:0,iHeight:0,iWidth:0},FixedHeader.oDoc={iHeight:0,iWidth:0},FixedHeader.afnScroll=[],FixedHeader.fnMeasure=function(){var c=d(a),e=d(b),f=FixedHeader.oWin,g=FixedHeader.oDoc;g.iHeight=e.height(),g.iWidth=e.width(),f.iHeight=c.height(),f.iWidth=c.width(),f.iScrollTop=c.scrollTop(),f.iScrollLeft=c.scrollLeft(),f.iScrollRight=g.iWidth-f.iScrollLeft-f.iWidth,f.iScrollBottom=g.iHeight-f.iScrollTop-f.iHeight},FixedHeader.version="2.1.2",d(a).scroll(function(){FixedHeader.fnMeasure();for(var a=0,b=FixedHeader.afnScroll.length;a<b;a++)FixedHeader.afnScroll[a]()}),d.fn.dataTable.FixedHeader=FixedHeader,d.fn.DataTable.FixedHeader=FixedHeader,FixedHeader};"function"==typeof define&&define.amd?define(["jquery","jq/dataTables"],d):"object"==typeof exports?d(require("jquery"),require("jq/dataTables")):jQuery&&!jQuery.fn.dataTable.FixedHeader&&d(jQuery,jQuery.fn.dataTable)}(window,document);