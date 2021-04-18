import React from 'react'
import UseFetchJobs from './UseFetchJobs';
import { Container } from 'react-bootstrap';
const GitHubJobs = () => {
    const {jobs, loading, error} = UseFetchJobs()
    return (
        <Container>
            {loading && <h1>Loading....</h1>}
            {error && <h1>Error..Try refreshing</h1>}
            {<h1>{jobs.length}</h1>}
        </Container>
    )
}

export default GitHubJobs
