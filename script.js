document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function() {
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
});


function revealListItems() {
    const list = document.getElementById('prerequisites-list');
    const items = list.getElementsByTagName('li');

    list.style.opacity = '1'; 
   
    let delay = 1000;  
   

    for (let i = 0; i < items.length; i++) {
        setTimeout(() => {
            items[i].style.opacity = '1'; 
        }, delay);
        delay += 1000; 
    }
}

window.onload = function() {
    const listItems = document.querySelectorAll('#prerequisites-list li');
    listItems.forEach(item => {
        item.style.opacity = '0'; 
    });

    
    setTimeout(revealListItems, 1000);
};
