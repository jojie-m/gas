import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';
import { map } from 'rxjs';
import { runInThisContext } from 'vm';

//let marker = new tt.Marker().setLngLat({lng: 0,lat: 9, }).addTo(this.map);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map', { static: true }) mapContainer: ElementRef;
  map: any;
  
  constructor(private el: ElementRef) { 
    this.mapContainer = el;
 }

  ngOnInit() {
   let map= tt.map({
      key: '9b5jg1sFr3zCwbomsIwM9srR6pItgIHi',
      container: this.mapContainer.nativeElement,
      zoom: 2,

    });
    
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
  }
}