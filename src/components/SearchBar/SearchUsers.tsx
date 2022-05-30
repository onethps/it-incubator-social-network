import React, { ChangeEvent, useEffect, useState } from 'react';

import { BiSearch } from 'react-icons/bi';

import style from './SearchUsers.module.scss';

import { USERS } from 'api/users';

const SearchUsers = () => {
  const [searchText, setSearchText] = useState('');
  const [searchDataUsers, setSearchDataUSers] = useState([]);

  const onInputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);

    if (!e.currentTarget.value) {
      setSearchDataUSers([]);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchText.length > 1) {
        const fetchSearchUSers = async (): Promise<void> => {
          const response = await USERS.getSearchUsers(searchText);
          setSearchDataUSers(response.data.items);
        };
        fetchSearchUSers();
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  return (
    <>
      <div className={style.search}>
        <div className={style.searchInputs}>
          <input
            type="text"
            placeholder="Search Users..."
            value={searchText}
            onChange={onInputSearchHandler}
          />
          <BiSearch size="20px" />
        </div>
        {/* if we got some results show it */}

        {searchDataUsers.length > 0 && (
          <div className={style.searchUserData}>
            <ul>
              {searchDataUsers.slice(0, 5).map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchUsers;
