const doc = document;
let block1 = doc.getElementById('block1');
let content1 = doc.getElementById('img_1');
let link1 = block1.querySelector('.post__btn');
link1.onclick = function() {
    content1.classList.toggle('open');
};
 
 
let block2 = doc.getElementById('block2');
let content2 = doc.getElementById('img_2');
let link2 = block2.querySelector('.post__btn');
link2.onclick = function() {
    content2.classList.toggle('open');
};
 
 
let block3 = doc.getElementById('block3');
let content3 = doc.getElementById('img_3');
let link3 = block3.querySelector('.post__btn');
link3.onclick = function() {
    content3.classList.toggle('open');
};

