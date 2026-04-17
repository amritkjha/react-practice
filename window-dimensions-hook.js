import { useEffect, useState } from 'react'
export const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    const handleHeight = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleWidth);
    window.addEventListener('resize', handleHeight);
    return () => {
      window.removeEventListener('resize', handleWidth);
      window.removeEventListener('resize', handleHeight);
    }
  }, [])
  return {width, height};
}

const App = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <h2>Window Dimensions:</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default App;
