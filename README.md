# Cognito & CASL

Existe muita dúvida de como gerenciar de forma eficiente os usuários das aplicações, sem ser naquele arcaico e velho formato do banco de dados. Além disso, uma das grandes preocupações que permeia esse dilema de federação, baseia-se em como fazer isso sem expor credenciais de segurança.

Pensando nisso, construi uma aplicação template para que, a partir dele, você possa ter uma base de como sanar a maior parte desses dilemas e se preocupar com a regra de negócio que sua aplicação precisa executar.

## Arquitetura do projeto

Os principais recursos que irão nos apoiar no gerenciamento dos usuários de nossa aplicação são:

- GitHub:
  - Controle de versionamento e features do projeto.
- CloudFormation:
  - Utilizado para criar toda a infraestrutura necessária para o projeto, por meio de código.
- CodePipeline:
  - Gerenciamento da pipeline de CI/CD para o build e deploy da aplicação React.
- CodeBuild:
  - Recurso para realização dos comandos de testes e build da aplicação.
- S3:
  - Hospedagem dos arquivos estáticos, gerados no build da plataforma React.
- Amplify:
  - Interface de interação com os métodos de gerenciamento dos usuários Cognito;
  - Interação com a camada de API, passando todos os parâmetros necessários para consumo.
- Cognito:
  - Recurso responsável pela federação dos usuários.

Veja a arquitetura abaixo para esclarecer as conexões entre os recursos:

![Arquitetura AWS](https://github.com/gugamainchein/cognito-casl/blob/master/docs/arquitetura/arquitetura.png?raw=true)

## Custo envolvido

Como você deve saber, os recursos AWS cobram por utilização e é importante trazermos essa visão de custo envolvido na arquitetura apresentada, pois esse tema pode tornar-se um fator de tomada de decisão da viabilidade técnica e de negócio da aplicação.

- São Paulo:
  - $ 2.55 / mês
- Norte Virgínia:
  - $ 1.48 / mês

O link da calculadora, você pode encontrar [clicando aqui][calc-aws]

## Instalação

Dado todo cenário de recursos e custos envolvidos, para essa aplicação, estamos utilizando o ReactJS, baseado na arquitetura Typescript. Portanto, é necessário que você possua o [NodeJS][nodejs] instalado.

Após a instalação do NodeJS e a conta AWS preparada para utilização, basta executar os comandos abaixo para iniciar o projeto.

Clonando o repositório e entrando na pasta:

```sh
git clone https://github.com/gugamainchein/cognito-casl
cd cognito-casl
```

Instalando dependências e executando o projeto:

```sh
yarn
yarn start
```

Criando a infraestrutura no CloudFormation:

1. Inicie a criação da stack [clicando aqui][infra-path];
2. Faça o upload do arquivo YML, que encontra-se na pasta `/docs/iac/template.yml`.

## Variáveis de ambiente

Após a criação dos recursos da infraestrutura e a inicialização do projeto com sucesso, você está pronto para integrá-lo com os recursos de sua conta AWS, por meio do passo-a-passo abaixo:

- REACT_APP_IDENTITY_POOL_ID:
  ![Parâmetro env REACT_APP_IDENTITY_POOL_ID](https://github.com/gugamainchein/cognito-casl/blob/master/docs/environments/screen-identity-pool.jpeg?raw=true)

- REACT_APP_AWS_REGION:
  ![Parâmetro env REACT_APP_AWS_REGION](https://github.com/gugamainchein/cognito-casl/blob/master/docs/environments/screen-aws-region.jpeg?raw=true)

- REACT_APP_USER_POOL_ID:
  ![Parâmetro env REACT_APP_USER_POOL_ID](https://github.com/gugamainchein/cognito-casl/blob/master/docs/environments/screen-user-pool.jpeg?raw=true)

- REACT_APP_USER_POOL_WEB_CLIENT_ID:
  ![Parâmetro env REACT_APP_USER_POOL_WEB_CLIENT_ID](https://github.com/gugamainchein/cognito-casl/blob/master/docs/environments/screen-client-id.jpeg?raw=true)

- REACT_APP_COGNITO_DOMAIN:
  ![Parâmetro env REACT_APP_COGNITO_DOMAIN](https://github.com/gugamainchein/cognito-casl/blob/master/docs/environments/screen-cognito-domain.jpeg?raw=true)

- REACT_APP_WEB_CLIENT_REDIRECT_URL:
  ![Parâmetro env REACT_APP_WEB_CLIENT_REDIRECT_URL](https://github.com/gugamainchein/cognito-casl/blob/master/docs/environments/screen-client-redirect.jpeg?raw=true)

## Histórico de mudanças

- 0.0.1
  - Work in progress

## Sobre o criador

Gustavo Mainchein – [@gugamainchein](https://twitter.com/dbader_org) – gustavomainchein@outlook.com

[Veja mais sobre mim](https://github.com/gugamainchein)

## Faça sua contribuição

1. Realise o fork do projeto (<https://github.com/gugamainchein/cognito-casl/fork>)
2. Crie a nova feature em uma branch (`git checkout -b feature/fooBar`)
3. Faça o commit das suas mudanças (`git commit -am 'Add some fooBar'`)
4. Realize o push para a branch (`git push origin feature/fooBar`)
5. Crie um novo pull request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://docs.npmjs.com/cli/v8
[nodejs]: https://nodejs.org/en/
[calc-aws]: https://calculator.aws/#/estimate?id=82b1ba2039c4ad90dd1930c3cbcf00f3f3b521cd
[infra-path]: https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/template?stackName=cognito-casl
