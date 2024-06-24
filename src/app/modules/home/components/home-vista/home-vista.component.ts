import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home-vista',
  templateUrl: './home-vista.component.html',
  styleUrls: ['./home-vista.component.scss']
})
export class HomeVistaComponent implements OnInit {
  cities: City[] = [];
  selectedCity: City | undefined;
  date2: Date | undefined;

  ngOnInit(): void {
    this.cities = [
      { name: 'Decisiones', code: '1' },
      { name: 'Resoluciones', code: '2' },
      { name: 'Documentos Tecnicos', code: '3' }
    ];
  }
}
