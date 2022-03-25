import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hack For Good 2022</h1>
        <div className="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden">
          <img alt="moto" src="/images/object/1.png" className="absolute -right-20 -bottom-8 h-40 w-40 mb-4" />
          <div className="w-4/6">
            <p className="text-gray-800 text-lg font-medium mb-2">
              Avg
            </p>
            <p className="text-gray-400 text-xs">
              Detail is not an obsession, it is the very essence of perfection.
            </p>
            <p className="text-indigo-500 text-xl font-medium">
              $399
            </p>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
