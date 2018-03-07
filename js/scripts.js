var list = document.getElementById('list'),
    add = document.getElementById('addElem');

    addElem.addEventListener('click', function(e) {
        var element = document.createElement('li');
        element.innerHTML = 'item';
        var liText = document.getElementsByTagName('li');
        list.appendChild(element);
});