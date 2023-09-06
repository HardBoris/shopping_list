import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Element } from "./Element";

@Entity("stuff_profiles")
export class Stuff {
  @PrimaryGeneratedColumn("uuid")
  stuffProfileId?: string;

  @Column()
  stuffPacking: string;

  @Column()
  stuffPerPacking: string;

  @Column()
  minimumStock: string;

  @Column()
  idealStock: string;

  @OneToOne(() => Element, (element) => element.stuff)
  element: Element;
}
