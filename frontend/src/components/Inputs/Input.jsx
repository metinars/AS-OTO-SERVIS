import classes from './Input.module.css';

const Input = ({ placeholder, value, type, id, name, onChange, textarea }) => {
  return (
    <>
      {textarea ? (
        <textarea
          className={classes.textarea__container}
          placeholder={placeholder}
          value={value}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className={classes.input__container}
          placeholder={placeholder}
          value={value}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default Input;
