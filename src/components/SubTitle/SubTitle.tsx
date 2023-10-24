import styles from "./index.module.scss"


interface forSubTitle{
    text:string
}

const SubTitle =({text}:forSubTitle)=>{
    return<p className={styles.subTitle}>{text}</p>
}

export default SubTitle