import { Link } from "react-router-dom";

import { useStoreDispatch } from "../../../hooks";
import { actions as appAction } from "../../../store/slices/appSlice";

import S from "./index.module.css";
import Header from "../components/header/index.jsx";
import FacebookLogo from "../../../assets/images/login-signup-facebook.png";
import GoogleLogo from "../../../assets/images/login-signup-google.png";

const Login = () => {
  const dispatch = useStoreDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(appAction.login());
  };

  return (
    <div className={S.Login}>
      <Header />

      <section className={S.Login_Form}>
        <h3 className="text-xl">Login / Register</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="robotomb text-sm" htmlFor="email_or_mobile">
              Email ID/Mobile No.
            </label>
            <input id="email_or_mobile" className="border-b py-1 mt-2" type="text" placeholder="Enter your Email ID or Mobile No." />
          </div>

          <button className="button w-full bg-orange-500 text-white" type="submit">
            CONTINUE
          </button>

          <div className="relative text-center ">
            <div className="absolute h-px w-full bg-gray-200 left-0 top-1/2 -translate-y-px" />
            <span className="relative bg-white z-[1] px-4">OR</span>
          </div>

          <div className="space-y-3">
            <button className="button w-full border-gray-200 text-left" type="button">
              <img className="inline ml-16 mr-4 h-[22px] w-[22px]" src={FacebookLogo} alt="" />
              <span>FACEBOOK</span>
            </button>

            <button className="button w-full border-gray-200 text-left" type="button">
              <img className="inline ml-16 mr-4 h-[22px] w-[22px]" src={GoogleLogo} alt="" />
              <span>GOOGLE</span>
            </button>
          </div>

          <p className="text-center">
            New to FirstCry ? <Link to="/register">Register Here</Link>
          </p>

          <hr />

          <p>
            By continuing, you agree to Firstcry&apos;s <Link to={"#"}>Conditions of Use</Link> and <Link to={"#"}>Privacy Notice</Link>.
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
