"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[23],{5023:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var r,c=t(2798),o=t(9641),i=t(7059),p=t(2983),a=t(7681),s=t(1609),u=t(2307),m=t(1310),f={code:"\nimport { Empty } from '@mx-design/web';\n\nfunction App() {\n  return <Empty />;\n};",namespace:s.Bb},l={code:"\nimport { Empty, IconSuccessFilling } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Empty\n      icon={\n        <div\n          style={{\n            display: 'inline-flex',\n            alignItems: 'center',\n            color: '#34a853',\n            justifyContent: 'center',\n          }}\n        >\n          <IconSuccessFilling />\n        </div>\n      }\n      description='No data, please reload!'\n    />\n  );\n};",namespace:s.d3},b={code:"\nimport { Empty, Button } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Empty\n      imgSrc='https://pic1.zhimg.com/v2-9a344d6cdd66f3fa4c3edfcb3b6faf1e_1440w.jpg?source=172ae18b.png'\n      description={<Button>Refresh</Button>}\n    />\n  );\n};",namespace:s.cg},d=(r={},(0,o.Z)(r,f.namespace,f),(0,o.Z)(r,l.namespace,l),(0,o.Z)(r,b.namespace,b),r);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const O=function(){var e=(0,u.b)({namespace:s.Fi}),n=(0,i.Z)(e,1)[0],t=(0,p.useMemo)((function(){return Object.keys(n).map((function(e){return g(g({},n[e]),d[e])}))}),[n,d]),r=(0,p.useMemo)((function(){return t.map((function(e){return{title:e.title,href:"#".concat(e.namespace)}}))}),[t]);return p.createElement(a.Z,{titleList:r},t.map((function(e){return p.createElement(m.AN,(0,c.Z)({key:e.namespace},e))})))}}}]);