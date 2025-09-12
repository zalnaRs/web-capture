import { mount } from 'ripple';
// @ts-expect-error: known issue, we're working on it
import { App } from './App.ripple';

import './style.css'

mount(App, {
	target: document.getElementById('root'),
});
