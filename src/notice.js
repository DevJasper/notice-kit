!function () {
    class Notice {
        showLoading(options) {
            typeof options !== 'object' || options === null ? options = {} : '';

            const type = options.type || 'line',  //  circular or ellipsis
                color = options.color || '#ffffff',
                backgroundColor = options.backgroundColor || 'rgba(0,0,0,.6)',
                title = options.title || '';

            const container = document.createElement('div');
            container.setAttribute('class', 'notice-loading notice-flex-center notice-fixed-page');
            container.setAttribute('id', 'notice-loading');

            // https://tobiasahlin.com/spinkit/
            let loadingEl;
            switch (type) {
                case 'cube':
                    loadingEl = `<div class="notice-loading-cube" style="background-color: ${color}"></div>`;
                    break;
                case 'chase-dot':
                    loadingEl = `<div class="notice-loading-bounce">
                        <div class="notice-loading-bounce-1" style="background-color: ${color}"></div>
                        <div class="notice-loading-bounce-2" style="background-color: ${color}"></div>
                    </div>`;
                    break;
                case 'line' :
                    loadingEl = `<div class="notice-loading-line">
                      <div class="notice-loading-line-rect1" style="background-color: ${color}"></div>
                      <div class="notice-loading-line-rect2" style="background-color: ${color}"></div>
                      <div class="notice-loading-line-rect3" style="background-color: ${color}"></div>
                      <div class="notice-loading-line-rect4" style="background-color: ${color}"></div>
                      <div class="notice-loading-line-rect5" style="background-color: ${color}"></div>
                    </div>`
                    break;
            }

            container.innerHTML = `
                <div class="notice-mask notice-fixed-page" style="background-color: ${backgroundColor}"></div>
                <div class="notice-flex-center notice-loading-main">
                ${loadingEl}
                    ${title ? `<p style="color:${color};">${title}</p>` : ''}
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

    window.Notice = Notice;
}()