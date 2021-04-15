import { Alert,Spinner } from 'react-bootstrap';

const Loading = ({loading})=>{
    return (
        <>
            {
                loading ? (
                    <Alert variant="primary">
                        <Spinner animation="border" variant="primary" /> {" "} Loading...
                    </Alert>
                ):
                null
            }
        </>
    )
}
export default Loading;