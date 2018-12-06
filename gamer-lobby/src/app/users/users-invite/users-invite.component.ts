import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users-invite',
  host: {
    class: 'form content-block padding-25'
  },
  templateUrl: './users-invite.component.html',
  styleUrls: ['./users-invite.component.css']
})
export class UsersInviteComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService, 
    private gameService: GameService,
    private route: ActivatedRoute, 
    private router: Router) { 
  }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      setTimeout(() => {
        this.user = this.userService.getUser(params.username);
      }, 100);
    });
  }

  invite(): void {
    this.router.navigateByUrl('/users');
  }

  cancel(): void {
    this.router.navigateByUrl('/users');
  }
}
