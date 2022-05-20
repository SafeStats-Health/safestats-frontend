import styles from './styles.module.css';

function CInput(props) {
  function handleOnChange(event) {
    let temp = event.target.value;
    props.onInput(temp);
  }

  return (
    <div className={styles.div}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles.input}
        id={props.id}
        placeholder={props.placeholder}
        onInput={handleOnChange}
      />
    </div>
  );
}

export default CInput;
