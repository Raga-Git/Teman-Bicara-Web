 import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/router/navBarController.jsx';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
