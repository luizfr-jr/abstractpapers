# Deploy no Vercel - Abstract Papers Hub

## Configuração Pré-Deploy

### 1. Estrutura do Projeto
O projeto já está configurado com:
- ✅ `vercel.json` - Configurações de deploy
- ✅ `api/index.ts` - Função serverless para API
- ✅ `.vercelignore` - Arquivos ignorados no deploy
- ✅ `@vercel/node` - Dependência para functions

### 2. Variáveis de Ambiente Necessárias
```bash
GEMINI_API_KEY=sua_chave_gemini_aqui
DATABASE_URL=sua_url_postgresql_aqui
NODE_ENV=production
```

## Passos para Deploy

### 1. Push para GitHub ✅
```bash
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

### 2. Deploy no Vercel
1. **Acesse:** https://vercel.com
2. **Login:** Com sua conta GitHub
3. **Novo Projeto:** Clique em "New Project"
4. **Importar:** Selecione o repositório `luizfr-jr/abstractpapers`
5. **Configurar:** Use as configurações abaixo:

### 3. Configurações Manuais no Vercel
**IMPORTANTE:** Configure manualmente estas opções:
- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`
- **Install Command:** `npm install`
- **Root Directory:** `.` (deixe vazio ou ponto)

### 4. Configuração Corrigida ✅
O `vercel.json` foi corrigido para:
- Servir arquivos estáticos do `dist/public`
- Rotear API para `/api/*`
- Servir arquivos JavaScript/CSS com MIME type correto
- Servir SPA corretamente com fallback para `index.html`
- Corrigido problema de "tela em branco" no deploy

### 5. Problemas Resolvidos
✅ **Tela em branco:** Corrigido roteamento de arquivos estáticos
✅ **Erro MIME type:** JavaScript/CSS agora servidos corretamente
✅ **Assets não carregando:** Roteamento específico para `/assets/`
✅ **SPA routing:** Fallback correto para `index.html`

### 4. Configurar Variáveis de Ambiente
No dashboard do Vercel:
1. Vá para **Settings** → **Environment Variables**
2. Adicione as variáveis:
   - `GEMINI_API_KEY`: Sua chave do Google Gemini
   - `DATABASE_URL`: URL do seu banco PostgreSQL
   - `NODE_ENV`: `production`

### 5. Deploy Finalizado
- ✅ Deploy automático a cada push
- ✅ Preview deployments para PRs
- ✅ SSL automático
- ✅ CDN global

## Estrutura de Rotas

### Frontend (SPA)
- `https://seuapp.vercel.app/` - Aplicação React

### API (Serverless Functions)
- `https://seuapp.vercel.app/api/analyze` - POST - Análise de abstracts
- `https://seuapp.vercel.app/api/analyses` - GET - Histórico de análises

## Comandos Úteis

### Desenvolvimento Local
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção local
```

### Vercel CLI (Opcional)
```bash
npm i -g vercel      # Instalar CLI
vercel login         # Login na conta
vercel --prod        # Deploy para produção
vercel dev           # Desenvolvimento local com functions
```

## Configurações Técnicas

### Build Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "installCommand": "npm install"
}
```

### API Routes
- Função serverless em `/api/index.ts`
- Suporte a CORS configurado
- Tratamento de erros robusto
- Logs de performance

### Database
- Suporte a PostgreSQL via Neon, Supabase, ou PlanetScale
- Drizzle ORM configurado
- Migrations automáticas com `npm run db:push`

## Monitoramento

### Logs
- Acesse **Functions** → **View Function Logs**
- Logs em tempo real durante execução
- Métricas de performance

### Analytics
- Ative **Analytics** no dashboard
- Métricas de uso da API
- Performance monitoring

## Solução de Problemas

### Build Errors
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install

# Verificar build local
npm run build
```

### API Errors
- Verifique logs no dashboard do Vercel
- Confirme variáveis de ambiente
- Teste endpoints localmente

### Database Connection
- Verifique `DATABASE_URL`
- Confirme whitelist de IPs (se necessário)
- Teste conexão com `npm run db:push`

## Recursos Adicionais

### Domínio Personalizado
1. **Settings** → **Domains**
2. Adicione seu domínio
3. Configure DNS conforme instruções

### Monitoramento Avançado
- **Integrations** → **Monitoring**
- Sentry para error tracking
- LogRocket para session replay

---

🚀 **Pronto para produção!** O projeto está otimizado para deploy no Vercel.