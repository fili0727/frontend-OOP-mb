export function showFilter(event) {
    const filterValue = event.target.value;
    document.querySelector("#artist-div").classList.remove("hide");
    document.querySelector("#albums-div").classList.remove("hide");
    document.querySelector("#tracks-div").classList.remove("hide");

    if (filterValue === "albums") {
        document.querySelector("#albums-div").classList.remove("hide");
        document.querySelector("#artist-div").classList.add("hide");
        document.querySelector("#tracks-div").classList.add("hide");

    } else if (filterValue === "tracks") {
        document.querySelector("#tracks-div").classList.remove("hide");
        document.querySelector("#artist-div").classList.add("hide");
        document.querySelector("#albums-div").classList.add("hide");

    } else if (filterValue === "artist") {
        document.querySelector("#artist-div").classList.remove("hide");
        document.querySelector("#albums-div").classList.add("hide");
        document.querySelector("#tracks-div").classList.add("hide");
    }
    console.log(filterValue);
}