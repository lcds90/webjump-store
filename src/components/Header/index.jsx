import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.css';
import logo from '../../assets/logo-webjump.png';
import { toggleNavbar } from '../../redux/actions';

const {
  container,
  top,
  isDarkTop,
  isLightTop,
  labelDesktop,
  labelPhone,
  links,
  searchAndLogo,
  searchIcon,
  isDarkSearch,
  navbarMobile,
  inputMobile,
  isLightSearch,
} = styles;

const Header = () => {
  const { showNavbar } = useSelector((state) => state.user);
  const [statusNavbar, toggleStatusNavbar] = useState(showNavbar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleNavbar());
  }, [dispatch, statusNavbar]);

  return (
    <header className={container}>
      <section className={`${top} ${isLightTop}`}>
        <Link className={links} to="/login">
          Acesse sua conta
        </Link>
        ou
        <Link className={links} to="/join">
          Cadastre-se
        </Link>
      </section>
      <section className={`${searchAndLogo} ${isLightSearch}`}>
        <div>
          <BiMenu onClick={() => toggleStatusNavbar(!statusNavbar)} size="2em" className={navbarMobile} />
          <img src={logo} alt="Logo Webjump" />
          <span>More than just a platform</span>
          {/* MOBILE */}
          <label className={labelPhone} htmlFor="search">
            <BiSearch className={searchIcon} size="2em" />
            <input type="text" id="search" className={inputMobile} />
          </label>
        </div>
        {/* DESKTOP */}
        <label className={labelDesktop} htmlFor="search">
          <input type="text" id="search" />
          <button type="submit">BUSCAR</button>
        </label>
      </section>
    </header>
  );
};

export default Header;
