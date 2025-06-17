import styles from './Frase.module.css'

function Frase () {
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente para alavancar seu futuro</p>
            <p className={styles.fraseContent}>Apesar de ainda ser muito iniciante</p>
        </div>
    )
}

export default Frase