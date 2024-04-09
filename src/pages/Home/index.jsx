import "./home.css";
import { useNavigate } from 'react-router-dom'


const Home = () => {

const NavigateTo = useNavigate();
const handleSignUp = () => NavigateTo('/signup')
const handleSignIn = () => NavigateTo("/signin")

  return (
    <div className="home-main">
      <h3>Welcome to PopX</h3>
      <p>Lorem ipsum dolor amet.</p>
      <p>Lorem ipsum dolor amet.</p>
      <div className="signup-btn"> 
        <button className="home-btn-signup" onClick={handleSignUp}>Create Account</button>
      </div>
      <div className="signin-btn">
        <button className="home-btn-signin" onClick={handleSignIn}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default Home;
