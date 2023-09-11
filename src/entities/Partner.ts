import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Purchase } from "./Purchase";
import { Element } from "./Element";

@Entity("partners")
export class Partner {
  @PrimaryGeneratedColumn("uuid")
  partnerId: string;

  @Column()
  fantasyName: string;

  @Column()
  CNPJ: string;

  @Column({ nullable: true })
  corporateName?: string;

  @Column({ nullable: true })
  partnerEmail?: string;

  @Column({ nullable: true })
  partnerPhone?: string;

  @OneToMany(() => Purchase, (purchase) => purchase.partner)
  purchases: Purchase[];

  @ManyToMany(() => Element, (element) => element.partners)
  @JoinTable()
  element: Element[];
}
