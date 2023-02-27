import React from "react"
import style from './ParticularPage.module.css'
import { Link } from "react-router-dom"
import Footer from "../../Footer/Footer";


export default function ParticulaPage() {


  const data = JSON.parse(localStorage.getItem("particalData"))
  console.log(data, "recoil data ")
  return (
    <div className={style.main1}>
      <h3><Link to="/">my travell</Link></h3>

      <div className={style.main}>
        <div className={style.details}>

          <h3>{data.locationTitle}</h3>
          <p> <b>Address :</b> {data.publicAddress}</p>
          <p> <b>City :</b>    {data.localizedCityName}</p>
          <p> <b>Price :</b>   {data.accessibilityLabel}</p>
          <p> <b>Adults :</b>  {data.adults}</p>
          <p> <b>Bathrooms : </b>      {data.bathrooms}</p>
          <p> <b>Bed :  </b>           {data.beds}</p>
          <p> <b> City :</b>           {data.city}</p>
          <p> <b>List Name :</b>       {data.listingName}</p>
          <p> <b>Guest :</b>           {data.listingGuestName}</p>
          <p> <b>Distance :</b>        {data.localizedDistanceText}</p>
        </div>

        <div className={style.container}>
          {data.images.map(x => <img src={x} width="230rem" height="180rem" />)}
        </div>

      </div>
      <Footer />
    </div>

  )
}