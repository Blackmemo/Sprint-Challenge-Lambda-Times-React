import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const CardsContainerCard = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const CardHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const CardAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const AuthorImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const ImgContainerImg = styled.img` 
  width: 40px;
`;

const AuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;


const Card = props => {
  return (
    <CardsContainerCard>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthor>
        <AuthorImgContainer>
          <ImgContainerImg src={props.card.img} />
        </AuthorImgContainer>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </CardAuthor>
    </CardsContainerCard>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.object.isRequired,
}
export default Card;
