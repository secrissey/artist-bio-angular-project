import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditItemModalComponentComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';
// Import for the Budget Item Model
import { ArtistItem } from '../shared/artist-item';

//TODO Add modal functionality for update

@Component({
  selector: 'app-artist-item-list',
  templateUrl: './artist-item-list.component.html',
  styleUrls: ['./artist-item-list.component.scss']
})
export class ArtistItemListComponent implements OnInit {

  @Input() artistItems: ArtistItem[] = []

  @Output() delete: EventEmitter<ArtistItem> =  new EventEmitter<ArtistItem>();
  constructor( public dialog: MatDialog) { }

  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  ngOnInit(): void {
  }

  onDelete(item: ArtistItem){
    this.delete.emit(item);
  }

  onCardClicked(item: ArtistItem){
    // Show the edit modal

    const dialogref = this.dialog.open(EditItemModalComponentComponent, {
      width: '580px',
      data: item
    })

    dialogref.afterClosed().subscribe(result => {
      // check if result has a value

      if(result){
        this.update.emit({
          old: item,
          new: result
        })
      }
    })
  }

}


export interface UpdateEvent {
  old: ArtistItem;
  new: ArtistItem;
}