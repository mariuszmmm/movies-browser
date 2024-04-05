import {
  MovieCoverWrapper,
  MovieCoverImage,
  MovieCoverBlackBars,
  MovieCoverInfo,
  MovieCoverTitle,
  MovieCoverRating,
  MovieCoverRatingVotes,
  MovieCoverEffect,
  MovieCoverRatingTen,
} from "./styled";
import shadow from "../../../images/shadow.png";
import { StyledStarIcon } from "../../../components/MovieTile/styled";

export const MovieCover = ({ cover, title, rating, votes }) => (
  <>
    {/* <MovieCoverBlackBars> */}
    <MovieCoverWrapper>
      <MovieCoverEffect src={shadow} />
      <MovieCoverImage src={"https://image.tmdb.org/t/p/original" + cover} />
      <MovieCoverInfo>
        <MovieCoverTitle>{title}</MovieCoverTitle>
        <MovieCoverRating>
          <StyledStarIcon big="true" />
          {rating}
        </MovieCoverRating>
        <MovieCoverRatingVotes>{votes} votes</MovieCoverRatingVotes>
      </MovieCoverInfo>
    </MovieCoverWrapper>
    {/* </MovieCoverBlackBars> */}
  </>
);
