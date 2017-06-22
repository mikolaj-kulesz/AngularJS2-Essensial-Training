import { Component } from "@angular/core";

@Component({
    selector: 'mk-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    onMediaItemDelete(mediaItem){
        console.log('onMediaItemDelete');
    }

    firstMediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    };
}