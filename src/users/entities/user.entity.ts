import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CLIENT,
  })
  role: UserRole;

  @OneToOne(() => Profile, (profile) => profile.user, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn()
  profile: Profile;

  //@OneToOne(() => Wallet, {cascade: true})
  @Column()
  wallet: string;
}
