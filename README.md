# Futura Casa v10.6 — Single GitHub

Versão criada para quando o GitHub não aceita a pasta de imagens.

Esta versão possui:
- apenas `index.html` na raiz;
- sem pasta `assets`;
- imagens comprimidas e embutidas no próprio HTML;
- tamanho reduzido em relação à versão anterior com imagens em base64 grandes.

Como publicar:
1. Crie/abra o repositório no GitHub.
2. Envie apenas `index.html` e, se quiser, este `README.md`.
3. Na Vercel, publique como projeto estático, sem build command.

Observação: por usar imagens embutidas, o HTML fica maior que uma página simples, mas não depende de pasta de imagens.
