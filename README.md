# Futura Casa v7.2 — Campo AR Futura Casa

Esta versão recria a parte de geolocalização, rota, GPS e realidade aumentada do zero, usando o layout e a linguagem visual da Futura Casa.

## Premissa

O GeoVendas foi usado apenas como referência teórica de propósito: orientação em campo, pontos próximos e navegação.
Não há uso de código, marca, API, backend ou estrutura técnica do GeoVendas.

## Recursos mantidos

- Experiência do comprador;
- Lotes, casas, combos e simulação;
- Detalhes dos lotes;
- Rota via Google Maps;
- Realidade aumentada/câmera;
- Cadastro de novos lotes;
- Fotos e vídeos no cadastro;
- Edição/cadastro posterior de GPS.

## Recursos v7.2

A tela de realidade aumentada agora usa um módulo próprio chamado **Futura Casa Campo**:
- visual claro e premium;
- cards flutuantes no padrão da Futura Casa;
- câmera do celular como fundo, quando autorizada;
- fallback com imagem do lote;
- bússola/orientação;
- distância até o lote;
- botão de rota;
- atualização de GPS.

## Observação técnica

Este protótipo usa `localStorage` para salvar lotes cadastrados. Em produção, deve ser conectado a banco de dados, storage e backend.
