import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './notification.model';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-polling-app';
  notifications: Notification[];
  notificationsCount = 0;
  polling$: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotifications()
      .subscribe((notifications: Notification[]) => {
        this.notificationsCount = notifications.length;
        this.notifications = notifications.reverse().slice(0, 5);
      });
    // this.notificationService.getNotifications();
    // this.notifications = this.notificationService.getNotifications().slice(0, 5);
  }

  onCreateNewNotification() {
    this.notificationService.createNewNotification();
  }

  onStartPolling() {
    console.log("polling started.");
    this.polling$ = interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.notificationService.getNotifications())
      )
      .subscribe((notifications: Notification[]) => {
        console.log("polling more notifications...");
        this.notificationsCount = notifications.length;
        this.notifications = notifications.reverse().slice(0, 5);
      });
  }

  onStopPolling() {
    this.polling$.unsubscribe();
    console.log("polling stopped.");
  }

  ngOnDestroy(): void {
    this.onStopPolling();
  }

}
