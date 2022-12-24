import Link from "next/link";
import React from "react";

export default function OtherArticle() {
  return (
    <div className="other-article bg-[#F6F7FB]">
      <div className="other-article__wrapper px-[30px] py-[30px] md:px-[100px] md:py-[80px]">
        <div className="other-article__title text-[#77C6A6] text-[32px] leading-[44px] font-bold text-center">
          <h2>
            Artikel <span className="text-[#555555] ">Terbaik</span>
          </h2>
        </div>
        <div className="other-article__subtitle text-[#555555] text-[14px] text-center mb-[40px]">
          <p>Kami memberikan artikel terbaik khusus untuk kamu</p>
        </div>
        <div className="other-article__option w-full mb-[30px]">
          <div className="other-article__option__wrapper flex flex-col gap-[20px] md:flex-row md:gap-[40px]">
            <div className="other-article__option__item bg-white p-[10px] rounded-lg md:p-[20px]">
              <div className="other-article__option__item__wrapper flex flex-col gap-[10px]">
                <div className="other-article__option__item__thumbnail">
                  <picture>
                    <img
                      className="rounded-lg"
                      src="/image 42.png"
                      alt="article related"
                    />
                  </picture>
                </div>
                <div className="other-article__option__item__category ">
                  <div className="other-article__option__item__category__badge bg-[#CADFF9] px-[10px] py-[2px] w-fit rounded">
                    <p className="text-[12px] w-fit font-semibold text-[#2D2D2D]">
                      Gaya Hidup
                    </p>
                  </div>
                </div>
                <div className="other-article__option__item__title">
                  <h3 className="text-[18px] w-fit font-semibold text-[#2D2D2D]">
                    Tips Sukses Memulai Usaha Barbershop berserta dengan
                    modalnya
                  </h3>
                </div>
                <div className="other-article__option__item__date">
                  <p className="text-[#818181] text-[14px]">
                    10 Okt · Bacaan 1 Menit
                  </p>
                </div>
              </div>
            </div>

            <div className="other-article__option__item bg-white p-[10px] rounded-lg md:p-[20px]">
              <div className="other-article__option__item__wrapper flex flex-col gap-[10px]">
                <div className="other-article__option__item__thumbnail">
                  <picture>
                    <img
                      className="rounded-lg"
                      src="/image 42.png"
                      alt="article related"
                    />
                  </picture>
                </div>
                <div className="other-article__option__item__category ">
                  <div className="other-article__option__item__category__badge bg-[#CADFF9] px-[10px] py-[2px] w-fit rounded">
                    <p className="text-[12px] w-fit font-semibold text-[#2D2D2D]">
                      Gaya Hidup
                    </p>
                  </div>
                </div>
                <div className="other-article__option__item__title">
                  <h3 className="text-[18px] w-fit font-semibold text-[#2D2D2D]">
                    Tips Sukses Memulai Usaha Barbershop berserta dengan
                    modalnya
                  </h3>
                </div>
                <div className="other-article__option__item__date">
                  <p className="text-[#818181] text-[14px]">
                    10 Okt · Bacaan 1 Menit
                  </p>
                </div>
              </div>
            </div>

            <div className="other-article__option__item bg-white p-[10px] rounded-lg md:p-[20px]">
              <div className="other-article__option__item__wrapper flex flex-col gap-[10px]">
                <div className="other-article__option__item__thumbnail">
                  <picture>
                    <img
                      className="rounded-lg"
                      src="/image 42.png"
                      alt="article related"
                    />
                  </picture>
                </div>
                <div className="other-article__option__item__category ">
                  <div className="other-article__option__item__category__badge bg-[#CADFF9] px-[10px] py-[2px] w-fit rounded">
                    <p className="text-[12px] w-fit font-semibold text-[#2D2D2D]">
                      Gaya Hidup
                    </p>
                  </div>
                </div>
                <div className="other-article__option__item__title">
                  <h3 className="text-[18px] w-fit font-semibold text-[#2D2D2D]">
                    Tips Sukses Memulai Usaha Barbershop berserta dengan
                    modalnya
                  </h3>
                </div>
                <div className="other-article__option__item__date">
                  <p className="text-[#818181] text-[14px]">
                    10 Okt · Bacaan 1 Menit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="other-article__link flex justify-center text-center text-[#3fc28d]">
          <Link href={"#"}>Lihat Selengkapnya &raquo;</Link>
        </div>
      </div>
    </div>
  );
}
