/* Atividade 08 — comportamento mínimo de DEMONSTRAÇÃO da Estante.
   Escopo deliberado: apenas o suficiente para demonstrar os componentes
   Bootstrap (pills ativas, Alert de estado vazio, Spinner de busca e Toast).
   Busca/filtro/ordenação reais com dados pertencem às entregas futuras:
   - o <select> de ordenação é controle visual nesta etapa (sem reordenar);
   - não há regra de negócio, persistência, API ou autenticação aqui. */
(function () {
  'use strict';

  var grade = document.getElementById('grade-livros');
  var colunas = Array.prototype.slice.call(grade.querySelectorAll('.col'));
  var busca = document.getElementById('busca');
  var spinner = document.getElementById('busca-spinner');
  var pills = Array.prototype.slice.call(document.querySelectorAll('.filter-pill'));
  var vazio = document.getElementById('estado-vazio');

  var filtroAtual = 'all';
  var termo = '';
  var temporizador = null;

  function aplicar() {
    var visiveis = 0;
    colunas.forEach(function (col) {
      var okFiltro = filtroAtual === 'all' || col.dataset.status === filtroAtual;
      var okBusca = !termo ||
        col.dataset.title.indexOf(termo) !== -1 ||
        col.dataset.author.indexOf(termo) !== -1;
      var mostrar = okFiltro && okBusca;
      col.classList.toggle('d-none', !mostrar);
      if (mostrar) visiveis++;
    });
    // Demonstra o Alert de estado vazio (frames M2/D2).
    var semResultado = visiveis === 0;
    grade.classList.toggle('d-none', semResultado);
    vazio.classList.toggle('d-none', !semResultado);
    vazio.classList.toggle('d-flex', semResultado);
  }

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');
      filtroAtual = pill.dataset.filter;
      aplicar();
    });
  });

  // Flash do Spinner durante a busca (estado M9). Sem debounce próprio:
  // filtra de imediato e oculta o indicador em seguida.
  busca.addEventListener('input', function () {
    spinner.classList.remove('d-none');
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      termo = busca.value.toLowerCase().trim();
      aplicar();
      spinner.classList.add('d-none');
    }, 200);
  });

  // Toast: demonstra o componente Bootstrap ao acionar ação do próximo slice.
  var toastEl = document.getElementById('aviso-slice');
  var toast = new bootstrap.Toast(toastEl, { delay: 3500 });
  document.querySelectorAll('[data-demo-toast]').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      ev.preventDefault();
      var offcanvas = document.getElementById('navMobile');
      if (offcanvas && offcanvas.classList.contains('show')) {
        bootstrap.Offcanvas.getInstance(offcanvas).hide();
      }
      toast.show();
    });
  });

  document.querySelector('.filter-pill.active').setAttribute('aria-pressed', 'true');
  aplicar();
})();
