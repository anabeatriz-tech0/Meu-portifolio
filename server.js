const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração do banco
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'meu_sistema'
};

// Testar conexão com o banco
async function testarBanco() {
    try {
        const conexao = await mysql.createConnection(dbConfig);
        console.log('✅ Banco conectado com sucesso!');
        await conexao.end();
    } catch (erro) {
        console.log('❌ Erro ao conectar ao banco:', erro.message);
    }
}

testarBanco();


// ===============================
// LOGIN
// ===============================

app.post('/login', async (req, res) => {

    const { email, senha } = req.body;

    try {

        const conexao = await mysql.createConnection(dbConfig);

        const [usuarios] = await conexao.execute(
            'SELECT * FROM usuarios WHERE email = ?',
            [email]
        );

        await conexao.end();


        // Usuário não encontrado
        if (usuarios.length === 0) {

            return res.status(401).json({
                sucesso: false,
                mensagem: 'Usuário não encontrado!'
            });

        }


        const usuario = usuarios[0];


        // Senha correta
        if (senha === usuario.senha) {

            return res.json({
                sucesso: true,
                mensagem: 'Login realizado com sucesso!'
            });

        }


        // Senha incorreta
        return res.status(401).json({
            sucesso: false,
            mensagem: 'Senha incorreta!'
        });


    } catch (erro) {

        console.log('❌ Erro:', erro);

        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao conectar com o servidor.'
        });

    }

});


// ===============================
// SERVIDOR
// ===============================

app.listen(3000, () => {

    console.log('🚀 Servidor Node rodando na porta 3000');

});