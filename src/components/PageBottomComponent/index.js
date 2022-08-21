
import './index.less'
import { LoadingOutlined } from '@ant-design/icons';
export default function PageBottomComponent(porps){
  let isBottom = porps.isBottom || false;
  const item = () =>{
    if(isBottom){
      return <div>
        <LoadingOutlined />
         加载中。。。</div>
    }
    return <div>已经到底了！</div>
  }
  return (
    <div className="page-bottom">
      {
        item()
      }
    </div>
  )
}