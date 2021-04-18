import axios from "axios";
import React from "react";
import { useReducer, useEffect } from "react";

const ACTION = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const BASE_URL= 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTION.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTION.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
};

const UseFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, {
    jobs: [],
    loading: true,
    error: false,
  });
  useEffect(() => {
    dispatch({ type: ACTION.MAKE_REQUEST });
    axios.get(BASE_URL, {
      params: { markdown: true, page: page, ...params }
    }).then((res) => {
        dispatch({ type: ACTION.GET_DATA, payload: { jobs: res.data } });
      }).catch(err=>{
        dispatch({ type: ACTION.ERROR, payload: { error: err } });
      })

  }, [params, page]);
  return state;
};

export default UseFetchJobs;
