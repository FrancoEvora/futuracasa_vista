# Futura Casa v13.0 — Corretores e Leads

Nova versão com programa de Corretores Parceiros.

Principais recursos:
- Links rastreáveis por corretor com `?ref=slug`.
- UTM de campanha, origem e mídia.
- Persistência de atribuição em localStorage:
  - origem inicial;
  - último clique;
  - corretor responsável;
  - campanha.
- Rastreamento de eventos:
  - page_view;
  - lot_action;
  - home_action;
  - proposal_created;
  - lead_identified;
  - wellness_click;
  - reservation_click;
  - pdf_download_click.
- Geração de lead quando o cliente informa dados e envia proposta.
- Proposta enviada ao WhatsApp do corretor parceiro, quando houver.
- Página `corretores.html` para gerar links e QR Codes.
- Página `painel-corretor.html` para o corretor acompanhar seus leads.
- Página `backoffice-corretores.html` para gestão administrativa.
- Mantida a jornada comercial da Futura Casa e a página Wellness.

Observação:
Esta versão é funcional em protótipo usando localStorage. Em produção, os mesmos eventos devem ir para banco de dados / CRM via API.
