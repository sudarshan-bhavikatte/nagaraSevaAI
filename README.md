# NagaraSeva AI 🤖

An AI-powered civic assistant chatbot built to help citizens navigate government services, resolve civic grievances, and get guidance on public welfare schemes — all through a conversational interface.

---

## Features

- 💬 **Conversational AI** — Multi-turn chat powered by Groq's LLM API (`llama-3.3-70b-versatile`)
- ⚡ **Fast Inference** — Sub-second responses via Groq's ultra-low latency inference engine
- 🏛️ **Civic-domain System Prompt** — Pre-configured to handle government service queries, complaints, and scheme eligibility
- 🧠 **Chat History** — Maintains conversation context across multiple turns
- 🎨 **Modern UI** — Clean, responsive interface with DM Sans & Syne typography

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Bundler | Vite 5 |
| AI Model | Llama 3.3 70B (via Groq API) |
| Fonts | Google Fonts (DM Sans, Syne) |

---

## Project Structure

```
NagaraSeva-AI/
├── public/
│   └── index.html          # App entry point
├── src/
│   ├── config/
│   │   └── constants.js    # System prompt & app constants
│   ├── css/
│   │   └── styles.css      # App styles
│   └── js/
│       ├── api.js          # Groq API integration
│       ├── app.js          # Core chat logic & state
│       └── ui.js           # UI helpers (auto-resize, formatting)
├── .env                    # API keys (not committed)
├── .gitignore
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- A [Groq API key](https://console.groq.com)

### Installation

```bash
git clone https://github.com/sudarshan-bhavikatte/nagaraSevaAI.git
cd nagaraSevaAI
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

---

## Configuration

The AI's behavior is controlled by the system prompt in `src/config/constants.js`. Edit the `SYSTEM_PROMPT` constant to customize the assistant's persona, scope, and response style for your civic use case.

---

## License

MIT
