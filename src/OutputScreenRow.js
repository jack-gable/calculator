import React from "react";

function OutputScreenRow({ value }) {
	return (
		<div>
			<input
				className="w-80 rounded bg-[#ddd] border text-[#222] p-2 text-right"
				type="text"
				readOnly
				value={value}
			/>
		</div>
	);
}

export default OutputScreenRow;
