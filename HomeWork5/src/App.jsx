import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
import "./Components/ThemeSwitcher/ThemeSwitcher.css";
import { useSelector } from "react-redux";
import { LoremIpsum } from 'react-lorem-ipsum';


function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div>
        <ThemeSwitcher />
        <h1 className={`${theme}`}><LoremIpsum p={1}/></h1>
    </div>
  );
}

export default App;