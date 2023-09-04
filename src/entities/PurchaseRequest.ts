import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Detail } from "./Detail";

@Entity("purchase_requests")
export class PurchaseRequest {
  @PrimaryGeneratedColumn()
  prId?: number;

  @CreateDateColumn()
  prDate?: Date;

  @ManyToOne(() => User, (user) => user.prequests)
  @JoinColumn()
  requestor: User;

  @OneToMany(() => Detail, (detail) => detail.prequest, { cascade: true })
  details: Detail[];
}
