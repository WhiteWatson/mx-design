"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[749],{8749:(t,n,e)=>{e.r(n),e.d(n,{default:()=>v});var o,p=e(9641),r=e(7059),u=e(2983),i=e(7681),s=e(2307),c=e(7211),a={code:'\nimport { Popup, Button } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Popup trigger="hover" content="This is a popup box">\n      <Button>Hover me</Button>\n    </Popup>\n  )\n}',namespace:c.Bb},l={code:'\nimport { Popup, Button } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Space>\n      <Popup trigger="hover" showArrow content="This is a popup box">\n        <Button variant="outline">Default child element to trigger</Button>\n      </Popup>\n      <Popup triggerElement={<Button>use triggerElement to trigger</Button>} showArrow content="This is a popup box"></Popup>\n    </Space>\n  );\n}',namespace:c.FE},m={code:'\nimport { Popup, Button } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Space>\n      <Popup trigger="hover" showArrow content="Hover me">\n        <Button>Hover me</Button>\n      </Popup>\n      <Popup trigger="click" showArrow content="Click me">\n        <Button onClick={() => console.log(\'Custom events\')}>Click me</Button>\n      </Popup>\n      <Popup trigger="context-menu" showArrow content="Right click">\n        <Button>Right click</Button>\n      </Popup>\n    </Space>\n  );\n}',namespace:c.N0},h={code:"\nimport { Popup, Button } from '@mx-design/web';\n\nfunction App() {\n  const styles = {\n    container: {\n      margin: '0 auto',\n      width: '500px',\n      height: '260px',\n      position: 'relative',\n    },\n    placementTop: {\n      position: 'absolute',\n      top: '0',\n      left: '42%',\n    },\n    placementTopLeft: {\n      position: 'absolute',\n      top: '0',\n      left: '70px',\n    },\n    placementTopRight: {\n      position: 'absolute',\n      top: '0',\n      right: '70px',\n    },\n    placementBottom: {\n      position: 'absolute',\n      bottom: '0',\n      left: '42%',\n    },\n    placementBottomLeft: {\n      position: 'absolute',\n      bottom: '0',\n      left: '70px',\n      width: '120px',\n    },\n    placementBottomRight: {\n      position: 'absolute',\n      bottom: '0',\n      right: '70px',\n    },\n    placementLeft: {\n      position: 'absolute',\n      left: '0',\n      top: '42%',\n    },\n    placementLeftTop: {\n      position: 'absolute',\n      left: '0',\n      top: '50px',\n    },\n    placementLeftBottom: {\n      position: 'absolute',\n      left: '0',\n      bottom: '50px',\n    },\n    placementRight: {\n      position: 'absolute',\n      right: '0',\n      top: '42%',\n    },\n    placementRightTop: {\n      position: 'absolute',\n      right: '0',\n      top: '50px',\n    },\n    placementRightBottom: {\n      position: 'absolute',\n      right: '0',\n      bottom: '50px',\n    },\n  };\n  return (\n    <div style={styles.container}>\n      <Popup content=\"这是Popup内容\" placement=\"top\" showArrow>\n        <Button style={styles.placementTop}>top</Button>\n      </Popup>\n      <Popup content=\"这是Popup内容 top-start\" placement=\"top-start\" showArrow>\n        <Button style={styles.placementTopLeft}>top-start</Button>\n      </Popup>\n      <Popup content=\"这是Popup内容 top-end\" placement=\"top-end\" showArrow>\n        <Button style={styles.placementTopRight}>top-end</Button>\n      </Popup>\n      <Popup content=\"这是Popup内容\" placement=\"bottom\" showArrow>\n        <Button style={styles.placementBottom}>bottom</Button>\n      </Popup>\n      <Popup content=\"这是Popup内容 bottom-start\" placement=\"bottom-start\" showArrow>\n        <Button style={styles.placementBottomLeft}>bottom-start</Button>\n      </Popup>\n      <Popup content=\"这是Popup内容 bottom-end\" placement=\"bottom-end\" showArrow>\n        <Button style={styles.placementBottomRight}>bottom-end</Button>\n      </Popup>\n      <Popup content=\"这是Popup内容\" placement=\"left\" showArrow>\n        <Button style={styles.placementLeft}>left</Button>\n      </Popup>\n      <Popup\n        content=\"这是Popup内容   left-start\"\n        placement=\"left-start\"\n        overlayStyle={{ width: '140px' }}\n        showArrow\n      >\n        <Button style={styles.placementLeftTop}>left-start</Button>\n      </Popup>\n      <Popup\n        content=\"这是Popup内容 left-end\"\n        placement=\"left-end\"\n        overlayStyle={{ width: '140px' }}\n        showArrow\n      >\n        <Button style={styles.placementLeftBottom}>left-end</Button>\n      </Popup>\n      <Popup content=\"这是Popup内容\" placement=\"right\" showArrow>\n        <Button style={styles.placementRight}>right</Button>\n      </Popup>\n      <Popup\n        content=\"这是Popup内容 right-start\"\n        placement=\"right-start\"\n        overlayStyle={{ width: '140px' }}\n        showArrow\n      >\n        <Button style={styles.placementRightTop}>right-start</Button>\n      </Popup>\n      <Popup\n        content=\"这是Popup内容 right-end\"\n        placement=\"right-end\"\n        overlayStyle={{ width: '140px' }}\n        showArrow\n      >\n        <Button style={styles.placementRightBottom}>right-end</Button>\n      </Popup>\n    </div>\n  );\n}",namespace:c.Ly},g={code:'\nimport { Popup, Button } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Space direction=\'vertical\'>\n      <Space>\n        <Popup\n          content="浮层拥有自定义类名，可以自定义浮层样式"\n          overlayClassName="custom-popup"\n          placement="bottom"\n        >\n          <Button variant="outline">自定义浮层类名（Custom overlay class name）</Button>\n        </Popup>\n        <Popup\n          content="浮层宽度是固定的，不会随内容变化而变化（Popup width is fixed）"\n          overlayInnerStyle={{ width: \'350px\', textAlign: \'center\' }}\n          placement="bottom"\n        >\n          <Button variant="outline">固定浮层宽度（Popup width is fixed）</Button>\n        </Popup>\n      </Space>\n      <Space>\n        <Popup\n          content="可以设置浮层最大宽度，当内容超出最大宽度时，文本内容才会换行"\n          overlayStyle={{ maxWidth: \'250px\' }}\n          placement="bottom"\n        >\n          <Button variant="outline">浮层最大宽度（Maximum width of popup）</Button>\n        </Popup>\n        <Popup\n          content="overlayInnerStyle 作为函数使用，可以让浮层内容和触发元素同宽"\n          overlayInnerStyle={(triggerElem) => ({ width: + triggerElem.offsetWidth + \'px\' })}\n          placement="bottom"\n        >\n          <Button variant="outline">浮层和触发元素同宽（Same width as the trigger element）</Button>\n        </Popup>\n      </Space>\n    </Space>\n  );\n}',namespace:c.pS},P={code:'\nimport { Popup, Button } from \'@mx-design/web\';\n\nfunction App() {\n  const [visible, setVisible] = React.useState(true);\n\n  return (\n    <Popup content="This is the popup content" trigger="context-menu" placement="right" visible={visible}>\n      <Button onClick={()=> setVisible(!visible)}>一直显示(Always show)</Button>\n    </Popup>\n  );\n}',namespace:c.fk},b={code:"\nimport { Popup, Button } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <Popup\n        trigger=\"click\"\n        content=\"通过id选择器选择父节点(Select parent node by id selector)\"\n        attach='#app'\n      >\n        <Button>点击查看id为app的元素(Click to view the element whose id is app)</Button>\n      </Popup>\n    </Space>\n  );\n}",namespace:c.rr},f={code:'\nimport { Popup, Button } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Popup trigger="hover" disabled showArrow content="This is the popup content">\n      <Button>Hover me</Button>\n    </Popup>\n  );\n}',namespace:c.x9},w={code:"\nimport { Popup, Button } from '@mx-design/web';\n\nfunction App() {\n  const [visible] = React.useState(true);\n  const [spanVisible, setVisible] = React.useState(false);\n  const [content, setContent] = React.useState('This is the popup content');\n  const btnClicksRef = React.useRef(0);\n\n  const toggleContent = () => {\n    btnClicksRef.current += 1;\n    const showMore = btnClicksRef.current % 2 !== 0;\n    setVisible(showMore);\n    setContent(`This is the popup content${showMore ? '，There are many, many, many, many....' : ''}`);\n  };\n\n  return (\n    <Popup content={content} trigger=\"context-menu\" placement=\"right\" visible={visible}>\n      <Button onClick={toggleContent}>Click to change content{spanVisible && <span>，click again</span>}</Button>\n    </Popup>\n  );\n}",namespace:c.m5},B=(o={},(0,p.Z)(o,a.namespace,a),(0,p.Z)(o,l.namespace,l),(0,p.Z)(o,m.namespace,m),(0,p.Z)(o,f.namespace,f),(0,p.Z)(o,h.namespace,h),(0,p.Z)(o,g.namespace,g),(0,p.Z)(o,P.namespace,P),(0,p.Z)(o,b.namespace,b),(0,p.Z)(o,w.namespace,w),o),y=e(1310);function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function x(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){(0,p.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}const v=function(){var t=(0,s.b)({namespace:c.tM}),n=(0,r.Z)(t,1)[0],e=(0,u.useMemo)((function(){return Object.keys(n).map((function(t){return x(x({key:t},n[t]),B[t])}))}),[n,B]),o=(0,u.useMemo)((function(){return e.map((function(t){return{title:t.title,href:"#".concat(t.key)}}))}),[e]);return u.createElement(i.Z,{titleList:o},e.map((function(t){return u.createElement(y.AN,t)})))}}}]);