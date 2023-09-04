import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseRequest } from "./PurchaseRequest";

@Entity("details")
export class Detail {
  @PrimaryGeneratedColumn()
  detailId?: number;

  @Column()
  item: string;

  @Column()
  itemType: string;

  @Column()
  quantity: string;

  @Column()
  measurement: string;

  @ManyToOne(() => PurchaseRequest, (prequest) => prequest.details)
  @JoinColumn({ name: "prequestId" })
  prequest: PurchaseRequest;
}
