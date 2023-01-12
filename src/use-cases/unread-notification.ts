import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../app/repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface unreadNotificationRequest {
  notificationId: string;
}

type readNotificationResponse = void;
@Injectable()
export class UnreadNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: unreadNotificationRequest,
  ): Promise<readNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}
