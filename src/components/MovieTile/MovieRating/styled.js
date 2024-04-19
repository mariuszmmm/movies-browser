import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/VectorStar.svg";

export const MovieTileRating = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ $big }) => ($big ? "12" : "8") + "px"};
  font-size: ${({ $big }) => ($big ? "22" : "16") + "px"};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ $big }) => ($big ? "1.3" : "1.5")};
  
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 0;
    gap: 8px;
    font-size: 13px;
    line-height: 1.3;
    align-items: flex-start;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: ${({ $big }) => ($big ? "40" : "24") + "px"};
  height: ${({ $big }) => ($big ? "40" : "23") + "px"};
  transition: 0.6s;
  margin-bottom: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: ${({ $big }) => ($big ? "24" : "16") + "px"};
    height: ${({ $big }) => ($big ? "23" : "16") + "px"};
  }
`;

export const Rating = styled.span`
  font-size: ${({ $big }) => ($big ? "22" : "16") + "px"};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ $big }) => ($big ? "28.6" : "24") + "px"};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(13px, 1.6vw, 16px); 
    line-height: clamp(16.9px, 1.6vw, 24px); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const MovieTileRatingTen = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;

export const MovieTileRatingVotes = styled.span`
  font-size: ${({ $big }) => ($big ? "14" : "16") + "px"};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ $big, theme }) =>
    $big ? theme.color.blackSpecial : theme.color.darkerGrey};
  line-height: 24px;
  text-align: left;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(13px, 1.6vw, 16px); 
    line-height: clamp(16.9px, 1.6vw, 24px); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 16.9px;
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;
