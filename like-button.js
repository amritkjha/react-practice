import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setTimeout(() => {
      setLiked(prev=>!prev);
    }, 1000);
  }
  const likedButtonStyles = {
    borderRadius: '6px',
    border: '1px solid #A9A9A9',
    padding: '0px 12px'
  }
  const notLikedButtonStyles = {
    borderRadius: '6px',
    border: '1px solid #D3D3D3',
    padding: '0px 12px'
  }
  const likedEmojiStyles = {
    color: 'transparent',
    textShadow: '0 0 0 blue',
    fontSize: '21px'
  }
  const unlikedEmojiStyles = {
    color: 'transparent',
    textShadow: '0 0 0 #D3D3D3',
    fontSize: '21px'
  }
  return (
    <button style={liked?likedButtonStyles:notLikedButtonStyles} onClick={handleLike}>
      {liked?<p><span style={likedEmojiStyles}>👍 Like</span></p>:<p><span style={unlikedEmojiStyles}>👍 Like</span></p>}
    </button>
  );
}

export default LikeButton;
