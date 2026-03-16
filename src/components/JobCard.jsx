import React from 'react'
import dayjs from "dayjs";

const JobCard = (props) => {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');
    return (


        <div className="px-4 sm:px-6 md:px-10 lg:px-20 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center 
                  gap-6 px-6 py-6 bg-zinc-200 rounded-xl border 
                  shadow-md hover:border-blue-500 
                  hover:-translate-y-1 hover:shadow-lg transition duration-300">

                {/* Left Section */}
                <div className="flex flex-col items-start gap-3">

                    <h1 className="text-lg sm:text-xl font-semibold">
                        {props.title} - {props.company}
                    </h1>

                    <p className="text-sm sm:text-base text-gray-700">
                        {props.type} &#x2022; {props.experience} &#x2022; {props.location}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        {props.skills.map((skill) => (
                            <p
                                key={skill}
                                className="text-gray-600 text-sm py-1 px-3 rounded-full 
                       border border-gray-400"
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
                    </p>

                    <a href={props.job_link} target="_blank" rel="noopener noreferrer">
                        <button className="w-full sm:w-auto text-blue-600 
                           border border-blue-600 
                           px-6 py-2 rounded-md 
                           hover:bg-blue-600 hover:text-white 
                           transition duration-300">
                            Apply
                        </button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default JobCard