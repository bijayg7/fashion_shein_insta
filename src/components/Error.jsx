import React from "react";


function Error() {
	return (
        <div className="error-container">
			<div className="error-body">
				<h1>An unexpected error occured.</h1>
				<p>Please try again later.</p>
				<p className="arrow">&#10227;</p>
			</div>
		</div>
	);
}

export default Error;
