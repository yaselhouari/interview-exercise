export type Show = {
    type: "movie" | "tvShow";
    id: number;
    title: string;
    release_date: string | null;
    overview: string | null;
    cover_url: string;
    trailer_url: string | null;
    phase: number;
    saga: string | null;
    directed_by: string | null;
    imdb_id: string;
  };
  
  export type Movie = Show & {
    box_office: string;
    duration: number;
    chronology: number;
    post_credit_scenes: number;
  };
  
  export type TvShow = Show & {
    last_aired_date: string | null;
    season: number;
    number_episodes: number;
  };