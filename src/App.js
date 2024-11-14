import './App.css';
import SimpleForm from './Pages/simpleform';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Application</h1>
        <p>Please fill out the form below to continue.</p>
      </header>
      <main className="App-main">
        <SimpleForm />
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
