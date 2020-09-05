import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column()
  name: string;

  @Column()
  token: string;

  constructor(name: string, token: string) {
    this.name = name;
    this.token = token;
  }
}
