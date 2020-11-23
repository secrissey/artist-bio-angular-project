import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importing the communication to angular via forms
import { ArtistItem } from '../shared/artist-item';


@Component({
  selector: 'app-add-artist-form',
  templateUrl: './add-artist-form.component.html',
  styleUrls: ['./add-artist-form.component.scss']
})
export class AddArtistFormComponent implements OnInit {

  // Two-Way Data Binding via inputs and outputs 
  // While also using a event emitter to display 
  // The form data

  @Input() item: ArtistItem = new ArtistItem('', 0);
  @Output() formSubmit: EventEmitter<ArtistItem> = new EventEmitter()

  constructor() { }

  // Creation of onSubmit method to submit our form data
  onSubmit(form: NgForm){
    console.log(this.formSubmit.emit(form.value));
  }

  ngOnInit(): void {
  }

}
