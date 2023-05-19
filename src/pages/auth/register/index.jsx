import { useState } from "react";
import { Link } from "react-router-dom";

import { useStoreDispatch } from "../../../hooks";
import { actions as appAction } from "../../../store/slices/appSlice";

import S from "./index.module.css";
import Header from "../components/header/index.jsx";

const Register = () => {
  const dispatch = useStoreDispatch();

  const [peak, setPeak] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(appAction.login());
  };

  return (
    <div className={S.Register}>
      <Header />

      <section className={S.Register_Form}>
        <h3 className="text-xl">
          <Link to={"/login"} className="flex gap-1 items-center !text-[#212121]">
            <svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M166.5 424.5l-143.1-152c-4.375-4.625-6.562-10.56-6.562-16.5c0-5.938 2.188-11.88 6.562-16.5l143.1-152c9.125-9.625 24.31-10.03 33.93-.9375c9.688 9.125 10.03 24.38 .9375 33.94l-128.4 135.5l128.4 135.5c9.094 9.562 8.75 24.75-.9375 33.94C190.9 434.5 175.7 434.1 166.5 424.5z" />
            </svg>
            <span>Register</span>
          </Link>
        </h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="robotomb text-sm" htmlFor="full_name">
              Full Name
            </label>
            <input id="full_name" className="border-b py-1 mt-2" type="text" placeholder="Enter your Full Name." />
          </div>

          <div className="mb-3">
            <label className="robotomb text-sm" htmlFor="mobile_number">
              Mobile Number
            </label>

            <div className="flex gap-2">
              <input className="!w-10 shrink-0 border-b py-1 mt-2 text-center" type="text" disabled value={"+91"} />
              <input id="mobile_number" className="grow border-b py-1 mt-2" type="text" placeholder="Enter your Mobile No." />
            </div>

            <span className="block mt-1 text-xs text-[#424242]">OTP will be sent on this Mobile No. for verification.</span>
          </div>

          <div className="mb-3">
            <label className="robotomb text-sm" htmlFor="email_id">
              Email ID
            </label>

            <input id="email_id" className="border-b py-1 mt-2" type="text" placeholder="Enter your Email ID." />
          </div>

          <div className="mb-3">
            <label className="robotomb text-sm" htmlFor="password">
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                className="border-b py-1 mt-2 pr-6"
                type={peak ? "text" : "password"}
                placeholder="Enter your Password."
              />
              <button
                className="absolute top-1/2 -translate-y-1/2 right-0"
                type="button"
                aria-label="peak"
                onClick={() => setPeak((prev) => !prev)}
              >
                {peak ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM189.8 123.5L235.8 159.5C258.3 139.9 287.8 128 320 128C390.7 128 448 185.3 448 256C448 277.2 442.9 297.1 433.8 314.7L487.6 356.9C521.1 322.8 545.9 283.1 558.6 256C544.1 225.1 518.4 183.5 479.9 147.7C438.8 109.6 385.2 79.1 320 79.1C269.5 79.1 225.1 97.73 189.8 123.5L189.8 123.5zM394.9 284.2C398.2 275.4 400 265.9 400 255.1C400 211.8 364.2 175.1 320 175.1C319.3 175.1 318.7 176 317.1 176C319.3 181.1 320 186.5 320 191.1C320 202.2 317.6 211.8 313.4 220.3L394.9 284.2zM404.3 414.5L446.2 447.5C409.9 467.1 367.8 480 320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L120.8 191.2C102.1 214.5 89.76 237.6 81.45 255.1C95.02 286 121.6 328.5 160.1 364.3C201.2 402.4 254.8 432 320 432C350.7 432 378.8 425.4 404.3 414.5H404.3zM192 255.1C192 253.1 192.1 250.3 192.3 247.5L248.4 291.7C258.9 312.8 278.5 328.6 302 333.1L358.2 378.2C346.1 381.1 333.3 384 319.1 384C249.3 384 191.1 326.7 191.1 255.1H192z" />
                  </svg>
                )}
              </button>
            </div>

            <span className="block mt-1 text-xs text-[#424242]">
              Password must be at least 8 characters long with 1 Uppercase, 1 Lowercase & 1 Numeric character.
            </span>
          </div>

          <button className="button w-full bg-orange-500 text-white" type="submit">
            CONTINUE
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
