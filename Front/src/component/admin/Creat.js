import axios from 'axios';
import React, { useState } from 'react'

const Creat = () => {


  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [success, setSuccess] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);


  const handleDataChange = (e) => {
		const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === 2) {
				setImage(reader.result);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	}

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoaded(true)
  
    try {
      const response = await axios.post('/api/cours/', {title,price,image} , {withCredentials: true} );


setSuccess(response.data)
setIsLoaded(false)


    } catch (error) {
      console.error('Error uploading image:', error);
      setIsLoaded(false)

    }
  };



  return (

    <div>
    <div
      id="Creat-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Creat new Course
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="Creat-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={(e)=>setTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type course title"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  onChange={(e)=>setPrice(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="On DT/ Month"
                  required=""
                />
              </div>

              <div className="col-span-2 w-[380px] relative border-2 border-gray-300 border-dashed rounded-lg p-6 " id="dropzone">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 z-50"
                  onChange={handleDataChange}
                />
                <div className="text-center">
                  <img
                    className="mx-auto h-12 w-12"
                    src="https://www.svgrepo.com/show/357902/image-upload.svg"
                    alt=""
                  />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer"
                    >
                      <span>Drag and drop</span>
                      <span className="text-indigo-600"> or browse</span>
                      <span>to upload</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
                <img
                  src=""
                  className="mt-4 mx-auto max-h-40 hidden"
                  id="preview"
                />
              </div>
            </div>

            <div className="flex justify-center">
            {isLoaded && (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            )}
            </div>
            <div className="flex justify-center">
              <p className="text-green-500">{success}</p>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add Course
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Creat