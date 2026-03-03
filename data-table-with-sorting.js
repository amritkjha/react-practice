import React from 'react';

const users = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
  { id: 4, name: "Diana", age: 28, email: "diana@example.com" }
];


export default function DataTable() {
  const [sortHeader, setSortHeader] = React.useState({name: 'id', type: false});
  const handleHeaderSort = (key) => {
    if(key==sortHeader.name) {
      setSortHeader(prev=>({...prev, type: !prev.type}))
    }
    else {
      setSortHeader({name: key, type: 0});
    }
  }
  const handleSort = (a, b) => {
      const key = sortHeader.name;
    if(sortHeader.name == 'id' || sortHeader.name == 'age') {
      return sortHeader.type?a[key]-b[key]:b[key]-a[key];
    } else return sortHeader.type?b[key].localeCompare(a[key]):a[key].localeCompare(b[key]);
  }
  const sortedUsers = [...users].sort(handleSort);
  const HeaderStyles = {
    backgroundColor: '#a9a9a9',
    color: 'white',
    cursor: 'pointer'
  }
  const selectedColStyles = {
    backgroundColor: 'blue'
  }
  return (
    <div>
      <h2>Users Table</h2>
      <table>
        <tr style={HeaderStyles}>
          <td style={sortHeader.name=='id'?selectedColStyles:null} onClick={()=>handleHeaderSort('id')}>ID</td>
          <td style={sortHeader.name=='name'?selectedColStyles:null} onClick={()=>handleHeaderSort('name')}>Name</td>
          <td style={sortHeader.name=='age'?selectedColStyles:null} onClick={()=>handleHeaderSort('age')}>Age</td>
          <td style={sortHeader.name=='email'?selectedColStyles:null} onClick={()=>handleHeaderSort('email')}>Email</td>
        </tr>
        {sortedUsers.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
