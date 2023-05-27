import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getTaxonomy } from "@lib/taxonomyParser";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
const { blog_folder } = config.settings;
import { getSinglePage } from "@lib/contentParser";
import { FaFolder } from "react-icons/fa";
import { slugify } from "@lib/utils/textConverter";
import Image from "next/image";
const Categories = ({ categories }) => {
  return (

    <Base title={"Categorias Aztecas"}>

      <section className="section pt-0">

        {markdownify(
          "Categorias Azteca",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}
        <div className="container pt-12 text-center">
          <div className="text-center">
            <img src="/images/aztec-idol-g033f66e47_640.png" alt="Estatua de coatlicue" className="mx-auto my-auto" />
            <h3
              className="text-5xl text-[#49B675] font-semibold mb-4"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Estatua de coatlicue
            </h3>
          </div>
          <p className="text-sm text-[#49B675] mb-2">
            Explora la fascinante civilización azteca. Haz clic en la categoría que más te interese para obtener información relevante sobre el tema. Descubre sus creencias religiosas, sumérgete en su cultura, conoce su economía y admira su arquitectura. ¡Sumérgete en el mundo de los aztecas y despierta tu curiosidad histórica!          </p>
          <ul className="row">
            <li
              key={`1`}
              className="mt-4 block lg:col-4 xl:col-3"

            >
              <Link
                href={`/prueba`}
                className="flex w-full items-center justify-center rounded-lg bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white  dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              >
                <FaFolder className="mr-1.5" />
                Agricultura
              </Link>
            </li>
            <li
              key={`2`}
              className="mt-4 block lg:col-4 xl:col-3"
            >
              <Link
                href={`/religion`}
                className="flex w-full items-center justify-center rounded-lg bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white  dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              >
                <FaFolder className="mr-1.5" />
                Religión
              </Link>
            </li>
            <li
              key={`3`}
              className="mt-4 block lg:col-4 xl:col-3"
            >
              <Link
                href={`/arte`}
                className="flex w-full items-center justify-center rounded-lg bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white  dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              >
                <FaFolder className="mr-1.5" />
                Arte



              </Link>
            </li>
            <li
              key={`4`}
              className="mt-4 block lg:col-4 xl:col-3"
            >
              <Link
                href={`/arquitectura`}
                className="flex w-full items-center justify-center rounded-lg bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white  dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              >
                <FaFolder className="mr-1.5" />
                Arquitectura
              </Link>
            </li>
            
            
            <li
              key={`5`}
              className="mt-4 block lg:col-4 xl:col-3"
            >
              <Link
                href={`/economia`}
                className="flex w-full items-center justify-center rounded-lg bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white  dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
              >
                <FaFolder className="mr-1.5" />
                Economía
              </Link>
            </li>

            
          </ul>
        </div>
      </section>
    </Base>
  );
};

export default Categories;

export const getStaticProps = () => {
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");
  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.map(e => slugify(e)).includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });
  return {
    props: {
      categories: categoriesWithPostsCount,
    },
  };
};
