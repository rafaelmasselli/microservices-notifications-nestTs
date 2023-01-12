import { makeNotification } from '../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Unread notification', () => {
  it('should be able to Unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unReadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
