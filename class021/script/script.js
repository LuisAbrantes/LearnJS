var button = document.getElementById('addbutton');
var listodo = [];
var c = 0;
var motherbox = document.getElementById('listodo');
button.addEventListener('click', function () {
    var input = document.getElementById('input');
    var todo = input.value;
    var html = '';
    if (todo === '') {
        alert('Please enter a task.');
        return;
    } else {
        listodo.push(`
            <div class="todobox" id="box${c}">
                <h1>${todo}</h1>
                <p>Complete :</p>
                <input type="checkbox" id="check${c}"onclick="Complete('box${c}','check${c}')"/>
                <button class="editbtn" onclick="inputnow('box${c}')">Edit</button>
              </div>
            `);
    }

    for (var i = 0; i < listodo.length; i++) {
        html += listodo[i];
    }
    input.value = '';
    motherbox.innerHTML = html;
    c++;
});

function Complete(box, check) {
    var checked = document.getElementById(check);
    var boxx = document.getElementById(box);
    if (checked.checked) {
        boxx.style.backgroundColor = '#008000';
        boxx.style.color = 'white';
    } else {
        boxx.style.color = 'black';
        boxx.style.backgroundColor = '#f4f4f4';
    }
}

var modo = document.getElementById('modo');
modo.addEventListener('click', function () {
    var body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = 'black';
        modo.innerHTML = 'Dark Mode';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        modo.innerHTML = 'Light Mode';
    }
});

function inputnow(id) {
    var div = document.getElementById(id);
    div.innerHTML = `
  <form>
    <input placeholder="TESTE" id="input${id}" class="inputbnt">
    <button id="addbutton" onclick="newvalue('${id}')">Save</button>
  </form>
    `;
}

function newvalue(id) {
    var div = document.getElementById('listodo');
    var input = document.getElementById(`input${id}`);
    div.innerHTML = `
              <div class="todobox" id="box${c}">
                <h1>${input.value}</h1>
                <p>Complete :</p>
                <input type="checkbox" id="check${c}"onclick="Complete('box${c}','check${c}')"/>
                <button class="editbtn" onclick="inputnow('box${c}')">Edit</button>
              </div>
  `;
    console.log('FUNTIONOU');

    c++;
}
