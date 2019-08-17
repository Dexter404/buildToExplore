import { Model, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./User";
import { Post } from "./Post";

@Table
export class Comment extends Model<Comment> {
  @Column
  public text: string;

  @BelongsTo(() => Post)
  public post: Post;

  @ForeignKey(() => Post)
  @Column
  public postId!: number;

  @BelongsTo(() => User)
  public commentedBy: User;

  @ForeignKey(() => User)
  @Column
  public userId!: number;
}