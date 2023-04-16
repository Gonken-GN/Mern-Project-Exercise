import React, { useState, useEffect } from 'react'
import axios from "axios";
function Userlist() {
  const [users, setUser] = useState([]);
  useEffect(() =>{
    getUsers();
  }, []);
  const getUsers = async () =>{
    const response = await axios.get("http://localhost:5000/users ");
    setUser(response.data);
  }
  return (
    <div className='columns'>
      <div className='column is-half'>
        <table className='table is-striped is-fullwidth mt-5'>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
               <th>{index + 1}</th>
               <th>{user.name}</th>
               <th>{user.email}</th>
               <th>{user.gender}</th>
               <th>
                <button className='button is-info is-small'>Edit</button>
                <button className='button is-danger is-small'>Danger</button>
               </th>
             </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Userlist;