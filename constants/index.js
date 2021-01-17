import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const { GQL_HOST } = publicRuntimeConfig;
