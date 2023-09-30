import{p as t,d as e,s as a}from"./styles-622362e4.bc1f2465.js";import{c as r,l as d,h as n,i}from"./mermaid.core.c3e4c678.js";import{G as o,l as s}from"./layout.cf1b7ac6.js";import{s as p}from"./svgDraw-70101091.fa2809dd.js";import"./app.3d34f667.js";import"./line.65c2f76a.js";import"./array.ca8349ae.js";import"./constant.f07fca73.js";let f={};const c=function(t){const e=Object.entries(f).find((e=>e[1].label===t));if(e)return e[0]},g={parser:t,db:e,renderer:{draw:function(t,e,a,g){const m=r().class;f={},d.info("Rendering diagram "+t);const h=r().securityLevel;let l;"sandbox"===h&&(l=n("#i"+e));const u=n("sandbox"===h?l.nodes()[0].contentDocument.body:"body"),k=u.select(`[id='${e}']`);var L;(L=k).append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),L.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),L.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),L.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),L.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),L.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),L.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),L.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z");const b=new o({multigraph:!0});b.setGraph({isMultiGraph:!0}),b.setDefaultEdgeLabel((function(){return{}}));const y=g.db.getClasses(),x=Object.keys(y);for(const r of x){const t=y[r],e=p.drawClass(k,t,m,g);f[e.id]=e,b.setNode(e.id,e),d.info("Org height: "+e.height)}g.db.getRelations().forEach((function(t){d.info("tjoho"+c(t.id1)+c(t.id2)+JSON.stringify(t)),b.setEdge(c(t.id1),c(t.id2),{relation:t},t.title||"DEFAULT")}));g.db.getNotes().forEach((function(t){d.debug(`Adding note: ${JSON.stringify(t)}`);const e=p.drawNote(k,t,m,g);f[e.id]=e,b.setNode(e.id,e),t.class&&t.class in y&&b.setEdge(t.id,c(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")})),s(b),b.nodes().forEach((function(t){void 0!==t&&void 0!==b.node(t)&&(d.debug("Node "+t+": "+JSON.stringify(b.node(t))),u.select("#"+(g.db.lookUpDomId(t)||t)).attr("transform","translate("+(b.node(t).x-b.node(t).width/2)+","+(b.node(t).y-b.node(t).height/2)+" )"))})),b.edges().forEach((function(t){void 0!==t&&void 0!==b.edge(t)&&(d.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(b.edge(t))),p.drawEdge(k,b.edge(t),b.edge(t).relation,m,g))}));const E=k.node().getBBox(),w=E.width+40,M=E.height+40;i(k,M,w,m.useMaxWidth);const j=`${E.x-20} ${E.y-20} ${w} ${M}`;d.debug(`viewBox ${j}`),k.attr("viewBox",j)}},styles:a,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,e.clear()}};export{g as diagram};