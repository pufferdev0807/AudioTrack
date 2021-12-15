export default ({unmuteHandler}) => {
    return (
        <div className="icon-btn-audio" onClick={unmuteHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"/>
            </svg>
        </div>
    )
};
