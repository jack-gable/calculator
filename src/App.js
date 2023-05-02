import React from "react";
import OutputScreen from "./OutputScreen";
import Button from "./Button";
import "./App.css";

function App() {
	const [question, setQuestion] = React.useState("");
	const [answer, setAnswer] = React.useState("");

	function handleClick(event) {
		const value = event.target.value;

		switch (value) {
			case "=": {
				if (question !== "") {
					let ans = "";
					try {
						ans = eval(question);
					} catch (e) {
						setAnswer("Math Error");
					}
					if (ans === undefined) {
						setAnswer("Math Error");
					} else {
						setAnswer(ans);
						setQuestion("");
					}
				}
				break;
			}

			case "Clear": {
				setAnswer("");
				setQuestion("");
				break;
			}

			case "Delete": {
				let str = question;
				str = str.substring(0, str.length - 1);
				setQuestion(str);
				break;
			}

			default: {
				setQuestion((prevQuestion) => (prevQuestion += value));
				break;
			}
		}
	}

	return (
		<div className="bg-[#252525] w-96 rounded-xl m-auto">
			<div className="m-0 p-2 rounded-none box-border">
				<OutputScreen question={question} answer={answer} />
				<div className="">
					<Button label={"Clear"} handleClick={handleClick} />
					<Button label={"Delete"} handleClick={handleClick} />
					<Button label={"."} handleClick={handleClick} />
					<Button label={"/"} handleClick={handleClick} />
				</div>
				<div className="">
					<Button label={"7"} handleClick={handleClick} />
					<Button label={"8"} handleClick={handleClick} />
					<Button label={"9"} handleClick={handleClick} />
					<Button label={"*"} handleClick={handleClick} />
				</div>
				<div className="">
					<Button label={"4"} handleClick={handleClick} />
					<Button label={"5"} handleClick={handleClick} />
					<Button label={"6"} handleClick={handleClick} />
					<Button label={"-"} handleClick={handleClick} />
				</div>
				<div className="">
					<Button label={"1"} handleClick={handleClick} />
					<Button label={"2"} handleClick={handleClick} />
					<Button label={"3"} handleClick={handleClick} />
					<Button label={"+"} handleClick={handleClick} />
				</div>
				<div className="">
					<Button label={"0"} handleClick={handleClick} />
					<Button label={"="} handleClick={handleClick} />
				</div>
			</div>
		</div>
	);
}

export default App;
