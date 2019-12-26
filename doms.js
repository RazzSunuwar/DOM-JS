        // EXAMINE THE DOCUNEMT OBJECT
// // console.dir(document);
// console.log(document.domain);   //To check the domain in developers tools
// console.log(document.URL);  //To check the URL in developers tools
// console.log(document.title);    //To check the title in developers tools
// // document.title = 123;
// console.log(document.doctype); //To check <!doctype html>
// console.log(document.head); //To check head section
// console.log(document.body); //To check body section
// console.log(document.all);  //To check HTML all collection
// console.log(document.all[8]);  //To check the index of HTML all collection
// // document.all[10].textContent = 'Hello'; //Text of index 10 will be change with word 'Hello'
// console.log(document.forms);    //To check the forms
// console.log(document.links);    //TO check the links of the page
// console.log(document.images);


// GETELEMENTBYID
// console.log(document.getElementById('one'));    //shows <h1 id="one">Welcome</h1>
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header'); 
// console.log(headerTitle);   //Same as the result of line number 19
//headerTitle.textContent = 'hello';  // Welcome will be changed with hello in html header
//headerTitle.innerText = 'GoodBye'; // And hello willbe change with GoodBye in html header
//console.log(headerTitle.textContent);   //After using span in html header result will be Welcome 123
//console.log(headerTitle.innerText); //After insert of style in header span 123 will be disappeared
// headerTitle.innerHTML = '<h3>Hello</h3>';    // Welcome will be change into Hello after using this statement
//  headerTitle.style.borderBottom = 'solid 3px #000'; //3px black hr line will be creatd using this block
// header.style.borderBottom = 'solid 3px #000';


// GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);     //Show collection of list group item
// console.log(items[1]);  //show the result of item 2
// items[1].textContent = 'Hello';
// items[1].textContent ='Hello 2';
// items[1].style.fontweight = 'bold';
// items[1].style.backgroundColor = 'green';

// //shows error
// // items.style.backgroundColor = '#ffff00';

// for(var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = '#ffff00';
// }   //Yellow color is shown in the background of items



// GETELEMENTSBYTAGNAME

// var li = document.getElementsByTagName('list-group-item');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].textContent ='Hello 2';
// li[1].style.fontweight = 'bold';
// li[1].style.backgroundColor = 'green';
// //shows error
// // items.style.backgroundColor = '#ffff00';

// for(var i = 0; i<li.length; i++){
//     li[i].style.backgroundColor = '#ffff00';
// }



// QWERYSELECTOR
/*The queryselector() method  return the first element that matches a specified CSS selector(s) in
the document.
NOTE:- The querySelector() method only returns the first element that matches the specified selectors.
To return all the matches use the querySelectorAll() method instead.*/ 

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #5EFF33';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"



// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';  


// QUERYSELECTORALL
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';        //AddItems will be changed into Hello


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i= 0; i < odd.length; i++){
        odd[i].style.backgroundColor = 'blue'; 
        even[i].style.backgroundColor = 'green';      

}









