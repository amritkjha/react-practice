import { useState } from 'react';
export const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      setCoords({longitude: long, latitude: lat});
    }, (err) => {
      setError('Geolocation is not supported');
    })
  } else setError('Geolocation is not supported')
  return { coords, error };
};

const App = () => {
  const { coords, error } = useGeolocation();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p>Latitude: {coords?.latitude.toFixed(4)}</p>
      <p>Longitude: {coords?.longitude.toFixed(4)}</p>
    </div>
  );
};

export default App;
