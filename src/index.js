import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
