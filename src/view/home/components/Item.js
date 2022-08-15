import './css/item.less'
import { Divider } from 'antd';

function Item(props){
  let {item} = props
  return(
    <div className="home-item">
      <Divider orientation="left" plain orientationMargin="0" className={'item-time'}>
        {item.creationTime}
      </Divider>
      {/* <div className="item-time">2022-07-07</div> */}
      <div className="item-title">
        <div>{item.title}</div>
        <div>随笔</div>
      </div>

    </div>
  )
}

export default Item