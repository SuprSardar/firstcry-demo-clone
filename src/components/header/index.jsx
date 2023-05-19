import { Fragment } from "react";
import { Link } from "react-router-dom";

import { useStoreDispatch } from "../../hooks";
import { actions as appAction } from "../../store/slices/appSlice";

import S from "./index.module.css";
import AppLogo from "../../assets/images/fc_logo.png";
import MegaMenu from "./components/megamenu";
import Poster from "../../assets/images/megamenu_1.jpg";

const Header = () => {
  const dispatch = useStoreDispatch();

  const handleSubmit = (e) => e.preventDefault();

  return (
    <header className={S.Header}>
      <section className={S.Top}>
        <div className="flex gap-4 max-w-7xl px-4 mx-auto">
          <div className="logo">
            <Link to={"/"}>
              <img className="h-auto w-auto" src={AppLogo} alt="logo" height={41} width={131} />
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input className="input pr-9 !w-72" type="text" placeholder="Search for a Category, Brand or Product" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2" type="submit" aria-label="search">
                <svg className="text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z" />
                </svg>
              </button>
            </div>
          </form>

          <nav className="ml-auto">
            <ul className="flex h-full items-center">
              <li className="px-1.5 border-r">
                <Link to={""} className="contents group">
                  <svg className="inline h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 240C218.5 240 240 218.5 240 192C240 165.5 218.5 144 192 144C165.5 144 144 165.5 144 192C144 218.5 165.5 240 192 240zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 32C103.6 32 32 103.6 32 192C32 207.6 37.43 229 48.56 255.4C59.47 281.3 74.8 309.4 92.14 337.5C126.2 392.8 166.6 445.7 192 477.6C217.4 445.7 257.8 392.8 291.9 337.5C309.2 309.4 324.5 281.3 335.4 255.4C346.6 229 352 207.6 352 192C352 103.6 280.4 32 192 32z" />
                  </svg>
                  <span className="truncate group-hover:underline">Select location</span>
                </Link>
              </li>
              <li className="px-1.5 border-r">
                <Link to={""} className="contents group">
                  <span className="truncate group-hover:underline">Stores & Preschools</span>
                </Link>
              </li>
              <li className="px-1.5 border-r">
                <Link to={""} className="contents group">
                  <span className="truncate group-hover:underline">Support</span>
                </Link>
              </li>
              <li className="px-1.5 border-r">
                <Link to={""} className="contents group">
                  <span className="truncate group-hover:underline">Track Order</span>
                </Link>
              </li>
              <li className="px-1.5 border-r">
                <Link to={""} className="contents group">
                  <span className="truncate group-hover:underline">FirstCry Parenting</span>
                </Link>
              </li>
              <li className="px-1.5 border-r">
                <button className="contents group" type="button" onClick={() => dispatch(appAction.logout())}>
                  <span className="truncate group-hover:underline">Logout</span>
                </button>
              </li>
              <li className="px-1.5 border-r">
                <Link to={""} className="contents group">
                  <svg className="inline h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L255.1 96zM255.1 141.3L221.4 106.6C196.1 81.31 160 69.77 124.7 75.66C71.21 84.58 31.1 130.9 31.1 185.1V190.9C31.1 223.6 45.55 254.7 69.42 277L250.1 445.7C251.7 447.2 253.8 448 255.1 448C258.2 448 260.3 447.2 261.9 445.7L442.6 277C466.4 254.7 480 223.6 480 190.9V185.1C480 130.9 440.8 84.58 387.3 75.66C351.1 69.77 315.9 81.31 290.6 106.6L255.1 141.3z" />
                  </svg>
                  <span className="truncate group-hover:underline">Shortlist</span>
                </Link>
              </li>
              <li className="px-1.5">
                <Link to={"/cart"} className="contents group">
                  <svg className="inline h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16H53.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288H466.5c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0H16zm90.1 64H539.5L497.6 231.8C494 246 481.2 256 466.5 256H145.4L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" />
                  </svg>
                  <span className="truncate group-hover:underline">Cart</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className={S.Bottom}>
        <div className="max-w-7xl px-4 mx-auto">
          <nav className="pt-1">
            <ul className="flex items-center">
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">ALL CATEGORIES</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 1</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">BOY FASHION</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 2</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">GIRL FASHION</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 3</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">FOOTWARE</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 4</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">TOYS</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 5</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">DIAPERING</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 6</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">GEAR</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 7</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">FEEDING</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 8</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">BATH</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 9</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">NURSERY</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 10</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">MOMS</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 11</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">HEALTH</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 12</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
              <li className="group">
                <span className="block robotomb px-2 pt-3 pb-4 hover:bg-white">BOUTIQUES</span>

                <MegaMenu>
                  <div className="max-w-7xl px-4 py-3 mx-auto">
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, i) => {
                        return (
                          <div key={i} className="space-y-4 shrink-0">
                            {[...Array(2)].map((_, j) => {
                              return (
                                <ul key={`${i}${j}`} className="w-60 border-b pb-4 text-[#757575] hover:[&_a]:text-[#424242]">
                                  <Fragment>
                                    <li>
                                      <Link to={`/product/1`}>
                                        <h3 className="text-base text-[#424242]">SHOP BY CATEGORY 13</h3>
                                      </Link>
                                    </li>
                                    {[...Array(9)].map((_, k) => {
                                      return (
                                        <li key={`${i}${j}${k}`}>
                                          <Link to={`/product/1`}>
                                            <span className="robotomb block">
                                              Sets & Suits <span className="text-red-500">NEW</span>
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </Fragment>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}

                      <div className="grow">
                        <img className="h-auto" src={Poster} alt="poster" />
                      </div>
                    </div>
                  </div>
                </MegaMenu>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
