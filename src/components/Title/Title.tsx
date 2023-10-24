import styles from "./index.module.scss"

interface forTitle{
    text:string
}


const Title =({text}:forTitle)=>{
    return<p className={styles.title}>{text}</p>
}

export default Title