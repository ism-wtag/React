import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    users();
  }, []);

  const users = async () => {
    const result = await axios.get('http://localhost:3003/users');
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    users();
  };

  return (
    <div>
      <h1>Home</h1>
      <table class='table table-striped text-center'>
        <thead>
          <tr>
            <th scope='col'>Serial</th>
            <th scope='col'>Name</th>
            <th scope='col'>User Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr>
              <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  exact
                  to={`/users/show/${user.id}`}
                  class='btn btn-success'
                >
                  Show
                </Link>
                <Link
                  exact
                  to={`/users/edit/${user.id}`}
                  class='btn btn-primary mx-2'
                >
                  Edit
                </Link>
                <Link
                  exact
                  to='/'
                  class='btn btn-danger'
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
