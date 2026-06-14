# Futura Casa v7.3 — Campo AR em Tempo Real

Esta versão ajusta a janela de Realidade Aumentada para ficar melhor encaixada no celular e identificar o lote em tempo real.

## Ajustes principais

- A janela do modo campo agora ocupa a tela de forma mais adequada.
- Ao abrir a experiência, o GPS identifica em tempo real o lote mais próximo.
- Se o usuário estiver dentro do raio de precisão do lote, aparece "Você está em".
- Se estiver fora, aparece "Lote mais próximo".
- Os marcadores flutuantes passam a indicar lotes próximos e locais relevantes.
- Câmera, bússola, rota, atualização de GPS e cadastro de lote foram mantidos.

## Observação técnica

O reconhecimento "em qual lote estou" é feito por proximidade entre a localização atual do usuário e as coordenadas cadastradas dos lotes.
Em produção, o ideal é evoluir para polígonos de lote/quadra, em vez de apenas coordenada central.
