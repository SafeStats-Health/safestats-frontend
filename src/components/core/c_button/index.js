import styles from './styles.module.css';
import CircularProgress from '@mui/material/CircularProgress';

function CButton(props) {
  return (
    <div className={styles.div}>
      <button
        className={`${
          props.inverse ? styles['black-button'] : styles['white-button']
        } 
           ${props.disabled ? 'disabled-button' : 'auth-button'}
          `}
        onClick={!props.disabled ? props.onClick : null}
        type={props.type}
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
      >
        {props.isLoading ? (
          <CircularProgress style={{ color: 'white' }} />
        ) : (
          props.label
        )}
      </button>
    </div>
  );
}

export default CButton;
