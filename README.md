<h2>TegraFood-API</h2>
<p>Projeto desenvolvido usando as seguintes Tecnologias:</p>
<ul>
  <li>Node/Express</li>
   <li>Typescript</li>
   <li>Multer</li>
   <li>Sequelize/Sqlite</li>
  </ul>
  <hr/>
  <h3>Rotas</h3>
  <ul>
      <li>GET :'/products': eadpoint de produtos</li>
      <li>POST :'/products': eadpoint adição de produto</li>
      <li>GET :'/products/:id': eadpoint de produto</li>
      <li>PUT:'products/:id': eadpoint de atualizar produto</li>
      <li>DELETE:'products/:id': eadpoint de deletar produto</li>
   </ul>
   <hr/>
    <h3>Como rodar a api</h3>
    <p>Essa api não está hospedada em nenhum lugar,você pode roda-la na sua própria máquina seguindo o passo á passo:</p>
    <ul>
        <li>Clone o repositório na sua máquina e rode o comando 'npm install'</li>
        <li>.env: Crie esse arquivo e adicione uma variável chamada <strong>PORT:5000</strong></li>
        <li>Rode o comando 'npm start-dev' para rodar o servidor</li>
        <li>Acesse no seu navegador a rota :'http://localhost:{PORT}/products</li>
        </ul>