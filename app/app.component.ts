import { Component } from '@angular/core';
// import {SmartGardenPageComponent} from './pages/smart-garden-page.component';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-dark green">
    <!-- Collapse button-->
    <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx2">
        <i class="fa fa-bars"></i>
    </button>

    <div class="collapse navbar-toggleable-xs" id="collapseEx2">
      <a class="navbar-brand">New Green</a>
      <ul class="nav navbar-nav">
        <li class="nav-item">
            <a class="nav-link">Smart Gardens</a>
        </li>
        <li class="nav-item btn-group" dropdown>
          <a dropdownToggle class="nav-link" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Seed Kits</a>
          <div dropdownMenu  aria-labelledby="dropdownMenu1">
              <a class="dropdown-item">Action</a>
              <a class="dropdown-item">Another action</a>
              <a class="dropdown-item">Something else here</a>
          </div>
        </li>
      </ul>

    </div>
  </nav>
  <smart-garden></smart-garden>
  <footer>

  </footer>
  `
})
export class AppComponent {

}
