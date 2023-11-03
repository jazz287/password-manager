import { Search } from "@carbon/icons-react";
import "../components/heading_bar.css";

export default function Heading_bar() {
  return (
    <div
    className="heading-bar"
    >
      <span>Page Heading </span>
      <Search height={30} width={30}/>
    </div>
  );
}
