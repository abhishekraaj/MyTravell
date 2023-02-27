import React from "react"
import { Link } from "react-router-dom"
import { FaRupeeSign } from 'react-icons/fa';
import style from "./YourHomePage.module.css"
import Footer from "../../Footer/Footer";

export default function YourHomePage() {
  return (
    <div>
      <h4><Link to="/">my travell</Link></h4>
      <b>  Ready to My Travell it. </b>
      <div className={style.top}>
        <div className={style.mid}>
          <h3>my travell it...</h3>
          <h3>You could earn</h3>
          <b><FaRupeeSign />51,009</b>
          <p> Learn how we estimated your earnings</p>
        </div>
        <img className={style.topimg} src="https://c4.wallpaperflare.com/wallpaper/896/47/591/map-world-map-continents-wallpaper-preview.jpg" />
      </div>

      <div >
        < img className={style.bottomimg} src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq" />
      </div>
      <div className={style.fotter}>
        <span>
          <h3>support</h3>
          <li>Help centre</li>
          <li>Air Cover</li>
          <li>Supporting  people with disibilities</li>
          <li>Cancellation options</li>
          <li>Report a neighbour hood Cooncern</li>
        </span>
        <span>
          <h3>Community</h3>
          <li>Disater relief housting</li>
          <li>Comabating discrimination</li>
        </span>
        <span>
          <h3>Hosting</h3>
          <li>Your home</li>
          <li>Cover for Hosts</li>
          <li>Explore hosting resources</li>
          <li>visit our Commnity Forum</li>
          <li>How to host responsibility</li>
        </span>
        <span>
          <h3>News Room </h3>
          <li>Learn About new Features </li>
          <li>Letter from our Founders</li>
          <li>Explore hosting resources</li>
          <li>Carrers</li>
          <li>Investors</li>
        </span>

      </div>
      <Footer />
    </div>
  )
}