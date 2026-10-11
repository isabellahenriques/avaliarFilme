# avaliarFilme

Projeto Node.js desenvolvido para o **Exercício 5** da aula de Lógica de Programação. A aplicação recebe as notas dadas por diferentes usuários a filmes e calcula quantas pessoas votaram, a média das notas e a classificação final de cada filme.

## Autor

- Isabella Henriques Szrajbman

## Enunciado

**Exercício 5**

Criar um projeto Node no VS Code, seguindo a estrutura já compartilhada na aula 4, contendo o código de aplicação/fonte e arquivos de teste. Deve conter ao menos 3 casos de teste em cada um dos exercícios. Entrega por meio de um repositório do GitHub atualizado.

Você tem um vetor com notas de diferentes usuários para os respectivos filmes:

**Entrada:**

```javascript
[
  { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
  { nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] },
  { nome: "Se eu fosse você", avaliacoes: [1, 2, 3] }
]
```

**Saída:**

- Quantas pessoas votaram no filme?
- Qual é a média das notas?
- Deve retornar a avaliação:
  - Média >= 4: `"Filme recomendado"`
  - Média entre 3 e 4: `"Filme razoável"`
  - Média < 3: `"Filme ruim"`

## Estrutura do projeto

```
avaliarFilme/
├── src/
│   └── avaliarFilme.js        # código-fonte (funções da aplicação)
├── test/
│   └── avaliarFilme.test.js   # testes automatizados (Mocha)
├── package.json
└── README.md
```

## Como foi feito

### 1. Criação do projeto

Segui o passo a passo da aula 4:

1. Criei a pasta do projeto e a abri no VS Code.
2. Iniciei o projeto com `npm init -y`.
3. Alterei o `package.json` para `"type": "module"`, permitindo usar `import` e `export`.
4. Criei as pastas `src` (código-fonte) e `test` (testes).
5. Instalei o Mocha como dependência de desenvolvimento com `npm i -D mocha`.

### 2. Código-fonte (`src/avaliarFilme.js`)

O código foi dividido em funções pequenas, cada uma com uma responsabilidade:

| Função | O que faz |
| --- | --- |
| `contarVotos(avaliacoes)` | Retorna quantas pessoas votaram (tamanho do vetor de notas). |
| `calcularMedia(avaliacoes)` | Soma todas as notas e divide pela quantidade de votos. |
| `classificarFilme(media)` | Retorna `"Filme recomendado"`, `"Filme razoável"` ou `"Filme ruim"` conforme a média. |
| `avaliarFilme(filme)` | Junta as três funções acima e devolve um objeto com `nome`, `votos`, `media` e `avaliacao`. |

Todas as funções são exportadas com `export` para poderem ser importadas nos testes.

### 3. Testes (`test/avaliarFilme.test.js`)

Os testes usam o **Mocha** com o módulo `assert` do Node (`assert.equal`). Cada função tem uma suíte (`describe`) com pelo menos 3 casos de teste (`it`), totalizando **17 testes**. Os dados de cada caso são declarados dentro do próprio teste.

Além dos três filmes do enunciado, cobri casos extras: filme com apenas 1 avaliação, lista de avaliações vazia e os **valores de fronteira** da classificação (médias 4, 3, 2.9 e 2), que é onde costumam aparecer erros em condições `>=` e `<`.

Resultado esperado para os dados do enunciado:

| Filme | Votos | Média | Avaliação |
| --- | --- | --- | --- |
| Minha mãe é uma peça | 5 | 4.4 | Filme recomendado |
| Saneamento Básico | 5 | 3.2 | Filme razoável |
| Se eu fosse você | 3 | 2 | Filme ruim |

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/pt-br) instalado.

Dentro da pasta do projeto:

```bash
# instalar as dependências
npm install

# rodar os testes
npx mocha
```

O comando `npm test` também funciona, pois o script `test` do `package.json` executa o Mocha.

## Tecnologias

- JavaScript (ES Modules)
- Node.js
- Mocha (testes)
- Git
