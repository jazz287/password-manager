import { CaretRight, LogoGithub } from "@carbon/icons-react";

export const SiteCard = () => (
  <div
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      minHeight:"48px",
      alignItems: "center",
    }}
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
