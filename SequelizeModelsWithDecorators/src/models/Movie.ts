import { Model, Table, Column, BelongsToMany, Scopes } from "sequelize-typescript";
import { Actor } from "./Actor";
import { MovieActor } from "./MovieActor";

@Scopes(() => ({
  cast: {
    include: [{
      model: Actor,
      through: { attributes: [] },
    }],
  },
}))
@Table
export class Movie extends Model<Movie> {
  @Column
  public title: string;

  @Column
  public year: number;

  @BelongsToMany(() => Actor, () => MovieActor)
  cast?: Actor[];
}