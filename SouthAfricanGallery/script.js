console.log('Script loaded');

// Get all image buttons in the gallery
const imageButtons = document.querySelectorAll('.image-button');

// Image details
const imageDetails = {
    'tableMountain': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.07.06.jpeg",
        caption: "Table Mountain: An iconic flat-topped mountain overlooking Cape Town, South Africa. It is one of the New7Wonders of Nature and offers panoramic views of the city and the surrounding ocean."
    },
    'kruger': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.07.34.jpeg",
        caption: "Kruger National Park: One of Africa's largest game reserves, spanning nearly 20,000 square kilometers. It is renowned for its diverse wildlife including lions, elephants, rhinos, and leopards."
    },
    'drakensberg': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.08.16.jpeg",
        caption: "Drakensberg Mountains: A stunning mountain range that forms part of the Great Escarpment, running along South Africa’s eastern coast. It is known for its dramatic landscapes, waterfalls, and diverse flora and fauna."
    },
    'blydeRiver': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.09.20.jpeg",
        caption: "Blyde River Canyon: One of the largest canyons in the world, located in Mpumalanga. It is renowned for its lush subtropical vegetation and stunning viewpoints like the Three Rondavels."
    },
    'robbenIsland': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.09.45.jpeg",
        caption: "Robben Island: A UNESCO World Heritage Site located off Cape Town. It is known for its historical significance as the site where Nelson Mandela was imprisoned for 18 years during apartheid."
    },
    'eastLondonCityHall': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.05.50.jpeg",
        caption: "East London City Hall: An architectural landmark in East London, South Africa. The building features a distinctive clock tower and is an example of Edwardian architecture."
    },
    'eastLondonBeach': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.06.39.jpeg",
        caption: "East London Beach: Known for its beautiful sandy shores and great surfing conditions, this beach is a popular destination for both locals and tourists."
    },
    'sunsetKaroo': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.10.47.jpeg",
        caption: "Sunset over the Karoo: The Karoo is a semi-arid region known for its vast open spaces and dramatic sunsets. The region offers a tranquil and picturesque desert landscape."
    },
    'chapmanPeak': {
        src: "Images/WhatsApp Image 2024-09-08 at 22.11.43.jpeg",
        caption: "Chapman’s Peak: A spectacular mountain pass along the Cape Peninsula. Known for its breathtaking views of the Atlantic Ocean and rugged coastline."
    },
    'tsitsikamma': {
        src: "Images/WhatsApp Image 2024-09-08 at 23.07.28 (1).jpeg",
        caption: "Tsitsikamma National Park: Part of the Garden Route National Park, this area features lush forests, dramatic coastlines, and the famous Storms River suspension bridge."
    },
    'archRock': {
        src: "Images/WhatsApp Image 2024-09-08 at 23.07.28.jpeg",
        caption: "Arch Rock: A natural rock formation located in the Tsitsikamma National Park. It is a popular landmark and hiking destination within the park."
    },
    'unionBuilding': {
        src: "Images/WhatsApp Image 2024-09-08 at 23.18.41.jpeg",
        caption: "Union Buildings: The seat of the South African government in Pretoria. Designed by Sir Herbert Baker, it houses the offices of the President of South Africa and offers stunning gardens and views."
    }
};

// Add a click event listener to each image button
imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imageId = button.getAttribute('data-id'); // Get the image ID from data attribute
        console.log(`Clicked image ID: ${imageId}`);

        if (imageDetails[imageId]) {
            // Get modal elements
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modal-image');
            const modalCaption = document.getElementById('modal-caption');

            // Set modal content
            modalImage.src = imageDetails[imageId].src;
            modalCaption.textContent = imageDetails[imageId].caption;

            // Display the modal
            modal.style.display = 'block';
        } else {
            console.log(`No details found for image ID: ${imageId}`);
        }
    });
});

// Close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
});
