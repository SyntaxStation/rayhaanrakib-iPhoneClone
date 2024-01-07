import React from 'react'
import * as Sentry from "@sentry/react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

Sentry.init({
  dsn: "https://f46a27cda7cb704d18b3153508ccae71@o4506959693021184.ingest.us.sentry.io/4506959698001920",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
