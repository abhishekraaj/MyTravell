import "./App.css";
import Home from "./Pages/HomePage/Home";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </div>
  );
}

export default App;
