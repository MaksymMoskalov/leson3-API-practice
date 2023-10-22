import { Container, CountryList, Heading, Section } from 'components';
import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';
export const Home = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const countryData = await getCountries();
        setCountry(countryData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchAllCountries();
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading>Error {error}</Heading>}
        <CountryList countries={country} />
      </Container>
    </Section>
  );
};
