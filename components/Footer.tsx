import React from 'react'
import styles from "../styles/Layout.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className={styles.footer} style={{ textAlign: 'center'}}>
            <p>&copy; Luoming Zhang {new Date().getFullYear}</p>
        </footer>
    )
}

export default Footer
