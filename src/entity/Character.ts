import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column()
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
