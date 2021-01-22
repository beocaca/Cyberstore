window.onload = function () {
 /* $('#carousel-1').carousel({
    interval: 4000,
    wrap: true,
    keyboard: true
  });*/


  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  var products = []
  products.forEach((product, index) => {
    var htmlColum = 'fds'
    /*if(index % 5 === 0) {
      // htmlColum.classList.add('border-l-none')
    }
    if(index % 4 === 0) {
      // htmlColum.classList.add('border-r-none')
    }
    if('mobile') {
      // htmlColum.classList.add('border-r-none')
    }*/
    // row--bor.innerHtml = htmlColum
  })
}
