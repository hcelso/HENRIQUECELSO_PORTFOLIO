# Formulário de contato — o que mudou

O `index.html` em anexo substitui o atual. O formulário agora envia de verdade,
pelo Web3Forms.

## Falta uma coisa: a sua chave

Abra o `index.html` no Bloco de Notas, aperte Ctrl+F e procure por:

    COLE_SUA_CHAVE_AQUI

Troque **só** esse texto pela chave que o Web3Forms te der. Deixe as aspas no lugar.
A linha deve ficar assim:

    <input type="hidden" name="access_key" value="a1b2c3d4-...">

Salve. É a única edição.

Enquanto a chave não estiver lá, apertar Submit mostra o aviso
"formulario ainda nao configurado" e nada é enviado — de propósito,
para não parecer que funcionou.

## O que o formulário faz agora

- Envia sem sair da página. O visitante continua onde estava.
- Mostra "enviando..." no botão enquanto processa.
- Ao dar certo: limpa os campos e mostra "mensagem enviada — obrigado!" em laranja.
- Ao dar errado: avisa em vermelho e mantém o que a pessoa escreveu.
- Tem uma armadilha invisível para robôs de spam (campo `botcheck`).
- Assunto do e-mail: "Novo contato pelo site".

Testei num navegador: envia sem recarregar, sem erro de JavaScript,
e o aviso aparece no lugar certo, na cor da sua marca.

## Onde as mensagens passam

As mensagens vão do site para o servidor do Web3Forms e de lá para o seu e-mail.
Plano gratuito: 250 mensagens por mês.

A chave de acesso pode ficar visível no código — ela é um apelido para o seu
e-mail, não uma senha. Ninguém consegue ler suas mensagens com ela.
