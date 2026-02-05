# Planos de Implementação BugKillers

---

# [PÁGINA DE DADOS] Refatoração da Página de Dados do Perfil

Este plano detalha a remoção de botões da seção de assinatura e a implementação da lógica funcional para salvar e cancelar alterações nos dados pessoais na página `/profile`.

## Alterações Propostas

### Seção de Assinatura

#### [MODIFY] [page.tsx](file:///d:/Projeto-BugKillers/app/(dashboard)/profile/page.tsx)

- **Remoção de Botões:**
  - Remover o botão "Ver histórico de faturas".
  - Remover o botão "Comparar Planos".
  - Remover o botão "Gerenciar Assinatura".
- **Ajuste de Layout:**
  - Remover o contêiner `flex` que abrigava os botões de comparação e gerenciamento para garantir que o card de assinatura mantenha um visual limpo apenas com as informações e a lista de benefícios.

---

### Seção de Dados Pessoais

#### [MODIFY] [page.tsx](file:///d:/Projeto-BugKillers/app/(dashboard)/profile/page.tsx)

- **Gerenciamento de Estado:**
  - Implementar `useState` para gerenciar os valores dos campos (Nome Completo, Email, Empresa, Cargo, Telefone).
  - Manter um estado de `initialData` para permitir a restauração dos valores originais ao clicar em "Cancelar".
- **Lógica do Botão Salvar:**
  - Validar se os campos obrigatórios (Nome, Email, Empresa, Telefone) estão preenchidos.
  - Exibir estado de loading ("Salvando...") e desativar o botão durante o processo.
  - Simular chamada de API/Backend.
  - Ao sucesso: exibir feedback visual ("Perfil atualizado!") e atualizar o `initialData`.
- **Lógica do Botão Cancelar:**
  - Restaurar os valores do formulário para o estado contido em `initialData`.
  - Limpar qualquer erro de validação (se houver).

## Plano de Verificação

### Testes Manuais
- [ ] Verificar se os botões "Ver histórico de faturas", "Comparar Planos" e "Gerenciar Assinatura" desapareceram completamente.
- [ ] Editar os campos de Dados Pessoais e clicar em "Cancelar": os dados devem voltar aos valores originais.
- [ ] Editar os campos e clicar em "Salvar": deve aparecer o estado de loading e depois a mensagem de sucesso.
- [ ] Tentar salvar com campos vazios (se aplicável) e verificar se há validação.
- [ ] Navegar para outras abas (Segurança, Plano, etc.) e garantir que não houve efeitos colaterais.

> [!IMPORTANT]
> A implementação usará `useState` simples para manter a consistência com o estilo atual do arquivo, evitando a introdução de novas dependências pesadas como React Hook Form, a menos que seja estritamente necessário para complexidade futura.

---

# [PÁGINA DE PLANOS] Plano de Implementação: Planos & Assinaturas

Este documento detalha o planejamento para a implementação de novas funcionalidades na página de **Plano & Faturamento** da aplicação BugKillers, incluindo modais de gestão, segurança em pagamentos e rastreamento de atividade do usuário.

## 1. Contexto Geral

A página atual (`/profile/billing` ou `/billing`) já possui uma estrutura visual bem definida, exibindo o plano atual (Enterprise), uma grade de comparação estática, histórico de faturas e método de pagamento. 

**Responsabilidades:**
- Exibição clara do status da assinatura.
- Facilitar o upgrade/downgrade de planos.
- Gestão de métodos de pagamento e faturamento.
- Retenção de usuários (fluxos de pausa e cancelamento).

---

## 2. Itens a Implementar (Planejamento)

### A. Comparar Planos
- **Experiência:** Implementação de um `PlansCompareModal` que sobrepõe a tela atual, permitindo uma visão tabular detalhada de todos os recursos (Free vs Startup vs Enterprise).
- **Informações:** Preço, execuções, número de membros, suporte, retenção de dados, APIs e recursos avançados (SSO).
- **Componentes:** Novo componente `PlansCompareModal.tsx`.

### B. Gerenciar Assinatura
- **Interface:** Um modal centralizador `ManageSubscriptionModal` que oferece atalhos para todas as outras ações (Mudar Plano, Alterar Cartão, Pausar, Cancelar).
- **Arquitetura:** Este modal servirá como um "hub" de navegação interna de estados para as ações de faturamento.

