import './App.css';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: 'white',
              fontSize: 15,
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
              fontSize: 15,
            },
          },
        }}
      />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
