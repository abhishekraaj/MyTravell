import NavBar from "../../Header/NavBar";
import Cerasoel from "../../Component/Cerasoel";
import { useState } from "react";
import Card from "../../Component/Card/Card";
import Footer from "../../Footer/Footer";

function Home() {
  const [click, setClick] = useState(0)
  const [active, setActive] = useState(0)

  console.log(click, "homepage")
  return (
    <div>
      <NavBar />
      <Cerasoel setClick={setClick} click={click} />
      <Card click={click} />
      <Footer />
    </div>
  );
}

export default Home;
