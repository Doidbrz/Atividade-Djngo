# **Gerenciamento de Estoque de Produtos**

Este projeto é uma aplicação web de gerenciamento de estoque de produtos, construída utilizando o framework Django para o backend e React para o frontend. A aplicação oferece funcionalidades de CRUD (Criar, Ler, Atualizar e Excluir) para gerenciar os produtos no estoque.

## **Tecnologias Utilizadas**

- **Backend**: Django + Django REST Framework
- **Frontend**: React + Tailwind CSS
- **Banco de Dados**: SQLite (utilizado para desenvolvimento e testes)
- **Axios**: para comunicação entre o frontend e o backend

---

## **Visão Geral do Projeto**

O sistema de gerenciamento de estoque permite aos usuários:
- **Listar produtos**: Exibir todos os produtos cadastrados no estoque.
- **Adicionar produtos**: Inserir novos produtos no estoque.
- **Atualizar produtos**: Alterar as informações de produtos existentes.
- **Excluir produtos**: Remover produtos do estoque.

---

## **Estrutura do Backend (Django)**

O backend foi desenvolvido utilizando o Django, com o Django REST Framework para criar as APIs RESTful. A aplicação oferece funcionalidades de CRUD através das seguintes rotas:

### **Endpoints Disponíveis**

1. **GET `/api/products`**: Retorna a lista de todos os produtos ou filtra por nome.
2. **POST `/api/products`**: Cria um novo produto no estoque.
3. **PUT `/api/products/{id}`**: Atualiza os dados de um produto existente.
4. **DELETE `/api/products/{id}`**: Exclui um produto do estoque.

### **Modelos**

O modelo `Product` foi criado para representar os produtos no banco de dados com os seguintes campos:

- `name`: Nome do produto.
- `description`: Descrição do produto.
- `qty_stock`: Quantidade em estoque.
- `price`: Preço do produto.
- `added_date`: Data de adição do produto ao estoque.

### **Serializers**

O `ProductSerializer` foi criado para converter os dados do modelo `Product` em formato JSON e vice-versa. Este serializer foi utilizado para realizar as operações de GET, POST, PUT e DELETE.

---

## **Estrutura do Frontend (React)**

O frontend foi desenvolvido utilizando React, com a estilização feita via Tailwind CSS para garantir um design limpo e responsivo.

### **Componentes Principais**

- **ProductList**: Exibe a lista de produtos cadastrados.
- **ProductItem**: Exibe as informações de um único produto e inclui os botões de editar e excluir.
- **ProductForm**: Formulário para adicionar ou editar produtos, permitindo alterar os dados dos produtos ou cadastrar novos itens.

### **Funcionalidades Implementadas**

- **Listagem de Produtos**: Exibe todos os produtos cadastrados no estoque.
- **Adicionar Produto**: Permite ao usuário adicionar novos produtos ao estoque.
- **Editar Produto**: Permite ao usuário editar as informações de um produto já existente.
- **Excluir Produto**: Cada produto na lista tem um botão para ser excluído.
- **Atualização Automática**: Após adicionar ou excluir um produto, a lista é atualizada automaticamente sem a necessidade de recarregar a página.

---

## **Processo de Desenvolvimento**

### **1. Planejamento**

O desenvolvimento foi dividido em três etapas principais:

1. **Configuração do Backend**:
   - Criação do modelo `Product`.
   - Implementação dos endpoints para operações CRUD.
   - Configuração do Django REST Framework para facilitar a comunicação com o frontend.

2. **Desenvolvimento do Frontend**:
   - Criação de componentes React para listar, adicionar, editar e excluir produtos.
   - Integração com o backend utilizando Axios para realizar requisições HTTP.

3. **Estilização com Tailwind CSS**:
   - Utilização do Tailwind CSS para garantir uma interface bonita, responsiva e de fácil navegação.

### **2. Desafios e Soluções**

- **Atualização Automática da Página**: Inicialmente, a página não atualizava automaticamente após adicionar ou excluir um produto. A solução foi implementar a atualização da lista de produtos diretamente no frontend, sem a necessidade de recarregar a página manualmente.
  
- **Erros de Comunicação entre Frontend e Backend**: Durante o desenvolvimento, houve problemas com as rotas da API e configurações de CORS. Após ajustes nas rotas e configuração do Django para aceitar requisições do frontend, os problemas foram resolvidos.

---

## **Instruções para Execução do Projeto**

- **Backend (Django)**
#### **Instalar dependências**:
Navegue até a pasta do backend e instale as dependências com o comando:

- **pip install -r requirements.txt**

Para iniciar o servidor de desenvolvimento, utilize:

- **python manage.py runserver**

O backend estará rodando em http://127.0.0.1:8000/.

- **Frontend (React)**
#### **Instalar dependências**:
Navegue até a pasta do frontend e instale as dependências com o comando:

- **npm install**

#### **Rodar o servidor**:
Para iniciar o servidor de desenvolvimento, utilize:

- **npm start**

O frontend estará disponível em http://localhost:3000/
