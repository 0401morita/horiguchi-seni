import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { parse, stringify } from 'query-string';

interface PaginateProps {
  totalPage: number;
  pathname: string;
}

interface PaginateState {
  pages: any;
}

const Paginate: React.FC<PaginateProps> = ({ totalPage, pathname }) => {
  const [pages, setPages] = useState<any>();
  useEffect(() => {
    let current = 1;
    let start = current - 2;
    let end = current + 2;
    let catId = null;
    let tagId = null;

    const search = location.search;
    const searchObj: any = parse(search);

    if (searchObj) {
      if (searchObj.page) {
        current = parseInt(searchObj.page);
      }

      if (searchObj.categories) {
        catId = searchObj.categories;
      }

      if (searchObj.tags) {
        tagId = searchObj.tags;
      }
    }

    if (start < 1 || totalPage < current) {
      start = 1;
      end = 5;

      if (5 > totalPage) {
        end = totalPage;
      }
    } else if (end > totalPage) {
      start = totalPage - (current - 1);
      end = totalPage;
    }

    let res = [];
    for (let i = start; i <= end; i++) {
      res.push({
        page: i,
        active: i == current,
        link: createPaginateQuery(i, catId, tagId)
      });
    }

    setPages(res);
  }, []);

  const createPaginateQuery = (
    page: number,
    catId: number | null,
    tagId: number | null
  ) => {
    let url = '';
    let qsObj = {
      page: page,
      categories: catId,
      tags: tagId
    };

    if (page !== 1 && page !== 0) {
      qsObj.page = page;
    } else {
      delete qsObj.page;
    }

    if (catId === null) {
      delete qsObj.categories;
    }

    if (tagId === null) {
      delete qsObj.tags;
    }

    if (Object.keys(qsObj).length) {
      url += '?' + stringify(qsObj);
    }

    return url;
  };

  if (!pages) {
    return null;
  }

  return (
    <nav className="pagination">
      <ul className="pagination__ul">
        {pages.map(
          (
            {
              page,
              active,
              link
            }: { page: number; active: boolean; link: string },
            index: number
          ) => {
            return (
              <li
                className={`pagination__item${active ? ' active' : ''}`}
                key={index}
              >
                <Link href={`/${pathname}${link}`}>
                  <a className="pagination__link">{page}</a>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default Paginate;
