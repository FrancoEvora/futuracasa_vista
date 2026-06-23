# Futura Casa v14.6 — AR com coordenadas DXF

Base:
- Plataforma completa preservada da v14.5.
- Mapa georreferenciado validado preservado.
- A camada AR/rota passa a preferir coordenadas técnicas extraídas do DXF.

O que mudou:
- Cada lote com vínculo técnico recebe:
  - latitude/longitude;
  - UTM E/N;
  - EPSG:31983;
  - fonte e nível de confiança.
- O botão `Ver no local (AR)` passa a usar o centroide técnico do lote quando disponível.
- A rota do Google Maps também passa a usar a coordenada técnica quando disponível.
- Lotes sem vínculo técnico deixam de usar coordenada visual/fake para AR.
- O modal `Ver detalhes` informa a fonte da coordenada usada.

Cobertura automática:
- 243 lotes/pontos com coordenada DXF vinculada automaticamente.
- 189 vínculos diretos por Quadra + Lote.
- 54 vínculos por área/lote, marcados para revisão.
- 8 lotes/pontos ficaram pendentes de validação técnica.

Arquivo de auditoria:
- `solaris_ar_coords_dxf_v14_6.csv`

Observação:
Para uso definitivo em campo, a próxima etapa recomendada é validar os polígonos SVG/GeoJSON por lote e substituir os vínculos candidatos por vínculo cadastral definitivo.
