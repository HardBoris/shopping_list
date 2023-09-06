import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Detail } from "./Detail";

@Entity("elements")
export class Element {
  @PrimaryGeneratedColumn("uuid")
  elementId?: string;

  @Column()
  element: string;

  @Column()
  elementType: string;

  @Column()
  defaultUnit: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Detail, (detail) => detail.element, { cascade: true })
  details: Detail[];
}
