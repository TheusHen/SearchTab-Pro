# 🔍 SearchTab Pro

**SearchTab Pro** é uma aplicação de busca rápida feita com **Electron**, que exibe a **temperatura atual automaticamente** e permite realizar pesquisas em múltiplos mecanismos de busca com um visual estiloso.


## 🌈 Destaques

- **Mostrador de Temperatura** baseado na geolocalização do usuário
- **Animação de borda "rainbow"** adaptada às cores do mecanismo de busca selecionado
- Interface leve, moderna e personalizável


## 🔎 Mecanismos de Busca Suportados

Você pode escolher entre os seguintes buscadores:

| Mecanismo     | URL base para busca                      |
|---------------|------------------------------------------|
| Google        | `https://www.google.com/search?q=`       |
| Yahoo!        | `https://search.yahoo.com/search?p=`     |
| Bing          | `https://www.bing.com/search?q=`         |
| DuckDuckGo    | `https://duckduckgo.com/?q=`             |
| Yandex        | `https://yandex.com/search/?text=`       |
| GitHub        | `https://github.com/search?q=`           |


## ⚙️ Tecnologias Utilizadas

- **Electron**: Framework principal para aplicação desktop
- **HTML/CSS/JS**: Interface responsiva e animada
- **Lucide Icons**: Ícones modernos e leves
- **APIs de Clima**: Para exibir temperatura em tempo real


## 🚀 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/SearchTab-Pro.git
   cd SearchTab-Pro
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o projeto:

   ```bash
   npm start
   ```


## 📦 Empacotando para Produção

Para gerar uma versão executável:

```bash
npm run dist
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.