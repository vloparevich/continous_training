import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetName,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => {
    return value.trim() !== '';
  });

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    reset: resetEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => {
    return value.indexOf('@') > 1;
  });

  console.log('loading has error', nameInputHasError);
  console.log('loading has error', emailInputHasError);

  let formIsValid = false;
  if (enteredNameIsValid && !emailInputHasError) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetName();
    resetEmail();
    console.log('name has error', nameInputHasError);
    console.log('email has error', emailInputHasError);
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          type='text'
          id='name'
          autoComplete='off'
        />
        {JSON.stringify(nameInputHasError)}
        {nameInputHasError && (
          <p className='error-text'>Name Must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type='email'
          id='email'
          autoComplete='off'
        />
        {JSON.stringify(emailInputHasError)}
        {emailInputHasError && (
          <p className='error-text'>Email Must not be empty</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
