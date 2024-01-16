import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template:`
    <h5>Buscar:</h5>
    <input type="text"
            class="form-control"
            placeholder="Buscar gifs..."
    (keyup.enter) ="searchTag()"
    #txtTagInput
    >
  `
})

export class SearchBoxComponent {
  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>;

  // Se inyecta el servicio(gif.service) en el constructor para poder usarlo
  constructor(private gifsService: GifsService) { }

  // searchTag(newTag: string){
  searchTag(){
    // console.log(this.tagInput.nativeElement.value);
    const newTag = this.tagInput.nativeElement.value;

    // Se llama al servicio
    this.gifsService.searchTag(newTag);

    // Se limpia el value
    this.tagInput.nativeElement.value = '';
  }

}
