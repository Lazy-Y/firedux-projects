import React, {useState, useCallback} from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
    },
    [email, password],
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={onChangeEmail} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={onChangePassword} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
