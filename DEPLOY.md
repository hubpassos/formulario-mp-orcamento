# Deploy no Netlify - Guia Completo

## Pré-requisitos
- Conta no Netlify (https://app.netlify.com)
- Código do projeto em um repositório Git (GitHub, GitLab ou Bitbucket)

## Passo 1: Preparar o Projeto

O projeto já está configurado e pronto para deploy. A estrutura inclui:
- ✅ Configuração do Supabase via Lovable Cloud
- ✅ Arquivo `netlify.toml` com configurações de build
- ✅ Variáveis de ambiente no arquivo `.env`

## Passo 2: Deploy no Netlify

### Opção A: Deploy via Git (Recomendado)

1. **Faça push do código para o GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin SEU_REPOSITORIO_URL
   git push -u origin main
   ```

2. **Conecte ao Netlify**
   - Acesse https://app.netlify.com
   - Clique em "Add new site" → "Import an existing project"
   - Escolha seu provedor Git (GitHub, GitLab, etc.)
   - Selecione o repositório do projeto
   - O Netlify detectará automaticamente as configurações do `netlify.toml`

3. **Configure as Variáveis de Ambiente**
   - No painel do Netlify, vá em: **Site settings** → **Environment variables**
   - Adicione as seguintes variáveis (valores do arquivo `.env`):
     ```
     VITE_SUPABASE_URL=https://zunmgpsinjbpghbnlbsb.supabase.co
     VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1bm1ncHNpbmpicGdoYm5sYnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MjEyNTQsImV4cCI6MjA3NDk5NzI1NH0.4YFdZLyFSJyDsgGSQF40E510X3uWm1sdll05B8APjsU
     VITE_SUPABASE_PROJECT_ID=zunmgpsinjbpghbnlbsb
     ```

4. **Deploy**
   - Clique em "Deploy site"
   - Aguarde o build completar (2-5 minutos)
   - Seu site estará disponível em uma URL do tipo: `https://seu-site.netlify.app`

### Opção B: Deploy Manual via CLI

1. **Instale o Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login no Netlify**
   ```bash
   netlify login
   ```

3. **Build do projeto**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Passo 3: Configurar Domínio Customizado (Opcional)

1. No painel do Netlify, vá em **Domain settings**
2. Clique em "Add custom domain"
3. Siga as instruções para configurar seu domínio

## Passo 4: Verificar Integração com Supabase

Após o deploy:
1. Acesse seu site no Netlify
2. Teste o formulário de orçamento
3. Faça login na área administrativa
4. Verifique se os dados estão sendo salvos corretamente

## Estrutura do Banco de Dados

O projeto utiliza as seguintes tabelas no Supabase:

### 1. `quote_requests` - Solicitações de Orçamento
- `id` (uuid) - Identificador único
- `name` (text) - Nome do cliente
- `phone` (text) - Telefone
- `location` (text) - Localização
- `procedures` (text) - Procedimentos desejados
- `project_details` (text) - Detalhes do projeto
- `budget` (text) - Orçamento
- `timeline` (text) - Prazo
- `created_at` (timestamp) - Data de criação

**RLS Policies:**
- ✅ Qualquer pessoa pode inserir (público)
- ✅ Apenas admins podem visualizar, editar e deletar

### 2. `user_roles` - Funções dos Usuários
- `id` (uuid) - Identificador único
- `user_id` (uuid) - Referência ao usuário
- `role` (enum: 'admin' | 'user') - Função do usuário
- `created_at` (timestamp) - Data de criação

**RLS Policies:**
- ✅ Usuários podem ver suas próprias funções
- ✅ Admins podem gerenciar todas as funções
- ✅ Primeiro usuário registrado recebe papel de admin automaticamente

## Edge Functions

O projeto inclui uma Edge Function para enviar notificações via webhook:
- `send-webhook-notification` - Envia dados de orçamento para n8n

## Autenticação

Sistema de autenticação configurado com:
- ✅ Registro de usuários
- ✅ Login/Logout
- ✅ Verificação de email (auto-confirmação ativada para desenvolvimento)
- ✅ Sistema de roles (admin/user)
- ✅ Proteção de rotas

## Rotas da Aplicação

- `/` - Página inicial (pública)
- `/auth` - Login/Registro
- `/admin` - Painel administrativo (requer autenticação + role admin)

## Segurança

Implementações de segurança:
- ✅ Row Level Security (RLS) em todas as tabelas
- ✅ Validação de inputs com Zod
- ✅ Sanitização de dados
- ✅ Políticas granulares de acesso
- ✅ Webhook autenticado
- ✅ Senha mínima de 8 caracteres

## Troubleshooting

### Erro: "Supabase client not initialized"
- Verifique se as variáveis de ambiente estão configuradas no Netlify

### Erro: "Failed to fetch"
- Verifique se a URL do Supabase está correta
- Confirme se as Edge Functions estão rodando

### Erro: "Unauthorized"
- Verifique se o usuário tem a role correta (admin)
- Confirme se as políticas RLS estão ativas

## Suporte

Para problemas com:
- **Netlify**: https://docs.netlify.com
- **Supabase**: https://supabase.com/docs
- **Lovable Cloud**: https://docs.lovable.dev

## Próximos Passos

Após o deploy bem-sucedido:
1. ✅ Configure um domínio customizado
2. ✅ Configure notificações de build
3. ✅ Ative HTTPS (automático no Netlify)
4. ✅ Configure backup dos dados no Supabase
5. ✅ Monitore os logs das Edge Functions
