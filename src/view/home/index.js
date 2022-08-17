import { useEffect, useState} from'react'
import { webGetListApi } from'../../api/system'
import { Col, Row } from 'antd';
import './index.less'
import Item from './components/Item'
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate()
  let [pageParam,setPageParam] = useState({
    keyword:null,
    pageIndex:1,
    pageSize:10,
  }) 
  let [dataList,setDataList] = useState([])

  useEffect(() => {
    webGetListApi(pageParam).then(res=>{
      console.log(res);
      if(res.code == 0){
        console.log(res.data);
        setDataList(res.data.list)
      }
      
    })
  
    return () => {
      
    }
  }, [])
  //跳转文章
  const onClickItem = (item)=>{
    navigate(`/article/${item.articleId}`);
  }
  
  return (
    <div className='contentList'>
      <Row justify="center">
        <Col lg={{span:16}} md={24} sm={24} xs={24} >
          {
            dataList.map((item,index)=>{
              return <Item item={item} key={index} onClickItem={onClickItem}/>
            })
          }
        </Col>
      </Row>
    </div>
  )
}

export default Home