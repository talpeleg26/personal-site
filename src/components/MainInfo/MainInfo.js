import React from 'react'
import styles from './MainInfo.module.css'
import IconButton from '../IconButton/IconButton'

const MainInfo = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tal Peleg</h1>
            <div className={styles.actionsContainer}>
                <IconButton src={'/icons/cv.svg'} href={'https://drive.google.com/file/d/1Wro7e4ongsHJbkzJdGWDAlHtm9Vu8hnV/view'} />
                <IconButton src={'/icons/email.svg'} href={'mailto:talpeleg26@gmail.com'} />
                <IconButton src={'/icons/github.svg'} href={'https://github.com/talpeleg26'} />
                <IconButton src={'/icons/linkedin.svg'} href={'https://www.linkedin.com/in/tal-peleg-1954701a9/'} />
            </div>
            <p className={styles.bottomLink}>
                <a href='/'>Source code</a> of this site
            </p>
        </div>
    )
}

export default MainInfo