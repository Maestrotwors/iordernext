import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [RouterLinkWithHref, NzMenuModule],
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMenuComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  select(url: string) {
    this.router.navigate([url]);
  }
}
