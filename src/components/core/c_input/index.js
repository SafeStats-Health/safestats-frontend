import styles from './styles.module.css';

function CInput(props) {
  return (
    <div className={styles.div}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles.input}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default CInput;
