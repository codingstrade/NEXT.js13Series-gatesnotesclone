import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";
import axios from "axios";
export default function Home(props) {
  return (
    <div>
      <Hero posts={props.posts} />
      <Section posts={props.posts} category={props.categories} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const Postres = await axios.get("http://localhost:3000/api/post");
  if (Postres.status !== 200) {
    return new Error("Fetching data failed");
  }
  const posts = await Postres.data;
  const CatRes = await fetch("http://localhost:3000/api/category");
  const categories = await CatRes.json();
  return {
    props: { posts, categories }, // will be passed to the page component as props
  };
}
