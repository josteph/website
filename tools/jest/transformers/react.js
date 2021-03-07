const transformerPath = './tools/jest/transformers';

function react(result = {}) {
  return {
    ...result,
    '^.+\\.(js|jsx|ts|tsx)$': `${transformerPath}/babel-react`,
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(css|scss|sass|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${transformerPath}/assets`,
  };
}

module.exports = react;
