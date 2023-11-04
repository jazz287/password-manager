import { createRef, useState } from "react";
import Heading_bar from "../../components/Heading_bar";
import { Container } from "../../components/container";
import Home from "../home/home";
import "./new_password.css";
import { Progress, Input, Form, Button } from "semantic-ui-react";
import RuleCard from "./rule_card";

interface PageProp {
  pageSetterFunction: Function;
}

export default function New_password(props: PageProp) {
  const [rules, setRules] = useState({
    upperAndLowerCase: false,
    specialChars: false,
    numbers: false,
    atLeastEightChars: false,
  });
  let percent = 0;
  Object.values(rules).map((r) => (r ? (percent += 25) : null));
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
              onChange={function (_, b) {
                let value = b.value;
                let newRules = { ...rules };
                if (value.length >= 8) {
                  newRules.atLeastEightChars = true;
                } else {
                  newRules.atLeastEightChars = false;
                }
                if (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g.test(value)) {
                  newRules.specialChars = true;
                } else {
                  newRules.specialChars = false;
                }
                if (/\d/.test(value)) {
                  newRules.numbers = true;
                } else {
                  newRules.numbers = false;
                }
                if (
                  /\b(?=[a-z]+[A-Z]+|[A-Z]+[a-z]+)[a-zA-Z]{8,20}\b/gm.test(
                    value
                  )
                ) {
                  newRules.upperAndLowerCase = true;
                } else {
                  newRules.upperAndLowerCase = false;
                }

                setRules(newRules);
              }}
            />
            <Progress percent={percent} indicating />
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
            disabled={percent < 60}
            onClick={function () {
              props.pageSetterFunction(
                <Home pageSetterFunction={props.pageSetterFunction} />
              );
            }}
          >
            Save
          </Button>
        </Form>
        <br />
        <br />
        <h4>Password Strength</h4>
        <br />
        <RuleCard
          title="Includes Both Upper and Lower Case"
          isDone={rules.upperAndLowerCase}
        />
        <RuleCard title="Has Special Characters" isDone={rules.specialChars} />
        <RuleCard
          title="Includes Alphanumeric Characters"
          isDone={rules.numbers}
        />
        <RuleCard
          title="Atleast 8 characters long"
          isDone={rules.atLeastEightChars}
        />
      </Container>
    </div>
  );
}
