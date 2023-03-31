import React from 'react'

export default function Nav() {
  return (
    <div className="">
            <nav
              aria-label="breadcrumb"
              className="mh3 mh0-xl mb4-xl mh0-m mv3"
            >
              <ol className="o_list">
                <li className="list_element">
                  <a
                    className="w_MSFl gray underline"
                    itemprop="item"
                    href="/cp/electronics/3944"
                  >
                    <span itemprop="name">Electronics</span>
                  </a>
                  <span aria-hidden="true" className="w_95To">
                    /
                  </span>
                </li>
                <li className="list_element">
                  <a
                    className="w_MSFl gray underline"
                    itemprop="item"
                    href="/cp/cameras-camcorders/133277"
                  >
                    <span itemprop="name">Cameras &amp; Camcorders</span>
                  </a>
                  <span aria-hidden="true" className="w_95To">
                    /
                  </span>
                </li>
                <li className="list_element">
                  <a
                    className="w_MSFl black"
                    itemprop="item"
                    href="/cp/dslr-cameras/1096663"
                  >
                    <span itemprop="name">DSLR Cameras</span>
                  </a>
                </li>
              </ol>
            </nav>
            <hr className="mt-3 opacity-10" />
            <div className="d-flex d-inline justify-content-center pt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                className="col-1 p-2"
                alt=""
              />
              <p className="col-7 pl-1 fs-10 mt-2">
                <h5 className="fw-bold d-inline">Ship free, no order min*</h5>As
                often as you need.
              </p>
            </div>
            <hr className="mt-3 opacity-10" />
          </div>
  )
}
