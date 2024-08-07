import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick =()=> {
        console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick =() => {
        console.log("LowerCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange =(event)=> {
        console.log("on change");
        setText(event.target.value);
    }

    const handleClearText = () => {
        setText('');
    };

    //copy text
    const handleCopy = () =>{
        console.log("I am a copy")
        var text = document.getElementById("TextBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    //remove extra spaces
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const [text, setText] = useState('Enter Text Here');
    // correct way to change a state is setText("new name")

  return (
    <>
        <div className="flex items-center justify-center p-5">
            <div className="mb-4 p-6 rounded-lg w-full ">
                <h1 className="block text-xl font-medium text-gray-700 mb-4">{props.heading}</h1>
                <textarea id="TextBox" rows="8" value={text} onChange={handleOnChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-4">

                    <button onClick={handleUpClick} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full md:w-auto text-sm mb-2 md:mb-0">
                        Convert to UpperCase
                    </button>

                    <button onClick={handleLoClick} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full md:w-auto text-sm mb-2 md:mb-0">
                        Convert to LowerCase
                    </button>

                    <button onClick={handleClearText} className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-full md:w-auto text-sm">
                        Clear Text
                    </button>

                    <button onClick={handleCopy} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full md:w-auto text-sm mb-2 md:mb-0">
                        Copy Text
                    </button>

                    <button onClick={handleExtraSpaces} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full md:w-auto text-sm mb-2 md:mb-0">
                        Extra Space Remover
                    </button>

                    </div>
                    <div className='my-2'>
                    <h1>Text Summary</h1>
                    <p>{text.split("").length} Words, {text.length} Characters</p>
                    <p>{0.008 *text.split("").length} Read Time</p>
                    <h2 className='text-xl text-black font-semibold'>Preview</h2>
                    <p className='border-gray-200 border-2 rounded-lg p-2'>{text}</p>
                    </div>
            </div>
        </div>
    </>
  )
}
