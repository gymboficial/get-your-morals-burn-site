# GET YOUR MORALS BURN — Official Web App & Press Kit

Site oficial bilíngue da banda **GET YOUR MORALS BURN (G.Y.M.B.)**, de Barretos, SP. Esta exportação foi organizada como um projeto **Vite + React padrão**, sem plugins internos ou dependências específicas do ambiente de origem, para funcionar diretamente no GitHub e na Vercel.

## Estrutura

```text
get-your-morals-burn-site/
├── index.html                 # Entrada padrão do Vite e metatags SEO/Open Graph
├── src/
│   ├── main.tsx               # Montagem do React
│   ├── App.tsx                # Raiz da aplicação
│   ├── Home.tsx               # Página, textos PT/EN, links, players e abertura animada
│   ├── index.css              # Design Ritual de Concreto, responsividade e animações
│   └── lib/showEvents.ts      # Eventos e imagens da galeria
├── public/manus-storage/      # 82 mídias efetivamente usadas pelo site e press kit PDF
├── package.json               # Dependências mínimas e scripts
├── vite.config.ts             # Configuração padrão do Vite
└── vercel.json                # Build e rotas da Vercel
```

## Stack

| Camada | Tecnologia |
| --- | --- |
| Interface | React 19 + TypeScript |
| Build | Vite 7 |
| Estilo | Tailwind CSS 4 + CSS autoral |
| Ícones | Lucide React |
| Deploy | Vercel para projeto estático |

## Instalação local

Use Node.js 20 ou superior. Na pasta do projeto, execute:

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000`. Para validar a produção, use:

```bash
npm run check
npm run build
npm run preview
```

## Como editar

Os textos bilíngues, links oficiais, Reels, player e abertura animada ficam em `src/Home.tsx`. As imagens de eventos ficam mapeadas em `src/lib/showEvents.ts`. Cores, fontes, layout e movimentos ficam em `src/index.css`. Para trocar uma imagem, adicione o arquivo em `public/manus-storage/` e atualize o caminho correspondente no código.

As metatags de SEO, o favicon, Open Graph e Twitter Card ficam em `index.html`. Quando houver domínio próprio, substitua o endereço `gymbsite-yew7i29k.manus.space` por ele nas URLs `canonical`, `og:url`, `og:image`, `twitter:image` e no bloco JSON-LD.

## GitHub + Vercel

Esta pasta contém **menos de 100 arquivos** para permitir upload manual no GitHub. Crie um repositório vazio, clique em **Add file → Upload files**, envie o conteúdo desta pasta e faça o commit.

Na Vercel, importe o repositório e mantenha **Root Directory** vazio. O preset pode ser **Vite**; o build é `npm run build` e o diretório de saída é `dist`. O arquivo `vercel.json` já define esses valores. Clique em **Deploy**. Cada alteração enviada ao branch `main` fará um novo deploy automático.

O endereço `*.vercel.app` já recebe HTTPS. Para domínio próprio, abra **Settings → Domains** na Vercel, adicione o domínio e aplique os registros DNS exibidos pelo painel.

## Por que esta exportação evita o erro anterior

O `index.html` e a pasta `src/` agora ficam na raiz do repositório, que é o padrão esperado pelo Vite. O projeto usa somente React, Vite, Tailwind e Lucide; não inclui `vite-plugin-manus-runtime`, `@builder.io/vite-plugin-jsx-loc`, servidor Express, Wouter, Radix ou componentes internos. Assim, a Vercel executa apenas `vite build` e publica `dist`.
