import "./signin.css";
import { useNavigate} from 'react-router-dom';


const Signin = () => {

  const navigateTo = useNavigate();
  const handleClick = () => navigateTo('/account');

  return (
    <div className="signin-main">
      <h3>Signin to your PopX account</h3>
      <p>Lorem ipsum dolor amet.</p>
      <p>Lorem ipsum dolor amet.</p>
      <form>
        <fieldset>
          <legend>
            Email Address
          </legend>
          <input type="email" readOnly placeholder="Enter email address" />
        </fieldset>
        <fieldset>
          <legend>
            Password
          </legend>
          <input type="password" readOnly placeholder="Enter password" />
        </fieldset>
        <div className="signin-btn">
          <button className="signin" onClick={handleClick}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
