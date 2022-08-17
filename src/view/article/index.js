import MarkdownPreview from '@uiw/react-markdown-preview';
import { useEffect, useState} from'react'
import { webGetArticle } from'../../api/system'
import { Col, Row } from 'antd';
import './index.less'
import { useParams } from "react-router-dom";

function Article(porps){
  let params = useParams()
  console.log(params);
  let [data,setData] = useState({
    contents:null
  })

  useEffect(() => {
    webGetArticle(params).then(res=>{
      console.log(res);
      if(res.code === 0){
        setData(res.data)
      }
    })

    return () => {
      
    }
  }, [])
  
  return (
    <div className='contentList' >
      <Row justify="center">
        <Col lg={{span:16}} md={24} sm={24} xs={24} >
          文章页面
          <div data-color-mode="light" className="article">
            <MarkdownPreview source={data.contents} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Article