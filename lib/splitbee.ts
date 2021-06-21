import splitbee from '@splitbee/web';

export const initSplitbee = (): void => {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_SPLITBEE_TOKEN) {
    splitbee.init({
      token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
    });
  } else {
    console.info('[INFO]: splitbee is only initialized on production only.');
  }
};

export const sendEvent = (eventName: string, eventAttribute?: Record<string, string>): void => {
  if (process.env.NODE_ENV === 'production') {
    splitbee.track(eventName, eventAttribute);
  } else {
    console.info(`[INFO]: skip sending event { eventName: ${eventName}, eventAttribute: ${eventAttribute} }`);
  }
};
