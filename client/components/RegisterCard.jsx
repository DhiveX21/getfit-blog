import Link from "next/link";
import React from "react";

export default function RegisterCard() {
  return (
    <div className="register-card p-[10px] md:p-[30px]">
      <div
        className="register-card__wrapper relative  bg-cover bg-center bg-no-repeat px-[20px] flex flex-col justify-center items-center rounded-lg md:flex-row md:flex-nowrap"
        style={{ backgroundImage: `url('images/RegisterCardBackground.png')` }}
      >
        <div className="register-card__thumbnail  w-full p-[20px] md:w-1/2 flex justify-center">
          <picture className="p-[10px 10px 0px 10px] max-w-[50%]">
            <img src="/images/customer-services.png" alt="register card" />
          </picture>
        </div>
        <div className="register-card__content w-full text-center p-[20px] md:w-1/2 md:text-left ">
          <div className="register-card__content__title font-bold text-gray-600 text-[18px] leading-[20px] mb-[10px] md:text-[20px] md:leading-[22px] lg:text-[22px] lg:leading-[24px]">
            <h2>Daftar Treatment Sekarang...</h2>
          </div>
          <div className="register-card__content__desc text-gray-400 text-[14px] leading-[16px] mb-[10px] md:text-[18px] md:leading-[20px]  lg:text-[20px] lg:leading-[22px]">
            <p>
              Banyak orang sudah mendapatkan manfaatnya, Dapatkan Banyak Promo
              menarik serta Treatment yang baik sekarang juga.
            </p>
          </div>
          <div className="register-card__content__button ">
            <a
              href="https://patient.getfitwithphysio.com"
              target="_blank"
              rel="noopener"
            >
              <button className="bg-blue-400  px-[20px] py-[5px] rounded-lg text-white">
                Daftar Sekarang
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
