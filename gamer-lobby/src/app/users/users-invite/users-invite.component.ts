import { Component, OnInit } from '@angular/core';
import { Game } from '../../game';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users-invite',
  templateUrl: './users-invite.component.html',
  styleUrls: ['./users-invite.component.css']
})
export class UsersInviteComponent implements OnInit {
  games: Game[] = []

  constructor(
    private apiService: ApiService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  getGameData(): void {
    this.apiService.get('games')
      .subscribe(response => {
        let data = response.json();
        for (let game in data) {
          let userObj = Object.assign(new Game(), data[game]);
          this.games.push(userObj);
        }
      });
  }
  invite():void{
    this.router.navigate(['/users']);
  }

  cancel():void {
    this.router.navigate(['/users']);
  }

  ngOnInit() {
    let id = this.route.snapshop.paramMap.get('id');
    this.user$ = this.userService.users;
    this.getGameData();
    /*this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.users)
    );*/
  }

}
