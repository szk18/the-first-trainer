import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Possession {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column()
  user_id: number;

  @Column()
  character_id: number;

  constructor(user_id: number, character_id: number) {
    this.user_id = user_id;
    this.character_id = character_id;
  }
}
