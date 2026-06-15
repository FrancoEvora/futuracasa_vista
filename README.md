# Futura Casa v8.1 — Simulador financeiro nas imagens de IA

Ajuste solicitado:
- depois que as imagens da simulação de casa por IA são geradas, cada imagem passa a trazer o botão **Abrir simulador financeiro**.
- ao clicar, a plataforma seleciona o lote atual, escolhe um modelo de casa compatível com o estilo visual escolhido e abre a bandeja/simulador financeiro em modo **Lote + casa**.

Observação:
- a chamada real à IA segue preparada para o endpoint `/api/chatgpt-house`;
- sem backend conectado, a plataforma usa o fallback visual local e o mesmo fluxo de simulação financeira.
