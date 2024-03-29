import styled from "styled-components";
import {
  Banner,
  ImageSlider,
  Preloader,
  Tabs,
  Title,
} from "../../components/common/index";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllGames,
  selectAllGamesStatus,
  selectMyGames,
  selectMyGameFromRwg
} from "../../redux/store/gameSlice";
import { useEffect } from "react";
import { fetchAsyncGames, fetchAsyncMyGameFromRawg } from "../../redux/utils/gameUtils";
import { fetchAsyncMyGamesFromSb } from "../../redux/utils/springbootUtils";
import { STATUS } from "../../utils/status";
import { GameList } from "../../components/game/index";
import { MyGameList } from "../../components/game/index";
import { Link } from "react-router-dom";
import { join_image, store_image } from "../../utils/images";
import {
  selectAllGenres,
  selectAllGenresStatus,
} from "../../redux/store/genreSlice";
import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
import {
  selectAllStores,
  selectAllStoresStatus,
} from "../../redux/store/storeSlice";
import { StoreList } from "../../components/store/index";
import { fetchAsyncStores } from "../../redux/utils/storeUtils";

//
import { useParams } from 'react-router-dom';
//

const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const genres = useSelector(selectAllGenres);
  const genresStatus = useSelector(selectAllGenresStatus);
  const stores = useSelector(selectAllStores);
  const storesStatus = useSelector(selectAllStoresStatus);
  // const myGameIds = [3498,4291,28];
  const myGameIds = useSelector(selectMyGames);
  // const myGameFromRawg = useSelector(selectAllGames);
  const { gameId } = useParams();
  const myGameFromRawg = useSelector(selectMyGameFromRwg);

  useEffect(() => {
    dispatch(fetchAsyncMyGamesFromSb()).then((myGameIds) => {
      dispatch(fetchAsyncMyGameFromRawg(myGameIds))
    });
    // dispatch(fetchAsyncMyGameFromRawg([3939, 3498]));
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncGenres());
    dispatch(fetchAsyncStores());
    
  }, [gameId]);

  const renderedMyGames = (
    <>
      <MyGameList myGameIds = {myGameIds} sliceValue={9} games={myGameFromRawg} />
      <div className="d-flex justify-content-center">
        <Link to="/games" className="section-btn">
          browse your library
        </Link>
      </div>
    </>
  );

  const renderedPopularGames = (
    <>
      <GameList myGameIds = {myGameIds} sliceValue={9} games={games} />
      <div className="d-flex justify-content-center">
        <Link to="/games" className="section-btn">
          see more games
        </Link>
      </div>
    </>
  );

  return (
    <HomeWrapper>
      {/* <Banner /> */}

      <section className="section sc-popular">
        <div className="container">
          <Title
            titleName={{ firstText: "my", secondText: "games" }}
          />
          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedMyGames
          ) : (
            "No games found!"
          )}
        </div>
      </section>

      <section className="section sc-popular">
        <div className="container">
          <Title
            titleName={{ firstText: "top popular", secondText: "games" }}
          />
          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedPopularGames
          ) : (
            "No games found!"
          )}
        </div>
      </section>

      {/* <ImageSlider /> */}

      {/* <section
        className="section sc-join d-flex align-items-center"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${join_image}) center/cover no-repeat`,
        }}
      >
        <div className="container w-100">
          <div className="join-content text-white mx-auto text-center">
            <h2 className="join-title mb-3">
              JOIN THE <span>COMMUNITY</span>
            </h2>
            <p className="lead-text">
              Join our Discord community which is in the making and made by
              gamers for gamers. All are welcome to join no matter the game you
              play, we&apos;re here to have a good.
            </p>
            <button type="button" className="section-btn mt-4">
              join discord
            </button>
          </div>
        </div>
      </section> */}

      <section className="section sc-genres">
        <div className="container">
          <Title
            titleName={{
              firstText: "top",
              secondText: "genres",
            }}
          />
        </div>
        {genresStatus === STATUS.LOADING ? 
          (
            <Preloader />
          ) : 
          genres?.length > 0 ? 
            (
              <Tabs myGameIds = {myGameIds} sliceValue={9} data={genres} />
            ) : (
              "No genres found!"
            )
        }
      </section>

      {/* <section
        className="section sc-stores"
        style={{
          background: `linear-gradient(180deg, rgba(12, 10, 36, 0.73) 0%, rgba(0, 0, 0, 0.73) 72.92%), url(${store_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <Title
            titleName={{
              firstText: "our",
              secondText: "game stores",
            }}
          />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores?.length > 0 ? (
            <StoreList stores={stores} />
          ) : (
            "No stores found!"
          )}
        </div>
      </section> */}
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
    }

    .section-btn-non-selectable {
      margin-top: 60px;
    }
  }

  .sc-join {
    min-height: 640px;

    .join-content {
      max-width: 600px;
    }

    .join-title {
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;

      span {
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }
  }

  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores {
    min-height: 841px;
  }
`;
