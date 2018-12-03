// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/quiz.js":[function(require,module,exports) {
(function () {
  function buildQuiz() {
    var output = [];

    questoes.forEach(function (currentquestao, questaoNumber) {
      var respostas = [];

      for (letter in currentquestao.respostas) {
        respostas.push("<label>\n              <input type=\"radio\" name=\"questao" + (questaoNumber + 1) + "\" value=\"" + letter + "\">\n              " + letter + " :\n              " + currentquestao.respostas[letter] + "\n            </label>");
      }
      output.push("<h2>Quest\xE3o n\xFAmero " + (questaoNumber + 1) + "</h1>\n            <div class=\"questao" + (questaoNumber + 1) + "\"> " + currentquestao.questao + " </div>\n            <div class=\"respostas\"> " + respostas.join("") + " </div>");
    });
    quisjs.innerHTML = "<h2>Quiz</h2>" + output.join("");
  }

  function mostrarResultado() {
    var respostas = quisjs.querySelectorAll(".respostas");
    var numCorrect = 0;
    var numErrado = 0;
    var perrado = "";
    var paragraph = "";

    questoes.forEach(function (currentquestao, questaoNumber) {
      var resposta = respostas[questaoNumber];
      var selector = "input[name=questao" + (questaoNumber + 1) + "]:checked";
      var respostausuario = (resposta.querySelector(selector) || {}).value;
      var botaorefresh = "<button onclick=\"window.location.href='perfil.html'\">Volte para o Perfil</button>";
      var perrado = "Voc\xEA errou a quest\xE3o " + (questaoNumber + 1) + ", a pergunta era \"" + currentquestao.questao + "\" e alternativa certa era a Letra " + currentquestao.respostacorreta + " <hr>";
      if (respostausuario === currentquestao.respostacorreta) {
        numCorrect++;
      } else {
        numErrado++;
        paragraph += perrado;
      }
    });
    var porcentagem = numCorrect / questoes.length * 100;
    var c = 0;
    quisjs.innerHTML = "";
    while (c <= numErrado) {
      quisjs.innerHTML = paragraph;
      c++;
    }
    botaojs.innerHTML = "";
    resultadojs.innerHTML = "<hr>Voc\xEA acertou " + porcentagem + "% <hr>";
    botaojs.innerHTML = "<button id=\"enviar\" onclick=\"window.location.href='perfil.html'\">Volte para o Perfil</button>";
  }

  var botaojs = document.getElementById("botão");
  var quisjs = document.getElementById("quiz");
  var resultadojs = document.getElementById("resultado");
  var enviarjs = document.getElementById("enviar");
  var questoes = [{
    questao: "Hoje em dia, a tabela periódica tem, respectivamente quantos elementos, períodos e grupos?",
    respostas: {
      a: "106 elementos; 7 períodos; 18 grupos",
      b: "255 elementos; 18 períodos; 7 grupos",
      c: "96 elementos; 7 períodos; 18 grupos",
      d: "118 elementos; 7 períodos; 18 grupos"
    },
    respostacorreta: "d"
  }, {
    questao: "Do grupo 3 ao grupo 12, encontramos os:",
    respostas: {
      a: "Metais Alcalinos",
      b: "Metais de Transição",
      c: "Metais Alcalinos - Terrosos",
      d: "Gases Nobres"
    },
    respostacorreta: "b"
  }, {
    questao: "Qual é o símbolo do titânio?",
    respostas: {
      a: "Ti",
      b: "Tt",
      c: "To",
      d: "Tn"
    },
    respostacorreta: "a"
  }, {
    questao: "Qual o nome do processo em que a substância sólida é transformado em líquida?",
    respostas: {
      a: "Solidificação",
      b: "Condensação",
      c: "Fusão",
      d: "Vaporização"
    },
    respostacorreta: "c"
  }, {
    questao: "Qual é o símbolo do potássio (elemento)?",
    respostas: {
      a: "P",
      b: "K",
      c: "Pt",
      d: "T"
    },
    respostacorreta: "b"
  }, {
    questao: "O composto CaO é classificado como:",
    respostas: {
      a: "Ácido",
      b: "Base",
      c: "Sal",
      d: "Oxido"
    },
    respostacorreta: "d"
  }, {
    questao: "Se X é isóbaro de Y e isótono de Z; Y tem número atômico 56, número de massa 137 e é isótopo de Z e o número de massa de Z é 138, então é correto afirmar que o número atômico de X é:",
    respostas: {
      a: "53",
      b: "56",
      c: "55",
      d: "52"
    },
    respostacorreta: "c"
  }, {
    questao: "Qual é o símbolo do potássio (elemento)?",
    respostas: {
      a: "P",
      b: "K",
      c: "Pt",
      d: "T"
    },
    respostacorreta: "b"
  }, {
    questao: "O composto CaO é classificado como:",
    respostas: {
      a: "Ácido",
      b: "Base",
      c: "Sal",
      d: "Oxido"
    },
    respostacorreta: "d"
  }, {
    questao: "Se X é isóbaro de Y e isótono de Z; Y tem número atômico 56, número de massa 137 e é isótopo de Z e o número de massa de Z é 138, então é correto afirmar que o número atômico de X é:",
    respostas: {
      a: "53",
      b: "56",
      c: "55",
      d: "52"
    },
    respostacorreta: "c"
  }];

  buildQuiz();

  enviarjs.addEventListener("click", mostrarResultado);
})();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '38129' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/quiz.js"], null)
//# sourceMappingURL=/quiz.ebb6ad08.map