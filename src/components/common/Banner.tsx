import Image from 'next/image';
import React from 'react';
import bannerImage from '../../../public/assets/hero/banner.png';

export default function Banner() {
  return (
    <div>
      <Image src={bannerImage}
      alt='banner'
      width={1480}
      height={371} />
    </div>
  )
}