### C. Modal para Alterar Cartão de Crédito (`UpdateCardModal`)
- **Campos:** Número do cartão, Nome (como no cartão), Expiração (MM/AA) e CVV.
- **Validação:** Verificação de formato (Luhn algorithm), campos obrigatórios e data de expiração futura.
- **Segurança:** 
  - **Crítico:** Os dados sensíveis **nunca** devem tocar o servidor da BugKillers em formato de texto simples. 
  - **Fluxo:** O frontend envia os dados diretamente para o gateway (ex: Stripe/Pagar.me), recebe um `token` e apenas esse token é enviado ao nosso backend.
  - **Stub:** Por enquanto, simularemos a geração de um token e uma chamada de sucesso/erro.

### D. Modal para Cancelar Assinatura (`CancelSubscriptionModal`)
- **Fluxo:** Exibir o modal ao clicar em "Cancelar assinatura".
- **Mensagens:** Reforçar o que o usuário perderá (suporte prioritário, cenários ilimitados).
- **Impacto:** A assinatura deve ser marcada para cancelamento ao **final do ciclo atual**, mantendo o acesso até lá.

### E. Modal para Pausar Assinatura (`PauseSubscriptionModal`)
- **Duração:** Opções de 1, 2 ou 3 meses.
- **Lógica:** Armazenar `status: "paused"` e `resume_date` no banco de dados.
- **Retenção:** Explicar que a pausa mantém o histórico e configurações intactos, sendo melhor que o cancelamento definitivo.

### F. Última Atividade do Usuário
- **Backend:** Adição ou uso do campo `last_activity_at` (DateTime) na tabela `users`.
- **Atualização:** Atualizar via middleware ou no carregamento do layout principal do dashboard para registrar cada interação relevante.
- **Frontend:** O `UserProfileCard` utilizará uma função utilitária (ex: `formatRelativeTime`) para transformar o timestamp em "há X minutos", "há 2 horas", etc.

---

## 3. Arquivos e Componentes

### Novos Componentes (`components/dashboard/`)
- `PlansCompareModal.tsx`: Tabela comparativa de recursos.
- `ManageSubscriptionModal.tsx`: Hub de gestão.
- `UpdateCardModal.tsx`: Formulário de pagamento seguro.
- `CancelSubscriptionModal.tsx`: Fluxo de cancelamento/retenção.
- `PauseSubscriptionModal.tsx`: Fluxo de pausa temporária.

### Modificações Necessárias
- `app/(dashboard)/billing/page.tsx`: Integrar disparadores para os novos modais.
- `components/dashboard/UserProfileCard.tsx`: Implementar lógica real/dinâmica para `last_activity_at`.
- `utils/date.ts`: Criar helper `formatDistanceToNow` (ou usar `date-fns`).

---

## 4. Riscos e Pontos de Atenção

- **Segurança de Dados:** Risco de vazamento de dados de cartão se não for usada tokenização via gateway.
- **Consistência de Estado:** Garantir que após um cancelamento/pausa, a UI reflita o novo status imediatamente (ou mostre o status "Cancelando ao fim do ciclo").
- **UX de Erro:** Falhas de pagamento precisam de mensagens extremamente claras para o usuário não ser bloqueado sem entender o motivo.

---

## 5. Checklist de Testes

### Testes Manuais
- [ ] Validar campos do modal de cartão com dados inválidos (Cartão expirado, CVV curto).
- [ ] Confirmar se o fluxo de pausa permite selecionar diferentes períodos.
- [ ] Verificar se a "Última atividade" atualiza corretamente após recarregar a página.
- [ ] Abrir o comparador de planos em telas mobile para garantir responsividade da tabela.

### Casos de Erro
- [ ] Simular falha de conexão com a API de Billing durante a alteração de cartão.
- [ ] Simular usuário tentando cancelar uma assinatura que já está em processo de cancelamento.

---

# [PÁGINA DE INTEGRAÇÕES] Plano de Implementação: Integrações do Perfil

Este documento detalha o planejamento para a implementação de novas funcionalidades e modais na página de **Integrações** da aplicação BugKillers, garantindo um fluxo robusto de conexão e configuração com ferramentas externas.

## 1. Contexto Geral

A página de integrações atual (`/profile/integrations`) exibe ferramentas conectadas e disponíveis através de cards informativos. 
- **Integrações Atuais:** Jira Cloud, Azure DevOps (Conectados), Slack (Disponível), Postman (Em Breve).
- **Representação:** Cards com ícones, status, contador de métricas (para conectados) e botões de ação na parte inferior.

---

## 2. Itens a Implementar (Planejamento)

