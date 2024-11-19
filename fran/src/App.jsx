import { Highlight } from "react-instantsearch";
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';
import { Search } from "../components/Search";

export const Hit = ({ hit }) => {
  return (
    <article>
      <div className="hit-path">
			  <Highlight attribute="path" hit={hit} />
			</div>
			<div className="hit-content">
			  <Highlight attribute="content" hit={hit} />
			</div>
			<div className="hit-title">
			  <Highlight attribute="title" hit={hit} />
			</div>
    </article>
  );
};
export default function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="contech_h_q_pages">
      <SearchBox />
      <Search />
      <Hits hitComponent={Hit} />
    </InstantSearch>
    
  );
}

