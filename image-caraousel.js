import React from 'react';

export default function ImageCarousel() {
  const images = [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3'
  ];

  const [active, setActive] = React.useState(0);

  const handlePrevImage = () => {
    setActive(prev=>prev==0?images.length-1:prev-1);
  }
  const handleNextImage = () => {
    setActive(prev=>prev==images.length-1?0:prev+1);
  }

  return (
    <div>
      {<img src={images[active]} alt={active} />}
      <div>
        <button onClick={handlePrevImage}>Prev</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
}
