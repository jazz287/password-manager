import { Search } from "@carbon/icons-react";
import "../components/heading_bar.css";

interface CustomHeading{
  title:string;
}

export default function Heading_bar(props : CustomHeading) {
  return (
    <div
    className="heading-bar"
    >
      <span>{props.title} </span>
      <Search height={30} width={30}/>
    </div>
  );
}
