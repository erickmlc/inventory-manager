# Inventory Manager

> Sistema full-stack para gerenciamento de estoque com arquitetura desacoplada, foco em performance e controle total sobre o fluxo da aplicação sem uso de frameworks.

## Sobre o Projeto

O Inventory Manager é um sistema acadêmico desenvolvido para gerenciar dados de estoque de forma estruturada e escalável, sem depender de frameworks ou bibliotecas externas.

O projeto resolve o problema de organização e manipulação de dados de inventário, oferecendo uma API REST completa para operações CRUD em múltiplas entidades como produtos, categorias, fabricantes e estoque.

Os usuários do sistema são responsáveis por modificar diretamente os dados do banco através da API.

O principal objetivo do projeto é demonstrar domínio de arquitetura de software, separação de responsabilidades e construção de aplicações performáticas utilizando apenas recursos nativos.

## Funcionalidades

- Cadastro de entidades (itens, categorias,  fabricantes, locais, estoque)
- Atualização de dados
- Remoção de registros
- Consulta detalhada por ID
- Listagem completa de dados

## Tecnologias Utilizadas

### Backend

- Node.js
- PostgreSQL (via Supabase)

### Frontend

- JavaScript puro
- CSS puro

### Ferramentas

- Postman (testes da API)
- Git (versionamento)

## Integrações

### Supabase

- Banco de dados PostgreSQL
- Comunicação via backend

## Decisões Técnicas

### Node.js puro

O backend foi desenvolvido utilizando apenas recursos nativos do Node.js, com a criação de uma camada HTTP customizada inspirada no Express.

Essa abordagem foi escolhida para:

- Ter controle total sobre o fluxo da aplicação
- Evitar abstrações desnecessárias
- Demonstrar conhecimento profundo da stack

### Supabase (PostgreSQL)

O Supabase foi utilizado exclusivamente como banco de dados PostgreSQL.

O acesso é feito 100% via backend, garantindo:

- Maior controle sobre regras de negócio
- Segurança na manipulação dos dados
- Centralização da lógica da aplicação
- Maior velocidade de desenvolvimento

## Arquitetura do Projeto

O projeto segue uma arquitetura em camadas inspirada em Clean Architecture e princípios de DDD (Domain-Driven Design).

**Objetivos principais:**

- Garantir separação clara de responsabilidades
- Reduzir acoplamento entre módulos
- Permitir evolução independente de camadas
- Melhorar legibilidade e onboarding de novos desenvolvedores

**Fluxo da aplicação:**

Controller → Use Case → Repository → Banco de Dados

**Detalhamento:**

1. O Controller recebe a requisição
1. Valida e transforma os dados
1. Executa um Use Case
1. O Use Case acessa um Repository (interface do Domain)
1. A implementação concreta (Infrastructure) acessa o banco
1. O resultado percorre o caminho inverso até a resposta

### Estruturas

**Backend**

```yaml
backend/
  src/
    application/        # Casos de uso
    config/             # Configurações globais
    domain/
      shared/
        errors/         # Erros de domínio
        validators/     # Validações reutilizáveis
    infrastructure/
      base/             # Classes base (ex: base repository)
      database/
        mappers/        # Conversão entre domínio e banco
        models/         # Modelos do banco
        schemas/        # Schemas do banco
      i18n/
        languages/      # Arquivos de tradução
      integrations/     # APIs externas
      logging/          # Configuração de logs
      routes/           # Definição de rotas
    main/
      modules/          # Composição dos módulos
    presentation/
      helpers/          # Funções auxiliares
      http/
        controllers/    # Controllers HTTP
        middlewares/    # Middlewares
        routes/         # Rotas HTTP
```

**Frontend**

```yaml
frontend/
  src/
    config/             # Configurações globais
    core/
      api/              # Cliente HTTP
      services/         # Serviços base
      utils/            # Utilitários
    features/           # Funcionalidades isoladas
    shared/
      components/       # Componentes reutilizáveis
      constants/        # Constantes globais
      service/          # Serviços compartilhados
      styles/           # Estilos globais
```

**Database**

```yaml
database/
  schemas/              # Definição da estrutura do banco
  seeds/                # Dados iniciais
```

## Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/pt/download)
- [Git](https://git-scm.com/install/)

### Clonando o repositório

```bash
git clone https://github.com/erickmlc/inventory-manager
cd inventory-manager
```

### Backend

**1. Acesse a pasta**

```bash
cd backend
```

**2. Configure as variáveis de ambiente**

Linux / macOS / WSL / Git Bash

```bash
cp .env.example .env
```

Windows (cmd)

```bash
copy .env.example .env
```

> Edite o arquivo `.env` conforme necessário.

**3. Inicie o servidor**

```bash
npm run dev
```

### Variáveis de ambiente

```bash
# Porta do servidor
PORT=5000

# URL completa da conexão com o Supabase
SUPABASE_URL=your_url

# Anon key do serviço do Supabase
SUPABASE_KEY=your_key
```

> Exemplo de variáveis de ambiente [`.env.example`](https://github.com/erickmlc/inventory-manager/tree/main/backend/.env.example)

### Frontend

**1. Acesse a pasta**

```bash
cd frontend
```

**2. Configure as variáveis de ambiente**

Linux / macOS / WSL / Git Bash

```bash
cp .env.example .env
```

Windows (cmd)

```bash
copy .env.example .env
```

**3. Inicie a aplicação**

```bash
npm run dev
```

---

### Variáveis de ambiente

```bash
# Porta da aplicação 
PORT=3000

# URL da API (backend)
API_URL=your_key
```

> Exemplo de variáveis de ambiente [`.env.example`](https://github.com/erickmlc/inventory-manager/tree/main/frontend/.env.example)


## Acessando o projeto

Após iniciar:

- Frontend: http://localhost:3000 (ou porta configurada)
- Backend: http://localhost:5000 (ou porta configurada)

## Uso da API

### Endpoints da API

A API segue o padrão REST, com suporte completo a operações CRUD para todas as entidades.

**Recursos disponíveis:**

- categories
- items
- locations
- manufacturers
- stock

**Métodos suportados:**

- GET → listagem e busca por ID
- POST → criação
- PUT → atualização completa
- PATCH → atualização parcial
- DELETE → remoção

### Estrutura dos recursos

**Categoria**

| Campo        | Tipo   | Obrigatório | Descrição               |
| ------------ | ------ | ----------- | ----------------------- |
| name         | string | ✅          | Nome da categoria       |
| description  | string | ❌          | Descrição da categoria  |

**Item**

| Campo           | Tipo    | Obrigatório | Descrição        |
| --------------- | ------- | ----------- | ---------------- |
| name            | string  | ✅          | Nome do item     |
| category_id     | integer | ✅          | ID da categoria  |
| manufacturer_id | integer | ✅          | ID do fabricante |

**Local**

| Campo        | Tipo   | Obrigatório | Descrição           |
| ------------ | ------ | ----------- | ------------------- |
| name         | string | ✅          | Nome do local       |
| description  | string | ❌          | Descrição do local  |

**Fabricante**

| Campo       | Tipo    | Obrigatório | Descrição                    |
| ----------- | ------- | ----------- | ---------------------------- |
| name        | string  | ✅          | Nome do fabricante           |
| identifier  | integer | ✅          | Identificador do fabricante  |

**Estoque**

| Campo       | Tipo    | Obrigatório | Descrição             |
| ----------- | ------- | ----------- | --------------------- |
| item_id     | integer | ✅          | ID do item            |
| location_id | integer | ✅          | ID do local           |
| quantity    | integer | ✅          | Quantidade em estoque |

## Exemplo de Uso

### Criar item

```bash
curl -X POST http://localhost:5000/items -H "Content-Type: application/json" -d {\"name\":\"Capacete\",\"category_id\":1,\"manufacturer_id\":1}
```


### Buscar item por ID

```bash
curl http://localhost:5000/items/1
```

### Atualizar estoque

```bash
curl -X PATCH http://localhost:5000/stock/1 -H "Content-Type: application/json" -d {\"quantity\":15}
```

## Estrutura padrão de respostas

### Respostas de sucesso

**GET /items/{id}** → retorna um item (objeto)

```json
{
  "id": 1,
  "name": "Capacete",
  "category_id": 1,
  "manufacturer_id": 1
}
```

**GET /items** → retorna lista de itens

```json
[
  {
  "id": 1,
  "manufacturer_id": 1,
  "name": "Capacete",
  "category_id": 1
 },
 {
  "id": 2,
  "manufacturer_id": 2,
  "name": "Mangueira hidráulica",
  "category_id": 2
 },
 {
  "id": 3,
  "manufacturer_id": 3,
  "name": "Bomba de transferência de óleo",
  "category_id": 3
 }
]
```

### Respostas de erro

**GET /recurso-inválido** → retorna objeto de erro

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Recurso não encontrado."
  }
}
```

## Internacionalização (i18n)

A API suporta múltiplos idiomas e retorna mensagens de acordo com a preferência do cliente ou configuração do sistema responsável pela requisição.

### Definição do idioma

O idioma é definido através do header HTTP:

```bash
Accept-Language
```

### Idiomas suportados

- en-US (padrão)
- pt-BR

### Exemplo de requisição

```bash
curl http://localhost:5000/items/999 -H "Accept-Language: en-US"
```

### Resposta (en-US)

```json
{
  "error": {"message": "Resource not found."}
}
```

---

```bash
curl http://localhost:5000/items/999 -H "Accept-Language: pt-BR"
```

### Resposta (pt-BR)

```json
{
  "error": {"message": "Recurso não encontrado."}
}
```

## Limitações atuais

- Sem sistema de login e usuários
- Ausência de autenticação/autorização
- Sem query params
- Sem cache
- Falta de segurança contra ataques
- Ausência de camada de transformação de dados
- Falta de testes automatizados

## Conclusão

O projeto demonstra a construção de uma aplicação full-stack com arquitetura desacoplada, controle explícito do fluxo da aplicação e uso mínimo de abstrações externas.

A decisão de não utilizar frameworks proporcionou maior controle e entendimento da stack, ao custo de maior complexidade na implementação e manutenção de funcionalidades comuns.

A base construída permite evolução incremental do sistema, servindo como fundamento para aplicações mais robustas e próximas de cenários reais.