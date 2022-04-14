import { Publisher, Subjects, TicketCreatedEvent } from "@ccyitickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

}

// new TicketCreatedPubliser