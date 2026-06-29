import { SYSTEM_PROMPT } from '../config/constants.js';
import { fetchGroqResponse } from './api.js';
import { autoResize, formatResponse } from './ui.js';

let chatHistory = [];
let isLoading = false;

// move sendMessage()
// handleKey()
// addMessage()
// typing functions here