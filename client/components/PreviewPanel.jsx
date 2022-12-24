import React from "react";

export default function PreviewPanel() {
  return (
    <div className="preview-panel bg-gradient-to-r from-[#77C6A6] to-[#ABE4D1] w-full p-[30px] text-white font-bold">
      <div className="preview-panel__wrapper  flex items-center justify-center text-center gap-[20px] flex-col md:flex-row">
        <div className="preview-panel__item flex flex-col gap-[7px] w-full">
          <h2 className="preview-panel__item__value">233.012</h2>
          <h4 className="preview-panel__item__title font-medium">Pembaca</h4>
        </div>
        <div className="preview-panel__item flex flex-col gap-[7px] w-full">
          <h2 className="preview-panel__item__value">233</h2>
          <h4 className="preview-panel__item__title font-medium">
            Dibagikan Sebanyak
          </h4>
        </div>
        <div className="preview-panel__item flex flex-col gap-[7px] w-full">
          <h2 className="preview-panel__item__value">4/5</h2>
          <h4 className="preview-panel__item__title font-medium">Rating</h4>
        </div>
      </div>
    </div>
  );
}
