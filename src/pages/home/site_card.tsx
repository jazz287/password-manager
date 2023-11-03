import { CaretRight, LogoGithub } from "@carbon/icons-react";
import "./site_card.css";

export const SiteCard = () => (
  <div
    className="site-card"
  >
    <div>
      <LogoGithub style={{
        marginRight : "20px",
        marginLeft : "20px"
      }}/>
      htttps://github.com/jazz287
    </div>
    <CaretRight style={{
      marginRight : "20px",
    }}/>
  </div>
);
