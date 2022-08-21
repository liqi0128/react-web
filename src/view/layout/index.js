import HeaderComponent from "../../components/HeaderComponent"
import {Outlet} from'react-router-dom'
import './index.less'
import { useEffect, useState } from 'react'
import { RocketOutlined } from '@ant-design/icons';

export default function Layout(){
  const [backColor,setBackColor] = useState('header-light') //dark
  const [visibleBackTopBtn, setVisibleBackTopBtn] = useState(false) //

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[visibleBackTopBtn])
  
  function handleScroll(){
    let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    if(scrollTop > 60){
      setBackColor('header-dark')
    }else{
      setBackColor('header-light')
    }

    if (scrollTop > 200) {
      setVisibleBackTopBtn(true)
    } else {
      setVisibleBackTopBtn(false)
    }

  }

  const backToTopHandle = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });

  }



  return(
    <div className="layout">
      <HeaderComponent backColor={backColor}/>
      <div className="layout-main">
        <Outlet></Outlet>
        {
          visibleBackTopBtn && <div className="backToTop" onClick={backToTopHandle}><RocketOutlined /></div>
        }
      </div>
    </div>
  )
}