import { useState, useEffect } from 'react'
export default function App() {
  const [count, setCount] = useState(0)
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
    textareaContainer: {
      position: 'relative',
        top: '80px',
        bottom: '10px'
    },
    textarea: {
      minHeight: '40px',
      maxHeight: '420px',
      width: '100%',
        resize: 'none',
        overflowY: 'auto'
    }
  };
    // console.log('textarea: ', textarea)

    useEffect(() => {
        const textarea = document.getElementById("box");
        textarea.addEventListener("input", () => {
            textarea.style.height = "auto";
          
            const newHeight = textarea.scrollHeight;
          
            textarea.style.height = `${Math.min(newHeight, 720)}px`;
        });
    }, [])
    

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello, World!</h1>
        <p>Modern SaaS companies rarely choose between 100% logical or 100% physical separation. Instead, they use a pooled-to-silo hybrid architecture.Free/Growth Tiers: Placed in a shared pool using logical separation to maximize cost efficiency.Enterprise Tiers: Placed in isolated silos using physical separation via dedicated Kubernetes namespaces, containers, and databases.To help evaluate your scaling strategy, tell me:Your current or expected database size and concurrent user countIf you plan to offer premium enterprise tiers with strict service level agreements (SLAs)Whether your application is read-heavy (e.g., analytics) or write-heavy (e.g., IoT data ingestion)</p>
      <div style={styles.textareaContainer}>
        <textarea id='box' style={styles.textarea} />
      </div>
    </div>
  )
}
