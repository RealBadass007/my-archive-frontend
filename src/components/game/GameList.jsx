import styled from 'styled-components';
import GameItem from './GameItem';
import PropTypes from "prop-types";

const GameList = ({ myGameIds = [], games, sliceValue = games.length }) => {
  // by default we are going to display all the games fetched from api if not any slicevalue is mentioned
  
  const myGameIdsArr = myGameIds.map(item => item.id);
  console.log("Inside GameList myGameIdsArr => " + myGameIdsArr);
  
  return (
    <GameListWrapper>
      <div className='card-list'>
        {
          games?.slice(0, sliceValue).map(item => (
            <GameItem myGameIds = {myGameIdsArr} key = { item.id } gameItem = { item } />
          ))
        }
      </div>
    </GameListWrapper>
  )
}

export default GameList;

GameList.propTypes = {
  games: PropTypes.array,
  sliceValue: PropTypes.number
}

const GameListWrapper = styled.div``;
