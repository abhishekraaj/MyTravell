import React from "react" ;
import style from "./RoutingCard.module.css"
import {SiYourtraveldottv} from 'react-icons/si'
import {Link} from 'react-router-dom'

export default function RoutingCard(){

    const imageCard  = JSON.parse(localStorage.getItem("imagecard")) || {};
    console.log(imageCard, "image card routing")

    return(
        <div className={style.main}>
        <div className={style.logo}>
        <b><Link to="/">my travell</Link></b>
        <SiYourtraveldottv />
    </div>
    
    <div>
            <h1>{imageCard.locationTitle} </h1>
            <h5>{imageCard.listingName} locationTitle</h5> 
            <p> Rating : {imageCard.avgRating}</p>
            <p>{imageCard.listingObjType} </p>
            <p>{imageCard.roomType} </p>
            <p>{imageCard.spaceType} </p>
           
            </div>
        <div className={style.img}>

            {imageCard.images.map((e)=>
             <img width="350px" height="280px" src = {e} alt="pp" />
             
            )}
            <b>{imageCard.accessibilityLabel}Label</b> 
            <div  className={style.footer}>
            <p>{imageCard.bathrooms} Bathrooms</p>
            <p>{imageCard.bedrooms} Beds</p>
            <p>{imageCard.beds} beds</p>
            <p>{imageCard.adults} Adults</p>
            </div>
          
            
        </div>
        </div>
    )
}