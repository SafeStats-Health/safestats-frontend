import style from './style.module.css';

function CInput(props) {
  return (
    <div className={style.div}>
      <label className={style.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={style.input}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default CInput;
