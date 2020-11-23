import { Component, OnInit, Input, Inject } from '@angular/core';
import { ArtistItem } from '../shared/artist-item'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-edit-item-modal-component',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponentComponent>, 
  @Inject(MAT_DIALOG_DATA) public item: ArtistItem) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: ArtistItem){
    this.dialogRef.close(updatedItem)
  }

}