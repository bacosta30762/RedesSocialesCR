import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';

AOS.init();

createRoot(document.querySelector("#root")).render(<App />);

