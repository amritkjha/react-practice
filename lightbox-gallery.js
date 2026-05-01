import React, { useEffect, useRef, useState } from 'react';
import { images } from '../images';

export default function Lightbox() {
  const [fullScreenActive, setFullScreenActive] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    const closeOutsideClick = (e) => {
      if(ref.current && !ref.current.contains(event.target)) {
        setFullScreenActive(null);
      }
    }
    document.addEventListener('mousedown', closeOutsideClick);
    return () => document.removeEventListener('mousedown', closeOutsideClick);
  }, [ref])
  const mainDivStyles = {
    position: 'relative'
  }
  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '3px'
  }
  const imgStyles = {
    margin: '3px',
    width: '136px',
    height: "224px"
  }
  const overlayStyles = {
    zIndex: '200',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0 0 0 / 50%)'
  }
  const fullImageStyles = {
    width: '336px',
    height: '624px'
  }
  return <div style={mainDivStyles}>
    {/* image grid */}
    <div style={gridContainerStyles}>
      {images.map((img, i) => {
        return (
          <img style={imgStyles} src={img} onClick={()=>setFullScreenActive(`${i}`)} />
        );
      })}
    </div>
    {/* full screen modal */}
    {fullScreenActive && <div style={overlayStyles}>
      <img style={fullImageStyles} src={images[fullScreenActive]} ref={ref} />
      {/* nav buttons */}
      <div ref={ref}>
        {images.map((img, i) => {
          return (
            <img src={img} width='36px' height="45px" onClick={()=>setFullScreenActive(`${i}`)} />
          );
        })}
      </div>
    </div>}
  </div>;
}
