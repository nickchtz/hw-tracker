import './libs/alpine.js';  
import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/index.js';

import { storage } from './storage.js';
import { dialog } from './dialog.js';
import { router } from './routes/router.js';

window.gsap = gsap;
window.dialog = dialog;

storage.default('tasks', []);
storage.default('subjects', []);

router.init();