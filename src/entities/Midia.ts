import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Element } from "./Element";

@Entity("midia_profiles")
export class Midia {
  @PrimaryGeneratedColumn("uuid")
  midiaProfileId: string;

  @Column()
  width: string;

  @Column()
  height: string;

  @Column()
  thick: string;

  @Column()
  minimumStock: string;

  @Column()
  idealStock: string;

  @OneToOne(() => Element, (element) => element.midia)
  element: Element;
}
