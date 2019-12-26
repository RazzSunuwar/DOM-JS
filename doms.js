// // EXAMINE THE DOCUNEMT OBJECT
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
var headerTitle = document.getElementById('one');
// var header = document.getElementById('main-one');
// console.log(headerTitle);   //Same as the result of line number 19
//headerTitle.textContent = 'hello';  // Welcome will be changed with hello in html header
//headerTitle.innerText = 'GoodBye'; // And hello willbe change with GoodBye in html header
//console.log(headerTitle.textContent);   //After using span in html header result will be Welcome 123
//console.log(headerTitle.innerText); //After insert of style in header span 123 will be disappeared
// headerTitle.innerHTML = '<h3>Hello</h3>';    // Welcome will be change into Hello after using this statement
headerTitle.style.borderBottom = 'solid 3px #000'; //3px black hr line will be creatd using this block





