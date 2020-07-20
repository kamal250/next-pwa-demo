import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import data from "../static/data.json";
import convertToSlug from "../helper/url";

const Home = () => (
  <div>
    <Head>
      <title>NextJS PWA Demo - List</title>
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next.js PWA Demo!</h1>

      <ul className="row">
        {data.map((resourceGroup) => {
          return (
            <li key={resourceGroup.name}>
              <h2>{resourceGroup.name}</h2>
              {resourceGroup.resources.map((resource) => {
                return (
                  <Link key={resource.name} href={convertToSlug(resource.name)}>
                    <a className="card">
                      <h3>{resource.name}</h3>
                      <p>{resource.designation}</p>
                    </a>
                  </Link>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .row li {
        list-style: none;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
