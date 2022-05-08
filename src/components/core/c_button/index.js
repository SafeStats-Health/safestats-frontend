import styles from './styles.module.css';

function CButton(props) {
  return (
    <div className={styles.div}>
      <button
        className={
          props.inverse ? styles['black-button'] : styles['white-button']
        }
      >
        {props.label}
      </button>
    </div>
  );
}

export default CButton;
