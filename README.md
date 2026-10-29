# Eu Sou o Presidente

Aplicacao web desenvolvida com Next.js para geracao de documentos oficiais e pronunciamentos presidenciais fakes, com suporte a multiplos templates, upload de brasoes via Cloudinary, persistencia local (LocalStorage), template inicial carregado do MongoDB e exportacao fiel para PDF (formato A4).

## Tecnologias Utilizadas

- **Framework:** Next.js (App Router, TypeScript)
- **Estilizacao:** Tailwind CSS & shadcn/ui
- **Banco de Dados:** MongoDB / Mongoose (para o template inicial oficial)
- **Gerenciamento de Imagens:** Cloudinary API
- **Exportacao de PDF:** html2canvas & jsPDF

## Requisitos de Sistema

- Node.js 18+ instalado
- Conta e credenciais do Cloudinary
- Instancia do MongoDB (local ou Atlas)

## Variaveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto baseado no `.env.example`:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGODB_URI=mongodb://localhost:27017/eusouopresidente
```

## Como Executar o Projeto

1. Instale as dependencias:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse a aplicacao no navegador:
```text
http://localhost:3000
```

## Funcionalidades Principais

- **Templates Dinamicos:** Alterne entre Republica do Brasil, Imperio do Brasil e Presidencia Corporativa.
- **Autosave Local:** Suas alteracoes sao salvas automaticamente no navegador do usuario via LocalStorage.
- **Assinatura Manuscrita:** Renderizacao automatica da assinatura com fonte caligrafica no documento oficial.
- **Exportacao para PDF:** Geracao de documento A4 pronto para download mantendo rigoroso padrao visual.
