import React,{useState} from "react";
import Style from "./Cerasoel.module.css";
import Carousel from "better-react-carousel";
import { category } from "../Data/category";
import { useNavigate,NavLink } from "react-router-dom";
import { BsFilterLeft } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';


export default function Cerasoel({ setClick }) {
  const [showDialog , setShowDialog] = useState(false)

  const nav = useNavigate();

  function handleClick(e) {
    if(!e){
      setClick(0)
    }else{

      setClick(e);
    }
  }

  function handleButtonClick(){
    if(showDialog===false){
    setShowDialog(true) 
    }else{
      setShowDialog(false)
    }
  }

  function hanldeFilter(){
    category.data.sort(function (a,b) {
      let priceA = a.price
      let priceB = b.price
      return priceA - priceB  //////q
    })

    
  }


  return (
    
    <div  className={Style.container}  >
    <div className={Style.main}>
    {showDialog ? <div className={Style.dialog}>
          
      <ImCross style={{padding:"2rem"}} onClick={handleButtonClick}/> 
      <h3 style={{paddingLeft:"20rem" ,textDecoration : "underline"}}>Filters</h3>
      <div className={Style.input}>
        <b>Price Range</b>
        
           <button onClick={hanldeFilter}>Click...!</button>

      </div>
      <div className={Style.property}>
     
      </div>
      <div>
      
      </div>
      
      
      </div> : "" }


    <Carousel cols={10} rows={1} gap={0.5} loop className={Style.carousel}>
      {category.data.map((e,i) => (
        <Carousel.Item key={i}>
          <div onClick={() => handleClick(e)} className={Style.logo}>
          

            <img src={e.image} className={Style.img} alt="piiygy" />
      
            <p>{e.title}</p>
          </div>
        </Carousel.Item>
      ))}
     
    </Carousel>

    </div>
   
    <button onClick={handleButtonClick} className={Style.btn}>FILTER <BsFilterLeft/></button>
    </div>
    
  );
}
