import React from 'react';

export default function Tweet() {
  const tweet1 = {
    userHandle: 'amritkjha',
    userName: 'Amrit Jha',
    avatar: 'https://lh3.googleusercontent.com/ogw/AF2bZyiQgMg62DTakzIfJWhFFg4Mf-XVatYDhZuP_rl7M9zizg=s32-c-mo',
    content: 'Free Png Download Instagram Verified Logo Png Images - Instagram Blue Tick Emoji Copy, Transparent Png(850x836) - PinPng Find hd Free Png Download Instagram Verified Logo Png Images - Instagram Blue Tick Emoji Copy, Transparent Png is free png image. Download and use it for your non',
    likeCount: 12,
    retweetCount: 5,
    createdAt: '1h'
  }
  const containerStyles = {
    display: 'flex'
  }
  const spanStyles = {
    padding: '0px 3px'
  }
  const contentStyles = {
    padding: '6px 3px 18px 3px',
  }
  const actionContainerStyles = {
    border: '1px solid #a9a9a9',
    borderRadius: '6px',
    padding: '3px 6px',
    cursor: 'pointer',
    margin: '0 6px 0 21px'
  }
  const actionCountStyles = {
    margin: '0 3px 0 9px'
  }
  return (
    <div style={containerStyles}>
      <div><img src={tweet1.avatar} /></div>
      <div>
        <div>
          <span style={spanStyles}>{tweet1.userName}<img src="https://i.pinimg.com/736x/33/2b/e9/332be9f33c39a3d10594d9fdd72ac83c.jpg" height="12px" /></span>
          <span style={spanStyles}>@{tweet1.userHandle}</span>
          <span style={spanStyles}>{tweet1.createdAt}</span>
        </div>
        <div style={contentStyles}>{tweet1.content}</div>
        <div>
          <span style={actionContainerStyles}>👍Like<span style={actionCountStyles}>{tweet1.likeCount}</span></span>
          <span style={actionContainerStyles}>🔁Retweet<span style={actionCountStyles}>{tweet1.retweetCount}</span></span>
          <span style={actionContainerStyles}>↩️Reply</span>
        </div>
      </div>
    </div>
  );
}
