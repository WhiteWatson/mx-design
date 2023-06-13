"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[540],{3540:(n,t,o)=>{o.r(t),o.d(t,{default:()=>I});var u,e=o(2798),r=o(9641),a=o(7059),s=o(2983),i=o(7681),p=o(6796),B=o(2307),c={code:'\nimport { Space, Button } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Space>\n      <Button type="brand">Brand</Button>\n      <Button type="outline">Outline</Button>\n      <Button type="text">Text</Button>\n    </Space>\n  )\n}',namespace:p.Bb},d={code:'\nimport { Space, Button, IconAdd, IconAshbin } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Space>\n      <Button type="brand" icon={<IconAdd />} />\n      <Button type="brand" icon={<IconAshbin />}>\n        Delete\n      </Button>\n    </Space>\n  )\n}',namespace:p.JO},l={code:'\nimport { Space, Button } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <div\n      style={{\n        display: \'grid\',\n        gridTemplateColumns: \'repeat(3, 100px)\',\n        gridRowGap: 24,\n        gridColumnGap: 24,\n      }}\n    >\n      <Button type="brand">Brand</Button>\n      <Button type="outline">Brand</Button>\n      <Button type="text">Brand</Button>\n\n      <Button type="brand" status="warning">\n        Warning\n      </Button>\n      <Button type="outline" status="warning">\n        Warning\n      </Button>\n      <Button type="text" status="warning">\n        Warning\n      </Button>\n\n      <Button type="brand" status="error">\n        Error\n      </Button>\n      <Button type="outline" status="error">\n        Error\n      </Button>\n      <Button type="text" status="error">\n        Error\n      </Button>\n\n      <Button type="brand" status="success">\n        Success\n      </Button>\n      <Button type="outline" status="success">\n        Success\n      </Button>\n      <Button type="text" status="success">\n        Success\n      </Button>\n\n      <Button type="brand" status="default">\n        Default\n      </Button>\n      <Button type="outline" status="default">\n        Default\n      </Button>\n      <Button type="text" status="default">\n        Default\n      </Button>\n    </div>\n  );\n}',namespace:p.qb},y={code:'\nimport { Space, Button } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <div\n      style={{\n        display: \'grid\',\n        gridTemplateColumns: \'repeat(3, 100px)\',\n        gridRowGap: 24,\n        gridColumnGap: 24,\n      }}\n    >\n      <Button type="brand" disabled>\n        Brand\n      </Button>\n      <Button type="outline" disabled>\n        Brand\n      </Button>\n      <Button type="text" disabled>\n        Brand\n      </Button>\n\n      <Button type="brand" status="warning" disabled>\n        Warning\n      </Button>\n      <Button type="outline" status="warning" disabled>\n        Warning\n      </Button>\n      <Button type="text" status="warning" disabled>\n        Warning\n      </Button>\n\n      <Button type="brand" status="error" disabled>\n        Error\n      </Button>\n      <Button type="outline" status="error" disabled>\n        Error\n      </Button>\n      <Button type="text" status="error" disabled>\n        Error\n      </Button>\n\n      <Button type="brand" status="success" disabled>\n        Success\n      </Button>\n      <Button type="outline" status="success" disabled>\n        Success\n      </Button>\n      <Button type="text" status="success" disabled>\n        Success\n      </Button>\n\n      <Button type="brand" status="default" disabled>\n        Default\n      </Button>\n      <Button type="outline" status="default" disabled>\n        Default\n      </Button>\n      <Button type="text" status="default" disabled>\n        Default\n      </Button>\n    </div>\n  );\n}',namespace:p.x9},b={code:'\nimport { Button } from \'@mx-design/web\';\n\nfunction App() {\n  const [loading1, setLoading1] = React.useState(false);\n  const [loading2, setLoading2] = React.useState(false);\n\n  function onClickBtn1(e) {\n    setLoading1(true);\n    setTimeout(() => {\n      setLoading1(false);\n    }, 4000);\n  }\n\n  function onClickBtn2(e) {\n    setLoading2(true);\n    setTimeout(() => {\n      setLoading2(false);\n    }, 4000);\n  }\n  return (\n    <div\n      style={{\n        display: \'grid\',\n        gridTemplateColumns: \'repeat(3, 100px)\',\n        rowGap: 24,\n        columnGap: 24,\n        marginLeft: 24,\n      }}\n    >\n      <Button type="brand" loading>\n        Loading\n      </Button>\n      <Button type="outline" loading>\n        Loading\n      </Button>\n      <Button type="text" loading>\n        Loading\n      </Button>\n\n      <Button type="brand" loading={loading1} onClick={onClickBtn1}>\n        Click Me\n      </Button>\n      <Button type="brand" loading={loading2} onClick={onClickBtn2}>\n        {!loading2 && <IconAdd />}Click Me\n      </Button>\n    </div>\n  );\n}',namespace:p.gb},m={code:'\nimport { Button, IconArrowBottom } from \'@mx-design/web\';\n\nfunction App() {\n  const ButtonGroup = Button.Group;\n  return (\n    <div\n      style={{\n        display: \'grid\',\n        gridTemplateColumns: \'repeat(3, 200px)\',\n        gridRowGap: 24,\n        gridColumnGap: 24,\n      }}\n    >\n      <ButtonGroup>\n        <Button type="brand">Publish</Button>\n        <Button type="brand" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="outline">Publish</Button>\n        <Button type="outline" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="text">Publish</Button>\n        <Button type="text" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button type="brand" status="warning">\n          Publish\n        </Button>\n        <Button type="brand" status="warning" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="outline" status="warning">\n          Publish\n        </Button>\n        <Button type="outline" status="warning" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="text" status="warning">\n          Publish\n        </Button>\n        <Button type="text" status="warning" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button type="brand" status="error">\n          Publish\n        </Button>\n        <Button type="brand" status="error" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="outline" status="error">\n          Publish\n        </Button>\n        <Button type="outline" status="error" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="text" status="error">\n          Publish\n        </Button>\n        <Button type="text" status="error" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button type="brand" status="success">\n          Publish\n        </Button>\n        <Button type="brand" status="success" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="outline" status="success">\n          Publish\n        </Button>\n        <Button type="outline" status="success" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="text" status="success">\n          Publish\n        </Button>\n        <Button type="text" status="success" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button type="brand" status="default">\n          Publish\n        </Button>\n        <Button type="brand" status="default" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="outline" status="default">\n          Publish\n        </Button>\n        <Button type="outline" status="default" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n      <ButtonGroup>\n        <Button type="text" status="default">\n          Publish\n        </Button>\n        <Button type="text" status="default" icon={<IconArrowBottom />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button type="brand" icon={<IconFavorite />} />\n        <Button type="brand" icon={<IconFabulous />} />\n        <Button type="brand" icon={<IconGood />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button type="outline" icon={<IconFavorite />} />\n        <Button type="outline" icon={<IconFabulous />} />\n        <Button type="outline" icon={<IconGood />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button type="text" icon={<IconFavorite />} />\n        <Button type="text" icon={<IconFabulous />} />\n        <Button type="text" icon={<IconGood />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button disabled type="brand" icon={<IconFavorite />} />\n        <Button disabled type="brand" icon={<IconFabulous />} />\n        <Button disabled type="brand" icon={<IconGood />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button disabled type="outline" icon={<IconFavorite />} />\n        <Button disabled type="outline" icon={<IconFabulous />} />\n        <Button disabled type="outline" icon={<IconGood />} />\n      </ButtonGroup>\n\n      <ButtonGroup>\n        <Button disabled type="text" icon={<IconFavorite />} />\n        <Button disabled type="text" icon={<IconFabulous />} />\n        <Button disabled type="text" icon={<IconGood />} />\n      </ButtonGroup>\n    </div>\n  );\n}',namespace:p.ZA},g={code:"\nimport { Button } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', width: '400px' }}>\n      <Button type=\"brand\" long>\n        I'm a pig\n      </Button>\n      <Button type=\"outline\" long>\n        I'm a cat\n      </Button>\n      <Button type=\"text\" long>\n        I'm a dog\n      </Button>\n    </div>\n  );\n}",namespace:p.dK},f=(u={},(0,r.Z)(u,c.namespace,c),(0,r.Z)(u,d.namespace,d),(0,r.Z)(u,l.namespace,l),(0,r.Z)(u,y.namespace,y),(0,r.Z)(u,b.namespace,b),(0,r.Z)(u,m.namespace,m),(0,r.Z)(u,g.namespace,g),u),G=o(1310);function w(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.push.apply(o,u)}return o}function x(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){(0,r.Z)(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}const I=function(){var n=(0,B.b)({namespace:p.qZ}),t=(0,a.Z)(n,1)[0],o=(0,s.useMemo)((function(){return Object.keys(t).map((function(n){return x(x({},t[n]),f[n])}))}),[t,f]),u=(0,s.useMemo)((function(){return o.map((function(n){return{title:n.title,href:"#".concat(n.namespace)}}))}),[o]);return s.createElement(i.Z,{titleList:u},o.map((function(n){return s.createElement(G.AN,(0,e.Z)({key:n.namespace},n))})))}}}]);