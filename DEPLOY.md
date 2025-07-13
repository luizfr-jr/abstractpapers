# Guia de Deploy - Abstract Papers Hub

## Preparação para Deploy no GitHub

### 1. Configuração do Repositório

1. **Criar o repositório no GitHub:**
   - Acesse https://github.com/luizfr-jr/abstractpapers
   - Certifique-se de que o repositório está criado e vazio

2. **Configurar localmente:**
   ```bash
   git init
   git remote add origin https://github.com/luizfr-jr/abstractpapers.git
   ```

### 2. Preparar os Arquivos

Os seguintes arquivos já foram criados para o deploy:

- ✅ `README.md` - Documentação completa do projeto
- ✅ `LICENSE` - Licença MIT
- ✅ `.gitignore` - Arquivos a serem ignorados pelo Git
- ✅ `.env.example` - Exemplo de variáveis de ambiente
- ✅ `.github/workflows/deploy.yml` - Workflow do GitHub Actions

### 3. Configurar Variáveis de Ambiente

1. **Copiar o arquivo de exemplo:**
   ```bash
   cp .env.example .env
   ```

2. **Editar com suas chaves:**
   ```bash
   # Google Gemini API Key
   GEMINI_API_KEY=sua_chave_aqui
   
   # Database Configuration
   DATABASE_URL=sua_url_postgresql_aqui
   
   # Environment
   NODE_ENV=development
   ```

### 4. Testar o Build

```bash
# Verificar se o build funciona
npm run build
```

### 5. Fazer o Deploy

```bash
# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "Initial commit: Abstract Papers Hub

- Added dark mode toggle with beautiful animations
- Implemented custom SVG logos for all journal tools
- Updated footer with correct developer information
- Enhanced UI with better responsive design
- Integrated Gemini AI for abstract analysis
- Added comprehensive documentation"

# Push para o GitHub
git push -u origin main
```

### 6. Configurar Deploy Automático (Opcional)

Para deploy automático, você pode usar plataformas como:

#### Vercel
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente no dashboard
3. Deploy automático a cada push

#### Railway
1. Conecte seu repositório ao Railway
2. Configure as variáveis de ambiente
3. Deploy automático configurado

#### Render
1. Conecte seu repositório ao Render
2. Configure as variáveis de ambiente
3. Configurar como Web Service

### 7. Variáveis de Ambiente para Produção

No serviço de deploy escolhido, configure:

```
GEMINI_API_KEY=sua_chave_gemini_real
DATABASE_URL=sua_url_postgresql_producao
NODE_ENV=production
```

### 8. Comandos Úteis

```bash
# Verificar status do git
git status

# Ver diferenças
git diff

# Verificar logs
git log --oneline

# Verificar remotes
git remote -v
```

### 9. Solução de Problemas

#### Erro de autenticação:
```bash
# Configurar credenciais
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

#### Erro de push:
```bash
# Forçar push (cuidado!)
git push --force-with-lease origin main
```

#### Conflitos de merge:
```bash
# Resolver conflitos e continuar
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### 10. Recursos Adicionais

- **Documentação completa:** Ver `README.md`
- **Estrutura do projeto:** Código bem documentado
- **Licença:** MIT License incluída
- **CI/CD:** GitHub Actions configurado

---

**Nota:** Este projeto está pronto para deploy. Certifique-se de configurar suas chaves de API antes de usar em produção.