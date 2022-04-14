import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ccyitickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
