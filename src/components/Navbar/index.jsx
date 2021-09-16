import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const { article, nav, section } = styles;

const Navbar = ({ className, navItems }) => (
  <nav className={`${className} ${nav}`}>
    <section className={section}>
      {navItems.map(({ label, link }) => (
        <article className={article}>
          <Link to={link}>{label}</Link>
        </article>
      ))}
    </section>
  </nav>
);

const { arrayOf, shape, string } = PropTypes;

Navbar.propTypes = {
  className: string.isRequired,
  navItems: arrayOf(shape({ name: string, link: string })).isRequired,
};

export default Navbar;
