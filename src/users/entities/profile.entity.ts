import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { Name } from './name.entity';
import { User } from './user.entity';

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @Column()
  email: string;

  @Column(() => Name)
  name: Name;

  @Column(() => Address)
  address: Address;
}
