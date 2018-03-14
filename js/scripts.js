var list = document.getElementById('list'),
    add = document.getElementById('addElem');    

add.addEventListener('click', function(e) {       
    
    var element = document.createElement('li'),
        item = document.getElementsByTagName('li'),
        itemLength = item.length;
    
    element.innerHTML = 'item' + ' ' + itemLength;   
    list.appendChild(element);
});


