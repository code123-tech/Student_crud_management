import { Alert } from 'react-bootstrap';
const Success = ({message})=>{
    return (
        <>
            {
                message ? (
                    <Alert variant="success">
                        {message}
                    </Alert>
                ):
                null
            }
        </>
    )
}
export default Success;