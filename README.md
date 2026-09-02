# Portal de Serviços UEM

O Portal de Serviços UEM reúne bolsas, editais, locais e serviços importantes para a comunidade da Universidade Estadual de Maringá.

## Como rodar no computador

Você precisa ter o Node.js instalado.

1. Abra um terminal dentro da pasta `portal-uem`.
2. Instale as dependências:

	```bash
	npm install
	```

3. Inicie o site para desenvolvimento:

	```bash
	npm run dev
	```

4. Abra no navegador o endereço mostrado no terminal, normalmente `http://localhost:5173`.

Para criar uma versão de produção, execute:

```bash
npm run build
```

## Organização das pastas

Os arquivos principais ficam dentro de `src/`:

- `src/pages/`: telas completas do site, como a Home, a página de exploração, os detalhes de um serviço e a página Sobre.
- `src/components/`: partes reutilizáveis das telas, como busca, filtros e itens de lista.
- `src/data/`: listas de oportunidades e facilidades exibidas no portal.

Outros arquivos importantes são `src/App.jsx`, que define as rotas, e `public/`, que guarda arquivos públicos usados diretamente pelo site.

As rotas disponíveis são:

- `/`: página inicial.
- `/explorar`: busca, filtros e listas de bolsas, editais, locais e serviços.
- `/servico/id-do-item`: detalhes de uma oportunidade ou facilidade.
- `/sobre`: informações sobre o projeto.

## Como adicionar uma oportunidade

Siga os passos com calma. Não é preciso criar uma nova página ou componente.

1. Abra `src/data/oportunidades.js`.
2. Dentro de `oportunidadesData`, copie um objeto completo que já existe.
3. Cole a cópia antes do `];` final.
4. Coloque uma vírgula depois do objeto anterior, se necessário.
5. Troque os valores pelos dados da nova oportunidade. Use este modelo:

	```js
	{
	  id: "monitoria-2026",
	  titulo: "Programa de Monitoria",
	  categoria: "Ensino",
	  descricao: "Informações sobre inscrições e vagas de monitoria acadêmica.",
	  link: "https://exemplo.uem.br/monitoria",
	  tags: ["monitoria", "ensino", "vagas"],
	  destaque: false
	},
	```

6. Salve o arquivo.
7. Com o site rodando, abra `/explorar` e procure o título da nova oportunidade.
8. Clique no item para conferir a descrição e o botão de acesso. Também teste `/servico/monitoria-2026`, usando o `id` escolhido no final do endereço.

## Como adicionar uma facilidade

O processo é igual, mas o arquivo é `src/data/facilidades.js`:

1. Abra `src/data/facilidades.js`.
2. Copie um objeto existente dentro de `facilidadesData`.
3. Cole a cópia antes do `]` final e ajuste os dados.
4. Salve e abra `/explorar`.
5. Clique na aba **Locais e Serviços**, procure o novo item e expanda-o para conferir a descrição e o botão.

Exemplo:

```js
{
  id: "espaco-convivencia",
  titulo: "Espaço de Convivência",
  categoria: "Estrutura",
  descricao: "Local para descanso e convivência da comunidade acadêmica.",
  link: "https://exemplo.uem.br/convivencia",
  tags: ["convivência", "campus", "estrutura"],
  destaque: false
},
```

## O que significa cada campo

Todo item deve seguir o mesmo formato. Mantenha os nomes dos campos exatamente como nos exemplos.

- `id`: identificador único do item. Use letras minúsculas, sem acentos, separando palavras com hífen. Ele também será usado no endereço da página de detalhes.
- `titulo`: nome que aparecerá para os visitantes.
- `categoria`: grupo do item, como `Pesquisa`, `Estágio`, `Alimentação` ou `Biblioteca`. A categoria aparece nos filtros e na organização das listas.
- `descricao`: explicação curta e clara do que a pessoa encontrará nesse serviço ou oportunidade.
- `link`: endereço da página oficial. Inclua `https://` ou `http://` no início.
- `tags`: lista de palavras relacionadas. Elas ajudam a busca a encontrar o item. Cada palavra deve ficar entre aspas e separada por vírgula.
- `destaque`: use `true` para mostrar o item na seção de destaques da página inicial; use `false` para deixá-lo apenas nas listas.

Antes de finalizar, confira se o `id` não é igual ao de outro item, se o link abre corretamente e se todas as vírgulas e aspas estão no lugar. Depois, execute `npm run build` para verificar a versão final.
