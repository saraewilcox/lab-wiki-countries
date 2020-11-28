import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  const displayCountry = () => {
    const { cca3 } = props.match.params;
    const { countries } = props;
    const country = countries.find(country => country.cca3 === cca3);

    const listBorders = () => {
      const { borders } = country;
      return borders.map((cca3) => {
        const country = countries.find(country => country.cca3 === cca3);
        return (
          <li key={cca3}><Link to={`/${cca3}`}>
          {country.name.common}
          </Link></li>
        );
      });
    }

    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="width-30">Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km sq</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {listBorders()}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

    return (
      displayCountry()
    );
}

export default CountryDetail;
