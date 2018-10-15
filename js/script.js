/* поиск эелементов по id getElementById
var element = document.getElementById('box');
поиск css селекторов querySelector , all всех
 */
var element2 = document.querySelectorAll('.menu-item a');
var link = element2[2];

element2[2].innerHTML = '<strong>New text</strong>';
/*link.classList.add('js-ups');*/
/*link.style.backgroundColor = 'green';*/
/*link.style.fontSize = '24px';*/


console.log(element2);