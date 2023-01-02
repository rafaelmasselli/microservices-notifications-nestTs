import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../app/repositories/notification-repository';
import { Content } from '../app/entities/content';
import { Notification } from '../app/entities/notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
