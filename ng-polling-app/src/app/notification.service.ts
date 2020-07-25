import { Injectable } from '@angular/core';
import { Notification } from './notification.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  notifications: Notification[] = [];
  NOTIFICATION_ENDPOINT = "https://ng-polling-app.firebaseio.com/notifications.json";
  colors = ["#007bff", "#e83e8c", "#6f42c1"];

  constructor(private http: HttpClient) { }

  public getRandomColor(): string {
    let i = Math.floor(Math.random() * 3);
    return this.colors[i];
  }

  public getNotifications() : Observable<Notification[]> {
    // let notification = new Notification();
    // notification.initiatedBy = "username";
    // notification.text = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.";
    // notification.createdAt = Date.now();
    // notification.color = this.getRandomColor();

    // this.notifications.push(notification);
    // this.notifications.push(notification);
    // this.notifications.push(notification);
    // this.notifications.push(notification);
    // this.notifications.push(notification);
    // this.notifications.push(notification);
    // this.notifications.push(notification);
    // return new Observable(observer => {
    //   observer.next(this.notifications);
    //   observer.complete();
    // });
    return this.http.get(this.NOTIFICATION_ENDPOINT)
      .pipe(map(responseData => {
        const notifications = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key))
            notifications.push({ ...responseData[key] });
        }
        return notifications;
      }));
  }

  public createNewNotification() {
    let notification = new Notification();
    notification.initiatedBy = "username";
    notification.text = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.";
    notification.createdAt = Date.now();
    notification.color = this.getRandomColor();
    this.http.post(this.NOTIFICATION_ENDPOINT, notification).subscribe(responseData => {
      console.log("created a new notification.", responseData);
    });
  }
}
