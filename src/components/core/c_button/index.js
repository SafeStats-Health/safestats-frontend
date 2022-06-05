import styles from './styles.module.css';

function CButton(props) {
  return (
    <div className={props.buttonContainer}>
      <button
        className={
          props.inverse ? styles['black-button'] : styles['white-button']
        }
        onClick={props.onClick}
        type={props.type}
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
      >
        {props.label}
      </button>
    </div>
  );
}

export default CButton;
