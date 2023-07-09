'use client';

import { FormEventHandler, useState } from "react";
import styles from './Search.module.css'
import { usePosts } from "@/store";

type Props = {
  onSearch: (value: any[]) => void;
}

export default function Search() {
  const [search, setSearch] = useState('');
  const getPostsBySearch = usePosts(state => state.getPostsBySearch)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await getPostsBySearch(search);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <input 
        type='search'
        placeholder='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search__input}
      />
      <button type='submit' className={styles.search__button}>Search</button>
    </form>
  )
}