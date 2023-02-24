import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class board {
  @PrimaryGeneratedColumn()
  no: number;

  @Column()
  title: string;

  @Column()
  detail: string;

  @Column()
  nickname: number;

  @Column()
  password: string;
}
