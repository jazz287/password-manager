import Heading_bar from "../home/Heading_bar";
import Custom_button from "../home/custom_button";
import "./new_password.css";
export default function New_password() {
  return (
    <div>
      <Heading_bar />
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
        <input type="text" />
        <Custom_button title="Generate Password" />
        <div className="strength-bg">
          <div className="strength-bar"></div>
        </div>
      </div>
      <Custom_button title="Cancel" />
      <Custom_button title="Save" />
    </div>
  );
}
