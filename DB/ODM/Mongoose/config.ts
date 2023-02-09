// uma das maneiras de utilizar, pe criando um arquivo para usitlizarmos o método conect()
import { connect } from 'mongoose'

  const options = {
  user: 'user', // Usuário do banco de dados.
  pass: 'password', // senha do usuário do banco de dados.
  dbName: 'trixDB', // Define qual banco de dados você irá utilizar.
};

connect('mongodb://localhost:27017/', options); // exemplo rodando localmente

// ou, segundo a documentação, diretamente com o comando 
// mongoose.connect('mongodb://username:password@host:port/database?options...');
