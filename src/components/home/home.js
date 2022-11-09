import React from "react";
import PropTypes from "prop-types";
import styles from "./home.module.scss";
import bg from "../../public/images/bg.jpeg";
import { FaBeer } from "react-icons/fa";
import { Chrono } from "react-chrono";

const Home = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];
  return (
    <div className={styles.Home}>
      <div className="container">
        <div className={styles.Tagline}>
          Welcome to my Profile, <br />
          Pankaj Dwivedi
        </div>
        <div
          className={styles.Profile}
          data-aos="zoom-out-right"
          data-aos-anchor-placement="top-center"
        >
          <img
            src={bg}
            alt="..."
            width="200"
            height="200"
            class="rounded-circle"
          ></img>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div data-aos="zoom-out-right" data-aos-anchor-placement="top-center">
          <img
            src={bg}
            alt="..."
            width="200"
            height="200"
            class="rounded-circle"
          ></img>
        </div>

        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
      </div>
      <div class="container">
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
      </div>{" "}
      <div class="container">
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>

        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
      </div>{" "}
      <div class="container">
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
      </div>{" "}
      <div class="container">
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-primary "
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-success"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
        <div className="row h-50">
          <div
            className="col alert alert-danger"
            role="alert"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            1 of 2
          </div>
          <div
            className="col alert alert-warning"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            2 of 2
          </div>
        </div>
      </div>
      <div>
        <Chrono data-aos="fade-up" data-aos-anchor-placement="top-center">
          <div>
            <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
          </div>
          <div>
            <img src="<url to  a nice image" />
          </div>
        </Chrono>
      </div>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
