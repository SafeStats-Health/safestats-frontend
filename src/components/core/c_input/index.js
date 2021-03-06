import styles from './styles.module.css';

function CInput(props) {
  function handleOnChange(event) {
    let temp = event.target.value;
    props.onInput(temp);
  }

  return (
    <div className={!props.invertMargin ? styles['margin-bottom'] : styles['margin-top']}>
      <label
        className={
          props.inverse ? styles['white-label'] : styles['black-label']
        }
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        value={props.value}
        className={`${
          props.inverse ? styles['white-input'] : styles['black-input']
        }
           ${props.shouldShowWarning ? styles['red-border'] : ''}
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
