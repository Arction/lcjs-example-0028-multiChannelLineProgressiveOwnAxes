(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,n)=>{const s=n(377),a=new Array(5).fill(0).map(((e,t)=>({title:`Ch ${t+1}`}))),{lightningChart:i,emptyFill:o,emptyLine:r,AxisTickStrategies:l,AxisScrollStrategies:c,UIOrigins:h,UIDraggingModes:g,LegendBoxBuilders:d,Themes:m}=s,f=i({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:m[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle(`Multi-channel real-time monitoring (${a.length} chs, 1000 Hz)`),u=new Image;u.crossOrigin="",u.src=document.head.baseURI+"examples/assets/0028/ekg.png";const M=f.engine.addCustomIcon(u,{height:18}),p=f.getDefaultAxisX().setTickStrategy(l.Time).setStrokeStyle(r).setScrollStrategy(c.progressive).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-3e4,stopAxisAfter:!1})));f.getDefaultAxisY().dispose();const w=a.map(((e,t)=>{const n=a.length-(t+1),s=f.addAxisY({iStack:n}).setTitle(e.title).setTitleRotation(0).setAnimationScroll(!1).setMargins(n>0?5:0,0===t?35:n<a.length-1?5:0),i=f.addPointLineAreaSeries({dataPattern:"ProgressiveX",automaticColorIndex:t,yAxis:s}).setName(`Channel ${t+1}`).setAreaFillStyle(o).setMaxSampleCount(5e4).setStrokeStyle((e=>e.setThickness(2))).setIcon(M);return i.addEventListener("visiblechange",(e=>{const{isVisible:t}=e;s.setVisible(t)})),{series:i,axisY:s}})),x=f.addLegendBox(d.HorizontalLegendBox);w.forEach((e=>x.add(e.series))),f.addUIElement().setText("Reset").setPosition({x:0,y:0}).setOrigin(h.LeftBottom).setMargin({left:4,bottom:4}).setDraggingMode(g.notDraggable).addEventListener("click",(e=>{const t=w[0].series.getXMax();p.setInterval({start:t-3e4,end:t,stopAxisAfter:!1}),w.forEach((e=>e.axisY.fit()))}));const I=[{length:Math.ceil(400*Math.PI),func:e=>8*Math.sin(e/200)},{length:Math.ceil(3200*Math.PI),func:e=>7*Math.sin(e/1600)},{length:Math.ceil(800*Math.PI),func:e=>4*(Math.cos(e/400)+Math.sin(e/200))},{length:Math.ceil(800*Math.PI),func:e=>6*Math.sin(e/100)+Math.cos(e/400)},{length:Math.ceil(1800*Math.PI),func:e=>8*Math.cos(e/900)}].map((e=>{const t=[];t.length=e.length;for(let n=0;n<e.length;n+=1){const s=e.func(n);t[n]=s}return t}));let S=window.performance.now(),A=0;const k=()=>{const e=window.performance.now(),t=Math.floor(1e3*(e-S)/1e3),n=Math.min(t-A,1e3),s=[];for(let e=0;e<w.length;e++){const t=I[e%I.length],a=[];for(let e=0;e<n;e++){const n={x:1*(A+e),y:t[(A+e)%t.length]};a.push(n)}s[e]=a}w.forEach(((e,t)=>e.series.appendJSON(s[t]))),A+=n,requestAnimationFrame(k)};k();let y=window.performance.now(),L=0,P=0;const T=f.getTitle(),b=()=>{L++;const e=window.performance.now();P=1e3/((e-y)/L),requestAnimationFrame(b),f.setTitle(`${T} (FPS: ${P.toFixed(1)})`)};requestAnimationFrame(b),setInterval((()=>{y=window.performance.now(),L=0}),5e3)}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);