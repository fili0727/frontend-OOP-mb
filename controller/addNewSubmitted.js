export function addNewSubmitted(event) {
    event.preventDefault();

    const container = document.querySelector("#add-new-selected-dialog");
    const form = event.target;

    const artist = {
        name: form['add-artist-name'].value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' '),
        career_start: form['add-career-start-date'].value,
        image: form['add-new-image'].value
    };

    console.log(artist);

    container.close();

};

