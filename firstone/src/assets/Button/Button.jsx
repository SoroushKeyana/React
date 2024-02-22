import styles from './Button.module.css'

function Button(){
    const click = (e)=> {
        e.target.style.backgroundColor='red';
        e.target.textContent="Fuck you! 🖕😠";
    }
    return(
        <button className={styles.button} onDoubleClick={(e)=>click(e)}>Double Click Me 😃</button>
    );
}

export default Button