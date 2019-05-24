import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { USERNAME } from '../../../services/local-storage/local-storage.namespace';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.less']
})
export class LeftControlComponent implements OnInit {
  @Input() isCollapsed: boolean;

  username: string;

  constructor(private store: LocalStorageService) {}
  /*
  getName(): void {
    this.username = this.store.get(USERNAME);
  }
*/
  ngOnInit() {
    // this.getName();
  }
}
