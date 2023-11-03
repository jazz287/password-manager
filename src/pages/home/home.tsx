import { SiteCard } from "./site_card";
import Custom_button from "../../components/custom_button";
import Heading_bar from "../../components/Heading_bar";
import { Container } from "../../components/container";
import Card from "../../components/card";
import New_password from "../new_password/new_password";
import Divider from "../../components/divider";

interface PageProp {
  pageSetterFunction: Function;
}

const DUMMY_SITES = [
  "google.com",
  "github.com",
  "facebook.com",
  "youtube.com",
  "myupes.upes.ac.in",
];

export default function Home(props: PageProp) {
  return (
    <div>
      <Heading_bar title="Password Manager" />
      <Container>
        <center>
          <Custom_button
            title="New Password"
            onClick={function () {
              props.pageSetterFunction(
                <New_password pageSetterFunction={props.pageSetterFunction} />
              );
            }}
          />
        </center>
        <br />
        <br />
        <Card>
          {...DUMMY_SITES.map(function (site, idx) {
            return (
              <>
                <SiteCard siteName={site}/>
                {idx !== DUMMY_SITES.length - 1 ? <Divider indent={50}/> : null}
              </>
            );
          })}
        </Card>
      </Container>
    </div>
  );
}
