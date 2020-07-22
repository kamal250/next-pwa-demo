import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import { useRouter } from "next/router";

const RenderResource = (props) => {
  return (
    <>
      <h1>{props.resource.name}</h1>
      <div>
        <h3>{props.resource.group}</h3>
        <img
          src={props.resource.picture}
          alt={props.resource.name}
          title={props.resource.name}
        />
      </div>
    </>
  );
};

const Resource = () => {
  const router = useRouter();
  const { name, group } = router.query;
  const resourceName = name
    ? name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "";
  const resource = JSON.parse(localStorage.getItem("resource")) || {};
  return (
    <div>
      <Head>
        <title>NextJS PWA Demo - {resourceName}</title>
      </Head>

      <Nav />

      { resource && resourceName === resource.name ? <RenderResource resource={resource} /> : ""}

      <Link href={`/`}>
        <a>Back</a>
      </Link>
    </div>
  );
};

export default Resource;
