import styles from './styles.module.css';
import { useEffect } from 'react';

function CSelect(props) {
  function handleOnInput(event) {
    if (props.onInput) {
      if (event) {
        const temp = event.target.value;
        props.onInput(temp);
      } else {
        const temp = document.getElementById(props.id).value;
        props.onInput(temp);
      }
    }
  }

  useEffect(handleOnInput, []);

  return (
    <div className={styles.div}>
      <label className={styles['black-label']} htmlFor={props.id}>
        {props.label}
      </label>
      <select
        id={props.id}
        className={styles['black-input']}
        onInput={handleOnInput}
      >
        {props.items.map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CSelect;
