import { Component, Input } from "@angular/core";

@Component({
    selector: 'mk-media-item',
    templateUrl: 'app/media-item.component.html',
    styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
    name = "The Redemption";

    wasWatched() {
        return true;
    }

    @Input('mediaItemName') mediaItem;
    //@Input() mediaItem; - better not to use it and switch names

    onDelete(){
        console.log('delete')
    }
}