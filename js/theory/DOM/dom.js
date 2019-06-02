/********************
 *  Coded By Davoleo
 ********************/

//DOM (Document Object Model) It represents the structure of the HTML coc elements
//a tag below you in hierarchy is called "child"
//a tag above you in hierarchy is called "parent"
//tags that are on the same level in hierarchy are called "siblings"

/**
 * element.childNodes: returns an array of all the child nodes for the element
 * element.firstChild: returns the first child node of the element
 * element.lastChild: returns the last child node of the element
 * element.hasChildNodes: returns wether the element has child nodes or not
 * element.nextSibling: returns the next node of the same level of element
 * element.previousSibling: returns the previous node of the same level of element
 * element.parentNode: returns the parent node of the element
 */

/**
 * the property "innerHTML" is used to access the content of an element (the things between the tags)
 * @type {string}
 */
//document.body.innerHTML = "Some sample text";

//Addresses the element that has the "testHeader" id
let elemFromId = document.getElementById("testHeader");

//Addresses all the elements assigned to the "Main" class
let elemFromClass = document.getElementsByClassName("Main");

//Addresses all the <p> (paragraph) elements
let elemFromTag = document.getElementsByTagName("P");

function changeElements() {
    //This will show all the content of the body
    alert(elemFromClass[0].innerHTML);
    
    //Change elements' inner HTML
    elemFromTag[0].innerHTML = "AYYY";
    elemFromId.innerHTML = "Hola!"
}

function createElements() {
    let div = document.getElementById("container");

    //Attach some node to another
    let paragraph = document.createElement("p");
    let node = document.createTextNode("Example text node generated automatically using javascript");
    paragraph.appendChild(node);
    div.appendChild(paragraph);

    //insertBefore(): Inserts the first argument's node before the second argument's node
    let buttonCreate = document.getElementById("buttonCreate");
    document.insertBefore(paragraph, buttonCreate)

}

function removeElements() {
    let child = document.getElementById("testHeader");
    //Removes testHeader (The child element of the first paragraph)
    child.parentNode.removeChild(child);
}

function replaceElements() {
    let testText = document.createTextNode("REPLACED TEXT");
    let child = document.getElementById("testHeader");

    child.parentNode.replaceChild(testText, child);
}