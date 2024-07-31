import React ,{ useState }from 'react';
import { useAuth } from '../contexts/AuthContext'

function Register({register}) {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');
  // const [login] = useAuth();

  const handleSubmit = (e) =>{
    e.preventDefault();
    register(email,password)
  };
 return (
  <div>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
    <label>
    Email:
    <input
    type="email"
    value={email}
    onChange={(e) => setPassword(e.target.value)}
    required
    />
    </label>
    <button type="submit">Register</button>
    </form>
  </div>
 );
}


export default Register