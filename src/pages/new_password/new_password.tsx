import { useState } from "react";
import Heading_bar from "../../components/Heading_bar";
import { Container } from "../../components/container";
import Home from "../home/home";
import "./new_password.css";
import { Progress, Input, Form, Button } from "semantic-ui-react";
import RuleCard from "./rule_card";

interface PageProp {
  pageSetterFunction: Function;
  homeSiteList: string[];
}

export default function New_password(props: PageProp) {
  const [rules, setRules] = useState({
    upperAndLowerCase: false,
    specialChars: false,
    numbers: false,
    atLeastEightChars: false,
  });
  const checkRules = (value: string) => {
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
    let inlcudesUppercase = false;
    let includesLowercase = false;
    for (let char of value) {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        inlcudesUppercase = true;
      }
      if (code >= 97 && code <= 122) {
        includesLowercase = true;
      }
    }
    if (inlcudesUppercase && includesLowercase) {
      newRules.upperAndLowerCase = true;
    } else {
      newRules.upperAndLowerCase = false;
    }

    setRules(newRules);
  };

  const saveForm = () => {
    const siteInput =
      document.querySelector<HTMLInputElement>(".siteInput input")!;
    const usernameInput = document.querySelector<HTMLInputElement>(
      ".usernameInput input"
    )!;
    const passwordInput = document.querySelector<HTMLInputElement>(
      ".passwordInput input"
    )!;
    props.pageSetterFunction(
      <Home
        pageSetterFunction={props.pageSetterFunction}
        siteList={[...props.homeSiteList, siteInput.value]}
      />
    );
  };
  let percent = 0;
  Object.values(rules).map((r) => (r ? (percent += 25) : null));
  return (
    <div>
      <Heading_bar title="New Password" />
      <Container>
        <Form>
          <Form.Field>
            <label>Site Name</label>
            <Input
              placeholder="mysite.com"
              label="https://"
              className="siteInput"
            />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <Input
              placeholder="someone@example.com"
              className="usernameInput"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              className="passwordInput"
              type={"password"}
              placeholder="**secret**"
              action={
                <Button
                  onClick={() => {
                    let passwordInput =
                      document.querySelector<HTMLInputElement>(
                        ".passwordInput input"
                      )!;
                    let randomPassword = "";
                    for (let i = 0; i < 8; i++) {
                      if (i < 2) {
                        randomPassword += String.fromCharCode(
                          Math.floor(Math.random() * (122 - 97 + 1)) + 97
                        );
                      } else if (i < 4) {
                        randomPassword += Math.floor(Math.random() * 9);
                      } else if (i < 6) {
                        let specialChars = ".!_@-";
                        randomPassword +=
                          specialChars[
                            Math.floor(Math.random() * specialChars.length)
                          ];
                      } else {
                        randomPassword += String.fromCharCode(
                          Math.floor(Math.random() * (90 - 65 + 1)) + 65
                        );
                      }
                    }
                    passwordInput.value = randomPassword;
                    checkRules(randomPassword);
                  }}
                >
                  Generate Password
                </Button>
              }
              actionPosition="left"
              onChange={function (_, b) {
                let value = b.value;

                checkRules(value);
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
          <Button primary={true} disabled={percent < 60} onClick={saveForm}>
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
