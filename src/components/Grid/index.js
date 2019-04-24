import React from "react"
import styles from "./styles.module.css"
import Tile from "../Tile"

import impakt from "../../../static/images/impakt/impakt-tile.png"
import haf from "../../../static/images/haf/haf-tile.png"
import karabinchak from "../../../static/images/karabinchak/karabinchak-tile.png"
import pear from "../../../static/images/pear/pear-tile.png"
import mari from "../../../static/images/mari/mari-tile.png"

export default () => (
  <div className={styles.container}>
    <Tile
      link="/impakt"
      // link=""
      title="Impakt"
      details="Product Design, React, Django"
      bg="rgba(74,144,226,0.2)"
      overlay="rgba(74,144,226,0.9)"
      image={impakt}
    />
    <Tile
      link="/haf"
      // link=""
      title="Happy Active Family"
      details="Mobile App Design, React Native"
      bg="rgba(11,20,26,0.075)"
      overlay="rgba(11,20,26,0.9)"
      image={haf}
    />
    <Tile
      // link=""
      link="/karabinchak"
      title="Assemblyman Robert Karabinchak"
      details="React, GatsbyJS, GraphQL"
      bg="rgba(7,53,92,0.2)"
      overlay="rgba(7,53,92,0.9)"
      image={karabinchak}
    />
    <Tile
      // link=""
      link="/pear"
      title="Pear Design"
      details="Brand Design, React"
      bg="rgba(0,0,33,0.2)"
      overlay="rgba(0,0,33,0.9)"
      image={pear}
    />
    <Tile
      // link=""
      link="/mari"
      title="Mari for Michigan"
      details="Brand Design, Web Development"
      bg="rgba(62,146,204,0.2)"
      overlay="rgba(62,146,204,0.9)"
      image={mari}
    />
  </div>
)
