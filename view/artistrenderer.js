export default class ArtistRenderer {
    render(artist) {
        // Generer HTML-kode for kunstneren baseret på artistobjektet
        return `
      <div class="artist">
        <h2>${artist.name}</h2>
        <p>Career start: ${artist.career_start}</p>
        <!-- Tilføj flere HTML-elementer efter behov -->
      </div>
    `;
    }
}
