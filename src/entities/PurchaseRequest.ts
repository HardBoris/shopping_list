import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("purchase_requests")
export class PurchaseRequest {
  @PrimaryGeneratedColumn()
  prId?: number;

  @CreateDateColumn()
  prDate?: Date;

  @ManyToOne(() => User, (user) => user.prequests)
  @JoinColumn()
  requestor: User;
}
