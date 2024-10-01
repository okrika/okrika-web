import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: () => (
    <div className="flex w-full h-screen bg-white">
      {/* Left Section with Image for larger screens */}
      <div className="hidden md:block w-2/4 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/shop-cart.png"
          alt="Shopping Cart"
        />
      </div>

      {/* Form Section (Full width on mobile, 50% on larger screens) */}
      <div className="w-full md:w-2/4 flex justify-center items-center bg-white">
        <div className="w-3/4 md:w-2/4 text-center text-black">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold font-montserrat">Welcome</h1>
          <h3 className="text-sm md:text-base mb-6">Login as a Seller</h3>

          {/* Form */}
          <form className="space-y-4 text-black">
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                placeholder="Full name"
                className="w-full p-2 border bg-transparent rounded text-sm font-light placeholder-black"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2"></label>
              <input
                type="text"
                id="phone"
                placeholder="Phone number"
                className="w-full p-2 border bg-transparent text-sm font-light rounded placeholder-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2"></label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full p-2 border bg-transparent text-sm font-light rounded text-black placeholder-black"
                required
              />
            </div>

            <div className="flex items-center mb-4">
              <input id="remember-me" type="checkbox" className="" />
              <label htmlFor="remember-me" className="ml-2 text-sm font-light">
                Remember Me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-3/4 p-2 mb-8 bg-green-500 text-white rounded-full hover:bg-green-400"
            >
              Sign in
            </button>
          </form>
          <h3 className="mt-8 mb-1">Don't have an account</h3>
          {/* Forgot password link with green underline hover */}
          <a
            href=""
            className="text-xs hover:underline hover:underline-offset-4 hover:decoration-green-500"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  )
});
