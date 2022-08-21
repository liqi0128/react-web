import MarkdownPreview from '@uiw/react-markdown-preview';
import { useEffect, useState} from'react'
import { webGetArticle } from'../../api/system'
import { Col, Row } from 'antd';
import './index.less'
import { useParams } from "react-router-dom";
import loading from '../../utils/loading'
import { dateFormat } from '../../utils/tool'
import { Divider } from 'antd';
import { TagOutlined } from '@ant-design/icons';

function Article(porps){
  let params = useParams()
  console.log(params);
  let [data,setData] = useState({
    contents:null
  })

  useEffect(() => {
    loading.loadingOpen()
    webGetArticle(params).then(res=>{
      loading.loadingClose()
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
          <div className='article-hed'>
            <div><h1>{data.title}</h1></div>
            <Divider orientation="left" plain orientationMargin="0" className={'item-time'}>
              <div className="article-creationTime">
                <div>{dateFormat(data.creationTime)}</div>
                <div><TagOutlined />测试</div>
              </div>
            </Divider>
          </div>
          <div data-color-mode="light" className="article">
            <MarkdownPreview source={data.contents} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Article