import './css/item.less'
import { Divider } from 'antd';

function Item(props){
  let {item,onClickItem} = props
  
  return(
    <div className="home-item" onClick={()=>onClickItem(item)}>
      <Divider orientation="left" plain orientationMargin="0" className={'item-time'}>
        {item.creationTime}
      </Divider>
      <div className="item-title">
        <div>{item.title}</div>
        <div>随笔</div>
      </div>

    </div>
  )
}

export default Item