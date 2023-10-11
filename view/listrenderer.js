export default class MusicListRenderer {

    constructor(list, container, itemRenderer) {
        this.list = list;
        this.itemRenderer = new itemRenderer(); // Skift "itemRenderer" til din specifikke rendreringsklasse
        if (container instanceof Element) {
            this.container = container;
        } else if (typeof container === "string") {
            this.container = document.querySelector(container);
        } else {
            console.error("Container er ikke af den krævede type");
            console.error(container);
        }
    }

    setList(list) {
        this.list = list;
        // Nulstil sortering for at undgå at skifte retning
        const sortBy = this.sortBy;
        this.sortBy = undefined;
        // Og sorter den nye liste med de eksisterende indstillinger
        this.sort(sortBy, this.sortDir);
    }

    clear() {
        this.container.innerHTML = "";
    }

    render() {
        this.clear();

        // Opret en filtreret liste for at vise
        const filteredList = this.list.filter(item => this.filterProperty === "*" || item[this.filterProperty] == this.filterValue);

        for (const item of filteredList) {
            const html = this.itemRenderer.render(item);
            this.container.insertAdjacentHTML("beforeend", html);
        }
    }

    sort(sortBy, sortDir) {
        // Hvis sortering sker efter den samme attribut som sidst
        if (sortBy === this.sortBy) {
            // Skift retning for sortering, ignorer hvad sortDir er angivet til 
            this.sortDir = this.sortDir === "asc" ? "desc" : "asc";
        } else {
            if (sortDir) {
                this.sortDir = sortDir;
            } else {
                this.sortDir = "asc";
            }
        }
        // Gem sortBy i en property til næste gang
        this.sortBy = sortBy;

        // Omdan retningen til et tal for nemmere omvending
        const dir = this.sortDir === "asc" ? 1 : -1;

        // BEMÆRK: Sorteringsfunktioner SKAL VÆRE arrow-funktioner for at bevare referencen til this!
        const valueSortFunction = (a, b) => a[this.sortBy] > b[this.sortBy] ? dir : -dir;
        const stringSortFunction = (a, b) => a[sortBy]?.localeCompare(b[sortBy]) * dir;

        // Vælg mellem sortFunctions afhængigt af typen på sorteregenskaben i det første element i listen
        const sortFunction = typeof this.list[0][sortBy] === "string" ? stringSortFunction : valueSortFunction;

        // Sorter listen med den valgte sortFunction
        this.list.sort(sortFunction);

        // og render listen igen
        this.render();
    }

    filter(filterProperty, filterValue) {
        // Husk blot indstillingerne
        this.filterProperty = filterProperty;
        this.filterValue = filterValue;

        // og render listen igen - dette vil udføre den faktiske filtrering
        this.render();
    }
}
