import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})

export class SeoService {
    constructor(
        private titleService: Title,
        private meta: Meta
    ) { }
    baseurl = 'https://example.com'
    setKeyword(text){
        this.meta.updateTag({ name: 'keywords', content: text });
    }
    setDescription(text){
        this.meta.updateTag({ name: 'description', content: text });
        this.meta.updateTag({ property: 'og:description', content: text });
        this.meta.updateTag({ name: 'twitter:description', content: text });
    }
    setMetaTitle(text){
        this.meta.updateTag({ name: 'title', content: this.capitalize(text) });
        this.meta.updateTag({ property: 'og:title', content: this.capitalize(text) });
        this.meta.updateTag({ name: 'twitter:title', content: this.capitalize(text) });
    }
    setImage(text){
        this.meta.updateTag({ name: 'image', content: text });
        this.meta.updateTag({ property: 'og:image', content: text });
        this.meta.updateTag({ name: 'twitter:image', content: text });
    }
    setUrl(text){
        this.meta.updateTag({ name: 'url', content: this.baseurl + text });
        this.meta.updateTag({ property: 'og:url', content: this.baseurl + text });
        this.meta.updateTag({ name: 'twitter:url', content: this.baseurl + text });
    }
    setTitle(text){
        this.titleService.setTitle(this.capitalize(text) + " | Xcoin");
    }

    capitalize(s){
        return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
    };

}