import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
    dsn: "https://c6784e2f07198d5aaf142bccd64a3594@o4507717098799104.ingest.us.sentry.io/4507717100765184",
    integrations: [
      nodeProfilingIntegration(),
    ],

    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
});