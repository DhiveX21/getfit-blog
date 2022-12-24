import Link from "next/link";
import React from "react";

export default function RegisterCard() {
  return (
    <div className="register-card px-[100px] py-[50px]">
      <div
        className="register-card__wrapper relative min-h-[300px] h-[33vw] bg-cover bg-center bg-no-repeat px-[50px] flex items-center rounded-[50px]"
        style={{ backgroundImage: `url('images/RegisterCardBackground.png')` }}
      >
        <div className="register-card__thumbnail  w-1/2">
          <picture className="p-[10px 10px 0px 10px] max-w-[80%]">
            <img src="/images/RegisterCardThumbnail.png" alt="register card" />
          </picture>
        </div>
        <div className="register-card__content w-1/2 ">
          <div className="register-card__content__title">
            <h2>Daftar Treatment Sekarang...</h2>
          </div>
          <div className="register-card__content__desc">
            <p>
              Banyak orang sudah mendapatkan manfaatnya, Dapatkan Banyak Promo
              menarik serta Treatment yang baik sekarang juga.
            </p>
          </div>
          <div className="register-card__content__button">
            <button>Daftar Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
}
