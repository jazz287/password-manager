import { SiteCard } from "./site_card";
import Custom_button from "../../components/custom_button";
import Heading_bar from "../../components/Heading_bar";
import { Container } from "../../components/container";
import Card from "../../components/card";

export default function Home() {
  return (
    <div>
      <Heading_bar title="Password Manager"/>
      <Container>
        <center>
          <Custom_button title="New Password"/>
        </center>
        <br />
        <br />
        <Card>
          <SiteCard />
          <SiteCard />
          <SiteCard />
          <SiteCard />
        </Card>
      </Container>
    </div>
  );
}
