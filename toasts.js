import * as React from 'react';
import './style.css';

export default function Toast({ title, icon, position, id, close }) {
  const toastContainerStyles = {
    backgroundColor: 'cornflowerblue',
    color: 'white',
    borderRadius: '6px',
    padding: '6px',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between'
  }
  return <div className={styles.toastContainer}>
    <span>{icon}</span>
    <span>{title}</span>
    <span><button className={styles.close} onClick={()=>close(id)}>❌</button></span>
  </div>;
}


export default function App() {
  const [toasts, setToasts] = React.useState([]);
  const [formData, setFormData] = React.useState({
    title: '',
    position: 'topLeft',
    icon: '🎯',
  });
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #d3d3d3',
    padding: '9px 6px',
    borderRadius: '4px',
    width: '65%',
  };
  const toastsContainerStyles = {
    position: 'fixed',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '100%',
  };
  const topLeftStyles = {
    top: 0,
    left: 0,
  };
  const bottomLeftStyles = {
    bottom: 0,
    left: 0,
  };
  const topRightStyles = {
    top: 0,
    right: 0,
  };
  const bottomRightStyles = {
    bottom: 0,
    right: 0,
  };
  const posMap = {
    topLeft: topLeftStyles,
    bottomLeft: bottomLeftStyles,
    topRight: topRightStyles,
    bottomRight: bottomRightStyles,
  };
  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };
  const addToast = (e) => {
    e.preventDefault();
    console.log('formData', formData);
    setToasts((prev) => [
      ...prev,
      {
        ...formData,
        id: prev.length > 0 ? prev?.[prev.length - 1]?.id + 1 : 1,
      },
    ]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 6000);
    console.log('toasts', toasts);
  };
  const closeToast = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div style={{ position: 'relative' }}>
      <div className="container">
        <p>Configurations</p>
        <form style={formStyles} onSubmit={addToast}>
          <label>Toast Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Enter toast title"
          />
          <label>Position</label>
          <select
            value={formData.position}
            onChange={(e) => handleChange('position', e.target.value)}
          >
            <option value="bottomRight">Bottom Right</option>
            <option value="bottomLeft">Bottom Left</option>
            <option value="topRight">Top Right</option>
            <option value="topLeft">Top Left</option>
          </select>
          <label>Icon</label>
          <select
            value={formData.icon}
            onChange={(e) => handleChange('icon', e.target.value)}
          >
            <option value="🎯">🎯</option>
            <option value="🎉">🎉</option>
            <option value="🏆">🏆</option>
            <option value="🎮">🎮</option>
          </select>
          <button type="submit">Show Toast</button>
        </form>
      </div>
      <div style={{ ...toastsContainerStyles, ...posMap[toasts[0]?.position] }}>
        {toasts.map((t, i) => (
          <Toast
            title={t.title}
            icon={t.icon}
            position={t.position}
            id={t.id}
            close={closeToast}
          />
        ))}
      </div>
    </div>
  );
}
