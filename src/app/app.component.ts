import {Component, OnDestroy, OnInit} from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private readonly socketService: SocketService) { }
  async ngOnInit() {
    await this.socketService.initSocket();
    this.socketService.listenEvent('View.Count.Changed').subscribe(res => {
      console.log('Change', res);
    })
    this.socketService.listenEvent('TMT.LiveApp.EventBus.Distributed.CommentCreateEto').subscribe(res => {
      console.log(res);
    })
    this.socketService.listenEvent('TMT.LiveApp.EventBus.Distributed.CommentCreateEto').subscribe(res => {
      console.log(res);
    })
    this.socketService.listenEvent('message.created').subscribe(res => {
      console.log(res);
    })
    this.socketService.listenEvent('TMT.LiveApp.EventBus.Distributed.CommentUpdateEto').subscribe(res => {
      console.log(res);
    })
    this.socketService.listenEvent('Live.User.Join').subscribe(res => {
      console.log(res);
    })
    this.socketService.listenEvent('TMT.LiveApp.EventBus.Distributed.PostCreateEto').subscribe(res => {
      console.log(res);
    })
    this.socketService.listenEvent('Shop.Status.Received').subscribe(res => {
      console.log(res);
    });
    this.socketService.listenEvent('Shop.Status.Changed').subscribe(res => {
      console.log(res);
    })
    this.socketService.listenEvent('tmt.notification.eventbus.distributed.notifyeto').subscribe(res => {
      console.log(res);
    })
  }

  ngOnDestroy(): void {

  }

  increase() {
    this.socketService.emitEvent('Post.Joined', 57600628490241)

  }

  decrease() {
    this.socketService.emitEvent('Post.Left', 57600628490241)

  }

  sendUserStatus() {
    this.socketService.emitEvent('Shop.Status.Get', '1550572009310292')

  }
}
