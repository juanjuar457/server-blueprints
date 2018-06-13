import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // or None, or Native
})
export class ServerElementComponent implements OnInit {
  @Input ('srvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}


// line 9 is our type definition for a property we want to use in our html code
// NOt a VAULE ts syntax to ensure this element may only have this type
// KIP by default, every property to a comp is tied only to that comp-
// in order to expose that property to the outside world we nee to use the @Input decorator
// any parent comp, hosting the server-element comp, through its selector. Is now able to bind to 'element'

// KIPP > also used an 'alias' on line 9 w/ the @Input decorator, so we can use a particular property name in the ts code
// and use a different name outside the ts code. >> EX Of assigning an alias!

// 7 is default,
