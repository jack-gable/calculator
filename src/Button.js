import React from "react";

function Button({ label, handleClick }) {
	return (
		<input
			className="w-20 bg-[#4CAF50] border border-[#222] py-2.5 px-5 text-black text-center no-underline inline-block text-base active:bg-[#ccc] rounded"
			type="button"
			value={label}
			onClick={handleClick}
		/>
	);
}

export default Button;
