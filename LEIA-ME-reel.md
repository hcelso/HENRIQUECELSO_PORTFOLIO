# Reel novo — 3 páginas corrigidas

O reel antigo (Vimeo `1220255111`) **não existe mais** — a API do Vimeo devolve 404 nele.
Isso significa que o vídeo de fundo da home e o player da página About estavam quebrados
antes desta correção.

Troquei para o novo: `1221948070` — *demo_reel_2026*, 1min52s.

## Arquivos

Substitua estes três na raiz da sua pasta:

- `index.html` — reel como vídeo de fundo do hero
- `About.dc.html` — reel na seção "Motion reel"
- `Portfolio Standalone.dc.html` — mesma home, versão avulsa

## Por que não usei o código que você mandou

O embed que o Vimeo te dá vem com os parâmetros de compartilhamento padrão, que mostram
barra de controles, título e botões. As suas páginas já usavam parâmetros diferentes, feitos
para o design:

    home:  background=1&muted=1&loop=1&autoplay=0&autopause=0&badge=0&dnt=1
    about: muted=1&loop=1&autoplay=0&autopause=0&badge=0&byline=0&title=0&portrait=0&dnt=1

Mantive esses parâmetros e troquei só o número do vídeo. Se eu tivesse colado o embed
padrão por cima, o player apareceria com toda a interface do Vimeo em cima do seu layout.

O `dnt=1` que já estava lá desliga o rastreamento do Vimeo — bom que fique.
