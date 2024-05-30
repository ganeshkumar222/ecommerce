import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Home = ({ kart, setKart }) => {
  let URL = "https://fakestoreapi.com/products";
  let [data, setData] = useState([]);

  let navigate = useNavigate();

  let getData = async () => {
    let response = await axios.get(URL);
    console.log(response.data);
    setData(response.data);
  };

  let AddToKart = (e) => {
    let temp = [...kart];
    temp.push(e);
    setKart(temp);
    console.log(temp);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">FountainCommerce</a>
            <div className="d-flex">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/kart");
                }}
              >
                My Kart
              </button>
            </div>
          </div>
        </nav>
        <div className="row">
          {data.map((e) => {
            return (
              <div
                className="card col-md-4 m-2"
                style={{ width: "18rem" }}
                key={e.id}
              >
                <img src={e.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.category}</h5>
                  <p className="card-text">{e.description}</p>
                  <p className="card-text">Rs.{e.price}</p>
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      AddToKart(e);
                    }}
                  >
                    Add to Kart
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
