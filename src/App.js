
import './App.css';

function App() {
  return (
    <>
    <div class="container">
  <div class="card">
    <h2>Login</h2>
    <form>
      <input type="text" id="username" name="username" placeholder="Username" required/>
      <input type="password" id="password" name="password" placeholder="Password" required/>
      <button type="submit">Login</button>
    </form>
  </div>
</div>
    </>
  )
}

export default App;
