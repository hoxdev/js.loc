var test = {
    question: function (num) {
        var div = document.createElement('h3');
        div.classList.add('h3-title');
        div.innerHTML = num +  '.' + 'Вопрос №' + num;
        document.body.appendChild(div);
    },
    block: function (num) {
        var div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = 'Вариат ответа №' + num;
        document.body.appendChild(div);
    }
};

test.question(1);
test.block(1);
test.block(2);
test.block(3);

test.question(2);
test.block(1);
test.block(2);
test.block(3);

test.question(3);
test.block(1);
test.block(2);
test.block(3);


/*var student = {
    name: 'Roman',
    age: 26,
    country: 'KZ',
};

for (var key in student) {
    console.log(student[key]);
    console.log(key);
}*/


/* поиск эелементов по id getElementById
var element = document.getElementById('box');
поиск css селекторов querySelector , all всех

var element2 = document.querySelectorAll('.menu-item a');
var link = element2[2];

element2[2].innerHTML = '<strong>New text</strong>';
/*link.classList.add('js-ups');
/*link.style.backgroundColor = 'green';*/
/*link.style.fontSize = '24px';*/

/* обавить новый элемент на страницу*/
/*
var element = document.createElement('div');
element.classList.add('box');
element.innerHTML = 'some text';
var wrapper = document.querySelector('.wrapper');
wrapper.appendChild(element);*/
