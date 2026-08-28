# Link do Instagram corrigido

Antes: `https://instagram.com`     (página inicial do Instagram)
Agora: `https://instagram.com/hcelsotz`

Corrigido nas 9 páginas, uma ocorrência em cada.

## Auditoria depois da mudança

    links entre páginas ........  58 ok  /  0 quebrados
    âncoras (#secao) ...........  95 ok  /  0 quebradas
    imagens, vídeos e scripts .. 219 ok  /  0 quebrados

## Todos os links externos do site, agora

    9x  https://instagram.com/hcelsotz
    9x  Google Fonts (Archivo)
    3x  Vimeo — demo_reel_2026 (1221948070)
    1x  Vimeo — opening_sequence_full_motion_01 (1221022028)
    2x  YouTube — RTFKT (The Signal e The Warning)

## Como aplicar

1. Substitua os 9 arquivos .html na sua pasta
2. GitHub Desktop: **Fetch origin** primeiro (por causa do arquivo CNAME do domínio)
3. Summary: `corrige link do instagram`
4. Commit to main
5. Push origin

O passo 2 é importante: o GitHub criou um arquivo chamado CNAME quando você
ligou o domínio. Se você enviar sem buscar antes, esse arquivo some e o
henriquecelso.com sai do ar.
