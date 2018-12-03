import {auth} from './firebase.js';

auth.onAuthStateChanged(function(user) {
    if (user) {
        document.querySelector('#logado').style = 'display: none';
        document.querySelector('#btnSair').style = 'display: block';
        console.log('logado');
    } else {
        console.log('nao logado');
    }
});

(function() {
    function buildQuiz() {
      const output = [];
  
      questoes.forEach((currentquestao, questaoNumber) => {
        const respostas = [];
  
        for (letter in currentquestao.respostas) {
          respostas.push(
            `<label>
              <input type="radio" name="questao${questaoNumber+1}" value="${letter}">
              ${letter} :
              ${currentquestao.respostas[letter]}
            </label>`
          );
        }
        output.push(
            `<h2>Questão número ${questaoNumber+1}</h1>
            <div class="questao${questaoNumber+1}"> ${currentquestao.questao} </div>
            <div class="respostas"> ${respostas.join("")} </div>`
        );
      });
    quisjs.innerHTML = `<h2>Quiz</h2>`+output.join("");
    }
  
    function mostrarResultado() {
      const respostas = quisjs.querySelectorAll(".respostas");
      let numCorrect = 0;
      let numErrado = 0;
      let perrado = "";
      let paragraph = "";
      
  
      questoes.forEach((currentquestao, questaoNumber) => {
        const resposta = respostas[questaoNumber];
        const selector = `input[name=questao${questaoNumber+1}]:checked`;
        const respostausuario = (resposta.querySelector(selector) || {}).value;
        const botaorefresh = `<button onclick="window.location.href='perfil.html'">Volte para o Perfil</button>`;
        let perrado = `Você errou a questão ${questaoNumber+1}, a pergunta era "${currentquestao.questao}" e alternativa certa era a Letra ${currentquestao.respostacorreta} <hr>`;
        if (respostausuario === currentquestao.respostacorreta) {
            numCorrect++;
        } else {
            numErrado++;
            paragraph += perrado;
        }
      });
      let porcentagem = (numCorrect/questoes.length)*100;
      let c = 0;
      quisjs.innerHTML = "";
      while(c<=numErrado){
        quisjs.innerHTML = paragraph;
        c++;

      }
      botaojs.innerHTML = "";
      resultadojs.innerHTML = `<hr>Você acertou ${porcentagem}% <hr>`;
      botaojs.innerHTML = `<button id="enviar" onclick="window.location.href='perfil.html'">Volte para o Perfil</button>`;
    }
  
    const botaojs = document.getElementById("botão")
    const quisjs = document.getElementById("quiz");
    const resultadojs = document.getElementById("resultado");
    const enviarjs = document.getElementById("enviar");
    const questoes = [
      {
        questao: "Sobre cultismo e conceptismo, os dois aspectos construtivos do Barroco, assinale a única alternativa incorreta:",
        respostas: {
          a: "O cultismo opera através de analogias sensoriais, valorizando a identificação dos seres por metáforas. O conceptismo valoriza a atitude intelectual, a argumentação.",
          b: "Cultismo e conceptismo são partes construtivas do Barroco que não se excluem. É possível localizar no mesmo autor e no mesmo texto os dois elementos.",
          c: "O cultismo é perceptível no rebuscamento da linguagem, pelo abuso no emprego de figuras semânticas, sintáticas e sonoras. O conceptismo valoriza a atitude intelectual, o que se concretiza no discurso pelo emprego de sofismas, silogismos, paradoxos, etc.",
          d: "O cultismo na Espanha, Portugal e Brasil é também conhecido como gongorismo e seu mais ardente defensor, entre nós, foi o Pe. Antônio Vieira, que, no Sermão da Sexagésima, propõe a primazia da palavra sobre a ideia.",
        },
        respostacorreta: "d",
      },
      { 
        questao: "A alternativa que apresenta as principais características do Barroco é:",
        respostas: {
          a: "Racionalismo, Universalismo, perfeição formal, presenAlternativa “e”.ça de elementos da mitologia greco-latina e humanismo",
          b: "Apelo religioso, misticismo, erotismo, castigo como decorrência do pecado, fugacidade da vida e instabilidade das coisas.",
          c: "Preocupação formal, preferência por temas descritivos, objetivismo, apego à tradição clássica e vocabulário culto.",
          d: "Subjetivismo e individualismo, eurocentrismo, patriarcalismo e nacionalismo exacerbado.",
        },
        respostacorreta: "b"
      },
      {
        questao: "Sobre a literatura produzida no primeiro século da vida colonial brasileira, é correto afirmar que:",
        respostas: {
          a: "É constituída por documentos que informam acerca da terra brasileira e pela literatura jesuítica.",
          b: "É formada principalmente de poemas narrativos e textos dramáticos que visavam à catequese.",
          c: "Descreve com fidelidade e sem idealizações a terra e o homem, ao relatar as condições encontradas no Novo Mundo.",
          d: "Inicia com Prosopopeia, de Bento Teixeira.",
        },
        respostacorreta: "a"
      },
      {
        questao: "A famosa “Carta de achamento do Brasil”, mais conhecida como “A carta de Pero Vaz de Caminha”, foi o primeiro manuscrito que teve como objeto a terra recém-descoberta. Nela encontramos o primeiro registro de nosso país, feito pelo escrivão do rei de Portugal, Pero Vaz de Caminha. Podemos inferir, então, a seguinte intenção dos portugueses:",
        respostas: {
          a: "estavam empenhados em conhecer um pouco mais sobre a arte brasileira.",
          b: "objetivavam o resgate de valores e conceitos sociais brasileiros.",
          c: "explorar a tão promissora nova terra.",
          d: "firmar um pacto de cordialidade com os nativos da terra descoberta.",
        },
        respostacorreta: "c"
      },
      {
        questao: "Uma das afirmações abaixo é incorreta. Assinale-a:",
        respostas: {
          a: "O escritor árcade reaproveita os seres criados pela mitologia greco-romana, deuses e entidades pagãs. Mas esses mesmos deuses convivem com outros seres do mundo cristão.",
          b: "A morte de Moema, índia que se deixa picar por uma serpente, como prova de fidelidade e amor ao índio Cacambo, é trecho mais conhecido da obra O Uruguai, de Basílio da Gama.",
          c: "O árcade recusa o jogo de palavras e as complicadas construções da linguagem barroca, preferindo a clareza, a ordem lógica na escrita.",
          d: "A produção literária do Arcadismo brasileiro constitui-se sobretudo de poesia, que pode ser lírico-amorosa, épica e satírica.",
        },
        respostacorreta: "b"
      },
      {
        questao: "Sobre as características do Arcadismo, é correto afirmar, exceto:",
        respostas: {
          a: "Os poetas árcades defendiam o bucolismo como estilo de vida no campo, longe dos centros urbanos. A vida pobre e feliz no ambiente campestre contrasta com a vida luxuosa e triste na cidade.",
          b: "A poesia árcade apresentou um convencionalismo amoroso: não há variações emocionais de um poema para o outro nem de poeta para poeta, importando mais escrever poemas como os poetas clássicos escreviam.",
          c: "Como expressão artística da burguesia, o Arcadismo veiculou também certos ideais políticos e ideológicos dessa classe, formulados pelo Iluminismo.",
          d: "Apego excessivo pela forma em detrimento do conteúdo. O Arcadismo defendeu a “arte pela arte”, um retorno aos ideais literários clássicos.",
        },
        respostacorreta: "d"
      },
      {
        questao: "Poderíamos sintetizar uma das características do Romantismo pela seguinte aproximação de opostos:",
        respostas: {
          a: "Embora marcado por tendências liberais, opôs-se ao nacionalismo político.",
          b: "Aparentemente idealista, foi, na realidade, o primeiro momento do Naturalismo Literário.",
          c: "Cultivando o passado, procurou formas de compreender e explicar o presente.",
          d: "Voltado para temas nacionalistas, desinteressou-se do elemento exótico, incompatível com a exaltação da pátria.",
        },
        respostacorreta: "c"
      },
      {
        questao: "Sobre a prosa no Romantismo brasileiro, é incorreto afirmar",
        respostas: {
          a: "Um de seus principais representantes foi José de Alencar, que, por meio das obras Iracema, O gaúcho e Senhora, conseguiu transitar entre as diferentes vertentes da prosa romântica brasileira, além de ter contribuído também para a poesia do período.",
          b: "Álvares de Azevedo é considerado como um dos principais nomes da prosa romântica brasileira. Foi o único escritor que transitou entre as suas diferentes vertentes por meio de obras que representavam o romance indianista e histórico, o romance regional e o romance urbano.",
          c: "O romance regional, representado por nomes como José de Alencar, Franklin Távora e Visconde de Taunay, contribuiu muito para a formação da literatura brasileira, bem como para a nossa autonomia literária. Como não possuíam moldes europeus nos quais pudessem espelhar-se, os escritores regionalistas criaram seus próprios modelos, retratando na prosa os quatro cantos do país",
          d: "O romance indianista e histórico encontrou no índio brasileiro a sua mais autêntica expressão de nacionalidade. Foi uma das principais tendências do Romantismo brasileiro, realizando o projeto literário de construção de uma literatura que retratasse nossa identidade cultural.",
        },
        respostacorreta: "b"
      },
      {
        questao: "Sobre o Parnasianismo, é correto afirmar, exceto:",
        respostas: {
          a: "Objetivismo, racionalismo, universalismo, vocabulário culto e gosto pelas descrições são as principais características da linguagem da poesia parnasiana.",
          b: "Embora fosse contemporâneo do Realismo e do Naturalismo, o Parnasianismo apresentou uma temática diferente dessas correntes literárias ao propor um olhar sobre a linguagem, cuja temática predominante era a arte pela arte.",
          c: "Contrariando a estética do Realismo e do Naturalismo, o Parnasianismo representou na poesia uma volta ao estilo clássico, sobretudo no que diz respeito à métrica do poema.",
          d: "As principais características desse movimento literário, que teve como seu maior representante o poeta Olavo Bilac, foram a simplicidade da linguagem, valorização da cultura nacional e elevados níveis de subjetividade.",
        },
        respostacorreta: "d"
      },
      {
        questao: "São todas características do Pré-Modernismo, exceto:",
        respostas: {
          a: "O período pré-modernista foi marcado pela convivência entre várias tendências artísticas, ocasionando uma espécie de sincretismo cultural.",
          b: "A busca por uma linguagem mais simples e coloquial é uma das preocupações dos escritores pré-modernistas, especialmente do escritor Lima Barreto, um de seus principais representantes.",
          c: "O Pré-Modernismo sobrepôs-se ao Parnasianismo, escola literária vigente em meados do século XX, gozando de amplo prestígio entre as camadas mais cultas da sociedade.",
          d: "É considerada literatura pré-modernista tudo o que, nas primeiras décadas do século XX, problematiza a realidade social e cultural do Brasil.",
        },
        respostacorreta: "c"
      }
      {
        questao: "Os autores do simbolismo:",
        respostas: {
          a: "propunham o exercício da subjetividade contra a objetividade, retomando, de modo diferente, o individualismo romântico.",
          b: "não apresentavam interesse pelo inconsciente e pelas zonas profundas e desconhecidas da mente humana.",
          c: "não acreditavam que a realidade era complexa demais para ser apreendida e descrita de maneira objetiva e racional.",
          d: "eram positivistas e naturalistas.",
        },
        respostacorreta: "a"
      }
    ];
  
    buildQuiz();
  
    enviarjs.addEventListener("click", mostrarResultado);
  })();
  const getIdUsuario = function() {
    return new Promise(function(resolve) {
        auth.onAuthStateChanged(function(user) {
            resolve(user.email);
        });
    });
};
