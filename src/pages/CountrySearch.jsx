import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  console.log('query: ', query);
  useEffect(() => {
    if (!query) {
      return;
    }
    const searchInfo = async () => {
      try {
        const infoData = await fetchByRegion(query);
        console.log('infoData: ', infoData);
      } catch (error) {}
    };
    searchInfo();
  }, [query]);
  return (
    <Section>
      <Container>
        <SearchForm setQuery={setQuery} />
      </Container>
    </Section>
  );
};
