import styles from '../styles/components/indexAchievementContainer.module.scss'

import Link from 'next/link'
import Image from 'next/image'

export default function indexAchievementContainer({
    title,
    id,
    team
}) {

    return (
        <Link href={`/achievement/${id}`} passHref>
            <section className={styles.container}>
                <div className={styles.img}>
                    <Image src='/coba/sandal.jpg'
                        layout='fill'
                        objectFit='cover'
                        alt='Achievement'
                    />
                </div>
                <div className={styles.text}>
                    <h5>{title}</h5>
                    <hr />
                    <p>{team}</p>
                </div>
            </section>
        </Link>
    )
}