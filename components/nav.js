import React from "react";
import Link from "next/link";

const Nav = (props) => {
  const {categories} = props
  console.log(categories.data);
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
            {categories.data.map((category) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category?.attributes?.slug}`} href={`/category/${category?.attributes?.slug}`}> 
                    <a className="uk-link-reset">Halo{categories.data?.attributes?.name}</a>
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

export default Nav;
