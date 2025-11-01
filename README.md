# 🌿 Raízes Vivas: Produtos Veganos - Entrega Final

## 📝 Descrição do Projeto

Este projeto consiste em um website de e-commerce conceitual para uma marca de **produtos veganos para consumo humano**, chamada "Raízes Vivas". O foco do desenvolvimento não está apenas na apresentação visual dos produtos, mas principalmente na excelência técnica.

A entrega final demonstra a aplicação de **práticas profissionais de mercado**, incluindo a gestão de código com **GitFlow**, a conformidade total com a **Acessibilidade WCAG 2.1 Nível AA** (com modos de alto contraste e navegação por teclado), e a preparação do código para **Otimização de Produção** (minificação e compressão de assets).

O tema vegano reforça o compromisso ético e a responsabilidade social, refletindo-se nas cores naturais e na clareza da comunicação exigida pelas normas de acessibilidade.

**(Mantenha todas as outras seções do README.md sobre Git/GitHub, Acessibilidade e Otimização para Produção, pois elas descrevem o cumprimento das Especificações Técnicas Obrigatórias.)**

## ⚙️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica (WCAG)
* **CSS3:** Estilização com foco em contraste (4.5:1) e temas.
* **JavaScript (Vanilla):** Lógica de alternância de temas e otimizações.

---

## ✅ Cumprimento das Especificações Técnicas

### 1. Controle de Versão com Git/GitHub (GitFlow & SemVer)

O repositório está configurado para seguir um fluxo de trabalho profissional, conforme os requisitos:

* **Estratégia de Branching:** Implementação de **GitFlow**. O desenvolvimento ocorre na branch `develop`, com branches de `feature/`, fusões via **Pull Requests** (documentados) e a branch `main` reservada para versões de produção.
* **Histórico de Commits:** Utilização de **Commits Semânticos** (`feat:`, `fix:`, `refactor:`, `docs:`). Exemplo: `feat: implementa a lógica de modo escuro acessível`.
* **Releases e Versionamento:** Sistema de **Releases** (Tags) utilizando **Versionamento Semântico (SemVer)**. Exemplo: `v1.0.0` (Release Inicial), `v1.0.1` (Hotfix), `v1.1.0` (Nova Feature).
* **Gestão:** Uso de **Issues** para rastrear bugs/tarefas e **Milestones** para agrupar entregas.

### 2. Acessibilidade (WCAG 2.1 Nível AA)

A acessibilidade foi prioridade, garantindo a conformidade com as diretrizes de Nível AA:

* **Navegação por Teclado:** Todos os elementos interativos (`<button>`, `<a>`) possuem um **foco visível robusto** (implementado em `accessibility.css`) para garantir a navegação via tecla `Tab`.
* **Estrutura Semântica:** Uso correto de tags como `<header>`, `<nav>`, `<main>`, `<footer>` e `<h1>-<h6>`, além de atributos **ARIA** (Ex: `aria-label` na navegação).
* **Contraste:** O CSS garante um **contraste mínimo de 4.5:1** para o texto normal em todos os modos (claro, escuro e alto contraste).
* **Leitores de Tela:** Estrutura e marcação limpas, com textos alternativos (`alt=""`) em imagens e labels claros, garantindo que o leitor de tela interprete corretamente.
* **Modos Acessíveis:** Implementação de **Modo Escuro** e **Versão de Alto Contraste** (`body[data-theme="dark/high-contrast"]`) que podem ser alternados pelo usuário via botão, mantendo o contraste AA.

### 3. Otimização para Produção

* **Minificação (Pronto para Implementação):** O projeto está estruturado para receber ferramentas de *build* (como Webpack, Parcel ou Gulp) para automatizar a **minificação de HTML, CSS e JavaScript** antes do *deploy*.
* **Compressão de Imagens (Pronto para Implementação):** Todas as imagens na pasta `/src/assets/images` foram/serão processadas com ferramentas de compressão (Ex: TinyPNG ou Squoosh) para reduzir o tamanho dos arquivos, otimizando o carregamento (*Performance*).

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Você só precisa de um navegador web moderno.

### Instruções

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/fabriciolivo/ProjWebFinal12.git
    ```

2.  **Abra no Navegador:**
    Abra o arquivo `index.html` diretamente no seu navegador.

---

## 🎓 Créditos

Este projeto foi desenvolvido como requisito da disciplina de **Desenvolvimento WEB**.

* **Desenvolvedor:** Fabricio Gabriel Olivo

* **Disciplina:** Desenvolvimento WEB - Universidade Positivo