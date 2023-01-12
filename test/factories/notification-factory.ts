import { NotificationProps } from './../../src/app/entities/notification';
import { Notification } from '../../src/app/entities/notification';
import { Content } from '@app/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('this is a notification'),
    category: 'social',
    recipientId: 'recipient-2',
    ...override,
  });
}
