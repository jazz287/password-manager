import { SiteCard } from "./site_card";
import Custom_button from "../../components/custom_button";
import Heading_bar from "../../components/Heading_bar";
import { Container } from "../../components/container";
import Card from "../../components/card";
import New_password from "../new_password/new_password";
import Divider from "../../components/divider";

interface PageProp {
  pageSetterFunction: Function;
  siteList?: string[];
}

export default function Home(props: PageProp) {
  const siteList = props.siteList ?? [];
  return (
    <div>
      <Heading_bar title="Password Manager" />
      <Container>
        <center>
          <Custom_button
            title="New Password"
            onClick={function () {
              props.pageSetterFunction(
                <New_password
                  pageSetterFunction={props.pageSetterFunction}
                  homeSiteList={siteList}
                />
              );
            }}
          />
        </center>
        <br />
        <br />
        <Card>
          {...siteList.map(function (site, idx) {
            return (
              <>
                <SiteCard siteName={site} />
                {idx !== siteList.length - 1 ? <Divider indent={50} /> : null}
              </>
            );
          })}
        </Card>
      </Container>
    </div>
  );
}
