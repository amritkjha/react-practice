import styled from "styled-components";
import { useState } from 'react';

const CopyToClipboard = ({ str = 'test-input' }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = async() => {
    await navigator.clipboard.writeText(str);
    setIsCopied(true);
  }
  return (
    <Button onClick={handleClick}>{isCopied ? 'Copied' : 'Copy'}</Button>
  )
}

export default CopyToClipboard

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
