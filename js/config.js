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
    AI_BRIDGE_URL: 'https://gs-ai.app.wanantara.org/ask',

    // Nama workspace GeoServer
    GEOSERVER_WORKSPACE: 'zonasiluwu',

    // Nominatim Search API
    NOMINATIM_URL: 'https://nominatim.openstreetmap.org/search',
};
