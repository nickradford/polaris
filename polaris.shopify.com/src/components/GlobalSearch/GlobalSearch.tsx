import { useState, useEffect } from "react";
import { search } from "../../utils/search";
import {
  GroupedSearchResults,
  SearchResult,
  SearchResultCategory,
  SearchResults,
} from "../../types";
import styles from "./GlobalSearch.module.scss";
import { useCombobox } from "downshift";
import { useRouter } from "next/router";
import { WrappedTextField } from "../TextField/TextField";
import IconGrid from "../IconGrid";
import ComponentGrid from "../ComponentGrid";
import TokenList from "../TokenList";
import Link from "next/link";
import { className, stripMarkdownLinks } from "../../utils/various";

interface Props {}

function getSearchResultAsString(result: SearchResult | null): string {
  switch (result?.category) {
    case "Foundations":
      return result.meta.title;
    case "Components":
      return result.meta.name;
    case "Tokens":
      return result.meta.token.name;
    case "Icons":
      return result.meta.icon.fileName;
  }
  return "";
}

function GlobalSearch({}: Props) {
  const [searchResults, setSearchResults] = useState<GroupedSearchResults>();
  const router = useRouter();
  const globalSearchID = "global-search";

  let resultsInRenderedOrder: SearchResults = [];
  if (searchResults) {
    Object.values(searchResults)
      .sort((a, b) => a.maxScore - b.maxScore)
      .forEach((group) => {
        resultsInRenderedOrder = [...resultsInRenderedOrder, ...group.results];
      });
  }

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
  } = useCombobox({
    id: globalSearchID,
    items: resultsInRenderedOrder,
    onInputValueChange: ({ inputValue }) => {
      const results = search(inputValue || "");
      setSearchResults(results);
    },
    onSelectedItemChange: (item) => {
      const url = item.selectedItem?.url;
      if (url) {
        router.push(url);
      }
    },
    itemToString: getSearchResultAsString,
  });

  let resultIndex = -1;

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const searchbar = document.getElementById(globalSearchID);
      let isSlashKey = event.key === "/";
      if (isSlashKey) {
        event.preventDefault();
        openMenu();
        if (searchbar !== null) {
          searchbar.focus();
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.GlobalSearch}>
      <label {...getLabelProps()} className="sr-only">
        Search
      </label>
      <div {...getComboboxProps()}>
        <WrappedTextField
          renderTextField={(className) => (
            <input
              {...getInputProps({ id: globalSearchID })}
              placeholder="Search"
              className={className}
            />
          )}
        />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label={"toggle menu"}
          className="sr-only"
        >
          &#8595;
        </button>
      </div>

      <div {...getMenuProps({})} className={styles.Results}>
        {isOpen && (
          <>
            <div className={styles.Header}>
              <h2>{resultsInRenderedOrder.length} results</h2>
              <p>Tip: Use / to open search</p>
            </div>
          </>
        )}

        {isOpen && (
          <div className={styles.ResultsInner}>
            {searchResults &&
              Object.entries(searchResults)
                .sort((a, b) => a[1].maxScore - b[1].maxScore)
                .map(([category]) => {
                  const typedCategory = category as SearchResultCategory;

                  switch (typedCategory) {
                    case "Foundations":
                      const results = searchResults[typedCategory].results;
                      if (results.length === 0) return null;
                      return (
                        <ResultsGroup title={category}>
                          <h3 className={styles.ResultsGroupName}>
                            {category}
                          </h3>
                          <div className={styles.FoundationsResults}>
                            {results.map((result) => {
                              resultIndex++;
                              return (
                                <li
                                  key={result.meta.title}
                                  className={className(
                                    styles.FoundationsResult,
                                    highlightedIndex === resultIndex &&
                                      styles.isHighlighted
                                  )}
                                >
                                  <Link href={result.url} passHref>
                                    <a>
                                      <h4>{result.meta.title}</h4>
                                      <p>
                                        {stripMarkdownLinks(
                                          result.meta.excerpt
                                        )}
                                      </p>
                                    </a>
                                  </Link>
                                </li>
                              );
                            })}
                          </div>
                        </ResultsGroup>
                      );

                    case "Components": {
                      const results = searchResults[typedCategory].results;
                      if (results.length === 0) return null;
                      return (
                        <ResultsGroup title={category}>
                          <ComponentGrid>
                            {results.map((result) => {
                              resultIndex++;
                              return (
                                <ComponentGrid.Item
                                  key={result.meta.name}
                                  url={""}
                                  description={result.meta.description}
                                  name={result.meta.name}
                                  getItemProps={() =>
                                    getItemProps({
                                      item: result,
                                      index: resultIndex,
                                    })
                                  }
                                  isHighlighted={
                                    highlightedIndex === resultIndex
                                  }
                                />
                              );
                            })}
                          </ComponentGrid>
                        </ResultsGroup>
                      );
                    }

                    case "Tokens": {
                      const results = searchResults[typedCategory].results;
                      if (results.length === 0) return null;
                      return (
                        <ResultsGroup title={category}>
                          <TokenList
                            showTableHeading={false}
                            columns={{
                              preview: true,
                              name: true,
                              figmaUsage: false,
                              value: false,
                              description: true,
                            }}
                          >
                            {results.map((result) => {
                              resultIndex++;
                              return (
                                <TokenList.Item
                                  key={result.meta.token.name}
                                  token={result.meta.token}
                                  getItemProps={() =>
                                    getItemProps({
                                      item: result,
                                      index: resultIndex,
                                    })
                                  }
                                  isHighlighted={
                                    highlightedIndex === resultIndex
                                  }
                                />
                              );
                            })}
                          </TokenList>
                        </ResultsGroup>
                      );
                    }

                    case "Icons": {
                      const results = searchResults[typedCategory].results;
                      if (results.length === 0) return null;
                      return (
                        <ResultsGroup title={category}>
                          <IconGrid>
                            {results.map((result) => {
                              resultIndex++;
                              return (
                                <IconGrid.Item
                                  key={result.url}
                                  icon={result.meta.icon}
                                  onClick={() => undefined}
                                  getItemProps={() =>
                                    getItemProps({
                                      item: result,
                                      index: resultIndex,
                                    })
                                  }
                                  isHighlighted={
                                    highlightedIndex === resultIndex
                                  }
                                />
                              );
                            })}
                          </IconGrid>
                        </ResultsGroup>
                      );
                    }
                  }
                })}
          </div>
        )}
      </div>
    </div>
  );
}

function ResultsGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.ResultsGroup}>
      <h3 className={styles.ResultsGroupName}>{title}</h3>
      {children}
    </div>
  );
}

export default GlobalSearch;
