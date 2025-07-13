# Hub de Ferramentas para Publicação Científica

Uma plataforma moderna para auxiliar pesquisadores na escolha de periódicos científicos e análise de métricas de impacto, utilizando inteligência artificial e as melhores ferramentas disponíveis.

## Funcionalidades

### 🧠 Análise Inteligente com Gemini AI
- Análise de resumos científicos com inteligência artificial
- Sugestões de revistas adequadas baseadas no conteúdo
- Geração de palavras-chave relevantes
- Sugestões de títulos alternativos
- Resumos em linguagem acessível

### 📚 Sugestão de Revistas
- **JANE (Journal/Author Name Estimator)**: Busca baseada em IA usando dados do PubMed
- **Elsevier Journal Finder**: Sugestões da editora Elsevier
- **Wiley Journal Finder**: Ferramenta da editora Wiley
- **Taylor & Francis Journal Suggester**: Recomendações da T&F

### 📊 Análise de Métricas
- **Journal Citation Reports (JCR)**: Fator de Impacto e quartis
- **Scopus**: CiteScore, SJR, SNIP e métricas de autores
- **SCImago Journal Rank**: Classificação gratuita por quartis
- **Google Scholar Metrics**: Índice h5 e métricas acadêmicas

### 🌙 Modo Escuro
- Interface com suporte completo a tema escuro
- Botão de alternância elegante com animações
- Salvamento automático da preferência do usuário

## Tecnologias Utilizadas

### Frontend
- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **Wouter** para roteamento
- **TanStack Query** para gerenciamento de estado

### Backend
- **Node.js** com Express
- **TypeScript** para tipagem
- **Google Gemini API** para análise de IA
- **Drizzle ORM** para banco de dados
- **PostgreSQL** (Neon Database)

## Instalação e Configuração

1. **Clone o repositório**
```bash
git clone https://github.com/luizfr-jr/abstractpapers.git
cd abstractpapers
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas chaves:
```
GEMINI_API_KEY=sua_chave_gemini_aqui
DATABASE_URL=sua_url_postgresql_aqui
```

4. **Configure o banco de dados**
```bash
npm run db:push
```

5. **Execute o projeto**
```bash
npm run dev
```

## Obtendo a Chave da API Gemini

1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Clique em "Create API key"
4. Copie a chave e adicione ao arquivo `.env`

## Deploy

### Replit
O projeto está otimizado para deploy no Replit:
1. Importe o repositório no Replit
2. Configure as variáveis de ambiente nos Replit Secrets
3. Execute o workflow "Start application"

### Vercel/Netlify
Para deploy em outras plataformas:
1. Configure as variáveis de ambiente
2. Execute `npm run build`
3. Deploy da pasta `dist`

## Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── hooks/          # Hooks customizados
│   │   └── lib/            # Utilitários
├── server/                 # Backend Express
│   ├── routes.ts           # Rotas da API
│   ├── services/           # Serviços (Gemini)
│   └── storage.ts          # Camada de dados
├── shared/                 # Schemas compartilhados
└── drizzle/               # Migrations do banco
```

## Contribuição

### Desenvolvedores
- **Dr. Luiz Fernando Rodrigues Jr.**
- **Kalleby Evangelho Mota**

### Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Suporte

Para dúvidas ou sugestões, abra uma issue no [GitHub](https://github.com/luizfr-jr/abstractpapers/issues).

---

**Nota:** Este hub conecta você às melhores ferramentas científicas disponíveis. Todas as análises e sugestões são fornecidas pelas respectivas plataformas especializadas.