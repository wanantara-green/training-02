/**
 * ============================================
 * APP CONFIG - WebGIS Zonasi Kab. Luwu
 * ============================================
 * File ini dibaca oleh peta.html untuk
 * mengambil konfigurasi lingkungan.
 *
 * Untuk mengubah nilai, edit file .env
 * lalu jalankan:  (tidak ada build step untuk static HTML)
 * Cukup ubah langsung nilai di bawah ini,
 * atau gunakan file .env sebagai referensi.
 * ============================================
 */

const APP_CONFIG = {
    // GeoServer WFS Endpoint (tanpa slash di akhir)
    GEOSERVER_URL: 'http://localhost:9597/geoserver',

    // Nama workspace GeoServer
    GEOSERVER_WORKSPACE: 'zonasiluwu',

    // Nominatim Search API (opsional)
    NOMINATIM_URL: 'https://nominatim.openstreetmap.org/search',
};
