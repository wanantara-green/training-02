/**
 * ============================================
 * APP CONFIG - WebGIS Zonasi Kab. Luwu
 * ============================================
 */

const APP_CONFIG = {
    // GeoServer WFS Endpoint via Traefik HTTPS
    GEOSERVER_URL: 'http://103.197.188.59:9597/geoserver',

    // GeoServer MCP SSE Endpoint (AI assistant) 
    MCP_URL: 'https://geoserver-mcp.app.wanantara.org/sse',

    // Nama workspace GeoServer
    GEOSERVER_WORKSPACE: 'zonasiluwu',

    // Nominatim Search API
    NOMINATIM_URL: 'https://nominatim.openstreetmap.org/search',
};
