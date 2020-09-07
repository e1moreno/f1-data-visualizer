module.exports = {
  '**/*.{css,gql,graphql,html,json,md,mdx,yaml,yml': [
    'prettier --write --ignore-path ./.eslintignore',
    'git add',
  ],
  '**/*.{js,jsx,ts,tsx}': [
    'prettier --write --ignore-path ./.eslintignore',
    "eslint --cache --ext '.js,.jsx,.ts,.tsx' --fix",
    'git add',
  ],
};
