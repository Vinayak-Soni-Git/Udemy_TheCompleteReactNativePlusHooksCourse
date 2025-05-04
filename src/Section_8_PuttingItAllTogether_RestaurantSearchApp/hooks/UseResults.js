import { useEffect, useState } from 'react'
import Yelp from '../api/Yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        searchApi('pasta')
    }, [])

    const searchApi = async (searchTerm) => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong.')
        }
    }
    return [searchApi, results, errorMessage]
}
