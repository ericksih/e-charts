import React = require('react');
import { Link } from 'react-router-dom';

const Navigations = () => {
  return (
    <nav
      style={{
        padding: '10px',
        margin: '0px',
        background: '#111',
        fontSize: '20px',
        textAlign: 'center',
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
          padding: '20px',
          color: 'white',
        }}
        to="/"
      >
        Pie Chart
      </Link>

      <Link
        style={{
          textDecoration: 'none',
          padding: '20px',
          color: 'white',
        }}
        to="/line-chart"
      >
        Line Chart
      </Link>

      <Link
        style={{
          textDecoration: 'none',
          padding: '20px',
          color: 'white',
        }}
        to="/bar-chart"
      >
        Bar Chart
      </Link>
    </nav>
  );
};

export default Navigations;
