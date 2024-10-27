import React, { useEffect, useState } from 'react'
import styles from './Background.module.css'

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getInitialStars = () => {
    const stars = []
    const starsNum = randomIntFromInterval(50, 100)
    for (let i = 0; i < starsNum; i++) {
        stars.push({
            top: Math.random() * 99,
            left: Math.random() * 99,
            size: randomIntFromInterval(4, 8),
        })
    }
    return stars
}

const updateStars = (stars) => {
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].top > 94) {
            stars[i].top = -randomIntFromInterval(1, 5) + stars[i].top
        } else if (stars[i].top < 5) {
            stars[i].top = randomIntFromInterval(1, 5) + stars[i].top
        } else {
            stars[i].top = (Math.random() > 0.5 ? 1 : -1) * randomIntFromInterval(1, 5) + stars[i].top
        }

        if (stars[i].left > 94) {
            stars[i].left = -randomIntFromInterval(1, 5) + stars[i].left
        } else if (stars[i].left < 5) {
            stars[i].left = randomIntFromInterval(1, 5) + stars[i].left
        } else {
            stars[i].left = (Math.random() > 0.5 ? 1 : -1) * randomIntFromInterval(1, 5) + stars[i].left
        }
    }
    return stars
}

const Background = ({ children }) => {
    const [stars, setStars] = useState(getInitialStars())

    useEffect(() => {
        setTimeout(() => {
            const newStars = [...stars]
            setStars(updateStars(newStars))
        }, 50);
        setInterval(() => {
            const newStars = [...stars]
            setStars(updateStars(newStars))
        }, [10000])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.container}>
            {
                stars.map((s, i) =>
                    <div
                        key={i}
                        className={styles.star}
                        style={{
                            top: s.top + '%',
                            left: s.left + '%',
                            width: s.size + 'px',
                            height: s.size + 'px',
                            filter: `blur(${s.size / 2}px)`
                        }} />
                )
            }
            {children}
        </div>
    )
}

export default Background