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
        questao: "Hoje em dia, a tabela periódica tem, respectivamente quantos elementos, períodos e grupos?",
        respostas: {
          a: "106 elementos; 7 períodos; 18 grupos",
          b: "255 elementos; 18 períodos; 7 grupos",
          c: "96 elementos; 7 períodos; 18 grupos",
          d: "118 elementos; 7 períodos; 18 grupos",
        },
        respostacorreta: "d",
      },
      {
        questao: "Do grupo 3 ao grupo 12, encontramos os:",
        respostas: {
          a: "Metais Alcalinos",
          b: "Metais de Transição",
          c: "Metais Alcalinos - Terrosos",
          d: "Gases Nobres",
        },
        respostacorreta: "b"
      },
      {
        questao: "Qual é o símbolo do titânio?",
        respostas: {
          a: "Ti",
          b: "Tt",
          c: "To",
          d: "Tn",
        },
        respostacorreta: "a"
      },
      {
        questao: "Qual o nome do processo em que a substância sólida é transformado em líquida?",
        respostas: {
          a: "Solidificação",
          b: "Condensação",
          c: "Fusão",
          d: "Vaporização",
        },
        respostacorreta: "c"
      },
      {
        questao: "Qual é o símbolo do potássio (elemento)?",
        respostas: {
          a: "P",
          b: "K",
          c: "Pt",
          d: "T",
        },
        respostacorreta: "b"
      },
      {
        questao: "O composto CaO é classificado como:",
        respostas: {
          a: "Ácido",
          b: "Base",
          c: "Sal",
          d: "Oxido",
        },
        respostacorreta: "d"
      },
      {
        questao: "Se X é isóbaro de Y e isótono de Z; Y tem número atômico 56, número de massa 137 e é isótopo de Z e o número de massa de Z é 138, então é correto afirmar que o número atômico de X é:",
        respostas: {
          a: "53",
          b: "56",
          c: "55",
          d: "52",
        },
        respostacorreta: "c"
      },
      {
        questao: "Qual é o símbolo do potássio (elemento)?",
        respostas: {
          a: "P",
          b: "K",
          c: "Pt",
          d: "T",
        },
        respostacorreta: "b"
      },
      {
        questao: "O composto CaO é classificado como:",
        respostas: {
          a: "Ácido",
          b: "Base",
          c: "Sal",
          d: "Oxido",
        },
        respostacorreta: "d"
      },
      {
        questao: "Se X é isóbaro de Y e isótono de Z; Y tem número atômico 56, número de massa 137 e é isótopo de Z e o número de massa de Z é 138, então é correto afirmar que o número atômico de X é:",
        respostas: {
          a: "53",
          b: "56",
          c: "55",
          d: "52",
        },
        respostacorreta: "c"
      }
    ];
  
    buildQuiz();
  
    enviarjs.addEventListener("click", mostrarResultado);
  })();
  