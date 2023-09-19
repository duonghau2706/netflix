import "./login.scss";

// import { useState } from "react";
import useInput from "../../hooks/use-input/use-input";
import { Redirect, Link } from "react-router-dom";

export default function Login() {
  // const [enteredAccount, setEnteredAccount] = useState('');
  // const [accountIsTouched, setAccountIsTouched] = useState(false);

  const {
    value: enteredAccount,
    inputIsNotValid: accountIsNotValid,
    inputChangeHandler: accountChangeHandler,
    inputBlurHandler: accountBlurHandler,
    inputReset: accountReset
  } = useInput(value => value.trim() === "" || !String(value).includes("@"));

  const {
    value: enteredPass,
    inputIsNotValid: passIsNotValid,
    inputChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    inputReset: passReset
  } = useInput(value => value.length < 4 || value.length > 60);

  const formIsValid = !accountIsNotValid && !passIsNotValid;

  // const enteredAccountIsNotValid = enteredAccount.trim() === '';
  // const accountIsNotValid = enteredAccountIsNotValid && accountIsTouched;

  // const accountChangeHandler = event => {
  //   setEnteredAccount(event.target.value);
  // };

  // const accountBlurHandler = event => {
  //   setAccountIsTouched(true);
  // };

  // const formIsValid = !enteredAccountIsNotValid;

  const formSubmittedHandler = event => {
    event.preventDefault();
    // setAccountIsTouched(true);
    if (accountIsNotValid || passIsNotValid) {
      return;
    }

    accountReset();
    passReset();
    // setEnteredAccount('');
    // setAccountIsTouched(false);
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form className="form-control" onSubmit={formSubmittedHandler}>
          <h1>Sign In</h1>
          <input
            type="text"
            className={accountIsNotValid ? "invalid" : undefined}
            placeholder="Email or phone number"
            value={enteredAccount}
            onChange={accountChangeHandler}
            onBlur={accountBlurHandler}
          />
          {accountIsNotValid && <p className="text-error">Please enter a valid email.</p>}
          <input
            type="password"
            className={passIsNotValid ? "invalid" : undefined}
            placeholder="Password"
            value={enteredPass}
            onChange={passChangeHandler}
            onBlur={passBlurHandler}
          />
          {passIsNotValid && <p className="text-error"> Your password must contain between 4 and 60 characters..</p>}
          {formIsValid &&
            <Link to="/home">
              <button className="loginButton">Sign In</button>
            </Link>
          }
          {!formIsValid && <button className="loginButton">Sign In</button>}
          <span>
            New to Netflix?
            <a href="/register">
              <b>Sign up now.</b>
            </a>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
