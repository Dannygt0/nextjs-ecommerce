"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useState, useEffect } from "react";
import "swiper/css";
import Image from "next/image";

import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector } from "@/redux/store";

const PreviewSliderModal = () => {
  const { closePreviewModal, isModalPreviewOpen } = usePreviewSlider();
  const data = useAppSelector((state) => state.productDetailsReducer.value);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!swiperInstance) return;
    swiperInstance.slidePrev();
  }, [swiperInstance]);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!swiperInstance) return;
    swiperInstance.slideNext();
  }, [swiperInstance]);

  const images = data?.imgs?.previews || [];

  useEffect(() => {
    if (isModalPreviewOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isModalPreviewOpen]);

  if (!isModalPreviewOpen || images.length === 0) return null;

  return (
    <div 
      className="modal-content fixed inset-0 z-[999999] flex justify-center items-center w-screen h-screen border-none rounded-none max-w-none p-0"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onMouseDown={(e) => e.stopPropagation()} 
      onClick={closePreviewModal} 
    >
      
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 sm:left-6 lg:left-10 z-[9999999] p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
            onClick={handlePrev}
            aria-label="Anterior"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className="absolute right-2 sm:right-6 lg:right-10 z-[9999999] p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
            onClick={handleNext}
            aria-label="Siguiente"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}

      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={1}
        spaceBetween={0}
        loop={images.length > 1}
        observer={true}
        observeParents={true}
        className="w-full h-full flex justify-center items-center"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center w-full h-full">
            <div className="w-full h-full flex justify-center items-center p-4 sm:p-12">
              <Image
                src={imgSrc || ""}
                alt={`Zoom de producto ${index + 1}`}
                width={1920}
                height={1080}
                className="object-contain w-auto h-auto max-w-full max-h-full drop-shadow-2xl cursor-default"
                priority={index === 0}
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PreviewSliderModal;