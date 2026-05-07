import * as React from 'react';
import './style.css';

/**
 * Feedback Stars - Rating system:
 *
 * Use Cases:
 * 1. Feedback component takes in a prop `numberOfStars` which will render the number of stars on the page.
 * 2. On hover, the background color of the star should turn to yellow.
 * 3. On clicking a single star, save the feedback in state
 * 4. Ratings should be in the range of  1 <= ratings <= numberOfStars. (It cannot be zero)
 */

const Star = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      stroke="black"
      strokeWidth="2"
      // use the style property to fill the color of the stars
      // eg: style={{ color: 'red' }} to change fill of the star to red.
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
};

const Feedback = ({ numberOfStars }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [rating, setRating] = useState(0);
  const starsContainer = {
    display: 'flex',
    flexDirection: 'row',
  }
  const starStyles = {
    height: '72px',
    width: '72px',
    color: 'white'
  }
  const selectedStyles = {
    color: 'yellow'
  }
  return <div style={starsContainer}>
    {[...Array(numberOfStars)].map((star, idx) => {
      return (
        <div style={{...starStyles, ...(hoverIndex>=idx||rating>idx?selectedStyles:null)}} onMouseEnter={()=>setHoverIndex(idx)} onMouseLeave={()=>setHoverIndex(-1)} onClick={()=>setRating(idx+1)}><Star /></div>
      );
    })}
  </div>;
};

export default function App() {
  let numberOfStars = 5;
  return (
    <div>
      <div className="container">
        <h1>Feedback Stars</h1>
        <span>Algochurn</span>
        <p>Please read he description to start solving the problem.</p>
        <Feedback numberOfStars={numberOfStars} />
      </div>
    </div>
  );
}
