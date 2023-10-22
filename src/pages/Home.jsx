import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';
export const Home = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchAllCountries = async () => {
      try {
        const countryData = await getCountries();
        setCountry(countryData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchAllCountries();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={country} />
      </Container>
    </Section>
  );
};
