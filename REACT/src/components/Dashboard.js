import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [lastCreatedItem, setLastCreatedItem] = useState(null);
  const [categoriesWithCounts, setCategoriesWithCounts] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Obtener el total de productos
    fetch('http://localhost:3050/products/api/products')
      .then(response => response.json())
      .then(data => setTotalProducts(data.count))
      .catch(error => console.error('Error fetching total products:', error));

    // Obtener el total de usuarios
    fetch('http://localhost:3050/users/api/users')
      .then(response => response.json())
      .then(data => setTotalUsers(data.count))
      .catch(error => console.error('Error fetching total users:', error));

    // Obtener el último producto creado
    fetch('http://localhost:3050/products/api/products/latest')
      .then(response => response.json())
      .then(data => setLastCreatedItem(data))
      .catch(error => console.error('Error fetching latest product:', error));

    // Obtener las categorías con la cantidad de productos en cada una
    fetch('http://localhost:3050/products/api/products')
      .then(response => response.json())
      .then(data => {
        const categoriesWithCounts = Object.keys(data.countByCategory).map(category => ({
          name: category,
          productCount: data.countByCategory[category],
        }));
        setCategoriesWithCounts(categoriesWithCounts);
        const totalCategories = categoriesWithCounts.length;
        setTotalCategories(totalCategories);
      })
      .catch(error => console.error('Error fetching categories:', error));

    // Obtener la lista paginada de productos (primera página)
    fetch('http://localhost:3050/products/api/products?page=1')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      })
      .catch(error => console.error('Error fetching products:', error));

    // Obtener la lista paginada de usuarios (primera página)
    fetch('http://localhost:3050/users/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        setUsers(data.users);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const loadNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      fetch(`http://localhost:3050/users/api/users?page=${nextPage}`)
        .then(response => response.json())
        .then(data => {
          setUsers(data.users);
          setCurrentPage(nextPage);
        })
        .catch(error => console.error('Error fetching next page of users:', error));
    }
  };

  const loadPrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      fetch(`http://localhost:3050/users/api/users?page=${prevPage}`)
        .then(response => response.json())
        .then(data => {
          setUsers(data.users);
          setCurrentPage(prevPage);
        })
        .catch(error => console.error('Error fetching previous page of users:', error));
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPage = (pageNumber) => {
    fetch(`http://localhost:3050/products/api/products?page=${pageNumber}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setCurrentPage(pageNumber);
      })
      .catch(error => console.error('Error fetching page:', error));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>Total de Productos: {totalProducts}</div>
      <div>Total de Usuarios: {totalUsers}</div>
      <div>Total de Categorías: {totalCategories}</div>

      {lastCreatedItem && (
        <div>
          <h3>Último Producto Creado:</h3>
          <p>ID: {lastCreatedItem.id}</p>
          <p><a href={lastCreatedItem.detail}>{lastCreatedItem.name}</a></p>
        </div>
      )}

      <div>
        <h3>Total de Categorías: {totalCategories}</h3>
        <p></p>
      </div>

      <div>
        <h3>Categorías:</h3>
        <ul>
          {categoriesWithCounts.map(category => (
            <li key={category.name}>
              {category.name}: {category.productCount}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Listado de Productos:</h3>
        <ul className="ul-products">
          {products.map(product => (
            <div className="product-container" key={product.id}>
              <li className="li-product">
                ID: {product.id}<br />  Nombre: {product.name} <br /> Descripción: {product.description} <br />
                <div className="list-img-container">
                  <a href={product.detail}><img src={`http://localhost:3050${product.image}`} className="product-image" alt="" /></a>
                </div>
              </li>
            </div>
          ))}
        </ul>
        <div>
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className="pagination-item">
                <button onClick={() => goToPage(number)}>{number}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3>Listado de Usuarios:</h3>
        <ul className="ul-users">
          {users.map(user => (
            <div className="user-container" key={user.id}>
              <li className="li-user">
                ID: {user.id}<br />UUID: {user.uuid}   <br /> Username: {user.username}    <br /> 
                <a href={user.detail}><img className="profilePics" src={`http://localhost:3050${user.profilePic}`} alt="" /> </a>
              </li>
            </div>
          ))}
        </ul>
        <div>
          <button onClick={loadPrevPage}>Anterior</button>
          <button onClick={loadNextPage}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;