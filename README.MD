<h1>Hat Framework - Skeleton Package</h1>

</h2>INSTALAÇÃO DO HAT</h2>

1º Configure o servidor local para acessar o site por uma url diferente de localhost;

2º Certifique-se que a url criada não exista nenhuma pasta de mesmo nome dentro da pasta p;

3º Certifique-se que seu Apache possua os seguintes módulos instalados: Rewrite, Mcript, PHP5. NO PHP os 
seguinte módulos: Curl, ZIP, ;

4º Crie um banco de dados com usuário e senha (obrigatório);

5º Entre em http://url_where_hat_is/admin/install.php e siga as instruções.

INSTALAÇÃO DO COMPOSER NO WINDOWS

1 – Clique com o botão direito em Meu Computador

2 – Propriedades

3 – Configurações Avançadas ou Aba Avançado

4 – Variáveis de Ambiente

5 – Procure e clique em “Path” e depois no botão “Editar”

6 – Adicione ao final do que estiver lá o caminho do php: ; c:\CAMINHO\PARA\wamp\bin\php\phpVERSAO

7 – ok, ok, ok

8 – Reinicie o computador. (se precisar)

9 - Entre no Prompt de Comando

10 - Digite cd CAMINHOONDEESTÁOHAT

11 - C:\bin>php -r "readfile('https://getcomposer.org/installer');" | php

12 - php composer.phar update

</h2>INSTALAÇÃO DO BOWER (Javascript)</h2>

1) Instalação linux (centos): 

sudo yum install gcc-c++
sudo yum install openssl-devel
wget http://nodejs.org/dist/node-v0.4.2.tar.gz (Pick the stable version available)
tar -zxvf node-v0.4.2.tar.gz
cd node-v0.4.2
export JOBS=2
./configure
make
sudo make install
sudo su
vi /etc/sudoers (We add node to the path of the sudo)
Find and edit the line “Defaults secure_path …” and add “:/usr/local/bin” to the end of the path
curl -L http://npmjs.org/install.sh | sudo sh

2) Instalação Windows,Mac e Ubuntu -> http://howtonode.org/how-to-install-nodejs

3) - Digite sudo npm install bower

4) - Digite sudo npm install bower-require

5) - Digite sudo bower update -Y --allow-root