export enum STATUS_ENUM {
    loading = 'loading',
    success = 'success',
    error = 'error'
}

type StatusProps = {
    status: STATUS_ENUM;
}

const Status: React.FC<StatusProps> = ({ status }) => {

    if (status === STATUS_ENUM.loading) {
        return <p>Loading...</p>
    } else if (status === STATUS_ENUM.success) {
        return <p>Loaded successfully</p>
    } else if (status === STATUS_ENUM.error) {
        return <p>Error loading....</p>
    }

    // unreachable as status is an enum.
    return null;
}

export default Status;