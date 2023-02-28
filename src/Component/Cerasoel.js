import React from "react";
import Style from "./Cerasoel.module.css";
import Carousel from "better-react-carousel";
import { category } from "../Data/category";
import { useNavigate, NavLink } from "react-router-dom";



export default function Cerasoel({ setClick, click }) {
  const nav = useNavigate();

  function handleClick(e) {
    if (!e) {
      setClick(0)
    } else {

      setClick(e);
    }
  }
  return (

    <div className={Style.container}  >
      <div className={Style.main}>
        <Carousel cols={10} rows={1} gap={0.5} loop className={Style.carousel}>
          {category.data.map((e, i) => (

            <Carousel.Item key={i} className={Style.carousel1} >
              {console.log(e.title, click.title, "click tittle")}
              <div onClick={() => handleClick(e)} className={`${Style.logo}  ${click.title === e.title ? Style.live : ""}`}>


                <img src={e.image} className={Style.img} alt="piiygy" />

                <p>{e.title}</p>
              </div>
            </Carousel.Item>
          ))}

        </Carousel>

      </div>


    </div>

  );
}
