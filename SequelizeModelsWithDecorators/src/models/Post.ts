import { Table, Column, ForeignKey, BelongsTo, Model, HasMany } from "sequelize-typescript";
import { User } from "./User";
import { Comment } from "./Comment";

@Table
export class Post extends Model<Post> {
  @Column
  public title: string;

  @Column
  public content: string;

  @ForeignKey(() => User)
  @Column
  public userId!: number;

  @BelongsTo(() => User)
  public postedBy: User;

  @HasMany(() => Comment)
  public readonly comments?: Comment[];
}