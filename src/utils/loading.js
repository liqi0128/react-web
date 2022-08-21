import { createRoot } from 'react-dom/client';
import { Spin } from 'antd';
//loading加载
function loadingOpen(){
  let dom = document.createElement('div')
  dom.setAttribute('id', 'loading')
  document.body.appendChild(dom)
  const root = createRoot(dom);
  root.render(<Spin tip="加载中..." size="large"/>);
}
//loading关闭
function loadingClose(){
  document.body.removeChild(document.getElementById('loading'))
}

export default{
  loadingOpen,
  loadingClose
}