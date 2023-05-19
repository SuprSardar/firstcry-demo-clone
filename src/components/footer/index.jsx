import { Fragment } from "react";
import { Link } from "react-router-dom";

import S from "./index.module.css";
import Sprite from "../../assets/images/sprite-footer1.1.png";
import Poster from "../../assets/images/megamenu_1.jpg";

const Footer = () => {
  return (
    <footer className={S.Footer}>
      <section className={S.Top}>
        <div className="max-w-7xl px-4 py-3 mx-auto">
          <section className="flex flex-wrap justify-center">
            <div className="w-52 grid place-items-center px-4">
              <i className="h-9 w-9" style={{ background: `url(${Sprite})`, backgroundPosition: "-151px 346px" }} />
              <span className="mt-2 text-center">
                2 Lakhs + <br /> Unique Products
              </span>
            </div>
            <div className="w-52 grid place-items-center px-4">
              <i className="h-9 w-9" style={{ background: `url(${Sprite})`, backgroundPosition: "-151px 346px" }} />
              <span className="mt-2 text-center">
                2 Lakhs + <br /> Unique Products
              </span>
            </div>
            <div className="w-52 grid place-items-center px-4">
              <i className="h-9 w-9" style={{ background: `url(${Sprite})`, backgroundPosition: "-151px 346px" }} />
              <span className="mt-2 text-center">
                2 Lakhs + <br /> Unique Products
              </span>
            </div>
            <div className="w-52 grid place-items-center px-4">
              <i className="h-9 w-9" style={{ background: `url(${Sprite})`, backgroundPosition: "-151px 346px" }} />
              <span className="mt-2 text-center">
                2 Lakhs + <br /> Unique Products
              </span>
            </div>
            <div className="w-52 grid place-items-center px-4">
              <i className="h-9 w-9" style={{ background: `url(${Sprite})`, backgroundPosition: "-151px 346px" }} />
              <span className="mt-2 text-center">
                2 Lakhs + <br /> Unique Products
              </span>
            </div>
          </section>
        </div>
      </section>

      <section className={S.Middle}>
        <div className="max-w-7xl px-4 py-3 mx-auto border-b border-[#bfd4d5]">
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => {
              return (
                <div key={i} className="space-y-4 shrink-0">
                  {[...Array(2)].map((_, j) => {
                    return (
                      <ul key={`${i}${j}`} className="w-60 text-[#757575] hover:[&_a]:text-[#424242]">
                        <Fragment>
                          <li>
                            <Link to={"/"}>
                              <h3 className="text-base text-[#424242] border-b border-[#bfd4d5] mb-2 pb-2">SHOP BY CATEGORY 1</h3>
                            </Link>
                          </li>
                          {[...Array(9)].map((_, k) => {
                            return (
                              <li key={`${i}${j}${k}`}>
                                <Link to={"/"}>
                                  <span className="block">Sets & Suits</span>
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
      </section>

      <section className={S.Bottom}>
        <div className="max-w-7xl px-4 py-3 mx-auto space-y-5 text-xs">
          <div className="space-y-3">
            <h5>FirstCry India ~ Online Store for Baby & Kids Products</h5>
            <p>
              Explore kids and baby products galore at FirstCry.com, the Big Store for Little Ones. We at FirstCry.com empathize with you as
              a mother who always aspires to bestow her newborn, infant, baby or kid with the best things even for their smallest needs.
              That is why, Mommy Knows Best. From breastfeeding to bathing essentials, right furniture to myriad baby care products, a
              mother needs them all for her lil one. This inspires us to offer convenient & hassle-free online shopping not just for babies
              & kids but for moms-to-be & new moms as well.
            </p>
            <p>
              With 2 Lakh Baby & Kids Products, 2 Million Happy Customers, and 2 Thousand+ top-notch national and international brands like
              Babyhug, Chicco, Graco, BSA, Johnson & Johnson, Huggies, Pampers, Medela, Pigeon, Mothercare, Fisher-Price, FunSkool, Lego,
              Disney, Barbie and more you can look forward to an unparalleled shopping experience with us. Shop for baby & kids products
              online ranging across diapering, feeding & nursing, skin & health care, baby & kids toys, newborn & infant clothing, baby
              clothes, kids wear, footwear, fashion accessories, baby gear, nursery, kids furniture, gifts, party supplies, books & CDs,
              school supplies and more at great discounts.
            </p>
            <p>With the FirstCry mobile app, now you can shop on the go! Download the FirstCry Android and the iOS app and Voila!</p>
          </div>
          <div className="space-y-3">
            <h5>FirstCry India ~ Online Store for Baby & Kids Products</h5>
            <p>
              Explore kids and baby products galore at FirstCry.com, the Big Store for Little Ones. We at FirstCry.com empathize with you as
              a mother who always aspires to bestow her newborn, infant, baby or kid with the best things even for their smallest needs.
              That is why, Mommy Knows Best. From breastfeeding to bathing essentials, right furniture to myriad baby care products, a
              mother needs them all for her lil one. This inspires us to offer convenient & hassle-free online shopping not just for babies
              & kids but for moms-to-be & new moms as well.
            </p>
            <p>
              With 2 Lakh Baby & Kids Products, 2 Million Happy Customers, and 2 Thousand+ top-notch national and international brands like
              Babyhug, Chicco, Graco, BSA, Johnson & Johnson, Huggies, Pampers, Medela, Pigeon, Mothercare, Fisher-Price, FunSkool, Lego,
              Disney, Barbie and more you can look forward to an unparalleled shopping experience with us. Shop for baby & kids products
              online ranging across diapering, feeding & nursing, skin & health care, baby & kids toys, newborn & infant clothing, baby
              clothes, kids wear, footwear, fashion accessories, baby gear, nursery, kids furniture, gifts, party supplies, books & CDs,
              school supplies and more at great discounts.
            </p>
            <p>With the FirstCry mobile app, now you can shop on the go! Download the FirstCry Android and the iOS app and Voila!</p>
          </div>
          <div className="space-y-3">
            <h5>FirstCry India ~ Online Store for Baby & Kids Products</h5>
            <p>
              Explore kids and baby products galore at FirstCry.com, the Big Store for Little Ones. We at FirstCry.com empathize with you as
              a mother who always aspires to bestow her newborn, infant, baby or kid with the best things even for their smallest needs.
              That is why, Mommy Knows Best. From breastfeeding to bathing essentials, right furniture to myriad baby care products, a
              mother needs them all for her lil one. This inspires us to offer convenient & hassle-free online shopping not just for babies
              & kids but for moms-to-be & new moms as well.
            </p>
            <p>
              With 2 Lakh Baby & Kids Products, 2 Million Happy Customers, and 2 Thousand+ top-notch national and international brands like
              Babyhug, Chicco, Graco, BSA, Johnson & Johnson, Huggies, Pampers, Medela, Pigeon, Mothercare, Fisher-Price, FunSkool, Lego,
              Disney, Barbie and more you can look forward to an unparalleled shopping experience with us. Shop for baby & kids products
              online ranging across diapering, feeding & nursing, skin & health care, baby & kids toys, newborn & infant clothing, baby
              clothes, kids wear, footwear, fashion accessories, baby gear, nursery, kids furniture, gifts, party supplies, books & CDs,
              school supplies and more at great discounts.
            </p>
            <p>With the FirstCry mobile app, now you can shop on the go! Download the FirstCry Android and the iOS app and Voila!</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
