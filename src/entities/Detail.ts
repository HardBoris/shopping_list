import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseRequest } from "./PurchaseRequest";
import { Element } from "./Element";

@Entity("details")
export class Detail {
  @PrimaryGeneratedColumn()
  detailId?: number;

  @Column()
  quantity: string;

  @Column()
  measurement: string;

  @ManyToOne(() => PurchaseRequest, (prequest) => prequest.details)
  @JoinColumn({ name: "prequestId" })
  prequest: PurchaseRequest;

  @ManyToOne(() => Element, (element) => element.details)
  @JoinColumn({ name: "elementId" })
  element: Element;
}
