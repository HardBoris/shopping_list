import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("shopping")
export class Shopping {
  @PrimaryGeneratedColumn()
  shoppingId?: number;

  @CreateDateColumn()
  shoppingDate?: Date;

  @Column()
  requestor: string;
}
