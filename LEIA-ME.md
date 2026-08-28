# Portfólio — pacote de correção

O que mudou, por quê, e o que fazer com cada arquivo.

---

## O resumo

| | antes | depois |
|---|---:|---:|
| Repositório (com histórico) | 2.900 MB | ~158 MB |
| Arquivos do site | 1.912 MB | 158 MB |
| Vídeos | 678 MB | 79 MB |
| Depende de CDN externo para abrir | sim | não |

Testei as nove páginas num navegador real, **com todo o acesso externo bloqueado**. Todas renderizam, nenhuma dá erro, nenhuma estoura na horizontal no celular.

---

## 1. Vídeos: comprimir, não mandar para o Vimeo

Olhei as 65 tags `<video>` do site. **Todas** são `muted loop playsinline` — 63 delas com `preload="none"` e carregamento preguiçoso. São loops decorativos: turntables, capturas de interface, fundos em movimento. Ninguém aperta play neles.

Trocar isso por iframes do Vimeo colocaria player, spinner de carregamento e marca d'água do Vimeo por cima do seu design, somaria uma ida à rede antes de cada loop e quebraria o lazy-load que o `support.js` já faz.

O problema real era outro: seus arquivos estavam em **4K a 8 Mbps** para aparecer em elementos de 600 a 1200 px de largura.

O que fiz: reescala para no máximo 1600 px (1920 px nos dois heros), H.264 CRF 30, áudio removido, `faststart` ligado.

**678 MB → 79 MB. 8,6 vezes menor.** Comparei quadros lado a lado: na largura em que aparecem, não dá para distinguir.

O Vimeo continua valendo como backup e é o lugar certo para peças que alguém assiste de verdade — um reel, um filme completo. Só não para loop de fundo.

---

## 2. O site dependia do unpkg.com para existir

O `support.js` baixava React, ReactDOM e Babel do `unpkg.com` a cada visita. Testei com o unpkg fora do ar: **a página fica preta, altura zero.** Não degradava, apagava.

O que fiz: baixei as três bibliotecas para `vendor/` e apontei o `support.js` para elas. Agora o site abre sozinho, sem depender de servidor de terceiros.

---

## 3. Sessenta por cento do repositório era lixo

| pasta | arquivos | peso | usado pelas páginas |
|---|---:|---:|---|
| `uploads/` | 202 | 1.075 MB | **nenhum** |
| `assets/` órfãos | 66 | 67 MB | nenhum |
| `figma/` | 73 | 8 MB | nenhum |
| `refs/` | 10 | 1 MB | nenhum |

A `uploads/` é a pasta de staging do Claude Design. Nenhuma página aponta para lá.

---

## O que tem neste pacote

- **`support.js`** — já corrigido, sem o unpkg. Substitua o seu.
- **`vendor/`** — as três bibliotecas. Copie a pasta inteira para a raiz do site.
- **`.gitignore`** — impede `uploads/`, `figma/` e `refs/` de voltarem. Copie para a raiz.
- **`comprimir-videos.sh`** — o script que usei, para você repetir com vídeos novos.

Os **63 vídeos otimizados** vão num pacote separado.

---

## Passo a passo

**1. Apague o que não é usado**

Na sua pasta local, apague `uploads/`, `figma/`, `refs/`, `.thumbnail` e `CLAUDE.md`.

Apague também os dois arquivos duplicados: `Henrique Celso - Portfolio.html` (7 MB) e `Portfolio Standalone.dc.html` — o `index.html` já é a home.

**2. Substitua os vídeos**

Descompacte o pacote de vídeos por cima da pasta, mantendo a estrutura. Cada arquivo cai exatamente onde o antigo estava, com o mesmo nome. Nenhum HTML precisa ser editado.

**3. Substitua o `support.js` e adicione a `vendor/`**

**4. Comece um repositório novo**

Esta parte é chata mas importante: o histórico do Git já guarda o 1 GB da `uploads/`, e apagar os arquivos agora não encolhe o histórico. Como só existe um commit, o caminho limpo é recomeçar.

- No GitHub, apague o repositório atual (Settings → General → fim da página → Delete this repository)
- Crie um novo, **público**, com o nome `henriquecelso-portfolio`
- No GitHub Desktop: File → New repository, apontando para a pasta já limpa
- Commit e publish

**5. Tire a pasta de dentro do Dropbox**

O Git escreve na pasta `.git` o tempo todo e o Dropbox tenta sincronizar no meio da escrita. Isso corrompe repositório. Mova para algo como `E:\Projetos\henriquecelso-portfolio`.

---

## Depois disso

Com 158 MB o site cabe com folga em qualquer hospedagem — o GitHub Pages aceita até 1 GB, o Cloudflare Pages até 25 MB por arquivo (seu maior vídeo agora tem 8,8 MB).

Sobrou uma gordura: **76 MB em imagens**, quase tudo PNG e JPG em tamanho original. Dá para levar isso a uns 25 MB convertendo para WebP sem perda visível. Não é urgente — fica para quando o site já estiver no ar.
