# Configuração do Editor Visual no Netlify

## O que é o Netlify CMS?

O Netlify CMS é um sistema de gerenciamento de conteúdo visual que permite editar o conteúdo do site através de uma interface amigável, sem precisar mexer no código. Você pode editar textos, imagens, serviços, galeria e muito mais!

## Como Ativar o Editor Visual

### Passo 1: Conectar o Projeto ao GitHub

1. No Lovable, clique em **GitHub** → **Connect to GitHub**
2. Autorize o Lovable GitHub App
3. Selecione sua conta/organização no GitHub
4. Clique em **Create Repository** para criar o repositório

### Passo 2: Fazer Deploy no Netlify

1. Acesse https://app.netlify.com
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Selecione **GitHub** como provedor
4. Escolha o repositório que você criou
5. Configure as variáveis de ambiente:
   ```
   VITE_SUPABASE_URL=https://zunmgpsinjbpghbnlbsb.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1bm1ncHNpbmpicGdoYm5sYnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MjEyNTQsImV4cCI6MjA3NDk5NzI1NH0.4YFdZLyFSJyDsgGSQF40E510X3uWm1sdll05B8APjsU
   VITE_SUPABASE_PROJECT_ID=zunmgpsinjbpghbnlbsb
   ```
6. Clique em **"Deploy site"**

### Passo 3: Ativar o Netlify Identity

1. No painel do site no Netlify, vá em **Settings** → **Identity**
2. Clique em **"Enable Identity"**
3. Em **Registration preferences**, escolha **"Invite only"** (mais seguro)
4. Em **External providers**, você pode habilitar login com Google, GitHub, etc. (opcional)
5. Em **Services** → **Git Gateway**, clique em **"Enable Git Gateway"**

### Passo 4: Criar Usuário Administrador

1. Ainda em **Identity**, clique em **"Invite users"**
2. Digite seu email
3. Você receberá um email de convite
4. Clique no link do email para criar sua senha
5. Pronto! Você já pode acessar o editor visual

## Acessando o Editor Visual

### URL do Editor

Após configurar, acesse:
```
https://seu-site.netlify.app/admin
```

### Login

1. Acesse `/admin` no seu site
2. Faça login com o email e senha que você criou
3. Você verá o painel do Netlify CMS

## O Que Você Pode Editar

### 1. **Configurações do Site**
   - Nome do site
   - Email e telefone de contato
   - Endereço

### 2. **Seção Hero (Principal)**
   - Título e subtítulo
   - Texto do botão
   - Imagem de fundo

### 3. **Serviços**
   - Título da seção
   - Lista de serviços
   - Ícones e descrições

### 4. **Galeria**
   - Adicionar/remover imagens
   - Título e descrição de cada imagem
   - Categorias e ordem de exibição

### 5. **Depoimentos**
   - Adicionar depoimentos de clientes
   - Nome, foto e avaliação
   - Cargo/empresa

### 6. **Páginas**
   - Meta títulos e descrições (SEO)
   - Palavras-chave
   - Controlar quais seções aparecem

### 7. **Rodapé**
   - Texto de copyright
   - Links rápidos
   - Redes sociais

## Fluxo de Publicação

O Netlify CMS usa um **fluxo editorial** (Editorial Workflow):

1. **Rascunho**: Você cria ou edita conteúdo
2. **Em Revisão**: Submete para revisão
3. **Pronto**: Aprova para publicação
4. **Publicado**: O conteúdo vai para o site ao vivo

Para desabilitar este fluxo e publicar imediatamente, remova a linha `publish_mode: editorial_workflow` do arquivo `public/admin/config.yml`.

## Estrutura de Arquivos de Conteúdo

Todo o conteúdo editável fica na pasta `content/`:

```
content/
├── settings/
│   └── general.json          # Configurações gerais
├── pages/
│   └── home.json             # Configuração da página inicial
├── gallery/                  # Itens da galeria
├── testimonials/             # Depoimentos
├── hero.json                 # Conteúdo do hero
├── services.json             # Lista de serviços
└── footer.json               # Conteúdo do rodapé
```

