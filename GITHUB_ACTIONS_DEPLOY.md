# GitHub Actions Deploy - Configuração

## Situação Atual
O workflow foi modificado para executar apenas CI (testes e build), removendo o deploy automático via GitHub Actions.

## Opções para Deploy

### 1. Deploy Automático via Vercel (Recomendado)
- **Mais simples:** Conecte o repositório GitHub diretamente ao Vercel
- **Automático:** Deploy a cada push para main
- **Preview:** Branches criam preview deployments
- **Configuração:** Apenas via interface do Vercel

### 2. Deploy via GitHub Actions (Avançado)
Se você quiser usar GitHub Actions para deploy, precisa configurar os secrets:

#### Secrets necessários:
```
VERCEL_TOKEN - Token do Vercel
ORG_ID - ID da organização
PROJECT_ID - ID do projeto
```

#### Como obter:
1. **VERCEL_TOKEN:**
   - Acesse: https://vercel.com/account/tokens
   - Clique em "Create Token"
   - Copie o token gerado

2. **ORG_ID e PROJECT_ID:**
   - Execute: `npx vercel link` no projeto
   - Ou veja no dashboard do Vercel

#### Configurar no GitHub:
1. Vá para: Repository → Settings → Secrets and variables → Actions
2. Adicione cada secret

#### Restaurar workflow completo:
Se configurar os secrets, posso restaurar o workflow de deploy completo.

## Workflow Atual
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run type checking
      run: npm run check
      
    - name: Build project
      run: npm run build
```

## Próximos Passos
1. **Push para GitHub:** O workflow agora funcionará sem erros
2. **Deploy no Vercel:** Conecte o repositório na interface do Vercel
3. **Configurar variáveis:** Adicione as env vars no Vercel

O deploy automático funcionará perfeitamente via Vercel!