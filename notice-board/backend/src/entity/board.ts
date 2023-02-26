import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("board")
export class Post {
  @PrimaryGeneratedColumn("uuid")
  no: number;

  @Column({ type: "varchar", length: "20", nullable: false })
  title: string;

  @Column({ type: "text", length: "3000", nullable: false })
  detail: string;

  @Column({ type: "varchar", length: "20", nullable: false })
  nickname: number;

  @Column({ type: "varchar", length: "20", nullable: false })
  password: string;
}
