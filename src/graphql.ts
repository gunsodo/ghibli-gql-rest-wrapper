
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateFilmInput {
    title: string;
    originalTitle?: Nullable<string>;
    originalTitleRomanised?: Nullable<string>;
    description?: Nullable<string>;
    director?: Nullable<string>;
    producer?: Nullable<string>;
    releaseDate?: Nullable<string>;
    runningTime?: Nullable<string>;
    ratingScore?: Nullable<string>;
    people?: Nullable<string[]>;
    species?: Nullable<string[]>;
    location?: Nullable<string[]>;
    vehicles?: Nullable<string[]>;
    url: string;
    length?: Nullable<string>;
}

export class UpdateFilmInput {
    id: string;
    title?: Nullable<string>;
    originalTitle?: Nullable<string>;
    originalTitleRomanised?: Nullable<string>;
    description?: Nullable<string>;
    director?: Nullable<string>;
    producer?: Nullable<string>;
    releaseDate?: Nullable<string>;
    runningTime?: Nullable<string>;
    ratingScore?: Nullable<string>;
    people?: Nullable<string[]>;
    species?: Nullable<string[]>;
    location?: Nullable<string[]>;
    vehicles?: Nullable<string[]>;
    url?: Nullable<string>;
    length?: Nullable<string>;
}

export class Film {
    id: string;
    title: string;
    originalTitle?: Nullable<string>;
    originalTitleRomanised?: Nullable<string>;
    description?: Nullable<string>;
    director?: Nullable<string>;
    producer?: Nullable<string>;
    releaseDate?: Nullable<string>;
    runningTime?: Nullable<string>;
    ratingScore?: Nullable<string>;
    people?: Nullable<string[]>;
    species?: Nullable<Species[]>;
    location?: Nullable<string[]>;
    vehicles?: Nullable<string[]>;
    url: string;
    length?: Nullable<string>;
}

export class Species {
    id: string;
    name: string;
    classification?: Nullable<string>;
    eyeColors?: Nullable<string>;
    hairColors?: Nullable<string>;
}

export abstract class IQuery {
    abstract films(): Film[] | Promise<Film[]>;

    abstract film(id: string): Nullable<Film> | Promise<Nullable<Film>>;
}

export abstract class IMutation {
    abstract createFilm(createFilmInput: CreateFilmInput): Film | Promise<Film>;

    abstract updateFilm(updateFilmInput: UpdateFilmInput): Film | Promise<Film>;

    abstract removeFilm(id: string): Nullable<Film> | Promise<Nullable<Film>>;
}

type Nullable<T> = T | null;
