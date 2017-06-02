!function(a,b,c){var d=function(d,e){"use strict";var f=function(a,b){var c=this;if(!(this instanceof f))return void alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.");void 0===b&&(b={});var e=d.fn.dataTable.camelToHungarian;e&&(e(f.defaults,f.defaults,!0),e(f.defaults,b));var g=d.fn.dataTable.Api?new d.fn.dataTable.Api(a).settings()[0]:a.fnSettings();this.s={dt:g,iTableColumns:g.aoColumns.length,aiOuterWidths:[],aiInnerWidths:[]},this.dom={scroller:null,header:null,body:null,footer:null,grid:{wrapper:null,dt:null,left:{wrapper:null,head:null,body:null,foot:null},right:{wrapper:null,head:null,body:null,foot:null}},clone:{left:{header:null,body:null,footer:null},right:{header:null,body:null,footer:null}}},g._oFixedColumns=this,g._bInitComplete?this._fnConstruct(b):g.oApi._fnCallbackReg(g,"aoInitComplete",function(){c._fnConstruct(b)},"FixedColumns")};return f.prototype={fnUpdate:function(){this._fnDraw(!0)},fnRedrawLayout:function(){this._fnColCalc(),this._fnGridLayout(),this.fnUpdate()},fnRecalculateHeight:function(a){delete a._DTTC_iHeight,a.style.height="auto"},fnSetRowHeight:function(a,b){a.style.height=b+"px"},fnGetPosition:function(a){var b,c=this.s.dt.oInstance;if(d(a).parents(".DTFC_Cloned").length){if("tr"===a.nodeName.toLowerCase())return b=d(a).index(),c.fnGetPosition(d("tr",this.s.dt.nTBody)[b]);var e=d(a).index();b=d(a.parentNode).index();return[c.fnGetPosition(d("tr",this.s.dt.nTBody)[b]),e,c.oApi._fnVisibleToColumnIndex(this.s.dt,e)]}return c.fnGetPosition(a)},_fnConstruct:function(c){var e=this;if("function"!=typeof this.s.dt.oInstance.fnVersionCheck||!0!==this.s.dt.oInstance.fnVersionCheck("1.8.0"))return void alert("FixedColumns "+f.VERSION+" required DataTables 1.8.0 or later. Please upgrade your DataTables installation");if(""===this.s.dt.oScroll.sX)return void this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled");this.s=d.extend(!0,this.s,f.defaults,c);var g=this.s.dt.oClasses;this.dom.grid.dt=d(this.s.dt.nTable).parents("div."+g.sScrollWrapper)[0],this.dom.scroller=d("div."+g.sScrollBody,this.dom.grid.dt)[0],this._fnColCalc(),this._fnGridSetup();var h;d(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC",function(){h="main"}).on("scroll.DTFC",function(){"main"===h&&(e.s.iLeftColumns>0&&(e.dom.grid.left.liner.scrollTop=e.dom.scroller.scrollTop),e.s.iRightColumns>0&&(e.dom.grid.right.liner.scrollTop=e.dom.scroller.scrollTop))});var i="onwheel"in b.createElement("div")?"wheel.DTFC":"mousewheel.DTFC";e.s.iLeftColumns>0&&d(e.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC",function(){h="left"}).on("scroll.DTFC",function(){"left"===h&&(e.dom.scroller.scrollTop=e.dom.grid.left.liner.scrollTop,e.s.iRightColumns>0&&(e.dom.grid.right.liner.scrollTop=e.dom.grid.left.liner.scrollTop))}).on(i,function(a){var b="wheel"===a.type?-a.originalEvent.deltaX:a.originalEvent.wheelDeltaX;e.dom.scroller.scrollLeft-=b}),e.s.iRightColumns>0&&d(e.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC",function(){h="right"}).on("scroll.DTFC",function(){"right"===h&&(e.dom.scroller.scrollTop=e.dom.grid.right.liner.scrollTop,e.s.iLeftColumns>0&&(e.dom.grid.left.liner.scrollTop=e.dom.grid.right.liner.scrollTop))}).on(i,function(a){var b="wheel"===a.type?-a.originalEvent.deltaX:a.originalEvent.wheelDeltaX;e.dom.scroller.scrollLeft-=b});var j=e.s.dt;d(a).off("resize.DTFC-"+j.sInstance).on("resize.DTFC-"+j.sInstance,{that:e},function(a){var c=d(this);try{var e=a.data.that,f=e.s.dt;b.getElementById(f.sInstance)?e._fnGridLayout.call(e):(c.unbind("resize.DTFC-"+f.sInstance),a.data&&delete a.data.that)}catch(a){}}),d(a).off("destroy.dt").on("destroy.dt",function(b,c){c=c||{},null!=c.sInstance&&d(a).off("resize.DTFC-"+c.sInstance)});var k=!0,l=d(this.s.dt.nTable);l.on("draw.dt.DTFC",{},function(){e._fnDraw.call(e,k),k=!1}).on("column-sizing.dt.DTFC",function(){e._fnColCalc(),e._fnGridLayout(e)}).on("column-visibility.dt.DTFC",function(){e._fnColCalc(),e._fnGridLayout(e),e._fnDraw(!0)}).on("destroy.dt.DTFC",function(){l.off("column-sizing.dt.DTFC destroy.dt.DTFC draw.dt.DTFC"),d(e.dom.scroller).off("scroll.DTFC mouseover.DTFC"),d(a).off("resize.DTFC-"+e.s.dt.sInstance),d(e.dom.grid.left.liner).off("scroll.DTFC mouseover.DTFC "+i),d(e.dom.grid.left.wrapper).remove(),d(e.dom.grid.right.liner).off("scroll.DTFC mouseover.DTFC "+i),d(e.dom.grid.right.wrapper).remove()}),this._fnGridLayout(),this.s.dt.oInstance.fnDraw(!1)},_fnColCalc:function(){var a=this,b=0,c=0;this.s.aiInnerWidths=[],this.s.aiOuterWidths=[],d.each(this.s.dt.aoColumns,function(e,f){var g,h=d(f.nTh);if(h.filter(":visible").length){var i=h.outerWidth();0===a.s.aiOuterWidths.length&&(g=d(a.s.dt.nTable).css("border-left-width"),i+="string"==typeof g?1:parseInt(g,10)),a.s.aiOuterWidths.length===a.s.dt.aoColumns.length-1&&(g=d(a.s.dt.nTable).css("border-right-width"),i+="string"==typeof g?1:parseInt(g,10)),a.s.aiOuterWidths.push(i),a.s.aiInnerWidths.push(h.width()),e<a.s.iLeftColumns&&(b+=i),a.s.iTableColumns-a.s.iRightColumns<=e&&(c+=i)}else a.s.aiInnerWidths.push(0),a.s.aiOuterWidths.push(0)}),this.s.iLeftWidth=b,this.s.iRightWidth=c},_fnGridSetup:function(){var a,b=this._fnDTOverflow();this.dom.body=this.s.dt.nTable,this.dom.header=this.s.dt.nTHead.parentNode,this.dom.header.parentNode.parentNode.style.position="relative";var c=d('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],e=c.childNodes[0],f=c.childNodes[1];this.dom.grid.dt.parentNode.insertBefore(c,this.dom.grid.dt),c.appendChild(this.dom.grid.dt),this.dom.grid.wrapper=c,this.s.iLeftColumns>0&&(this.dom.grid.left.wrapper=e,this.dom.grid.left.head=e.childNodes[0],this.dom.grid.left.body=e.childNodes[1],this.dom.grid.left.liner=d("div.DTFC_LeftBodyLiner",c)[0],c.appendChild(e)),this.s.iRightColumns>0&&(this.dom.grid.right.wrapper=f,this.dom.grid.right.head=f.childNodes[0],this.dom.grid.right.body=f.childNodes[1],this.dom.grid.right.liner=d("div.DTFC_RightBodyLiner",c)[0],a=d("div.DTFC_RightHeadBlocker",c)[0],a.style.width=b.bar+"px",a.style.right=-b.bar+"px",this.dom.grid.right.headBlock=a,a=d("div.DTFC_RightFootBlocker",c)[0],a.style.width=b.bar+"px",a.style.right=-b.bar+"px",this.dom.grid.right.footBlock=a,c.appendChild(f)),this.s.dt.nTFoot&&(this.dom.footer=this.s.dt.nTFoot.parentNode,this.s.iLeftColumns>0&&(this.dom.grid.left.foot=e.childNodes[2]),this.s.iRightColumns>0&&(this.dom.grid.right.foot=f.childNodes[2]))},_fnGridLayout:function(){var a,b=this.dom.grid,c=d(b.wrapper).width(),e=d(this.s.dt.nTable.parentNode).outerHeight(),f=d(this.s.dt.nTable.parentNode.parentNode).outerHeight(),g=this._fnDTOverflow(),h=this.s.iLeftWidth,i=this.s.iRightWidth,j=function(a,b){g.bar?a.style.width=b+g.bar+"px":(a.style.width=b+20+"px",a.style.paddingRight="20px",a.style.boxSizing="border-box")};g.x&&(e-=g.bar),b.wrapper.style.height=f+"px";var k=d("tr:eq(0)",this.s.dt.nTable).children("th,td"),l=0,m=0;k&&k.length&&(k=k.length>1?k.eq(1):k.eq(0),l=parseInt(k.css("border-left-width"),10),m=parseInt(k.css("border-right-width"),10)),this.s.iLeftColumns>0&&(h+=l,b.left.wrapper.style.width=h+"px",b.left.wrapper.style.height="1px",b.left.body.style.height=e+"px",b.left.foot&&(b.left.foot.style.top=(g.x?g.bar:0)+"px"),j(b.left.liner,h),b.left.liner.style.height=e+"px"),this.s.iRightColumns>0&&(i+=m,a=c-i,g.y&&(a-=g.bar),b.right.wrapper.style.width=i+"px",b.right.wrapper.style.left=a+"px",b.right.wrapper.style.height="1px",b.right.body.style.height=e+"px",b.right.foot&&(b.right.foot.style.top=(g.x?g.bar:0)+"px"),j(b.right.liner,i),b.right.liner.style.height=e+"px",b.right.headBlock.style.display=g.y?"block":"none",b.right.footBlock.style.display=g.y?"block":"none")},_fnDTOverflow:function(){var a=this.s.dt.nTable,b=a.parentNode,c={x:!1,y:!1,bar:this.s.dt.oScroll.iBarWidth};return a.offsetWidth>b.clientWidth&&(c.x=!0),a.offsetHeight>b.clientHeight&&(c.y=!0),c},_fnDraw:function(a){this._fnGridLayout(),this._fnCloneLeft(a),this._fnCloneRight(a),null!==this.s.fnDrawCallback&&this.s.fnDrawCallback.call(this,this.dom.clone.left,this.dom.clone.right),d(this).trigger("draw.dtfc",{leftClone:this.dom.clone.left,rightClone:this.dom.clone.right})},_fnCloneRight:function(a){if(!(this.s.iRightColumns<=0)){var b,c=[];for(b=this.s.iTableColumns-this.s.iRightColumns;b<this.s.iTableColumns;b++)this.s.dt.aoColumns[b].bVisible&&c.push(b);this._fnClone(this.dom.clone.right,this.dom.grid.right,c,a)}},_fnCloneLeft:function(a){if(!(this.s.iLeftColumns<=0)){var b,c=[];for(b=0;b<this.s.iLeftColumns;b++)this.s.dt.aoColumns[b].bVisible&&c.push(b);this._fnClone(this.dom.clone.left,this.dom.grid.left,c,a)}},_fnCopyLayout:function(a,b){for(var c=[],e=[],f=[],g=0,h=a.length;g<h;g++){var i=[];i.nTr=d(a[g].nTr).clone(!0,!0)[0];for(var j=0,k=this.s.iTableColumns;j<k;j++)if(-1!==d.inArray(j,b)){var l=d.inArray(a[g][j].cell,f);if(-1===l){var m=d(a[g][j].cell).clone(!0,!0)[0];e.push(m),f.push(a[g][j].cell),i.push({cell:m,unique:a[g][j].unique})}else i.push({cell:e[l],unique:a[g][j].unique})}c.push(i)}return c},_fnClone:function(a,b,e,f){var g,h,i,j,k,l,m,n,o,p,q=this,r=this.s.dt;if(f){for(null!==a.header&&a.header.parentNode.removeChild(a.header),a.header=d(this.dom.header).clone(!0,!0)[0],a.header.className+=" DTFC_Cloned",a.header.style.width="100%",b.head.appendChild(a.header),n=this._fnCopyLayout(r.aoHeader,e),o=d(">thead",a.header),o.empty(),g=0,h=n.length;g<h;g++)o[0].appendChild(n[g].nTr);r.oApi._fnDrawHead(r,n,!0)}else for(n=this._fnCopyLayout(r.aoHeader,e),p=[],r.oApi._fnDetectHeader(p,d(">thead",a.header)[0]),g=0,h=n.length;g<h;g++)for(i=0,j=n[g].length;i<j;i++)p[g][i].cell.className=n[g][i].cell.className,d("span.DataTables_sort_icon",p[g][i].cell).each(function(){this.className=d("span.DataTables_sort_icon",n[g][i].cell)[0].className});this._fnEqualiseHeights("thead",this.dom.header,a.header),"auto"==this.s.sHeightMatch&&d(">tbody>tr",q.dom.body).css("height","auto"),null!==a.body&&(a.body.parentNode.removeChild(a.body),a.body=null),a.body=d(this.dom.body).clone(!0)[0],a.body.className+=" DTFC_Cloned",a.body.style.paddingBottom=r.oScroll.iBarWidth+"px",a.body.style.marginBottom=2*r.oScroll.iBarWidth+"px",null!==a.body.getAttribute("id")&&a.body.removeAttribute("id"),d(">thead>tr",a.body).empty(),d(">tfoot",a.body).remove();var s=d("tbody",a.body)[0];if(d(s).empty(),r.aiDisplay.length>0){var t=d(">thead>tr",a.body)[0];for(m=0;m<e.length;m++){k=e[m],l=d(r.aoColumns[k].nTh).clone(!0)[0],l.innerHTML="";var u=l.style;u.paddingTop="0",u.paddingBottom="0",u.borderTopWidth="0",u.borderBottomWidth="0",u.height=0,u.width=q.s.aiInnerWidths[k]+"px",t.appendChild(l)}d(">tbody>tr",q.dom.body).each(function(a){var b=this.cloneNode(!1);b.removeAttribute("id");var c=!1===q.s.dt.oFeatures.bServerSide?q.s.dt.aiDisplay[q.s.dt._iDisplayStart+a]:a,f=q.s.dt.aoData[c].anCells||d(this).children("td, th");for(m=0;m<e.length;m++)k=e[m],f.length>0&&(l=d(f[k]).clone(!0,!0)[0],b.appendChild(l));s.appendChild(b)})}else d(">tbody>tr",q.dom.body).each(function(a){l=this.cloneNode(!0),l.className+=" DTFC_NoData",d("td",l).html(""),s.appendChild(l)});if(a.body.style.width="100%",a.body.style.margin="0",a.body.style.padding="0",r.oScroller!==c){var v=r.oScroller.dom.force;b.forcer?b.forcer.style.height=v.style.height:(b.forcer=v.cloneNode(!0),b.liner.appendChild(b.forcer))}if(b.liner.appendChild(a.body),this._fnEqualiseHeights("tbody",q.dom.body,a.body),null!==r.nTFoot){if(f){null!==a.footer&&a.footer.parentNode.removeChild(a.footer),a.footer=d(this.dom.footer).clone(!0,!0)[0],a.footer.className+=" DTFC_Cloned",a.footer.style.width="100%",b.foot.appendChild(a.footer),n=this._fnCopyLayout(r.aoFooter,e);var w=d(">tfoot",a.footer);for(w.empty(),g=0,h=n.length;g<h;g++)w[0].appendChild(n[g].nTr);r.oApi._fnDrawHead(r,n,!0)}else{n=this._fnCopyLayout(r.aoFooter,e);var x=[];for(r.oApi._fnDetectHeader(x,d(">tfoot",a.footer)[0]),g=0,h=n.length;g<h;g++)for(i=0,j=n[g].length;i<j;i++)x[g][i].cell.className=n[g][i].cell.className}this._fnEqualiseHeights("tfoot",this.dom.footer,a.footer)}var y=r.oApi._fnGetUniqueThs(r,d(">thead",a.header)[0]);d(y).each(function(a){k=e[a],this.style.width=q.s.aiInnerWidths[k]+"px"}),null!==q.s.dt.nTFoot&&(y=r.oApi._fnGetUniqueThs(r,d(">tfoot",a.footer)[0]),d(y).each(function(a){k=e[a],this.style.width=q.s.aiInnerWidths[k]+"px"}))},_fnGetTrNodes:function(a){for(var b=[],c=0,d=a.childNodes.length;c<d;c++)"TR"==a.childNodes[c].nodeName.toUpperCase()&&b.push(a.childNodes[c]);return b},_fnEqualiseHeights:function(a,b,c){if("none"!=this.s.sHeightMatch||"thead"===a||"tfoot"===a){var e,f,g,h,i,j=b.getElementsByTagName(a)[0],k=c.getElementsByTagName(a)[0],l=d(">"+a+">tr:eq(0)",b).children(":first"),m=(l.outerHeight(),l.height(),this._fnGetTrNodes(j)),n=this._fnGetTrNodes(k),o=[];for(e=0,f=n.length;e<f;e++)h=m[e].offsetHeight,i=n[e].offsetHeight,g=i>h?i:h,"semiauto"==this.s.sHeightMatch&&(m[e]._DTTC_iHeight=g),o.push(g);for(e=0,f=n.length;e<f;e++)n[e].style.height=o[e]+"px",m[e].style.height=o[e]+"px"}}},f.defaults={iLeftColumns:1,iRightColumns:0,fnDrawCallback:null,sHeightMatch:"semiauto"},f.version="3.0.4",d.fn.dataTable.FixedColumns=f,d.fn.DataTable.FixedColumns=f,f};"function"==typeof define&&define.amd?define(["jquery","jq/dataTables"],d):"object"==typeof exports?d(require("jquery"),require("jq/dataTables")):jQuery&&!jQuery.fn.dataTable.FixedColumns&&d(jQuery,jQuery.fn.dataTable)}(window,document);