import { Publisher, OrderCancelledEvent, Subjects } from '@ccyitickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}