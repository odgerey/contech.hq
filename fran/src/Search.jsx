import { liteClient as algoliasearch } from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";

import { Hit } from "./Hit";

const searchClient = algoliasearch("RTGNQ6F69C", "d00c63705fb78ab7047ffe39ff3ce47b");

export const Search = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="contech_h_q_pages"
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};