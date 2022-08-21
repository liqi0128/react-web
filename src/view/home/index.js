import { useEffect, useState, useRef} from'react'
import { webGetListApi } from'../../api/system'
import { Col, Row } from 'antd';
import './index.less'
import Item from './components/Item'
import { useNavigate } from "react-router-dom";
import loading from '../../utils/loading'
import { throttle } from '../../utils/tool'
import PageBottomComponent from '../../components/PageBottomComponent'

function Home(){
  const navigate = useNavigate()
  const listRef = useRef(null)
  let [pageParam,setPageParam] = useState({
    keyword:null,
    pageIndex:1,
    pageSize:10,
  }) 
  let [dataList,setDataList] = useState([])
  let [total,setTotal] = useState(0)
  let [flag,setFlag] = useState(true)

  useEffect(() => {
    // loading.loadingOpen()
    // getList().then(res=>loading.loadingClose())
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [flag,total])
  useEffect(() => {getList()},[pageParam])

  const getList = ()=>{
    webGetListApi(pageParam).then(res=>{
      setFlag(true)
      if(res.code == 0){
        setDataList([
          ...dataList,
          ...res.data.list
        ])
        setTotal(res.data.total)
      }
    })
  }
  //跳转文章
  const onClickItem = (item)=>{
    navigate(`/article/${item.articleId}`);
  }
  function handleScroll(){
    let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    let wClientHeight = window.innerHeight

    let clientHeight = listRef.current.clientHeight
    let totalHeight = wClientHeight + scrollTop

    if(totalHeight >= (clientHeight+40)){
      console.log('到底了');
      if(flag){
        throttle(()=>{
          setFlag(false)
          if(pageParam.pageIndex*pageParam.pageSize < total){
            setPageParam(param =>{
              return {
                ...param,
                pageIndex:param.pageIndex+1
              }
            })
          }
        })
      }
    }
  }
  return (
    <div className='contentList' ref={listRef}>
      <Row justify="center">
        <Col lg={{span:16}} md={24} sm={24} xs={24} >
          {
            dataList.map((item,index)=>{
              return <Item item={item} key={index} onClickItem={onClickItem}/>
            })
          }
          {
            (total > 0) && (<PageBottomComponent isBottom={pageParam.pageIndex*pageParam.pageSize < total}/>)
          }
        </Col>
      </Row>
    </div>
  )
}

export default Home