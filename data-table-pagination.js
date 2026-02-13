import React, { useState } from 'react';

function DataTable() {
  const usersData = [
    {
      id: '1',
      name: 'triumbak',
      email: 'triumbak@gmail.com'
    },
    {
      id: '2',
      name: 'sonu',
      email: 'sonu@gmail.com'
    },
    {
      id: '3',
      name: 'ambika',
      email: 'ambika@gmail.com'
    },
    {
      id: '4',
      name: 'kritesh',
      email: 'kritesh@gmail.com'
    },
    {
      id: '5',
      name: 'bambam',
      email: 'bambam@gmail.com'
    },
    {
      id: '6',
      name: 'sanidhya',
      email: 'sanidhya@gmail.com'
    },
    {
      id: '7',
      name: 'tilak',
      email: 'tilak@gmail.com'
    },
    {
      id: '8',
      name: 'lajwant',
      email: 'lajwant@gmail.com'
    },
    {
      id: '9',
      name: 'brijeshwar',
      email: 'brijeshwar@gmail.com'
    },
    {
      id: '10',
      name: 'laalji',
      email: 'laalji@gmail.com'
    },
    {
      id: '11',
      name: 'abhilasha',
      email: 'abhilasha@gmail.com'
    },
    {
      id: '12',
      name: 'bansuri',
      email: 'bansuri@gmail.com'
    },
  ]
  const [currentPage, setCurrentPage] = useState(0);
  const tableStyles = {
    height: '240px',
  }
  return (
    <>
      <table style={tableStyles}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {usersData?.filter((users, idx) => idx>=currentPage&&idx<currentPage+5).map((user)=>{
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>
      <button disabled={currentPage==0} onClick={()=>setCurrentPage(curr=>curr-5)}>←</button>

      {Array.from({ length: Math.ceil(usersData?.length/5) }, (_, i)=><button onClick={()=>setCurrentPage((i+1)*5-5)}>{currentPage==(i+1)*5-5?<b>{i+1}</b>:i+1}</button>)}

      <button disabled={currentPage+5>=usersData?.length} onClick={()=>setCurrentPage(curr=>curr+5)}>→</button>
    </>
  );
}

export default DataTable;
