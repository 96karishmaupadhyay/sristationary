import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css' 
// Import images from the src/assets folder
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
export const HeroCarousel = () => {
    return (
      <CCarousel controls indicators >
        <CCarouselItem>
          <CImage className="d-block w-100 h-400"  style={{ height: '400px' }} src={img1} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100"  style={{ height: '400px' }} src={img2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100"  style={{ height: '400px' }}  src={img3} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    )
  }