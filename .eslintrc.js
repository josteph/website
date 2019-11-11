module.exports = {
  extends: ['react-app'],
  parser: 'babel-eslint',
  globals: {
    __PROD__: true,
    __DEV__: true,
  },
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      jsx: true,
      legacyDecorators: true,
      objectLiteralDuplicateProperties: false,
    },
  },
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks', 'flowtype'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    // Although this is handled by Prettier, unexpected multi-line can cause problem with automatic semicolon insertion (ASI), which may lead to bug, so this rule is still activated. Auto-format by Prettier should auto-fix most "unexpected multiline" cases.
    'no-unexpected-multiline': 'error',

    // Unreachable code may indicate typo or unfinished refactor. Both causes maintenance burden.
    'no-unreachable': 'error',

    // Control flow statement (such as "return") inside `finally` may work not as expected.
    'no-unsafe-finally': 'error',

    // Unsafe negation may lead to bug.
    'no-unsafe-negation': 'error',

    'no-unused-expressions': ['error', { allowTaggedTemplates: true, allowShortCircuit: true }],

    // Unused code will increase maintenance burden.
    'no-unused-labels': 'error',

    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

    'no-useless-catch': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'off',

    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],
    'jsx-a11y/anchor-has-content': ['error', { components: [] }],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': ['error', { ignoreNonDom: false }],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/heading-has-content': ['error', { components: [''] }],
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],
    'jsx-a11y/lang': 'error',
    'jsx-a11y/media-has-caption': [
      'error',
      {
        audio: [],
        video: [],
        track: [],
      },
    ],
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: ['marquee', 'blink'],
      },
    ],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',

    'prettier/prettier': 'error',

    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
    'react/display-name': 'off',
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',

    // setState in `componentDidMount` usually is used in server-rendering.
    'react/no-did-mount-set-state': 'off',
    // No setState in `componentWillUpdate` because `cWU` is supposed to be idempotent.
    'react/no-will-update-set-state': 'error',
    // Make sure developer don't forget to put condition in `componentDidUpdate` so the component doesn't re-render infinitely.
    'react/no-did-update-set-state': 'off',

    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'off',
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/prefer-es6-class': ['error', 'always'],
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
      },
    ],
    'react/require-render-return': 'error',

    // For styling only. When debugging or developing, non-self closing component may even be preferred because developer only need to change fewer things.
    'react/self-closing-comp': 'off',

    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: true,
        callbacksLast: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
};
