import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("purchase_request")
export class PurchaseRequest {
  @PrimaryGeneratedColumn()
  prId?: number;

  @CreateDateColumn()
  prDate?: Date;

  @Column()
  requestor: string;
}
