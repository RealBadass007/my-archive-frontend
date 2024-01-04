import styled from 'styled-components';
import MyGameItem from './MyGameItem';
import GameItem from './GameItem';
import PropTypes from "prop-types";

const MyGameList = ({ myGameIds = [], games, sliceValue = games.length }) => {
  // by default we are going to display all the games fetched from api if not any slicevalue is mentioned

  const myGameIdsArr = myGameIds.map(item => item.id);
  console.log("Inside MyGameList myGameIdsArr => " + myGameIdsArr);

  // console.log("myGameIds.id => " + myGameIds.map(item => item.id));
  // console.log("item.id => " + games.map(item => item.id));
  // console.log(myGameIds.includes(item.id));
  return (
    <GameListWrapper>
      <div className='card-list'>
        {
          games?.slice(0, sliceValue).map(item => {
            console.log("Inside MyGameList games item.id => " + item.id)
            // console.log("myGameIds => " + myGameIds);
            // console.log(myGameIds.includes(item));
            return myGameIdsArr.includes(item.id) ? <MyGameItem myGameIds = {myGameIdsArr} key = { item.id } gameItem = { item } /> : null
          })
        }
      </div>
    </GameListWrapper>
  )
}

export default MyGameList;

MyGameList.propTypes = {
  games: PropTypes.array,
  sliceValue: PropTypes.number
}

const GameListWrapper = styled.div``;
