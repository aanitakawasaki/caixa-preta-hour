//alert('bem-vinda/o/e à CAIXA PRETA, de Itamar Assumpção!');

function carregar () {
    var trechomusica = window.document.querySelector('p#trechomusica');
    //console.log(trechomusica);
    var imagem = window.document.getElementById('imagem');
    //console.log(imagem);

    var datasistema = new Date();
    //var horasistema = datasistema.getHours();
    var horasistema = 9;

    switch (horasistema) {
        case 0:
            trechomusica.innerHTML = `justo você, Berenice. que não chega nem aos pés da poeta Alice, da Penélope de Ulisses, da irmã Dulce, da Marlene Dietrich.`
            imagem.src = 'ita0.png'
            imagem.alt = `foto de Itamar, em preto e branco, olhando para a câmera, com um dos braços apoiados em um sofá`
            break;
        case 1:
            trechomusica.innerHTML = `um homem com uma dor é muito mais elegante. caminha assim de lado, como se chegasse atrasado, andasse mais adiante.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 2: 
            trechomusica.innerHTML = `a tua boca me dá água na boca. que vontade de grudar uma na outra e sugar bem devagar, gota por gota, beija-flor beijando a flor ou borboleta.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 3: 
            trechomusica.innerHTML = `o trópico tropica, emaranhado no trambique. a treta frutifica e tritura todo o pique. a trapaça trina e troa e extrapola a cada dique. o tratado é intrincado. destratado é truque chique.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 4:
            trechomusica.innerHTML = `quando você menos espera, ela chega. fazendo do teu coração o que bem ela quiser. nem venha querendo você se espantar. não, não, não, não, não.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 5:
            //trechomusica.innerHTML = `${trechomusica.textContent} oi` //testando caso eu quisesse adicionar alguma frase com o js (junto da frase do html)
            trechomusica.innerHTML = `tudo que eu podia fazer, eu já fiz. no entanto, você nem se importa. ainda diz que a vida não é nada mais que um beijo na boca.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 6:
            trechomusica.innerHTML = `ter o fim bem no meio, nenhuma rima em or. o começo que não veio, nossa história de amor. seja meu versejar, cantar como quem resisti, resistir como quem deseja.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 7:
            trechomusica.innerHTML = `sozinha nesta cozinha, em pé eu tomo um café. na pia, a louça suja me lembra da roupa suja no tanque que a vida é.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 8:
            trechomusica.innerHTML = `em caso de dor, ponha gelo. mude o corte de cabelo, mude como modelo. vá ao cinema, dê um sorriso, ainda que amarelo - esqueça seu cotovelo. se amargo for, já ter sido, troque já esse vestido, troque o padrão do tecido. saia do sério, deixe os critérios. siga todos os sentidos, faça fazer sentido. a cada mil lágrimas, sai um milagre.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 9:
            trechomusica.innerHTML = `culturalmente confuso, brasileiro é aculturado. líbio libanês, árabe, turco. acha farinha do mesmo saco.`
            //imagem.src = ''
            //imagem.alt = ''
            break
        case 10:
            trechomusica.innerHTML = ``
    }
}