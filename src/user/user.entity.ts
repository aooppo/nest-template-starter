
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { type } from 'os';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({type: 'numeric'})
  power: number;
}