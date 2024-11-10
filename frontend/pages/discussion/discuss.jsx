import React from "react";
import './discuss.css';
import Comments from "../../components/comments.jsx";

const discuss = () => {
  return (
    <section className="discussion-container py-8 lg:py-16">
      <div className="content-wrapper max-w-2xl mx-auto px-4">
        <div className="header flex justify-between items-center mb-6">
          <h2 className="title text-lg lg:text-2xl font-bold text-dark-900">Discussion (20)</h2>
        </div>
        <Comments/>
        <article className="comment p-6 text-base bg-light-100 rounded-lg">
          <footer className="comment-footer flex justify-between items-center mb-2">
            <div className="user-info flex items-center">
              <p className="user-name inline-flex items-center mr-3 text-sm text-dark-900 font-semibold">
                <img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough" />
                Michael Gough
              </p>
              <p className="timestamp text-sm text-gray-600">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
              </p>
            </div>
            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
              className="settings-btn inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-light-100 rounded-lg hover:bg-light-200 focus:ring-4 focus:ring-gray-50"
              type="button">
              <svg className="icon w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>
            <div id="dropdownComment1" className="settings-menu hidden z-10 w-36 bg-light-100 rounded divide-y divide-gray-100 shadow">
              <ul className="settings-list py-1 text-sm text-dark-700">
                <li>
                  <a href="#" className="menu-item block py-2 px-4 hover:bg-light-200">Edit</a>
                </li>
                <li>
                  <a href="#" className="menu-item block py-2 px-4 hover:bg-light-200">Remove</a>
                </li>
                <li>
                  <a href="#" className="menu-item block py-2 px-4 hover:bg-light-200">Report</a>
                </li>
              </ul>
            </div>
          </footer>
          <p className="comment-text text-dark-500">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.</p>
          <div className="actions flex items-center mt-4 space-x-4">
            <button type="button" className="reply-btn flex items-center text-sm text-dark-500 hover:underline font-medium">
              <svg className="mr-1.5 icon w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
              </svg>
              Reply
            </button>
          </div>
        </article>

        <article className="comment p-6 mb-3 ml-6 text-base bg-light-100 rounded-lg">
          <footer className="comment-footer flex justify-between items-center mb-2">
            <div className="user-info flex items-center">
              <p className="user-name inline-flex items-center mr-3 text-sm text-dark-900 font-semibold">
                <img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese Leos" />
                Jese Leos
              </p>
              <p className="timestamp text-sm text-gray-600">
                <time pubdate datetime="2022-02-12" title="February 12th, 2022">Feb. 12, 2022</time>
              </p>
            </div>
            <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
              className="settings-btn inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-light-100 rounded-lg hover:bg-light-200 focus:ring-4 focus:ring-gray-50"
              type="button">
              <svg className="icon w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>
            <div id="dropdownComment2" className="settings-menu hidden z-10 w-36 bg-light-100 rounded divide-y divide-gray-100 shadow">
              <ul className="settings-list py-1 text-sm text-dark-700">
                <li>
                  <a href="#" className="menu-item block py-2 px-4 hover:bg-light-200">Edit</a>
                </li>
                <li>
                  <a href="#" className="menu-item block py-2 px-4 hover:bg-light-200">Remove</a>
                </li>
                <li>
                  <a href="#" className="menu-item block py-2 px-4 hover:bg-light-200">Report</a>
                </li>
              </ul>
            </div>
          </footer>
          <p className="comment-text text-dark-500">Much appreciated! Glad you liked it ☺️</p>
          <div className="actions flex items-center mt-4 space-x-4">
            <button type="button" className="reply-btn flex items-center text-sm text-dark-500 hover:underline font-medium">
              <svg className="mr-1.5 icon w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
              </svg>
              Reply
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default discuss;
