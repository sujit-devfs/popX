import "./signup.css";
import { useNavigate } from 'react-router-dom'


const Signup = () => {
const NavigateTo = useNavigate()
const createAccount = () => NavigateTo('/account')

  return (
    <div className="signup-main">
      <h3>Create your PopX account</h3>
      <form>
        <fieldset>
          <legend>
            Full Name
            <span className="required">*</span>
          </legend>
          <input type="text" value="Marry Doe"/>
        </fieldset>
        <fieldset>
          <legend>
            Phone Number
            <span className="required">*</span>
          </legend>
          <input type="text" value="Marry Doe"/>
        </fieldset>
        <fieldset>
          <legend>
            Email Address
            <span className="required">*</span>
          </legend>
          <input type="text" value="Marry Doe"/>
        </fieldset>
        <fieldset>
          <legend>
            Password
            <span className="required">*</span>
          </legend>
          <input type="text" value="Marry Doe"/>
        </fieldset>
        <fieldset>
          <legend>Company name</legend>
          <input type="text" value="Marry Doe"/>
        </fieldset>

        <label>
          Are you an Agency?<span className="required">*</span>
        </label>
        <div className="radio">
          <input type="radio" id="yes" name="agree" value="yes" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="agree" value="no" />
          <label htmlFor="no">No</label>
        </div>
        <div className="signup-btn">
          <button className="signup-button" onClick={createAccount}>Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
