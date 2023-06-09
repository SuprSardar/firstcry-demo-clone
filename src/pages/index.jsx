import { Fragment, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { Lazy } from "../utilities";
import { useStoreSelector } from "../hooks";

import Login from "./auth/login";
import Register from "./auth/register";

const pages = [
  { Link: "", View: Lazy(import("./home")) },
  { Link: "cart", View: Lazy(import("./cart")) },
  { Link: "product/:productId", View: Lazy(import("./product")) },
];

const Pages = () => {
  const authenticated = useStoreSelector((state) => state.app.authenticated);

  return (
    <Fragment>
      {!authenticated ? (
        <Routes>
          <Route path="*" element={<Navigate to={""} />} />
          <Route path="" element={<Navigate to={"/login"} />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      ) : (
        <Fragment>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="*" element={<Navigate to={""} />} />

              {pages.map(({ Link, View }, index) => (
                <Route key={index} path={Link} element={<View />} />
              ))}
            </Routes>
          </Suspense>
        </Fragment>
      )}
    </Fragment>
  );
};

const Fallback = () => (
  <>
    Loading
    {/* <div className={S.Loading}>
      <div className="h-12 w-12 animate-bounce">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M160 416c0-80.6 49.6-149.6 120-178v18 32h32H447.9L566.1 400.9l9.9 9.5V424v56 32H512V480 437.7l-96-91.6V448h32 32v64H448 416 160C71.6 512 0 440.4 0 352V32 0H32 192h32V32 160v32H192 128 96V128h32 32V64H64V352c0 53 43 96 96 96V416zm96-288c0-35.3 28.6-64 64-64c15.7-37.6 52.8-64 96-64s80.4 26.4 96 64c35.3 0 64 28.7 64 64c0 32.6-24.4 59.6-56 63.5V256H416 344 312V228.2 191.5c-31.6-3.9-56-30.9-56-63.5zM384 64c-26.5 0-48 21.5-48 48c0 23.8 17.3 43.5 40 47.3V208h80V159.3c22.7-3.8 40-23.6 40-47.3c0-26.5-21.5-48-48-48H384zm0 64c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm80-16c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z" />
        </svg>
      </div>
    </div> */}
  </>
);

export default Pages;
