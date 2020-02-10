module.exports = {
  presets: [
    "@babel/preset-env", 
    // responsavel por transformar funcionalidades que o navegador não entende. Ex: import/export, Arrow Functions, Classes
    "@babel/preset-react" 
    // transformar o que o navegador não entende do React. Ex: JSX
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};