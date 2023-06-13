"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[625],{2625:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var c,o=t(2798),i=t(9641),r=t(7059),a=t(2983),s=t(7681),d=t(7173),h=t(2307),l=t(1310),p={code:"\nimport { Space, Checkbox } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <Checkbox>Checkbox</Checkbox>\n      <Checkbox indeterminate>半选状态</Checkbox>\n      <Checkbox indeterminate disabled>半选状态</Checkbox>\n      <Checkbox disabled>Checkbox</Checkbox>\n      <Checkbox checked disabled>Checkbox</Checkbox>\n    </Space>\n  );\n};",namespace:d.Bb},b={code:"\nimport { Checkbox, Button, Space } from '@mx-design/web';\n\nfunction App() {\n  const [checked, setChecked] = React.useState(false);\n  return (\n    <div>\n      <Space size={40}>\n        <Checkbox\n          checked={checked}\n        >\n          Checkbox\n        </Checkbox>\n        <Checkbox checked={checked} disabled>\n          disabled Checkbox\n        </Checkbox>\n      </Space>\n      <div style={{ marginTop: 30 }}>\n        <Button\n          onClick={() => {\n            setChecked(!checked);\n          }}\n        >\n          {checked ? 'unCheck' : 'Check'}\n        </Button>\n      </div>\n    </div>\n  );\n}",namespace:d.fk},k={code:"\nimport { Checkbox } from '@mx-design/web';\n\nfunction App() {\n  const CheckboxGroup = Checkbox.Group;\n  const options = [\n    {\n      label: 'Option 1',\n      value: '1',\n    },\n    {\n      label: 'Option 2',\n      value: '2',\n      disabled: true,\n    },\n    {\n      label: 'Option 3',\n      value: '3',\n    },\n    {\n      label: 'Option 4',\n      value: '4',\n    },\n  ];\n\n  return (\n    <div>\n      <CheckboxGroup\n        options={['Option A', 'Option B', 'Option C']}\n        style={{ display: 'block', marginBottom: 16 }}\n      />\n\n\n    </div>\n  );\n};",namespace:d.ZA},u={code:"\nimport { Checkbox } from '@mx-design/web';\n\nfunction App() {\n  const [indeterminate, setIndeterminate] = React.useState(true);\n  const [checkAll, setCheckAll] = React.useState(false);\n  const [value, setValue] = React.useState([0, 1]);\n\n  const CheckboxGroup = Checkbox.Group;\n  const options = ['Option 1', 'Option 2', 'Option 3'];\n\n  function onChangeAll(checked) {\n    if (checked) {\n      setIndeterminate(false);\n      setCheckAll(true);\n      setValue([0, 1, 2]);\n    } else {\n      setIndeterminate(false);\n      setCheckAll(false);\n      setValue([]);\n    }\n  }\n\n  function onChange(checkList) {\n    setIndeterminate(!!(checkList.length && checkList.length !== options.length));\n    setCheckAll(!!(checkList.length === options.length));\n    setValue(checkList);\n  }\n\n  return (\n    <div>\n      <div style={{ marginBottom: 16 }}>\n        <Checkbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate}>\n          {checkAll ? 'unCheck All' : 'Check All'}\n        </Checkbox>\n      </div>\n      <CheckboxGroup\n        value={value}\n        options={options.map((x, i) => ({\n          label: x,\n          value: i,\n        }))}\n        onChange={onChange}\n      />\n    </div>\n  );\n}",namespace:d.oT},m={code:"\nimport { Checkbox, Space } from '@mx-design/web';\n\nfunction App() {\n  const Card = ({ item, checked }) => {\n    const customCheckboxCard = {\n      padding: '10px 16px',\n      border: '1px solid #ddd',\n      borderRadius: '4px',\n      width: '250px',\n      boxSizing: 'border-box',\n      border: `1px solid ${checked ? '#cc449b' : '#ddd'}`,\n      color: checked ? '#cc449b' : ''\n    }\n\n    return (\n      <div style={customCheckboxCard} key={item}>\n        <strong>Checkbox Card {item}</strong>\n        <div>this is a text</div>\n      </div>\n    )\n  }\n\n  const tagStyle = {\n    display: 'inline-flex',\n    alignItems: 'center',\n    boxSizing: 'border-box',\n    height: '24px',\n    padding: '0 8px',\n    border: '1px solid transparent',\n    background: 'var(--bg-color-component)',\n    borderRadius: '4px',\n    fontSize: '12px',\n    fontWeight: 500,\n    lineHeight: '22px'\n  }\n  return (\n    <div>\n      <div\n        style={{ marginBottom: 20 }}\n      >\n        <Checkbox.Group defaultValue={['Beijing']} >\n          {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {\n            return (\n              <Checkbox key={item} value={item} style={tagStyle}>\n                {({ checked }) => {\n                  return (\n                    <div key={item} style={{ color: checked ? '#cc449b' : '' }}>\n                      {item}\n                    </div>\n                  );\n                }}\n              </Checkbox>\n            );\n          })}\n        </Checkbox.Group>\n      </div>\n      <Checkbox.Group defaultValue={[1]}>\n        {[1, 2].map((item) => {\n          return (\n            <Checkbox key={item} value={item}>\n              {({ checked }) => {\n                return <Card item={item} checked={checked} />;\n              }}\n            </Checkbox>\n          );\n        })}\n      </Checkbox.Group>\n    </div>\n  );\n};",namespace:d.sR},x=(c={},(0,i.Z)(c,p.namespace,p),(0,i.Z)(c,b.namespace,b),(0,i.Z)(c,k.namespace,k),(0,i.Z)(c,u.namespace,u),(0,i.Z)(c,m.namespace,m),c);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const f=function(){var e=(0,h.b)({namespace:d.HU}),n=(0,r.Z)(e,1)[0],t=(0,a.useMemo)((function(){return Object.keys(n).map((function(e){return g(g({},n[e]),x[e])}))}),[n,x]),c=(0,a.useMemo)((function(){return t.map((function(e){return{title:e.title,href:"#".concat(e.namespace)}}))}),[t]);return a.createElement(s.Z,{titleList:c},t.map((function(e){return a.createElement(l.AN,(0,o.Z)({key:e.namespace},e))})))}}}]);