import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Detail } from "./Detail";
import { Midia } from "./Midia";
import { Stuff } from "./Stuff";
import { Tool } from "./Tool";

@Entity("elements")
export class Element {
  @PrimaryGeneratedColumn("uuid")
  elementId?: string;

  @Column()
  element: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  elementType: string;

  @Column()
  defaultUnit: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Detail, (detail) => detail.element, { cascade: true })
  details: Detail[];

  @OneToOne(() => Midia, (midia) => midia.element, { cascade: true })
  @JoinColumn({ name: "midiaProfileId" })
  midia: Midia;

  @OneToOne(() => Stuff, (stuff) => stuff.element, { cascade: true })
  @JoinColumn({ name: "stuffProfileId" })
  stuff: Stuff;

  @OneToOne(() => Tool, (tool) => tool.element, { cascade: true })
  @JoinColumn({ name: "toolProfileId" })
  tool: Tool;
}