## Integrando Conteúdo do CMS no React

Para usar o conteúdo editado no CMS nos componentes React, você pode:

### Opção 1: Importar JSON diretamente
```typescript
import heroData from '@/content/hero.json';

function HeroSection() {
  return (
    <div>
      <h1>{heroData.title}</h1>
      <p>{heroData.subtitle}</p>
    </div>
  );
}
```

### Opção 2: Criar um hook personalizado
```typescript
import { useState, useEffect } from 'react';

export function useContent(path: string) {
  const [content, setContent] = useState(null);
  
  useEffect(() => {
    fetch(`/content/${path}.json`)
      .then(res => res.json())
      .then(data => setContent(data));
  }, [path]);
  
  return content;
}

// Uso:
const heroData = useContent('hero');
```

## Personalização do Editor

Para adicionar novos campos ou coleções, edite o arquivo:
```
public/admin/config.yml
```

### Exemplo: Adicionar campo de cor
```yaml
fields:
  - { label: "Cor de Destaque", name: "accent_color", widget: "color" }
```

### Tipos de campos disponíveis:
- `string` - Texto curto
- `text` - Texto longo
- `markdown` - Editor Markdown
- `number` - Números
- `boolean` - Sim/Não
- `date` - Data
- `datetime` - Data e hora
- `color` - Seletor de cores
- `image` - Upload de imagem
- `file` - Upload de arquivo
- `select` - Lista dropdown
- `list` - Lista de itens
- `object` - Grupo de campos
- `relation` - Relacionamento entre coleções

## Preview em Tempo Real

O Netlify CMS oferece preview em tempo real das suas edições. Para ativar no seu site:

1. Crie componentes de preview customizados
2. Registre-os no CMS
3. Veja as mudanças instantaneamente antes de publicar

## Backup e Versionamento

✅ **Todo conteúdo é versionado no Git**
- Cada alteração cria um commit
- Você pode reverter mudanças a qualquer momento
- Histórico completo de todas as edições

## Segurança

- ✅ Autenticação via Netlify Identity
- ✅ Apenas usuários convidados podem editar
- ✅ Git Gateway protege o acesso ao repositório
- ✅ HTTPS em todas as conexões

## Diferença entre `/admin` do Supabase e `/admin` do CMS

### `/admin` (CMS - Netlify CMS)
- **URL**: `https://seu-site.netlify.app/admin`
- **Propósito**: Editar conteúdo visual do site (textos, imagens, serviços)
- **Autenticação**: Netlify Identity
- **Acesso**: Editores de conteúdo

### `/admin` (Supabase - Painel de Orçamentos)
- **URL**: `https://seu-site.netlify.app/admin` (mesma rota, mas fluxo diferente)
- **Propósito**: Ver solicitações de orçamento dos clientes
- **Autenticação**: Supabase Auth
- **Acesso**: Administradores do sistema

**Nota**: Você pode querer renomear uma das rotas para evitar conflito. Sugestões:
- CMS: `/admin` ou `/editor`
- Orçamentos: `/dashboard` ou `/quotes`

## Troubleshooting

### "Error loading the CMS configuration"
- Verifique se o arquivo `public/admin/config.yml` está correto
- Confirme que o Git Gateway está habilitado

### "Unable to access identity"
- Confirme que o Netlify Identity está ativado
- Verifique se você está logado

### "Failed to persist entry"
- Verifique as permissões do Git Gateway
- Confirme que o branch configurado existe (geralmente `main`)

### Imagens não aparecem
- Verifique o caminho em `media_folder` no config.yml
- Confirme que a pasta existe no repositório

## Recursos Adicionais

- [Documentação Netlify CMS](https://www.netlifycms.org/docs/)
- [Documentação Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Documentação Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)
- [Widgets disponíveis](https://www.netlifycms.org/docs/widgets/)

## Próximos Passos

1. ✅ Conectar ao GitHub
2. ✅ Deploy no Netlify
3. ✅ Ativar Netlify Identity
4. ✅ Criar seu usuário admin
5. ✅ Acessar `/admin` e começar a editar!

Aproveite o poder de editar seu site visualmente! 🎨
