(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['plupload'], factory);
    } else if(typeof exports === 'object' && typeof module !== 'undefined') {
        var plupload;
        try {
            plupload = require('plupload');
        } catch (err) {
            plupload = root.plupload;
        }
        if (!plupload) throw new Error('plupload dependency not found');
        module.exports = factory(plupload);
    } else {
        if (!root.plupload) throw new Error('plupload dependency not found');
        factory(root.plupload);
    }
}(this, function(plupload) {

// Polish (pl)
    plupload.addI18n({
        "Stop Upload": "Przerwij transfer.",
        "Upload URL might be wrong or doesn't exist.": "Adres URL moze bys nieprawidlowy lub moze nieistniec",
        "tb": "tb",
        "Size": "Rozmiar",
        "Close": "Zamknij",
        "Init error.": "Błąd inicjalizacji.",
        "Add files to the upload queue and click the start button.": "Dodaj pliki i kliknij 'Rozpocznij transfer'.",
        "Filename": "Nazwa pliku",
        "Image format either wrong or not supported.": "Format zdjecia jest zly lub nieobslugiwany",
        "Status": "Status",
        "HTTP Error.": "Błąd HTTP.",
        "Start Upload": "Wyslij",
        "mb": "mb",
        "kb": "kb",
        "Duplicate file error.": "Blad: duplikacja pliku.",
        "File size error.": "Plik jest zbyt duży.",
        "N/A": "Nie dostępne",
        "gb": "gb",
        "Error: Invalid file extension:": "Blad: Nieprawidlowe rozszerzenie pliku:",
        "Select files": "Wybierz pliki:",
        "%s already present in the queue.": "%s juz wystepuje w kolejce.",
        "File: %s": "Plik: %s",
        "b": "b",
        "Uploaded %d/%d files": "Wysłano %d/%d plików",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Upload element accepts only %d file(s) at a time. Extra files were stripped.",
        "%d files queued": "%d plików w kolejce.",
        "File: %s, size: %d, max file size: %d": "Plik: %s, rozmiar: %d, maksymalny rozmiar pliku: %d",
        "Drag files here.": "Przeciągnij tu pliki",
        "Runtime ran out of available memory.": "Wyczerpano pamiec RAM.",
        "File count error.": "Blad liczenia pliku.",
        "File extension error.": "Nieobsługiwany format pliku.",
        "Error: File too large:": "Blad: Plik za duzy:",
        "Add Files": "Dodaj pliki"
    });

}));