<img width="60"  src="/IMG/logo_ccm.png" /> <img width="60"  src="/IMG/logo_yvone.png" />

# Sistema Escolar

Um sistema web desenvolvido para auxiliar estudantes na organização da rotina escolar, reunindo recursos de **anotações, agenda, horário de aulas e atividades** em um único ambiente.

O projeto foi desenvolvido com **HTML, CSS e JavaScript**, utilizando o **LocalStorage** para armazenar os dados no navegador.

---

## 📌 Sobre o projeto

O **Sistema Escolar** possui uma interface voltada para a organização da rotina escolar. A página inicial funciona como um menu de acesso às principais funcionalidades:

* 📝 Anotações
* 📅 Agenda
* 🕐 Horário
* 📚 Atividades
* 🔐 Cadastro e Login

---

## 🚀 Funcionalidades

### 🔐 Cadastro

Permite criar uma conta utilizando um e-mail institucional. O sistema verifica se o endereço possui o domínio:

```text
@escola.pr.gov.br
```

Após a validação, o e-mail e a senha são armazenados no `localStorage` e o usuário é encaminhado para a tela de login.

Também é possível visualizar ou ocultar a senha durante o cadastro.

### 🔑 Login

O usuário informa o e-mail e a senha cadastrados, que são comparados com os dados armazenados no `localStorage`.

A página também possui a opção de **alterar a senha**, mediante a confirmação do e-mail cadastrado.

### 📝 Anotações

Permite criar e editar anotações diretamente na página, além de excluí-las quando necessário.

As alterações são salvas automaticamente no `localStorage`, mantendo as anotações disponíveis mesmo após fechar ou atualizar a página.

### 📅 Agenda

Permite adicionar eventos às datas desejadas através de um calendário criado dinamicamente com JavaScript.

Possui:

* Navegação entre os meses;
* Seleção de dias;
* Identificação de dias com eventos;
* Criação e edição de eventos;
* Exclusão de eventos;
* Armazenamento dos eventos no `localStorage`.

### 🕐 Horário

Apresenta as matérias e os materiais necessários para as aulas durante os dias úteis da semana.

O usuário pode navegar entre os dias utilizando os botões de anterior e próximo.

O horário é **meramente ilustrativo**, sendo as matérias organizadas por meio de uma função de embaralhamento em JavaScript.

### 📚 Atividades

A seção disponibiliza atividades de exercícios e revisão.

Atualmente, existe uma atividade disponível, composta por questões de múltipla escolha. Todas as questões devem ser respondidas antes do envio, senão, o mesmo é impedido.

Após a conclusão, o sistema calcula os acertos e armazena o resultado no `localStorage`.

#### 🔒 Bloqueio após conclusão

Uma atividade concluída passa de **PENDENTE** para **FEITA** e não pode ser respondida novamente.

Ao acessá-la posteriormente, o sistema entra em modo de revisão, no qual:

* As alternativas ficam desabilitadas;
* A resposta escolhida é apresentada;
* A resposta correta é identificada;
* Respostas incorretas são destacadas;
* O resultado final é exibido.

---

## 💾 Armazenamento de dados

O projeto utiliza o `localStorage` do navegador para manter os dados entre acessos.

| Informação             | Chave           |
| ---------------------- | --------------- |
| E-mail do usuário      | `email_usuario` |
| Senha                  | `senha_usuario` |
| Anotações              | `notas`         |
| Eventos da agenda      | `eventos`       |
| Resultado da atividade | `atividade_1`   |

---

## 🛠️ Tecnologias utilizadas

* **HTML5** — estrutura das páginas;
* **CSS3** — estilização e organização visual;
* **JavaScript** — lógica, interações, manipulação do DOM e armazenamento dos dados.

---

## 📁 Estrutura do projeto

```text
SistemaEscolar/
│
├── CSS/
│   ├── agenda.css
│   ├── anotacoes.css
│   ├── atividades.css
│   ├── atividade_1.css
│   ├── cadastro.css
│   ├── home.css
│   ├── horario.css
│   └── login.css
│
├── HTML/
│   ├── agenda.html
│   ├── anotacoes.html
│   ├── atividades.html
│   ├── atividade_1.html
│   ├── cadastro.html
│   ├── home.html
│   ├── horario.html
│   └── login.html
│
├── IMG/
│   ├── anotacoes_mais.png
│   ├── cadastro_circulos.png
│   ├── home_banner.jpg
│   ├── login_circulos.png
│   ├── olho.png
│   └── olho_invisivel.png
│
├── JS/
│   ├── agenda.js
│   ├── anotacoes.js
│   ├── atividades.js
│   ├── atividade_1.js
│   ├── cadastro.js
│   ├── horario.js
│   └── login.js
│
└── readme.md
```

---

## 🔄 Funcionamento geral

O fluxo principal do sistema é:

```text
Cadastro
   ↓
Login
   ↓
Página Inicial
   ↓
┌───────────────┬──────────────┬──────────────┬──────────────┐
│   Anotações   │    Agenda    │    Horário   │  Atividades  │
└───────────────┴──────────────┴──────────────┴──────────────┘
```

Após realizar o cadastro e o login, o usuário pode acessar as funcionalidades disponíveis e utilizar o sistema para organizar sua rotina escolar.

---

## 🎯 Objetivo

O projeto foi desenvolvido como uma **aplicação acadêmica para estudo e prática de desenvolvimento web**, aplicando conceitos de HTML, CSS e JavaScript em uma situação prática.

Entre os principais conceitos utilizados estão:

* Manipulação do DOM;
* Eventos JavaScript;
* Estruturas condicionais;
* Arrays e objetos;
* Manipulação de formulários;
* Validação de dados;
* `localStorage`;
* Criação dinâmica de elementos;
* Desenvolvimento de interfaces interativas.

## 📃 Documentos da Refatoração
Documento com os detalhes da refatoração de algumas partes do código: **https://docs.google.com/document/d/1bkDdpyL-PEb-UV29muW-UHKVLFNz9mCDFUpjEYq0rpo/edit?usp=sharing**
