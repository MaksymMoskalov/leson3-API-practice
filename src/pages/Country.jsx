import { Section, Container, CountryInfo, Heading } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const location = useLocation();
  console.log('location: ', location);
  const backLink = location.state?.from ?? '/';
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const infoCountry = async () => {
      try {
        const infoData = await fetchCountry(countryId);
        setCountry(infoData);
      } catch (error) {
        setError(error.message);
      }
    };
    infoCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Link to={backLink}>Back</Link>
        {error && <Heading>Error {error}</Heading>}
        <CountryInfo
          flag={country.flag}
          capital={country.capital}
          country={country.countryName}
          id={country.id}
          languages={country.languages}
          population={country.population}
        />
      </Container>
    </Section>
  );
};
