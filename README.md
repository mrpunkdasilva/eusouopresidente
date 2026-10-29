# Eu Sou o Presidente

Gerador de pronunciamentos e documentos oficiais em formato A4. Escolha um template, edite o texto, troque o brasão e exporte um PDF com aparência de documento oficial.

> Projeto de humor. Nenhum documento gerado possui validade oficial.

## Funcionalidades

- Templates prontos: República do Brasil, Império do Brasil e Presidência Corporativa.
- Upload de brasão salvo no navegador via `localStorage` (sem Cloudinary).
- Imagem redimensionada para até 512px e convertida em data URL antes de ser salva.
- Assinatura manuscrita com fonte Dancing Script.
- Exportação em PDF A4 com múltiplas páginas, logo embutida e sem página extra em branco.
- Prévia fiel ao documento final.
- Autosave de todo o conteúdo no navegador.
- Templates iniciais carregados do MongoDB (quando configurado).

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui + Base UI
- MongoDB + Mongoose
- html2canvas-pro + jsPDF
- Lucide React

## Estrutura

```text
src/
├── app/
│   ├── api/
│   │   ├── documents/     # Template inicial no MongoDB
│   │   ├── image-proxy/   # Proxy para brasões externos no PDF
│   │   └── upload/        # Rota legada do Cloudinary (não usada pelo editor)
│   ├── layout.tsx         # Metadados, fontes e layout global
│   ├── page.tsx           # Editor, prévia e exportação em PDF
│   └── globals.css
├── components/ui/         # Componentes shadcn/ui
├── lib/                   # Conexões e utilitários
└── models/                # Modelos do Mongoose
```

## Como rodar

Requisitos: Node.js 20+ e uma instância do MongoDB (local ou Atlas).

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variáveis de ambiente

Crie `.env.local` a partir de `.env.example`.

```env
MONGODB_URI=mongodb://localhost:27017/eusouopresidente
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

- `MONGODB_URI`: usado para carregar o template inicial.
- `NEXT_PUBLIC_SITE_URL`: URL pública usada nos metadados, canonical e Open Graph.

As variáveis do Cloudinary no `.env.example` pertencem à rota legada `/api/upload` e não são necessárias para o fluxo atual de upload.

## Scripts

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # ESLint
```

Para checar os tipos:

```bash
npx tsc --noEmit
```

## Upload do brasão

A imagem escolhida no editor:

1. É lida localmente no navegador.
2. É redimensionada para no máximo 512px.
3. É convertida para PNG em data URL.
4. É salva em `localStorage` junto com o restante do documento.

Nada é enviado para o Cloudinary nesse fluxo. A imagem permanece no mesmo navegador e pode ser usada na prévia e no PDF.

## Exportação do PDF

A exportação usa `html2canvas-pro` para capturar o documento e `jsPDF` para gerar o arquivo A4.

- O brasão é embutido como PNG antes da captura.
- As fontes são carregadas antes do snapshot.
- O espaço em branco no final é removido para evitar página extra.
- Documentos longos são divididos automaticamente em várias páginas A4.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Configure as variáveis de ambiente de produção:
   - `MONGODB_URI` com a connection string do MongoDB Atlas.
   - `NEXT_PUBLIC_SITE_URL` com a URL final do projeto.
3. Faça o deploy.

Para provisionar o MongoDB Atlas pelo Vercel Marketplace, adicione a integração ao projeto e conecte o banco em **Storage → MongoDB Atlas**. A integração cria as variáveis de ambiente automaticamente.

## Observações

- Os dados do editor ficam no `localStorage`, então não são sincronizados entre navegadores ou dispositivos.
- O MongoDB armazena apenas o template inicial; as edições do usuário não são enviadas para o banco.
- Limpar os dados do navegador ou usar o botão **Restaurar Original** descarta as alterações locais.
