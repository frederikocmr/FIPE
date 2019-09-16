# Desafio React Native - Liber

## **Detalhes da Solução**

Diante da implementação feita neste projeto, posso dizer que a minha metodologia de abordagem diante das regras foi a seguinte:

- Primeiramente criei a base da aplicação e instalei os componentes básicos que pensei ser necessário, tais como configuração do ESLint junto com o prettier para forçar a estilização e as boas práticas de implemetação. Utilizei o Reactotron para debugar de forma mais fácil.

- Após isto, comecei inicializando a estruturura do sistema, onde foi criado uma pasta "src" para centralizar todos os documentos desenvolvidos e manter uma melhor organização estrutural, criando as pastas de páginas, serviços, utilitários, configuração e dos "assets".

- O primeiro ponto chave que abordei para manter um foco inicial foi na interface, então criei páginas e os componentes que achei necessário afim de replicar a interface proposta, utilizando a biblioteca Styled Components que visa facilitar a questão de estilização por poder usar estilos nativos do CSS, evitar criar um arquivo para cada componente e centralizar os componentes que serão somente estilizados em uma determinada página. Ao implementar toda a interface criei já o modelo de como seriam os dados, para também padronizar e não ter problemas futuros ao chamar a API.

- Após terminado a interface visual, comecei a implementar o consumo da API utilizando o Axios. Para algumas regras foram criadas funções definidas na pasta de utilitários, e outras regras tentei seguir um padrão mais limpo e manter tudo no arquivo do componente, que foi feito seguindo o modelo de classe.

- Para a renderização dos dados, utilizei o componente FlatList inicialmente mas depois tive que trocar para o ScrollView, pois criei uma função específica para renderizar cada item e ter um melhor acesso a aqueles dados sem que houvesse algum compromentimento no desempenho e também no visual quando os itens estão carregando.

- Os testes foram todos feitos no Android, utilizando a última versão no modelo Pixel 3, na API 28.

- Consegui tratar todas as informações e replicar as telas propostas, foi um desafio complexo a partir do momento que percebi que os dados da API Rest viriam sem paginação, ou seja, vários dados a serem tratados e também várias requisições a serem feitas. Para isso eu me preocupei com o desempenho, porém não foi possível fazer uma paginação por conta da requisição trazer todos os dados, e de ter que pegar os dados dos valores dos carros para colocar na listagem principal, ou seja, teria que acessar os modelos, anos, para depois pegar essa informação, então aproveitei e já montei o objeto completo em uma única vez.
- Foi criado também os loadings na listagem e também na busca. A busca é feita de forma dinâmica, na medida que o usuário digita um valor, ele consegue buscar instantaneamente.

## **Execução**

- Os passos após ter clonado e baixado todos os arquivos pelo Git são:

- Certifique-se de que tenha o NodeJS instalado.

- Instalar todas as dependencias com: `yarn` ou `npm install` dependendo do gerenciador de pacotes instalados (recomendo o yarn).

- Para rodar no Android, certifique-se de que esteja com o ambiente do Android instalado, como SDK do Android, JDK8 uma Virtual Device do Android e rodando. Ou somente tenha um dispositivo conectado pelo USB com o modo Debug ativado.

- Do mesmo modo, para rodar no iOS, certifique-se de que esteja com todos os requisitos de ambiente instalados e o XCode rodando com um dispositivo virtual.

- Execute os comandos: `react-native run-android` ou `react-native run-ios` dependendo do dispositivo disponível.

* Recomendável instalar o CLI do React Native globalmente.
