import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const { APP_NAME, APP_DESCRIPTION } = {
  ...publicRuntimeConfig,
  APP_NAME: 'Joshua Stephen | Software Engineer',
  APP_DESCRIPTION: 'A web developer passionate about javascript all around the web.',
};
