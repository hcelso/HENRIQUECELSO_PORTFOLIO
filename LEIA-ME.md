# Pacote final — links corrigidos

Este pacote é COMPLETO. Substitui todos os arquivos .html de uma vez.
Não precisa combinar com nenhum pacote anterior.

## Por que ainda estava quebrado

Eu te mandei dois pacotes seguidos e os dois tinham `index.html` dentro.
Você aplicou o segundo (o do formulário), que consertou a home — mas as
outras 7 páginas ficaram com os links antigos. Erro meu na entrega.

Desta vez peguei o seu repositório como ele está agora, com o formulário
que você já subiu, e apliquei a correção por cima. Nada se perde.

## O que foi corrigido

43 links em 7 páginas apontavam para `Portfolio.dc.html`, arquivo que não
existe. Agora apontam para `index.html`, com as âncoras preservadas
(`#home`, `#work`, `#about`, `#contact`).

## Auditoria completa — depois da correção

    links entre páginas ........  58 ok  /  0 quebrados
    âncoras (#secao) ...........  95 ok  /  0 quebradas
    imagens, vídeos e scripts .. 219 ok  /  0 quebrados
    atributos vazios ...........   0

Abri as 9 páginas num navegador de verdade e testei cada link:
nenhum erro de JavaScript, nenhum destino fora do ar.

Links externos conferidos um a um:

    RTFKT — The Signal   YouTube    no ar
    RTFKT — The Warning  YouTube    no ar
    demo_reel_2026       Vimeo      no ar
    opening_sequence     Vimeo      no ar
    Google Fonts (Archivo)          no ar

## Arquivo .nojekyll

Vai junto, é vazio, e faz o GitHub servir seus arquivos exatamente como estão.
Fica invisível no Windows a não ser que você ligue "Itens ocultos" na aba Exibir.

## Como aplicar

1. Copie os 9 arquivos .html para dentro da sua pasta, substituindo
2. Copie também o `.nojekyll`
3. GitHub Desktop: Summary `corrige links`, Commit to main, Push origin
4. Espere 2 minutos e teste

## Uma coisa que sobrou

O ícone do Instagram, em todas as 9 páginas, aponta para `https://instagram.com`
— a página inicial do Instagram, não o seu perfil. Quem clicar não chega até você.

Me passe seu @ que eu corrijo nas 9 de uma vez.
