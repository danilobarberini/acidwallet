import { Column } from 'typeorm';

export class Address {
  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  province: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
