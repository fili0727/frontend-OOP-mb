export default class AlbumRenderer {
    render(album) {
        // Generer HTML-kode for albummet baseret på albumobjektet
        return `
      <div class="album">
        <h2>${album.title}</h2>
        <p>Release date: ${album.release_date}</p>
        <!-- Tilføj flere HTML-elementer efter behov -->
      </div>
    `;
    }
}
