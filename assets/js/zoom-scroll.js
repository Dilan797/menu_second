/*  ===========================================================
    viewport-hud.js – HUD Viewport + Element Watcher  v1.1
    -----------------------------------------------------------------
    • Muestra en pantalla: 1366×728 • zoom≈90 % • scrollY 512px
    • Traza en consola la misma info + posición de cada elemento
    que tenga el atributo  data-watch
    • Sin dependencias externas
    • El HUD no bloquea clics (pointerEvents: none) y se puede
    desactivar fácilmente antes de pasar a producción.
    =========================================================== */
(() => {  'use strict';

    /* ---------------- CONFIGURACIÓN ---------------- */
    const HUD_ENABLED = true;           // pon a false para ocultar el overlay
    const WATCH_ATTR  = 'data-watch';   // cambia el nombre del atributo si quieres
    const HUD_STYLE = {
        position: 'fixed',
        top: '0',
        right: '0',
        font: '11px/1 monospace',
        color: '#0f0',
        background: 'rgba(0,0,0,.75)',
        padding: '4px 6px',
        borderRadius: '0 0 0 6px',
        whiteSpace: 'pre',               // muestra saltos de línea
        zIndex: 99999,
        pointerEvents: 'none'            // no interfiere con la página
    };
    /* ------------------------------------------------ */

    /* Crea el HUD (overlay) si está habilitado */
    const hud = HUD_ENABLED ? document.createElement('div') : null;
    if (hud) {
        Object.assign(hud.style, HUD_STYLE);
        document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(hud);
        });
    }

    /* Helpers */
    const round = n => Math.round(n);

    function viewportInfo() {
        return {
        w: round(window.innerWidth),
        h: round(window.innerHeight),
        zoom: round(100 / window.devicePixelRatio) + '%',
        scrollY: round(window.scrollY)
        };
    }

    function elementInfo(el) {
        const r = el.getBoundingClientRect();
        return {
        tag: (el.getAttribute(WATCH_ATTR) || el.tagName).toLowerCase(),
        vx: round(r.left),             // posición respecto al viewport
        vy: round(r.top),
        w: round(r.width),
        h: round(r.height),
        absY: round(r.top + window.scrollY) // posición absoluta en el documento
        };
    }

    /* Refresca overlay y consola */
    function refresh() {
        /* 1. Overlay en pantalla */
        if (hud) {
        const vp = viewportInfo();
        let txt = `${vp.w}×${vp.h} • zoom≈${vp.zoom} • scrollY ${vp.scrollY}px`;

        const watched = document.querySelectorAll(`[${WATCH_ATTR}]`);
        watched.forEach(el => {
            const inf = elementInfo(el);
            txt += `\n${inf.tag}: (${inf.vx},${inf.vy}) → absY ${inf.absY}`;
        });
        hud.textContent = txt;
        }

        /* 2. Tabla en consola para inspección */
        console.clear();
        console.group('Viewport');
        console.table([viewportInfo()]);
        console.groupEnd();

        const watched = document.querySelectorAll(`[${WATCH_ATTR}]`);
        if (watched.length) {
        console.group('Watched elements');
        watched.forEach(el => console.table([elementInfo(el)]));
        console.groupEnd();
        }
    }

    /* Listeners (passive = true → scroll fluido) */
    ['resize', 'scroll', 'DOMContentLoaded'].forEach(evt =>
        window.addEventListener(evt, refresh, { passive: true })
    );

})();
