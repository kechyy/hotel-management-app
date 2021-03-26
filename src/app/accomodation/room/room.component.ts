import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomComponent implements OnInit {

  hidden = false;
  constructor() { }

  toggleBadgeVisibility(): boolean {
    return this.hidden = !this.hidden;
  }

  ngOnInit(): void {
  }

}
