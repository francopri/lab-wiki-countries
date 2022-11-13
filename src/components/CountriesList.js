import { Link } from 'react-router-dom';


function CountriesList({ allCountries }) {

    return (

        <div className="col-5 overflow-auto" style={{ maxHeight: '90vh'}}>
            <div className="list-group">

                {
                    allCountries.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country) => {

                        return (

                            <div key={country.alpha3Code}>

                                <Link className="list-group-item list-group-item-action text-center p-4" to={`/${country.alpha3Code}`}>
                                    <div>
                                        <img width={40} alt={country.name.common} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                    </div>
                                    <div style={{fontSize:'14pt', marginTop:'8px'}}>
                                        {country.name.common}
                                    </div>
                                </Link>

                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default CountriesList;