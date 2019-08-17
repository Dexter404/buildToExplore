import { Model, Table, Column, ForeignKey } from "sequelize-typescript";
import { Coach } from "./Coach";

@Table
export class Team extends Model<Team> {
  @Column
  public name: string;

  @ForeignKey(() => Coach)
  @Column
  public coachId!: number;

  // @BelongsTo(() => Coach)
  // public coach: Coach;

  // @HasMany(() => Player)
  // public readonly players?: Player[];
}