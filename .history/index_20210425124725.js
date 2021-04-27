function generateChart(wrapper) {
  let values = [];

  $(wrapper + ' .bar').each(function(index, el) {
    values.push($(this).data('value'));
  });

  $(wrapper + ' .bar').each(function(index, el) {
    let bar = $(this);
    let value = bar.data('value');

    bar.width(value + '%');
    
    let board = $('#board');
    let boardO = board.offset().top;
    let boardH = board.height();
    let windowH = $(window).height();
    let windowS = $(window).scrollTop();

    if(windowS > boardO - windowH + (windowH / 2) && windowS < boardO + boardH - (boardH / 2)){
      bar.addClass('no');
    }
  });
}

$(window).on('scroll', function(event) {
  generateChart('#board');
});

document.getElementsByClassName("burbtn").onclick = function(){
  document.querySelector('html').classList.toggle('open');
}