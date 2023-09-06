import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Element } from "./Element";

@Entity("tool_profiles")
export class Tool {
  @PrimaryGeneratedColumn("uuid")
  toolProfileId?: string;

  @Column({ nullable: true })
  toolModel?: string;

  @Column({ nullable: true })
  toolPower?: string;

  @OneToOne(() => Element, (element) => element.tool)
  element: Element;
}
