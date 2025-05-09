import "./index.css";
import { useState } from "react";

// import my custom helper functions to validate user input
import { checkPassword } from "../../utils/loginValidate";

function Admin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const currentEl = e.target;
    const inputType = currentEl.name;
    const inputValue = currentEl.value;

    if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = () => {
    e.preventDefault();

    // Here: missing code to communicate with backend

    setUserName("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="your user name"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="your password here"
        />
      </form>
    </div>
  );
}

export default Admin;
