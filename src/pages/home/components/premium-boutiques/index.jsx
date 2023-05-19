import S from "./index.module.css";
import Boutique_1 from "../../../../assets/images/premium-boutique_1.webp";
import { Link } from "react-router-dom";

const PremiumBoutiques = () => {
  return (
    <section className={S.PremiumBoutiques}>
      <div className="max-w-7xl px-4 py-5 mx-auto space-y-5">
        <h2 className="robotomb text-2xl text-center">PREMIUM BOUTIQUES</h2>

        <section className="grid gap-4 grid-cols-3">
          {[...Array(12)].map((_, index) => {
            return (
              <Link key={index} to={`/product/${index}`} className="contents">
                <article className={S.Boutique_Card}>
                  <img className="h-auto" src={Boutique_1} alt="" />

                  <div className="p-4">
                    <h4 className="robotomb text-base">Babies Day Out | Up to 24M</h4>
                    <p>Onesies, Rompers, Tops, Tees & more</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>

        <button className="button py-4 bg-white w-full hover:shadow-xl transition-shadow">View All Boutiques</button>
      </div>
    </section>
  );
};

export default PremiumBoutiques;
