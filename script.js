const cards = document.querySelectorAll('.pricecard');

function expandAndSelectCard(event) {
    cards.forEach(card => {
        card.classList.remove('expanded');
        card.querySelector('input[type="radio"]').checked = false;
    });

    const clickedCard = event.currentTarget;
    clickedCard.classList.add('expanded');

    clickedCard.querySelector('input[type="radio"]').checked = true;
}

cards.forEach(card => {
    card.addEventListener('click', expandAndSelectCard);
});
