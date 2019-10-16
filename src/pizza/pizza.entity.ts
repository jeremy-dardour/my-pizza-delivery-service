import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Pizza {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public type: string;

  @Column()
  public size: number;
}

export default Pizza;