### A. Modal "Nova Integração"
- **Experiência:** Disparado pelo card "Adicionar Nova Integração". Deve permitir ao usuário encontrar e iniciar o processo de conexão.
- **Estrutura:**
  - Grade de ícones de serviços (GitHub, GitLab, Discord, Notion, etc.).
  - Barra de busca para filtrar serviços.
  - Ao selecionar, exibir detalhes da integração e botão "Conectar".
- **Fluxo:** Se OAuth, redirecionar; se API Key, exibir formulário de entrada.
- **Componentes:** `NewIntegrationModal.tsx`.

### B. Modal "Me Notifique"
- **Objetivo:** Permitir que o usuário se inscreva para ser avisado quando integrações "Em Breve" (como Postman) forem lançadas.
- **Estrutura:**
  - Título dinâmico: "Me avise sobre [Serviço]".
  - Campo de confirmação de e-mail (preenchido por padrão).
  - Seleção de "O que você pretende fazer com esta integração?" (opcional para feedback).
- **Dados:** Persistir o interesse do usuário em uma tabela de `beta_requests`.
- **Componentes:** `IntegrationNotifyModal.tsx`.

### C. Modal "Configurar"
- **Uso:** Integrações com status "Conectado" (Jira, Azure).
- **Estrutura:**
  - Status em tempo real.
  - **Configurações Específicas:**
    - Slack: Seleção de canal para alertas.
    - Jira/Azure: Mapeamento de projetos e campos.
  - Botão "Testar Integração" (dispara um webbook de teste).
- **Lógica:** Busca as configs atuais da API e permite o update.
- **Componentes:** `IntegrationConfigModal.tsx`.

### D. Modal "Desconectar"
- **Objetivo:** Remoção segura de uma integração ativa.
- **Estrutura:**
  - Alerta visual (ícone de perigo).
  - Texto: "Isso interromperá a sincronização de [X] projetos e faturas vinculadas."
  - Confirmação obrigatória para ações críticas.
- **Lógica:** Chama o DELETE na API e remove o token/webhook do serviço externo.
- **Componentes:** `IntegrationDisconnectModal.tsx`.

---

## 3. Arquitetura de Componentes

### Novos Componentes (`components/dashboard/`)
1. `NewIntegrationModal.tsx`: Galeria de novas conexões.
2. `IntegrationNotifyModal.tsx`: Captura de leads para novas funções.
3. `IntegrationConfigModal.tsx`: Formulário dinâmico de configuração.
4. `IntegrationDisconnectModal.tsx`: Confirmação de remoção.

### Gerenciamento de Estado
- O status de cada integração (Connected / Available / Locked) será controlado no `page.tsx` via estado local ou vindo de uma API de `userIntegrations`.

---

## 4. Riscos e Pontos de Atenção

- **Segurança de Tokens:** Garantir que tokens de integração sejam tratados apenas no backend.
- **Erros de API Externa:** Implementar timeouts e retentativas amigáveis ao testar conexões.
- **Consistência Visual:** Utilizar as mesmas bordas, sombras e efeitos de backdrop blur definidos no `UserProfileCard`.
- **Acessibilidade:** Garantir navegação por teclado (Tab/Shift+Tab) e fechamento por `Esc`.

---

## 5. Checklist de Testes

### Fluxos Felizes
- [ ] Conectar Slack via OAuth com sucesso.
- [ ] Alterar o canal de notificação no modal de Configuração.
- [ ] Desconectar Jira e verificar se o card volta para o status "Disponível".

### Casos de Bordas e Erros
- [ ] Abrir modal de configuração sem internet.
- [ ] Tentar conectar com uma API Key inválida.
- [ ] Cancelar a desconexão e verificar se nada foi alterado.
- [ ] Verificar se o estado das modais reseta ao fechar/reabrir.
- [ ] Validar responsividade em dispositivos mobile (tabelas e botões).

---

# [PÁGINA DE PREFERÊNCIAS] Plano de Implementação: Preferências da Conta

Este documento detalha o planejamento para a implementação funcional das preferências de conta na plataforma BugKillers, cobrindo temas, internacionalização, notificações (Push e E-mail) e persistência de dados.

## 1. Contexto Geral

A página atual (`/profile/settings`) já possui uma interface visual robusta com seções para:
- **Interface & Idioma:** Seleção de tema (Sun, Moon, Monitor) e idioma.
- **Notificações Push:** Toggle para alertas no navegador.
- **Notificações por E-mail:** Checkboxes para diversos tipos de comunicação (Newsletter, Produto, Segurança, etc.).
- **Botões de Ação:** Cancelar e Salvar (atualmente simulados).

