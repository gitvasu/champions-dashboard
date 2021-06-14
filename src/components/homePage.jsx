import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { apiConstants, token } from "../constants/constants";
import { objIsEmpty } from "../utils/utilityFunc";
import Dashboard from "./dashboard";
import MemoizedHeader from "./header";
import WatchList from "./watchList";

const HomePage = () => {
  const [champs, setChamps] = useState([]);
  const [sortOrder, setSortOrder] = useState({});
  const [watchCount, setWatchCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  function handleWatchList(e) {
    const checked = e.target.checked;
    const champId = e.target.value;
    const indexOfChamp = champs.findIndex(
      (champ) => `${champ["id"]}` === champId
    );
    const champsConst = champs;

    // Exceptional case (mainly due to coding error)
    if (indexOfChamp === -1) return;

    if (checked) {
      champsConst[indexOfChamp] = {
        ...champs[indexOfChamp],
        inWatchList: true,
      };
      setWatchCount(watchCount + 1);
    } else {
      champsConst[indexOfChamp] = {
        ...champs[indexOfChamp],
        inWatchList: false,
      };
      setWatchCount(watchCount - 1);
    }
    setChamps(champsConst);
  }

  function changeSortOrder() {
    if (objIsEmpty(sortOrder)) {
      setSortOrder({ order: "desc" });
      const sortedList = []
        .concat(champs)
        .sort((a, b) => (a["name"] > b["name"] ? -1 : 1));
      setChamps(sortedList);
    } else {
      let sortedList;
      if (sortOrder.order === "desc") {
        sortedList = []
          .concat(champs)
          .sort((a, b) => (a["name"] > b["name"] ? 1 : -1));
      } else {
        sortedList = []
          .concat(champs)
          .sort((a, b) => (a["name"] > b["name"] ? -1 : 1));
      }
      setChamps(sortedList);
      setSortOrder({ order: sortOrder.order === "desc" ? "asc" : "desc" });
    }
  }

  async function fetchAllChamps() {
    const axiosConfig = {
      method: "get",
      url: `${apiConstants.BASE_URL}${apiConstants.GET_ALL_CHAMPS}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let champList = [];

    try {
      champList = await Axios(axiosConfig);
    } catch (error) {
      console.log(error.response);
    }

    return champList;
  }

  useEffect(() => {
    fetchAllChamps().then((champList) => {
      setChamps(
        champList.data.map((champ) => {
          return { ...champ, inWatchList: false };
        })
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Route path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route
        path="/dashboard"
        render={() => (
          <>
            <MemoizedHeader watchCount={watchCount} />
            <Dashboard
              champs={champs}
              changeSortOrder={changeSortOrder}
              sortOrder={sortOrder}
              handleWatchList={handleWatchList}
              isLoading={isLoading}
            />
          </>
        )}
      />
      <Route
        path="/watchlist"
        render={() => (
          <>
            <MemoizedHeader watchCount={watchCount} />
            <WatchList
              champs={champs}
              changeSortOrder={changeSortOrder}
              sortOrder={sortOrder}
              handleWatchList={handleWatchList}
            />
          </>
        )}
      />
    </>
  );
};

export default HomePage;
