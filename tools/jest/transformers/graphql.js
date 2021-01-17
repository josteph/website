function graphql(result) {
  return {
    ...result,
    '\\.(gql|graphql)$': 'jest-transform-graphql',
  };
}

module.exports = graphql;
