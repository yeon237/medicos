var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
     
    if(this.diff > 0) {
        self.count += Math.ceil(this.diff / 5);
    }
     
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
     
    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, 20);
    } else {
        clearTimeout(this.timer);
    }
};



$('.bg-holder').parallaxScroll({
    friction: 0.15
});


function showNumberCount() {
    new numberCounter("counter1", 5);
    new numberCounter("counter2", 253);
    new numberCounter("counter3", 8);
}



var option = {
    beforeReveal: showNumberCount,
    reset: true,
}

ScrollReveal().reveal('.headline', option);

AOS.init({
    duration: 1000
  });
  
     // AOS.init({
     //    offset: 200,
     //    duration: 600,
     //    easing: 'ease-in-sine',
     //    delay: 100,
     //  });
  


