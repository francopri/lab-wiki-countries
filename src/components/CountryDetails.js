import { Link, useParams } from 'react-router-dom';

function CountryDetails({ allCountries }) {

    function getCountryByAlpha3Code(alpha3Code) {

        const country = allCountries.find((country) => {
            return alpha3Code === country.alpha3Code;
        });

        return country;

    }

    const { countryID } = useParams();

    const countrySelected = getCountryByAlpha3Code(countryID);

    return (

        <div className="col-7 text-center pt-4">
             <img alt={countrySelected.name.common} src={`https://flagpedia.net/data/flags/icon/180x135/${countrySelected.alpha2Code.toLowerCase()}.png`} />
            <h1>{countrySelected.name.common}</h1>
            <table className="table mt-4 ms-4">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{countrySelected.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {countrySelected.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul className='list-unstyled' >
                                {
                                    countrySelected.borders.map((border) => {

                                        const countryBorder = getCountryByAlpha3Code(border);

                                        return (
                                            <li key={countryBorder.alpha3Code}>
                                                <Link to={`/${countryBorder.alpha3Code}`}>{countryBorder.name.common}</Link></li>

                                        )
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;