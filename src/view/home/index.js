import { useEffect, useState} from'react'
import { webGetListApi } from'../../api/system'
import { Col, Row } from 'antd';
import './index.less'

function Home(){
  let [pageParam,setPageParam] = useState({
    keyword:null,
    pageIndex:1,
    pageSize:10,
  }) 

  useEffect(() => {
    webGetListApi(pageParam).then(res=>{
      console.log(res);
    })
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className='contentList'>
      <Row>
        <Col lg={{span:20,offset:2}} style={{backgroundColor:'#ccc'}}>
          
        </Col>
      </Row>
    </div>
  )
}

export default Home