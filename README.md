yarn init
yarn add @babel/cli -D
yarn add @babel/preset-env -D
yarn add @babel/core -D
yarn add @babel/plugin-proposal-object-rest-spread -D
yarn add webpack webpack-cli -D (to be able to run multiple js files)
yarn add babel-loader@8.0.0-beta.0 -D
yarn add webpack-dev-server -D
yarn add @babel/plugin-transform-async-to-generator -D
yarn add @babel/polyfill -D
yarn add axios
mkdir src
	main.js
	api.js
mkdir public
	index.html
touch webpack.config.js
touch .gitignore (add node_modules/)
touch .babelrc (config for babel)
add scripts to package.json
run yarn dev