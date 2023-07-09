'use client';

import { FormEventHandler, useState } from "react";
import useSWR from 'swr';
import styles from './Search.module.css'
import { getPostsBySearch } from "@/services/getPosts";
//import { usePosts } from "@/store";

type Props = {
  onSearch: (value: any[]) => void;
}

export default function Search() {
  const { mutate } = useSWR('posts');
  const [search, setSearch] = useState('');
  //const getPostsBySearch = usePosts(state => state.getPostsBySearch)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);

    mutate(posts);
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