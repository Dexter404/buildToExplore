import { Model, Table, Column, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Team } from "./Team";

@Table
export class Player extends Model<Player> {
  @Column
  public name: string;

  @BelongsTo(() => Team)
  public team: Team;

  @ForeignKey(() => Team)
  @Column
  public teamId!: number;
}