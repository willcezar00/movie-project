import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: String = "";
  @Input() subtitle: String = "";
  @Input() poster: String = "";
  @Output() onClick = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
  }

  eventDetalhe(){
    this.onClick.emit();
  }

}
