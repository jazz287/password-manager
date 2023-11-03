import { SiteCard } from "./site_card";
import Custom_button from "../../components/custom_button";
import Heading_bar from "../../components/Heading_bar";
import { Container } from "../../components/container";
import Card from "../../components/card";
import New_password from "../new_password/new_password";

interface PageProp {
  pageSetterFunction: Function;
}

export default function Home(props: PageProp) {
  return (
    <div>
      <Heading_bar title="Password Manager" />
      <Container>
        <center>
          <Custom_button
            title="New Password"
            onClick={function () {
              props.pageSetterFunction(<New_password pageSetterFunction={props.pageSetterFunction}/>);
            }}
          />
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
