## Documentação do Projeto
# Nome do Projeto

- Compass Sales

# Descrição
- Este projeto é uma aplicação móvel desenvolvida usando React Native que oferece funcionalidades de autenticação, incluindo registro de usuário, login e recuperação de senha, integrando-se ao Firebase Authentication. 

# Requisitos
- Node.js (16.20.2)
- Firebase (10.4.0)
- Expo CLI (6.3.10)
- Dependências listadas no package.json

# Configuração do Ambiente
- Configure o Firebase com suas credenciais e configure o projeto para usar o Firebase Authentication.
- Certifique-se de ter o ambiente React Native configurado corretamente.

# Instruções de Instalação
- Clone este repositório: git clone https://github.com/seu-usuario/nome-do-repositorio.git
- Navegue até a pasta do projeto: cd nome-do-repositorio
- Instale as dependências: expo install
- Execute o projeto: expo start

# Instruções de Uso
- Após a instalação e execução, você será direcionado para a tela de registro "SignUp".
- Caso tenha uma conta clique em "Already have an account"
- Caso contrário, preencha os campos necessários (Nome, Email, Senha) e clique em "SIGN UP" para criar uma conta.
- Se você já possui uma conta, preencha os campos de Email e Senha e clique em "LOGIN" para entrar.
- Se esqueceu sua senha, clique em "Forgot your password?" para redefinir sua senha.
- Preencha o campo email e averigue no próprio o recebimento do email para redefinição de senha.
- Após entrar, basta clicar em LogOut para sair, caso deseje.

# Estrutura do Projeto
- src: Pasta principal do código-fonte.
- pages: Contém as páginas da aplicação (SignUp, Login, ForgotPassword, Home).
- services: Configurações e serviços relacionados ao Firebase.
- Routes: contém o esquema de navegação do app.

# Funcionalidades
- Registro de usuário com validação de email e senha.
- Login de usuário com validação de email e senha.
- Recuperação de senha através do email.

# Colaboradores
- Luiz Gustavo Virgens Matos - Desenvolvedor de todo o projeto até o momento

# Notas de Versão
- Versão 1.0.0
- Recursos iniciais de autenticação e tela inicial.

# Referências
- Firebase Authentication: https://firebase.google.com/docs?authuser=0&hl=pt-br
- Expo: https://docs.expo.dev/
