/**
 * ============================================
 * APP CONFIG - WebGIS Zonasi Kab. Luwu
 * ============================================
 */

const APP_CONFIG = {
    // GeoServer WFS Endpoint via Traefik HTTPS
    GEOSERVER_URL: 'https://geoserver.app.wanantara.org/geoserver',

    // AI Assistant — gs-ai-bridge (DeepSeek + GeoServer read-only, key server-side).
    // Browser hanya POST {pertanyaan} ke sini; tidak ada kredensial di klien.
    // Saat dibuka di localhost → pakai bridge lokal (port 8088). Selain itu → produksi.
    AI_BRIDGE_URL: ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)
        ? 'http://localhost:8088/ask'
        : 'https://gs-ai.app.wanantara.org/ask',

    // Nama workspace GeoServer
    GEOSERVER_WORKSPACE: 'zonasiluwu',

    // Nominatim Search API
    NOMINATIM_URL: 'https://nominatim.openstreetmap.org/search',
};
