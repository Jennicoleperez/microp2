import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { REGISTRO_URL } from '../../constants/urls';
import { useUser } from '../../context/UserContext'
import styles from '../NavBar/NavBar.module.css'
import { logout } from '../../firebase/auth-service';
import { HOMEPAGE_URL,REGISTRO_URL, INICIARSESION_URL } from '../../constants/urls';

function NavBar() {
    const {user} = useUser(); 
    console.log({user}); 

    const handleLogout = async () => {
        console.log("saliendo");
        await logout();
    }

  return (
    <>
    <nav className={styles.navbar}>
         
      {!isLoadingUser && (
        <ul className={styles.menuList}>
          {!!user ? (
            <>
            <ul className={styles.menuList}>
            <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
            <Link to={HOMEPAGE_URL} className={styles.link}>
                <span>HomePage</span>
            </Link>
            </li>
            </ul> 
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={PROFILE_URL} className={styles.link}>
                  <div className={styles.userAvatar} />
                  <span>Bienvenid@, {user.name}</span>
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <button
                  type="button"
                  className={`${styles.link} ${styles.logoutBtn}`}
                  onClick={handleLogout}
                >
                  <span>Salir</span>
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={INICIARSESION_URL} className={styles.link}>
                  <span>Iniciar sesión</span>
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={REGISTRO_URL} className={styles.link}>
                  <span>Registro</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>



    </>
  )
}

export default NavBar