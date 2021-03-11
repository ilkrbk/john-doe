var btn = document.getElementById('cards-btn');
var list = document.getElementById('cards__list');
var num = 0;

function loadData() {    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ilkrbk.github.io/john%20doe/dist/list.json');
    xhr.responseType = 'json';
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            let data = xhr.response;
            ``
            if (num < data.length) {
                num ++;

                    let li = document.createElement('li');
                    li.setAttribute('id', 'cards__item');
                    li.classList.add('cards__item');             
                    list.appendChild(li);
                    let imgWrap = document.createElement('div');
                    imgWrap.classList.add('cards__img-wrap'); 
                    li.appendChild(imgWrap);  
                    let posBlock = document.createElement('div');
                    posBlock.classList.add('cards__pos-block'); 
                    imgWrap.appendChild(posBlock);

                    for (var i = 1; i <= 3; i++){
                        let item = document.createElement('div');
                        item.classList.add('item'); 
                        posBlock.appendChild(item);                      

                        let img = document.createElement('img');
                        img.classList.add('cards__img'); 
                        img.setAttribute('src', data[num-1].url[i-1]);
                        item.appendChild(img);
                    }
                    let descrWrap = document.createElement('div');
                    descrWrap.classList.add('cards__descr-wrap'); 
                    li.appendChild(descrWrap);
                    let title = document.createElement('h3');
                    title.classList.add('cards__title'); 
                    descrWrap.appendChild(title);
                    title.innerHTML = data[num-1].title;  
                    let descr = document.createElement('p');
                    descr.classList.add('cards__descr'); 
                    descrWrap.appendChild(descr);
                    descr.innerHTML = data[num-1].descr; 

                document.getElementById('cards__item').removeAttribute('id');
                
                posBlock.classList.add('loader-slider');  
                xhr.addEventListener('load', function (){
                $('.loader-slider').slick({
                    draggable: true,
                    arrows: false,
                    dots: true,
                    fade: true,
                    speed: 900,
                    infinite: true,
                    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
                    touchThreshold: 100
                });
                document.querySelector('.loader-slider').classList.remove('loader-slider');
            })
            } if (num == data.length) {
                document.querySelector('.cards__footer').classList.add('cards__footer--hide');
                document.querySelector('.contact').style.paddingTop="0";     
            }
        }
    }
    xhr.send();
}

btn.addEventListener('click', loadData);