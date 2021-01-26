window.onload = function () {
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


  var carousel1 = document.getElementById("carouselExampleInterval")
  carousel1.addEventListener('slide.bs.carousel', function (evt) {
    // var active = document.querySelector('#carouselExampleInterval .carousel-item.active')
    // active.classList.toggle('wow')
    /*var {from, to} = evt
    var nextItem = carousel1.querySelector('[data-reduce="' + to + '"]')
    var prevItem = carousel1.querySelector('[data-reduce="' + from + '"]')
    let clsWow = nextItem.getAttribute('data-wow')
    let clsWowPre = prevItem.getAttribute('data-wow')
    nextItem.classList.toggle('wow1')
    nextItem.classList.toggle(clsWow)
    prevItem.classList.remove('wow1')
    prevItem.classList.remove(clsWowPre)
    console.log(nextItem, clsWow)
    new WOW().init({
      boxClass: 'wow1',
    });*/
    // console.log(active)
  })
  // carousel1.addEventListener('slid.bs.carousel', (e) => {
  //   console.log(arguments)
  // })
}
