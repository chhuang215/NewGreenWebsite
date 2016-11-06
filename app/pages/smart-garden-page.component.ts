import { Component } from '@angular/core';

@Component({
  selector: 'device',
  template:`
    <h2>Device</h2>
  `,

  }
)
export class DeviceComponent{

}


@Component({
  selector: 'smart-garden',
  template: `
    <div class="container">
      <h1>Smart Garden</h1>
      <device></device>
      <device></device>
      <device></device>
      <device></device>

    </div>

  `
})

export class SmartGardenPageComponent { }
