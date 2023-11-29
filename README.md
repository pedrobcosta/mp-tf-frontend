# Frontend do trabalho final da disciplina de Métodos de Programação
## Executando o projeto
Para subir o projeto, execute os passos abaixo:

1 - Clonando o projeto
```sh
$    git clone git@github.com:pedrobcosta/mp-tf-frontend.git
``` 
ou 
```sh
$    git clone https://github.com/pedrobcosta/mp-tf-frontend.git
```
2 - Certifique-se de ter o Node 16 instalado

Execute
```sh
$    node -v
```
A versão deve ser igual ou superior a 16.13.x

Caso contrário instale o node 16: https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos

Você pode usar o nvm pra alternar entre várias versões do node: https://codedamn.com/news/nodejs/nvm-installation-setup-guide

Basta instalar o nvm e executar
```sh
$    nvm install 16
```
```sh
$    nvm use 16
```

3 - instalando dependencias
```sh
$    cd mp-tf-frontend
```
```sh
$    npm install
```

4 - Subindo o projeto
```sh
$    npm start
```

* Basta acessar o endereço `http://localhost:4200`
* Caso não tenha o `ng` instalado, basta executar o seguinte comando para instalar:
```sh
$    npm install -g @angular/cli@15
```

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
