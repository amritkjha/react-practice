import { useState, useEffect } from 'react'
export default function App() {
  const [posts, setPosts] = useState([]);
  const [filPosts, setFilPosts] = useState([]);
  const [query, setQuery] = useState("");
    const [isAsc, setIsAsc] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  }, [])
    useEffect(() => {
        setFilPosts(posts);
    }, [posts])
  
  useEffect(() => {
    if(query) {
        let arr = posts.filter(item => item.title.includes(query))
      setFilPosts(arr)
    }
  }, [query])
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  }
    const handleSort = () => {
        isAsc ? 
            setFilPosts(prev=>[...prev].sort((a,b) => b.title.localeCompare(a.title))) :
            setFilPosts(prev=>[...prev].sort((a,b) => a.title.localeCompare(b.title))) ;
        setIsAsc(prev=>!prev)
    }
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <div style={styles.main}>
      <input type="text" value={query} onChange={handleChange} />
        <button onClick={handleSort}>Sort</button>
      {filPosts.map((post, i) => {
        return (
          <div>
            <span>{post.userId} - </span>
            <span>{post.id} - </span>
            <span>{post.title}</span>
          </div>
        );
      })}
    </div>
  )
}
