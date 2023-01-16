import React from "react";

export default function PreviewPanel() {
  return (
    <div className="preview-panel bg-gradient-to-b from-[#99d9c2] to-[#ABE4D1] w-full p-[30px] text-white font-bold">
      <div className="preview-panel__wrapper  flex items-center justify-center text-center flex-row">
        <div className="preview-panel__item flex flex-col gap-[7px] w-1/3 text-[12px] md:w-full md:text-[18px]">
          <h2 className="preview-panel__item__value">233.012</h2>
          <h4 className="preview-panel__item__title font-medium">Pembaca</h4>
        </div>
        <div className="preview-panel__item flex flex-col gap-[7px] w-1/3 text-[12px] md:w-full md:text-[18px]">
          <h2 className="preview-panel__item__value">233</h2>
          <h4 className="preview-panel__item__title font-medium">
            Dibagikan Sebanyak
          </h4>
        </div>
        <div className="preview-panel__item flex flex-col gap-[7px] w-1/3 text-[12px] md:w-full md:text-[18px]">
          <h2 className="preview-panel__item__value">4/5</h2>
          <h4 className="preview-panel__item__title font-medium">Rating</h4>
        </div>
      </div>
    </div>
  );
}
