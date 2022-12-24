import Link from "next/link";

export default function PostCard({
  title = "title",
  category = "category",
  thumbnail = "/images/RegisterCardThumbnail.png",
  date = "10 Okt",
  link = "#",
}) {
  return (
    <Link href={link} className={"card"}>
      <div className="post-card  mb-[30px] w-1/3 cursor-pointer">
        <div className="post-card__wrapper flex flex-col gap-[20px] md:flex-row md:gap-[40px]">
          <div className="post-card__item bg-white border-2 border-slate-200 hover:bg-slate-100 duration-300 p-[10px] rounded-lg md:p-[20px]">
            <div className="post-card__item__wrapper flex flex-col gap-[10px]">
              <div className="post-card__item__thumbnail">
                <picture>
                  <img
                    className="rounded-lg"
                    src={thumbnail}
                    alt="article related"
                  />
                </picture>
              </div>
              <div className="post-card__item__category ">
                <div className="post-card__item__category__badge bg-[#CADFF9] px-[10px] py-[2px] w-fit rounded">
                  <p className="text-[12px] w-fit font-semibold text-[#2D2D2D]">
                    {category}
                  </p>
                </div>
              </div>
              <div className="post-card__item__title">
                <h3 className="text-[18px] w-fit font-semibold text-[#2D2D2D]">
                  {title}
                </h3>
              </div>
              <div className="post-card__item__date">
                <p className="text-[#818181] text-[14px]">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
