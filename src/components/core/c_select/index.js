import styles from './styles.module.css';

function CSelect(props) {
  function handleOnInput(event) {
    const temp = event.target.value;
    props.onInput(temp);
  }

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
        {props.items.map((item) => {
          return <option selected={props.selected === item.key} key={item.key} value={item.key}>{item.label}</option>;
        })}
      </select>
    </div>
  );
}

export default CSelect;
