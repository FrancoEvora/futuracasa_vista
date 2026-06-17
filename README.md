# Futura Casa v10.5 — GitHub Light

Versão organizada para GitHub/Vercel.

Estrutura:
- `index.html` leve, sem imagens em base64
- `assets/css/app.css`
- `assets/js/app.js`
- `assets/img/` com todas as imagens usadas pela plataforma

Para publicar:
1. Suba todo o conteúdo desta pasta para o repositório.
2. Mantenha `index.html` na raiz.
3. Mantenha a pasta `assets` na raiz.
4. Na Vercel, use projeto estático, sem build command.

Observação:
A versão anterior usava imagens embutidas no HTML para evitar falhas de carregamento; esta versão separa os arquivos corretamente para reduzir o tamanho do `index.html`.
