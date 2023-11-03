import { CaretRight } from "@carbon/icons-react";
import "./site_card.css";

interface SiteCardProps{
  siteName : string;
}

export const SiteCard = (props : SiteCardProps) => (
  <div
    className="site-card"
  >
    <div>
      <img src={`https://www.google.com/s2/favicons?domain=${props.siteName}&sz=128`} style={{
        marginRight : "20px",
        marginLeft : "20px",
        width: "20px",
        height: "20px",
        verticalAlign:"middle",
      }}/>
      {props.siteName}
    </div>
    <CaretRight style={{
      marginRight : "20px",
    }}/>
  </div>
);
