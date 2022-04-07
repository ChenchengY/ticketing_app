import { Publisher, Subjects, TicketCreatedEvent } from "@ccyitickets/common";

export class TicketCreatedPubliser extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

}

// new TicketCreatedPubliser