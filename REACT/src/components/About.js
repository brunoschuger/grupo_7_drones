import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function About() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation(); 

  useEffect(() => {
    fetch(`http://localhost:3050/users/api/users?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, [currentPage]);

  const loadNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      fetch(`http://localhost:3050/users/api/users?page=${nextPage}`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.users);
          setCurrentPage(nextPage);
        })
        .catch((error) => console.error('Error fetching next page of users:', error));
    }
  };

  return (
    <div className='listado-de-usuarios'>
        <h3>Listado de Usuarios:</h3>
        <div className="seccion-usuarios">
          <ul className="ul-users">
            {users.map(user => (
              <li className="user-card" key={user.id}>
                <div className="user-info">
                  <p>ID: {user.id}</p>
                  <p>UUID: {user.uuid}</p>
                  <p>Username: {user.username}</p>
                </div>
                <div className="list-img-container">
                  <a href={user.detail}>
                    <img className="profilePics" src={`http://localhost:3050${user.profilePic}`} alt="" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {location.pathname === "/about" && (
        <Link to="/dashboard">
          <button style={{
      display: 'inline-block',
      marginRight: '20px',
      padding: '10px 10px',
      backgroundColor: '#09736Cff',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
    }}>
            Volver a la página principal
            </button>
        </Link>
        )}
      </div>
  );
}

export default About;
