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
        className={`
          ${styles.input}
          ${props.shouldShowWarning ? styles['input-error'] : styles.input}
        `}
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        onInput={handleOnChange}
      />
      {props.shouldShowWarning && (
        <p className={styles['warning-text']} htmlFor={props.id}>
          {props.warningText}
        </p>
      )}
    </div>
  );
}

export default CInput;
