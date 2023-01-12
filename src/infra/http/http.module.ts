import { UnreadNotification } from './../../use-cases/unread-notification';
import { CancelNotification } from 'src/use-cases/cancel-notification';
import { SendNotification } from '../../use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { CountRecipientNotifications } from 'src/use-cases/count-recipient-notifications';
import { GetRecipientIdNotification } from 'src/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/use-cases/read-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientIdNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
