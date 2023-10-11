export default class ItemRenderer {
    render(item) {
        // Generer HTML-kode for den givne enhed (item)
        // Brug item-objektets egenskaber til at oprette den ønskede HTML-struktur
        // F.eks. for en kunstner kunne det se sådan ud:
        return `
      <div class="artist">
        <h2>${item.name}</h2>
        <p>Career start: ${item.career_start}</p>
        <!-- Tilføj flere HTML-elementer efter behov -->
      </div>
    `;
    }
}
