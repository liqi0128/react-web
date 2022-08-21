import './index.less'
import { 
  GithubOutlined,
  MenuOutlined,
  RiseOutlined,
  HomeOutlined
 } from '@ant-design/icons';

export default function HeaderComponent(props){
  let {backColor} = props
  return(
    <div className={["headerComponent",backColor].join(' ')}>
      <div className="header-l">
        <div>
          <GithubOutlined />
        </div>
      </div>
      <div className="header-r">
        <div>
          <MenuOutlined />
          分类
        </div>
        <div>
          <RiseOutlined />
          成长
        </div>
        <div>
          <HomeOutlined />
          个人中心
        </div>
      </div>
    </div>
  )
}