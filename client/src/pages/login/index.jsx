import "./index.css";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
// import custom helper functions to validate user input
import { checkPassword } from "../../utils/loginValidate";
import { reqLogin } from "../../api";
import { Navigate , useNavigate } from "react-router-dom";
import memoryUtils from '../../utils/memoryUtils'

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Here: add code to communicate with backend
    try {
      console.log("username: " + userName);
      console.log("password: " + password);

      const result = await reqLogin(userName, password);
      console.log("请求成功", result);

      if (result.status === 0) {
        // 提示登陆成功
        console.log(" test 登陆成功");
        // clear form input
        setUserName("");
        setPassword("");
        // 保存user
        const user = result.data;
        memoryUtils.user = user; // 保存在内存中
        storageUtils.saveUser(user);
        // go to home page
        navigate('/')
      }
    } catch (err) {
      console.error(err);
    }

    setUserName("");
    setPassword("");
  };

  // 如果用户已经登陆, 自动跳转到管理界面  to <home/>
  const user = memoryUtils.user;
  if (user && user._id) {
    return <Navigate to="/" />;
  }

  return (
    <div className="content">
      <img className="icon" src={logo} alt="icon" />
      <h1 className="title">Title</h1>
      <div>
        <form className="form-container" onSubmit={handleFormSubmit}>
          <label htmlFor="userName" className="userNameLabel">
            username
          </label>
          <input
            className="input"
            id="userName"
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="your username here"
          />
          <label htmlFor="password" className="passwordLabel">
            password
          </label>
          <input
            className="input"
            id="password"
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="your password here"
          />
          <button onClick={handleFormSubmit} className="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
