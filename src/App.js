import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="container">
        <div class="header">
            <h2>Create Account</h2>
        </div>
        <form class="form" id="form">
            <div class="form-control">
                <label>Username</label>
                <input type="text" placeholder="Username" id="username"/>
                <label>E-mail</label>
                <input type="email" placeholder="exemple@exemple.com"/>
                <label>password</label>
                <input type="password" placeholder="password"/>
            </div>
            <button><a href="index.html">submit</a></button>
        </form>
    </div>
    </div>
  );
}

export default App;