O objetivo é transformar esses elementos estáticos em funcionalidades reais e persistentes.

---

## 2. Itens a Implementar (Planejamento)

### A. Temas de Interface (Light, Dark, System)
- **Estratégia:** Utilizar a biblioteca `next-themes` para gerenciar a troca de classes no elemento `html`.
- **Persistência:** 
  - Salvar a preferência no `localStorage` (padrão do `next-themes`).
  - Sincronizar com le backend no endpoint `updateUserPreferences` para garantir consistência entre dispositivos.
- **Detecção:** Usar a preferência do sistema via `(prefers-color-scheme: dark)` quando a opção 'System' estiver ativa.

### B. Seleção de Idioma (I18n)
- **Bibliotecas:** Implementar `next-intl` para roteamento e gerenciamento de dicionários de tradução.
- **Opções:** Português (pt-BR) e Inglês (en-US).
- **Logística:**
  - Detectar o idioma do navegador no primeiro acesso.
  - Criar arquivos JSON de tradução para cada idioma.
  - Sincronizar o campo `preferred_language` com le perfil do usuário na API.

### C. Notificações Push no Navegador
- **Frontend:**
  - Implementar lógica para solicitar `Notification.requestPermission()`.
  - Registrar um **Service Worker** (`sw.js`) para escutar eventos de 'push' em segundo plano.
  - Gerar a subscrição usando chaves **VAPID** públicas fornecidas pelo backend.
- **UI States:**
  - Mostrar "Permissão Negada" com instruções de como reativar se o usuário bloqueou nas configurações do browser.
  - Desabilitar o toggle se o navegador não for compatível.

### D. Notificações por E-mail
- **Campos:** Mapear todos os checkboxes existentes (Newsletter, Produto, Manutenção, Limite de Uso, etc.).
- **Estrutura de Dados:** Salvar as preferências como um objeto booleano `notifications_settings` no banco de dados.
- **Interação:** Cada checkbox deve atualizar o estado local imediatamente, mas a persistência no backend ocorre apenas ao clicar em "Salvar".

### E. Botões Salvar e Cancelar
- **Salvar:**
  - Coletar todos os estados (tema, idioma, push status, checkboxes).
  - Enviar payload único para `PUT /api/user/preferences`.
  - Exibir toast de sucesso ("Preferências salvas com sucesso") e limpar estado de loading.
- **Cancelar:**
  - Resetar todos os estados locais para os valores originais vindos do carregamento inicial da página.

---

## 3. Arquitetura de Componentes

### Novos Componentes (`components/dashboard/`)
- `ThemeSelector.tsx`: Componente isolado para os botões de rádio de tema.
- `LanguageSelector.tsx`: Dropdown estilizado para internacionalização.
- `PushNotificationsManager.tsx`: Lógica de gerenciamento de service worker e permissões.
- `EmailNotificationsForm.tsx`: Agrupamento de checkboxes com lógica de estado.
- `PreferencesForm.tsx`: O wrapper principal que coordena o estado e as chamadas de API.

---

## 4. Dependências Técnicas

- **Next-Themes:** Para gestão de Dark Mode.
- **Next-Intl:** Para internacionalização.
- **Service Worker API:** Para notificações push.
- **Zustand (ou Context API):** Para gerenciar o estado global das preferências após o salvamento.

---

## 5. Riscos e Pontos de Atenção

- **Inconsistência de Tema (Flicker):** Garantir que o tema seja aplicado antes da renderização completa (hydration) para evitar o efeito "flash" de branco no dark mode.
- **Suporte a Push:** Notificações push em browsers mobile (especialmente iOS) possuem requisitos específicos (PWA ou user gesture).
- **Persistência Offline:** Decidir se alterações feitas offline devem ser enfileiradas ou se apenas avisamos que o salvamento falhou.

---

## 6. Checklist de Testes

- [ ] Trocar tema para Dark e atualizar a página: o dark mode deve persistir.
- [ ] Trocar idioma para Inglês: todos os textos (labels, menus) devem mudar.
- [ ] Negar permissão de Push e verificar se a UI mostra o aviso correto.
- [ ] Alterar vários checkboxes, clicar em "Cancelar" e verificar se as seleções voltaram ao original.
- [ ] Salvar alterações e verificar no backend (via console/rede) se o payload está correto.
- [ ] Testar em Safari mobile e desktop para compatibilidade de push.

---

# [PÁGINA DE SEGURANÇA] Plano de Implementação: Segurança da Conta

