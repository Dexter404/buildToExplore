import { Model, Table, Column, HasOne } from "sequelize-typescript";
import { Team } from "./Team";

@Table
export class Coach extends Model<Coach> {
  @Column
  public name: string;

  @HasOne(() => Team)
  public readonly team: Team;
}