import { useEffect, useState } from "react";
import Home from "./pages/home/home";

export default function App() {
  const [showingPage, setShowingPage] = useState<JSX.Element>();

  useEffect(function () {
    setShowingPage(<Home pageSetterFunction={setShowingPage}/>);
  }, []);
  return showingPage;
}
