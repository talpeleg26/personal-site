import React from 'react'
import styles from './IconButton.module.css'

const IconButton = ({ src, href }) => {
    return (
        <a href={href} className={styles.container}>
            <img src={src} alt='' />
        </a>
    )
}

export default IconButton