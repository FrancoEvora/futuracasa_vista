# Futura Casa v14.0 — Mapa Profissional

Nova linha v14.

Correções principais:
- Uma única base de mapa (`solaris-mapa-master-v14.jpg`) passa a ser usada no mapa geral e no detalhamento do lote.
- O setor de águas foi incorporado ao mapa mestre de forma sutil e consistente.
- Removida a bagunça visual de bolhas de quadras espalhadas sobre o mapa.
- O mapa mostra somente:
  - a quadra selecionada;
  - o lote selecionado;
  - o setor de águas;
  - legenda discreta.
- O detalhamento do lote agora mostra o mesmo mapa mestre com o lote destacado.
- A lista de lotes continua filtrada por quadra e status.
- Mantidos os status provisórios: 60% disponíveis, 30% vendidos e 10% reservados.
- Mantidos Corretores, Leads, Wellness e Blogs.

Observação técnica:
Esta versão ainda usa posições visuais aproximadas calculadas a partir do mapa mestre. A versão de produção deve converter o DXF em SVG/GeoJSON com polígonos reais por quadra e lote.
