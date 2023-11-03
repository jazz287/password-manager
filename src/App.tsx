import { useEffect, useState } from "react";
import Home from "./pages/home/home";
import New_password from "./pages/new_password/new_password";

export default function App() {
  const [showingPage, setShowingPage] = useState<JSX.Element>();

  useEffect(function () {
    setShowingPage(<Home />);
  }, []);
  return showingPage;
}
