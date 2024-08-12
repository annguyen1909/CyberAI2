import React from 'react'

const Help = () => {
  return (
<div className="bg-gradient-to-r from-black via-zinc-900 to to-black min-h-screen py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-black p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Help & Support</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-black rounded-lg shadow-sm">
              <h3 className="font-bold text-white">How do I reset my password?</h3>
              <p className="text-white">To reset your password, click on the "Forgot Password" link on the login page...</p>
            </li>
            <li className="p-4 bg-black rounded-lg shadow-sm">
              <h3 className="font-bold text-white">How can I contact support?</h3>
              <p className="text-white">You can contact our support team by emailing s3778388@rmit.edu.vn or calling +84-905-941-752</p>
            </li>
            <li className="p-4 bg-black rounded-lg shadow-sm">
              <h3 className="font-bold text-white">Where can I find the user manual?</h3>
              <p className="text-white">The user manual is available in the "Resources" section of our website...</p>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-white">If you have any other questions or need further assistance, feel free to reach out to us:</p>
          <ul className="mt-4 text-white">
            <li>Email: <a href="mailto:support@cyberai.com" className="text-red-500">s3778388@rmit.edu.vn</a></li>
            <li>Phone: +84-905-941-752</li>
            <li>Address: 702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Help