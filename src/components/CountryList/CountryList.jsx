import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, flag }) => {
        return (
          <GridItem key={id}>
            <img src={flag} alt={id} />
          </GridItem>
        );
      })}
    </Grid>
  );
};
