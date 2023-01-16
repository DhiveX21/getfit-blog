import Link from "next/link";
import { rawDateFormater } from "../helpers/date";

export default function PostCard({
  title = "title",
  category = ["category"],
  thumbnail = "/images/RegisterCardThumbnail.png",
  date = "10 Okt",
  link = "#",
}) {
  return (
    <div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33%-10px)] flex justify-center hover:scale-[103%] duration-300">
      <Link href={link} className={"card"}>
        <div className="post-card w-full mb-[30px] h-full cursor-pointer  ">
          <div className="post-card__wrapper h-full flex flex-col gap-[20px] md:flex-row md:gap-[40px]">
            <div className="post-card__item w-full bg-white border-2 border-slate-200 hover:bg-slate-100 duration-300 p-[10px] rounded-lg md:p-[20px]">
              <div className="post-card__item__wrapper flex flex-col gap-[10px] justify-between h-full">
                <div className="flex flex-col gap-[10px]">
                  <div className="post-card__item__thumbnail">
                    <picture>
                      <img
                        className="rounded-lg h-[200px] w-full object-cover"
                        src={thumbnail}
                        alt="article related"
                      />
                    </picture>
                  </div>
                  <div className="post-card__item__category ">
                    {category.map((item) => {
                      return (
                        <div className="post-card__item__category__badge bg-[#CADFF9] px-[10px] py-[2px] w-fit rounded">
                          <p className="text-[12px] w-fit font-semibold text-[#2D2D2D]">
                            {item.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="post-card__item__title">
                    <h3 className="text-[18px] w-fit font-semibold text-[#2D2D2D] line-clamp-2">
                      {title}
                    </h3>
                  </div>
                </div>
                <div className="post-card__item__date">
                  <p className="text-[#818181] text-[14px]">
                    {rawDateFormater(date) + " WIB"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
