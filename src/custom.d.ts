// custom.d.ts

declare module 'swiper/react' {
  import SwiperCore, { SwiperOptions, Navigation, Pagination, SwiperModule } from 'swiper';

  export interface SwiperProps extends SwiperOptions {
    onSwiper?: (swiper: SwiperCore) => void;
    children?: React.ReactNode;
    noSwiping?: boolean;
    spaceBetween:number;
    slidesPerView:number;
    noSwipingClass?: string;
    noSwipingSelector?: string;
    loopAdditionalSlides:number;
    onSlideChange?: () => void;
    modules:[]
    modules?: (SwiperModule | typeof Navigation | typeof Pagination)[];
    loop:boolean;
    navigation?: boolean;
    pagination?: {
      clickable?: boolean;
      el?: string;
    };
  }

  export const Swiper: React.FC<SwiperProps>;
  export const SwiperSlide: React.FC<{ children?: React.ReactNode }>;
}

