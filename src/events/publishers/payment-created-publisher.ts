import { Subjects, Publisher, PaymentCreatedEvent } from '@ticket_project/commonn';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
