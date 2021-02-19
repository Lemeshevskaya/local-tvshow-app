export interface ICurrentTvShowData {
  show {
    name: string,
    language: string,
    genres: string[];
    status: string,
    premiered: Date,
    officialSite: string,
    rating{
      average:number
    },
    weight: number,
    network {
      country {
        name: string
      }
    },
    image {
      medium: string
    },
    summary: string
  }
}
