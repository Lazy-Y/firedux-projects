import React, {useState, useCallback} from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);
  const onChangeFirstName = useCallback(e => {
    setFirstName(e.target.value);
  }, []);
  const onChangeLastName = useCallback(e => {
    setLastName(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
    },
    [email, password, firstName, lastName],
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={onChangeEmail} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={onChangePassword} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={onChangeFirstName} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={onChangeLastName} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
