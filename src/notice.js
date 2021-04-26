import css from './notice.css'

!function () {
    "use strict"
    class Notice {
        showLoading(options) {
            typeof options !== 'object' || options === null ? options = {} : '';

            // set Default Value
            const type = options.type || 'dots',
                color = options.color || '#ffffff',
                backgroundColor = options.backgroundColor || 'rgba(0,0,0,.6)',
                title = options.title || '',
                fontSize = !!(Number(options.fontSize)) ? Number(options.fontSize) : 16;

            // create Parent Element
            const container = document.createElement('div');
            container.setAttribute('class', 'notice-loading notice-flex-center notice-fixed-page');
            container.setAttribute('id', 'notice-loading');

            // get Loading Element
            const loadingEl = getLoadingEl(type, color);


            container.innerHTML = `
                <div class="notice-mask notice-fixed-page" style="background-color: ${backgroundColor}"></div>
                <div class="notice-flex-center notice-loading-main">
                ${loadingEl}
                    ${title ? `<p style="color:${color};font-size: ${fontSize + 'px'};">${title}</p>` : ''}
                </div>
            `;
            $('body').appendChild(container);
        }

        hideLoading() {
            const loadingEl = $('#notice-loading');
            if(loadingEl){
                $('body').removeChild(loadingEl)
            }
        }
    }

    function $(el, con) {
        return typeof el === 'string' ? (con || document).querySelector(el) : el || null;
    }


    function $$(el, con) {
        return typeof el === 'string' ? (con || document).querySelectorAll(el) : el || null;
    }

    function getLoadingEl(type, color) {
        switch (type) {
            case 'cube_flip':
                return `<div class="notice-loading-cube-flip" style="background-color: ${color}"></div>`;
                break;
            case 'dots_zoom':
                return `<div class="notice-loading-dots-zoom">
                        <div class="notice-loading-dots-zoom1" style="background-color: ${color}"></div>
                        <div class="notice-loading-dots-zoom2" style="background-color: ${color}"></div>
                    </div>`;
                break;
            case 'line' :
                return `<div class="notice-loading-line">
                      <div class="notice-loading-line-rect1" style="background-color: ${color}"></div>
                      <div class="notice-loading-line-rect2" style="background-color: ${color}"></div>
                      <div class="notice-loading-line-rect3" style="background-color: ${color}"></div>
                      <div class="notice-loading-line-rect4" style="background-color: ${color}"></div>
                      <div class="notice-loading-line-rect5" style="background-color: ${color}"></div>
                    </div>`
                break;
            case 'dots_spin':
                return `<div class="notice-loading-spin-dots">
                      <div class="notice-loading-spin-dot1" style="background-color: ${color}"></div>
                      <div class="notice-loading-spin-dot2" style="background-color: ${color}"></div>
                    </div>`
                break;
            case 'dots' :
                return `<div class="notice-loading-dots">
                      <div class="notice-loading-dot1" style="background-color: ${color}"></div>
                      <div class="notice-loading-dot2" style="background-color: ${color}"></div>
                      <div style="background-color: ${color}"></div>
                    </div>`
                break;
            case 'cube_zoom' :
                return `<div class="notice-loading-cube-zoom">
                      <div class="notice-loading-cube-zoom-1" style="background-color: ${color}"></div>
                      <div class="notice-loading-cube-zoom-2" style="background-color: ${color}"></div>
                      <div class="notice-loading-cube-zoom-3" style="background-color: ${color}"></div>
                      <div class="notice-loading-cube-zoom-4" style="background-color: ${color}"></div>
                      <div class="notice-loading-cube-zoom-5" style="background-color: ${color}"></div>
                      <div class="notice-loading-cube-zoom-6" style="background-color: ${color}"></div>
                      <div class="notice-loading-cube-zoom-7" style="background-color: ${color}"></div>
                      <div class="notice-loading-cube-zoom-8" style="background-color: ${color}"></div>
                      <div class="notice-loading-cube-zoom-9" style="background-color: ${color}"></div>
                    </div>`
                break;
        }
    }

    window.Notice = Notice;
}()