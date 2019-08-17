import { Table, Column, Model, BelongsToMany } from "sequelize-typescript";
import { Movie } from "./Movie";
import { MovieActor } from "./MovieActor";

@Table
export class Actor extends Model<Actor> {
  @Column
  public name!: string;

  @Column
  public age!: number;

  @BelongsToMany(() => Movie, () => MovieActor)
  public readonly movies?: Movie[];
}