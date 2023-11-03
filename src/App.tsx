import { useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css'
import Home from "./pages/home/home";

export default function App() {
  const [showingPage, setShowingPage] = useState<JSX.Element>();

  useEffect(function () {
    setShowingPage(<Home pageSetterFunction={setShowingPage}/>);
  }, []);
  return showingPage;
}
