import React, { ChangeEvent, useEffect, useState } from 'react';

import { BiSearch } from 'react-icons/bi';

import { USERS } from 'api/users';
import style from 'pages/Home/Home.module.scss';

const SearchUsers = () => {
  const [searchText, setSearchText] = useState('');
  const [searchUsers, setSearchUSers] = useState([]);

  const onInputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);

    if (!e.currentTarget.value) {
      setSearchUSers([]);
    }
  };

  useEffect(() => {
    const delayDebaunce = setTimeout(() => {
      if (searchText.length > 1) {
        const fetchSearchUSers = async (): Promise<void> => {
          const response = await USERS.getSearchUsers(searchText);
          setSearchUSers(response.data.items);
        };
        fetchSearchUSers();
      }
    }, 500);

    return () => clearTimeout(delayDebaunce);
  }, [searchText]);

  return (
    <div>
      <div className={style.searchUsers}>
        <input
          placeholder="Search Users..."
          value={searchText}
          onChange={onInputSearchHandler}
        />
        <BiSearch />
        {searchUsers.length > 0 && (
          <div className={style.searchUsersResults}>
            <ul>
              {searchUsers.slice(0, 5).map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchUsers;
