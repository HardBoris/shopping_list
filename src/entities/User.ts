import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PurchaseRequest } from "./PurchaseRequest";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @OneToMany(() => PurchaseRequest, (prequest) => prequest.requestor, {
    cascade: true,
  })
  prequests: PurchaseRequest[];
}
