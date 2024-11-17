# Power Plan Showdown

## Tutorial Detalhado de Instalação e Execução

### Pré-requisitos

1. **Node.js e npm**
   - Instale o Node.js através do [site oficial](https://nodejs.org/)
   - Verifique a instalação abrindo o terminal e digitando:
     ```
     node --version
     npm --version
     ```

2. **Git**
   - Instale o Git através do [site oficial](https://git-scm.com/)
   - Verifique a instalação:
     ```
     git --version
     ```

### Passo a Passo para Execução

1. **Clone o Repositório**
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd powerplan-showdown
   ```

2. **Instale as Dependências**
   ```bash
   npm install
   ```

3. **Execute o Programa**
   ```bash
   npm run dev
   ```
   - Aguarde alguns segundos até que a janela do aplicativo abra
   - Se não abrir automaticamente, acesse http://localhost:5173 no navegador

### Funcionalidades Principais

1. **Comparação de Planos de Energia**
   - Selecione dois planos de energia diferentes
   - Compare o desempenho entre eles
   - Visualize gráficos detalhados de comparação

2. **Benchmark do Sistema**
   - Execute testes de benchmark completos
   - Analise o desempenho do CPU, GPU e memória
   - Compare resultados entre diferentes planos de energia

### Resolução de Problemas Comuns

1. **Erro ao Instalar Dependências**
   - Limpe o cache do npm:
     ```bash
     npm cache clean --force
     ```
   - Delete a pasta node_modules e reinstale:
     ```bash
     rm -rf node_modules
     npm install
     ```

2. **Erro ao Executar o Programa**
   - Verifique se todas as portas necessárias estão livres
   - Certifique-se de que o Node.js está atualizado
   - Execute como administrador se necessário

3. **Problemas de Permissão**
   - No Windows, execute o PowerShell como administrador
   - No Linux/Mac, use sudo se necessário

### Suporte

Se encontrar algum problema:
1. Verifique as issues no GitHub
2. Crie uma nova issue detalhando o problema
3. Inclua logs de erro e passos para reproduzir o problema

## Project info

**URL**: https://lovable.dev/projects/dcd1d695-f0c1-4c8b-8894-f02cb8a636f9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/dcd1d695-f0c1-4c8b-8894-f02cb8a636f9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/dcd1d695-f0c1-4c8b-8894-f02cb8a636f9) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
