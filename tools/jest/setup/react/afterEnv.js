import React from 'react';
import { render } from '@testing-library/react';
import catchGlobalErrors from '../../catchGlobalErrors';

const setupComponent = (Component = null, props = {}, testIdList = []) => {
  const utils = render(<Component {...props} />);
  const testComponents = testIdList.reduce(
    (componentMap, testId) => ({
      ...componentMap,
      [testId]: utils.getByTestId(testId),
    }),
    {},
  );

  return {
    ...utils,
    meta: {
      props,
      components: testComponents,
    },
  };
};

// Below are globals config from webpack define plugin
global.__DEV__ = false;
global.__TEST__ = true;
global.__PROD__ = true;
// ====

// Helper functions
global.setupComponent = setupComponent;

catchGlobalErrors();
