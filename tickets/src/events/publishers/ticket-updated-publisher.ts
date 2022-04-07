import { Publisher, Subjects, TicketUpdatedEvent } from '@ccyitickets/common';

export class TicketUpdatedPubliser extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}