import { Table, Column, Model, HasMany, AllowNull, Unique, Length } from "sequelize-typescript";
import { Post } from "./Post";
import { Comment } from "./Comment";

@Table
export class User extends Model<User> {
  @AllowNull(false) @Unique
  @Column
  public email!: string;

  @AllowNull(false)
  @Column
  public name!: string;

  @AllowNull(false) @Length({ min: 8 })
  @Column
  public password!: string;

  @AllowNull(false) @Unique
  @Column
  public username!: string;

  // Two way binding
  @HasMany(() => Post)
  public readonly posts?: Post[];

  @HasMany(() => Comment)
  public readonly comments?: Comment[];
}