Este documento detalha o planejamento para a implementação das funcionalidades de segurança na plataforma BugKillers, incluindo alteração de senha, 2FA, gerenciamento de sessões e alertas críticos.

## 1. Contexto Geral

A página de Segurança atual (`/profile/security`) já possui uma estrutura visual definida com:
- **Senha:** Exibição da última alteração e botão para trocar senha.
- **2FA:** Status atual (Desativado) e convite para ativação.
- **Sessões Ativas:** Listagem de dispositivos (Chrome no Windows, Safari no iPhone, etc.) com botões de encerramento.
- **Alertas de Segurança:** Checkboxes para notificações de eventos críticos.
- **Zona de Perigo:** Exclusão definitiva da conta (única funcionalidade já integrada com modal).

---

## 2. Itens a Implementar (Planejamento)

### A. Modal "Alterar Senha"
- **Objetivo:** Permitir a troca segura da senha.
- **Estrutura:**
  - Campo "Senha atual" (validação no backend).
  - Campo "Nova senha" + Medidor de força (helper text).
  - Campo "Confirmar nova senha".
- **Regras:** Mínimo 8 caracteres, maiúsculas, minúsculas, números e símbolos.
- **Componente:** `ChangePasswordModal.tsx`.

### B. Modal "Ativar 2FA"
- **Fluxo de Ativação:**
  1. Gerar Secret/QR Code no backend.
  2. Exibir QR Code para o usuário escanear.
  3. Validar código de 6 dígitos gerado pelo app.
  4. Gerar e exibir "Backup Codes" para salvamento offline.
- **Componente:** `TwoFactorModal.tsx`.

### C. Modal "Encerrar Todas as Sessões"
- **Funcionalidade:** Desconectar o usuário de todos os dispositivos, exceto o atual (opcional).
- **Interface:** Alerta de confirmação com aviso de logout imediato.
- **Backend:** Chamada para invalidar tokens de sessão ativos.
- **Componente:** `LogoutAllSessionsModal.tsx`.

### D. Sistema de Alertas de Segurança
- **Configurações:**
  - Notificar login em novo dispositivo.
  - Notificar alteração de senha.
  - Notificar desativação de 2FA.
- **Lógica:** Implementar estado controlado para os checkboxes e salvar via `PUT /api/user/security-alerts`.
- **Componente:** `SecurityAlertsForm.tsx` (ou integração direta no `page.tsx`).

---

## 3. Arquitetura de Componentes

### Novos Componentes (`components/dashboard/`)
1. `ChangePasswordModal.tsx`: Formulário de troca de senha.
2. `TwoFactorModal.tsx`: Fluxo completo de ativação e códigos de backup.
3. `LogoutAllSessionsModal.tsx`: Confirmação de encerramento em massa.

### Modificações Necessárias
- Integrar os novos modais nos botões correspondentes em `security/page.tsx`.
- Criar estados para controlar a abertura/fechamento de cada modal.

---

## 4. Dependências Técnicas

- **QR Code:** Biblioteca `qrcode.react` para gerar o código visual do 2FA.
- **Validação:** React Hook Form ou lógica customizada para as regras de senha.
- **Backend APIs:**
  - `POST /api/auth/change-password`
  - `POST /api/auth/2fa/setup` & `POST /api/auth/2fa/verify`
  - `DELETE /api/sessions`

---

## 5. Riscos e Pontos de Atenção

| Risco | Mitigação |
| :--- | :--- |
| **Perda de acesso ao 2FA** | Exigência de confirmação de Backup Codes no momento da ativação. |
| **Logout acidental** | Confirmação clara no modal de "Encerrar todas as sessões". |
| **Senha fraca** | Validação em tempo real (regex) e feedback visual de força. |
| **Segurança de Tokens** | Nunca retornar Secrets de 2FA em endpoints de GET comuns. |

---

## 6. Checklist de Testes

### Segurança & Fluxo
- [ ] Tentar alterar senha com a "Senha atual" incorreta.
- [ ] Ativar 2FA e validar código com delay (expiração de 30s).
- [ ] Verificar se as sessões remotas são realmente encerradas após o logout em massa.
- [ ] Confirmar se os alertas de segurança persistem após o reload da página.

### UX/UI
- [ ] Validar responsividade dos modais em telas pequenas (campo de QR Code).
- [ ] Testar navegação por teclado (Enter para confirmar, Esc para fechar).
- [ ] Feedback de "Loading" durante o processamento de criptografia de senha.



