import Heading_bar from "../../components/Heading_bar";
import { Container } from "../../components/container";
import Custom_button from "../../components/custom_button";
import Home from "../home/home";
import "./new_password.css";

interface PageProp {
  pageSetterFunction: Function;
}

export default function New_password(props: PageProp) {
  return (
    <div>
      <Heading_bar title="New Password" />
      <Container>
        <div>
          Site:
          <input type="text" />
        </div>
        <div>
          Username:
          <input type="text" />
        </div>
        <div>
          Password:
          <input type="text"/>
          <Custom_button title="Generate Password" />
          <div className="strength-bg">
            <div className="strength-bar"></div>
          </div>
        </div>
        <Custom_button
          title="Cancel"
          onClick={function () {
            props.pageSetterFunction(
              <Home pageSetterFunction={props.pageSetterFunction} />
            );
          }}
        />
        <Custom_button
          title="Save"
          onClick={function () {
            props.pageSetterFunction(
              <Home pageSetterFunction={props.pageSetterFunction} />
            );
          }}
        />
      </Container>
    </div>
  );
}
