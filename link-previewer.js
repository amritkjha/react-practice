import * as React from 'react';
import './style.css';

export default function LinkPreviewer({ url, children }) {
  // Write your code here
  // Documentation on how to screenshot any website:
  // https://microlink.io/screenshot
  const [snapVisible, setSnapVisible] = React.useState(false);
  const [imgUrl, setImgUrl] = React.useState('');
  const fetchImage = async () => {
    const data = await fetch(
      `https://api.microlink.io/?url=${url}&screenshot=true&meta=false`
    );
    const res = await data.json();
    console.log('res: ', res);
    if (res.status == 'success') setImgUrl(res.data.screenshot.url);
  };
  React.useEffect(() => {
    console.log('url: ', url);
    snapVisible && fetchImage();
  }, [snapVisible]);
  const overlayStyles = {
    position: 'absolute',
    zIndex: '122',
    bottom: '27px',
    left: '-54%',
    borderRadius: '6px',
  };
  const wrapperStyles = {
    position: 'relative',
    marginBottom: '6px',
  };
  const imgStyles = {
    borderRadius: '6px',
  };
  return (
    <div style={wrapperStyles}>
      {snapVisible && (
        <div style={overlayStyles}>
          <img src={imgUrl} height={'90px'} width={'150px'} style={imgStyles} />
        </div>
      )}
      <span
        className="children"
        onMouseEnter={() => setSnapVisible(true)}
        onMouseLeave={() => setSnapVisible(false)}
      >
        {children}
      </span>
    </div>
  );
}
