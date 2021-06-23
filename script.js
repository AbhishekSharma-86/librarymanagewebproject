// constructor function
function Book(bookName, author, category) {
    this.bookName = bookName;
    this.author = author;
    this.category = category;
}

// Display constructor
function Display() {
}

// Add methods to display prototype
Display.prototype.add = function(book){
    let data = document.getElementById("bookdata");
    let uistring = `<tr>
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                    </tr>`   
    data.innerHTML += uistring;  
}
Display.prototype.clear = function(){
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}

// Add submit event Listener to form
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener('submit', libraryformSubmit);

function libraryformSubmit(e) {
    e.preventDefault();
    let bookName = document.getElementById('BookName').value;
    let author = document.getElementById('Author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let coding = document.getElementById('coding');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (coding.checked) {
        type = coding.value;
    }
    else {
        type = cooking.value;
    }
    var book = new Book(bookName, author, type);
    let display = new Display();
    display.add(book);
    display.clear();
    console.log(book);
}

