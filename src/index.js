import { Skeleton } from './components/skeleton';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Suspense fallback={<Skeleton />}>
		<App />
	</Suspense>
);
