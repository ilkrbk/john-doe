$(".cards__pos-block").slick({ draggable: !0, arrows: !1, dots: !0, fade: !0, speed: 900, infinite: !0, cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", touchThreshold: 100 }), $(".footer__btn-to-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});var btn = document.getElementById("cards-btn"),
    list = document.getElementById("cards__list"),
    num = 0;function loadData() {
  var e = new XMLHttpRequest();e.open("GET", "https://ikorobka.github.io/Portfolio/john%20doe/dist/list.json"), e.responseType = "json", e.onreadystatechange = function () {
    if (4 === e.readyState) {
      let a = e.response;if (num < a.length) {
        num++;let s = document.createElement("li");s.setAttribute("id", "cards__item"), s.classList.add("cards__item"), list.appendChild(s);let d = document.createElement("div");d.classList.add("cards__img-wrap"), s.appendChild(d);let i = document.createElement("div");i.classList.add("cards__pos-block"), d.appendChild(i);for (var t = 1; t <= 3; t++) {
          let e = document.createElement("div");e.classList.add("item"), i.appendChild(e);let s = document.createElement("img");s.classList.add("cards__img"), s.setAttribute("src", a[num - 1].url[t - 1]), e.appendChild(s);
        }let n = document.createElement("div");n.classList.add("cards__descr-wrap"), s.appendChild(n);let l = document.createElement("h3");l.classList.add("cards__title"), n.appendChild(l), l.innerHTML = a[num - 1].title;let o = document.createElement("p");o.classList.add("cards__descr"), n.appendChild(o), o.innerHTML = a[num - 1].descr, document.getElementById("cards__item").removeAttribute("id"), i.classList.add("loader-slider"), e.addEventListener("load", function () {
          $(".loader-slider").slick({ draggable: !0, arrows: !1, dots: !0, fade: !0, speed: 900, infinite: !0, cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", touchThreshold: 100 }), document.querySelector(".loader-slider").classList.remove("loader-slider");
        });
      }num == a.length && (document.querySelector(".cards__footer").classList.add("cards__footer--hide"), document.querySelector(".contact").style.paddingTop = "0");
    }
  }, e.send();
}btn.addEventListener("click", loadData);function Navigation(e) {
  this.btn = document.getElementById(e.btnId), this.nav = document.getElementById(e.navigationId), this.overlay = document.createElement("div"), this.openNav_ = () => {
    document.body.appendChild(this.overlay), setTimeout(() => this.nav.classList.add(e.activeNavClass), 200);
  }, this.hideNav_ = t => {
    (document.querySelector(`.${e.overlayClass}`) && 27 === t.keyCode || "click" === t.type || "dragend" === t.type) && (this.nav.classList.remove(e.activeNavClass), this.nav.hasAttribute("style") && this.nav.removeAttribute("style"), setTimeout(() => document.body.removeChild(this.overlay), 200));
  }, this.dragStart_ = e => {
    let t = 270 - e.screenX;t < 270 && (this.nav.style.transform = `translateX(${-t}px)`);
  }, this.events_ = () => {
    this.btn.addEventListener("click", this.openNav_), this.overlay.addEventListener("click", this.hideNav_), window.addEventListener("keyup", this.hideNav_), this.nav.addEventListener("drag", this.dragStart_), this.nav.addEventListener("dragend", this.hideNav_);
  }, this.init_ = () => {
    this.events_(), this.overlay.classList.add(e.overlayClass), console.log(e.navigationId);
  }, this.init_();
}const nav = { btnId: "checkbox", navigationId: "nav", activeNavClass: "nav--active", overlayClass: "overlay" },
      offCanvas = new Navigation(nav);