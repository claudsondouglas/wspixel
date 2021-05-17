const wspixel = (function () {
    return {
        init (type) {
            let cookie = this.getCookie('wspixel')
            let current_url_tags = this.getTagsInURL();

            if(!!!cookie) {
                this.setCookie('wspixel', JSON.stringify({
                    utm_source: 'google',
                    utm_medium: 'organic',
                    utm_campaign: type,
                    utm_term: document.title,
                    utm_content: window.document.location.protocol + '//' + window.document.location.hostname + window.document.location.pathname
                }), '365')
            } else if(!this.isEquivalent(JSON.parse(cookie), current_url_tags)) {
                //existem mas não são iguais

                if (!!current_url_tags.utm_source && !!current_url_tags.utm_medium && !!current_url_tags.utm_campaign && !!current_url_tags.utm_term && !!current_url_tags.utm_content) {
                    // as utm não estão vazias e não são iguais
                    this.setCookie('wspixel', JSON.stringify(current_url_tags), 365)
                }          
            }
        },
        // pega na url as utm tags e retorna em um objeto
        getTagsInURL () {
            let url = new URL(window.location.href);
            const utm = {}
            utm.utm_source   =  url.searchParams.get("utm_source");
            utm.utm_medium   =  url.searchParams.get("utm_medium");
            utm.utm_campaign =  url.searchParams.get("utm_campaign");
            utm.utm_term     =  url.searchParams.get("utm_term");
            utm.utm_content  =  url.searchParams.get("utm_content");
            return utm;
        },
        // pega um cookie pelo nome
        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        },
        // set um cookie
        setCookie(name, value, days) {
            let expires = "";

            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }

            document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        },
        // verifica se dois objetos são iguais
        isEquivalent(a, b) {
            let aProps = Object.getOwnPropertyNames(a);
            let bProps = Object.getOwnPropertyNames(b);

            // se os tamanhos forem diferentes, logo são diferentes
            if (aProps.length != bProps.length) return false;
        
            // verificar cada posição
            for (let i = 0; i < aProps.length; i++) {
                let propName = aProps[i];
                if (a[propName] !== b[propName]) {
                    return false;
                }
            }
        
            // se não forem diferentes retornamos true
            return true;
        }
    }
})();