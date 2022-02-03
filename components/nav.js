import React from "react";
import Link from "next/link";

const Nav = (props) => {
<<<<<<< HEAD
  const { categories } = props; // 
  console.log (categories)
  // console.log(categories.data);
=======
  const { categories } = props;
>>>>>>> 1c85a1f913156b88276de12e7a5d9483f90ef426
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories?.data?.map((category) => {
              return (
                <li key={category.id}>
                  <Link
                    as={`/category/${category?.attributes?.slug}`}
                    href={`/category/${category?.attributes?.slug}`}
                  >
                    <a className="uk-link-reset">
                      {category?.attributes?.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const categories = await fetchAPI("/categories");
  return {
    props: { categories },
    revalidate: 1,
  };
}

export default Nav;
