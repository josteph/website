import browlog from 'browlog';
import slackReporter from 'browlog/reporters/slack';

const isLoggerDisabled = process.env.NODE_ENV === 'development';

function initLogger() {
  if (isLoggerDisabled || !process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL) return;

  const extraLogProps = {
    appName: 'joshuastephen.com Website',
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV,
  };

  browlog({
    ignoreErrors: [/Service worker/, /Failed prop type/],
    reporters: [slackReporter(process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL as string, extraLogProps)],
  });
}

export default initLogger;
