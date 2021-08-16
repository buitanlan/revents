import ReactDOM from 'react-dom';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/app/store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
