const cards = document.querySelectorAll('.pricecard');

// Function to expand the clicked card and check its radio button
function expandAndSelectCard(event) {
    // Remove 'expanded' class from all cards and uncheck all radios
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


// const cards = document.querySelectorAll('.pricecard input[type="radio"]');

// // Function to handle the card selection
// cards.forEach(card => {
//     card.addEventListener('change', function () {
//         const pricecards = document.querySelectorAll('.pricecard');
//         pricecards.forEach(pc => pc.classList.remove('expanded'));

//         // Add expanded class to the selected card
//         card.parentElement.parentElement.classList.add('expanded');

//         // You can also update the total price here dynamically if needed
//     });
// });
