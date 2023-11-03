import Heading_bar from "../../components/Heading_bar";
import { Container } from "../../components/container";
import Home from "../home/home";
import "./new_password.css";
import { Progress, Input, Form, Button } from "semantic-ui-react";

interface PageProp {
  pageSetterFunction: Function;
}

export default function New_password(props: PageProp) {
  return (
    <div>
      <Heading_bar title="New Password" />
      <Container>
        <Form>
          <Form.Field>
            <label>Site Name</label>
            <Input placeholder="mysite.com" label="https://" />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <Input placeholder="someone@example.com" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              type={"password"}
              placeholder="**secret**"
              action="Generate Password"
              actionPosition="left"
            />

            <Progress percent={0} indicating />
          </Form.Field>
          <Button
            onClick={function () {
              props.pageSetterFunction(
                <Home pageSetterFunction={props.pageSetterFunction} />
              );
            }}
          >
            Cancel
          </Button>
          <Button
            primary={true}
            onClick={function () {
              props.pageSetterFunction(
                <Home pageSetterFunction={props.pageSetterFunction} />
              );
            }}
          >
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
}
