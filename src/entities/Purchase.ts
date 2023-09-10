import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseRequest } from "./PurchaseRequest";

export enum PaymentForm {
  BILLED = "Faturado",
  CARD = "Cartão",
  CASH = "Dinheiro",
}

export enum PurchaseStatus {
  OK = "Ok",
  PENDING = "Pendente",
  DELAYED = "Atrasada",
}

export enum LogisticMode {
  DELIVERY = "Entrega",
  WITHDRAW = "Retirada",
}

@Entity("purchases")
export class Purchase {
  @PrimaryGeneratedColumn()
  purchaseId: number;

  @CreateDateColumn()
  purchaseDate?: Date;

  @Column({ nullable: true })
  invoice?: string;

  @Column({ nullable: true })
  deliveryDate?: Date;

  @Column({ type: "enum", enum: LogisticMode, default: LogisticMode.DELIVERY })
  logisticMode: LogisticMode;

  @Column({ type: "enum", enum: PaymentForm, default: PaymentForm.BILLED })
  paymentForm: PaymentForm;

  @Column({ nullable: true })
  paymentInstallments: string;

  @Column({
    type: "enum",
    enum: PurchaseStatus,
    default: PurchaseStatus.PENDING,
  })
  purchaseStatus: PurchaseStatus;

  @ManyToOne(() => PurchaseRequest)
  @JoinColumn({ name: "prequest" })
  prequest: PurchaseRequest;

  /* @ManyToOne(() => Partner)
  @JoinColumn({ name: "partnerId" })
  partner: Partner; */

  /* @ManyToOne(() => Company)
  @JoinColumn({ referencedColumnName: "code" })
  company: Company; */

  /* @OneToMany(() => PurchaseElement, (detail) => detail.purchase, {
    cascade: true,
  })
  details: PurchaseElement[]; */
}
