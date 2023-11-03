import "./new_password.css";
export default function New_password() {
  return (
    <div>
      <h1>Add New Password</h1>
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
        <button>Generate Password</button>
        <div className="strength-bg">
          <div className="strength-bar"></div>
        </div>
      </div>
      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
