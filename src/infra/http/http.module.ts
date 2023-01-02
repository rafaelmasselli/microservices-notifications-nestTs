import { SendNotification } from '../../use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
