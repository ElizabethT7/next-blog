'use client';

import { FormEventHandler, useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";
import styles from './Search.module.css'

type Props = {
  onSearch: (value: any[]) => void;
}

export default function Search({ onSearch }: Props) {
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);

    onSearch(posts);
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