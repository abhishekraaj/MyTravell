import NavBar from "../../Header/NavBar";
import Cerasoel from "../../Component/Cerasoel";
import { useState } from "react";
import Card from "../../Component/Card/Card";

function Home() {
  const [ click , setClick] = useState(0)
  const [ active , setActive] = useState(0)
  console.log(click,"homepage")
  return (
    <div>
      <NavBar />
      <Cerasoel setClick={setClick}/>
      <Card click={click}/>
    </div>
  );
}

export default Home;
