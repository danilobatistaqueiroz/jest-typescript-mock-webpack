Para usar Typescript em projetos web temos inicialmente dois problemas:

* Qual sistema de módulos utilizar para carregar os arquivos JavaScript?
* Como organizar os arquivos de bibliotecas para usar somente os arquivos necessários?

Para retrocompatibilidade precisamos utilizar o CommonJS.  
Mas mesmo trabalhando com ES6 Modules e se temos várias bibliotecas de terceiros a usar? Queremos uma forma simples para invocar estas bibliotecas e colocar no projeto apenas os arquivos necessários do projeto.

O TypeScript apenas converterá os arquivos .ts para .js para a EcmaScript especificada e 
ficará por sua conta ter um carregamento de módulos funcionando no browser: AMD, CommonJS, ES6 Modules e etc.

Por conta disso, uma das melhores abordagens é utilizar o Webpack.  


## Instalação

* Node.js
* Faça o clone do projeto
* Execute o comando ```npm install```

## Rodar o projeto

* ```npm start``` - Compila o TypeScript e roda um servidor em http://localhost:9000 para testar o projeto.
* ```npm run dev``` - Compila o TypeScript em modo desenvolvimento.
* ```npm run prod``` - Compila o TypeScript em modo produção.



## Configurando o Jest para Typescript

`npm install --save-dev jest`
`npm install --save-dev babel-jest @babel/core @babel/preset-env`
`npm install --save-dev @babel/preset-typescript`
`npm i -D ts-jest @types/jest`

criar o arquivo **babel.config.js**

configurar o **package.json** para rodar o teste:  
```javascript
  "scripts": {
    "test": "jest --coverage",
```

rodar o teste com: `npm test`



## Configurando o Jest para utilizar Mock  

https://stackoverflow.com/a/62959586/935330


____




<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://fullcycle.com.br/wp-content/themes/fullcycle-blog/application/img/logo-fullcycle.png"/></a>
</p>
