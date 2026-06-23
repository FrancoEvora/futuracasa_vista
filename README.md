# Futura Casa v14.5 — Mapa com marcação de quadra e lote

Base:
- Plataforma completa preservada da v14.4.
- Imagem georreferenciada validada da v14.3/v14.5: `solaris-mapa-georreferenciado-v14-5.jpeg`.

Correções desta versão:
- A quadra selecionada passa a ser marcada no mapa.
- O lote selecionado passa a ser marcado no mapa.
- O modal de detalhes também mostra o lote e a quadra marcados.
- O botão `Ver no mapa` dos cards de lote agora leva ao mapa e marca o lote.
- O botão `Ver detalhes` continua funcionando e agora abre o mapa com marcação.
- O restante da plataforma foi preservado.

Observação técnica:
As marcações são uma camada visual sobre a imagem georreferenciada. Para precisão cadastral total de clique/tap em cada lote, o próximo passo é usar o SVG/GeoJSON do urbanístico como camada clicável por polígono.
