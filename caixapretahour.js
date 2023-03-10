//alert('bem-vinda/o/e à CAIXA PRETA, de Itamar Assumpção!');

function carregar () {
    var trechomusica = window.document.querySelector('p#trechomusica');
    //console.log(trechomusica);
    var imagem = window.document.getElementById('imagem');
    //console.log(imagem);

    var datasistema = new Date();
    var horasistema = datasistema.getHours();
    //var horasistema = 0;

    switch (horasistema) {
        case 0:
            trechomusica.innerHTML = `Justo você, Berenice. Que não chega nem aos pés da poeta Alice, da Penélope de Ulisses, da irmã Dulce, da Marlene Dietrich.`
            imagem.src = 'ita0.png'
            imagem.alt = `foto de Itamar, em preto e branco, olhando para a câmera, com um dos braços apoiados em um sofá`
            break;
        case 1:
            trechomusica.innerHTML = `Um homem com uma dor é muito mais elegante. Caminha assim de lado, como se chegasse atrasado, andasse mais adiante.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 2: 
            trechomusica.innerHTML = `A tua boca me dá água na boca. Que vontade de grudar uma na outra e sugar bem devagar, gota por gota, beija-flor beijando a flor ou borboleta.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 3: 
            trechomusica.innerHTML = `O trópico tropica, emaranhado no trambique. A treta frutifica e tritura todo o pique. A trapaça trina e troa e extrapola a cada dique. O tratado é intrincado. Destratado é truque chique.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 4:
            trechomusica.innerHTML = `Quando você menos espera, ela chega. Fazendo do teu coração o que bem ela quiser. Nem venha querendo você se espantar. Não, não, não, não, não.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 5:
            //trechomusica.innerHTML = `${trechomusica.textContent} oi` //testando caso eu quisesse adicionar alguma frase com o js (junto da frase do html)
            trechomusica.innerHTML = `Tudo que eu podia fazer, eu já fiz. No entanto, você nem se importa. Ainda diz que a vida não é nada mais que um beijo na boca.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 6:
            trechomusica.innerHTML = `Ter o fim bem no meio, nenhuma rima em or. O começo que não veio, nossa história de amor. Seja meu versejar, cantar como quem resisti, resistir como quem deseja.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 7:
            trechomusica.innerHTML = `Sozinha nesta cozinha, em pé eu tomo um café. Na pia, a louça suja me lembra da roupa suja no tanque que a vida é.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 8:
            trechomusica.innerHTML = `Em caso de dor, ponha gelo. Mude o corte de cabelo, mude como modelo. Vá ao cinema, dê um sorriso, ainda que amarelo - esqueça seu cotovelo. Se amargo for, já ter sido, troque já esse vestido, troque o padrão do tecido. Saia do sério, deixe os critérios. Siga todos os sentidos, faça fazer sentido. A cada mil lágrimas, sai um milagre.`
            //imagem.src = ''
            //imagem.alt = ''
            break;
        case 9:
            trechomusica.innerHTML = `Culturalmente confuso, brasileiro é aculturado. Líbio libanês, árabe, turco. Acha, farinha do mesmo saco.`
            //imagem.src = ''
            //imagem.alt = ''
            break
        case 10:
            trechomusica.innerHTML = `Eu me invoco, eu brigo, eu faço, eu aconteço, eu boto pra correr. Eu mato a cobra e mostro o pau, pra provar pra quem quiser ver e comprovar.`
            //imagem.src = ''
            //imagem.alt = ''
            break
        case 11:
            trechomusica.innerHTML = `Cultura não é frescura. A brasileira é uma mistura pura, uma loucura a textura. A brasileira é impura, mas tem jogo de cintura, se apura, mistura, não mata, cura.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 12: 
            trechomusica.innerHTML = `Você vai notar, olhando ao redor, que sou dos males o menor. Pode até contar com o meu amor naquilo que seja lá o que for. Sofrer é antigo, por isso que digo: basta estar vivo pra correr perigo.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 13:
            trechomusica.innerHTML = `Lembre-se: quem não vive tem medo da morte, quem não vive tem medo da morte, quem não vive tem medo da morte. Lembre-se: chavão abre porta grande, chavão abre porta grande, chavão abre porta grande.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 14: 
            trechomusica.innerHTML = `Tenho mil segredos para te contar. Abri todas as conchas do mar, dentro delas achei pérolas, com algumas te fiz um colar. Um colar de pérolas, lisas e bem redondas, lindas bolas claras, contas de perder a conta.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 15:
            trechomusica.innerHTML = `Sendo fim também és. Tu és meio e começo. Sim e não, norte e sul. Direito, avesso. Você me seduziu desde o início, sendo assim porém fica mais difícil. É muita luz pra pouco túnel, é muita areia para o meu caminhãozinho. Meu bem eu morro de ciúmes até do sol que bronzeia você com carinho.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 16:
            trechomusica.innerHTML = `Às vezes me afundo, fico reclamando de tudo, de todo mundo. Bate um desespero ver alguém matar alguém por meros 30 dinheiros. Fato corriqueiro, mas não me acostumo, nem gosto do cheiro.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 17:
            trechomusica.innerHTML = `Eu sou sujeito a chuvas e trovoadas, sendo assim desse jeito, eu nunca terei namorada. Eu fico sempre entre a cruz e a espada: será que compro feito ou será que faço em casa? Se isso posso, ócio já não posso. Isso é o osso, isso é só isso. Ninguém é fácil nem é manso bicho.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 18:
            trechomusica.innerHTML = `Devia ser proibido. Uma saudade tão má de uma pessoa tão boa. Falar, gritar, reclamar, se a nossa voz não ecoa. Dizer não vou mais voltar, sumir pelo mundo afora, alguém com tudo pra dar. Tirar o seu corpo fora. Devia ser proibido.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 19:
            trechomusica.innerHTML = `São 3 horas da manhã, já do outro dia, e eu pensando no futuro enquanto você dormia. Se eu morresse amanhã: Qual que será? Qual que seria? Da minha mãe, minha mulher, minhas filhas, minhas músicas, minhas lindas orquídeas.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 20:
            trechomusica.innerHTML = `Todo esse tempo que eu passo sem te ver não gasto pensando se vem ou não vem do berço, não gasto pensando nos nossos teretetes, nos sangramentos e nos tropeços do começo. Todo esse tempo que eu passo sem te ver gasto pensando em virá-la do avesso, em qualquer canto cair babando em você, beijá-la tanto até dar cãibra no beiço.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 21:
            trechomusica.innerHTML = `Que bom que você deu o ar da graça. Andava eu com a pulga atrás da orelha, imaginando tanta coisa besta, meu amor. A gente tem tendência pra ficar só na pior. Tudo enfim pra mim era só desgraça e mais desgraça.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 22:
            trechomusica.innerHTML = `Meu amor por você chegou ao fim. É tudo que tenho a dizer. Também não precisa sair assim, espere o dia amanhecer.`
            //image.src = ''
            //imagem.alt = ''
            break
        case 23:
            trechomusica.innerHTML = `Eu me transformo em outras, determinados momentos. Cubro com as mãos meu rosto, sozinha no apartamento. Às vezes eu choro tanto, já logo quando levanto. Tem dias fico com medo, invoco tudo que é santo.`
            //image.src = ''
            //imagem.alt = ''
            break
    }
}