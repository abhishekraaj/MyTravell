import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { amazingViews } from "../../Data/Sub-Category/amazingViews";
import { beachFront } from "../../Data/Sub-Category/beachFront";
import { cabin } from "../../Data/Sub-Category/cabin";
import { camping } from "../../Data/Sub-Category/camping";
import { lakeFront } from "../../Data/Sub-Category/lakeFront";
import { mansion } from "../../Data/Sub-Category/mansion";
import { omg } from "../../Data/Sub-Category/omg";
import { treeHouse } from "../../Data/Sub-Category/treeHouse";
import { windMills } from "../../Data/Sub-Category/windMills";
import Carousel from "better-react-carousel";
import Style from "./Card.module.css";
import { tinyHome } from "../../Data/Sub-Category/tinyHome";
import { island } from "../../Data/Sub-Category/island";
import { countryside } from "../../Data/Sub-Category/counrtyside";
import { design } from "../../Data/Sub-Category/design";
import { luxe } from "../../Data/Sub-Category/luxe";
import { castles } from "../../Data/Sub-Category/castles";
import { containers } from "../../Data/Sub-Category/containers";
import { barns } from "../../Data/Sub-Category/barns";
import { boats } from "../../Data/Sub-Category/boats";
import { offthegrid } from "../../Data/Sub-Category/offthegrid";
import { farms } from "../../Data/Sub-Category/farms";
import { vineyard } from "../../Data/Sub-Category/vineyard";
import { earthHome } from "../../Data/Sub-Category/earthHome";
import { nationalPark } from "../../Data/Sub-Category/nationalPark";
import { privateRooms } from "../../Data/Sub-Category/privateRooms";
import { aframes } from "../../Data/Sub-Category/aframes";
import { houseBoats } from "../../Data/Sub-Category/houseBoats";
import { creativeSpaces } from "../../Data/Sub-Category/creativeSpaces";
import { tropical } from "../../Data/Sub-Category/tropical";
import { bedBreakfast } from "../../Data/Sub-Category/bedBreakfast";
import { iconicCities } from "../../Data/Sub-Category/iconicCities";
import { skiing } from "../../Data/Sub-Category/skiing";
import { chefKitchen } from "../../Data/Sub-Category/chefKitchen";


export default function Card({ click, setActive }) {

  let subCategorey = [
    ...cabin,
    ...amazingViews,
    ...beachFront,
    ...camping,
    ...lakeFront,
    ...mansion,
    ...omg,
    ...treeHouse,
    ...windMills,
    ...tinyHome,
    ...island,
    ...countryside,
    ...design,
    ...luxe,
    ...castles,
    ...containers,
    ...barns,
    ...boats,
    ...offthegrid,
    ...farms,
    ...vineyard,
    ...earthHome,
    ...nationalPark,
    ...privateRooms,
    ...aframes,
    ...houseBoats,
    ...creativeSpaces,
    ...tropical,
    ...bedBreakfast,
    ...iconicCities,
    ...skiing,
    ...chefKitchen,

  ];
  let findIndex = subCategorey.findIndex(x => x.id === click.id)
  const [index, setIndex] = useState(0)


  const [list, setList] = useState(subCategorey[index].data)
  const nav = useNavigate()
  useEffect(() => {
    if (findIndex === -1) {
      setIndex(0)
    } else {
      setIndex(subCategorey.findIndex(x => x.id === click.id))
    }
    setList(subCategorey[index].data)

  }, [findIndex])
  console.log(findIndex, "index find")

  function handlePriceLow() {
    console.log(list[0].price.split("").slice(1).join(""))
    list.sort((a, b) => {
      return a.price.split("").slice(1).join("") - b.price.split("").slice(1).join("")
    })
    setList([...list])

  }
  function handlePriceHigh() {
    console.log(list[0].price.split("").slice(1).join(""))
    list.sort((a, b) => {
      return b.price.split("").slice(1).join("") - a.price.split("").slice(1).join("")
    })
    setList([...list])
  }

  function handleRedirect(e) {
    // setMyData(e)
    // console.log(MyData)

    localStorage.setItem("particalData", JSON.stringify(e))
    nav("/particularPage")
  }




  return (
    <>

      <div className={Style.main}>
        <div className={Style.btn}>
          <button onClick={handlePriceLow}>Filter By Price Low to High</button>
          <button onClick={handlePriceHigh}>Filter By  Price High to Low</button>

        </div>

        {list.map((x, i) => (
          <div key={i} className={Style.cera} >
            <Carousel style={{ width: "50px" }} cols={2} rows={1} gap={0} loop>

              {x?.images.map((x, i) => (

                <Carousel.Item key={i}>
                  <img width="350px" height="280px" src={x} alt="pp" />
                </Carousel.Item>


              ))}

            </Carousel>
            <div >
              <b onClick={() => handleRedirect(x)}>{x?.title}</b>
              <p>{x?.localizedDistanceText}</p>
              <p>Rupees : {x?.accessibilityLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
