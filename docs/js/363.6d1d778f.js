"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[363],{5363:(l,e,t)=>{t.r(e),t.d(e,{default:()=>w});var n,d=t(2798),o=t(9641),i=t(7059),y=t(2983),c=t(188),r=t(2307),s=t(9101),C={code:"\nimport { GridLayout, Cell, Button } from '@mx-design/web';\n\nfunction App() {\n  const cellStyle = { background: \"var(--bg-color-component)\", padding: '4px 0' };\n  return (\n      <GridLayout columns={6}>\n        <Cell style={cellStyle} width={1} middle>1/6</Cell>\n        <Cell style={cellStyle} width={1} middle>1/6</Cell>\n        <Cell style={cellStyle} width={1} middle>1/6</Cell>\n        <Cell style={cellStyle} width={1} middle>1/6</Cell>\n        <Cell style={cellStyle} width={1} middle>1/6</Cell>\n        <Cell style={cellStyle} width={1} middle>1/6</Cell>\n        <Cell style={cellStyle} width={2} middle>2/6</Cell>\n        <Cell style={cellStyle} width={2} middle>2/6</Cell>\n        <Cell style={cellStyle} width={2} middle>2/6</Cell>\n        <Cell style={cellStyle} width={3} middle>1/3</Cell>\n        <Cell style={cellStyle} width={3} middle>1/3</Cell>\n        <Cell style={cellStyle} width={6} middle>1/1</Cell>\n      </GridLayout>\n  )\n}",namespace:s.Bb},p={code:"\nimport { GridLayout, Cell, Button } from '@mx-design/web';\n\nfunction App() {\n  const cellStyle = { background: \"var(--bg-color-component)\", padding: '4px 0' };\n  return (\n      <GridLayout flow=\"column\" columns={4}>\n        <Cell style={cellStyle} height={1} middle>1/6</Cell>\n        <Cell style={cellStyle} height={1} middle>1/6</Cell>\n        <Cell style={cellStyle} height={1} middle>1/6</Cell>\n        <Cell style={cellStyle} height={1} middle>1/6</Cell>\n        <Cell style={cellStyle} height={1} middle>1/6</Cell>\n        <Cell style={cellStyle} height={1} middle>1/6</Cell>\n        <Cell style={cellStyle} height={2} middle>2/6</Cell>\n        <Cell style={cellStyle} height={2} middle>2/6</Cell>\n        <Cell style={cellStyle} height={2} middle>2/6</Cell>\n        <Cell style={cellStyle} height={3} middle>1/3</Cell>\n        <Cell style={cellStyle} height={3} middle>1/3</Cell>\n        <Cell style={cellStyle} height={6} middle>1/1</Cell>\n      </GridLayout>\n  )\n}",namespace:s.sg},a={code:"\nimport { GridLayout, Cell, Button } from '@mx-design/web';\n\nfunction App() {\n  const cellStyle = { background: \"var(--bg-color-component)\", padding: '20px 0' };\n  return (\n    <GridLayout columns={3}>\n      <Cell style={cellStyle} middle>Top Left</Cell>\n      <Cell left={3} style={cellStyle} middle>Top Right</Cell>\n      <Cell left={2} top={2} style={cellStyle} middle>Middle</Cell>\n      <Cell top={3} style={cellStyle} middle>Bottom Left</Cell>\n      <Cell top={3} left={3} style={cellStyle} middle>Bottom Right</Cell>\n    </GridLayout>\n  )\n}",namespace:s.Ly},m={code:"\nimport { GridLayout, Cell, Button } from '@mx-design/web';\n\nfunction App() {\n  const cellStyle = { background: \"var(--bg-color-component)\", padding: '4px 0' };\n  const cellStyleContent = { ...cellStyle, height: '200px' };\n  return (\n    <GridLayout columns=\"100px 1fr 100px\" rows=\"minmax(45px,auto) 1fr minmax(45px,auto)\">\n      <Cell width={3} style={cellStyle} middle>\n        <h3>Header</h3>\n      </Cell>\n      <Cell style={cellStyleContent} middle>\n        Menu\n      </Cell>\n      <Cell style={cellStyleContent} middle>\n        Content\n      </Cell>\n      <Cell style={cellStyleContent} middle>\n        Ads\n      </Cell>\n      <Cell width={3} style={cellStyle} middle>\n        footer\n      </Cell>\n    </GridLayout>\n  );\n}",namespace:s.FX},u={code:'\nimport { GridLayout, Cell, Button } from \'@mx-design/web\';\n\nfunction App() {\n  const cellStyle = { background: "var(--bg-color-component)", padding: \'4px 12px\' };\n  const cellTitleStyle = { border: "1px solid var(--bg-color-component)", padding: \'4px 12px\' };\n  return (\n      <GridLayout rows={3}>\n        <GridLayout gap="8px" rows="29px 1fr" style={cellTitleStyle}>\n        <Cell>Justify Start</Cell>\n        <GridLayout columns="50px 50px 50px" justifyContent="start">\n          <Cell style={cellStyle} middle>\n            A\n          </Cell>\n          <Cell style={cellStyle} middle>\n            B\n          </Cell>\n          <Cell style={cellStyle} middle>\n            C\n          </Cell>\n        </GridLayout>\n        </GridLayout>\n        <GridLayout gap="8px" rows="29px 1fr" style={cellTitleStyle}>\n        <Cell>Justify End</Cell>\n        <GridLayout columns="50px 50px 50px" justifyContent="end">\n          <Cell style={cellStyle} middle>\n            A\n          </Cell>\n          <Cell style={cellStyle} middle>\n            B\n          </Cell>\n          <Cell style={cellStyle} middle>\n            C\n          </Cell>\n        </GridLayout>\n        </GridLayout>\n        <GridLayout gap="8px" rows="29px 1fr" style={cellTitleStyle}>\n        <Cell>Justify Space-between</Cell>\n        <GridLayout columns="50px 50px 50px" justifyContent="space-between">\n          <Cell style={cellStyle} middle>\n            A\n          </Cell>\n          <Cell style={cellStyle} middle>\n            B\n          </Cell>\n          <Cell style={cellStyle} middle>\n            C\n          </Cell>\n        </GridLayout>\n        </GridLayout>\n      </GridLayout>\n  );\n}',namespace:s.pW},S={code:'\nimport { GridLayout, Cell, Button } from \'@mx-design/web\';\n\nfunction App() {\n  const cellStyle = { background: "var(--bg-color-component)", padding: \'4px 12px\' };\n  const cellTitleStyle = { border: "1px solid var(--bg-color-component)", padding: \'4px 12px\' };\n  return (\n      <GridLayout columns={3}>\n        <GridLayout gap="8px" rows="29px 200px" style={cellTitleStyle}>\n          <Cell>Align Start</Cell>\n          <GridLayout flow="column" rows="30px 30px 30px" alignContent="start">\n            <Cell style={cellStyle} middle>\n              A\n            </Cell>\n            <Cell style={cellStyle} middle>\n              B\n            </Cell>\n            <Cell style={cellStyle} middle>\n              C\n            </Cell>\n          </GridLayout>\n        </GridLayout>\n        <GridLayout gap="8px" rows="29px 200px" style={cellTitleStyle}>\n          <Cell>Align End</Cell>\n          <GridLayout flow="column" rows="30px 30px 30px" alignContent="end">\n            <Cell style={cellStyle} middle>\n              A\n            </Cell>\n            <Cell style={cellStyle} middle>\n              B\n            </Cell>\n            <Cell style={cellStyle} middle>\n              C\n            </Cell>\n          </GridLayout>\n        </GridLayout>\n        <GridLayout gap="8px" rows="29px 200px" style={cellTitleStyle}>\n          <Cell>Align Space-between</Cell>\n          <GridLayout flow="column" rows="30px 30px 30px" alignContent="space-between">\n            <Cell style={cellStyle} middle>\n              A\n            </Cell>\n            <Cell style={cellStyle} middle>\n              B\n            </Cell>\n            <Cell style={cellStyle} middle>\n              C\n            </Cell>\n          </GridLayout>\n        </GridLayout>\n      </GridLayout>\n  );\n}',namespace:s.Wk},g=(n={},(0,o.Z)(n,C.namespace,C),(0,o.Z)(n,p.namespace,p),(0,o.Z)(n,a.namespace,a),(0,o.Z)(n,m.namespace,m),(0,o.Z)(n,u.namespace,u),(0,o.Z)(n,S.namespace,S),n),x=t(7181);function f(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.push.apply(t,n)}return t}function h(l){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){(0,o.Z)(l,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(t,e))}))}return l}const w=function(){var l=(0,r.b)({namespace:s.sW}),e=(0,i.Z)(l,1)[0],t=(0,y.useMemo)((function(){return Object.keys(e).map((function(l){return h(h({key:l},e[l]),g[l])}))}),[e]),n=(0,y.useMemo)((function(){return t.map((function(l){return{title:l.title,href:"#".concat(l.key)}}))}),[t]);return y.createElement(c.Z,{titleList:n},t.map((function(l,e){return y.createElement(x.AN,(0,d.Z)({key:e},l))})))}}}]);