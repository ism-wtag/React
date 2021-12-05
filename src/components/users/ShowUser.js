import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../assets/image/name.png';

const ShowUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    users();
  }, []);

  const users = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  const { name, username, email, phone } = user;

  return (
    <div class='card container mt-5 text-center'>
      <h1 class='head text-center'>Personal Information of {name}</h1>
      <img
        src={logo}
        class='card-img-top'
        alt='Image'
        style={{ width: '15%', marginLeft: '42%' }}
      />
      <div class='card-body'>
        <table class='table table-striped'>
          <tbody class='tbody'>
            <tr>
              <td>Name: {name}</td>
            </tr>
            <tr>
              <td>User Name: {username}</td>
            </tr>
            <tr>
              <td>E-mail: {email}</td>
            </tr>
            <tr>
              <td>Phone: {phone}</td>
            </tr>
          </tbody>
        </table>
        <Link exact to='/' class='btn btn-primary'>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ShowUser;
